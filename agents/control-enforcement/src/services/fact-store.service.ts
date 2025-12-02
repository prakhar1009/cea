// Fact Store Service
// Manages facts collected from SBOM, VCs, config snapshots, etc.

import { Injectable, Logger } from '@nestjs/common';
import { prisma } from '@compiledger/database';
import type { FactMap } from '@compiledger/common';

@Injectable()
export class FactStoreService {
  private readonly logger = new Logger(FactStoreService.name);

  /**
   * Store a fact
   */
  async storeFact(params: {
    projectId: string;
    key: string;
    value: any;
    source: string;
    sourceId?: string;
    metadata?: any;
    expiresAt?: Date;
  }): Promise<void> {
    const { projectId, key, value, source, sourceId, metadata, expiresAt } = params;

    await prisma.fact.upsert({
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

  /**
   * Get a single fact value
   */
  async getFact(projectId: string, key: string, source?: string): Promise<any | null> {
    const where: any = { projectId, key };
    if (source) {
      where.source = source;
    }

    const fact = await prisma.fact.findFirst({
      where,
      orderBy: { collectedAt: 'desc' },
    });

    return fact?.value ?? null;
  }

  /**
   * Get all facts for a project as a flat map
   */
  async getAllFacts(projectId: string): Promise<FactMap> {
    const facts = await prisma.fact.findMany({
      where: {
        projectId,
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
      },
    });

    const factMap: FactMap = {};
    for (const fact of facts) {
      // Use dot notation: source.key
      const fullKey = `${fact.source}.${fact.key}`;
      factMap[fullKey] = fact.value;
      // Also store without prefix for convenience
      factMap[fact.key] = fact.value;
    }

    return factMap;
  }

  /**
   * Get facts by source
   */
  async getFactsBySource(projectId: string, source: string): Promise<FactMap> {
    const facts = await prisma.fact.findMany({
      where: { projectId, source },
    });

    const factMap: FactMap = {};
    for (const fact of facts) {
      factMap[fact.key] = fact.value;
    }

    return factMap;
  }

  /**
   * Batch store multiple facts
   */
  async storeFactsBatch(
    projectId: string,
    facts: Array<{
      key: string;
      value: any;
      source: string;
      sourceId?: string;
      metadata?: any;
    }>
  ): Promise<void> {
    const operations = facts.map((fact) =>
      prisma.fact.upsert({
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
      })
    );

    await prisma.$transaction(operations);
    this.logger.log(`Stored ${facts.length} facts for project ${projectId}`);
  }

  /**
   * Delete expired facts
   */
  async cleanupExpiredFacts(): Promise<number> {
    const result = await prisma.fact.deleteMany({
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

  /**
   * Get facts summary for a project
   */
  async getFactsSummary(projectId: string) {
    const facts = await prisma.fact.findMany({
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
    }, {} as Record<string, string[]>);

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
}
