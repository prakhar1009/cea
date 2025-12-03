# Multi-stage Dockerfile for Control Enforcement Agent
# Week 3: Production-ready containerization

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY agents/control-enforcement/package*.json ./agents/control-enforcement/
COPY libs/common/package*.json ./libs/common/
COPY libs/database/package*.json ./libs/database/

# Install dependencies
RUN npm ci --workspace=@compiledger/cea

# Copy source code
COPY agents/control-enforcement ./agents/control-enforcement
COPY libs/common ./libs/common
COPY libs/database ./libs/database

# Generate Prisma client
WORKDIR /app/libs/database
RUN npx prisma generate

# Build CEA
WORKDIR /app/agents/control-enforcement
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create app user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

WORKDIR /app

# Copy package files
COPY --chown=nodejs:nodejs package*.json ./
COPY --chown=nodejs:nodejs agents/control-enforcement/package*.json ./agents/control-enforcement/
COPY --chown=nodejs:nodejs libs/common/package*.json ./libs/common/
COPY --chown=nodejs:nodejs libs/database/package*.json ./libs/database/

# Install production dependencies only
RUN npm ci --workspace=@compiledger/cea --omit=dev

# Copy built artifacts from builder
COPY --chown=nodejs:nodejs --from=builder /app/agents/control-enforcement/dist ./agents/control-enforcement/dist
COPY --chown=nodejs:nodejs --from=builder /app/libs/common/dist ./libs/common/dist
COPY --chown=nodejs:nodejs --from=builder /app/libs/database/dist ./libs/database/dist
COPY --chown=nodejs:nodejs --from=builder /app/libs/database/prisma ./libs/database/prisma

# Copy rule files
COPY --chown=nodejs:nodejs agents/control-enforcement/rules ./agents/control-enforcement/rules

# Set environment variables
ENV NODE_ENV=production \
    PORT=3003 \
    LOG_LEVEL=info

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3003

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3003/api/v1/cea/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1); })"

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start application
CMD ["node", "agents/control-enforcement/dist/main.js"]
