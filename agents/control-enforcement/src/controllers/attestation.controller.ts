// CEA Attestation Controller
// Phase 3: API endpoints for VCs, ZKP, and NLP policy analysis

import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { NlpPolicyAnalyzerService, PolicyDocument, PolicyAnalysisResult } from '../services/nlp-policy-analyzer.service';
import { VerifiableCredentialsService, VerifiableCredential, ComplianceAttestation, VerificationResult } from '../services/verifiable-credentials.service';
import { ZkpService, ZkProof, ComplianceProofRequest, ProofVerificationResult } from '../services/zkp.service';
import { MetricsService } from '../services/metrics.service';

@Controller('attestation')
export class AttestationController {
  constructor(
    private readonly nlpAnalyzer: NlpPolicyAnalyzerService,
    private readonly vcService: VerifiableCredentialsService,
    private readonly zkpService: ZkpService,
    private readonly metricsService: MetricsService,
  ) {}

  /**
   * Analyze a policy document using NLP
   * POST /api/v1/cea/attestation/analyze-policy
   */
  @Post('analyze-policy')
  @HttpCode(HttpStatus.OK)
  async analyzePolicy(
    @Body() body: PolicyDocument
  ): Promise<PolicyAnalysisResult> {
    const result = await this.nlpAnalyzer.analyzePolicy(body);
    this.metricsService.recordApiRequest('POST', '/attestation/analyze-policy', 200);
    return result;
  }

  /**
   * Generate YAML rules from extracted policy requirements
   * POST /api/v1/cea/attestation/generate-rules
   */
  @Post('generate-rules')
  @HttpCode(HttpStatus.OK)
  async generateRules(
    @Body() body: { policyId: string }
  ): Promise<{ rules: string[]; count: number }> {
    // This would fetch the analyzed policy and generate YAML
    // For now, returning placeholder
    this.metricsService.recordApiRequest('POST', '/attestation/generate-rules', 200);
    
    return {
      rules: [
        '# Generated rules would appear here',
        '# Based on NLP analysis of policy document',
      ],
      count: 0,
    };
  }

  /**
   * Issue a verifiable credential for compliance status
   * POST /api/v1/cea/attestation/issue-credential
   */
  @Post('issue-credential')
  @HttpCode(HttpStatus.CREATED)
  async issueCredential(
    @Body() body: {
      projectId: string;
      framework: string;
      attestation: ComplianceAttestation;
      validityDays?: number;
    }
  ): Promise<VerifiableCredential> {
    const credential = await this.vcService.issueCredential(
      body.projectId,
      body.framework,
      body.attestation,
      { validityDays: body.validityDays }
    );

    this.metricsService.recordApiRequest('POST', '/attestation/issue-credential', 201);
    return credential;
  }

  /**
   * Verify a verifiable credential
   * POST /api/v1/cea/attestation/verify-credential
   */
  @Post('verify-credential')
  @HttpCode(HttpStatus.OK)
  async verifyCredential(
    @Body() body: { credential: VerifiableCredential }
  ): Promise<VerificationResult> {
    const result = await this.vcService.verifyCredential(body.credential);
    this.metricsService.recordApiRequest('POST', '/attestation/verify-credential', 200);
    return result;
  }

  /**
   * Revoke a verifiable credential
   * POST /api/v1/cea/attestation/revoke-credential
   */
  @Post('revoke-credential')
  @HttpCode(HttpStatus.OK)
  async revokeCredential(
    @Body() body: { credentialId: string; reason: string }
  ): Promise<{ revoked: boolean; timestamp: string }> {
    const result = await this.vcService.revokeCredential(
      body.credentialId,
      body.reason
    );

    this.metricsService.recordApiRequest('POST', '/attestation/revoke-credential', 200);
    return result;
  }

  /**
   * Generate a zero-knowledge proof of compliance
   * POST /api/v1/cea/attestation/generate-zkp
   */
  @Post('generate-zkp')
  @HttpCode(HttpStatus.CREATED)
  async generateZkProof(
    @Body() body: {
      request: ComplianceProofRequest;
      actualData: {
        complianceScore: number;
        passedControls: number;
        totalControls: number;
        controlStatuses: Record<string, string>;
      };
    }
  ): Promise<ZkProof> {
    const proof = await this.zkpService.generateComplianceProof(
      body.request,
      body.actualData
    );

    this.metricsService.recordApiRequest('POST', '/attestation/generate-zkp', 201);
    return proof;
  }

  /**
   * Verify a zero-knowledge proof
   * POST /api/v1/cea/attestation/verify-zkp
   */
  @Post('verify-zkp')
  @HttpCode(HttpStatus.OK)
  async verifyZkProof(
    @Body() body: { proof: ZkProof }
  ): Promise<ProofVerificationResult> {
    const result = await this.zkpService.verifyProof(body.proof);
    this.metricsService.recordApiRequest('POST', '/attestation/verify-zkp', 200);
    return result;
  }

  /**
   * Generate selective disclosure proof
   * POST /api/v1/cea/attestation/selective-disclosure
   */
  @Post('selective-disclosure')
  @HttpCode(HttpStatus.CREATED)
  async generateSelectiveDisclosure(
    @Body() body: {
      projectId: string;
      controlsToReveal: string[];
      allControlStatuses: Record<string, string>;
    }
  ): Promise<ZkProof> {
    const proof = await this.zkpService.generateSelectiveDisclosureProof(
      body.projectId,
      body.controlsToReveal,
      body.allControlStatuses
    );

    this.metricsService.recordApiRequest('POST', '/attestation/selective-disclosure', 201);
    return proof;
  }

  /**
   * Get attestation statistics
   * GET /api/v1/cea/attestation/stats/:projectId
   */
  @Get('stats/:projectId')
  async getAttestationStats(
    @Param('projectId') projectId: string
  ): Promise<{
    projectId: string;
    credentials: {
      issued: number;
      active: number;
      expired: number;
      revoked: number;
    };
    zkProofs: {
      generated: number;
      verified: number;
      validityRate: number;
    };
    policies: {
      analyzed: number;
      rulesExtracted: number;
      avgConfidence: number;
    };
  }> {
    // Would fetch actual stats from database
    this.metricsService.recordApiRequest('GET', '/attestation/stats', 200);

    return {
      projectId,
      credentials: {
        issued: 0,
        active: 0,
        expired: 0,
        revoked: 0,
      },
      zkProofs: {
        generated: 0,
        verified: 0,
        validityRate: 0,
      },
      policies: {
        analyzed: 0,
        rulesExtracted: 0,
        avgConfidence: 0,
      },
    };
  }
}
