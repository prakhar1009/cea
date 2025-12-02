import { PrismaClient } from './generated';
export * from './generated';
export declare function getPrismaClient(): PrismaClient;
export declare function disconnectPrisma(): Promise<void>;
export declare const prisma: PrismaClient<import("./generated").Prisma.PrismaClientOptions, never, import("libs/database/src/generated/runtime/library").DefaultArgs>;
//# sourceMappingURL=index.d.ts.map