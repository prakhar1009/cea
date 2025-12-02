export declare const FRAMEWORKS: {
    readonly NIST_800_53_R5: "nist-800-53-r5";
    readonly SOC2_2017: "soc2-2017";
    readonly PCI_DSS_4: "pci-dss-4";
    readonly HIPAA: "hipaa";
    readonly DORA: "dora";
    readonly MICA: "mica";
};
export declare const EVENT_STREAMS: {
    readonly SUPPLY_CHAIN: "supply-chain-events";
    readonly CREDENTIALS: "credential-events";
    readonly POLICIES: "policy-events";
    readonly CONTROLS: "control-events";
    readonly INFRASTRUCTURE: "infra-events";
    readonly WORKFLOWS: "workflow-events";
};
export declare const EVENT_SUBJECTS: {
    readonly SBOM_UPLOADED: "sbom.uploaded";
    readonly SUPPLYCHAIN_VERIFIED: "supplychain.verified";
    readonly VC_STATUS_CHANGED: "vc.status.changed";
    readonly CONFIG_SNAPSHOT_CREATED: "config.snapshot.created";
    readonly POLICY_UPDATED: "policy.updated";
    readonly FRAMEWORK_SYNCED: "framework.synced";
    readonly CONTROL_STATUS_CHANGED: "control.status.changed";
    readonly POLICY_SUGGESTION_CREATED: "policy.suggestion.created";
    readonly EVALUATION_RUN_COMPLETED: "evaluation.run.completed";
    readonly CONTROL_CRITICAL_FAILED: "control.critical.failed";
};
export declare const PERMISSIONS: {
    readonly CONTROLS_READ: "controls:read";
    readonly CONTROLS_EVALUATE: "controls:evaluate";
    readonly CONTROLS_CONFIGURE: "controls:configure";
    readonly SUGGESTIONS_READ: "suggestions:read";
    readonly SUGGESTIONS_REVIEW: "suggestions:review";
    readonly SUGGESTIONS_APPLY: "suggestions:apply";
    readonly RULES_READ: "rules:read";
    readonly RULES_MANAGE: "rules:manage";
    readonly ADMIN_FULL: "admin:*";
};
export declare const ROLES: {
    readonly VIEWER: "viewer";
    readonly OPERATOR: "operator";
    readonly COMPLIANCE_MANAGER: "compliance_manager";
    readonly ADMIN: "admin";
};
//# sourceMappingURL=constants.d.ts.map