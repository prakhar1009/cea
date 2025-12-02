# 8. Suggestion & Remediation Pipeline

## Overview

When a control fails, CEA can generate **actionable suggestions** to fix the issue. Suggestions are:
- **Type-aware**: Policy (text), Config (IaC), Code (source)
- **Confidence-scored**: High/Medium/Low based on determinism
- **PR-ready**: Formatted as unified diffs
- **Human-reviewable**: Never auto-applied without approval (unless explicitly configured)

## Suggestion Generation Flow

### 1. Trigger Conditions
```typescript
// services/evaluator.service.ts
async handleFailure(control: Control, evaluation: EvalResult, rule: Rule): Promise<Suggestion[]> {
  const suggestions: Suggestion[] = [];
  
  // Generate config suggestion if deterministic failure
  if (evaluation.status === 'FAIL' && !evaluation.nlpScore) {
    const configSugg = await this.suggestionService.generateConfigSuggestion(
      control,
      evaluation,
      rule
    );
    if (configSugg) suggestions.push(configSugg);
  }
  
  // Generate policy suggestion if NLP drift detected
  if (evaluation.nlpScore && evaluation.nlpScore < rule.nlp?.alignment_threshold) {
    const policySugg = await this.suggestionService.generatePolicySuggestion(
      control,
      evaluation.gaps,
      rule
    );
    if (policySugg) suggestions.push(policySugg);
  }
  
  return suggestions;
}
```

## Config Suggestion Generation

### Template-Based Remediation
```typescript
// services/suggestion.service.ts
async generateConfigSuggestion(
  control: Control,
  evaluation: EvalResult,
  rule: Rule
): Promise<Suggestion | null> {
  
  if (!rule.remediation?.templates?.config) {
    return null; // No template available
  }
  
  const template = rule.remediation.templates.config;
  
  // 1. Identify missing/incorrect facts
  const missingFacts = this.extractMissingFacts(evaluation.rationale);
  
  // 2. Load target file (if exists)
  const targetPath = this.resolvePath(control.projectId, template.target_path);
  const existingContent = await this.loadFile(targetPath).catch(() => '');
  
  // 3. Apply template
  const patchContent = this.renderTemplate(template.patch, {
    controlId: control.controlId,
    missingFacts,
    existingContent,
  });
  
  // 4. Generate unified diff
  const diff = this.createUnifiedDiff(existingContent, patchContent, targetPath);
  
  // 5. Calculate confidence
  const confidence = this.calculateConfidence({
    hasTemplate: true,
    deterministicFailure: !evaluation.nlpScore,
    missingFactsCount: missingFacts.length,
  });
  
  // 6. Create suggestion
  return await this.db.suggestion.create({
    data: {
      controlId: control.id,
      projectId: control.projectId,
      type: 'CONFIG',
      diff,
      targetPath: template.target_path,
      confidence,
      metadata: {
        templateType: template.type,
        missingFacts,
      },
    },
  });
}

private extractMissingFacts(rationale: string): string[] {
  // Parse rationale to find failed conditions
  // e.g., "MFA enforcement: false" → extract "iam.mfa.enforced"
  const factPattern = /(\w+\.\w+(?:\.\w+)*)\s*:\s*(\w+)/g;
  const facts: string[] = [];
  
  let match;
  while ((match = factPattern.exec(rationale)) !== null) {
    facts.push(match[1]);
  }
  
  return facts;
}

private renderTemplate(template: string, context: Record<string, any>): string {
  // Simple template engine (or use Handlebars/Mustache)
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return context[key] || '';
  });
}

private createUnifiedDiff(oldContent: string, newContent: string, filePath: string): string {
  const diff = Diff.createPatch(filePath, oldContent, newContent, 'original', 'patched');
  return diff;
}

private calculateConfidence(factors: {
  hasTemplate: boolean;
  deterministicFailure: boolean;
  missingFactsCount: number;
}): Confidence {
  if (factors.hasTemplate && factors.deterministicFailure && factors.missingFactsCount <= 2) {
    return 'HIGH';
  } else if (factors.hasTemplate) {
    return 'MEDIUM';
  } else {
    return 'LOW';
  }
}
```

### Example: Terraform IAM Policy Fix
**Control**: AC-2 (Account Management)  
**Failure**: `iam.mfa.enforced = false`  
**Template**:
```yaml
remediation:
  templates:
    config:
      type: terraform
      target_path: terraform/iam.tf
      patch: |
        resource "aws_iam_account_password_policy" "strict" {
          minimum_password_length        = 14
          require_lowercase_characters   = true
          require_numbers                = true
          require_uppercase_characters   = true
          require_symbols                = true
          allow_users_to_change_password = true
          max_password_age               = 90
          password_reuse_prevention      = 24
        }
```

**Generated Diff**:
```diff
--- a/terraform/iam.tf
+++ b/terraform/iam.tf
@@ -1,3 +1,13 @@
+resource "aws_iam_account_password_policy" "strict" {
+  minimum_password_length        = 14
+  require_lowercase_characters   = true
+  require_numbers                = true
+  require_uppercase_characters   = true
+  require_symbols                = true
+  allow_users_to_change_password = true
+  max_password_age               = 90
+  password_reuse_prevention      = 24
+}
```

## Policy Suggestion Generation

### NLP-Driven Text Patches
```typescript
async generatePolicySuggestion(
  control: Control,
  gaps: PolicyGap[],
  rule: Rule
): Promise<Suggestion | null> {
  
  if (!gaps || gaps.length === 0) return null;
  
  // 1. Find policy segments that need updating
  const segmentsToUpdate = await this.findRelevantSegments(control.projectId, gaps);
  
  // 2. Generate redline for each gap
  const redlines: Redline[] = [];
  for (const gap of gaps) {
    const segment = segmentsToUpdate.find(s => 
      s.text.toLowerCase().includes(gap.parameter.toLowerCase())
    );
    
    if (segment) {
      const redline = await this.generateRedline(segment, gap);
      redlines.push(redline);
    }
  }
  
  // 3. Consolidate into unified diff
  const diff = this.createPolicyDiff(redlines);
  
  // 4. Calculate confidence (NLP-based = lower than deterministic)
  const confidence = gaps.every(g => g.severity === 'missing') ? 'MEDIUM' : 'LOW';
  
  return await this.db.suggestion.create({
    data: {
      controlId: control.id,
      projectId: control.projectId,
      type: 'POLICY',
      diff,
      targetPath: redlines[0]?.segment.path || 'policies/unknown.md',
      confidence,
      metadata: {
        gaps,
        nlpScore: gaps[0]?.alignmentScore,
      },
    },
  });
}

private async findRelevantSegments(
  projectId: string,
  gaps: PolicyGap[]
): Promise<PolicySegment[]> {
  const parameters = gaps.map(g => g.parameter).join(' ');
  
  // Semantic search in policy corpus
  const results = await this.elasticSearch.search({
    index: `policy-${projectId}`,
    body: {
      query: {
        more_like_this: {
          fields: ['text'],
          like: parameters,
        },
      },
      size: 5,
    },
  });
  
  return results.hits.hits.map(h => h._source as PolicySegment);
}

private async generateRedline(segment: PolicySegment, gap: PolicyGap): Promise<Redline> {
  // Extract existing value from text
  const existingValue = this.extractValue(segment.text, gap.parameter);
  
  // Build replacement
  const oldLine = this.findLineContaining(segment.text, gap.parameter);
  const newLine = this.replaceValue(oldLine, existingValue, gap.expected);
  
  return {
    segment,
    lineNumber: segment.lineNumber,
    old: oldLine,
    new: newLine,
  };
}

private extractValue(text: string, parameter: string): string | null {
  // Example: extract "45 days" from "disable inactive accounts within 45 days"
  const patterns = {
    duration: /(\d+)\s*(days?|hours?|weeks?)/i,
    boolean: /\b(enabled?|disabled?|required?|mandatory)\b/i,
  };
  
  for (const pattern of Object.values(patterns)) {
    const match = text.match(pattern);
    if (match) return match[0];
  }
  
  return null;
}

private replaceValue(line: string, oldValue: string, newValue: string): string {
  return line.replace(oldValue, newValue);
}

private createPolicyDiff(redlines: Redline[]): string {
  // Group by file
  const byFile = this.groupBy(redlines, r => r.segment.path);
  
  let diff = '';
  for (const [file, lines] of Object.entries(byFile)) {
    diff += `--- a/${file}\n+++ b/${file}\n`;
    for (const line of lines) {
      diff += `@@ -${line.lineNumber},1 +${line.lineNumber},1 @@\n`;
      diff += `-${line.old}\n`;
      diff += `+${line.new}\n`;
    }
  }
  
  return diff;
}
```

### Example: Policy Text Redline
**Control**: AC-2 (Account Management)  
**Gap**: `account_inactivity_period: found 45 days, expected ≤30 days`  
**Original Policy** (`policies/access-control.md:L45`):
```markdown
Inactive user accounts must be disabled within 45 days of inactivity.
```

**Generated Diff**:
```diff
--- a/policies/access-control.md
+++ b/policies/access-control.md
@@ -45,1 +45,1 @@
-Inactive user accounts must be disabled within 45 days of inactivity.
+Inactive user accounts must be disabled within 30 days of inactivity.
```

## Suggestion Lifecycle

### State Machine
```typescript
enum SuggestionStatus {
  PENDING = 'pending',       // Just created
  REVIEWED = 'reviewed',     // Human reviewed (approved/rejected)
  APPROVED = 'approved',     // Approved for application
  APPLIED = 'applied',       // Successfully applied
  REJECTED = 'rejected',     // Rejected by human
  FAILED = 'failed',         // Application failed
}

// Transitions
const transitions = {
  pending: ['reviewed', 'approved', 'rejected'],
  reviewed: ['approved', 'rejected'],
  approved: ['applied', 'failed'],
};
```

### Auto-Application Logic (Phase 2)
```typescript
async processSuggestion(suggestion: Suggestion): Promise<void> {
  const rule = await this.ruleEngine.loadRule(
    suggestion.control.frameworkId,
    suggestion.control.controlId
  );
  
  // Check if auto-fix enabled
  const autoFix = rule.remediation?.auto_fix || false;
  const isHighConfidence = suggestion.confidence === 'HIGH';
  const isSafeType = suggestion.type === 'CONFIG'; // Don't auto-apply policy changes
  
  if (autoFix && isHighConfidence && isSafeType) {
    // Auto-apply
    try {
      await this.applySuggestion(suggestion);
      await this.db.suggestion.update({
        where: { id: suggestion.id },
        data: { status: 'APPLIED', appliedAt: new Date() },
      });
      
      // Re-evaluate control
      await this.evaluatorService.evaluateControl(
        suggestion.controlId,
        suggestion.projectId
      );
    } catch (error) {
      await this.db.suggestion.update({
        where: { id: suggestion.id },
        data: { status: 'FAILED', metadata: { error: error.message } },
      });
    }
  } else {
    // Emit event for GitHub Sentinel to create PR
    await this.eventBus.publish('policy.suggestion.created', {
      suggestionId: suggestion.id,
      controlId: suggestion.controlId,
      projectId: suggestion.projectId,
      type: suggestion.type,
      confidence: suggestion.confidence,
    });
  }
}
```

## Integration with GitHub Sentinel

### PR Creation Flow
```typescript
// GitHub Sentinel: Listens to policy.suggestion.created
@EventPattern('policy.suggestion.created')
async handleSuggestion(event: SuggestionCreatedEvent) {
  const suggestion = await this.suggestionService.load(event.suggestionId);
  
  // Only create PRs for high-confidence config suggestions
  if (suggestion.confidence === 'HIGH' && suggestion.type === 'CONFIG') {
    const pr = await this.githubService.createPR({
      title: `[Compliance] Fix ${event.controlId}`,
      body: this.buildPrDescription(suggestion),
      branch: `compliance/fix-${event.controlId}`,
      files: [
        {
          path: suggestion.targetPath,
          content: this.applyDiff(suggestion.diff),
        },
      ],
      labels: ['compliance', 'auto-generated'],
    });
    
    // Link PR to suggestion
    await this.suggestionService.linkPr(suggestion.id, pr.number);
  } else {
    // Create review task for human
    await this.taskService.create({
      title: `Review compliance suggestion for ${event.controlId}`,
      type: 'compliance-review',
      assignee: 'compliance-team',
      metadata: { suggestionId: suggestion.id },
    });
  }
}

private buildPrDescription(suggestion: Suggestion): string {
  return `
## Compliance Fix: ${suggestion.control.controlId}

**Control**: ${suggestion.control.title}  
**Framework**: ${suggestion.control.framework.name}  
**Current Status**: FAIL

### Rationale
${suggestion.control.latestEvaluation.rationale}

### Proposed Fix
\`\`\`diff
${suggestion.diff}
\`\`\`

### Confidence
${suggestion.confidence}

### Evidence
${suggestion.control.latestEvaluation.evidenceRefs.join(', ')}

---
*Auto-generated by Control Enforcement Agent*
  `.trim();
}
```

## Suggestion Review API

### Approve Suggestion
```typescript
// controllers/suggestions.controller.ts
@Post(':suggestionId/approve')
async approveSuggestion(
  @Param('suggestionId') suggestionId: string,
  @Body() body: { comment?: string },
  @CurrentUser() user: User
) {
  const suggestion = await this.suggestionService.findOne(suggestionId);
  
  // Update status
  await this.db.suggestion.update({
    where: { id: suggestionId },
    data: {
      status: 'APPROVED',
      metadata: {
        ...suggestion.metadata,
        approvedBy: user.id,
        approvedAt: new Date(),
        comment: body.comment,
      },
    },
  });
  
  // Trigger application
  await this.suggestionService.processSuggestion(suggestion);
  
  return { success: true };
}
```

### Reject Suggestion
```typescript
@Post(':suggestionId/reject')
async rejectSuggestion(
  @Param('suggestionId') suggestionId: string,
  @Body() body: { reason: string },
  @CurrentUser() user: User
) {
  await this.db.suggestion.update({
    where: { id: suggestionId },
    data: {
      status: 'REJECTED',
      rejectedAt: new Date(),
      metadata: {
        rejectedBy: user.id,
        reason: body.reason,
      },
    },
  });
  
  return { success: true };
}
```

## Suggestion Metrics & Observability

### Tracked Metrics
```typescript
// Prometheus metrics
const suggestionMetrics = {
  created: new Counter({
    name: 'cea_suggestions_created_total',
    help: 'Total suggestions created',
    labelNames: ['type', 'confidence'],
  }),
  
  applied: new Counter({
    name: 'cea_suggestions_applied_total',
    help: 'Total suggestions applied',
    labelNames: ['type'],
  }),
  
  rejected: new Counter({
    name: 'cea_suggestions_rejected_total',
    help: 'Total suggestions rejected',
    labelNames: ['type', 'reason'],
  }),
  
  applicationTime: new Histogram({
    name: 'cea_suggestion_application_duration_seconds',
    help: 'Time to apply suggestion',
    labelNames: ['type'],
  }),
};
```

## Next: Security, Isolation & Auditability
