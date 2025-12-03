// CEA Event Handler Service
// Week 2: NATS Event Subscriptions and Emissions

import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { FactStoreService } from '../services/fact-store.service';
import { EvaluatorService } from '../services/evaluator.service';
import { prisma } from '@compiledger/database';

@Injectable()
export class EventHandlerService implements OnModuleInit {
  private readonly logger = new Logger(EventHandlerService.name);

  constructor(
    private readonly factStore: FactStoreService,
    private readonly evaluator: EvaluatorService,
  ) {}

  async onModuleInit() {
    this.logger.log('Event handler service initialized');
  }

  /**
   * Handle SBOM uploaded event
   * Triggered when a new SBOM is uploaded to the platform
   */
  @EventPattern('sbom.uploaded')
  async handleSbomUploaded(
    @Payload() data: SbomUploadedPayload,
  ) {
    this.logger.log(`Received sbom.uploaded event for project ${data.projectId}`);

    try {
      // Extract facts from SBOM
      const facts = await this.extractSbomFacts(data);

      // Store facts
      await this.factStore.storeFactsBatch(data.projectId, facts);

      // Trigger evaluation of relevant controls
      await this.triggerControlEvaluation(data.projectId, 'sbom.uploaded');

      this.logger.log(`Processed SBOM for project ${data.projectId}: ${facts.length} facts stored`);
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Failed to process SBOM upload: ${err.message}`, err.stack);
    }
  }

  /**
   * Handle VC status changed event
   * Triggered when a verifiable credential's status changes
   */
  @EventPattern('vc.status.changed')
  async handleVcStatusChanged(
    @Payload() data: VcStatusChangedPayload,
  ) {
    this.logger.log(`Received vc.status.changed event for VC ${data.vcId}`);

    try {
      // Store VC status as facts
      const facts = [
        {
          projectId: data.projectId,
          key: `vc.${data.vcType}.status`,
          value: data.state,
          source: 'vc_registry',
          sourceId: data.vcId,
          metadata: {
            subjectDid: data.subjectDid,
            notBefore: data.notBefore,
            notAfter: data.notAfter,
          },
          collectedAt: new Date(),
          expiresAt: new Date(data.notAfter),
        },
      ];

      await this.factStore.storeFactsBatch(data.projectId, facts);

      // Trigger evaluation of credential-related controls
      await this.triggerControlEvaluation(data.projectId, 'vc.status.changed');

      this.logger.log(`Processed VC status change for ${data.vcId}`);
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Failed to process VC status change: ${err.message}`, err.stack);
    }
  }

  /**
   * Handle policy updated event
   * Triggered when security policies are updated
   */
  @EventPattern('policy.updated')
  async handlePolicyUpdated(
    @Payload() data: PolicyUpdatedPayload,
  ) {
    this.logger.log(`Received policy.updated event for project ${data.projectId}`);

    try {
      // Store policy facts
      const facts = [
        {
          projectId: data.projectId,
          key: 'policy.last_updated',
          value: data.updatedAt,
          source: 'policy_engine',
          sourceId: data.policyId,
          metadata: {
            path: data.path,
            version: data.version,
            changeType: data.changeType,
          },
          collectedAt: new Date(),
        },
      ];

      await this.factStore.storeFactsBatch(data.projectId, facts);

      // Trigger re-evaluation of all controls
      await this.triggerControlEvaluation(data.projectId, 'policy.updated');

      this.logger.log(`Processed policy update for ${data.policyId}`);
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Failed to process policy update: ${err.message}`, err.stack);
    }
  }

  /**
   * Handle configuration changed event
   * Triggered when system configuration changes
   */
  @EventPattern('config.changed')
  async handleConfigChanged(
    @Payload() data: ConfigChangedPayload,
  ) {
    this.logger.log(`Received config.changed event for project ${data.projectId}`);

    try {
      // Store configuration facts
      const facts = [
        {
          projectId: data.projectId,
          key: `config.${data.component}.${data.setting}`,
          value: data.newValue,
          source: 'config_management',
          sourceId: data.changeId,
          metadata: {
            component: data.component,
            oldValue: data.oldValue,
            changedBy: data.changedBy,
          },
          collectedAt: new Date(),
        },
      ];

      await this.factStore.storeFactsBatch(data.projectId, facts);

      // Trigger evaluation of configuration-related controls
      await this.triggerControlEvaluation(data.projectId, 'config.changed');

      this.logger.log(`Processed config change for ${data.component}`);
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Failed to process config change: ${err.message}`, err.stack);
    }
  }

  /**
   * Extract facts from SBOM data
   */
  private async extractSbomFacts(data: SbomUploadedPayload): Promise<any[]> {
    const facts = [];

    // SBOM present fact
    facts.push({
      projectId: data.projectId,
      key: 'sbom.present',
      value: true,
      source: 'sbom',
      sourceId: data.sbomId,
      collectedAt: new Date(),
    });

    // Component count
    if (data.metadata?.componentCount) {
      facts.push({
        projectId: data.projectId,
        key: 'sbom.components.count',
        value: data.metadata.componentCount,
        source: 'sbom',
        sourceId: data.sbomId,
        collectedAt: new Date(),
      });
    }

    // Vulnerability count
    if (data.metadata?.vulnerabilityCount !== undefined) {
      facts.push({
        projectId: data.projectId,
        key: 'sbom.vulnerabilities.count',
        value: data.metadata.vulnerabilityCount,
        source: 'sbom',
        sourceId: data.sbomId,
        collectedAt: new Date(),
      });
    }

    // License compliance
    if (data.metadata?.licenseCompliant !== undefined) {
      facts.push({
        projectId: data.projectId,
        key: 'sbom.licenses.compliant',
        value: data.metadata.licenseCompliant,
        source: 'sbom',
        sourceId: data.sbomId,
        collectedAt: new Date(),
      });
    }

    return facts;
  }

  /**
   * Trigger control evaluation for a project
   */
  private async triggerControlEvaluation(projectId: string, trigger: string) {
    try {
      // Get all controls for the project
      const controls = await prisma.control.findMany({
        where: { projectId },
        select: { id: true, controlId: true, frameworkId: true },
      });

      if (controls.length === 0) {
        this.logger.debug(`No controls found for project ${projectId}`);
        return;
      }

      // Evaluate all controls (facts are retrieved internally by evaluator)
      const results = await this.evaluator.evaluateBatch({
        projectId,
        controlIds: controls.map((c) => c.id),
      });

      // Create evaluation run record
      const runId = `run-${Date.now()}-${Math.random().toString(36).substring(7)}`;
      let passed = 0;
      let failed = 0;
      let manual = 0;
      let notApplicable = 0;

      for (const [controlId, result] of results.entries()) {
        if (result.status === 'PASS') passed++;
        else if (result.status === 'FAIL') failed++;
        else if (result.status === 'MANUAL') manual++;
        else if (result.status === 'NOT_APPLICABLE') notApplicable++;

        // Update control status
        await prisma.control.update({
          where: { id: controlId },
          data: {
            currentStatus: result.status,
            lastEvaluatedAt: new Date(),
          },
        });

        // Emit control status changed event
        await this.emitControlStatusChanged({
          controlId,
          projectId,
          oldStatus: 'NOT_EVALUATED',
          newStatus: result.status,
          trigger,
          timestamp: new Date().toISOString(),
        });
      }

      // Create evaluation run
      await prisma.evaluationRun.create({
        data: {
          id: runId,
          projectId,
          trigger,
          totalControls: controls.length,
          passed,
          failed,
          manual,
          notApplicable,
          startedAt: new Date(),
          completedAt: new Date(),
        },
      });

      // Emit evaluation run completed event
      await this.emitEvaluationRunCompleted({
        runId,
        projectId,
        trigger,
        totalControls: controls.length,
        passed,
        failed,
        manual,
        notApplicable,
        timestamp: new Date().toISOString(),
      });

      this.logger.log(
        `Evaluation completed for project ${projectId}: ${passed}/${controls.length} passed`,
      );
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Failed to trigger control evaluation: ${err.message}`, err.stack);
    }
  }

  /**
   * Emit control status changed event
   */
  private async emitControlStatusChanged(data: ControlStatusChangedPayload) {
    // In a real implementation, this would publish to NATS
    // For now, we'll just log it
    this.logger.debug(`Emitting control.status.changed event`, data);
    // await this.natsClient.emit('control.status.changed', data);
  }

  /**
   * Emit evaluation run completed event
   */
  private async emitEvaluationRunCompleted(data: EvaluationRunCompletedPayload) {
    // In a real implementation, this would publish to NATS
    // For now, we'll just log it
    this.logger.debug(`Emitting evaluation.run.completed event`, data);
    // await this.natsClient.emit('evaluation.run.completed', data);
  }
}

// ============================================================================
// Type Definitions
// ============================================================================

interface SbomUploadedPayload {
  projectId: string;
  sbomId: string;
  format: string;
  uploadedBy: string;
  metadata?: {
    componentCount?: number;
    vulnerabilityCount?: number;
    licenseCompliant?: boolean;
  };
}

interface VcStatusChangedPayload {
  projectId: string;
  vcId: string;
  vcType: string;
  subjectDid: string;
  state: string;
  notBefore: string;
  notAfter: string;
}

interface PolicyUpdatedPayload {
  projectId: string;
  policyId: string;
  path: string;
  version: string;
  changeType: 'created' | 'updated' | 'deleted';
  updatedAt: string;
}

interface ConfigChangedPayload {
  projectId: string;
  changeId: string;
  component: string;
  setting: string;
  oldValue: any;
  newValue: any;
  changedBy: string;
}

interface ControlStatusChangedPayload {
  controlId: string;
  projectId: string;
  oldStatus: string;
  newStatus: string;
  trigger: string;
  timestamp: string;
}

interface EvaluationRunCompletedPayload {
  runId: string;
  projectId: string;
  trigger: string;
  totalControls: number;
  passed: number;
  failed: number;
  manual: number;
  notApplicable: number;
  timestamp: string;
}
