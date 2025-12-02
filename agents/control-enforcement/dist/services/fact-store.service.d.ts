import type { FactMap } from '@compiledger/common';
export declare class FactStoreService {
    private readonly logger;
    storeFact(params: {
        projectId: string;
        key: string;
        value: any;
        source: string;
        sourceId?: string;
        metadata?: any;
        expiresAt?: Date;
    }): Promise<void>;
    getFact(projectId: string, key: string, source?: string): Promise<any | null>;
    getAllFacts(projectId: string): Promise<FactMap>;
    getFactsBySource(projectId: string, source: string): Promise<FactMap>;
    storeFactsBatch(projectId: string, facts: Array<{
        key: string;
        value: any;
        source: string;
        sourceId?: string;
        metadata?: any;
    }>): Promise<void>;
    cleanupExpiredFacts(): Promise<number>;
    getFactsSummary(projectId: string): Promise<{
        totalFacts: number;
        sources: string[];
        factsBySources: {
            source: string;
            count: number;
            keys: string[];
        }[];
        lastCollected: Date | null;
    }>;
}
//# sourceMappingURL=fact-store.service.d.ts.map