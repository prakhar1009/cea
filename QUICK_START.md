# CEA - Quick Start Guide

## ⚡ Fast Setup (5 Minutes)

### 1. Start Infrastructure (if not already running)
```powershell
cd infrastructure
docker-compose up -d
cd ..
```

### 2. Install Dependencies
```powershell
npm install
```

### 3. Generate Prisma Client
```powershell
cd libs\database
npx prisma generate
cd ..\..
```

### 4. Run Database Migration
```powershell
cd libs\database
npx prisma migrate dev --name init
cd ..\..
```

### 5. Build All Packages
```powershell
npm run build
```

### 6. Start CEA Agent
```powershell
npm run start:cea
```

### 7. Test
```powershell
# In another terminal
curl http://localhost:3003/api/v1/cea/health
```

---

## ✅ Expected Result

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

Health check response:
```json
{
  "status": "ok",
  "service": "control-enforcement-agent",
  "version": "1.0.0",
  "timestamp": "2024-12-01T..."
}
```

---

## 📊 What Was Built

### Infrastructure (Week 0)
✅ PostgreSQL 16  
✅ Redis 7  
✅ NATS JetStream  
✅ Prometheus + Grafana

### Application (Week 1)
✅ TypeScript monorepo with Turborepo  
✅ Database schema (12 tables) with Prisma  
✅ Shared libraries (@compiledger/common, @compiledger/database)  
✅ NestJS agent with health check  

---

## 🔗 Access Points

| Service | URL | Credentials |
|---------|-----|-------------|
| CEA Health Check | http://localhost:3003/api/v1/cea/health | - |
| PostgreSQL | localhost:5432 | compiledger / compiledger_dev_pass |
| Prisma Studio | Run `npm run db:studio` | - |
| Prometheus | http://localhost:9090 | - |
| Grafana | http://localhost:3000 | admin / admin |

---

## 🛠️ Common Commands

```powershell
# Development
npm run start:cea          # Start CEA with hot reload
npm run build              # Build all packages
npm run test               # Run tests

# Database
npm run db:studio          # Open Prisma Studio
npm run migrate            # Run migrations

# Infrastructure
docker-compose -f infrastructure/docker-compose.yml ps        # Check status
docker-compose -f infrastructure/docker-compose.yml logs -f   # View logs
docker-compose -f infrastructure/docker-compose.yml down      # Stop services
```

---

## 🆘 Troubleshooting

**"Cannot find module" errors?**
→ Run `npm install` and `npx prisma generate`

**Database connection failed?**
→ Check `docker ps` - PostgreSQL must be running

**Port 3003 in use?**
→ Change `PORT=3004` in `.env`

---

## 📚 Full Documentation

- **Week 0**: `infrastructure/README.md`
- **Week 1**: `WEEK_1_SETUP.md`
- **Implementation Plan**: `docs/00_INDEX.md`

---

**Status**: ✅ Foundation Ready  
**Next**: Implement Rule Engine + Fact Store (Day 3-5)
