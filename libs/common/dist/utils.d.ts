export declare function hashData(data: any): string;
export declare function parseDuration(duration: string): number;
export declare function sleep(ms: number): Promise<void>;
export declare function chunk<T>(array: T[], size: number): T[][];
export declare function retry<T>(fn: () => Promise<T>, options?: {
    maxAttempts?: number;
    delayMs?: number;
    backoffMultiplier?: number;
}): Promise<T>;
//# sourceMappingURL=utils.d.ts.map