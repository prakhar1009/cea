# 5. Event Subscriptions & Emissions

## Event Bus Architecture

### Technology: NATS JetStream
**Rationale**: Durable, replay-capable, multi-tenant stream isolation

```typescript
// libs/events/event-bus.module.ts
@Module({
  providers: [
    {
      provide: 'NATS_CLIENT',
      useFactory: async () => {
        return await connect({
          servers: process.env.NATS_URL,
          name: 'compiledger-platform',
        });
      },
    },
    EventBusService,
  ],
  exports: ['NATS_CLIENT', EventBusService],
})
export class EventsModule {}
```

## Event Taxonomy

### Stream Organization
```typescript
// Separate streams per domain for isolation
const STREAMS = {
  SUPPLY_CHAIN: 'supply-chain-events',    // SBOM, signatures
  CREDENTIALS: 'credential-events',        // VC/DID status
  POLICIES: 'policy-events',               // Policy updates
  CONTROLS: 'control-events',              // Control evaluations
  INFRASTRUCTURE: 'infra-events',          // Config snapshots
  WORKFLOWS: 'workflow-events',            // PR creation, tasks
};
```

## CEA Event Subscriptions

### 1. SBOM Upload Event
**Stream**: `supply-chain-events`  
**Subject**: `sbom.uploaded`

```typescript
// Event Schema
interface SbomUploadedEvent {
  eventId: string;
  tenantId: string;
  projectId: string;
  sbomId: string;
  format: 'cyclonedx' | 'spdx';
  components: number;
  vulnerabilities?: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  signatureValid: boolean;
  uploadedBy: string;
  timestamp: string;
}

// CEA Handler
@EventPattern('sbom.uploaded')
async handleSbomUploaded(event: SbomUploadedEvent) {
  this.logger.info(`SBOM uploaded: ${event.sbomId} for project ${event.projectId}`);
  
  // Extract facts
  const facts = await this.factStoreService.extractSbomFacts(event);
  
  // Find impacted controls
  const impactedControls = await this.controlService.findByEvidenceType('sbom');
  
  // Re-evaluate (examples: CM-8, SI-2, SR-3)
  for (const control of impactedControls) {
    await this.evaluatorService.enqueueEvaluation(control.id, event.projectId, {
      trigger: 'sbom.uploaded',
      triggeredBy: event.uploadedBy,
    });
  }
}
```

### 2. Supply Chain Verification Event
**Stream**: `supply-chain-events`  
**Subject**: `supplychain.verified`

```typescript
interface SupplyChainVerifiedEvent {
  eventId: string;
  tenantId: string;
  projectId: string;
  sbomId: string;
  verificationType: 'signatures' | 'provenance' | 'slsa';
  result: 'pass' | 'fail';
  details: {
    signatureCount: number;
    validSignatures: number;
    slsaLevel?: number;
  };
  timestamp: string;
}

@EventPattern('supplychain.verified')
async handleSupplyChainVerified(event: SupplyChainVerifiedEvent) {
  // Update facts
  await this.factStoreService.saveFact(event.projectId, {
    key: 'supplychain.signatures.valid',
    value: event.result === 'pass',
    source: 'github-sentinel',
    sourceId: event.sbomId,
    metadata: event.details,
  });
  
  // Re-evaluate supply chain controls (SR-3, SR-4, SR-5)
  await this.evaluatorService.reevaluateByTag(event.projectId, 'supply-chain');
}
```

### 3. VC Status Change Event
**Stream**: `credential-events`  
**Subject**: `vc.status.changed`

```typescript
interface VcStatusChangedEvent {
  eventId: string;
  tenantId: string;
  projectId: string;
  vcId: string;
  subjectDid: string;
  vcType: string;
  oldState: VcState;
  newState: VcState;
  reason?: string;
  timestamp: string;
}

@EventPattern('vc.status.changed')
async handleVcStatusChanged(event: VcStatusChangedEvent) {
  this.logger.warn(`VC ${event.vcId} changed: ${event.oldState} → ${event.newState}`);
  
  // Update VC fact
  await this.factStoreService.saveFact(event.projectId, {
    key: `vc.${event.vcType}.valid`,
    value: event.newState === 'VALID',
    source: 'credential-monitor',
    sourceId: event.vcId,
    expiresAt: event.newState === 'EXPIRED' ? new Date() : null,
  });
  
  // Find controls that require this credential type
  const dependentControls = await this.controlService.findByCredentialRequirement(event.vcType);
  
  // Re-evaluate (e.g., AC-2, AC-6 if "AccessReviewerCredential" expired)
  for (const control of dependentControls) {
    await this.evaluatorService.evaluateControl(control.id, event.projectId);
  }
}
```

### 4. Config Snapshot Event
**Stream**: `infra-events`  
**Subject**: `config.snapshot.created`

```typescript
interface ConfigSnapshotEvent {
  eventId: string;
  tenantId: string;
  projectId: string;
  snapshotId: string;
  provider: 'kubernetes' | 'terraform' | 'cloudformation' | 'azure-rm';
  resourceTypes: string[];
  changeCount: number;
  timestamp: string;
}

@EventPattern('config.snapshot.created')
async handleConfigSnapshot(event: ConfigSnapshotEvent) {
  // Extract config facts (e.g., k8s RBAC, network policies, encryption settings)
  const facts = await this.factStoreService.extractConfigFacts(event.snapshotId, event.provider);
  
  // Re-evaluate infrastructure controls (AC-*, SC-*, CM-*)
  await this.evaluatorService.reevaluateByTag(event.projectId, 'infrastructure');
}
```

### 5. Policy Updated Event
**Stream**: `policy-events`  
**Subject**: `policy.updated`

```typescript
interface PolicyUpdatedEvent {
  eventId: string;
  tenantId: string;
  projectId: string;
  policyPath: string;
  version: string; // Git SHA
  changeType: 'created' | 'modified' | 'deleted';
  affectedControls?: string[]; // Hint from Autodoc agent
  timestamp: string;
}

@EventPattern('policy.updated')
async handlePolicyUpdated(event: PolicyUpdatedEvent) {
  // Re-index policy for NLP searches
  await this.nlpService.indexPolicyDocument(event.projectId, event.policyPath, event.version);
  
  // Re-evaluate controls with policy alignment requirements
  const nlpControls = await this.controlService.findByEvaluationType('nlp');
  for (const control of nlpControls) {
    await this.evaluatorService.evaluateControl(control.id, event.projectId);
  }
}
```

### 6. Framework Sync Event
**Stream**: `control-events`  
**Subject**: `framework.synced`

```typescript
interface FrameworkSyncedEvent {
  eventId: string;
  tenantId: string;
  projectId: string;
  frameworkSlug: string;
  catalogVersion: string;
  controlsAdded: string[];
  controlsUpdated: string[];
  controlsRemoved: string[];
  timestamp: string;
}

@EventPattern('framework.synced')
async handleFrameworkSynced(event: FrameworkSyncedEvent) {
  // Sync control definitions from OSCAL catalog
  await this.controlService.syncFromCatalog(
    event.projectId,
    event.frameworkSlug,
    event.catalogVersion
  );
  
  // Evaluate all new/updated controls
  const toEvaluate = [...event.controlsAdded, ...event.controlsUpdated];
  for (const controlId of toEvaluate) {
    await this.evaluatorService.evaluateControl(controlId, event.projectId);
  }
}
```

## CEA Event Emissions

### 1. Control Status Changed
**Stream**: `control-events`  
**Subject**: `control.status.changed`

```typescript
interface ControlStatusChangedEvent {
  eventId: string;
  tenantId: string;
  projectId: string;
  controlId: string;
  frameworkId: string;
  oldStatus: ControlStatus;
  newStatus: ControlStatus;
  rationale: string;
  evidenceRefs: string[];
  evaluationId: string;
  criticality: Criticality;
  timestamp: string;
}

// Emit after evaluation persistence
async emitStatusChange(control: Control, oldStatus, newStatus, evaluation) {
  await this.eventBus.publish('control.status.changed', {
    eventId: uuidv4(),
    tenantId: control.tenantId,
    projectId: control.projectId,
    controlId: control.controlId,
    frameworkId: control.frameworkId,
    oldStatus,
    newStatus,
    rationale: evaluation.rationale,
    evidenceRefs: evaluation.evidenceRefs,
    evaluationId: evaluation.id,
    criticality: control.criticality,
    timestamp: new Date().toISOString(),
  });
}
```

**Downstream Consumers**:
- **Autodoc Agent**: Regenerate SSP/SAR sections for changed controls
- **ZKP Attestation**: Revoke proofs for failed controls
- **Notification Service**: Alert project owners on critical failures
- **Dashboard UI**: Real-time posture updates

### 2. Policy Suggestion Created
**Stream**: `control-events`  
**Subject**: `policy.suggestion.created`

```typescript
interface PolicySuggestionCreatedEvent {
  eventId: string;
  tenantId: string;
  projectId: string;
  controlId: string;
  suggestionId: string;
  type: SuggestionType;
  targetPath: string;
  confidence: Confidence;
  diffPreview: string; // First 200 chars
  timestamp: string;
}

// Emit after suggestion generation
async emitSuggestion(suggestion: Suggestion, control: Control) {
  await this.eventBus.publish('policy.suggestion.created', {
    eventId: uuidv4(),
    tenantId: control.tenantId,
    projectId: control.projectId,
    controlId: control.controlId,
    suggestionId: suggestion.id,
    type: suggestion.type,
    targetPath: suggestion.targetPath,
    confidence: suggestion.confidence,
    diffPreview: suggestion.diff.substring(0, 200),
    timestamp: new Date().toISOString(),
  });
}
```

**Downstream Consumers**:
- **GitHub Sentinel**: Create PR if `confidence === 'HIGH'` and `type === 'config'`
- **Task Manager**: Create review task if `confidence === 'MEDIUM'`
- **UI**: Show suggestion in compliance dashboard

### 3. Evaluation Run Completed
**Stream**: `control-events`  
**Subject**: `evaluation.run.completed`

```typescript
interface EvaluationRunCompletedEvent {
  eventId: string;
  tenantId: string;
  projectId: string;
  runId: string;
  trigger: string;
  totalControls: number;
  passed: number;
  failed: number;
  manual: number;
  notApplicable: number;
  duration: number; // milliseconds
  timestamp: string;
}

// Emit after batch evaluation
async emitRunCompleted(run: EvaluationRun) {
  await this.eventBus.publish('evaluation.run.completed', {
    eventId: uuidv4(),
    tenantId: run.tenantId,
    projectId: run.projectId,
    runId: run.id,
    trigger: run.trigger,
    totalControls: run.totalControls,
    passed: run.passed,
    failed: run.failed,
    manual: run.manual,
    notApplicable: run.notApplicable,
    duration: run.completedAt.getTime() - run.startedAt.getTime(),
    timestamp: new Date().toISOString(),
  });
}
```

**Downstream Consumers**:
- **Autodoc Agent**: Trigger full document regeneration
- **Reporting Service**: Update compliance posture dashboard
- **Audit Log**: Record evaluation for compliance trail

### 4. Control Critical Failed
**Stream**: `control-events`  
**Subject**: `control.critical.failed`

```typescript
interface ControlCriticalFailedEvent {
  eventId: string;
  tenantId: string;
  projectId: string;
  controlId: string;
  frameworkId: string;
  rationale: string;
  evaluationId: string;
  timestamp: string;
}

// Emit on critical control failure
async emitCriticalFailure(control: Control, evaluation) {
  if (control.criticality !== 'CRITICAL') return;
  
  await this.eventBus.publish('control.critical.failed', {
    eventId: uuidv4(),
    tenantId: control.tenantId,
    projectId: control.projectId,
    controlId: control.controlId,
    frameworkId: control.frameworkId,
    rationale: evaluation.rationale,
    evaluationId: evaluation.id,
    timestamp: new Date().toISOString(),
  });
}
```

**Downstream Consumers**:
- **Notification Service**: Send PagerDuty/Slack alert
- **Incident Manager**: Auto-create incident ticket
- **Audit Log**: Flag for immediate review

## Event Deduplication

### Idempotency Keys
```typescript
@EventPattern('sbom.uploaded')
async handleSbomUploaded(event: SbomUploadedEvent) {
  const idempotencyKey = `sbom:${event.sbomId}:${event.projectId}`;
  
  // Check if already processed
  const processed = await this.redis.get(idempotencyKey);
  if (processed) {
    this.logger.debug(`Skipping duplicate event: ${event.eventId}`);
    return;
  }
  
  try {
    await this.processEvent(event);
    
    // Mark as processed (TTL 24h)
    await this.redis.setex(idempotencyKey, 86400, 'processed');
  } catch (error) {
    this.logger.error(`Event processing failed: ${error.message}`);
    throw error; // NATS will retry
  }
}
```

## Event Replay & Debugging

### Replay Evaluations
```typescript
// tools/cli/replay-evaluations.ts
async replayEvaluations(projectId: string, fromTimestamp: Date, toTimestamp: Date) {
  const stream = await this.nats.subscribe('supply-chain-events', {
    deliver_policy: 'by_start_time',
    opt_start_time: fromTimestamp,
  });
  
  for await (const msg of stream) {
    const event = JSON.parse(msg.data);
    if (event.projectId === projectId && new Date(event.timestamp) <= toTimestamp) {
      await this.cea.handleEvent(event);
    }
  }
}
```

## Next: API Design
