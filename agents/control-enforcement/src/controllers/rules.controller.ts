// Rules API Controller
// View and manage evaluation rules

import { Controller, Get, Post, Param, Logger } from '@nestjs/common';
import { RuleEngineService } from '../services/rule-engine.service';

@Controller('rules')
export class RulesController {
  private readonly logger = new Logger(RulesController.name);

  constructor(private readonly ruleEngine: RuleEngineService) {}

  /**
   * GET /rules
   * List all loaded rules
   */
  @Get()
  async listRules() {
    const rules = this.ruleEngine.getAllRules();

    return {
      data: rules,
      meta: {
        total: rules.length,
      },
    };
  }

  /**
   * GET /rules/stats
   * Get rule statistics
   */
  @Get('stats')
  async getStats() {
    const stats = this.ruleEngine.getStats();
    return { data: stats };
  }

  /**
   * GET /rules/:id
   * Get a specific rule
   */
  @Get(':id')
  async getRule(@Param('id') id: string) {
    const rule = this.ruleEngine.getRule(id);

    if (!rule) {
      return { error: 'Rule not found' };
    }

    return { data: rule };
  }

  /**
   * GET /rules/framework/:framework
   * Get rules for a framework
   */
  @Get('framework/:framework')
  async getRulesByFramework(@Param('framework') framework: string) {
    const rules = this.ruleEngine.getRulesByFramework(framework);

    return {
      data: rules,
      meta: {
        total: rules.length,
        framework,
      },
    };
  }

  /**
   * POST /rules/reload
   * Reload all rules from disk (development only)
   */
  @Post('reload')
  async reloadRules() {
    try {
      await this.ruleEngine.reloadRules();
      const stats = this.ruleEngine.getStats();

      this.logger.log('Rules reloaded successfully');

      return {
        success: true,
        stats,
      };
    } catch (error) {
      this.logger.error(`Failed to reload rules: ${(error as Error).message}`);
      return {
        error: 'Failed to reload rules',
        details: (error as Error).message,
      };
    }
  }
}
