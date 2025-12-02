export declare enum ControlStatus {
    PASS = "PASS",
    FAIL = "FAIL",
    MANUAL = "MANUAL",
    NOT_APPLICABLE = "NOT_APPLICABLE",
    NOT_EVALUATED = "NOT_EVALUATED"
}
export declare enum Criticality {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    CRITICAL = "CRITICAL"
}
export interface FactMap {
    [key: string]: any;
}
export interface EvaluationResult {
    status: ControlStatus;
    rationale: string;
    evidence: string[];
    nlpScore?: number;
    riskScore?: number;
}
export interface RuleCondition {
    fact: string;
    equals?: any;
    greaterThan?: number;
    lessThan?: number;
    lessThanOrEqual?: number;
    regex?: string;
    ageLessThan?: string;
    exists?: boolean;
}
export interface Rule {
    id: string;
    framework: string;
    title: string;
    description: string;
    parameters: Record<string, any>;
    when: RuleCondition[];
    evidence: string[];
    passIf: string;
    failMessage: string;
    manualIf?: RuleCondition[];
    nlp?: {
        enabled: boolean;
        policySearchQuery: string;
        requiredConstraints: any[];
        alignmentThreshold: number;
    };
    version: string;
    hash: string;
}
//# sourceMappingURL=control.types.d.ts.map