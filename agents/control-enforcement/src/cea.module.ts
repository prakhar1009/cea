// Compiledger CEA - Root Module
// Week 1: Phase 1 Sprint 1-2

import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { ControlsController } from './controllers/controls.controller';
import { FactsController } from './controllers/facts.controller';
import { RulesController } from './controllers/rules.controller';
import { RuleEngineService } from './services/rule-engine.service';
import { FactStoreService } from './services/fact-store.service';
import { EvaluatorService } from './services/evaluator.service';

@Module({
  imports: [],
  controllers: [
    HealthController,
    ControlsController,
    FactsController,
    RulesController,
  ],
  providers: [
    RuleEngineService,
    FactStoreService,
    EvaluatorService,
  ],
})
export class CeaModule implements OnModuleInit {
  private readonly logger = new Logger(CeaModule.name);

  constructor(private readonly ruleEngine: RuleEngineService) {}

  async onModuleInit() {
    // Load rules on startup
    try {
      await this.ruleEngine.loadRules();
      const stats = this.ruleEngine.getStats();
      this.logger.log(`✓ Loaded ${stats.totalRules} rules from ${stats.frameworks.length} frameworks`);
    } catch (error) {
      this.logger.error(`Failed to load rules: ${(error as Error).message}`);
    }
  }
}
