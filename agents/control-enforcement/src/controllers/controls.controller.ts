// Controls API Controller
// REST endpoints for control evaluation

import { Controller, Get, Post, Param, Body, Query, Logger } from '@nestjs/common';
import { EvaluatorService } from '../services/evaluator.service';
import { FactStoreService } from '../services/fact-store.service';
import { RuleEngineService } from '../services/rule-engine.service';
import { prisma } from '@compiledger/database';
import { hashData } from '@compiledger/common';

@Controller('controls')
export class ControlsController {
  private readonly logger = new Logger(ControlsController.name);

  constructor(
    private readonly evaluator: EvaluatorService,
    private readonly factStore: FactStoreService,
    private readonly ruleEngine: RuleEngineService
  ) {}

  /**
   * GET /controls
   * List all controls for a project
   */
  @Get()
  async listControls(@Query('projectId') projectId: string, @Query('framework') framework?: string) {
    if (!projectId) {
      return { error: 'projectId is required' };
    }

    const where: any = { projectId };
    if (framework) {
      where.framework = { slug: framework };
    }

    const controls = await prisma.control.findMany({
      where,
      include: {
        framework: true,
      },
      orderBy: { controlId: 'asc' },
    });

    return {
      data: controls,
      meta: {
        total: controls.length,
      },
    };
  }

  /**
   * GET /controls/:id
   * Get a single control with latest evaluation
   */
  @Get(':id')
  async getControl(@Param('id') id: string) {
    const control = await prisma.control.findUnique({
      where: { id },
      include: {
        framework: true,
        evaluations: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!control) {
      return { error: 'Control not found' };
    }

    return { data: control };
  }

  /**
   * POST /controls/:id/evaluate
   * Evaluate a single control
   */
  @Post(':id/evaluate')
  async evaluateControl(@Param('id') id: string, @Body() body: { runId?: string }) {
    const control = await prisma.control.findUnique({
      where: { id },
      include: { framework: true },
    });

    if (!control) {
      return { error: 'Control not found' };
    }

    const ruleId = `${control.framework.slug}-${control.controlId.toLowerCase()}`;
    const rule = this.ruleEngine.getRule(ruleId);

    if (!rule) {
      return { error: `No rule found for control: ${control.controlId}` };
    }

    try {
      // Evaluate the control
      const result = await this.evaluator.evaluateControl({
        projectId: control.projectId,
        controlId: control.id,
        ruleId,
      });

      // Get facts for hash calculation
      const facts = await this.factStore.getAllFacts(control.projectId);
      const factsHash = hashData(facts);

      // Save evaluation result
      const evaluation = await prisma.controlEvaluation.create({
        data: {
          controlId: control.id,
          projectId: control.projectId,
          runId: body.runId || `manual-${Date.now()}`,
          status: result.status,
          rationale: result.rationale,
          evidenceRefs: result.evidence,
          factsHash,
          rulesetHash: rule.hash,
          rulesetVersion: rule.version,
          nlpScore: result.nlpScore,
          riskScore: result.riskScore,
        },
      });

      // Update control status
      await prisma.control.update({
        where: { id: control.id },
        data: {
          currentStatus: result.status,
          lastEvaluatedAt: new Date(),
        },
      });

      this.logger.log(`Control ${control.controlId} evaluated: ${result.status}`);

      return {
        data: {
          evaluationId: evaluation.id,
          status: result.status,
          rationale: result.rationale,
          evidence: result.evidence,
          factsHash,
          rulesetVersion: rule.version,
        },
      };
    } catch (error) {
      this.logger.error(`Evaluation failed: ${(error as Error).message}`);
      return { error: 'Evaluation failed', details: (error as Error).message };
    }
  }

  /**
   * POST /controls/evaluate-batch
   * Evaluate multiple controls
   */
  @Post('evaluate-batch')
  async evaluateBatch(@Body() body: { projectId: string; controlIds?: string[] }) {
    const { projectId, controlIds } = body;

    if (!projectId) {
      return { error: 'projectId is required' };
    }

    // Get controls to evaluate
    const where: any = { projectId };
    if (controlIds && controlIds.length > 0) {
      where.id = { in: controlIds };
    }

    const controls = await prisma.control.findMany({ where, include: { framework: true } });

    if (controls.length === 0) {
      return { error: 'No controls found' };
    }

    const runId = `batch-${Date.now()}`;
    const results: any[] = [];

    let passed = 0;
    let failed = 0;
    let manual = 0;
    let notApplicable = 0;

    // Get facts once for all evaluations
    const facts = await this.factStore.getAllFacts(projectId);
    const factsHash = hashData(facts);

    for (const control of controls) {
      const ruleId = `${control.framework.slug}-${control.controlId.toLowerCase()}`;
      const rule = this.ruleEngine.getRule(ruleId);

      if (!rule) {
        this.logger.warn(`No rule found for control: ${control.controlId}`);
        continue;
      }

      try {
        const result = this.evaluator.evaluateRule(rule, facts);

        // Save evaluation
        await prisma.controlEvaluation.create({
          data: {
            controlId: control.id,
            projectId: control.projectId,
            runId,
            status: result.status,
            rationale: result.rationale,
            evidenceRefs: result.evidence,
            factsHash,
            rulesetHash: rule.hash,
            rulesetVersion: rule.version,
          },
        });

        // Update control
        await prisma.control.update({
          where: { id: control.id },
          data: {
            currentStatus: result.status,
            lastEvaluatedAt: new Date(),
          },
        });

        // Count statuses
        switch (result.status) {
          case 'PASS':
            passed++;
            break;
          case 'FAIL':
            failed++;
            break;
          case 'MANUAL':
            manual++;
            break;
          case 'NOT_APPLICABLE':
            notApplicable++;
            break;
        }

        results.push({
          controlId: control.controlId,
          title: control.title,
          status: result.status,
          rationale: result.rationale,
        });
      } catch (error) {
        this.logger.error(`Failed to evaluate ${control.controlId}: ${(error as Error).message}`);
      }
    }

    // Save evaluation run
    await prisma.evaluationRun.create({
      data: {
        id: runId,
        projectId,
        trigger: 'manual',
        totalControls: controls.length,
        passed,
        failed,
        manual,
        notApplicable,
        completedAt: new Date(),
      },
    });

    this.logger.log(`Batch evaluation complete: ${passed}/${controls.length} passed`);

    return {
      data: {
        runId,
        totalControls: controls.length,
        passed,
        failed,
        manual,
        notApplicable,
        results,
      },
    };
  }

  /**
   * GET /controls/:id/history
   * Get evaluation history for a control
   */
  @Get(':id/history')
  async getHistory(@Param('id') id: string, @Query('limit') limit?: string) {
    const evaluations = await prisma.controlEvaluation.findMany({
      where: { controlId: id },
      orderBy: { createdAt: 'desc' },
      take: limit ? parseInt(limit) : 10,
    });

    return {
      data: evaluations,
      meta: {
        total: evaluations.length,
      },
    };
  }
}
