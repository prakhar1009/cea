// Rule Engine Service
// Loads, caches, and manages control evaluation rules

import { Injectable, Logger } from '@nestjs/common';
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import * as yaml from 'yaml';
import { hashData } from '@compiledger/common';
import type { Rule } from '@compiledger/common';

@Injectable()
export class RuleEngineService {
  private readonly logger = new Logger(RuleEngineService.name);
  private ruleCache = new Map<string, Rule>();
  private rulesPath: string;

  constructor() {
    // Rules stored in agents/control-enforcement/rules/
    this.rulesPath = join(__dirname, '../../rules');
  }

  /**
   * Load all rules from YAML files
   */
  async loadRules(): Promise<void> {
    this.logger.log(`Loading rules from ${this.rulesPath}`);

    try {
      const files = await readdir(this.rulesPath);
      const yamlFiles = files.filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'));

      let loadedCount = 0;
      for (const file of yamlFiles) {
        const filePath = join(this.rulesPath, file);
        const content = await readFile(filePath, 'utf-8');
        const rules = yaml.parse(content);

        // Support both single rule and array of rules
        const ruleArray = Array.isArray(rules) ? rules : [rules];

        for (const rule of ruleArray) {
          // Calculate rule hash for reproducibility
          const ruleHash = hashData({
            id: rule.id,
            when: rule.when,
            passIf: rule.passIf,
            evidence: rule.evidence,
          });

          const enrichedRule: Rule = {
            ...rule,
            hash: ruleHash,
          };

          this.ruleCache.set(rule.id, enrichedRule);
          loadedCount++;
        }
      }

      this.logger.log(`✓ Loaded ${loadedCount} rules from ${yamlFiles.length} files`);
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Failed to load rules: ${err.message}`, err.stack);
      throw error;
    }
  }

  /**
   * Get a rule by ID
   */
  getRule(ruleId: string): Rule | undefined {
    return this.ruleCache.get(ruleId);
  }

  /**
   * Get all rules for a framework
   */
  getRulesByFramework(framework: string): Rule[] {
    return Array.from(this.ruleCache.values()).filter((rule) => rule.framework === framework);
  }

  /**
   * Get all loaded rules
   */
  getAllRules(): Rule[] {
    return Array.from(this.ruleCache.values());
  }

  /**
   * Validate rule structure
   */
  validateRule(rule: any): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!rule.id) errors.push('Missing required field: id');
    if (!rule.framework) errors.push('Missing required field: framework');
    if (!rule.title) errors.push('Missing required field: title');
    if (!rule.description) errors.push('Missing required field: description');
    if (!rule.version) errors.push('Missing required field: version');
    if (!rule.when || !Array.isArray(rule.when)) {
      errors.push('Missing or invalid field: when (must be array)');
    }
    if (!rule.evidence || !Array.isArray(rule.evidence)) {
      errors.push('Missing or invalid field: evidence (must be array)');
    }
    if (!rule.passIf) errors.push('Missing required field: passIf');
    if (!rule.failMessage) errors.push('Missing required field: failMessage');

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  /**
   * Reload rules (for hot-reloading in development)
   */
  async reloadRules(): Promise<void> {
    this.ruleCache.clear();
    await this.loadRules();
  }

  /**
   * Get rule cache statistics
   */
  getStats() {
    const frameworks = new Set(Array.from(this.ruleCache.values()).map((r) => r.framework));

    return {
      totalRules: this.ruleCache.size,
      frameworks: Array.from(frameworks),
      frameworkCounts: Array.from(frameworks).map((fw) => ({
        framework: fw,
        count: this.getRulesByFramework(fw).length,
      })),
    };
  }
}
