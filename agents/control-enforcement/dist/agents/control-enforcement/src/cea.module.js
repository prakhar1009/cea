"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CeaModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeaModule = void 0;
const common_1 = require("@nestjs/common");
const health_controller_1 = require("./controllers/health.controller");
const controls_controller_1 = require("./controllers/controls.controller");
const facts_controller_1 = require("./controllers/facts.controller");
const rules_controller_1 = require("./controllers/rules.controller");
const rule_engine_service_1 = require("./services/rule-engine.service");
const fact_store_service_1 = require("./services/fact-store.service");
const evaluator_service_1 = require("./services/evaluator.service");
let CeaModule = CeaModule_1 = class CeaModule {
    ruleEngine;
    logger = new common_1.Logger(CeaModule_1.name);
    constructor(ruleEngine) {
        this.ruleEngine = ruleEngine;
    }
    async onModuleInit() {
        try {
            await this.ruleEngine.loadRules();
            const stats = this.ruleEngine.getStats();
            this.logger.log(`✓ Loaded ${stats.totalRules} rules from ${stats.frameworks.length} frameworks`);
        }
        catch (error) {
            this.logger.error(`Failed to load rules: ${error.message}`);
        }
    }
};
exports.CeaModule = CeaModule;
exports.CeaModule = CeaModule = CeaModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            health_controller_1.HealthController,
            controls_controller_1.ControlsController,
            facts_controller_1.FactsController,
            rules_controller_1.RulesController,
        ],
        providers: [
            rule_engine_service_1.RuleEngineService,
            fact_store_service_1.FactStoreService,
            evaluator_service_1.EvaluatorService,
        ],
    }),
    __metadata("design:paramtypes", [rule_engine_service_1.RuleEngineService])
], CeaModule);
//# sourceMappingURL=cea.module.js.map