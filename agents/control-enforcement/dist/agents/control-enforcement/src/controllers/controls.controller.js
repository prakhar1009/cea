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
var ControlsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlsController = void 0;
const common_1 = require("@nestjs/common");
const evaluator_service_1 = require("../services/evaluator.service");
const fact_store_service_1 = require("../services/fact-store.service");
const rule_engine_service_1 = require("../services/rule-engine.service");
const database_1 = require("@compiledger/database");
const common_2 = require("@compiledger/common");
let ControlsController = ControlsController_1 = class ControlsController {
    evaluator;
    factStore;
    ruleEngine;
    logger = new common_1.Logger(ControlsController_1.name);
    constructor(evaluator, factStore, ruleEngine) {
        this.evaluator = evaluator;
        this.factStore = factStore;
        this.ruleEngine = ruleEngine;
    }
    async listControls(projectId, framework) {
        if (!projectId) {
            return { error: 'projectId is required' };
        }
        const where = { projectId };
        if (framework) {
            where.framework = { slug: framework };
        }
        const controls = await database_1.prisma.control.findMany({
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
    async getControl(id) {
        const control = await database_1.prisma.control.findUnique({
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
    async evaluateControl(id, body) {
        const control = await database_1.prisma.control.findUnique({
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
            const result = await this.evaluator.evaluateControl({
                projectId: control.projectId,
                controlId: control.id,
                ruleId,
            });
            const facts = await this.factStore.getAllFacts(control.projectId);
            const factsHash = (0, common_2.hashData)(facts);
            const evaluation = await database_1.prisma.controlEvaluation.create({
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
            await database_1.prisma.control.update({
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
        }
        catch (error) {
            this.logger.error(`Evaluation failed: ${error.message}`);
            return { error: 'Evaluation failed', details: error.message };
        }
    }
    async evaluateBatch(body) {
        const { projectId, controlIds } = body;
        if (!projectId) {
            return { error: 'projectId is required' };
        }
        const where = { projectId };
        if (controlIds && controlIds.length > 0) {
            where.id = { in: controlIds };
        }
        const controls = await database_1.prisma.control.findMany({ where, include: { framework: true } });
        if (controls.length === 0) {
            return { error: 'No controls found' };
        }
        const runId = `batch-${Date.now()}`;
        const results = [];
        let passed = 0;
        let failed = 0;
        let manual = 0;
        let notApplicable = 0;
        const facts = await this.factStore.getAllFacts(projectId);
        const factsHash = (0, common_2.hashData)(facts);
        for (const control of controls) {
            const ruleId = `${control.framework.slug}-${control.controlId.toLowerCase()}`;
            const rule = this.ruleEngine.getRule(ruleId);
            if (!rule) {
                this.logger.warn(`No rule found for control: ${control.controlId}`);
                continue;
            }
            try {
                const result = this.evaluator.evaluateRule(rule, facts);
                await database_1.prisma.controlEvaluation.create({
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
                await database_1.prisma.control.update({
                    where: { id: control.id },
                    data: {
                        currentStatus: result.status,
                        lastEvaluatedAt: new Date(),
                    },
                });
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
            }
            catch (error) {
                this.logger.error(`Failed to evaluate ${control.controlId}: ${error.message}`);
            }
        }
        await database_1.prisma.evaluationRun.create({
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
    async getHistory(id, limit) {
        const evaluations = await database_1.prisma.controlEvaluation.findMany({
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
};
exports.ControlsController = ControlsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('projectId')),
    __param(1, (0, common_1.Query)('framework')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ControlsController.prototype, "listControls", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ControlsController.prototype, "getControl", null);
__decorate([
    (0, common_1.Post)(':id/evaluate'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ControlsController.prototype, "evaluateControl", null);
__decorate([
    (0, common_1.Post)('evaluate-batch'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControlsController.prototype, "evaluateBatch", null);
__decorate([
    (0, common_1.Get)(':id/history'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ControlsController.prototype, "getHistory", null);
exports.ControlsController = ControlsController = ControlsController_1 = __decorate([
    (0, common_1.Controller)('controls'),
    __metadata("design:paramtypes", [evaluator_service_1.EvaluatorService,
        fact_store_service_1.FactStoreService,
        rule_engine_service_1.RuleEngineService])
], ControlsController);
//# sourceMappingURL=controls.controller.js.map