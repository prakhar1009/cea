# 9. Security, Isolation & Auditability

## Multi-Tenancy & Data Isolation

### Row-Level Security (PostgreSQL)
```sql
-- Enable RLS on all tenant-scoped tables
ALTER TABLE "Control" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ControlEvaluation" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Fact" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Suggestion" ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only access data for their tenant
CREATE POLICY tenant_isolation ON "Control"
  USING (
    "projectId" IN (
      SELECT p.id FROM "Project" p
      WHERE p."tenantId" = current_setting('app.current_tenant_id')::uuid
    )
  );

-- Apply similar policies to all tables
CREATE POLICY tenant_isolation ON "ControlEvaluation"
  USING ("projectId" IN (SELECT id FROM "Project" WHERE "tenantId" = current_setting('app.current_tenant_id')::uuid));

-- Admin bypass (for internal operations)
CREATE POLICY admin_bypass ON "Control"
  USING (current_setting('app.is_admin', true) = 'true');
```

### Application-Layer Isolation
```typescript
// libs/auth/tenant-context.middleware.ts
@Injectable()
export class TenantContextMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Extract tenant from JWT
    const token = req.headers.authorization?.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req['tenantId'] = decoded.tenantId;
    req['userId'] = decoded.sub;
    
    // Set PostgreSQL session variable for RLS
    req['db'] = this.prisma.$extends({
      query: {
        $allOperations({ operation, model, args, query }) {
          return prisma.$executeRaw`
            SET LOCAL app.current_tenant_id = ${req['tenantId']};
          `.then(() => query(args));
        },
      },
    });
    
    next();
  }
}
```

### Event Bus Tenant Isolation
```typescript
// NATS subject partitioning by tenant
const subjectPattern = `{tenantId}.{domain}.{event}`;

// Subscribe only to tenant's events
@EventPattern(`${tenantId}.control-events.control.status.changed`)
async handleControlChange(event: ControlStatusChangedEvent) {
  // Only receives events for this tenant
}

// Publish with tenant prefix
await this.eventBus.publish(`${tenantId}.control-events.control.status.changed`, event);
```

## Access Control (RBAC)

### Permission Model
```typescript
// libs/auth/permissions.ts
export enum Permission {
  // Controls
  CONTROLS_READ = 'controls:read',
  CONTROLS_EVALUATE = 'controls:evaluate',
  CONTROLS_CONFIGURE = 'controls:configure',
  
  // Suggestions
  SUGGESTIONS_READ = 'suggestions:read',
  SUGGESTIONS_REVIEW = 'suggestions:review',
  SUGGESTIONS_APPLY = 'suggestions:apply',
  
  // Rules
  RULES_READ = 'rules:read',
  RULES_MANAGE = 'rules:manage',
  
  // Admin
  ADMIN_FULL = 'admin:*',
}

export const ROLES = {
  viewer: [Permission.CONTROLS_READ, Permission.SUGGESTIONS_READ],
  operator: [
    Permission.CONTROLS_READ,
    Permission.CONTROLS_EVALUATE,
    Permission.SUGGESTIONS_READ,
  ],
  compliance_manager: [
    Permission.CONTROLS_READ,
    Permission.CONTROLS_EVALUATE,
    Permission.CONTROLS_CONFIGURE,
    Permission.SUGGESTIONS_READ,
    Permission.SUGGESTIONS_REVIEW,
    Permission.SUGGESTIONS_APPLY,
  ],
  admin: [Permission.ADMIN_FULL],
};
```

### Permission Guard
```typescript
// libs/auth/permission.guard.ts
@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  
  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.get<Permission[]>(
      'permissions',
      context.getHandler()
    );
    
    if (!requiredPermissions) return true;
    
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    return requiredPermissions.every(perm => 
      user.permissions.includes(perm) || user.permissions.includes(Permission.ADMIN_FULL)
    );
  }
}

// Usage in controller
@Post('evaluate')
@Permissions(Permission.CONTROLS_EVALUATE)
async triggerEvaluation(@Param('controlId') controlId: string) {
  // ...
}
```

## Audit Logging

### Comprehensive Audit Trail
```typescript
// libs/database/audit-log.service.ts
export interface AuditLogEntry {
  id: string;
  tenantId: string;
  userId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  before?: any;
  after?: any;
  metadata?: any;
  ipAddress?: string;
  userAgent?: string;
  timestamp: Date;
}

@Injectable()
export class AuditLogService {
  async log(entry: Omit<AuditLogEntry, 'id' | 'timestamp'>) {
    await this.db.auditLog.create({
      data: {
        ...entry,
        timestamp: new Date(),
      },
    });
    
    // Also emit event for real-time monitoring
    await this.eventBus.publish('audit.logged', entry);
  }
}
```

### Audit Interceptor
```typescript
// libs/observability/audit.interceptor.ts
@Injectable()
export class AuditInterceptor implements NestInterceptor {
  constructor(private auditLog: AuditLogService) {}
  
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const auditableActions = ['POST', 'PUT', 'PATCH', 'DELETE'];
    
    if (!auditableActions.includes(request.method)) {
      return next.handle();
    }
    
    const before = { ...request.body };
    
    return next.handle().pipe(
      tap(async (response) => {
        await this.auditLog.log({
          tenantId: request.tenantId,
          userId: request.userId,
          action: `${request.method} ${request.path}`,
          resourceType: this.extractResourceType(request.path),
          resourceId: this.extractResourceId(request.path),
          before,
          after: response,
          ipAddress: request.ip,
          userAgent: request.headers['user-agent'],
        });
      })
    );
  }
}
```

### Evaluation Audit Trail
Every evaluation stores:
```typescript
interface EvaluationAudit {
  evaluationId: string;
  controlId: string;
  projectId: string;
  tenantId: string;
  
  // Reproducibility
  factsHash: string;          // SHA-256 of all facts used
  rulesetHash: string;        // SHA-256 of rule definition
  rulesetVersion: string;     // Semver of ruleset
  
  // Inputs
  factsUsed: Record<string, any>;
  ruleConditions: Condition[];
  
  // Outputs
  status: ControlStatus;
  rationale: string;
  evidenceRefs: string[];
  
  // Execution
  triggeredBy: string;        // User ID or "system"
  trigger: string;            // "manual", "event:sbom.uploaded", etc.
  executionTime: number;      // milliseconds
  
  // Provenance
  agentVersion: string;       // CEA version
  timestamp: Date;
}
```

## Cryptographic Provenance

### Evaluation Signatures (Phase 3)
```typescript
// services/provenance.service.ts
@Injectable()
export class ProvenanceService {
  private signingKey: KeyPair;
  
  async signEvaluation(evaluation: ControlEvaluation): Promise<string> {
    const message = this.buildCanonicalMessage(evaluation);
    const signature = await ed25519.sign(
      Buffer.from(message),
      this.signingKey.privateKey
    );
    
    return `ed25519:${signature.toString('base64')}`;
  }
  
  private buildCanonicalMessage(evaluation: ControlEvaluation): string {
    // Deterministic JSON serialization
    const canonical = {
      controlId: evaluation.controlId,
      status: evaluation.status,
      factsHash: evaluation.factsHash,
      rulesetHash: evaluation.rulesetHash,
      timestamp: evaluation.createdAt.toISOString(),
    };
    
    return JSON.stringify(canonical, Object.keys(canonical).sort());
  }
  
  async verifyEvaluation(evaluationId: string, signature: string): Promise<boolean> {
    const evaluation = await this.db.controlEvaluation.findUnique({
      where: { id: evaluationId },
    });
    
    const message = this.buildCanonicalMessage(evaluation);
    const sig = Buffer.from(signature.replace('ed25519:', ''), 'base64');
    
    return ed25519.verify(sig, Buffer.from(message), this.signingKey.publicKey);
  }
}
```

### Reproducibility Verification
```typescript
// controllers/evaluations.controller.ts
@Post('evaluations/:evaluationId/verify')
async verifyEvaluation(@Param('evaluationId') evaluationId: string) {
  const evaluation = await this.db.controlEvaluation.findUnique({
    where: { id: evaluationId },
    include: { control: true },
  });
  
  // 1. Reconstruct facts from hash
  const historicalFacts = await this.factStore.loadByHash(evaluation.factsHash);
  
  // 2. Load ruleset from hash
  const historicalRule = await this.ruleEngine.loadByHash(
    evaluation.rulesetHash,
    evaluation.rulesetVersion
  );
  
  // 3. Re-evaluate with historical inputs
  const recomputedResult = await this.ruleEngine.evaluate(
    evaluation.control,
    historicalFacts,
    historicalRule
  );
  
  // 4. Compare
  const reproducible = recomputedResult.status === evaluation.status;
  
  return {
    reproducible,
    originalStatus: evaluation.status,
    recomputedStatus: recomputedResult.status,
    factsHash: evaluation.factsHash,
    rulesetHash: evaluation.rulesetHash,
    verifiedAt: new Date(),
  };
}
```

## Data Encryption

### At-Rest Encryption
```typescript
// Sensitive fields encrypted in DB
model Fact {
  // ... other fields
  value Json // Can contain sensitive data
}

// Encryption middleware
prisma.$use(async (params, next) => {
  if (params.model === 'Fact' && params.action === 'create') {
    if (params.args.data.key.startsWith('credential.')) {
      // Encrypt sensitive fact values
      params.args.data.value = await encrypt(
        JSON.stringify(params.args.data.value),
        process.env.ENCRYPTION_KEY
      );
    }
  }
  
  if (params.model === 'Fact' && params.action === 'findMany') {
    const result = await next(params);
    // Decrypt on read
    return result.map(fact => {
      if (fact.key.startsWith('credential.')) {
        fact.value = JSON.parse(decrypt(fact.value, process.env.ENCRYPTION_KEY));
      }
      return fact;
    });
  }
  
  return next(params);
});
```

### In-Transit Encryption
```typescript
// All inter-agent communication over TLS
const grpcClient = new GrpcClient({
  url: process.env.CEA_GRPC_URL,
  credentials: grpc.credentials.createSsl(
    fs.readFileSync('certs/ca.crt'),
    fs.readFileSync('certs/client.key'),
    fs.readFileSync('certs/client.crt')
  ),
});

// NATS TLS
const nats = await connect({
  servers: process.env.NATS_URL,
  tls: {
    caFile: 'certs/ca.crt',
    certFile: 'certs/client.crt',
    keyFile: 'certs/client.key',
  },
});
```

## Rate Limiting & DDoS Protection

### Per-Tenant Rate Limits
```typescript
// libs/common/rate-limit.guard.ts
@Injectable()
export class RateLimitGuard implements CanActivate {
  constructor(private redis: Redis) {}
  
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const tenantId = request.tenantId;
    const key = `rate_limit:${tenantId}:${request.path}`;
    
    const count = await this.redis.incr(key);
    if (count === 1) {
      await this.redis.expire(key, 60); // 60-second window
    }
    
    const limit = this.getLimitForTier(request.user.tier);
    if (count > limit) {
      throw new TooManyRequestsException(`Rate limit exceeded: ${limit}/min`);
    }
    
    return true;
  }
  
  private getLimitForTier(tier: string): number {
    return {
      FREE: 10,
      TEAM: 100,
      ENTERPRISE: 1000,
    }[tier] || 10;
  }
}
```

## Compliance & Regulatory Requirements

### SOC 2 Type II Requirements
- ✅ Audit logging of all privileged actions
- ✅ Multi-factor authentication for admin access
- ✅ Data encryption at rest and in transit
- ✅ Role-based access control
- ✅ Tenant data isolation
- ✅ Change tracking and versioning
- ✅ Incident response logging

### GDPR Compliance
```typescript
// Right to erasure (GDPR Article 17)
async deleteTenantData(tenantId: string) {
  // 1. Anonymize audit logs (keep for legal retention)
  await this.db.auditLog.updateMany({
    where: { tenantId },
    data: { userId: 'ANONYMIZED', ipAddress: '0.0.0.0' },
  });
  
  // 2. Delete operational data
  await this.db.fact.deleteMany({ where: { project: { tenantId } } });
  await this.db.controlEvaluation.deleteMany({ where: { project: { tenantId } } });
  await this.db.suggestion.deleteMany({ where: { project: { tenantId } } });
  await this.db.control.deleteMany({ where: { project: { tenantId } } });
  await this.db.project.deleteMany({ where: { tenantId } });
  
  // 3. Export archive for legal retention
  const archive = await this.exportService.createArchive(tenantId);
  await this.storageService.upload(`gdpr-archives/${tenantId}.tar.gz`, archive);
  
  // 4. Purge from caches
  await this.redis.del(`tenant:${tenantId}:*`);
}

// Data portability (GDPR Article 20)
async exportTenantData(tenantId: string): Promise<Buffer> {
  const data = {
    projects: await this.db.project.findMany({ where: { tenantId } }),
    controls: await this.db.control.findMany({ where: { project: { tenantId } } }),
    evaluations: await this.db.controlEvaluation.findMany({ where: { project: { tenantId } } }),
    suggestions: await this.db.suggestion.findMany({ where: { project: { tenantId } } }),
  };
  
  return Buffer.from(JSON.stringify(data, null, 2));
}
```

### Incident Response
```typescript
// Automated security incident detection
@Cron('*/5 * * * *') // Every 5 minutes
async detectAnomalies() {
  // Detect abnormal evaluation volumes
  const recentEvals = await this.db.controlEvaluation.count({
    where: {
      createdAt: { gte: new Date(Date.now() - 5 * 60 * 1000) },
    },
  });
  
  if (recentEvals > 10000) {
    await this.incidentService.create({
      severity: 'high',
      type: 'abnormal_evaluation_volume',
      details: { count: recentEvals },
    });
  }
  
  // Detect mass control failures (potential attack)
  const criticalFailures = await this.db.controlEvaluation.count({
    where: {
      status: 'FAIL',
      control: { criticality: 'CRITICAL' },
      createdAt: { gte: new Date(Date.now() - 5 * 60 * 1000) },
    },
  });
  
  if (criticalFailures > 5) {
    await this.incidentService.create({
      severity: 'critical',
      type: 'mass_critical_failures',
      details: { count: criticalFailures },
    });
  }
}
```

## Next: Performance & Scaling Strategy
