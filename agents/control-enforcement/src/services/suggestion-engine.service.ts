// CEA Suggestion Engine Service
// Phase 2: Automated remediation suggestions and smart recommendations

import { Injectable, Logger } from '@nestjs/common';
import { RuleEngineService } from './rule-engine.service';
import { FactStoreService } from './fact-store.service';
import { MetricsService } from './metrics.service';

export interface Suggestion {
  id: string;
  controlId: string;
  type: 'config_fix' | 'policy_update' | 'workflow_change' | 'documentation';
  priority: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  rationale: string;
  impact: string;
  effort: 'low' | 'medium' | 'high';
  automatable: boolean;
  changes: SuggestedChange[];
  references: string[];
  createdAt: Date;
}

export interface SuggestedChange {
  type: 'file_edit' | 'config_update' | 'policy_change' | 'workflow_update';
  target: string;
  action: 'create' | 'update' | 'delete';
  content?: string;
  diff?: string;
  preview?: string;
}

export interface RemediationPlan {
  controlId: string;
  status: 'FAIL' | 'MANUAL';
  suggestions: Suggestion[];
  estimatedTime: string;
  complexity: 'simple' | 'moderate' | 'complex';
  canAutoFix: boolean;
}

@Injectable()
export class SuggestionEngineService {
  private readonly logger = new Logger(SuggestionEngineService.name);

  // Knowledge base for common fixes
  private readonly remediationPatterns = new Map<string, any>();

  constructor(
    private readonly ruleEngine: RuleEngineService,
    private readonly factStore: FactStoreService,
    private readonly metricsService: MetricsService,
  ) {
    this.initializeRemediationPatterns();
  }

  /**
   * Generate suggestions for a failed control
   */
  async generateSuggestions(
    controlId: string,
    projectId: string,
    evaluationResult: any,
  ): Promise<Suggestion[]> {
    const startTime = Date.now();

    try {
      const control = evaluationResult.control;
      const rule = await this.ruleEngine.getRule(control.ruleId);
      
      if (!rule) {
        this.logger.warn(`Rule not found for control ${controlId}`);
        return [];
      }

      const suggestions: Suggestion[] = [];

      // Analyze failed conditions
      const failedConditions = evaluationResult.conditions?.filter(
        (c: any) => c.result === false
      ) || [];

      for (const condition of failedConditions) {
        const suggestion = await this.generateConditionSuggestion(
          controlId,
          projectId,
          rule,
          condition
        );
        if (suggestion) {
          suggestions.push(suggestion);
        }
      }

      // Add framework-specific suggestions
      const frameworkSuggestions = await this.generateFrameworkSuggestions(
        rule.framework,
        controlId,
        projectId,
        failedConditions
      );
      suggestions.push(...frameworkSuggestions);

      // Sort by priority
      suggestions.sort((a, b) => {
        const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });

      const duration = (Date.now() - startTime) / 1000;
      this.logger.log(
        `Generated ${suggestions.length} suggestions for control ${controlId} in ${duration}s`
      );

      return suggestions;
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Error generating suggestions: ${err.message}`);
      this.metricsService.incrementErrors('suggestion_generation', 'SuggestionEngine');
      return [];
    }
  }

  /**
   * Generate suggestion for a specific failed condition
   */
  private async generateConditionSuggestion(
    controlId: string,
    projectId: string,
    rule: any,
    condition: any,
  ): Promise<Suggestion | null> {
    const factKey = condition.fact;
    const operator = condition.operator;
    const expectedValue = condition.value;
    const actualValue = condition.factValue;

    // Look up remediation pattern
    const pattern = this.remediationPatterns.get(factKey) || 
                   this.remediationPatterns.get(`${rule.framework}.${factKey}`);

    if (!pattern) {
      // Generate generic suggestion
      return this.generateGenericSuggestion(
        controlId,
        rule,
        factKey,
        operator,
        expectedValue,
        actualValue
      );
    }

    // Generate specific suggestion from pattern
    return this.generatePatternBasedSuggestion(
      controlId,
      rule,
      pattern,
      condition
    );
  }

  /**
   * Generate generic suggestion when no pattern matches
   */
  private generateGenericSuggestion(
    controlId: string,
    rule: any,
    factKey: string,
    operator: string,
    expectedValue: any,
    actualValue: any,
  ): Suggestion {
    const suggestionId = `${controlId}-${factKey}-${Date.now()}`;
    
    return {
      id: suggestionId,
      controlId,
      type: 'config_fix',
      priority: this.determinePriority(rule.framework),
      title: `Update ${factKey}`,
      description: `The fact "${factKey}" needs to be updated to meet compliance requirements.`,
      rationale: `Current value: ${JSON.stringify(actualValue)}\nExpected: ${operator} ${JSON.stringify(expectedValue)}`,
      impact: 'Updating this configuration will bring the system into compliance.',
      effort: 'medium',
      automatable: false,
      changes: [
        {
          type: 'config_update',
          target: factKey,
          action: 'update',
          preview: `Set ${factKey} to ${JSON.stringify(expectedValue)}`,
        },
      ],
      references: [rule.id],
      createdAt: new Date(),
    };
  }

  /**
   * Generate suggestion based on remediation pattern
   */
  private generatePatternBasedSuggestion(
    controlId: string,
    rule: any,
    pattern: any,
    condition: any,
  ): Suggestion {
    const suggestionId = `${controlId}-${pattern.id}-${Date.now()}`;

    return {
      id: suggestionId,
      controlId,
      type: pattern.type || 'config_fix',
      priority: pattern.priority || 'medium',
      title: pattern.title,
      description: pattern.description,
      rationale: this.interpolate(pattern.rationale, condition),
      impact: pattern.impact,
      effort: pattern.effort || 'medium',
      automatable: pattern.automatable || false,
      changes: pattern.changes.map((change: any) => ({
        ...change,
        content: change.content ? this.interpolate(change.content, condition) : undefined,
      })),
      references: [rule.id, ...(pattern.references || [])],
      createdAt: new Date(),
    };
  }

  /**
   * Generate framework-specific suggestions
   */
  private async generateFrameworkSuggestions(
    framework: string,
    controlId: string,
    projectId: string,
    failedConditions: any[],
  ): Promise<Suggestion[]> {
    const suggestions: Suggestion[] = [];

    switch (framework) {
      case 'nist-800-53-r5':
        suggestions.push(...this.generateNISTSuggestions(controlId, failedConditions));
        break;
      case 'soc2':
        suggestions.push(...this.generateSOC2Suggestions(controlId, failedConditions));
        break;
      case 'hipaa':
        suggestions.push(...this.generateHIPAASuggestions(controlId, failedConditions));
        break;
      case 'pci-dss':
        suggestions.push(...this.generatePCIDSSSuggestions(controlId, failedConditions));
        break;
      case 'iso-27001':
        suggestions.push(...this.generateISOSuggestions(controlId, failedConditions));
        break;
    }

    return suggestions;
  }

  /**
   * Generate NIST-specific suggestions
   */
  private generateNISTSuggestions(controlId: string, failedConditions: any[]): Suggestion[] {
    const suggestions: Suggestion[] = [];

    for (const condition of failedConditions) {
      if (condition.fact.includes('mfa')) {
        suggestions.push({
          id: `${controlId}-mfa-${Date.now()}`,
          controlId,
          type: 'config_fix',
          priority: 'critical',
          title: 'Enable Multi-Factor Authentication',
          description: 'Multi-factor authentication (MFA) is required for all user accounts.',
          rationale: 'NIST 800-53 requires MFA for all users accessing organizational systems.',
          impact: 'Significantly improves authentication security and prevents unauthorized access.',
          effort: 'medium',
          automatable: true,
          changes: [
            {
              type: 'config_update',
              target: 'authentication.config',
              action: 'update',
              content: JSON.stringify({ mfa: { enabled: true, methods: ['totp', 'sms'] } }, null, 2),
              preview: 'Enable MFA with TOTP and SMS methods',
            },
          ],
          references: ['NIST 800-53 IA-2'],
          createdAt: new Date(),
        });
      }

      if (condition.fact.includes('encryption')) {
        suggestions.push({
          id: `${controlId}-encryption-${Date.now()}`,
          controlId,
          type: 'config_fix',
          priority: 'critical',
          title: 'Enable Data Encryption',
          description: 'Enable encryption for data at rest and in transit.',
          rationale: 'NIST 800-53 SC-28 requires cryptographic protection for data at rest.',
          impact: 'Protects sensitive data from unauthorized disclosure.',
          effort: 'high',
          automatable: false,
          changes: [
            {
              type: 'config_update',
              target: 'encryption.config',
              action: 'update',
              preview: 'Enable AES-256 encryption for data at rest',
            },
          ],
          references: ['NIST 800-53 SC-28', 'NIST 800-53 SC-8'],
          createdAt: new Date(),
        });
      }
    }

    return suggestions;
  }

  /**
   * Generate SOC 2 suggestions
   */
  private generateSOC2Suggestions(controlId: string, failedConditions: any[]): Suggestion[] {
    const suggestions: Suggestion[] = [];

    for (const condition of failedConditions) {
      if (condition.fact.includes('access.review')) {
        suggestions.push({
          id: `${controlId}-access-review-${Date.now()}`,
          controlId,
          type: 'workflow_change',
          priority: 'high',
          title: 'Implement Quarterly Access Reviews',
          description: 'Establish a process for reviewing user access rights quarterly.',
          rationale: 'SOC 2 CC6.2 requires periodic review of access rights.',
          impact: 'Ensures users have appropriate access and no excessive privileges.',
          effort: 'medium',
          automatable: true,
          changes: [
            {
              type: 'workflow_update',
              target: '.github/workflows/access-review.yml',
              action: 'create',
              content: `name: Quarterly Access Review
on:
  schedule:
    - cron: '0 0 1 */3 *'  # First day of every quarter

jobs:
  access-review:
    runs-on: ubuntu-latest
    steps:
      - name: Generate Access Report
        run: |
          echo "Generating user access report..."
          # Add script to generate report
      - name: Create Issue
        uses: actions/create-issue@v1
        with:
          title: 'Q\${{ github.run_number }} Access Review'
          body: 'Please review user access rights'`,
              preview: 'Create automated quarterly access review workflow',
            },
          ],
          references: ['SOC 2 CC6.2'],
          createdAt: new Date(),
        });
      }
    }

    return suggestions;
  }

  /**
   * Generate HIPAA suggestions
   */
  private generateHIPAASuggestions(controlId: string, failedConditions: any[]): Suggestion[] {
    const suggestions: Suggestion[] = [];

    for (const condition of failedConditions) {
      if (condition.fact.includes('audit.logging')) {
        suggestions.push({
          id: `${controlId}-audit-logging-${Date.now()}`,
          controlId,
          type: 'config_fix',
          priority: 'critical',
          title: 'Enable Comprehensive Audit Logging',
          description: 'Enable audit logging for all ePHI access and modifications.',
          rationale: 'HIPAA § 164.312(b) requires audit controls to record ePHI access.',
          impact: 'Enables tracking of all ePHI access for security and compliance.',
          effort: 'medium',
          automatable: true,
          changes: [
            {
              type: 'config_update',
              target: 'logging.config',
              action: 'update',
              content: JSON.stringify({
                audit: {
                  enabled: true,
                  logEPHIAccess: true,
                  retentionDays: 2555, // 7 years
                  destinations: ['cloudwatch', 's3'],
                },
              }, null, 2),
              preview: 'Enable audit logging with 7-year retention',
            },
          ],
          references: ['HIPAA § 164.312(b)'],
          createdAt: new Date(),
        });
      }
    }

    return suggestions;
  }

  /**
   * Generate PCI-DSS suggestions
   */
  private generatePCIDSSSuggestions(controlId: string, failedConditions: any[]): Suggestion[] {
    const suggestions: Suggestion[] = [];

    for (const condition of failedConditions) {
      if (condition.fact.includes('cardholder_data.encryption')) {
        suggestions.push({
          id: `${controlId}-chd-encryption-${Date.now()}`,
          controlId,
          type: 'config_fix',
          priority: 'critical',
          title: 'Encrypt Cardholder Data',
          description: 'Enable strong encryption for all stored cardholder data.',
          rationale: 'PCI-DSS Requirement 3 mandates encryption of stored cardholder data.',
          impact: 'Protects payment card information from unauthorized access.',
          effort: 'high',
          automatable: false,
          changes: [
            {
              type: 'config_update',
              target: 'database.encryption',
              action: 'update',
              preview: 'Enable AES-256 encryption for cardholder data fields',
            },
          ],
          references: ['PCI-DSS Req 3.4'],
          createdAt: new Date(),
        });
      }
    }

    return suggestions;
  }

  /**
   * Generate ISO 27001 suggestions
   */
  private generateISOSuggestions(controlId: string, failedConditions: any[]): Suggestion[] {
    const suggestions: Suggestion[] = [];

    for (const condition of failedConditions) {
      if (condition.fact.includes('policy')) {
        suggestions.push({
          id: `${controlId}-policy-${Date.now()}`,
          controlId,
          type: 'documentation',
          priority: 'high',
          title: 'Create Information Security Policy',
          description: 'Develop and document an information security policy.',
          rationale: 'ISO 27001 A.5.1 requires documented information security policies.',
          impact: 'Establishes security governance and compliance framework.',
          effort: 'high',
          automatable: false,
          changes: [
            {
              type: 'file_edit',
              target: 'docs/policies/information-security-policy.md',
              action: 'create',
              preview: 'Create information security policy document template',
            },
          ],
          references: ['ISO 27001 A.5.1'],
          createdAt: new Date(),
        });
      }
    }

    return suggestions;
  }

  /**
   * Create a complete remediation plan
   */
  async createRemediationPlan(
    controlId: string,
    projectId: string,
    evaluationResult: any,
  ): Promise<RemediationPlan> {
    const suggestions = await this.generateSuggestions(
      controlId,
      projectId,
      evaluationResult
    );

    const canAutoFix = suggestions.some(s => s.automatable);
    const totalEffort = this.calculateTotalEffort(suggestions);
    const complexity = this.determineComplexity(suggestions);

    return {
      controlId,
      status: evaluationResult.status,
      suggestions,
      estimatedTime: totalEffort,
      complexity,
      canAutoFix,
    };
  }

  /**
   * Initialize remediation patterns knowledge base
   */
  private initializeRemediationPatterns() {
    // MFA pattern
    this.remediationPatterns.set('authentication.mfa.enabled', {
      id: 'mfa-enable',
      type: 'config_fix',
      priority: 'critical',
      title: 'Enable Multi-Factor Authentication',
      description: 'Configure MFA for all user accounts',
      rationale: 'MFA significantly reduces the risk of unauthorized access',
      impact: 'High security improvement with minimal user impact',
      effort: 'medium',
      automatable: true,
      changes: [
        {
          type: 'config_update',
          target: 'auth.config.json',
          action: 'update',
          content: '{ "mfa": { "enabled": true, "required": true } }',
        },
      ],
      references: [],
    });

    // Add more patterns as needed
    this.logger.log(`Initialized ${this.remediationPatterns.size} remediation patterns`);
  }

  /**
   * Helper methods
   */
  private determinePriority(framework: string): 'critical' | 'high' | 'medium' | 'low' {
    // Higher priority for regulated frameworks
    if (['hipaa', 'pci-dss'].includes(framework)) return 'critical';
    if (['nist-800-53-r5', 'iso-27001'].includes(framework)) return 'high';
    return 'medium';
  }

  private calculateTotalEffort(suggestions: Suggestion[]): string {
    const effortHours = { low: 2, medium: 8, high: 24 };
    const total = suggestions.reduce((sum, s) => sum + effortHours[s.effort], 0);
    
    if (total < 4) return '< 4 hours';
    if (total < 16) return '1-2 days';
    if (total < 40) return '1 week';
    return '> 1 week';
  }

  private determineComplexity(suggestions: Suggestion[]): 'simple' | 'moderate' | 'complex' {
    const highEffort = suggestions.filter(s => s.effort === 'high').length;
    const nonAutomatable = suggestions.filter(s => !s.automatable).length;

    if (highEffort > 2 || nonAutomatable > 3) return 'complex';
    if (highEffort > 0 || nonAutomatable > 0) return 'moderate';
    return 'simple';
  }

  private interpolate(template: string, data: any): string {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => data[key] || match);
  }
}
