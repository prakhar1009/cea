# Week 1: Application Setup & Database Schema

## ✅ What Was Created

### Project Structure
```
cea/
├── package.json                                # Root package.json (monorepo)
├── turbo.json                                  # Turborepo configuration
├── tsconfig.json                               # Base TypeScript config
├── .prettierrc                                 # Code formatting
├── .eslintrc.js                                # Linting rules
├── .gitignore                                  # Git ignore patterns
│
├── libs/                                       # Shared libraries
│   ├── database/                               # Prisma ORM & database client
│   │   ├── prisma/
│   │   │   └── schema.prisma                   # Complete database schema (12 tables)
│   │   ├── src/
│   │   │   └── index.ts                        # Prisma client singleton
│   │   └── package.json
│   │
│   └── common/                                 # Shared types & utilities
│       ├── src/
│       │   ├── types/                          # TypeScript types
│       │   │   ├── control.types.ts
│       │   │   ├── event.types.ts
│       │   │   └── api.types.ts
│       │   ├── constants.ts                    # Platform constants
│       │   └── utils.ts                        # Utility functions
│       └── package.json
│
└── agents/
    └── control-enforcement/                    # CEA agent
        ├── src/
        │   ├── main.ts                         # Bootstrap
        │   ├── cea.module.ts                   # Root module
        │   └── controllers/
        │       └── health.controller.ts        # Health check
        └── package.json
```

### Database Schema
Complete Prisma schema with **12 tables**:
- ✅ **Tenant** - Multi-tenancy support
- ✅ **User** - User management
- ✅ **Project** - Project/environment isolation
- ✅ **Framework** - NIST, SOC2, PCI, etc.
- ✅ **Control** - Control definitions
- ✅ **ControlEvaluation** - Evaluation history
- ✅ **EvaluationRun** - Batch run tracking
- ✅ **Fact** - Fact store (SBOM, config, VC)
- ✅ **PolicySegment** - Policy corpus (Phase 3)
- ✅ **VcStatus** - Credential status (Phase 3)
- ✅ **Suggestion** - Remediation suggestions (Phase 2)
- ✅ **AuditLog** - Complete audit trail

---

## 🚀 Setup Instructions

### Step 1: Install Dependencies

```powershell
# Navigate to project root
cd c:\Users\sarth\OneDrive\Documents\GitHub\cea

# Install all dependencies (this will take a few minutes)
npm install
```

This will install:
- Turborepo for monorepo management
- NestJS framework
- Prisma ORM
- TypeScript and all dev dependencies
- All agent and library dependencies

### Step 2: Generate Prisma Client

```powershell
# Generate Prisma client from schema
cd libs\database
npx prisma generate
cd ..\..
```

This creates the `@prisma/client` types in `libs/database/src/generated`.

### Step 3: Create Database Migration

```powershell
# Ensure PostgreSQL is running (from Week 0)
docker ps --filter "name=cea-postgres"

# Run initial migration
cd libs\database
npx prisma migrate dev --name init
cd ..\..
```

This will:
- Create the migration files
- Apply the migration to the database
- Create all 12 tables with indexes

### Step 4: Verify Database

```powershell
# Open Prisma Studio to view the database
cd libs\database
npx prisma studio
```

This opens a web UI at `http://localhost:5555` where you can see all tables.

### Step 5: Build All Packages

```powershell
# Build all workspaces
npm run build
```

This compiles TypeScript for all libs and agents.

### Step 6: Start CEA Agent

```powershell
# Start in development mode with hot reload
npm run start:cea
```

You should see:
```
╔════════════════════════════════════════════════════════════╗
║   Control Enforcement Agent (CEA)                          ║
║   Status: READY                                            ║
║   HTTP:   http://localhost:3003                            ║
║   NATS:   nats://localhost:4222                            ║
║   Phase:  1 (MVP - Deterministic Rules)                    ║
╚════════════════════════════════════════════════════════════╝
```

### Step 7: Test Health Endpoint

```powershell
# Test health check
curl http://localhost:3003/api/v1/cea/health

# Expected response:
# {
#   "status": "ok",
#   "service": "control-enforcement-agent",
#   "version": "1.0.0",
#   "timestamp": "2024-12-01T..."
# }
```

---

## 📊 Database Schema Details

### Key Relationships

```
Tenant (1) ─→ (N) Project ─→ (N) Control
                  │               │
                  │               ├─→ (N) ControlEvaluation
                  │               └─→ (N) Suggestion
                  │
                  └─→ (N) Fact
```

### Indexes Created

Performance-critical indexes:
- `controls(projectId, currentStatus)` - Dashboard queries
- `control_evaluations(controlId, createdAt)` - History lookups
- `facts(projectId, key)` - Fact queries during evaluation
- `control_evaluations(factsHash, rulesetHash)` - Reproducibility
- All tenant-scoped tables indexed on `tenantId`

---

## 🔍 Troubleshooting

### Error: "Cannot find module './generated'"
**Solution**: Run `npx prisma generate` in `libs/database`

### Error: "Cannot connect to database"
**Solution**: Ensure PostgreSQL is running:
```powershell
docker ps --filter "name=cea-postgres"
# If not running:
cd infrastructure
docker-compose up -d postgres
```

### Error: "Port 3003 already in use"
**Solution**: Change port in `.env`:
```
PORT=3004
```

### TypeScript Errors After Install
**Solution**: Rebuild all packages:
```powershell
npm run clean
npm run build
```

---

## 📝 Next Steps (Week 1 Continued)

We've completed the foundation. Next tasks:

### ✅ Completed
- [x] Node.js/TypeScript project initialized
- [x] Monorepo structure created
- [x] Database schema defined (12 tables)
- [x] Shared libraries created (@compiledger/common, @compiledger/database)
- [x] CEA agent bootstrapped with NestJS
- [x] Health check endpoint working

### 🔄 In Progress (Next)
- [ ] Create Rule Engine service
- [ ] Create Fact Store service
- [ ] Create Evaluator service
- [ ] Write first 5 NIST control rules (YAML)
- [ ] Add unit tests for rule evaluation

---

## 🎯 Week 1 Sprint 1 Checklist

- [x] **Day 1**: Project initialization (✅ DONE)
  - [x] Package.json and workspace setup
  - [x] TypeScript configuration
  - [x] ESLint and Prettier
  
- [x] **Day 2**: Database schema (✅ DONE)
  - [x] Prisma schema with 12 tables
  - [x] Database client library
  - [x] Migrations setup

- [ ] **Day 3**: Core services (Next)
  - [ ] Rule Engine service
  - [ ] Fact Store service
  - [ ] Rule loader (YAML parser)

- [ ] **Day 4**: Evaluator service
  - [ ] Deterministic evaluation logic
  - [ ] Condition evaluator
  - [ ] Pass logic resolver

- [ ] **Day 5**: First control rules
  - [ ] 5 NIST 800-53 control rules
  - [ ] Unit tests
  - [ ] Integration test

---

## 🔗 Quick Commands Reference

```powershell
# Install dependencies
npm install

# Generate Prisma client
cd libs\database && npx prisma generate && cd ..\..

# Run migrations
cd libs\database && npx prisma migrate dev && cd ..\..

# Build all packages
npm run build

# Start CEA (dev mode with hot reload)
npm run start:cea

# Open Prisma Studio
npm run db:studio

# Run tests
npm run test

# Lint code
npm run lint

# Format code
npm run format
```

---

## 📚 Documentation References

- **Database Schema**: See `libs/database/prisma/schema.prisma`
- **Shared Types**: See `libs/common/src/types/`
- **API Contracts**: See implementation plan `docs/06_API_DESIGN.md`
- **Rule Format**: See `docs/07_RULE_ENGINE.md`

---

**Status**: ✅ **Week 1 Foundation Complete**  
**Next**: Implement Rule Engine, Fact Store, and Evaluator services

Ready to continue with the next tasks? Let me know and I'll proceed with creating the Rule Engine and first 5 NIST control rules!
