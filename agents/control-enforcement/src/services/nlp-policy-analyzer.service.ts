// CEA NLP Policy Analyzer Service
// Phase 3: Extract compliance rules from policy documents using AI/NLP

import { Injectable, Logger } from '@nestjs/common';
import { MetricsService } from './metrics.service';

export interface PolicyDocument {
  id: string;
  title: string;
  content: string;
  format: 'markdown' | 'pdf' | 'docx' | 'txt';
  framework?: string;
  version?: string;
  uploadedAt: Date;
}

export interface ExtractedRule {
  id: string;
  policyId: string;
  framework: string;
  title: string;
  description: string;
  requirements: string[];
  conditions: Array<{
    fact: string;
    operator: string;
    value: any;
    confidence: number;
  }>;
  severity: 'critical' | 'high' | 'medium' | 'low';
  confidence: number;
  source: {
    document: string;
    section: string;
    excerpt: string;
  };
  suggestedImplementation?: string;
}

export interface PolicyAnalysisResult {
  policyId: string;
  framework: string;
  extractedRules: ExtractedRule[];
  insights: PolicyInsight[];
  coverage: {
    totalRequirements: number;
    automatableRequirements: number;
    coveragePercentage: number;
  };
  quality: {
    clarity: number;
    completeness: number;
    consistency: number;
  };
}

export interface PolicyInsight {
  type: 'gap' | 'conflict' | 'recommendation' | 'clarification';
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  relatedSections: string[];
  suggestedAction?: string;
}

@Injectable()
export class NlpPolicyAnalyzerService {
  private readonly logger = new Logger(NlpPolicyAnalyzerService.name);
  private openaiApiKey: string;
  private enabled: boolean = false;

  constructor(private readonly metricsService: MetricsService) {
    this.openaiApiKey = process.env.OPENAI_API_KEY || '';
    this.enabled = !!this.openaiApiKey;

    if (this.enabled) {
      this.logger.log('NLP Policy Analyzer enabled with OpenAI');
    } else {
      this.logger.warn('NLP Policy Analyzer disabled - set OPENAI_API_KEY to enable');
    }
  }

  /**
   * Analyze a policy document and extract compliance rules
   */
  async analyzePolicy(policy: PolicyDocument): Promise<PolicyAnalysisResult> {
    if (!this.enabled) {
      this.logger.warn('NLP Policy Analyzer running in DEMO mode without OpenAI API key');
    }

    const startTime = Date.now();
    this.logger.log(`Analyzing policy document: ${policy.title}`);

    try {
      // Parse document content
      const parsedContent = await this.parseDocument(policy);

      // Extract requirements using NLP
      const requirements = await this.extractRequirements(parsedContent);

      // Generate rule definitions from requirements
      const extractedRules = await this.generateRules(
        requirements,
        policy.framework || 'custom',
        policy.id
      );

      // Identify gaps and conflicts
      const insights = await this.generateInsights(parsedContent, extractedRules);

      // Calculate coverage metrics
      const coverage = this.calculateCoverage(requirements, extractedRules);

      // Assess policy quality
      const quality = await this.assessQuality(parsedContent);

      const duration = (Date.now() - startTime) / 1000;
      this.logger.log(
        `Policy analysis complete in ${duration}s. Extracted ${extractedRules.length} rules.`
      );

      return {
        policyId: policy.id,
        framework: policy.framework || 'custom',
        extractedRules,
        insights,
        coverage,
        quality,
      };
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Policy analysis failed: ${err.message}`);
      this.metricsService.incrementErrors('policy_analysis', 'NlpPolicyAnalyzer');
      throw error;
    }
  }

  /**
   * Parse document content based on format
   */
  private async parseDocument(policy: PolicyDocument): Promise<string[]> {
    // In production, would use different parsers for PDF, DOCX, etc.
    // For now, split by paragraphs
    const sections = policy.content
      .split(/\n\n+/)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    this.logger.debug(`Parsed ${sections.length} sections from policy`);
    return sections;
  }

  /**
   * Extract compliance requirements using GPT
   */
  private async extractRequirements(sections: string[]): Promise<string[]> {
    // In production, would call OpenAI API
    // Mock implementation for demonstration
    
    const requirements: string[] = [];

    for (const section of sections) {
      if (this.isRequirementSection(section)) {
        // Extract individual requirements from section
        const sectionRequirements = this.parseRequirementsFromSection(section);
        requirements.push(...sectionRequirements);
      }
    }

    this.logger.debug(`Extracted ${requirements.length} requirements`);
    return requirements;
  }

  /**
   * Use GPT to generate rule definitions from requirements
   */
  private async generateRules(
    requirements: string[],
    framework: string,
    policyId: string
  ): Promise<ExtractedRule[]> {
    const rules: ExtractedRule[] = [];

    for (let i = 0; i < requirements.length; i++) {
      const requirement = requirements[i];

      // In production, would use GPT to analyze requirement and generate rule
      const rule = await this.generateRuleFromRequirement(
        requirement,
        framework,
        policyId,
        i
      );

      if (rule) {
        rules.push(rule);
      }
    }

    return rules;
  }

  /**
   * Generate a single rule from a requirement using AI
   */
  private async generateRuleFromRequirement(
    requirement: string,
    framework: string,
    policyId: string,
    index: number
  ): Promise<ExtractedRule | null> {
    // Mock GPT analysis - in production would call OpenAI API
    const mockGptResponse = this.mockGptAnalysis(requirement, framework);

    if (!mockGptResponse) {
      return null;
    }

    return {
      id: `${policyId}-rule-${index}`,
      policyId,
      framework,
      title: mockGptResponse.title,
      description: mockGptResponse.description,
      requirements: [requirement],
      conditions: mockGptResponse.conditions,
      severity: mockGptResponse.severity,
      confidence: mockGptResponse.confidence,
      source: {
        document: policyId,
        section: `Section ${index + 1}`,
        excerpt: requirement.substring(0, 200),
      },
      suggestedImplementation: mockGptResponse.implementation,
    };
  }

  /**
   * Mock GPT analysis for demonstration
   */
  private mockGptAnalysis(requirement: string, framework: string): any {
    // Pattern matching for common requirements
    const lowerReq = requirement.toLowerCase();

    if (lowerReq.includes('multi-factor') || lowerReq.includes('mfa')) {
      return {
        title: 'Multi-Factor Authentication Required',
        description: 'All users must use multi-factor authentication',
        conditions: [
          {
            fact: 'authentication.mfa.enabled',
            operator: 'equals',
            value: true,
            confidence: 0.95,
          },
        ],
        severity: 'critical',
        confidence: 0.95,
        implementation: 'Configure MFA in authentication system',
      };
    }

    if (lowerReq.includes('encryption') || lowerReq.includes('encrypt')) {
      return {
        title: 'Data Encryption Required',
        description: 'Sensitive data must be encrypted at rest and in transit',
        conditions: [
          {
            fact: 'encryption.at_rest.enabled',
            operator: 'equals',
            value: true,
            confidence: 0.9,
          },
          {
            fact: 'encryption.in_transit.enabled',
            operator: 'equals',
            value: true,
            confidence: 0.9,
          },
        ],
        severity: 'critical',
        confidence: 0.9,
        implementation: 'Enable AES-256 encryption for data storage',
      };
    }

    if (lowerReq.includes('audit') || lowerReq.includes('logging')) {
      return {
        title: 'Audit Logging Required',
        description: 'All access must be logged and retained',
        conditions: [
          {
            fact: 'audit.logging.enabled',
            operator: 'equals',
            value: true,
            confidence: 0.85,
          },
        ],
        severity: 'high',
        confidence: 0.85,
        implementation: 'Configure centralized audit logging',
      };
    }

    // Generic rule for other requirements
    return {
      title: 'Compliance Requirement',
      description: requirement,
      conditions: [
        {
          fact: 'compliance.requirement.met',
          operator: 'equals',
          value: true,
          confidence: 0.6,
        },
      ],
      severity: 'medium',
      confidence: 0.6,
      implementation: 'Manual review and implementation required',
    };
  }

  /**
   * Generate insights about the policy
   */
  private async generateInsights(
    sections: string[],
    rules: ExtractedRule[]
  ): Promise<PolicyInsight[]> {
    const insights: PolicyInsight[] = [];

    // Check for low-confidence rules
    const lowConfidence = rules.filter(r => r.confidence < 0.7);
    if (lowConfidence.length > 0) {
      insights.push({
        type: 'clarification',
        severity: 'medium',
        title: 'Ambiguous Requirements Detected',
        description: `${lowConfidence.length} requirements have low confidence scores and may need clarification`,
        relatedSections: lowConfidence.map(r => r.source.section),
        suggestedAction: 'Review and clarify ambiguous policy language',
      });
    }

    // Check for missing common controls
    const hasEncryption = rules.some(r => r.title.toLowerCase().includes('encryption'));
    if (!hasEncryption) {
      insights.push({
        type: 'gap',
        severity: 'high',
        title: 'No Encryption Requirements Found',
        description: 'Policy does not explicitly require data encryption',
        relatedSections: [],
        suggestedAction: 'Add encryption requirements for data at rest and in transit',
      });
    }

    const hasMfa = rules.some(r => r.title.toLowerCase().includes('multi-factor'));
    if (!hasMfa) {
      insights.push({
        type: 'gap',
        severity: 'high',
        title: 'No MFA Requirements Found',
        description: 'Policy does not mandate multi-factor authentication',
        relatedSections: [],
        suggestedAction: 'Add MFA requirements for all user access',
      });
    }

    return insights;
  }

  /**
   * Calculate coverage metrics
   */
  private calculateCoverage(
    requirements: string[],
    rules: ExtractedRule[]
  ): PolicyAnalysisResult['coverage'] {
    const totalRequirements = requirements.length;
    const automatableRequirements = rules.filter(
      r => r.conditions.length > 0 && r.confidence > 0.7
    ).length;

    return {
      totalRequirements,
      automatableRequirements,
      coveragePercentage: totalRequirements > 0
        ? (automatableRequirements / totalRequirements) * 100
        : 0,
    };
  }

  /**
   * Assess policy quality metrics
   */
  private async assessQuality(sections: string[]): Promise<PolicyAnalysisResult['quality']> {
    // Simple heuristics - in production would use NLP models
    const avgLength = sections.reduce((sum, s) => sum + s.length, 0) / sections.length;
    const hasHeaders = sections.some(s => s.match(/^#{1,3}\s/));

    return {
      clarity: avgLength > 50 && avgLength < 500 ? 0.8 : 0.6,
      completeness: sections.length > 10 ? 0.9 : 0.7,
      consistency: hasHeaders ? 0.85 : 0.7,
    };
  }

  /**
   * Helper: Check if section contains requirements
   */
  private isRequirementSection(section: string): boolean {
    const requirementKeywords = [
      'must',
      'shall',
      'required',
      'mandatory',
      'should',
      'needs to',
      'has to',
    ];

    const lowerSection = section.toLowerCase();
    return requirementKeywords.some(keyword => lowerSection.includes(keyword));
  }

  /**
   * Helper: Parse individual requirements from a section
   */
  private parseRequirementsFromSection(section: string): string[] {
    // Split by sentences that contain requirement keywords
    const sentences = section.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 0);
    return sentences.filter(s => this.isRequirementSection(s));
  }

  /**
   * Convert extracted rule to YAML format
   */
  async generateYamlRule(rule: ExtractedRule): Promise<string> {
    const yaml = `
- id: ${rule.id}
  framework: ${rule.framework}
  title: ${rule.title}
  description: |
    ${rule.description}
  version: "1.0.0"
  when:
${rule.conditions.map(c => `    - fact: ${c.fact}
      ${c.operator}: ${JSON.stringify(c.value)}`).join('\n')}
  passIf: all
  evidence:
${rule.conditions.map(c => `    - ${c.fact}`).join('\n')}
  failMessage: |
    ${rule.title} requirement not met.
    ${rule.suggestedImplementation || 'Manual remediation required.'}
  metadata:
    confidence: ${rule.confidence}
    source: ${rule.source.document}
    severity: ${rule.severity}
`.trim();

    return yaml;
  }

  /**
   * Batch analyze multiple policies
   */
  async analyzePolicies(policies: PolicyDocument[]): Promise<PolicyAnalysisResult[]> {
    const results: PolicyAnalysisResult[] = [];

    for (const policy of policies) {
      try {
        const result = await this.analyzePolicy(policy);
        results.push(result);
      } catch (error) {
        const err = error as Error;
        this.logger.error(`Failed to analyze policy ${policy.id}: ${err.message}`);
      }
    }

    return results;
  }
}
