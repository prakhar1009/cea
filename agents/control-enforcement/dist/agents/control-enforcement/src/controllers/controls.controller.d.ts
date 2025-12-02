import { EvaluatorService } from '../services/evaluator.service';
import { FactStoreService } from '../services/fact-store.service';
import { RuleEngineService } from '../services/rule-engine.service';
export declare class ControlsController {
    private readonly evaluator;
    private readonly factStore;
    private readonly ruleEngine;
    private readonly logger;
    constructor(evaluator: EvaluatorService, factStore: FactStoreService, ruleEngine: RuleEngineService);
    listControls(projectId: string, framework?: string): Promise<{
        error: string;
        data?: undefined;
        meta?: undefined;
    } | {
        data: ({
            framework: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                catalogUrl: string | null;
                version: string;
                isActive: boolean;
            };
        } & {
            projectId: string;
            id: string;
            frameworkId: string;
            controlId: string;
            title: string;
            description: string;
            parameters: import("libs/database/src/generated/runtime/library").JsonValue;
            criticality: import("@compiledger/database").$Enums.Criticality;
            parentControlId: string | null;
            currentStatus: import("@compiledger/database").$Enums.ControlStatus;
            lastEvaluatedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        })[];
        meta: {
            total: number;
        };
        error?: undefined;
    }>;
    getControl(id: string): Promise<{
        error: string;
        data?: undefined;
    } | {
        data: {
            framework: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                catalogUrl: string | null;
                version: string;
                isActive: boolean;
            };
            evaluations: {
                projectId: string;
                id: string;
                controlId: string;
                createdAt: Date;
                updatedAt: Date;
                runId: string;
                status: import("@compiledger/database").$Enums.ControlStatus;
                rationale: string;
                evidenceRefs: import("libs/database/src/generated/runtime/library").JsonValue;
                factsHash: string;
                rulesetHash: string;
                rulesetVersion: string;
                nlpScore: number | null;
                riskScore: number | null;
            }[];
        } & {
            projectId: string;
            id: string;
            frameworkId: string;
            controlId: string;
            title: string;
            description: string;
            parameters: import("libs/database/src/generated/runtime/library").JsonValue;
            criticality: import("@compiledger/database").$Enums.Criticality;
            parentControlId: string | null;
            currentStatus: import("@compiledger/database").$Enums.ControlStatus;
            lastEvaluatedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        error?: undefined;
    }>;
    evaluateControl(id: string, body: {
        runId?: string;
    }): Promise<{
        error: string;
        data?: undefined;
        details?: undefined;
    } | {
        data: {
            evaluationId: string;
            status: import("@compiledger/common").ControlStatus;
            rationale: string;
            evidence: string[];
            factsHash: string;
            rulesetVersion: string;
        };
        error?: undefined;
        details?: undefined;
    } | {
        error: string;
        details: string;
        data?: undefined;
    }>;
    evaluateBatch(body: {
        projectId: string;
        controlIds?: string[];
    }): Promise<{
        error: string;
        data?: undefined;
    } | {
        data: {
            runId: string;
            totalControls: number;
            passed: number;
            failed: number;
            manual: number;
            notApplicable: number;
            results: any[];
        };
        error?: undefined;
    }>;
    getHistory(id: string, limit?: string): Promise<{
        data: {
            projectId: string;
            id: string;
            controlId: string;
            createdAt: Date;
            updatedAt: Date;
            runId: string;
            status: import("@compiledger/database").$Enums.ControlStatus;
            rationale: string;
            evidenceRefs: import("libs/database/src/generated/runtime/library").JsonValue;
            factsHash: string;
            rulesetHash: string;
            rulesetVersion: string;
            nlpScore: number | null;
            riskScore: number | null;
        }[];
        meta: {
            total: number;
        };
    }>;
}
//# sourceMappingURL=controls.controller.d.ts.map