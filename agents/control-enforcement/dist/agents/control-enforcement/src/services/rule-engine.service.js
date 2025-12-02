"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RuleEngineService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleEngineService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const yaml = __importStar(require("yaml"));
const common_2 = require("@compiledger/common");
let RuleEngineService = RuleEngineService_1 = class RuleEngineService {
    logger = new common_1.Logger(RuleEngineService_1.name);
    ruleCache = new Map();
    rulesPath;
    constructor() {
        this.rulesPath = (0, path_1.join)(__dirname, '../../rules');
    }
    async loadRules() {
        this.logger.log(`Loading rules from ${this.rulesPath}`);
        try {
            const files = await (0, promises_1.readdir)(this.rulesPath);
            const yamlFiles = files.filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'));
            let loadedCount = 0;
            for (const file of yamlFiles) {
                const filePath = (0, path_1.join)(this.rulesPath, file);
                const content = await (0, promises_1.readFile)(filePath, 'utf-8');
                const rules = yaml.parse(content);
                const ruleArray = Array.isArray(rules) ? rules : [rules];
                for (const rule of ruleArray) {
                    const ruleHash = (0, common_2.hashData)({
                        id: rule.id,
                        when: rule.when,
                        passIf: rule.passIf,
                        evidence: rule.evidence,
                    });
                    const enrichedRule = {
                        ...rule,
                        hash: ruleHash,
                    };
                    this.ruleCache.set(rule.id, enrichedRule);
                    loadedCount++;
                }
            }
            this.logger.log(`✓ Loaded ${loadedCount} rules from ${yamlFiles.length} files`);
        }
        catch (error) {
            const err = error;
            this.logger.error(`Failed to load rules: ${err.message}`, err.stack);
            throw error;
        }
    }
    getRule(ruleId) {
        return this.ruleCache.get(ruleId);
    }
    getRulesByFramework(framework) {
        return Array.from(this.ruleCache.values()).filter((rule) => rule.framework === framework);
    }
    getAllRules() {
        return Array.from(this.ruleCache.values());
    }
    validateRule(rule) {
        const errors = [];
        if (!rule.id)
            errors.push('Missing required field: id');
        if (!rule.framework)
            errors.push('Missing required field: framework');
        if (!rule.title)
            errors.push('Missing required field: title');
        if (!rule.description)
            errors.push('Missing required field: description');
        if (!rule.version)
            errors.push('Missing required field: version');
        if (!rule.when || !Array.isArray(rule.when)) {
            errors.push('Missing or invalid field: when (must be array)');
        }
        if (!rule.evidence || !Array.isArray(rule.evidence)) {
            errors.push('Missing or invalid field: evidence (must be array)');
        }
        if (!rule.passIf)
            errors.push('Missing required field: passIf');
        if (!rule.failMessage)
            errors.push('Missing required field: failMessage');
        return {
            valid: errors.length === 0,
            errors,
        };
    }
    async reloadRules() {
        this.ruleCache.clear();
        await this.loadRules();
    }
    getStats() {
        const frameworks = new Set(Array.from(this.ruleCache.values()).map((r) => r.framework));
        return {
            totalRules: this.ruleCache.size,
            frameworks: Array.from(frameworks),
            frameworkCounts: Array.from(frameworks).map((fw) => ({
                framework: fw,
                count: this.getRulesByFramework(fw).length,
            })),
        };
    }
};
exports.RuleEngineService = RuleEngineService;
exports.RuleEngineService = RuleEngineService = RuleEngineService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RuleEngineService);
//# sourceMappingURL=rule-engine.service.js.map