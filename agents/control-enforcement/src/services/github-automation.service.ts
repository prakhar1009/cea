// CEA GitHub Automation Service
// Phase 2: Automated PR creation for compliance fixes

import { Injectable, Logger } from '@nestjs/common';
import { Suggestion, SuggestedChange } from './suggestion-engine.service';
import { MetricsService } from './metrics.service';

export interface PullRequestConfig {
  owner: string;
  repo: string;
  branch: string;
  baseBranch: string;
  token: string;
}

export interface CreatePRResult {
  success: boolean;
  prNumber?: number;
  prUrl?: string;
  branchName?: string;
  error?: string;
}

@Injectable()
export class GitHubAutomationService {
  private readonly logger = new Logger(GitHubAutomationService.name);
  private enabled: boolean = false;

  constructor(private readonly metricsService: MetricsService) {
    this.enabled = process.env.ENABLE_GITHUB_AUTOMATION === 'true';
    
    if (this.enabled) {
      this.logger.log('GitHub automation enabled');
    } else {
      this.logger.log('GitHub automation disabled - set ENABLE_GITHUB_AUTOMATION=true to enable');
    }
  }

  /**
   * Create a pull request with suggested fixes
   */
  async createFixPR(
    projectId: string,
    suggestions: Suggestion[],
    config: PullRequestConfig,
  ): Promise<CreatePRResult> {
    if (!this.enabled) {
      return {
        success: false,
        error: 'GitHub automation is disabled',
      };
    }

    try {
      // Filter only automatable suggestions
      const autoFixable = suggestions.filter(s => s.automatable);
      
      if (autoFixable.length === 0) {
        return {
          success: false,
          error: 'No auto-fixable suggestions available',
        };
      }

      // Generate branch name
      const branchName = this.generateBranchName(projectId, autoFixable);

      // Generate commit messages
      const commitMessage = this.generateCommitMessage(autoFixable);

      // Generate PR title and body
      const { title, body } = this.generatePRContent(autoFixable);

      // Simulate PR creation (in real implementation, would call GitHub API)
      this.logger.log(`Would create PR: ${title}`);
      this.logger.log(`Branch: ${branchName}`);
      this.logger.log(`Changes: ${autoFixable.length} suggestions`);

      // In real implementation:
      // 1. Create branch from base
      // 2. Apply changes to files
      // 3. Commit changes
      // 4. Push branch
      // 5. Create PR via GitHub API

      const result: CreatePRResult = {
        success: true,
        prNumber: Math.floor(Math.random() * 1000) + 1, // Mock PR number
        prUrl: `https://github.com/${config.owner}/${config.repo}/pull/mock`,
        branchName,
      };

      this.metricsService.incrementErrors('github_pr_created', 'GitHubAutomation');

      return result;
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Failed to create PR: ${err.message}`);
      this.metricsService.incrementErrors('github_pr_failed', 'GitHubAutomation');
      
      return {
        success: false,
        error: err.message,
      };
    }
  }

  /**
   * Create multiple PRs (one per control or framework)
   */
  async createBatchPRs(
    projectId: string,
    suggestionsByControl: Map<string, Suggestion[]>,
    config: PullRequestConfig,
  ): Promise<CreatePRResult[]> {
    const results: CreatePRResult[] = [];

    for (const [controlId, suggestions] of suggestionsByControl) {
      const result = await this.createFixPR(projectId, suggestions, {
        ...config,
        branch: `cea-fix-${controlId}-${Date.now()}`,
      });
      results.push(result);
    }

    return results;
  }

  /**
   * Apply a single suggested change
   */
  async applySuggestedChange(
    change: SuggestedChange,
    config: PullRequestConfig,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      switch (change.type) {
        case 'file_edit':
          return await this.applyFileEdit(change, config);
        case 'config_update':
          return await this.applyConfigUpdate(change, config);
        case 'workflow_update':
          return await this.applyWorkflowUpdate(change, config);
        default:
          return { success: false, error: `Unknown change type: ${change.type}` };
      }
    } catch (error) {
      const err = error as Error;
      return { success: false, error: err.message };
    }
  }

  /**
   * Generate PR content (title and body)
   */
  private generatePRContent(suggestions: Suggestion[]): { title: string; body: string } {
    const frameworks = new Set(suggestions.map(s => s.references[0]?.split('-')[0] || 'compliance'));
    const frameworksList = Array.from(frameworks).join(', ');

    const title = suggestions.length === 1
      ? `🔒 Compliance Fix: ${suggestions[0].title}`
      : `🔒 Compliance Fixes: ${suggestions.length} improvements for ${frameworksList}`;

    const body = this.generatePRBody(suggestions);

    return { title, body };
  }

  /**
   * Generate detailed PR body
   */
  private generatePRBody(suggestions: Suggestion[]): string {
    let body = '## 🔒 Automated Compliance Fixes\n\n';
    body += 'This PR was automatically generated by the Control Enforcement Agent (CEA) ';
    body += 'to address compliance violations.\n\n';

    body += '### 📋 Summary\n\n';
    body += `- **Total Fixes**: ${suggestions.length}\n`;
    body += `- **Priority**: ${this.getHighestPriority(suggestions)}\n`;
    body += `- **Est. Impact**: ${this.calculateImpact(suggestions)}\n`;
    body += `- **Frameworks**: ${this.getFrameworks(suggestions).join(', ')}\n\n`;

    body += '### 🛠️ Changes\n\n';
    for (const suggestion of suggestions) {
      body += `#### ${suggestion.title}\n\n`;
      body += `**Priority**: ${suggestion.priority.toUpperCase()}\n\n`;
      body += `**Description**: ${suggestion.description}\n\n`;
      body += `**Rationale**: ${suggestion.rationale}\n\n`;
      body += `**Impact**: ${suggestion.impact}\n\n`;

      if (suggestion.changes.length > 0) {
        body += '**Changes Made**:\n';
        for (const change of suggestion.changes) {
          body += `- ${change.action} \`${change.target}\`\n`;
          if (change.preview) {
            body += `  - ${change.preview}\n`;
          }
        }
        body += '\n';
      }

      if (suggestion.references.length > 0) {
        body += `**References**: ${suggestion.references.join(', ')}\n\n`;
      }

      body += '---\n\n';
    }

    body += '### ✅ Testing\n\n';
    body += '- [ ] Manual testing completed\n';
    body += '- [ ] Compliance checks passed\n';
    body += '- [ ] No regressions introduced\n\n';

    body += '### 📚 Documentation\n\n';
    body += 'For more information about these compliance requirements, see:\n';
    body += '- [CEA Documentation](https://github.com/compiledger/cea/tree/main/docs)\n';
    body += '- [Compliance Frameworks](https://github.com/compiledger/cea/tree/main/agents/control-enforcement/rules)\n\n';

    body += '---\n\n';
    body += '*🤖 This PR was automatically generated by CEA. ';
    body += 'Review carefully before merging.*';

    return body;
  }

  /**
   * Generate branch name
   */
  private generateBranchName(projectId: string, suggestions: Suggestion[]): string {
    const timestamp = Date.now();
    const framework = suggestions[0]?.references[0]?.split('-')[0] || 'compliance';
    return `cea/fix-${framework}-${projectId.substring(0, 8)}-${timestamp}`;
  }

  /**
   * Generate commit message
   */
  private generateCommitMessage(suggestions: Suggestion[]): string {
    if (suggestions.length === 1) {
      const s = suggestions[0];
      return `fix(compliance): ${s.title}\n\n${s.description}\n\nFramework: ${s.references[0] || 'N/A'}`;
    }

    let message = `fix(compliance): Address ${suggestions.length} compliance issues\n\n`;
    message += 'Changes:\n';
    for (const s of suggestions) {
      message += `- ${s.title}\n`;
    }
    message += `\nFrameworks: ${this.getFrameworks(suggestions).join(', ')}`;
    
    return message;
  }

  /**
   * Apply file edit
   */
  private async applyFileEdit(
    change: SuggestedChange,
    config: PullRequestConfig,
  ): Promise<{ success: boolean; error?: string }> {
    // In real implementation:
    // 1. Fetch current file content
    // 2. Apply edit
    // 3. Commit change
    
    this.logger.log(`Would apply file edit to: ${change.target}`);
    return { success: true };
  }

  /**
   * Apply config update
   */
  private async applyConfigUpdate(
    change: SuggestedChange,
    config: PullRequestConfig,
  ): Promise<{ success: boolean; error?: string }> {
    // In real implementation:
    // 1. Fetch config file
    // 2. Update configuration
    // 3. Validate
    // 4. Commit change
    
    this.logger.log(`Would update config: ${change.target}`);
    return { success: true };
  }

  /**
   * Apply workflow update
   */
  private async applyWorkflowUpdate(
    change: SuggestedChange,
    config: PullRequestConfig,
  ): Promise<{ success: boolean; error?: string }> {
    // In real implementation:
    // 1. Create or update workflow file
    // 2. Validate YAML
    // 3. Commit change
    
    this.logger.log(`Would update workflow: ${change.target}`);
    return { success: true };
  }

  /**
   * Helper methods
   */
  private getHighestPriority(suggestions: Suggestion[]): string {
    const priorities = ['critical', 'high', 'medium', 'low'];
    for (const priority of priorities) {
      if (suggestions.some(s => s.priority === priority)) {
        return priority.toUpperCase();
      }
    }
    return 'MEDIUM';
  }

  private calculateImpact(suggestions: Suggestion[]): string {
    const criticalCount = suggestions.filter(s => s.priority === 'critical').length;
    const highCount = suggestions.filter(s => s.priority === 'high').length;

    if (criticalCount > 0) return 'Critical - Immediate action required';
    if (highCount > 2) return 'High - Significant security improvements';
    return 'Medium - Important compliance enhancements';
  }

  private getFrameworks(suggestions: Suggestion[]): string[] {
    const frameworks = new Set<string>();
    for (const s of suggestions) {
      if (s.references.length > 0) {
        const framework = s.references[0].split('-')[0] || 'compliance';
        frameworks.add(framework.toUpperCase());
      }
    }
    return Array.from(frameworks);
  }
}
