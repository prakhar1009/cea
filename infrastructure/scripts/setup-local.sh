#!/bin/bash
# Compiledger CEA - Local Development Setup Script
# Week 0: Infrastructure Provisioning

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Compiledger CEA - Local Infrastructure Setup            ║${NC}"
echo -e "${BLUE}║   Week 0: Infrastructure Provisioning                     ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Check prerequisites
check_prerequisites() {
    echo -e "${YELLOW}→ Checking prerequisites...${NC}"
    
    local missing_tools=()
    
    if ! command -v docker &> /dev/null; then
        missing_tools+=("docker")
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        missing_tools+=("docker-compose")
    fi
    
    if [ ${#missing_tools[@]} -ne 0 ]; then
        echo -e "${RED}✗ Missing required tools: ${missing_tools[*]}${NC}"
        echo -e "${YELLOW}  Please install them and try again.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✓ All prerequisites met${NC}"
    echo ""
}

# Create directory structure
create_directories() {
    echo -e "${YELLOW}→ Creating directory structure...${NC}"
    
    mkdir -p infrastructure/scripts
    mkdir -p infrastructure/monitoring/grafana/{dashboards,datasources}
    mkdir -p logs
    mkdir -p data/{postgres,redis,nats}
    
    echo -e "${GREEN}✓ Directories created${NC}"
    echo ""
}

# Generate .env file if it doesn't exist
generate_env_file() {
    if [ -f ".env" ]; then
        echo -e "${YELLOW}→ .env file already exists, skipping...${NC}"
        echo ""
        return
    fi
    
    echo -e "${YELLOW}→ Generating .env file from template...${NC}"
    
    if [ -f ".env.example" ]; then
        cp .env.example .env
        
        # Generate random secrets
        JWT_SECRET=$(openssl rand -base64 32)
        ENCRYPTION_KEY=$(openssl rand -hex 32)
        
        # Replace placeholders (macOS and Linux compatible)
        if [[ "$OSTYPE" == "darwin"* ]]; then
            sed -i '' "s|JWT_SECRET=\".*\"|JWT_SECRET=\"${JWT_SECRET}\"|" .env
            sed -i '' "s|ENCRYPTION_KEY=\".*\"|ENCRYPTION_KEY=\"${ENCRYPTION_KEY}\"|" .env
        else
            sed -i "s|JWT_SECRET=\".*\"|JWT_SECRET=\"${JWT_SECRET}\"|" .env
            sed -i "s|ENCRYPTION_KEY=\".*\"|ENCRYPTION_KEY=\"${ENCRYPTION_KEY}\"|" .env
        fi
        
        echo -e "${GREEN}✓ .env file generated with secure secrets${NC}"
    else
        echo -e "${RED}✗ .env.example not found${NC}"
        exit 1
    fi
    echo ""
}

# Start infrastructure
start_infrastructure() {
    echo -e "${YELLOW}→ Starting infrastructure services...${NC}"
    
    cd infrastructure
    docker-compose up -d
    cd ..
    
    echo -e "${GREEN}✓ Services started${NC}"
    echo ""
}

# Wait for services to be ready
wait_for_services() {
    echo -e "${YELLOW}→ Waiting for services to be ready...${NC}"
    
    # Wait for PostgreSQL
    echo -n "  PostgreSQL..."
    max_attempts=30
    attempt=0
    until docker exec cea-postgres pg_isready -U compiledger &> /dev/null || [ $attempt -eq $max_attempts ]; do
        sleep 1
        attempt=$((attempt + 1))
        echo -n "."
    done
    
    if [ $attempt -eq $max_attempts ]; then
        echo -e " ${RED}✗ Failed${NC}"
        exit 1
    fi
    echo -e " ${GREEN}✓${NC}"
    
    # Wait for Redis
    echo -n "  Redis..........."
    attempt=0
    until docker exec cea-redis redis-cli -a compiledger_redis_pass ping &> /dev/null || [ $attempt -eq $max_attempts ]; do
        sleep 1
        attempt=$((attempt + 1))
        echo -n "."
    done
    
    if [ $attempt -eq $max_attempts ]; then
        echo -e " ${RED}✗ Failed${NC}"
        exit 1
    fi
    echo -e " ${GREEN}✓${NC}"
    
    # Wait for NATS
    echo -n "  NATS............"
    attempt=0
    until curl -sf http://localhost:8222/healthz &> /dev/null || [ $attempt -eq $max_attempts ]; do
        sleep 1
        attempt=$((attempt + 1))
        echo -n "."
    done
    
    if [ $attempt -eq $max_attempts ]; then
        echo -e " ${RED}✗ Failed${NC}"
        exit 1
    fi
    echo -e " ${GREEN}✓${NC}"
    
    echo ""
}

# Display service status
show_status() {
    echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║   Infrastructure Status                                    ║${NC}"
    echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    
    echo -e "${GREEN}✓ All services are running!${NC}"
    echo ""
    echo "Service Access Points:"
    echo -e "  ${YELLOW}PostgreSQL:${NC}  localhost:5432"
    echo -e "    User: compiledger / Password: compiledger_dev_pass"
    echo -e "    Database: compiledger"
    echo ""
    echo -e "  ${YELLOW}Redis:${NC}       localhost:6379"
    echo -e "    Password: compiledger_redis_pass"
    echo ""
    echo -e "  ${YELLOW}NATS:${NC}        localhost:4222 (client)"
    echo -e "                localhost:8222 (monitoring)"
    echo ""
    echo -e "  ${YELLOW}Prometheus:${NC}  localhost:9090"
    echo -e "  ${YELLOW}Grafana:${NC}     localhost:3000 (admin/admin)"
    echo ""
    echo "Quick Commands:"
    echo -e "  View logs:       ${BLUE}docker-compose -f infrastructure/docker-compose.yml logs -f${NC}"
    echo -e "  Stop services:   ${BLUE}docker-compose -f infrastructure/docker-compose.yml down${NC}"
    echo -e "  Restart:         ${BLUE}docker-compose -f infrastructure/docker-compose.yml restart${NC}"
    echo ""
    echo -e "${GREEN}Next Steps:${NC}"
    echo "  1. Review the .env file and adjust settings if needed"
    echo "  2. Run Prisma migrations: npm run migrate"
    echo "  3. Start the CEA agent: npm run start:cea"
    echo ""
}

# Main execution
main() {
    check_prerequisites
    create_directories
    generate_env_file
    start_infrastructure
    wait_for_services
    show_status
    
    echo -e "${GREEN}✓ Infrastructure setup complete!${NC}"
}

# Run main function
main
