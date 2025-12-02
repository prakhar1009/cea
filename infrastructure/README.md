# Infrastructure Setup - Week 0

This directory contains all infrastructure provisioning files for the Compiledger Control Enforcement Agent (CEA).

## 📁 Directory Structure

```
infrastructure/
├── docker-compose.yml              # Local development stack
├── scripts/
│   ├── init-db.sql                # Database initialization
│   ├── setup-local.sh             # Automated local setup
│   └── validate-infrastructure.sh # Infrastructure validation
├── kubernetes/
│   ├── 00-namespace.yaml          # Namespace and quotas
│   ├── 01-secrets.yaml            # Secrets (⚠️ update for production)
│   ├── 02-postgres.yaml           # PostgreSQL StatefulSet
│   ├── 03-redis.yaml              # Redis StatefulSet
│   └── 04-nats.yaml               # NATS JetStream cluster
└── monitoring/
    └── prometheus.yml             # Prometheus scrape configuration
```

---

## 🚀 Quick Start (Local Development)

### Option 1: Automated Setup (Recommended)

```bash
# Make script executable
chmod +x infrastructure/scripts/setup-local.sh

# Run setup
./infrastructure/scripts/setup-local.sh
```

This script will:
1. Check prerequisites (Docker, Docker Compose)
2. Create necessary directories
3. Generate `.env` file with secure secrets
4. Start all infrastructure services
5. Wait for services to be ready
6. Display service access information

### Option 2: Manual Setup

```bash
# 1. Copy environment template
cp .env.example .env

# 2. Generate secure secrets
export JWT_SECRET=$(openssl rand -base64 32)
export ENCRYPTION_KEY=$(openssl rand -hex 32)

# Update .env with generated secrets

# 3. Start infrastructure
cd infrastructure
docker-compose up -d
cd ..

# 4. Wait for services (about 30 seconds)
sleep 30

# 5. Validate
./infrastructure/scripts/validate-infrastructure.sh
```

---

## 🔍 Service Access

| Service | Endpoint | Credentials |
|---------|----------|-------------|
| **PostgreSQL** | `localhost:5432` | User: `compiledger`<br>Password: `compiledger_dev_pass`<br>Database: `compiledger` |
| **Redis** | `localhost:6379` | Password: `compiledger_redis_pass` |
| **NATS** | `localhost:4222` (client)<br>`localhost:8222` (monitoring) | No auth (dev) |
| **Prometheus** | `http://localhost:9090` | No auth |
| **Grafana** | `http://localhost:3000` | User: `admin`<br>Password: `admin` |

---

## 🐳 Docker Compose Commands

```bash
# Start all services
docker-compose -f infrastructure/docker-compose.yml up -d

# View logs
docker-compose -f infrastructure/docker-compose.yml logs -f

# View logs for specific service
docker-compose -f infrastructure/docker-compose.yml logs -f postgres

# Stop all services
docker-compose -f infrastructure/docker-compose.yml down

# Stop and remove volumes (⚠️ deletes data)
docker-compose -f infrastructure/docker-compose.yml down -v

# Restart a service
docker-compose -f infrastructure/docker-compose.yml restart redis

# Check status
docker-compose -f infrastructure/docker-compose.yml ps
```

---

## ☸️ Kubernetes Deployment (Production)

### Prerequisites
- Kubernetes cluster (1.25+)
- `kubectl` configured
- StorageClass named `fast-ssd` (or update manifests)
- Secrets management (Sealed Secrets or External Secrets Operator recommended)

### Deployment Steps

```bash
# 1. Update secrets (IMPORTANT!)
# Edit infrastructure/kubernetes/01-secrets.yaml
# Replace all CHANGE_ME_IN_PRODUCTION values

# 2. Create namespace
kubectl apply -f infrastructure/kubernetes/00-namespace.yaml

# 3. Create secrets
kubectl apply -f infrastructure/kubernetes/01-secrets.yaml

# 4. Deploy PostgreSQL
kubectl apply -f infrastructure/kubernetes/02-postgres.yaml

# Wait for PostgreSQL to be ready
kubectl wait --for=condition=ready pod -l app=postgres -n compiledger --timeout=300s

# 5. Deploy Redis
kubectl apply -f infrastructure/kubernetes/03-redis.yaml

# 6. Deploy NATS
kubectl apply -f infrastructure/kubernetes/04-nats.yaml

# 7. Verify all services
kubectl get pods -n compiledger
kubectl get pvc -n compiledger
kubectl get services -n compiledger
```

### Verify Deployment

```bash
# Check PostgreSQL
kubectl exec -it postgres-0 -n compiledger -- psql -U compiledger -c "\l"

# Check Redis
kubectl exec -it redis-0 -n compiledger -- redis-cli ping

# Check NATS
kubectl port-forward svc/nats-monitoring 8222:8222 -n compiledger
curl http://localhost:8222/healthz
```

---

## ✅ Infrastructure Validation

Run the validation script to ensure everything is configured correctly:

```bash
chmod +x infrastructure/scripts/validate-infrastructure.sh
./infrastructure/scripts/validate-infrastructure.sh
```

The script checks:
- ✅ PostgreSQL connection and database creation
- ✅ Redis read/write operations
- ✅ NATS health and JetStream status
- ✅ Prometheus and Grafana (optional)
- ✅ Disk space availability
- ✅ `.env` file configuration
- 📊 Performance metrics

---

## 🔧 Troubleshooting

### PostgreSQL Issues

**Problem**: PostgreSQL won't start
```bash
# Check logs
docker logs cea-postgres

# Common fix: remove corrupted data
docker-compose -f infrastructure/docker-compose.yml down -v
docker-compose -f infrastructure/docker-compose.yml up -d postgres
```

**Problem**: Can't connect to database
```bash
# Test connection
docker exec -it cea-postgres psql -U compiledger

# Check if port is occupied
lsof -i :5432
```

### Redis Issues

**Problem**: Redis authentication failed
```bash
# Verify password in .env matches docker-compose.yml
# Test connection
docker exec -it cea-redis redis-cli -a compiledger_redis_pass ping
```

### NATS Issues

**Problem**: NATS JetStream not enabled
```bash
# Check NATS logs
docker logs cea-nats

# Verify JetStream status
curl http://localhost:8222/jsz

# Restart NATS
docker-compose -f infrastructure/docker-compose.yml restart nats
```

### Port Conflicts

If you have port conflicts:
```bash
# Edit docker-compose.yml and change ports:
# PostgreSQL: 5432 → 15432
# Redis: 6379 → 16379
# NATS: 4222 → 14222, etc.

# Update .env with new ports
```

---

## 📊 Monitoring

### Prometheus Metrics

Access Prometheus UI: `http://localhost:9090`

Example queries:
```promql
# PostgreSQL connections
pg_stat_database_numbackends

# Redis memory usage
redis_memory_used_bytes

# NATS message rate
nats_msg_rate
```

### Grafana Dashboards

Access Grafana UI: `http://localhost:3000` (admin/admin)

Pre-configured dashboards (Phase 2):
- PostgreSQL performance
- Redis cache hit rate
- NATS throughput
- CEA agent metrics

---

## 🔒 Security Considerations

### Development
- ✅ Default passwords are acceptable
- ✅ Services exposed on localhost only
- ✅ No TLS required

### Production (Kubernetes)
- ⚠️ **MUST** change all default passwords in `01-secrets.yaml`
- ⚠️ **MUST** use Sealed Secrets or External Secrets Operator
- ⚠️ **MUST** enable TLS for PostgreSQL connections
- ⚠️ **MUST** enable authentication for NATS
- ⚠️ **MUST** configure network policies
- ⚠️ **MUST** enable PostgreSQL Row-Level Security (RLS)

---

## 📈 Performance Tuning

### PostgreSQL

**Development**: Default settings are fine

**Production**: Edit `kubernetes/02-postgres.yaml` ConfigMap
```yaml
shared_buffers: 2GB → 25% of system RAM
effective_cache_size: 6GB → 50-75% of system RAM
max_connections: 200 → Based on expected load
```

### Redis

**Development**: 2GB max memory

**Production**: Edit `kubernetes/03-redis.yaml`
```yaml
maxmemory: 2gb → Based on cache requirements
```

### NATS

**Development**: Single node

**Production**: Already configured as 3-node cluster in manifests

---

## 🧹 Cleanup

### Local Development
```bash
# Stop services (keep data)
docker-compose -f infrastructure/docker-compose.yml down

# Remove all data (⚠️ DESTRUCTIVE)
docker-compose -f infrastructure/docker-compose.yml down -v
rm -rf data/
```

### Kubernetes
```bash
# Delete all resources (⚠️ DESTRUCTIVE)
kubectl delete namespace compiledger

# This will delete:
# - All pods
# - All PVCs (and associated data)
# - All services
# - All secrets
```

---

## 📋 Checklist for Week 0

- [ ] Docker and Docker Compose installed
- [ ] Run `setup-local.sh` script
- [ ] All services green in `validate-infrastructure.sh`
- [ ] PostgreSQL accessible at `localhost:5432`
- [ ] Redis accessible at `localhost:6379`
- [ ] NATS accessible at `localhost:4222`
- [ ] `.env` file generated with secure secrets
- [ ] Prometheus accessible at `localhost:9090`
- [ ] No port conflicts

**Next Step**: Proceed to Week 1 - Database Schema & Prisma Setup

---

## 🆘 Need Help?

- Review logs: `docker-compose logs -f`
- Check validation output: `./infrastructure/scripts/validate-infrastructure.sh`
- Ensure ports are available: `lsof -i :5432` (macOS/Linux)
- Contact platform team: `#infra-support` on Slack

---

**Infrastructure Status**: Ready for CEA Phase 1 development ✅
