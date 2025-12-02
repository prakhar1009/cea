# 10. Performance & Scaling Strategy

## Performance Targets (SLOs)

| Metric | Target | Rationale |
|--------|--------|-----------|
| Control evaluation latency (P95) | <1s | Real-time feedback in CI/CD |
| Batch evaluation (100 controls) | <10s | Fast onboarding |
| Event processing lag | <60s | Fresh compliance posture |
| API response time (P95) | <200ms | Smooth UI experience |
| Concurrent evaluations/pod | 50 | Cost-efficient scaling |

## Caching Strategy

### Multi-Layer Cache
```
L1: In-memory (Node.js Map) → Rule definitions, control metadata
L2: Redis → Facts, evaluation results
L3: PostgreSQL → Historical data
```

### Rule Cache (L1)
```typescript
// services/rule-engine.service.ts
@Injectable()
export class RuleEngineService {
  private ruleCache = new LRUCache<string, Rule>({
    max: 1000, // Max 1000 rules in memory
    ttl: 1000 * 60 * 60, // 1 hour TTL
    updateAgeOnGet: true,
  });
  
  async loadRule(frameworkSlug: string, controlId: string): Promise<Rule> {
    const cacheKey = `${frameworkSlug}:${controlId}`;
    
    let rule = this.ruleCache.get(cacheKey);
    if (!rule) {
      rule = await this.loadRuleFromDisk(frameworkSlug, controlId);
      this.ruleCache.set(cacheKey, rule);
    }
    
    return rule;
  }
  
  // Invalidate cache when rules update
  async reloadRules(frameworkSlug: string) {
    this.ruleCache.clear();
    await this.loadBundle(frameworkSlug);
  }
}
```

### Fact Cache (L2 - Redis)
```typescript
// services/fact-store.service.ts
@Injectable()
export class FactStoreService {
  async loadFacts(projectId: string): Promise<FactMap> {
    const cacheKey = `facts:${projectId}`;
    
    // Try Redis first
    const cached = await this.redis.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }
    
    // Load from DB
    const facts = await this.db.fact.findMany({
      where: { projectId, expiresAt: { gt: new Date() } },
    });
    
    const factMap = this.toFactMap(facts);
    
    // Cache for 5 minutes
    await this.redis.setex(cacheKey, 300, JSON.stringify(factMap));
    
    return factMap;
  }
  
  // Invalidate on fact update
  async saveFacts(projectId: string, facts: Fact[]) {
    await this.db.fact.createMany({ data: facts });
    await this.redis.del(`facts:${projectId}`);
  }
}
```

### Evaluation Result Cache (L2)
```typescript
// Cache control status for fast dashboard rendering
async getControlStatus(controlId: string): Promise<ControlStatus> {
  const cacheKey = `control:${controlId}:status`;
  
  const cached = await this.redis.get(cacheKey);
  if (cached) return cached as ControlStatus;
  
  const control = await this.db.control.findUnique({
    where: { id: controlId },
    select: { currentStatus: true },
  });
  
  await this.redis.setex(cacheKey, 60, control.currentStatus);
  
  return control.currentStatus;
}
```

## Database Optimization

### Connection Pooling
```typescript
// libs/database/database.module.ts
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  pool: {
    min: 10,
    max: 50,
    acquireTimeout: 10000,
    idleTimeout: 30000,
  },
});
```

### Query Optimization
```typescript
// Batch load controls to avoid N+1
async loadControlsWithEvaluations(projectId: string) {
  return await this.db.control.findMany({
    where: { projectId },
    include: {
      latestEvaluation: {
        orderBy: { createdAt: 'desc' },
        take: 1,
      },
      framework: {
        select: { name: true, slug: true },
      },
    },
  });
}

// Use DataLoader for batching
const controlLoader = new DataLoader(async (controlIds: string[]) => {
  const controls = await this.db.control.findMany({
    where: { id: { in: controlIds } },
  });
  
  return controlIds.map(id => controls.find(c => c.id === id));
});
```

### Partial Indexes
```sql
-- Index only active controls (99% of queries)
CREATE INDEX idx_control_active_project 
ON "Control" ("projectId", "currentStatus") 
WHERE "currentStatus" != 'NOT_APPLICABLE';

-- Index only recent evaluations
CREATE INDEX idx_evaluation_recent 
ON "ControlEvaluation" ("controlId", "createdAt" DESC)
WHERE "createdAt" > NOW() - INTERVAL '30 days';
```

### Partitioning (High-Volume Tenants)
```sql
-- Partition evaluations by month
CREATE TABLE control_evaluations_2024_12 
PARTITION OF "ControlEvaluation"
FOR VALUES FROM ('2024-12-01') TO ('2025-01-01');

-- Automated partition management
CREATE OR REPLACE FUNCTION create_monthly_partitions()
RETURNS void AS $$
DECLARE
  start_date DATE := DATE_TRUNC('month', CURRENT_DATE);
  end_date DATE := start_date + INTERVAL '1 month';
  table_name TEXT := 'control_evaluations_' || TO_CHAR(start_date, 'YYYY_MM');
BEGIN
  EXECUTE format('CREATE TABLE IF NOT EXISTS %I PARTITION OF "ControlEvaluation" FOR VALUES FROM (%L) TO (%L)', 
    table_name, start_date, end_date);
END;
$$ LANGUAGE plpgsql;

SELECT cron.schedule('create-partitions', '0 0 1 * *', 'SELECT create_monthly_partitions()');
```

## Batch Processing

### Worker Queue Pattern
```typescript
// workers/batch-evaluator.worker.ts
@Processor('evaluation-queue')
export class BatchEvaluatorWorker {
  @Process('evaluate-project')
  async handleProjectEvaluation(job: Job<{ projectId: string }>) {
    const { projectId } = job.data;
    
    // Load controls in chunks
    const controls = await this.db.control.findMany({
      where: { projectId },
      select: { id: true, controlId: true, frameworkId: true },
    });
    
    const chunks = this.chunk(controls, 10); // 10 at a time
    
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      
      // Parallel evaluation within chunk
      await Promise.all(
        chunk.map(c => this.evaluatorService.evaluateControl(c.id, projectId))
      );
      
      // Update progress
      job.progress((i + 1) / chunks.length * 100);
    }
  }
  
  private chunk<T>(arr: T[], size: number): T[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  }
}
```

### Job Queue (BullMQ)
```typescript
// services/evaluation-queue.service.ts
@Injectable()
export class EvaluationQueueService {
  private queue: Queue;
  
  constructor() {
    this.queue = new Queue('evaluation-queue', {
      connection: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
      },
      defaultJobOptions: {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 2000,
        },
        removeOnComplete: 100, // Keep last 100 completed jobs
        removeOnFail: 500,     // Keep last 500 failed jobs
      },
    });
  }
  
  async enqueueProjectEvaluation(projectId: string, priority: number = 0) {
    return await this.queue.add('evaluate-project', { projectId }, { priority });
  }
  
  async enqueueControlEvaluation(controlId: string, projectId: string) {
    return await this.queue.add('evaluate-control', { controlId, projectId });
  }
}
```

## Horizontal Scaling

### Stateless Agent Design
```yaml
# kubernetes/cea-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cea
spec:
  replicas: 5  # Horizontal scaling
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 2
      maxUnavailable: 1
  template:
    spec:
      containers:
      - name: cea
        image: compiledger/cea:v1.0.0
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-creds
              key: url
        - name: REDIS_URL
          value: "redis://redis:6379"
        - name: NATS_URL
          value: "nats://nats:4222"
        livenessProbe:
          httpGet:
            path: /health
            port: 3003
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3003
          initialDelaySeconds: 10
          periodSeconds: 5
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: cea-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: cea
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

### Load Distribution (NATS Queue Groups)
```typescript
// Multiple CEA instances share work via queue groups
await this.nats.subscribe('sbom.uploaded', {
  queue: 'cea-workers', // All CEA pods join this queue group
  callback: (err, msg) => {
    // Only ONE pod receives each message
    this.handleSbomUploaded(JSON.parse(msg.data));
  },
});
```

## Incremental Evaluation

### Fact Dependency Tracking
```typescript
// Track which controls depend on which facts
interface ControlDependencies {
  controlId: string;
  dependsOnFacts: string[]; // e.g., ['sbom.present', 'iam.mfa.enforced']
}

// Build dependency graph on rule load
async buildDependencyGraph(projectId: string): Promise<Map<string, string[]>> {
  const controls = await this.db.control.findMany({ where: { projectId } });
  const graph = new Map<string, string[]>();
  
  for (const control of controls) {
    const rule = await this.ruleEngine.loadRule(control.frameworkId, control.controlId);
    const facts = rule.when.map(c => c.fact);
    graph.set(control.id, facts);
  }
  
  return graph;
}

// Only re-evaluate impacted controls
async handleFactChange(projectId: string, changedFactKeys: string[]) {
  const graph = await this.buildDependencyGraph(projectId);
  
  const impactedControls = Array.from(graph.entries())
    .filter(([_, facts]) => facts.some(f => changedFactKeys.includes(f)))
    .map(([controlId]) => controlId);
  
  this.logger.info(`Fact change impacted ${impactedControls.length} controls`);
  
  for (const controlId of impactedControls) {
    await this.evaluatorService.enqueueEvaluation(controlId, projectId);
  }
}
```

## Database Read Replicas

### Read-Heavy Queries to Replicas
```typescript
// libs/database/database.service.ts
export class DatabaseService {
  private primary: PrismaClient;
  private replica: PrismaClient;
  
  constructor() {
    this.primary = new PrismaClient({
      datasources: { db: { url: process.env.DATABASE_URL } },
    });
    
    this.replica = new PrismaClient({
      datasources: { db: { url: process.env.DATABASE_REPLICA_URL } },
    });
  }
  
  // Writes go to primary
  async write(model: string, operation: string, args: any) {
    return this.primary[model][operation](args);
  }
  
  // Reads from replica (eventual consistency acceptable)
  async read(model: string, operation: string, args: any) {
    return this.replica[model][operation](args);
  }
}

// Usage
// Dashboard queries (read-only) use replica
const controls = await this.db.read('control', 'findMany', { where: { projectId } });

// Evaluations (write) use primary
await this.db.write('controlEvaluation', 'create', { data: evaluationData });
```

## Observability & Monitoring

### Metrics (Prometheus)
```typescript
// libs/observability/metrics.ts
export const ceaMetrics = {
  evaluationsTotal: new Counter({
    name: 'cea_evaluations_total',
    help: 'Total control evaluations',
    labelNames: ['status', 'framework'],
  }),
  
  evaluationDuration: new Histogram({
    name: 'cea_evaluation_duration_seconds',
    help: 'Control evaluation duration',
    labelNames: ['framework'],
    buckets: [0.1, 0.5, 1, 2, 5],
  }),
  
  factCacheHitRate: new Gauge({
    name: 'cea_fact_cache_hit_rate',
    help: 'Fact cache hit rate',
  }),
  
  queueDepth: new Gauge({
    name: 'cea_queue_depth',
    help: 'Evaluation queue depth',
  }),
};

// Instrument evaluation
async evaluateControl(control: Control, facts: FactMap): Promise<EvalResult> {
  const timer = ceaMetrics.evaluationDuration.startTimer({
    framework: control.framework.slug,
  });
  
  try {
    const result = await this.ruleEngine.evaluate(control, facts);
    
    ceaMetrics.evaluationsTotal.inc({
      status: result.status,
      framework: control.framework.slug,
    });
    
    return result;
  } finally {
    timer();
  }
}
```

### Distributed Tracing (OpenTelemetry)
```typescript
// libs/observability/tracing.ts
import { trace, context } from '@opentelemetry/api';

async evaluateControl(controlId: string, projectId: string) {
  const tracer = trace.getTracer('cea');
  
  return await tracer.startActiveSpan('evaluate-control', async (span) => {
    span.setAttribute('control.id', controlId);
    span.setAttribute('project.id', projectId);
    
    try {
      // 1. Load facts
      await tracer.startActiveSpan('load-facts', async (factsSpan) => {
        const facts = await this.factStore.loadFacts(projectId);
        factsSpan.setAttribute('facts.count', Object.keys(facts).length);
        factsSpan.end();
        return facts;
      });
      
      // 2. Evaluate
      await tracer.startActiveSpan('evaluate', async (evalSpan) => {
        const result = await this.ruleEngine.evaluate(control, facts);
        evalSpan.setAttribute('evaluation.status', result.status);
        evalSpan.end();
        return result;
      });
      
      span.setStatus({ code: 1 }); // OK
    } catch (error) {
      span.recordException(error);
      span.setStatus({ code: 2, message: error.message }); // ERROR
      throw error;
    } finally {
      span.end();
    }
  });
}
```

### Alerting Rules
```yaml
# prometheus/alerts.yaml
groups:
  - name: cea
    interval: 30s
    rules:
      - alert: CEAHighLatency
        expr: histogram_quantile(0.95, cea_evaluation_duration_seconds) > 2
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "CEA evaluation latency high"
      
      - alert: CEAHighFailureRate
        expr: rate(cea_evaluations_total{status="fail"}[5m]) > 0.5
        for: 10m
        labels:
          severity: critical
        annotations:
          summary: "CEA failure rate >50%"
      
      - alert: CEAQueueBacklog
        expr: cea_queue_depth > 1000
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "CEA evaluation queue backlog"
```

## Next: Phased Delivery Roadmap
