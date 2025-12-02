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
var EvaluatorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluatorService = void 0;
const common_1 = require("@nestjs/common");
const rule_engine_service_1 = require("./rule-engine.service");
const fact_store_service_1 = require("./fact-store.service");
const common_2 = require("@compiledger/common");
const common_3 = require("@compiledger/common");
let EvaluatorService = EvaluatorService_1 = class EvaluatorService {
    ruleEngine;
    factStore;
    logger = new common_1.Logger(EvaluatorService_1.name);
    constructor(ruleEngine, factStore) {
        this.ruleEngine = ruleEngine;
        this.factStore = factStore;
    }
    async evaluateControl(params) {
        const { projectId, ruleId } = params;
        const rule = this.ruleEngine.getRule(ruleId);
        if (!rule) {
            throw new Error(`Rule not found: ${ruleId}`);
        }
        const facts = await this.factStore.getAllFacts(projectId);
        return this.evaluateRule(rule, facts);
    }
    evaluateRule(rule, facts) {
        this.logger.debug(`Evaluating rule: ${rule.id}`);
        if (rule.manualIf) {
            const requiresManual = this.evaluateConditions(rule.manualIf, facts, 'all');
            if (requiresManual) {
                return {
                    status: common_3.ControlStatus.MANUAL,
                    rationale: 'Manual verification required based on rule conditions',
                    evidence: [],
                };
            }
        }
        const conditionsPass = this.evaluateConditions(rule.when, facts, rule.passIf);
        if (conditionsPass) {
            return {
                status: common_3.ControlStatus.PASS,
                rationale: `All required conditions met: ${rule.title}`,
                evidence: this.collectEvidence(rule.evidence, facts),
            };
        }
        else {
            return {
                status: common_3.ControlStatus.FAIL,
                rationale: rule.failMessage,
                evidence: this.collectEvidence(rule.evidence, facts),
            };
        }
    }
    evaluateConditions(conditions, facts, passIf) {
        const results = conditions.map((condition) => this.evaluateCondition(condition, facts));
        switch (passIf) {
            case 'all':
                return results.every((r) => r);
            case 'any':
                return results.some((r) => r);
            case 'none':
                return results.every((r) => !r);
            case 'majority':
                const passCount = results.filter((r) => r).length;
                return passCount > results.length / 2;
            default:
                const percentMatch = passIf.match(/(\d+)%/);
                if (percentMatch) {
                    const requiredPercent = parseInt(percentMatch[1]);
                    const passCount = results.filter((r) => r).length;
                    const actualPercent = (passCount / results.length) * 100;
                    return actualPercent >= requiredPercent;
                }
                return results.every((r) => r);
        }
    }
    evaluateCondition(condition, facts) {
        const factValue = facts[condition.fact];
        if ('exists' in condition) {
            return condition.exists ? factValue !== undefined && factValue !== null : !factValue;
        }
        if (factValue === undefined || factValue === null) {
            return false;
        }
        if ('equals' in condition) {
            return factValue === condition.equals;
        }
        if ('greaterThan' in condition) {
            return Number(factValue) > condition.greaterThan;
        }
        if ('lessThan' in condition) {
            return Number(factValue) < condition.lessThan;
        }
        if ('lessThanOrEqual' in condition) {
            return Number(factValue) <= condition.lessThanOrEqual;
        }
        if ('regex' in condition && condition.regex) {
            const regex = new RegExp(condition.regex);
            return regex.test(String(factValue));
        }
        if ('ageLessThan' in condition && condition.ageLessThan) {
            try {
                const maxAgeMs = (0, common_2.parseDuration)(condition.ageLessThan);
                const factDate = new Date(factValue);
                const ageMs = Date.now() - factDate.getTime();
                return ageMs < maxAgeMs;
            }
            catch (error) {
                this.logger.warn(`Failed to parse duration or date: ${error.message}`);
                return false;
            }
        }
        return true;
    }
    collectEvidence(evidenceKeys, facts) {
        const evidence = [];
        for (const key of evidenceKeys) {
            const value = facts[key];
            if (value !== undefined && value !== null) {
                evidence.push(`${key}: ${JSON.stringify(value)}`);
            }
        }
        return evidence;
    }
    async evaluateBatch(params) {
        const { projectId, controlIds } = params;
        const results = new Map();
        const facts = await this.factStore.getAllFacts(projectId);
        const controls = await this.getControlsByIds(controlIds);
        for (const control of controls) {
            try {
                const rule = this.ruleEngine.getRule(`${control.frameworkId}-${control.controlId}`);
                if (!rule) {
                    this.logger.warn(`No rule found for control: ${control.controlId}`);
                    continue;
                }
                const result = this.evaluateRule(rule, facts);
                results.set(control.id, result);
            }
            catch (error) {
                this.logger.error(`Failed to evaluate control ${control.id}: ${error.message}`);
            }
        }
        return results;
    }
    async getControlsByIds(controlIds) {
        const { prisma } = await Promise.resolve().then(() => __importStar(require('@compiledger/database')));
        return prisma.control.findMany({
            where: { id: { in: controlIds } },
        });
    }
    calculateFactsHash(facts) {
        return (0, common_2.hashData)(facts);
    }
};
exports.EvaluatorService = EvaluatorService;
exports.EvaluatorService = EvaluatorService = EvaluatorService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [rule_engine_service_1.RuleEngineService,
        fact_store_service_1.FactStoreService])
], EvaluatorService);
//# sourceMappingURL=evaluator.service.js.map