// Platform-wide constants

export const FRAMEWORKS = {
  NIST_800_53_R5: 'nist-800-53-r5',
  SOC2_2017: 'soc2-2017',
  PCI_DSS_4: 'pci-dss-4',
  HIPAA: 'hipaa',
  DORA: 'dora',
  MICA: 'mica',
} as const;

export const EVENT_STREAMS = {
  SUPPLY_CHAIN: 'supply-chain-events',
  CREDENTIALS: 'credential-events',
  POLICIES: 'policy-events',
  CONTROLS: 'control-events',
  INFRASTRUCTURE: 'infra-events',
  WORKFLOWS: 'workflow-events',
} as const;

export const EVENT_SUBJECTS = {
  SBOM_UPLOADED: 'sbom.uploaded',
  SUPPLYCHAIN_VERIFIED: 'supplychain.verified',
  VC_STATUS_CHANGED: 'vc.status.changed',
  CONFIG_SNAPSHOT_CREATED: 'config.snapshot.created',
  POLICY_UPDATED: 'policy.updated',
  FRAMEWORK_SYNCED: 'framework.synced',
  CONTROL_STATUS_CHANGED: 'control.status.changed',
  POLICY_SUGGESTION_CREATED: 'policy.suggestion.created',
  EVALUATION_RUN_COMPLETED: 'evaluation.run.completed',
  CONTROL_CRITICAL_FAILED: 'control.critical.failed',
} as const;

export const PERMISSIONS = {
  CONTROLS_READ: 'controls:read',
  CONTROLS_EVALUATE: 'controls:evaluate',
  CONTROLS_CONFIGURE: 'controls:configure',
  SUGGESTIONS_READ: 'suggestions:read',
  SUGGESTIONS_REVIEW: 'suggestions:review',
  SUGGESTIONS_APPLY: 'suggestions:apply',
  RULES_READ: 'rules:read',
  RULES_MANAGE: 'rules:manage',
  ADMIN_FULL: 'admin:*',
} as const;

export const ROLES = {
  VIEWER: 'viewer',
  OPERATOR: 'operator',
  COMPLIANCE_MANAGER: 'compliance_manager',
  ADMIN: 'admin',
} as const;
