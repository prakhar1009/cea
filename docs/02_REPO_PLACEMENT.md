# 2. Repository Placement & Agent Registration

## Monorepo Structure

```
compiledger/
├── apps/
│   ├── platform-api/          # External REST API (Next.js backend or NestJS)
│   ├── admin-ui/              # Internal ops dashboard
│   └── compliance-portal/     # Auditor-facing UI
│
├── agents/
│   ├── autodoc/               # Policy corpus indexer
│   ├── github-sentinel/       # SBOM + PR automation
│   ├── credential-monitor/    # VC/DID status poller
│   ├── control-enforcement/   # ← CEA LIVES HERE
│   │   ├── src/
│   │   │   ├── main.ts                    # Agent bootstrap
│   │   │   ├── cea.module.ts              # NestJS module
│   │   │   ├── controllers/               # HTTP/gRPC endpoints
│   │   │   ├── services/
│   │   │   │   ├── evaluator.service.ts   # Core evaluation logic
│   │   │   │   ├── fact-store.service.ts  # Fact aggregation
│   │   │   │   ├── rule-engine.service.ts # Rule execution
│   │   │   │   └── suggestion.service.ts  # Remediation diff generation
│   │   │   ├── workers/
│   │   │   │   ├── event-consumer.worker.ts
│   │   │   │   └── batch-evaluator.worker.ts
│   │   │   ├── rules/
│   │   │   │   ├── nist-800-53/           # YAML rule definitions
│   │   │   │   ├── soc2/
│   │   │   │   └── loader.ts              # Signed bundle loader
│   │   │   └── nlp/
│   │   │       ├── policy-aligner.ts      # Semantic comparison
│   │   │       └── embeddings.service.ts  # Vector operations
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── Dockerfile
│   │
│   └── zkp-attestation/       # Proof generation agent
│
├── libs/
│   ├── database/              # Shared Prisma/TypeORM client
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── events/                # Event bus abstraction
│   │   ├── publishers/
│   │   ├── subscribers/
│   │   └── schemas/           # Event type definitions
│   ├── oscal/                 # OSCAL parsing utilities
│   ├── auth/                  # Multi-tenant auth + RBAC
│   ├── observability/         # OpenTelemetry setup
│   └── common/                # Shared types, utils
│
├── tools/
│   ├── cli/                   # Admin CLI (trigger evals, etc.)
│   └── scripts/               # Migration runners, seeders
│
├── docs/
├── package.json               # Workspace root
├── turbo.json                 # Turborepo config (if using)
├── nx.json                    # Nx config (alternative)
└── docker-compose.yml         # Local dev stack
```

## Agent Registration

### Bootstrap Pattern (agents/control-enforcement/src/main.ts)
```typescript
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CeaModule } from './cea.module';
import { EventBusService } from '@libs/events';
import { Logger } from '@libs/observability';

async function bootstrap() {
  const logger = new Logger('CEA');
  
  // 1. Create NestJS app
  const app = await NestFactory.create(CeaModule, {
    logger: logger.getNestLogger(),
  });

  // 2. Register as event-driven microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [process.env.NATS_URL],
      queue: 'cea-worker-group', // Load balancing across replicas
    },
  });

  // 3. Register HTTP API (for external calls)
  app.setGlobalPrefix('api/v1/cea');
  
  // 4. Register with platform discovery
  const eventBus = app.get(EventBusService);
  await eventBus.publish('agent.registered', {
    name: 'control-enforcement',
    version: '1.0.0',
    capabilities: [
      'control.evaluate',
      'policy.align',
      'suggestion.create',
    ],
  });

  await app.startAllMicroservices();
  await app.listen(3003); // CEA HTTP port
  
  logger.info(`CEA ready on port 3003`);
}

bootstrap();
```

### Module Structure (cea.module.ts)
```typescript
import { Module } from '@nestjs/common';
import { DatabaseModule } from '@libs/database';
import { EventsModule } from '@libs/events';
import { AuthModule } from '@libs/auth';
import { EvaluatorService } from './services/evaluator.service';
import { RuleEngineService } from './services/rule-engine.service';
import { FactStoreService } from './services/fact-store.service';
import { SuggestionService } from './services/suggestion.service';
import { EventConsumerWorker } from './workers/event-consumer.worker';
import { ControlsController } from './controllers/controls.controller';

@Module({
  imports: [
    DatabaseModule,      // Shared Prisma client
    EventsModule,        // NATS/RabbitMQ
    AuthModule,          // Tenant context + RBAC
  ],
  providers: [
    EvaluatorService,
    RuleEngineService,
    FactStoreService,
    SuggestionService,
    EventConsumerWorker, // Background worker
  ],
  controllers: [
    ControlsController,  // REST API
  ],
})
export class CeaModule {}
```

## Shared Libraries Usage

| Library | CEA Usage |
|---------|-----------|
| `@libs/database` | Access `controls`, `control_evaluations`, `facts` tables |
| `@libs/events` | Subscribe to `sbom.uploaded`, `vc.changed`; emit `control.status.changed` |
| `@libs/oscal` | Parse OSCAL catalogs/profiles/components |
| `@libs/auth` | Extract tenant context from JWT; check RBAC permissions |
| `@libs/observability` | Trace evaluation spans; metrics for pass/fail rates |
| `@libs/common` | Shared types (ControlStatus enum, FrameworkType, etc.) |

## Deployment Pattern

### Docker (agents/control-enforcement/Dockerfile)
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3003
CMD ["node", "dist/main.js"]
```

### Kubernetes Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cea
spec:
  replicas: 3
  selector:
    matchLabels:
      app: cea
  template:
    spec:
      containers:
      - name: cea
        image: compiledger/cea:v1.0.0
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-creds
              key: url
        - name: NATS_URL
          value: "nats://nats:4222"
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
```

## Next: Data Models & Migrations
