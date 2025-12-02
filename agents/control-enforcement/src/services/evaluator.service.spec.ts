// Evaluator Service Unit Tests

import { Test, TestingModule } from '@nestjs/testing';
import { EvaluatorService } from './evaluator.service';
import { RuleEngineService } from './rule-engine.service';
import { FactStoreService } from './fact-store.service';
import { ControlStatus } from '@compiledger/common';
import type { Rule, FactMap } from '@compiledger/common';

describe('EvaluatorService', () => {
  let service: EvaluatorService;
  let ruleEngine: RuleEngineService;
  let factStore: FactStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluatorService, RuleEngineService, FactStoreService],
    }).compile();

    service = module.get<EvaluatorService>(EvaluatorService);
    ruleEngine = module.get<RuleEngineService>(RuleEngineService);
    factStore = module.get<FactStoreService>(FactStoreService);
  });

  describe('evaluateRule', () => {
    it('should pass when all conditions are met', () => {
      const rule: Rule = {
        id: 'test-rule',
        framework: 'nist-800-53-r5',
        title: 'Test Rule',
        description: 'Test',
        parameters: {},
        version: '1.0.0',
        when: [
          { fact: 'iam.mfa.enabled', equals: true },
          { fact: 'iam.mfa.coverage_percent', greaterThan: 95 },
        ],
        passIf: 'all',
        evidence: ['iam.mfa.enabled', 'iam.mfa.coverage_percent'],
        failMessage: 'MFA not properly configured',
        hash: 'test-hash',
      };

      const facts: FactMap = {
        'iam.mfa.enabled': true,
        'iam.mfa.coverage_percent': 98,
      };

      const result = service.evaluateRule(rule, facts);

      expect(result.status).toBe(ControlStatus.PASS);
      expect(result.evidence.length).toBeGreaterThan(0);
    });

    it('should fail when conditions are not met', () => {
      const rule: Rule = {
        id: 'test-rule',
        framework: 'nist-800-53-r5',
        title: 'Test Rule',
        description: 'Test',
        parameters: {},
        version: '1.0.0',
        when: [
          { fact: 'iam.mfa.enabled', equals: true },
          { fact: 'iam.mfa.coverage_percent', greaterThan: 95 },
        ],
        passIf: 'all',
        evidence: ['iam.mfa.enabled'],
        failMessage: 'MFA not properly configured',
        hash: 'test-hash',
      };

      const facts: FactMap = {
        'iam.mfa.enabled': true,
        'iam.mfa.coverage_percent': 80, // Below threshold
      };

      const result = service.evaluateRule(rule, facts);

      expect(result.status).toBe(ControlStatus.FAIL);
      expect(result.rationale).toBe('MFA not properly configured');
    });

    it('should handle "any" pass logic', () => {
      const rule: Rule = {
        id: 'test-rule',
        framework: 'nist-800-53-r5',
        title: 'Test Rule',
        description: 'Test',
        parameters: {},
        version: '1.0.0',
        when: [
          { fact: 'option1', equals: true },
          { fact: 'option2', equals: true },
        ],
        passIf: 'any',
        evidence: [],
        failMessage: 'No options enabled',
        hash: 'test-hash',
      };

      const facts: FactMap = {
        'option1': false,
        'option2': true, // Only one needs to pass
      };

      const result = service.evaluateRule(rule, facts);

      expect(result.status).toBe(ControlStatus.PASS);
    });

    it('should require manual review when manualIf conditions are met', () => {
      const rule: Rule = {
        id: 'test-rule',
        framework: 'nist-800-53-r5',
        title: 'Test Rule',
        description: 'Test',
        parameters: {},
        version: '1.0.0',
        when: [{ fact: 'something', equals: true }],
        passIf: 'all',
        evidence: [],
        failMessage: 'Failed',
        manualIf: [{ fact: 'requires_manual_review', equals: true }],
        hash: 'test-hash',
      };

      const facts: FactMap = {
        'something': true,
        'requires_manual_review': true,
      };

      const result = service.evaluateRule(rule, facts);

      expect(result.status).toBe(ControlStatus.MANUAL);
    });

    it('should handle percentage pass logic', () => {
      const rule: Rule = {
        id: 'test-rule',
        framework: 'nist-800-53-r5',
        title: 'Test Rule',
        description: 'Test',
        parameters: {},
        version: '1.0.0',
        when: [
          { fact: 'check1', equals: true },
          { fact: 'check2', equals: true },
          { fact: 'check3', equals: true },
          { fact: 'check4', equals: true },
        ],
        passIf: '75%', // 3 out of 4 must pass
        evidence: [],
        failMessage: 'Less than 75% passed',
        hash: 'test-hash',
      };

      const facts: FactMap = {
        'check1': true,
        'check2': true,
        'check3': true,
        'check4': false, // 3/4 = 75%
      };

      const result = service.evaluateRule(rule, facts);

      expect(result.status).toBe(ControlStatus.PASS);
    });

    it('should handle existence checks', () => {
      const rule: Rule = {
        id: 'test-rule',
        framework: 'nist-800-53-r5',
        title: 'Test Rule',
        description: 'Test',
        parameters: {},
        version: '1.0.0',
        when: [{ fact: 'sbom.present', exists: true }],
        passIf: 'all',
        evidence: ['sbom.present'],
        failMessage: 'SBOM not found',
        hash: 'test-hash',
      };

      const facts: FactMap = {
        'sbom.present': true,
      };

      const result = service.evaluateRule(rule, facts);

      expect(result.status).toBe(ControlStatus.PASS);
    });

    it('should handle regex matching', () => {
      const rule: Rule = {
        id: 'test-rule',
        framework: 'nist-800-53-r5',
        title: 'Test Rule',
        description: 'Test',
        parameters: {},
        version: '1.0.0',
        when: [{ fact: 'version', regex: '^v[0-9]+\\.[0-9]+\\.[0-9]+$' }],
        passIf: 'all',
        evidence: ['version'],
        failMessage: 'Invalid version format',
        hash: 'test-hash',
      };

      const facts: FactMap = {
        'version': 'v1.2.3',
      };

      const result = service.evaluateRule(rule, facts);

      expect(result.status).toBe(ControlStatus.PASS);
    });
  });

  describe('calculateFactsHash', () => {
    it('should generate consistent hash for same facts', () => {
      const facts: FactMap = {
        'fact1': 'value1',
        'fact2': 42,
      };

      const hash1 = service.calculateFactsHash(facts);
      const hash2 = service.calculateFactsHash(facts);

      expect(hash1).toBe(hash2);
    });

    it('should generate different hash for different facts', () => {
      const facts1: FactMap = { 'fact1': 'value1' };
      const facts2: FactMap = { 'fact1': 'value2' };

      const hash1 = service.calculateFactsHash(facts1);
      const hash2 = service.calculateFactsHash(facts2);

      expect(hash1).not.toBe(hash2);
    });
  });
});
