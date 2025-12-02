#!/bin/bash
# Compiledger CEA - Infrastructure Validation Script
# Validates that all infrastructure components are properly configured

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

ERRORS=0
WARNINGS=0

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Compiledger CEA - Infrastructure Validation              ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Test PostgreSQL connection
test_postgres() {
    echo -e "${YELLOW}→ Testing PostgreSQL connection...${NC}"
    
    if docker exec cea-postgres pg_isready -U compiledger &> /dev/null; then
        echo -e "${GREEN}  ✓ PostgreSQL is running${NC}"
        
        # Test database creation
        DB_EXISTS=$(docker exec cea-postgres psql -U compiledger -tAc "SELECT 1 FROM pg_database WHERE datname='compiledger'")
        if [ "$DB_EXISTS" = "1" ]; then
            echo -e "${GREEN}  ✓ Database 'compiledger' exists${NC}"
        else
            echo -e "${RED}  ✗ Database 'compiledger' not found${NC}"
            ERRORS=$((ERRORS + 1))
        fi
        
        # Test extensions
        UUID_EXT=$(docker exec cea-postgres psql -U compiledger -tAc "SELECT 1 FROM pg_extension WHERE extname='uuid-ossp'")
        if [ "$UUID_EXT" = "1" ]; then
            echo -e "${GREEN}  ✓ Extension 'uuid-ossp' loaded${NC}"
        else
            echo -e "${YELLOW}  ⚠ Extension 'uuid-ossp' not loaded${NC}"
            WARNINGS=$((WARNINGS + 1))
        fi
    else
        echo -e "${RED}  ✗ PostgreSQL is not running${NC}"
        ERRORS=$((ERRORS + 1))
    fi
    echo ""
}

# Test Redis connection
test_redis() {
    echo -e "${YELLOW}→ Testing Redis connection...${NC}"
    
    if docker exec cea-redis redis-cli -a compiledger_redis_pass ping 2>/dev/null | grep -q "PONG"; then
        echo -e "${GREEN}  ✓ Redis is running${NC}"
        
        # Test write/read
        docker exec cea-redis redis-cli -a compiledger_redis_pass SET test_key "test_value" &> /dev/null
        READ_VALUE=$(docker exec cea-redis redis-cli -a compiledger_redis_pass GET test_key 2>/dev/null)
        docker exec cea-redis redis-cli -a compiledger_redis_pass DEL test_key &> /dev/null
        
        if [ "$READ_VALUE" = "test_value" ]; then
            echo -e "${GREEN}  ✓ Redis read/write working${NC}"
        else
            echo -e "${RED}  ✗ Redis read/write failed${NC}"
            ERRORS=$((ERRORS + 1))
        fi
    else
        echo -e "${RED}  ✗ Redis is not running${NC}"
        ERRORS=$((ERRORS + 1))
    fi
    echo ""
}

# Test NATS connection
test_nats() {
    echo -e "${YELLOW}→ Testing NATS connection...${NC}"
    
    NATS_HEALTH=$(curl -sf http://localhost:8222/healthz)
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}  ✓ NATS is running${NC}"
        
        # Check JetStream
        JETSTREAM_INFO=$(curl -sf http://localhost:8222/jsz)
        if echo "$JETSTREAM_INFO" | grep -q "config"; then
            echo -e "${GREEN}  ✓ JetStream is enabled${NC}"
        else
            echo -e "${RED}  ✗ JetStream is not enabled${NC}"
            ERRORS=$((ERRORS + 1))
        fi
    else
        echo -e "${RED}  ✗ NATS is not running${NC}"
        ERRORS=$((ERRORS + 1))
    fi
    echo ""
}

# Test Prometheus
test_prometheus() {
    echo -e "${YELLOW}→ Testing Prometheus...${NC}"
    
    PROM_HEALTH=$(curl -sf http://localhost:9090/-/healthy)
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}  ✓ Prometheus is running${NC}"
    else
        echo -e "${YELLOW}  ⚠ Prometheus is not running (optional for development)${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
    echo ""
}

# Test Grafana
test_grafana() {
    echo -e "${YELLOW}→ Testing Grafana...${NC}"
    
    GRAFANA_HEALTH=$(curl -sf http://localhost:3000/api/health)
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}  ✓ Grafana is running${NC}"
    else
        echo -e "${YELLOW}  ⚠ Grafana is not running (optional for development)${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
    echo ""
}

# Check disk space
check_disk_space() {
    echo -e "${YELLOW}→ Checking disk space...${NC}"
    
    AVAILABLE_GB=$(df -BG . | tail -1 | awk '{print $4}' | sed 's/G//')
    
    if [ "$AVAILABLE_GB" -gt 10 ]; then
        echo -e "${GREEN}  ✓ Sufficient disk space: ${AVAILABLE_GB}GB available${NC}"
    elif [ "$AVAILABLE_GB" -gt 5 ]; then
        echo -e "${YELLOW}  ⚠ Low disk space: ${AVAILABLE_GB}GB available (10GB+ recommended)${NC}"
        WARNINGS=$((WARNINGS + 1))
    else
        echo -e "${RED}  ✗ Insufficient disk space: ${AVAILABLE_GB}GB available (10GB+ required)${NC}"
        ERRORS=$((ERRORS + 1))
    fi
    echo ""
}

# Check .env file
check_env_file() {
    echo -e "${YELLOW}→ Checking .env configuration...${NC}"
    
    if [ -f ".env" ]; then
        echo -e "${GREEN}  ✓ .env file exists${NC}"
        
        # Check for placeholder secrets
        if grep -q "CHANGE_ME" .env; then
            echo -e "${YELLOW}  ⚠ .env contains placeholder values (CHANGE_ME)${NC}"
            WARNINGS=$((WARNINGS + 1))
        else
            echo -e "${GREEN}  ✓ No placeholder values found${NC}"
        fi
    else
        echo -e "${RED}  ✗ .env file not found${NC}"
        ERRORS=$((ERRORS + 1))
    fi
    echo ""
}

# Performance checks
performance_checks() {
    echo -e "${YELLOW}→ Running performance checks...${NC}"
    
    # PostgreSQL connection count
    PG_CONNECTIONS=$(docker exec cea-postgres psql -U compiledger -tAc "SELECT count(*) FROM pg_stat_activity" 2>/dev/null || echo "0")
    echo -e "  PostgreSQL connections: $PG_CONNECTIONS"
    
    # Redis memory usage
    REDIS_MEMORY=$(docker exec cea-redis redis-cli -a compiledger_redis_pass INFO memory 2>/dev/null | grep "used_memory_human" | cut -d: -f2 | tr -d '\r')
    echo -e "  Redis memory usage: $REDIS_MEMORY"
    
    # NATS connections
    NATS_CONNECTIONS=$(curl -sf http://localhost:8222/connz | grep -o '"num_connections":[0-9]*' | cut -d: -f2)
    echo -e "  NATS connections: ${NATS_CONNECTIONS:-0}"
    
    echo ""
}

# Summary
show_summary() {
    echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║   Validation Summary                                       ║${NC}"
    echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    
    if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
        echo -e "${GREEN}✓ All checks passed!${NC}"
        echo -e "${GREEN}  Infrastructure is ready for CEA deployment.${NC}"
        exit 0
    elif [ $ERRORS -eq 0 ]; then
        echo -e "${YELLOW}⚠ Validation completed with $WARNINGS warning(s)${NC}"
        echo -e "${YELLOW}  Infrastructure is functional but has minor issues.${NC}"
        exit 0
    else
        echo -e "${RED}✗ Validation failed with $ERRORS error(s) and $WARNINGS warning(s)${NC}"
        echo -e "${RED}  Please fix the errors before deploying CEA.${NC}"
        exit 1
    fi
}

# Main execution
main() {
    test_postgres
    test_redis
    test_nats
    test_prometheus
    test_grafana
    check_disk_space
    check_env_file
    performance_checks
    show_summary
}

main
