import { RuleEngineService } from '../services/rule-engine.service';
export declare class RulesController {
    private readonly ruleEngine;
    private readonly logger;
    constructor(ruleEngine: RuleEngineService);
    listRules(): Promise<{
        data: import("@compiledger/common").Rule[];
        meta: {
            total: number;
        };
    }>;
    getStats(): Promise<{
        data: {
            totalRules: number;
            frameworks: string[];
            frameworkCounts: {
                framework: string;
                count: number;
            }[];
        };
    }>;
    getRule(id: string): Promise<{
        error: string;
        data?: undefined;
    } | {
        data: import("@compiledger/common").Rule;
        error?: undefined;
    }>;
    getRulesByFramework(framework: string): Promise<{
        data: import("@compiledger/common").Rule[];
        meta: {
            total: number;
            framework: string;
        };
    }>;
    reloadRules(): Promise<{
        success: boolean;
        stats: {
            totalRules: number;
            frameworks: string[];
            frameworkCounts: {
                framework: string;
                count: number;
            }[];
        };
        error?: undefined;
        details?: undefined;
    } | {
        error: string;
        details: string;
        success?: undefined;
        stats?: undefined;
    }>;
}
//# sourceMappingURL=rules.controller.d.ts.map