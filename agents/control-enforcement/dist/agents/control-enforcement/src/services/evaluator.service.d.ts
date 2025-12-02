import { RuleEngineService } from './rule-engine.service';
import { FactStoreService } from './fact-store.service';
import type { Rule, EvaluationResult, FactMap } from '@compiledger/common';
export declare class EvaluatorService {
    private readonly ruleEngine;
    private readonly factStore;
    private readonly logger;
    constructor(ruleEngine: RuleEngineService, factStore: FactStoreService);
    evaluateControl(params: {
        projectId: string;
        controlId: string;
        ruleId: string;
    }): Promise<EvaluationResult>;
    evaluateRule(rule: Rule, facts: FactMap): EvaluationResult;
    private evaluateConditions;
    private evaluateCondition;
    private collectEvidence;
    evaluateBatch(params: {
        projectId: string;
        controlIds: string[];
    }): Promise<Map<string, EvaluationResult>>;
    private getControlsByIds;
    calculateFactsHash(facts: FactMap): string;
}
//# sourceMappingURL=evaluator.service.d.ts.map