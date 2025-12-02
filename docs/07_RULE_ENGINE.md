# 7. Rule Engine Architecture

## Design Philosophy

### Principles
1. **Declarative**: Rules as YAML/JSON, not code
2. **Versioned**: Every rule bundle has semver + hash
3. **Signed**: Provenance via Ed25519 signatures
4. **Composable**: Rules can reference other rules
5. **Extensible**: NLP hooks without refactoring core logic
6. **Testable**: Golden test fixtures for every rule

## Rule Structure

### YAML Rule Definition
```yaml
# agents/control-enforcement/src/rules/nist-800-53-r5/AC-2.yaml
id: AC-2
framework: nist-800-53-r5
title: Account Management
family: Access Control
criticality: high

description: |
  The organization manages information system accounts, including
  establishing, activating, modifying, reviewing, disabling, and removing accounts.

parameters:
  account_inactivity_period: 30 days
  require_mfa: true
  require_approval: true

# Deterministic evaluation logic
when:
  - fact: iam.mfa.enforced
    equals: true
    
  - fact: iam.account_review.last_run
    age_less_than: 90 days
    
  - fact: iam.inactive_account_policy.max_days
    less_than_or_equal: 30

# Evidence collection
evidence:
  - iam.mfa.enforced
  - iam.account_review.last_run
  - iam.inactive_account_policy.max_days
  - policy_segment:access-control

# Pass criteria
pass_if: all  # Options: all, any, majority

# Failure message
fail_message: |
  MFA enforcement: {iam.mfa.enforced}
  Last account review: {iam.account_review.last_run}
  Inactive account policy: {iam.inactive_account_policy.max_days} days (required ≤30)

# Manual escalation conditions
manual_if:
  - fact: environment.airgapped
    equals: true
    note: "Air-gapped environments require manual evidence upload"

# NLP policy alignment (Phase 3)
nlp:
  enabled: true
  policy_search_query: "account management inactive MFA"
  required_constraints:
    - parameter: account_inactivity_period
      operator: less_than_or_equal
      value: 30 days
    - parameter: require_mfa
      operator: equals
      value: true
  alignment_threshold: 0.85

# Remediation templates (Phase 2)
remediation:
  auto_fix: false  # True = apply automatically if safe
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
    
    policy:
      type: markdown
      target_path: policies/access-control.md
      instructions: |
        Update section "Account Lifecycle Management" to include:
        - Inactive accounts disabled within 30 days
        - MFA required for all privileged accounts

# Control hierarchy
parent: AC
children:
  - AC-2(1)  # Automated System Account Management
  - AC-2(2)  # Automated Temporary Account Management
  - AC-2(3)  # Disable Accounts

# Metadata
tags:
  - access-control
  - identity
  - mfa
  - automated

# Versioning
version: 1.2.0
last_updated: 2024-11-15
author: nist
```

## Rule Loading & Caching

### Bundle Structure
```
agents/control-enforcement/src/rules/
├── nist-800-53-r5/
│   ├── bundle.json           # Signed manifest
│   ├── AC-2.yaml
│   ├── AC-6.yaml
│   ├── CM-8.yaml
│   └── ...
├── soc2-2017/
│   ├── bundle.json
│   ├── CC6.1.yaml
│   └── ...
└── loader.ts
```

### Bundle Manifest (bundle.json)
```json
{
  "framework": "nist-800-53-r5",
  "version": "1.2.0",
  "hash": "sha256:abcdef123456...",
  "signature": "ed25519:signature_base64...",
  "publicKey": "ed25519:public_key_base64...",
  "rules": [
    {
      "id": "AC-2",
      "file": "AC-2.yaml",
      "hash": "sha256:rule_hash..."
    }
  ],
  "metadata": {
    "catalogUrl": "https://raw.githubusercontent.com/usnistgov/oscal-content/main/nist.gov/SP800-53/rev5/json/NIST_SP-800-53_rev5_catalog.json",
    "publishedDate": "2024-11-15T00:00:00Z",
    "author": "nist"
  }
}
```

### Rule Loader Service
```typescript
// services/rule-engine.service.ts
@Injectable()
export class RuleEngineService {
  private ruleCache = new Map<string, Rule>();
  private bundleVersions = new Map<string, string>();

  async loadRule(frameworkSlug: string, controlId: string): Promise<Rule> {
    const cacheKey = `${frameworkSlug}:${controlId}`;
    
    // Check cache
    if (this.ruleCache.has(cacheKey)) {
      return this.ruleCache.get(cacheKey);
    }
    
    // Load bundle if not loaded
    if (!this.bundleVersions.has(frameworkSlug)) {
      await this.loadBundle(frameworkSlug);
    }
    
    // Load rule file
    const rulePath = path.join(__dirname, 'rules', frameworkSlug, `${controlId}.yaml`);
    const ruleYaml = await fs.readFile(rulePath, 'utf-8');
    const rule = yaml.parse(ruleYaml) as Rule;
    
    // Validate rule structure
    this.validateRule(rule);
    
    // Cache
    this.ruleCache.set(cacheKey, rule);
    
    return rule;
  }

  private async loadBundle(frameworkSlug: string): Promise<void> {
    const bundlePath = path.join(__dirname, 'rules', frameworkSlug, 'bundle.json');
    const bundle: RuleBundle = JSON.parse(await fs.readFile(bundlePath, 'utf-8'));
    
    // Verify hash
    const computedHash = await this.hashBundle(frameworkSlug, bundle.rules);
    if (computedHash !== bundle.hash) {
      throw new Error(`Bundle integrity check failed for ${frameworkSlug}`);
    }
    
    // Verify signature (if present)
    if (bundle.signature && bundle.publicKey) {
      const valid = await this.verifySignature(bundle);
      if (!valid) {
        throw new Error(`Bundle signature verification failed for ${frameworkSlug}`);
      }
    }
    
    this.bundleVersions.set(frameworkSlug, bundle.version);
    this.logger.info(`Loaded rule bundle: ${frameworkSlug} v${bundle.version}`);
  }

  private async hashBundle(frameworkSlug: string, rules: RuleManifest[]): Promise<string> {
    const hashes = await Promise.all(
      rules.map(async r => {
        const content = await fs.readFile(
          path.join(__dirname, 'rules', frameworkSlug, r.file),
          'utf-8'
        );
        return createHash('sha256').update(content).digest('hex');
      })
    );
    
    // Hash of hashes
    return createHash('sha256')
      .update(hashes.join(''))
      .digest('hex');
  }

  private async verifySignature(bundle: RuleBundle): Promise<boolean> {
    const message = `${bundle.framework}:${bundle.version}:${bundle.hash}`;
    const signature = Buffer.from(bundle.signature.replace('ed25519:', ''), 'base64');
    const publicKey = Buffer.from(bundle.publicKey.replace('ed25519:', ''), 'base64');
    
    return ed25519.verify(signature, Buffer.from(message), publicKey);
  }

  private validateRule(rule: Rule): void {
    const required = ['id', 'framework', 'title', 'when'];
    for (const field of required) {
      if (!rule[field]) {
        throw new Error(`Rule ${rule.id} missing required field: ${field}`);
      }
    }
    
    // Validate condition operators
    for (const condition of rule.when) {
      this.validateCondition(condition);
    }
  }
}
```

## Rule Evaluation Engine

### Condition Evaluator
```typescript
// services/rule-engine.service.ts (continued)
export class RuleEngineService {
  async evaluateConditions(conditions: Condition[], facts: FactMap): Promise<ConditionResult> {
    const results = await Promise.all(
      conditions.map(c => this.evaluateCondition(c, facts))
    );
    
    return {
      matched: results.every(r => r.matched),
      results,
      missing: results.filter(r => !r.matched).map(r => r.fact),
    };
  }

  private async evaluateCondition(condition: Condition, facts: FactMap): Promise<ConditionMatch> {
    const factValue = facts[condition.fact];
    
    if (factValue === undefined) {
      return { fact: condition.fact, matched: false, reason: 'fact_missing' };
    }
    
    let matched = false;
    let reason = '';
    
    // Equality checks
    if (condition.equals !== undefined) {
      matched = factValue === condition.equals;
      reason = matched ? 'equals' : `expected ${condition.equals}, got ${factValue}`;
    }
    
    // Comparison operators
    else if (condition.greater_than !== undefined) {
      matched = factValue > condition.greater_than;
      reason = matched ? 'greater_than' : `expected >${condition.greater_than}, got ${factValue}`;
    }
    else if (condition.less_than_or_equal !== undefined) {
      matched = factValue <= condition.less_than_or_equal;
      reason = matched ? 'less_than_or_equal' : `expected ≤${condition.less_than_or_equal}, got ${factValue}`;
    }
    
    // Regex matching
    else if (condition.regex) {
      matched = new RegExp(condition.regex).test(String(factValue));
      reason = matched ? 'regex_match' : `pattern ${condition.regex} not matched`;
    }
    
    // Time-based checks
    else if (condition.age_less_than) {
      const age = Date.now() - new Date(factValue).getTime();
      const threshold = this.parseDuration(condition.age_less_than);
      matched = age < threshold;
      reason = matched ? 'age_check' : `age ${age}ms exceeds ${threshold}ms`;
    }
    
    // Existence checks
    else if (condition.exists !== undefined) {
      matched = (factValue !== null && factValue !== undefined) === condition.exists;
      reason = matched ? 'existence' : `expected exists=${condition.exists}`;
    }
    
    return { fact: condition.fact, matched, value: factValue, reason };
  }

  private parseDuration(duration: string): number {
    const match = duration.match(/(\d+)\s*(days?|hours?|minutes?|seconds?)/);
    if (!match) throw new Error(`Invalid duration: ${duration}`);
    
    const value = parseInt(match[1]);
    const unit = match[2].replace(/s$/, ''); // Remove plural
    
    const multipliers = {
      second: 1000,
      minute: 60 * 1000,
      hour: 60 * 60 * 1000,
      day: 24 * 60 * 60 * 1000,
    };
    
    return value * multipliers[unit];
  }
}
```

### Pass Logic Resolver
```typescript
private applyPassLogic(passIf: string, conditionResult: ConditionResult): boolean {
  const { results } = conditionResult;
  const matchedCount = results.filter(r => r.matched).length;
  
  switch (passIf) {
    case 'all':
      return matchedCount === results.length;
    
    case 'any':
      return matchedCount > 0;
    
    case 'majority':
      return matchedCount > results.length / 2;
    
    case 'none': // Inverse logic for negative controls
      return matchedCount === 0;
    
    default:
      // Custom threshold (e.g., "80%")
      if (passIf.endsWith('%')) {
        const threshold = parseInt(passIf) / 100;
        return matchedCount / results.length >= threshold;
      }
      throw new Error(`Unknown pass_if logic: ${passIf}`);
  }
}
```

## NLP Integration Hooks (Phase 3)

### NLP-Enabled Rule Evaluation
```typescript
async evaluateWithNlp(control: Control, facts: FactMap): Promise<EvalResult> {
  const rule = await this.loadRule(control.frameworkId, control.controlId);
  
  // 1. Deterministic evaluation
  const detResult = await this.evaluateDeterministic(rule, facts);
  
  // 2. If NLP enabled and deterministic passed, check policy alignment
  if (rule.nlp?.enabled && detResult.status === 'PASS') {
    const nlpResult = await this.nlpService.checkAlignment(
      control,
      rule.nlp.policy_search_query,
      rule.nlp.required_constraints
    );
    
    if (nlpResult.score < rule.nlp.alignment_threshold) {
      return {
        status: 'FAIL',
        rationale: `Policy drift: alignment ${nlpResult.score.toFixed(2)} < threshold ${rule.nlp.alignment_threshold}`,
        evidence: [...detResult.evidence, ...nlpResult.matchedSegments],
        nlpScore: nlpResult.score,
        gaps: nlpResult.gaps,
      };
    }
  }
  
  return detResult;
}
```

### Constraint Extraction (NLP)
```typescript
// nlp/constraint-extractor.ts
export class ConstraintExtractor {
  async extractFromPolicy(text: string, parameter: string): Promise<ExtractedConstraint | null> {
    // Use spaCy + regex for structured extraction
    const patterns = {
      duration: /(?:within|≤|<=|less than)\s*(\d+)\s*(days?|hours?|weeks?)/i,
      boolean: /\b(require[sd]?|must|mandatory)\s+(\w+)/i,
      frequency: /(?:every|at least)\s*(\d+)\s*(days?|weeks?|months?)/i,
    };
    
    for (const [type, pattern] of Object.entries(patterns)) {
      const match = text.match(pattern);
      if (match) {
        return {
          parameter,
          type,
          value: this.normalizeValue(match, type),
          confidence: this.calculateConfidence(text, parameter),
        };
      }
    }
    
    // Fallback: LLM extraction for complex cases
    if (this.openai) {
      return await this.llmExtract(text, parameter);
    }
    
    return null;
  }
}
```

## Rule Versioning Strategy

### Semantic Versioning
- **Major** (1.0.0 → 2.0.0): Breaking change (fact schema change, logic change)
- **Minor** (1.0.0 → 1.1.0): New conditions, additional evidence
- **Patch** (1.0.0 → 1.0.1): Typo fixes, description updates

### Migration Path
```typescript
// Migration script for rule v1 → v2
async migrateRuleset(fromVersion: string, toVersion: string) {
  const migrations = [
    {
      from: '1.0.0',
      to: '2.0.0',
      changes: {
        'AC-2': {
          renamedFacts: {
            'iam.mfa_enabled': 'iam.mfa.enforced',
          },
          newConditions: ['iam.account_review.last_run'],
        },
      },
    },
  ];
  
  const migration = migrations.find(m => m.from === fromVersion && m.to === toVersion);
  if (!migration) throw new Error('No migration path found');
  
  // Apply migrations
  for (const [controlId, changes] of Object.entries(migration.changes)) {
    await this.applyMigration(controlId, changes);
  }
}
```

## Rule Testing Framework

### Golden Test Fixtures
```yaml
# agents/control-enforcement/tests/rules/AC-2.test.yaml
rule: AC-2
framework: nist-800-53-r5

tests:
  - name: "All requirements met"
    facts:
      iam.mfa.enforced: true
      iam.account_review.last_run: "2024-11-01T00:00:00Z"
      iam.inactive_account_policy.max_days: 30
    expected:
      status: pass
      rationale: "All requirements satisfied"

  - name: "MFA not enforced"
    facts:
      iam.mfa.enforced: false
      iam.account_review.last_run: "2024-11-01T00:00:00Z"
      iam.inactive_account_policy.max_days: 30
    expected:
      status: fail
      rationale_contains: "MFA enforcement: false"

  - name: "Inactive account policy too lenient"
    facts:
      iam.mfa.enforced: true
      iam.account_review.last_run: "2024-11-01T00:00:00Z"
      iam.inactive_account_policy.max_days: 45
    expected:
      status: fail
      rationale_contains: "45 days (required ≤30)"

  - name: "Air-gapped environment (manual)"
    facts:
      environment.airgapped: true
    expected:
      status: manual
      rationale_contains: "Air-gapped environments"
```

### Test Runner
```typescript
// tests/rule-tester.ts
describe('Rule: AC-2', () => {
  const testFixture = yaml.parse(fs.readFileSync('tests/rules/AC-2.test.yaml', 'utf-8'));
  
  for (const test of testFixture.tests) {
    it(test.name, async () => {
      const result = await ruleEngine.evaluateControl(
        { controlId: 'AC-2', frameworkId: 'nist-800-53-r5' },
        test.facts
      );
      
      expect(result.status).toBe(test.expected.status);
      
      if (test.expected.rationale_contains) {
        expect(result.rationale).toContain(test.expected.rationale_contains);
      }
    });
  }
});
```

## Next: Suggestion & Remediation Pipeline
