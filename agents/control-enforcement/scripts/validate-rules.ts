#!/usr/bin/env ts-node
// Rule Validation Script
// Week 3: Validate YAML rule files for correctness and completeness

import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';

interface ValidationError {
  file: string;
  ruleId?: string;
  field?: string;
  message: string;
  severity: 'error' | 'warning';
}

interface RuleSchema {
  id: string;
  framework: string;
  title: string;
  description: string;
  parameters?: Record<string, any>;
  version: string;
  when: Array<{
    fact: string;
    equals?: any;
    greaterThan?: number;
    lessThan?: number;
    greaterThanOrEqual?: number;
    lessThanOrEqual?: number;
    ageLessThan?: string;
  }>;
  passIf: 'all' | 'any';
  evidence: string[];
  failMessage: string;
  manualIf?: Array<{
    fact: string;
    equals?: any;
  }>;
}

class RuleValidator {
  private errors: ValidationError[] = [];
  private warnings: ValidationError[] = [];
  private rulesDirectory: string;
  private validFrameworks = ['nist-800-53-r5', 'soc2', 'hipaa', 'pci-dss', 'iso-27001'];
  private ruleIds = new Set<string>();

  constructor(rulesDir: string) {
    this.rulesDirectory = rulesDir;
  }

  validate(): boolean {
    console.log('🔍 Validating control rules...\n');

    const ruleFiles = this.getRuleFiles();
    
    if (ruleFiles.length === 0) {
      console.error('❌ No rule files found');
      return false;
    }

    for (const file of ruleFiles) {
      this.validateFile(file);
    }

    this.printResults();
    return this.errors.length === 0;
  }

  private getRuleFiles(): string[] {
    const files = fs.readdirSync(this.rulesDirectory);
    return files
      .filter(f => f.endsWith('.yaml') || f.endsWith('.yml'))
      .map(f => path.join(this.rulesDirectory, f));
  }

  private validateFile(filePath: string): void {
    const fileName = path.basename(filePath);
    console.log(`Validating ${fileName}...`);

    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const rules = yaml.parse(content);

      if (!Array.isArray(rules)) {
        this.addError(fileName, undefined, undefined, 'File must contain an array of rules');
        return;
      }

      for (const rule of rules) {
        this.validateRule(fileName, rule);
      }

    } catch (error) {
      const err = error as Error;
      this.addError(fileName, undefined, undefined, `YAML parse error: ${err.message}`);
    }
  }

  private validateRule(file: string, rule: any): void {
    // Required fields
    const requiredFields = ['id', 'framework', 'title', 'description', 'version', 'when', 'passIf', 'evidence', 'failMessage'];
    
    for (const field of requiredFields) {
      if (!rule[field]) {
        this.addError(file, rule.id, field, `Missing required field: ${field}`);
      }
    }

    if (!rule.id) return; // Can't continue without ID

    // Check for duplicate IDs
    if (this.ruleIds.has(rule.id)) {
      this.addError(file, rule.id, 'id', 'Duplicate rule ID');
    } else {
      this.ruleIds.add(rule.id);
    }

    // Validate framework
    if (rule.framework && !this.validFrameworks.includes(rule.framework)) {
      this.addWarning(file, rule.id, 'framework', `Unknown framework: ${rule.framework}`);
    }

    // Validate ID format
    if (rule.id && rule.framework) {
      const expectedPrefix = rule.framework.toLowerCase();
      if (!rule.id.startsWith(expectedPrefix)) {
        this.addWarning(file, rule.id, 'id', `ID should start with framework prefix: ${expectedPrefix}`);
      }
    }

    // Validate version format
    if (rule.version && !rule.version.match(/^\d+\.\d+\.\d+$/)) {
      this.addError(file, rule.id, 'version', 'Version must follow semver format (e.g., 1.0.0)');
    }

    // Validate when conditions
    if (rule.when) {
      if (!Array.isArray(rule.when)) {
        this.addError(file, rule.id, 'when', 'when field must be an array');
      } else {
        for (let i = 0; i < rule.when.length; i++) {
          this.validateCondition(file, rule.id, rule.when[i], i);
        }
      }
    }

    // Validate passIf
    if (rule.passIf && !['all', 'any'].includes(rule.passIf)) {
      this.addError(file, rule.id, 'passIf', 'passIf must be "all" or "any"');
    }

    // Validate evidence
    if (rule.evidence) {
      if (!Array.isArray(rule.evidence)) {
        this.addError(file, rule.id, 'evidence', 'evidence must be an array');
      } else if (rule.evidence.length === 0) {
        this.addWarning(file, rule.id, 'evidence', 'evidence array is empty');
      }
    }

    // Validate title length
    if (rule.title && rule.title.length < 10) {
      this.addWarning(file, rule.id, 'title', 'Title is too short (minimum 10 characters recommended)');
    }

    // Validate description length
    if (rule.description && rule.description.length < 50) {
      this.addWarning(file, rule.id, 'description', 'Description is too short (minimum 50 characters recommended)');
    }

    // Validate failMessage
    if (rule.failMessage && rule.failMessage.length < 20) {
      this.addWarning(file, rule.id, 'failMessage', 'Fail message is too short');
    }
  }

  private validateCondition(file: string, ruleId: string, condition: any, index: number): void {
    if (!condition.fact) {
      this.addError(file, ruleId, `when[${index}]`, 'Condition missing fact field');
      return;
    }

    const operators = [
      'equals',
      'greaterThan',
      'lessThan',
      'greaterThanOrEqual',
      'lessThanOrEqual',
      'ageLessThan',
      'ageGreaterThan',
      'contains',
      'notEquals'
    ];

    const hasOperator = operators.some(op => condition[op] !== undefined);
    if (!hasOperator) {
      this.addError(file, ruleId, `when[${index}]`, 'Condition missing operator (equals, greaterThan, etc.)');
    }

    // Validate ageLessThan/ageGreaterThan format
    if (condition.ageLessThan && !this.isValidDuration(condition.ageLessThan)) {
      this.addError(file, ruleId, `when[${index}].ageLessThan`, 'Invalid duration format (use "90 days", "1 year", etc.)');
    }
  }

  private isValidDuration(duration: string): boolean {
    return /^\d+\s+(day|days|hour|hours|week|weeks|month|months|year|years)$/.test(duration);
  }

  private addError(file: string, ruleId: string | undefined, field: string | undefined, message: string): void {
    this.errors.push({ file, ruleId, field, message, severity: 'error' });
  }

  private addWarning(file: string, ruleId: string | undefined, field: string | undefined, message: string): void {
    this.warnings.push({ file, ruleId, field, message, severity: 'warning' });
  }

  private printResults(): void {
    console.log('\n' + '='.repeat(60));
    console.log('Validation Results');
    console.log('='.repeat(60));

    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ All rules are valid!\n');
      console.log(`Total rules validated: ${this.ruleIds.size}`);
      return;
    }

    if (this.errors.length > 0) {
      console.log('\n❌ Errors:');
      for (const error of this.errors) {
        this.printIssue(error);
      }
    }

    if (this.warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      for (const warning of this.warnings) {
        this.printIssue(warning);
      }
    }

    console.log('\nSummary:');
    console.log(`  Total rules: ${this.ruleIds.size}`);
    console.log(`  Errors: ${this.errors.length}`);
    console.log(`  Warnings: ${this.warnings.length}`);
  }

  private printIssue(issue: ValidationError): void {
    let location = issue.file;
    if (issue.ruleId) location += ` (${issue.ruleId})`;
    if (issue.field) location += ` [${issue.field}]`;
    console.log(`  ${location}: ${issue.message}`);
  }
}

// Main execution
function main() {
  const rulesDir = path.join(__dirname, '..', 'rules');
  
  if (!fs.existsSync(rulesDir)) {
    console.error(`❌ Rules directory not found: ${rulesDir}`);
    process.exit(1);
  }

  const validator = new RuleValidator(rulesDir);
  const isValid = validator.validate();

  process.exit(isValid ? 0 : 1);
}

if (require.main === module) {
  main();
}

export { RuleValidator, ValidationError };
