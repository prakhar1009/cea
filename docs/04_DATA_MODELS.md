# 4. Data Models & Migrations

## Database Schema (Prisma)

### Core Tables

```prisma
// libs/database/schema.prisma

model Tenant {
  id          String   @id @default(uuid())
  name        String
  slug        String   @unique
  tier        TierType @default(FREE)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  projects    Project[]
  users       User[]
  
  @@index([slug])
}

model Project {
  id          String   @id @default(uuid())
  tenantId    String
  name        String
  slug        String
  environment String   @default("production") // production, staging, dev
  
  tenant      Tenant   @relation(fields: [tenantId], references: [id])
  controls    Control[]
  facts       Fact[]
  suggestions Suggestion[]
  
  @@unique([tenantId, slug])
  @@index([tenantId])
}

model Framework {
  id          String   @id @default(uuid())
  name        String   // "NIST 800-53 Rev 5"
  slug        String   @unique // "nist-800-53-r5"
  catalogUrl  String?  // OSCAL catalog URL
  version     String
  isActive    Boolean  @default(true)
  
  controls    Control[]
  
  @@index([slug])
}

model Control {
  id              String        @id @default(uuid())
  projectId       String
  frameworkId     String
  
  controlId       String        // e.g., "AC-2", "CC6.1"
  title           String
  description     String        @db.Text
  parameters      Json          // Framework-specific params { "max_days": 30 }
  criticality     Criticality   @default(MEDIUM)
  parentControlId String?       // For hierarchical controls
  
  currentStatus   ControlStatus @default(NOT_EVALUATED)
  lastEvaluatedAt DateTime?
  
  project         Project       @relation(fields: [projectId], references: [id])
  framework       Framework     @relation(fields: [frameworkId], references: [id])
  parentControl   Control?      @relation("ControlHierarchy", fields: [parentControlId], references: [id])
  childControls   Control[]     @relation("ControlHierarchy")
  
  evaluations     ControlEvaluation[]
  suggestions     Suggestion[]
  
  @@unique([projectId, frameworkId, controlId])
  @@index([projectId, currentStatus])
  @@index([frameworkId, controlId])
}

model ControlEvaluation {
  id              String        @id @default(uuid())
  controlId       String
  projectId       String
  runId           String        // Batch evaluation identifier
  
  status          ControlStatus
  rationale       String        @db.Text
  evidenceRefs    Json          // Array of evidence identifiers
  
  // Reproducibility
  factsHash       String        // SHA-256 of facts state
  rulesetHash     String        // Hash of rule definition
  rulesetVersion  String        // Semver of ruleset
  
  // NLP/Risk scoring (Phase 3)
  nlpScore        Float?
  riskScore       Float?
  
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
  
  control         Control       @relation(fields: [controlId], references: [id])
  
  @@index([controlId, createdAt])
  @@index([projectId, runId])
  @@index([factsHash, rulesetHash]) // For proof verification
}

model Fact {
  id          String   @id @default(uuid())
  projectId   String
  
  key         String   // "sbom.present"
  value       Json     // true, 42, "enabled", etc.
  source      String   // "sbom", "k8s", "vc_registry"
  sourceId    String?  // Foreign key to source entity
  metadata    Json?    // Additional context
  
  collectedAt DateTime
  expiresAt   DateTime? // For TTL facts (e.g., VC validity)
  
  project     Project  @relation(fields: [projectId], references: [id])
  
  @@unique([projectId, key, source])
  @@index([projectId, key])
  @@index([expiresAt]) // For cleanup job
}

model PolicySegment {
  id          String   @id @default(uuid())
  projectId   String
  
  path        String   // "policies/access-control.md"
  lineNumber  Int?
  text        String   @db.Text
  embedding   Float[]  @db.Real // Vector for semantic search
  version     String   // Git SHA or version tag
  baselineHash String  // Hash for drift detection
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([projectId, path])
  @@index([version])
}

model VcStatus {
  id          String   @id @default(uuid())
  projectId   String
  
  subjectDid  String   // DID of entity (user, service, etc.)
  vcId        String   @unique
  vcType      String   // "AccessReviewerCredential"
  state       VcState  @default(VALID)
  notBefore   DateTime
  notAfter    DateTime
  issuerDid   String
  
  lastChecked DateTime @default(now())
  
  @@index([projectId, subjectDid])
  @@index([state, notAfter])
}

model Suggestion {
  id          String         @id @default(uuid())
  controlId   String
  projectId   String
  
  type        SuggestionType // POLICY, CONFIG, CODE
  diff        String         @db.Text // Unified diff format
  targetPath  String
  confidence  Confidence     @default(MEDIUM)
  
  status      SuggestionStatus @default(PENDING)
  appliedAt   DateTime?
  rejectedAt  DateTime?
  
  createdAt   DateTime       @default(now())
  
  control     Control        @relation(fields: [controlId], references: [id])
  project     Project        @relation(fields: [projectId], references: [id])
  
  @@index([projectId, status])
  @@index([controlId])
}

model EvaluationRun {
  id          String   @id @default(uuid())
  projectId   String
  
  trigger     String   // "manual", "event:sbom.uploaded", "scheduled"
  triggeredBy String?  // User ID or system
  
  totalControls Int
  passed      Int
  failed      Int
  manual      Int
  notApplicable Int
  
  startedAt   DateTime @default(now())
  completedAt DateTime?
  
  @@index([projectId, startedAt])
}

// Enums
enum TierType {
  FREE
  TEAM
  ENTERPRISE
}

enum ControlStatus {
  PASS
  FAIL
  MANUAL
  NOT_APPLICABLE
  NOT_EVALUATED
}

enum Criticality {
  LOW
  MEDIUM
  HIGH
  CRITICAL
}

enum VcState {
  VALID
  EXPIRED
  REVOKED
}

enum SuggestionType {
  POLICY
  CONFIG
  CODE
}

enum SuggestionStatus {
  PENDING
  APPROVED
  APPLIED
  REJECTED
}

enum Confidence {
  LOW
  MEDIUM
  HIGH
}
```

## Indexing Strategy

### Performance-Critical Indexes
```sql
-- Control lookup by project + status (dashboard queries)
CREATE INDEX idx_control_project_status 
ON "Control" ("projectId", "currentStatus");

-- Evaluation history lookups
CREATE INDEX idx_evaluation_control_created 
ON "ControlEvaluation" ("controlId", "createdAt" DESC);

-- Fact queries during evaluation
CREATE INDEX idx_fact_project_key 
ON "Fact" ("projectId", "key");

-- Reproducibility verification
CREATE INDEX idx_evaluation_hashes 
ON "ControlEvaluation" ("factsHash", "rulesetHash");

-- Multi-tenant isolation (all tables)
CREATE INDEX idx_project_tenant 
ON "Project" ("tenantId");

-- Expired facts cleanup
CREATE INDEX idx_fact_expires 
ON "Fact" ("expiresAt") 
WHERE "expiresAt" IS NOT NULL;
```

### Vector Search (Phase 3 - NLP)
```sql
-- PostgreSQL pgvector extension for embeddings
CREATE EXTENSION IF NOT EXISTS vector;

ALTER TABLE "PolicySegment" 
ADD COLUMN embedding_vector vector(1536); -- OpenAI ada-002 dimensions

CREATE INDEX idx_policy_embedding 
ON "PolicySegment" 
USING ivfflat (embedding_vector vector_cosine_ops)
WITH (lists = 100); -- Tune based on corpus size
```

## Migration Strategy

### Initial Schema Migration
```typescript
// libs/database/migrations/001_initial_schema.ts
import { Prisma } from '@prisma/client';

export async function up(db: Prisma.TransactionClient) {
  // Run Prisma migration
  await db.$executeRaw`
    -- Created by Prisma migrate
  `;
  
  // Seed default frameworks
  await db.framework.createMany({
    data: [
      {
        slug: 'nist-800-53-r5',
        name: 'NIST 800-53 Revision 5',
        version: '5.1.1',
        catalogUrl: 'https://raw.githubusercontent.com/usnistgov/oscal-content/main/nist.gov/SP800-53/rev5/json/NIST_SP-800-53_rev5_catalog.json',
      },
      {
        slug: 'soc2-2017',
        name: 'SOC 2 (2017 Trust Services Criteria)',
        version: '2017',
      },
      {
        slug: 'pci-dss-4',
        name: 'PCI DSS v4.0',
        version: '4.0',
      },
    ],
  });
}

export async function down(db: Prisma.TransactionClient) {
  // Drop in reverse order
  await db.$executeRaw`DROP TABLE IF EXISTS "Suggestion" CASCADE;`;
  await db.$executeRaw`DROP TABLE IF EXISTS "ControlEvaluation" CASCADE;`;
  // ...
}
```

### Version Control for Rulesets
```typescript
// agents/control-enforcement/src/rules/loader.ts
interface RuleBundle {
  version: string;
  hash: string; // SHA-256 of bundle contents
  signature?: string; // Ed25519 signature for provenance
  rules: Rule[];
}

class RuleLoader {
  async loadBundle(frameworkSlug: string): Promise<RuleBundle> {
    const bundlePath = path.join(__dirname, frameworkSlug, 'bundle.json');
    const bundle: RuleBundle = JSON.parse(await fs.readFile(bundlePath, 'utf-8'));
    
    // Verify hash
    const computedHash = this.hashBundle(bundle.rules);
    if (computedHash !== bundle.hash) {
      throw new Error('Rule bundle integrity check failed');
    }
    
    // Verify signature (if present)
    if (bundle.signature) {
      await this.verifySignature(bundle);
    }
    
    return bundle;
  }
  
  private hashBundle(rules: Rule[]): string {
    const content = JSON.stringify(rules, null, 0);
    return createHash('sha256').update(content).digest('hex');
  }
}
```

## Data Retention & Archival

### Evaluation History
```typescript
// Retention policy: keep 90 days of evaluations, then archive
@Cron('0 2 * * *') // Daily at 2 AM
async archiveOldEvaluations() {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 90);
  
  const oldEvals = await this.db.controlEvaluation.findMany({
    where: { createdAt: { lt: cutoff } },
  });
  
  // Export to cold storage (S3, etc.)
  await this.archiveService.export('control-evaluations', oldEvals);
  
  // Delete from hot DB
  await this.db.controlEvaluation.deleteMany({
    where: { createdAt: { lt: cutoff } },
  });
}
```

### Fact TTL
```typescript
// Expired facts auto-cleanup
@Cron('0 * * * *') // Hourly
async cleanupExpiredFacts() {
  await this.db.fact.deleteMany({
    where: {
      expiresAt: { lte: new Date() },
    },
  });
}
```

## Multi-Tenancy Patterns

### Row-Level Security (RLS)
```sql
-- PostgreSQL RLS for tenant isolation
ALTER TABLE "Control" ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation ON "Control"
  USING (
    "projectId" IN (
      SELECT id FROM "Project" 
      WHERE "tenantId" = current_setting('app.current_tenant_id')::uuid
    )
  );
```

### Application-Layer Isolation
```typescript
// libs/auth/tenant-context.interceptor.ts
@Injectable()
export class TenantContextInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const tenantId = request.user.tenantId;
    
    // Inject tenant context into Prisma queries
    request.db = this.prisma.$extends({
      query: {
        $allModels: {
          async findMany({ args, query }) {
            args.where = { ...args.where, tenantId };
            return query(args);
          },
        },
      },
    });
    
    return next.handle();
  }
}
```

## Next: Event Integration
