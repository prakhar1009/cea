// CEA API Integration Tests
// Week 2: End-to-end API testing

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CeaModule } from '../../src/cea.module';
import { prisma } from '@compiledger/database';

describe('CEA API Integration Tests (e2e)', () => {
  let app: INestApplication;
  let testProjectId: string;
  let testTenantId: string;
  let testFrameworkId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CeaModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api/v1/cea');
    await app.init();

    // Create test data
    await setupTestData();
  });

  afterAll(async () => {
    // Cleanup test data
    await cleanupTestData();
    await app.close();
  });

  describe('Health Endpoints', () => {
    it('/api/v1/cea/health (GET) - should return health status', () => {
      return request(app.getHttpServer())
        .get('/api/v1/cea/health')
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('status', 'ok');
          expect(res.body).toHaveProperty('timestamp');
          expect(res.body).toHaveProperty('uptime');
        });
    });

    it('/api/v1/cea/health/ready (GET) - should return readiness status', () => {
      return request(app.getHttpServer())
        .get('/api/v1/cea/health/ready')
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('ready', true);
          expect(res.body).toHaveProperty('database', 'connected');
          expect(res.body).toHaveProperty('rules', 'loaded');
        });
    });
  });

  describe('Rules Endpoints', () => {
    it('/api/v1/cea/rules (GET) - should list all rules', () => {
      return request(app.getHttpServer())
        .get('/api/v1/cea/rules')
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body.rules)).toBe(true);
          expect(res.body.rules.length).toBeGreaterThan(0);
          expect(res.body).toHaveProperty('total');
          expect(res.body).toHaveProperty('frameworks');
        });
    });

    it('/api/v1/cea/rules/stats (GET) - should return rule statistics', () => {
      return request(app.getHttpServer())
        .get('/api/v1/cea/rules/stats')
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('totalRules');
          expect(res.body).toHaveProperty('frameworks');
          expect(Array.isArray(res.body.frameworks)).toBe(true);
          expect(res.body.totalRules).toBeGreaterThanOrEqual(20); // Week 2: 20 NIST + 10 SOC2 = 30
        });
    });

    it('/api/v1/cea/rules/:ruleId (GET) - should get a specific rule', () => {
      return request(app.getHttpServer())
        .get('/api/v1/cea/rules/nist-800-53-r5-ac-2')
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('id', 'nist-800-53-r5-ac-2');
          expect(res.body).toHaveProperty('framework', 'nist-800-53-r5');
          expect(res.body).toHaveProperty('title');
          expect(res.body).toHaveProperty('description');
          expect(res.body).toHaveProperty('when');
          expect(res.body).toHaveProperty('passIf');
        });
    });

    it('/api/v1/cea/rules/framework/:framework (GET) - should get rules by framework', () => {
      return request(app.getHttpServer())
        .get('/api/v1/cea/rules/framework/nist-800-53-r5')
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body.rules)).toBe(true);
          expect(res.body.rules.length).toBeGreaterThan(0);
          res.body.rules.forEach((rule: any) => {
            expect(rule.framework).toBe('nist-800-53-r5');
          });
        });
    });

    it('/api/v1/cea/rules/framework/soc2 (GET) - should get SOC2 rules', () => {
      return request(app.getHttpServer())
        .get('/api/v1/cea/rules/framework/soc2')
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body.rules)).toBe(true);
          expect(res.body.rules.length).toBe(10); // Week 2: 10 SOC2 controls
          res.body.rules.forEach((rule: any) => {
            expect(rule.framework).toBe('soc2');
          });
        });
    });
  });

  describe('Facts Endpoints', () => {
    it('/api/v1/cea/facts (POST) - should store a fact', async () => {
      const fact = {
        projectId: testProjectId,
        key: 'test.fact.example',
        value: true,
        source: 'test',
        metadata: { testKey: 'testValue' },
      };

      return request(app.getHttpServer())
        .post('/api/v1/cea/facts')
        .send(fact)
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('success', true);
          expect(res.body).toHaveProperty('factId');
        });
    });

    it('/api/v1/cea/facts/batch (POST) - should store multiple facts', async () => {
      const facts = [
        {
          key: 'test.batch.fact1',
          value: 'value1',
          source: 'test',
        },
        {
          key: 'test.batch.fact2',
          value: 42,
          source: 'test',
        },
      ];

      return request(app.getHttpServer())
        .post('/api/v1/cea/facts/batch')
        .send({
          projectId: testProjectId,
          facts,
        })
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('success', true);
          expect(res.body).toHaveProperty('stored', 2);
        });
    });

    it('/api/v1/cea/facts/:projectId (GET) - should retrieve facts for a project', () => {
      return request(app.getHttpServer())
        .get(`/api/v1/cea/facts/${testProjectId}`)
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('projectId', testProjectId);
          expect(res.body).toHaveProperty('facts');
          expect(typeof res.body.facts).toBe('object');
        });
    });

    it('/api/v1/cea/facts/:projectId/summary (GET) - should get facts summary', () => {
      return request(app.getHttpServer())
        .get(`/api/v1/cea/facts/${testProjectId}/summary`)
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('projectId', testProjectId);
          expect(res.body).toHaveProperty('totalFacts');
          expect(res.body).toHaveProperty('sources');
          expect(Array.isArray(res.body.sources)).toBe(true);
        });
    });
  });

  describe('Controls Endpoints', () => {
    let testControlId: string;

    beforeAll(async () => {
      // Create a test control
      const control = await prisma.control.create({
        data: {
          projectId: testProjectId,
          frameworkId: testFrameworkId,
          controlId: 'AC-2',
          title: 'Account Management',
          description: 'Test control for integration testing',
          parameters: {},
          criticality: 'MEDIUM',
        },
      });
      testControlId = control.id;
    });

    it('/api/v1/cea/controls/:projectId (GET) - should list controls for a project', () => {
      return request(app.getHttpServer())
        .get(`/api/v1/cea/controls/${testProjectId}`)
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body.controls)).toBe(true);
          expect(res.body).toHaveProperty('total');
          expect(res.body).toHaveProperty('byStatus');
        });
    });

    it('/api/v1/cea/controls/:controlId (GET) - should get a specific control', () => {
      return request(app.getHttpServer())
        .get(`/api/v1/cea/controls/${testControlId}`)
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('id', testControlId);
          expect(res.body).toHaveProperty('controlId', 'AC-2');
          expect(res.body).toHaveProperty('currentStatus');
          expect(res.body).toHaveProperty('evaluationHistory');
        });
    });

    it('/api/v1/cea/controls/evaluate (POST) - should evaluate a single control', async () => {
      // First, store relevant facts
      await request(app.getHttpServer())
        .post('/api/v1/cea/facts/batch')
        .send({
          projectId: testProjectId,
          facts: [
            { key: 'iam.account_management.enabled', value: true, source: 'test' },
            { key: 'iam.account_review.last_date', value: new Date().toISOString(), source: 'test' },
            { key: 'iam.inactive_accounts.disabled', value: true, source: 'test' },
          ],
        });

      // Now evaluate the control
      return request(app.getHttpServer())
        .post('/api/v1/cea/controls/evaluate')
        .send({
          projectId: testProjectId,
          controlId: testControlId,
        })
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('controlId', testControlId);
          expect(res.body).toHaveProperty('status');
          expect(res.body).toHaveProperty('rationale');
          expect(res.body).toHaveProperty('evidenceRefs');
          expect(res.body).toHaveProperty('factsHash');
          expect(['PASS', 'FAIL', 'MANUAL', 'NOT_APPLICABLE']).toContain(res.body.status);
        });
    });

    it('/api/v1/cea/controls/evaluate/batch (POST) - should batch evaluate controls', async () => {
      return request(app.getHttpServer())
        .post('/api/v1/cea/controls/evaluate/batch')
        .send({
          projectId: testProjectId,
          controlIds: [testControlId],
        })
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('runId');
          expect(res.body).toHaveProperty('totalControls');
          expect(res.body).toHaveProperty('results');
          expect(Array.isArray(res.body.results)).toBe(true);
        });
    });
  });

  describe('Error Handling', () => {
    it('should return 404 for non-existent rule', () => {
      return request(app.getHttpServer())
        .get('/api/v1/cea/rules/non-existent-rule-id')
        .expect(404);
    });

    it('should return 400 for invalid fact data', () => {
      return request(app.getHttpServer())
        .post('/api/v1/cea/facts')
        .send({
          projectId: testProjectId,
          // Missing required 'key' field
          value: 'test',
        })
        .expect(400);
    });

    it('should return 404 for non-existent control', () => {
      return request(app.getHttpServer())
        .get('/api/v1/cea/controls/non-existent-control-id')
        .expect(404);
    });
  });

  // ============================================================================
  // Helper Functions
  // ============================================================================

  async function setupTestData() {
    // Create test tenant
    const tenant = await prisma.tenant.create({
      data: {
        name: 'Test Tenant',
        slug: `test-tenant-${Date.now()}`,
        tier: 'TEAM',
      },
    });
    testTenantId = tenant.id;

    // Create test project
    const project = await prisma.project.create({
      data: {
        tenantId: testTenantId,
        name: 'Test Project',
        slug: `test-project-${Date.now()}`,
        environment: 'development',
      },
    });
    testProjectId = project.id;

    // Create test framework
    const framework = await prisma.framework.create({
      data: {
        name: 'NIST 800-53 Rev 5',
        slug: 'nist-800-53-r5',
        version: '5.0',
        isActive: true,
      },
    });
    testFrameworkId = framework.id;
  }

  async function cleanupTestData() {
    // Delete in reverse order of creation due to foreign keys
    await prisma.fact.deleteMany({ where: { projectId: testProjectId } });
    await prisma.controlEvaluation.deleteMany({ where: { projectId: testProjectId } });
    await prisma.evaluationRun.deleteMany({ where: { projectId: testProjectId } });
    await prisma.control.deleteMany({ where: { projectId: testProjectId } });
    await prisma.project.deleteMany({ where: { id: testProjectId } });
    await prisma.framework.deleteMany({ where: { id: testFrameworkId } });
    await prisma.tenant.deleteMany({ where: { id: testTenantId } });
  }
});
