// CEA Metrics Service
// Week 4: Prometheus metrics integration

import { Injectable, OnModuleInit } from '@nestjs/common';
import { Counter, Gauge, Histogram, Registry, collectDefaultMetrics } from 'prom-client';

@Injectable()
export class MetricsService implements OnModuleInit {
  public readonly registry: Registry;

  // Counters
  private readonly rulesLoadedCounter: Counter;
  private readonly controlEvaluationsCounter: Counter;
  private readonly factsStoredCounter: Counter;
  private readonly apiRequestsCounter: Counter;
  private readonly errorsCounter: Counter;

  // Gauges
  private readonly activeRulesGauge: Gauge;
  private readonly activeControlsGauge: Gauge;
  private readonly cacheHitRateGauge: Gauge;

  // Histograms
  private readonly evaluationDurationHistogram: Histogram;
  private readonly apiResponseTimeHistogram: Histogram;
  private readonly dbQueryDurationHistogram: Histogram;

  constructor() {
    this.registry = new Registry();

    // Enable default metrics (CPU, memory, etc.)
    collectDefaultMetrics({ register: this.registry });

    // Initialize counters
    this.rulesLoadedCounter = new Counter({
      name: 'cea_rules_loaded_total',
      help: 'Total number of rules loaded',
      labelNames: ['framework'],
      registers: [this.registry],
    });

    this.controlEvaluationsCounter = new Counter({
      name: 'cea_control_evaluations_total',
      help: 'Total number of control evaluations',
      labelNames: ['status', 'framework', 'project_id'],
      registers: [this.registry],
    });

    this.factsStoredCounter = new Counter({
      name: 'cea_facts_stored_total',
      help: 'Total number of facts stored',
      labelNames: ['source', 'project_id'],
      registers: [this.registry],
    });

    this.apiRequestsCounter = new Counter({
      name: 'cea_api_requests_total',
      help: 'Total API requests',
      labelNames: ['method', 'path', 'status_code'],
      registers: [this.registry],
    });

    this.errorsCounter = new Counter({
      name: 'cea_errors_total',
      help: 'Total errors',
      labelNames: ['type', 'service'],
      registers: [this.registry],
    });

    // Initialize gauges
    this.activeRulesGauge = new Gauge({
      name: 'cea_active_rules',
      help: 'Number of active rules by framework',
      labelNames: ['framework'],
      registers: [this.registry],
    });

    this.activeControlsGauge = new Gauge({
      name: 'cea_active_controls',
      help: 'Number of active controls by status',
      labelNames: ['status', 'project_id'],
      registers: [this.registry],
    });

    this.cacheHitRateGauge = new Gauge({
      name: 'cea_cache_hit_rate',
      help: 'Cache hit rate percentage',
      labelNames: ['cache_type'],
      registers: [this.registry],
    });

    // Initialize histograms
    this.evaluationDurationHistogram = new Histogram({
      name: 'cea_evaluation_duration_seconds',
      help: 'Duration of control evaluations',
      labelNames: ['framework', 'control_id'],
      buckets: [0.001, 0.005, 0.01, 0.05, 0.1, 0.5, 1, 2, 5],
      registers: [this.registry],
    });

    this.apiResponseTimeHistogram = new Histogram({
      name: 'cea_api_response_time_seconds',
      help: 'API response time',
      labelNames: ['method', 'path'],
      buckets: [0.01, 0.05, 0.1, 0.5, 1, 2, 5],
      registers: [this.registry],
    });

    this.dbQueryDurationHistogram = new Histogram({
      name: 'cea_db_query_duration_seconds',
      help: 'Database query duration',
      labelNames: ['operation'],
      buckets: [0.001, 0.005, 0.01, 0.05, 0.1, 0.5, 1],
      registers: [this.registry],
    });
  }

  async onModuleInit() {
    // Set initial gauge values
    this.activeRulesGauge.set({ framework: 'all' }, 0);
    this.activeControlsGauge.set({ status: 'all', project_id: 'all' }, 0);
  }

  // Rule metrics
  incrementRulesLoaded(framework: string, count: number = 1) {
    this.rulesLoadedCounter.inc({ framework }, count);
  }

  setActiveRules(framework: string, count: number) {
    this.activeRulesGauge.set({ framework }, count);
  }

  // Control evaluation metrics
  recordEvaluation(status: string, framework: string, projectId: string) {
    this.controlEvaluationsCounter.inc({ status, framework, project_id: projectId });
  }

  recordEvaluationDuration(framework: string, controlId: string, durationSeconds: number) {
    this.evaluationDurationHistogram.observe({ framework, control_id: controlId }, durationSeconds);
  }

  setActiveControls(status: string, projectId: string, count: number) {
    this.activeControlsGauge.set({ status, project_id: projectId }, count);
  }

  // Fact storage metrics
  incrementFactsStored(source: string, projectId: string, count: number = 1) {
    this.factsStoredCounter.inc({ source, project_id: projectId }, count);
  }

  // API metrics
  recordApiRequest(method: string, path: string, statusCode: number) {
    this.apiRequestsCounter.inc({ method, path, status_code: statusCode.toString() });
  }

  recordApiResponseTime(method: string, path: string, durationSeconds: number) {
    this.apiResponseTimeHistogram.observe({ method, path }, durationSeconds);
  }

  // Database metrics
  recordDbQuery(operation: string, durationSeconds: number) {
    this.dbQueryDurationHistogram.observe({ operation }, durationSeconds);
  }

  // Error metrics
  incrementErrors(type: string, service: string) {
    this.errorsCounter.inc({ type, service });
  }

  // Cache metrics
  setCacheHitRate(cacheType: string, rate: number) {
    this.cacheHitRateGauge.set({ cache_type: cacheType }, rate);
  }

  // Get metrics for Prometheus scraping
  async getMetrics(): Promise<string> {
    return this.registry.metrics();
  }

  // Helper method to time async operations
  async timeOperation<T>(
    operation: () => Promise<T>,
    metricRecorder: (duration: number) => void,
  ): Promise<T> {
    const start = Date.now();
    try {
      const result = await operation();
      const duration = (Date.now() - start) / 1000;
      metricRecorder(duration);
      return result;
    } catch (error) {
      const duration = (Date.now() - start) / 1000;
      metricRecorder(duration);
      throw error;
    }
  }
}
