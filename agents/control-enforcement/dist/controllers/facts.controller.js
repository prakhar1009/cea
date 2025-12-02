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
var FactsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactsController = void 0;
const common_1 = require("@nestjs/common");
const fact_store_service_1 = require("../services/fact-store.service");
let FactsController = FactsController_1 = class FactsController {
    factStore;
    logger = new common_1.Logger(FactsController_1.name);
    constructor(factStore) {
        this.factStore = factStore;
    }
    async storeFact(body) {
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
    async storeBatch(body) {
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
    async getFacts(projectId, source) {
        if (source) {
            const facts = await this.factStore.getFactsBySource(projectId, source);
            return { data: facts };
        }
        const facts = await this.factStore.getAllFacts(projectId);
        return { data: facts };
    }
    async getSummary(projectId) {
        const summary = await this.factStore.getFactsSummary(projectId);
        return { data: summary };
    }
};
exports.FactsController = FactsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FactsController.prototype, "storeFact", null);
__decorate([
    (0, common_1.Post)('batch'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FactsController.prototype, "storeBatch", null);
__decorate([
    (0, common_1.Get)(':projectId'),
    __param(0, (0, common_1.Param)('projectId')),
    __param(1, (0, common_1.Query)('source')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FactsController.prototype, "getFacts", null);
__decorate([
    (0, common_1.Get)(':projectId/summary'),
    __param(0, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FactsController.prototype, "getSummary", null);
exports.FactsController = FactsController = FactsController_1 = __decorate([
    (0, common_1.Controller)('facts'),
    __metadata("design:paramtypes", [fact_store_service_1.FactStoreService])
], FactsController);
//# sourceMappingURL=facts.controller.js.map