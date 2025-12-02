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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var RulesController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesController = void 0;
const common_1 = require("@nestjs/common");
const rule_engine_service_1 = require("../services/rule-engine.service");
let RulesController = RulesController_1 = class RulesController {
    ruleEngine;
    logger = new common_1.Logger(RulesController_1.name);
    constructor(ruleEngine) {
        this.ruleEngine = ruleEngine;
    }
    async listRules() {
        const rules = this.ruleEngine.getAllRules();
        return {
            data: rules,
            meta: {
                total: rules.length,
            },
        };
    }
    async getStats() {
        const stats = this.ruleEngine.getStats();
        return { data: stats };
    }
    async getRule(id) {
        const rule = this.ruleEngine.getRule(id);
        if (!rule) {
            return { error: 'Rule not found' };
        }
        return { data: rule };
    }
    async getRulesByFramework(framework) {
        const rules = this.ruleEngine.getRulesByFramework(framework);
        return {
            data: rules,
            meta: {
                total: rules.length,
                framework,
            },
        };
    }
    async reloadRules() {
        try {
            await this.ruleEngine.reloadRules();
            const stats = this.ruleEngine.getStats();
            this.logger.log('Rules reloaded successfully');
            return {
                success: true,
                stats,
            };
        }
        catch (error) {
            this.logger.error(`Failed to reload rules: ${error.message}`);
            return {
                error: 'Failed to reload rules',
                details: error.message,
            };
        }
    }
};
exports.RulesController = RulesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RulesController.prototype, "listRules", null);
__decorate([
    (0, common_1.Get)('stats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RulesController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RulesController.prototype, "getRule", null);
__decorate([
    (0, common_1.Get)('framework/:framework'),
    __param(0, (0, common_1.Param)('framework')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RulesController.prototype, "getRulesByFramework", null);
__decorate([
    (0, common_1.Post)('reload'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RulesController.prototype, "reloadRules", null);
exports.RulesController = RulesController = RulesController_1 = __decorate([
    (0, common_1.Controller)('rules'),
    __metadata("design:paramtypes", [rule_engine_service_1.RuleEngineService])
], RulesController);
//# sourceMappingURL=rules.controller.js.map