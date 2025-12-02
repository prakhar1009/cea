// Facts API Controller
// Manage fact collection and retrieval

import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { FactStoreService } from '../services/fact-store.service';

@Controller('facts')
export class FactsController {
  constructor(private readonly factStore: FactStoreService) {}

  /**
   * POST /facts
   * Store a single fact
   */
  @Post()
  async storeFact(@Body() body: {
    projectId: string;
    key: string;
    value: any;
    source: string;
    sourceId?: string;
    metadata?: any;
    expiresAt?: string;
  }) {
    const { projectId, key, value, source, sourceId, metadata, expiresAt } = body;

    if (!projectId || !key || value === undefined || !source) {
      return { error: 'Missing required fields: projectId, key, value, source' };
    }

    await this.factStore.storeFact({
      projectId,
      key,
      value,
      source,
      sourceId,
      metadata,
      expiresAt: expiresAt ? new Date(expiresAt) : undefined,
    });

    return { success: true };
  }

  /**
   * POST /facts/batch
   * Store multiple facts
   */
  @Post('batch')
  async storeBatch(@Body() body: {
    projectId: string;
    facts: Array<{
      key: string;
      value: any;
      source: string;
      sourceId?: string;
      metadata?: any;
    }>;
  }) {
    const { projectId, facts } = body;

    if (!projectId || !facts || !Array.isArray(facts)) {
      return { error: 'Invalid request body' };
    }

    await this.factStore.storeFactsBatch(projectId, facts);

    return {
      success: true,
      count: facts.length,
    };
  }

  /**
   * GET /facts/:projectId
   * Get all facts for a project
   */
  @Get(':projectId')
  async getFacts(@Param('projectId') projectId: string, @Query('source') source?: string) {
    if (source) {
      const facts = await this.factStore.getFactsBySource(projectId, source);
      return { data: facts };
    }

    const facts = await this.factStore.getAllFacts(projectId);
    return { data: facts };
  }

  /**
   * GET /facts/:projectId/summary
   * Get facts summary
   */
  @Get(':projectId/summary')
  async getSummary(@Param('projectId') projectId: string) {
    const summary = await this.factStore.getFactsSummary(projectId);
    return { data: summary };
  }
}
