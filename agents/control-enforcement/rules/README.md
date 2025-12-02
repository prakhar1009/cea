# Control Evaluation Rules

This directory contains YAML-based control evaluation rules for various compliance frameworks.

## Structure

Each rule file contains one or more rules in YAML format:

```yaml
- id: framework-control-id
  framework: nist-800-53-r5
  title: Control Title
  description: |
    Detailed description of the control requirement
  parameters:
    param_name: value
  version: "1.0.0"
  when:
    - fact: fact.key
      equals: expected_value
  passIf: all
  evidence:
    - fact.key.1
    - fact.key.2
  failMessage: |
    Message shown when control fails
```

## Rule Fields

### Required Fields

- **id**: Unique identifier (format: `framework-control-id`)
- **framework**: Framework slug (e.g., `nist-800-53-r5`, `soc2-2017`)
- **title**: Human-readable control title
- **description**: Detailed explanation of the control
- **version**: Semantic version of the rule (e.g., `1.0.0`)
- **when**: Array of conditions to evaluate
- **passIf**: Logic for passing (`all`, `any`, `majority`, `80%`)
- **evidence**: Array of fact keys to include as evidence
- **failMessage**: Message to display when control fails

### Optional Fields

- **parameters**: Framework-specific parameters (e.g., thresholds)
- **manualIf**: Conditions that require manual verification
- **nlp**: NLP-based policy alignment settings (Phase 3)

## Condition Operators

### Equality
```yaml
- fact: iam.mfa.enabled
  equals: true
```

### Existence
```yaml
- fact: sbom.present
  exists: true
```

### Numeric Comparisons
```yaml
- fact: vulnerabilities.critical.count
  lessThanOrEqual: 0

- fact: iam.mfa.coverage_percent
  greaterThan: 95
```

### Age Checks
```yaml
- fact: iam.password.last_changed
  ageLessThan: "90 days"
```

### Regex Matching
```yaml
- fact: config.version
  regex: "^v[0-9]+\\.[0-9]+\\.[0-9]+$"
```

## Pass Logic

- **all**: All conditions must pass (AND)
- **any**: At least one condition must pass (OR)
- **majority**: More than 50% of conditions must pass
- **none**: No conditions should pass (inverse)
- **N%**: Percentage of conditions that must pass (e.g., `80%`)

## Facts

Facts are stored in the `facts` table and referenced by key. Common fact sources:

### IAM Facts
- `iam.mfa.enabled` - MFA enabled
- `iam.rbac.enabled` - RBAC configured
- `iam.account_review.last_date` - Last account review date

### SBOM Facts
- `sbom.present` - SBOM exists
- `sbom.components.count` - Number of components
- `vulnerabilities.critical.count` - Critical vulnerabilities

### Network Facts
- `network.firewall.enabled` - Firewall active
- `network.open_ports.count` - Number of open ports

### VC Facts (Phase 3)
- `vc.access_reviewer.valid` - Valid reviewer credential
- `vc.expiry_date` - Credential expiration

## Testing Rules

Use the rule testing framework:

```typescript
import { RuleEngineService } from './services/rule-engine.service';
import { EvaluatorService } from './services/evaluator.service';

// Load rules
await ruleEngine.loadRules();

// Test evaluation
const result = evaluator.evaluateRule(rule, {
  'iam.mfa.enabled': true,
  'iam.mfa.coverage_percent': 98
});

console.log(result.status); // 'PASS' or 'FAIL'
```

## Adding New Rules

1. Create or edit a YAML file in this directory
2. Follow the structure above
3. Test with golden fixtures
4. Update rule version when modifying existing rules
5. Run validation: `npm run validate:rules`

## Current Rules

### NIST 800-53 Rev 5
- **AC-2**: Account Management
- **AC-3**: Access Enforcement
- **AC-7**: Unsuccessful Logon Attempts
- **IA-2**: Identification and Authentication
- **SC-7**: Boundary Protection

### Coming Soon
- SOC 2 TSC controls (Phase 1)
- PCI DSS 4.0 controls (Phase 2)
- HIPAA controls (Phase 2)
- DORA controls (Phase 3)

## Rule Versioning

Rules use semantic versioning:
- **MAJOR**: Breaking changes to rule logic
- **MINOR**: Backward-compatible additions (new conditions)
- **PATCH**: Bug fixes, clarifications

When a rule is updated, the hash changes, triggering re-evaluation.

## Hash Calculation

Rule hash includes:
- `id`
- `when` conditions
- `passIf` logic
- `evidence` keys

This ensures reproducibility - same rule + same facts = same result.
