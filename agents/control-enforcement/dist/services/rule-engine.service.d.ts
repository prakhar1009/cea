import type { Rule } from '@compiledger/common';
export declare class RuleEngineService {
    private readonly logger;
    private ruleCache;
    private rulesPath;
    constructor();
    loadRules(): Promise<void>;
    getRule(ruleId: string): Rule | undefined;
    getRulesByFramework(framework: string): Rule[];
    getAllRules(): Rule[];
    validateRule(rule: any): {
        valid: boolean;
        errors: string[];
    };
    reloadRules(): Promise<void>;
    getStats(): {
        totalRules: number;
        frameworks: string[];
        frameworkCounts: {
            framework: string;
            count: number;
        }[];
    };
}
//# sourceMappingURL=rule-engine.service.d.ts.map