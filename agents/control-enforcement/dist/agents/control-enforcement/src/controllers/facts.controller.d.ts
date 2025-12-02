import { FactStoreService } from '../services/fact-store.service';
export declare class FactsController {
    private readonly factStore;
    constructor(factStore: FactStoreService);
    storeFact(body: {
        projectId: string;
        key: string;
        value: any;
        source: string;
        sourceId?: string;
        metadata?: any;
        expiresAt?: string;
    }): Promise<{
        error: string;
        success?: undefined;
    } | {
        success: boolean;
        error?: undefined;
    }>;
    storeBatch(body: {
        projectId: string;
        facts: Array<{
            key: string;
            value: any;
            source: string;
            sourceId?: string;
            metadata?: any;
        }>;
    }): Promise<{
        error: string;
        success?: undefined;
        count?: undefined;
    } | {
        success: boolean;
        count: number;
        error?: undefined;
    }>;
    getFacts(projectId: string, source?: string): Promise<{
        data: import("@compiledger/common").FactMap;
    }>;
    getSummary(projectId: string): Promise<{
        data: {
            totalFacts: number;
            sources: string[];
            factsBySources: {
                source: string;
                count: number;
                keys: string[];
            }[];
            lastCollected: Date | null;
        };
    }>;
}
//# sourceMappingURL=facts.controller.d.ts.map