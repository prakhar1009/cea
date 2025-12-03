// CEA Suggestions Controller
// Phase 2: API endpoints for remediation suggestions

import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { SuggestionEngineService, Suggestion, RemediationPlan } from '../services/suggestion-engine.service';
import { EvaluatorService } from '../services/evaluator.service';
import { MetricsService } from '../services/metrics.service';

@Controller('suggestions')
export class SuggestionsController {
  constructor(
    private readonly suggestionEngine: SuggestionEngineService,
    private readonly evaluator: EvaluatorService,
    private readonly metricsService: MetricsService,
  ) {}

  /**
   * Get suggestions for a specific control evaluation
   * POST /api/v1/cea/suggestions/control
   */
  @Post('control')
  @HttpCode(HttpStatus.OK)
  async getSuggestionsForControl(
    @Body() body: { controlId: string; projectId: string },
  ): Promise<{ suggestions: Suggestion[]; count: number }> {
    const { controlId, projectId } = body;

    // First evaluate the control
    // Note: This would need the ruleId - simplified for now
    // const evaluationResult = await this.evaluator.evaluateControl({ controlId, projectId, ruleId });
    // For now, using a mock evaluation result
    const evaluationResult: any = {
      status: 'FAIL',
      control: { ruleId: 'mock-rule', controlId },
      conditions: [{ result: false, fact: 'mock.fact', operator: 'equals', value: true }],
    };

    // Only generate suggestions for failed or manual controls
    if (evaluationResult.status === 'PASS') {
      return { suggestions: [], count: 0 };
    }

    // Generate suggestions
    const suggestions = await this.suggestionEngine.generateSuggestions(
      controlId,
      projectId,
      evaluationResult
    );

    this.metricsService.recordApiRequest('POST', '/suggestions/control', 200);

    return {
      suggestions,
      count: suggestions.length,
    };
  }

  /**
   * Get remediation plan for a control
   * POST /api/v1/cea/suggestions/remediation-plan
   */
  @Post('remediation-plan')
  @HttpCode(HttpStatus.OK)
  async getRemediationPlan(
    @Body() body: { controlId: string; projectId: string },
  ): Promise<RemediationPlan> {
    const { controlId, projectId } = body;

    // Evaluate the control
    // Note: This would need the ruleId - simplified for now
    const evaluationResult: any = {
      status: 'FAIL',
      control: { ruleId: 'mock-rule', controlId },
      conditions: [{ result: false, fact: 'mock.fact', operator: 'equals', value: true }],
    };

    // Create remediation plan
    const plan = await this.suggestionEngine.createRemediationPlan(
      controlId,
      projectId,
      evaluationResult
    );

    this.metricsService.recordApiRequest('POST', '/suggestions/remediation-plan', 200);

    return plan;
  }

  /**
   * Get suggestions for all failed controls in a project
   * POST /api/v1/cea/suggestions/project
   */
  @Post('project')
  @HttpCode(HttpStatus.OK)
  async getSuggestionsForProject(
    @Body() body: { projectId: string; framework?: string },
  ): Promise<{
    projectId: string;
    totalControls: number;
    failedControls: number;
    suggestions: Array<{ controlId: string; suggestions: Suggestion[] }>;
  }> {
    const { projectId } = body;
    // framework would be used to filter controls in full implementation

    // Get all controls for the project
    // This would need integration with the controls database
    // For now, return a placeholder structure

    const result = {
      projectId,
      totalControls: 0,
      failedControls: 0,
      suggestions: [] as Array<{ controlId: string; suggestions: Suggestion[] }>,
    };

    this.metricsService.recordApiRequest('POST', '/suggestions/project', 200);

    return result;
  }

  /**
   * Get auto-fixable suggestions
   * GET /api/v1/cea/suggestions/auto-fixable/:projectId
   */
  @Get('auto-fixable/:projectId')
  async getAutoFixableSuggestions(
    @Param('projectId') projectId: string,
  ): Promise<{
    projectId: string;
    autoFixableCount: number;
    estimatedTime: string;
    suggestions: Suggestion[];
  }> {
    // This would aggregate all auto-fixable suggestions for the project
    const result = {
      projectId,
      autoFixableCount: 0,
      estimatedTime: '0 hours',
      suggestions: [] as Suggestion[],
    };

    this.metricsService.recordApiRequest('GET', '/suggestions/auto-fixable', 200);

    return result;
  }

  /**
   * Get suggestion statistics
   * GET /api/v1/cea/suggestions/stats/:projectId
   */
  @Get('stats/:projectId')
  async getSuggestionStats(
    @Param('projectId') projectId: string,
  ): Promise<{
    projectId: string;
    totalSuggestions: number;
    byType: Record<string, number>;
    byPriority: Record<string, number>;
    byEffort: Record<string, number>;
    autoFixablePercentage: number;
  }> {
    // Aggregate suggestion statistics
    const stats = {
      projectId,
      totalSuggestions: 0,
      byType: {
        config_fix: 0,
        policy_update: 0,
        workflow_change: 0,
        documentation: 0,
      },
      byPriority: {
        critical: 0,
        high: 0,
        medium: 0,
        low: 0,
      },
      byEffort: {
        low: 0,
        medium: 0,
        high: 0,
      },
      autoFixablePercentage: 0,
    };

    this.metricsService.recordApiRequest('GET', '/suggestions/stats', 200);

    return stats;
  }

  /**
   * Preview a suggested fix
   * POST /api/v1/cea/suggestions/preview
   */
  @Post('preview')
  @HttpCode(HttpStatus.OK)
  async previewSuggestion(
    @Body() body: { suggestionId: string; projectId: string },
  ): Promise<{
    suggestionId: string;
    preview: string;
    changes: any[];
    rollbackPlan: string;
  }> {
    const { suggestionId } = body;
    // projectId would be used for authorization in full implementation

    // Generate preview of what would be changed
    const preview = {
      suggestionId,
      preview: 'Preview of changes would be shown here',
      changes: [],
      rollbackPlan: 'Rollback steps would be detailed here',
    };

    this.metricsService.recordApiRequest('POST', '/suggestions/preview', 200);

    return preview;
  }
}
