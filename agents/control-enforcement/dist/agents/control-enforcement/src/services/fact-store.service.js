"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FactStoreService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactStoreService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@compiledger/database");
let FactStoreService = FactStoreService_1 = class FactStoreService {
    logger = new common_1.Logger(FactStoreService_1.name);
    async storeFact(params) {
        const { projectId, key, value, source, sourceId, metadata, expiresAt } = params;
        await database_1.prisma.fact.upsert({
            where: {
                projectId_key_source: {
                    projectId,
                    key,
                    source,
                },
            },
            create: {
                projectId,
                key,
                value,
                source,
                sourceId,
                metadata,
                collectedAt: new Date(),
                expiresAt,
            },
            update: {
                value,
                sourceId,
                metadata,
                collectedAt: new Date(),
                expiresAt,
            },
        });
        this.logger.debug(`Stored fact: ${key} = ${JSON.stringify(value)} [${source}]`);
    }
    async getFact(projectId, key, source) {
        const where = { projectId, key };
        if (source) {
            where.source = source;
        }
        const fact = await database_1.prisma.fact.findFirst({
            where,
            orderBy: { collectedAt: 'desc' },
        });
        return fact?.value ?? null;
    }
    async getAllFacts(projectId) {
        const facts = await database_1.prisma.fact.findMany({
            where: {
                projectId,
                OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
            },
        });
        const factMap = {};
        for (const fact of facts) {
            const fullKey = `${fact.source}.${fact.key}`;
            factMap[fullKey] = fact.value;
            factMap[fact.key] = fact.value;
        }
        return factMap;
    }
    async getFactsBySource(projectId, source) {
        const facts = await database_1.prisma.fact.findMany({
            where: { projectId, source },
        });
        const factMap = {};
        for (const fact of facts) {
            factMap[fact.key] = fact.value;
        }
        return factMap;
    }
    async storeFactsBatch(projectId, facts) {
        const operations = facts.map((fact) => database_1.prisma.fact.upsert({
            where: {
                projectId_key_source: {
                    projectId,
                    key: fact.key,
                    source: fact.source,
                },
            },
            create: {
                projectId,
                key: fact.key,
                value: fact.value,
                source: fact.source,
                sourceId: fact.sourceId,
                metadata: fact.metadata,
                collectedAt: new Date(),
            },
            update: {
                value: fact.value,
                sourceId: fact.sourceId,
                metadata: fact.metadata,
                collectedAt: new Date(),
            },
        }));
        await database_1.prisma.$transaction(operations);
        this.logger.log(`Stored ${facts.length} facts for project ${projectId}`);
    }
    async cleanupExpiredFacts() {
        const result = await database_1.prisma.fact.deleteMany({
            where: {
                expiresAt: {
                    lt: new Date(),
                },
            },
        });
        if (result.count > 0) {
            this.logger.log(`Cleaned up ${result.count} expired facts`);
        }
        return result.count;
    }
    async getFactsSummary(projectId) {
        const facts = await database_1.prisma.fact.findMany({
            where: { projectId },
            select: {
                source: true,
                key: true,
                collectedAt: true,
            },
        });
        const bySources = facts.reduce((acc, fact) => {
            if (!acc[fact.source]) {
                acc[fact.source] = [];
            }
            acc[fact.source].push(fact.key);
            return acc;
        }, {});
        return {
            totalFacts: facts.length,
            sources: Object.keys(bySources),
            factsBySources: Object.entries(bySources).map(([source, keys]) => ({
                source,
                count: keys.length,
                keys,
            })),
            lastCollected: facts.length > 0 ? facts[0].collectedAt : null,
        };
    }
};
exports.FactStoreService = FactStoreService;
exports.FactStoreService = FactStoreService = FactStoreService_1 = __decorate([
    (0, common_1.Injectable)()
], FactStoreService);
//# sourceMappingURL=fact-store.service.js.map