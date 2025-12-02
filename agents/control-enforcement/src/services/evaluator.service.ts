// Evaluator Service
// Evaluates controls based on rules and facts

import { Injectable, Logger } from '@nestjs/common';
import { RuleEngineService } from './rule-engine.service';
import { FactStoreService } from './fact-store.service';
import { hashData, parseDuration } from '@compiledger/common';
import type { Rule, RuleCondition, EvaluationResult, FactMap } from '@compiledger/common';
import { ControlStatus } from '@compiledger/common';

@Injectable()
export class EvaluatorService {
  private readonly logger = new Logger(EvaluatorService.name);

  constructor(
    private readonly ruleEngine: RuleEngineService,
    private readonly factStore: FactStoreService
  ) {}

  /**
   * Evaluate a single control
   */
  async evaluateControl(params: {
    projectId: string;
    controlId: string;
    ruleId: string;
  }): Promise<EvaluationResult> {
    const { projectId, ruleId } = params;

    // Get rule
    const rule = this.ruleEngine.getRule(ruleId);
    if (!rule) {
      throw new Error(`Rule not found: ${ruleId}`);
    }

    // Get all facts for project
    const facts = await this.factStore.getAllFacts(projectId);

    // Evaluate rule against facts
    return this.evaluateRule(rule, facts);
  }

  /**
   * Evaluate a rule against facts
   */
  evaluateRule(rule: Rule, facts: FactMap): EvaluationResult {
    this.logger.debug(`Evaluating rule: ${rule.id}`);

    // Check if manual evaluation is required
    if (rule.manualIf) {
      const requiresManual = this.evaluateConditions(rule.manualIf, facts, 'all');
      if (requiresManual) {
        return {
          status: ControlStatus.MANUAL,
          rationale: 'Manual verification required based on rule conditions',
          evidence: [],
        };
      }
    }

    // Evaluate main conditions
    const conditionsPass = this.evaluateConditions(rule.when, facts, rule.passIf);

    if (conditionsPass) {
      return {
        status: ControlStatus.PASS,
        rationale: `All required conditions met: ${rule.title}`,
        evidence: this.collectEvidence(rule.evidence, facts),
      };
    } else {
      return {
        status: ControlStatus.FAIL,
        rationale: rule.failMessage,
        evidence: this.collectEvidence(rule.evidence, facts),
      };
    }
  }

  /**
   * Evaluate multiple conditions based on pass logic
   */
  private evaluateConditions(
    conditions: RuleCondition[],
    facts: FactMap,
    passIf: string
  ): boolean {
    const results = conditions.map((condition) => this.evaluateCondition(condition, facts));

    switch (passIf) {
      case 'all':
        return results.every((r) => r);
      case 'any':
        return results.some((r) => r);
      case 'none':
        return results.every((r) => !r);
      case 'majority':
        const passCount = results.filter((r) => r).length;
        return passCount > results.length / 2;
      default:
        // Check if it's a percentage (e.g., "80%")
        const percentMatch = passIf.match(/(\d+)%/);
        if (percentMatch) {
          const requiredPercent = parseInt(percentMatch[1]);
          const passCount = results.filter((r) => r).length;
          const actualPercent = (passCount / results.length) * 100;
          return actualPercent >= requiredPercent;
        }
        // Default to 'all'
        return results.every((r) => r);
    }
  }

  /**
   * Evaluate a single condition
   */
  private evaluateCondition(condition: RuleCondition, facts: FactMap): boolean {
    const factValue = facts[condition.fact];

    // Check existence
    if ('exists' in condition) {
      return condition.exists ? factValue !== undefined && factValue !== null : !factValue;
    }

    // If fact doesn't exist, condition fails
    if (factValue === undefined || factValue === null) {
      return false;
    }

    // Equality check
    if ('equals' in condition) {
      return factValue === condition.equals;
    }

    // Numeric comparisons
    if ('greaterThan' in condition) {
      return Number(factValue) > condition.greaterThan!;
    }

    if ('lessThan' in condition) {
      return Number(factValue) < condition.lessThan!;
    }

    if ('lessThanOrEqual' in condition) {
      return Number(factValue) <= condition.lessThanOrEqual!;
    }

    // Regex match
    if ('regex' in condition && condition.regex) {
      const regex = new RegExp(condition.regex);
      return regex.test(String(factValue));
    }

    // Age check (for dates)
    if ('ageLessThan' in condition && condition.ageLessThan) {
      try {
        const maxAgeMs = parseDuration(condition.ageLessThan);
        const factDate = new Date(factValue);
        const ageMs = Date.now() - factDate.getTime();
        return ageMs < maxAgeMs;
      } catch (error) {
        const err = error as Error;
        this.logger.warn(`Failed to parse duration or date: ${err.message}`);
        return false;
      }
    }

    // If no operator matched, condition passes if fact exists
    return true;
  }

  /**
   * Collect evidence based on evidence keys
   */
  private collectEvidence(evidenceKeys: string[], facts: FactMap): string[] {
    const evidence: string[] = [];

    for (const key of evidenceKeys) {
      const value = facts[key];
      if (value !== undefined && value !== null) {
        evidence.push(`${key}: ${JSON.stringify(value)}`);
      }
    }

    return evidence;
  }

  /**
   * Batch evaluate multiple controls
   */
  async evaluateBatch(params: {
    projectId: string;
    controlIds: string[];
  }): Promise<Map<string, EvaluationResult>> {
    const { projectId, controlIds } = params;
    const results = new Map<string, EvaluationResult>();

    // Get facts once for all evaluations
    const facts = await this.factStore.getAllFacts(projectId);

    // Get all controls from database
    const controls = await this.getControlsByIds(controlIds);

    for (const control of controls) {
      try {
        const rule = this.ruleEngine.getRule(`${control.frameworkId}-${control.controlId}`);
        if (!rule) {
          this.logger.warn(`No rule found for control: ${control.controlId}`);
          continue;
        }

        const result = this.evaluateRule(rule, facts);
        results.set(control.id, result);
      } catch (error) {
        const err = error as Error;
        this.logger.error(`Failed to evaluate control ${control.id}: ${err.message}`);
      }
    }

    return results;
  }

  /**
   * Helper to get controls from database
   */
  private async getControlsByIds(controlIds: string[]) {
    const { prisma } = await import('@compiledger/database');
    return prisma.control.findMany({
      where: { id: { in: controlIds } },
    });
  }

  /**
   * Calculate facts hash for reproducibility
   */
  calculateFactsHash(facts: FactMap): string {
    return hashData(facts);
  }
}
