export interface BaseEvent {
    eventId: string;
    tenantId: string;
    projectId: string;
    timestamp: string;
}
export interface SbomUploadedEvent extends BaseEvent {
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
}
export interface VcStatusChangedEvent extends BaseEvent {
    vcId: string;
    subjectDid: string;
    vcType: string;
    oldState: string;
    newState: string;
    reason?: string;
}
export interface ControlStatusChangedEvent extends BaseEvent {
    controlId: string;
    frameworkId: string;
    oldStatus: string;
    newStatus: string;
    rationale: string;
    evidenceRefs: string[];
    evaluationId: string;
    criticality: string;
}
export interface PolicySuggestionCreatedEvent extends BaseEvent {
    controlId: string;
    suggestionId: string;
    type: string;
    targetPath: string;
    confidence: string;
    diffPreview: string;
}
//# sourceMappingURL=event.types.d.ts.map