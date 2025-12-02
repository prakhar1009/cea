# 6. API Design

## API Surface

### External API (REST)
Exposed via `apps/platform-api` (proxies to CEA internal endpoints)

### Internal API (gRPC)
Direct agent-to-agent communication

## REST Endpoints

### Base Path
```
/api/v1/projects/{projectId}/controls
```

---

### 1. List Controls with Status
**Endpoint**: `GET /api/v1/projects/{projectId}/controls`

**Query Parameters**:
- `framework` (string, optional): Filter by framework slug
- `status` (string, optional): Filter by status (`pass`, `fail`, `manual`, `not_applicable`)
- `criticality` (string, optional): Filter by criticality
- `page` (int, default: 1)
- `limit` (int, default: 50, max: 200)

**Response** (200 OK):
```json
{
  "data": [
    {
      "id": "uuid",
      "controlId": "AC-2",
      "title": "Account Management",
      "framework": {
        "id": "uuid",
        "name": "NIST 800-53 Rev 5",
        "slug": "nist-800-53-r5"
      },
      "currentStatus": "fail",
      "criticality": "high",
      "lastEvaluatedAt": "2024-12-01T10:30:00Z",
      "latestEvaluation": {
        "id": "uuid",
        "rationale": "Policy requires account deactivation ≤30 days; found 45 days",
        "evidenceRefs": ["policy:access-control.md#L45"],
        "updatedAt": "2024-12-01T10:30:00Z"
      }
    }
  ],
  "meta": {
    "total": 150,
    "page": 1,
    "limit": 50,
    "pages": 3
  }
}
```

**Auth**: Requires `controls:read` permission

---

### 2. Get Control Details
**Endpoint**: `GET /api/v1/projects/{projectId}/controls/{controlId}`

**Response** (200 OK):
```json
{
  "id": "uuid",
  "controlId": "AC-2",
  "title": "Account Management",
  "description": "The organization manages information system accounts...",
  "framework": {
    "id": "uuid",
    "name": "NIST 800-53 Rev 5",
    "slug": "nist-800-53-r5"
  },
  "parameters": {
    "account_inactivity_period": "30 days",
    "require_mfa": true
  },
  "criticality": "high",
  "currentStatus": "fail",
  "lastEvaluatedAt": "2024-12-01T10:30:00Z",
  "parentControl": {
    "id": "uuid",
    "controlId": "AC",
    "title": "Access Control Family"
  },
  "childControls": [
    {"controlId": "AC-2(1)", "title": "Automated System Account Management"},
    {"controlId": "AC-2(2)", "title": "Automated Temporary Account Management"}
  ]
}
```

**Auth**: Requires `controls:read` permission

---

### 3. Get Control Evaluation History
**Endpoint**: `GET /api/v1/projects/{projectId}/controls/{controlId}/evaluations`

**Query Parameters**:
- `limit` (int, default: 10)
- `offset` (int, default: 0)

**Response** (200 OK):
```json
{
  "data": [
    {
      "id": "uuid",
      "status": "fail",
      "rationale": "Policy drift detected: alignment score 0.72",
      "evidenceRefs": ["policy:access-control.md#L45", "sbom:abc123"],
      "factsHash": "sha256:abcdef...",
      "rulesetHash": "sha256:123456...",
      "rulesetVersion": "1.2.0",
      "nlpScore": 0.72,
      "createdAt": "2024-12-01T10:30:00Z"
    },
    {
      "id": "uuid",
      "status": "pass",
      "rationale": "All requirements satisfied",
      "evidenceRefs": ["sbom:abc123"],
      "createdAt": "2024-11-30T08:15:00Z"
    }
  ],
  "meta": {
    "total": 45,
    "limit": 10,
    "offset": 0
  }
}
```

**Auth**: Requires `controls:read` permission

---

### 4. Get Project Posture Summary
**Endpoint**: `GET /api/v1/projects/{projectId}/posture`

**Query Parameters**:
- `framework` (string, optional): Filter by framework

**Response** (200 OK):
```json
{
  "summary": {
    "total": 150,
    "pass": 85,
    "fail": 25,
    "manual": 30,
    "notApplicable": 10,
    "passRate": 0.567,
    "lastUpdated": "2024-12-01T10:30:00Z"
  },
  "byFramework": [
    {
      "framework": {
        "slug": "nist-800-53-r5",
        "name": "NIST 800-53 Rev 5"
      },
      "total": 100,
      "pass": 60,
      "fail": 15,
      "manual": 20,
      "notApplicable": 5,
      "passRate": 0.6
    }
  ],
  "byCriticality": {
    "critical": {"total": 20, "pass": 10, "fail": 8, "manual": 2},
    "high": {"total": 50, "pass": 30, "fail": 10, "manual": 10},
    "medium": {"total": 60, "pass": 40, "fail": 5, "manual": 15},
    "low": {"total": 20, "pass": 5, "fail": 2, "manual": 3}
  },
  "trend": [
    {"date": "2024-11-01", "passRate": 0.50},
    {"date": "2024-11-15", "passRate": 0.54},
    {"date": "2024-12-01", "passRate": 0.567}
  ]
}
```

**Auth**: Requires `controls:read` permission

---

### 5. Trigger Control Re-Evaluation
**Endpoint**: `POST /api/v1/projects/{projectId}/controls/{controlId}/evaluate`

**Request Body**:
```json
{
  "priority": "high",
  "async": true
}
```

**Response** (202 Accepted):
```json
{
  "jobId": "uuid",
  "status": "queued",
  "estimatedDuration": 5000
}
```

**Auth**: Requires `controls:evaluate` permission

---

### 6. Trigger Full Project Evaluation
**Endpoint**: `POST /api/v1/projects/{projectId}/controls/evaluate`

**Request Body**:
```json
{
  "framework": "nist-800-53-r5",
  "async": true
}
```

**Response** (202 Accepted):
```json
{
  "runId": "uuid",
  "status": "started",
  "totalControls": 150,
  "estimatedDuration": 120000
}
```

**Auth**: Requires `controls:evaluate` permission

---

### 7. Get Evaluation Run Status
**Endpoint**: `GET /api/v1/projects/{projectId}/evaluations/{runId}`

**Response** (200 OK):
```json
{
  "runId": "uuid",
  "status": "in_progress",
  "trigger": "manual",
  "triggeredBy": "user:john@example.com",
  "progress": {
    "total": 150,
    "completed": 80,
    "passed": 45,
    "failed": 15,
    "manual": 20
  },
  "startedAt": "2024-12-01T10:00:00Z",
  "estimatedCompletionAt": "2024-12-01T10:02:30Z"
}
```

**Auth**: Requires `controls:read` permission

---

### 8. List Suggestions
**Endpoint**: `GET /api/v1/projects/{projectId}/suggestions`

**Query Parameters**:
- `status` (string, optional): `pending`, `approved`, `applied`, `rejected`
- `type` (string, optional): `policy`, `config`, `code`
- `controlId` (string, optional)

**Response** (200 OK):
```json
{
  "data": [
    {
      "id": "uuid",
      "controlId": "AC-2",
      "type": "policy",
      "targetPath": "policies/access-control.md",
      "confidence": "medium",
      "status": "pending",
      "diffPreview": "@@ -45,1 +45,1 @@\n-disable inactive accounts ≤ 45 days\n+disable inactive accounts ≤ 30 days",
      "createdAt": "2024-12-01T10:30:00Z"
    }
  ],
  "meta": {
    "total": 12,
    "page": 1,
    "limit": 50
  }
}
```

**Auth**: Requires `suggestions:read` permission

---

### 9. Get Suggestion Details
**Endpoint**: `GET /api/v1/projects/{projectId}/suggestions/{suggestionId}`

**Response** (200 OK):
```json
{
  "id": "uuid",
  "controlId": "AC-2",
  "control": {
    "controlId": "AC-2",
    "title": "Account Management"
  },
  "type": "policy",
  "targetPath": "policies/access-control.md",
  "diff": "...", // Full unified diff
  "confidence": "medium",
  "status": "pending",
  "createdAt": "2024-12-01T10:30:00Z"
}
```

**Auth**: Requires `suggestions:read` permission

---

### 10. Approve/Reject Suggestion
**Endpoint**: `POST /api/v1/projects/{projectId}/suggestions/{suggestionId}/review`

**Request Body**:
```json
{
  "action": "approve",
  "comment": "Looks good, applying..."
}
```

**Response** (200 OK):
```json
{
  "id": "uuid",
  "status": "approved",
  "reviewedBy": "user:john@example.com",
  "reviewedAt": "2024-12-01T11:00:00Z"
}
```

**Auth**: Requires `suggestions:review` permission

---

### 11. Verify Evaluation Reproducibility
**Endpoint**: `POST /api/v1/projects/{projectId}/evaluations/{evaluationId}/verify`

**Request Body**: (empty)

**Response** (200 OK):
```json
{
  "evaluationId": "uuid",
  "reproducible": true,
  "originalStatus": "fail",
  "recomputedStatus": "fail",
  "factsHash": "sha256:abcdef...",
  "rulesetHash": "sha256:123456...",
  "verifiedAt": "2024-12-01T12:00:00Z"
}
```

**Auth**: Requires `controls:verify` permission

---

## Internal gRPC API

### Proto Definition
```protobuf
// agents/control-enforcement/proto/cea.proto
syntax = "proto3";

package cea.v1;

service ControlEnforcementService {
  rpc EvaluateControl(EvaluateControlRequest) returns (EvaluateControlResponse);
  rpc GetControlStatus(GetControlStatusRequest) returns (GetControlStatusResponse);
  rpc GetProjectPosture(GetProjectPostureRequest) returns (GetProjectPostureResponse);
}

message EvaluateControlRequest {
  string project_id = 1;
  string control_id = 2;
  bool async = 3;
}

message EvaluateControlResponse {
  string job_id = 1;
  string status = 2; // "completed", "queued"
  ControlStatus result = 3;
}

message ControlStatus {
  string control_id = 1;
  string status = 2; // "pass", "fail", "manual"
  string rationale = 3;
  repeated string evidence_refs = 4;
  string updated_at = 5;
}
```

### Usage by Other Agents
```typescript
// GitHub Sentinel: Check if PR would break controls
const cea = this.grpcClient.getService<CeaService>('cea');
const postureBefore = await cea.getProjectPosture({ projectId });

// Apply PR changes to staging snapshot
await this.applyPrToStaging(pr);

// Re-evaluate
await cea.evaluateControl({ projectId, controlId: 'CM-2', async: false });
const postureAfter = await cea.getProjectPosture({ projectId });

if (postureAfter.passRate < postureBefore.passRate) {
  await this.blockPr(pr, 'Would degrade compliance posture');
}
```

## Webhooks (Phase 3)

### Register Webhook
**Endpoint**: `POST /api/v1/projects/{projectId}/webhooks`

**Request Body**:
```json
{
  "url": "https://example.com/compliance-webhook",
  "events": ["control.status.changed", "control.critical.failed"],
  "secret": "webhook-signing-key"
}
```

**Webhook Payload** (POST to registered URL):
```json
{
  "webhookId": "uuid",
  "event": "control.status.changed",
  "timestamp": "2024-12-01T10:30:00Z",
  "data": {
    "projectId": "uuid",
    "controlId": "AC-2",
    "oldStatus": "pass",
    "newStatus": "fail",
    "rationale": "..."
  },
  "signature": "sha256=..."
}
```

## Next: Rule Engine Architecture
