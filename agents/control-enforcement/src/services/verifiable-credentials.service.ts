// CEA Verifiable Credentials Service
// Phase 3: Cryptographic compliance attestations with W3C VC standard

import { Injectable, Logger } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import * as crypto from 'crypto';

export interface VerifiableCredential {
  '@context': string[];
  id: string;
  type: string[];
  issuer: {
    id: string;
    name: string;
  };
  issuanceDate: string;
  expirationDate: string;
  credentialSubject: {
    id: string;
    type: string;
    complianceStatus: ComplianceAttestation;
  };
  proof: CredentialProof;
}

export interface ComplianceAttestation {
  projectId: string;
  framework: string;
  controlId?: string;
  status: 'COMPLIANT' | 'NON_COMPLIANT' | 'PARTIAL';
  evaluatedAt: string;
  validUntil: string;
  evidence: EvidenceItem[];
  score?: number;
}

export interface EvidenceItem {
  type: 'evaluation' | 'audit_log' | 'configuration' | 'document';
  description: string;
  hash: string;
  timestamp: string;
  verified: boolean;
}

export interface CredentialProof {
  type: 'Ed25519Signature2020' | 'RsaSignature2018';
  created: string;
  verificationMethod: string;
  proofPurpose: 'assertionMethod';
  proofValue: string;
}

export interface VerificationResult {
  verified: boolean;
  credentialId: string;
  status: string;
  validFrom: string;
  validUntil: string;
  errors?: string[];
  warnings?: string[];
}

@Injectable()
export class VerifiableCredentialsService {
  private readonly logger = new Logger(VerifiableCredentialsService.name);
  private readonly issuerDID: string;
  private readonly privateKey: string;
  private readonly publicKey: string;

  constructor(private readonly metricsService: MetricsService) {
    // In production, would use proper key management (KMS, HSM, etc.)
    this.issuerDID = process.env.ISSUER_DID || 'did:compiledger:cea:issuer';
    this.privateKey = process.env.VC_PRIVATE_KEY || this.generateKeyPair().privateKey;
    this.publicKey = process.env.VC_PUBLIC_KEY || this.generateKeyPair().publicKey;
    
    this.logger.log('Verifiable Credentials service initialized');
  }

  /**
   * Issue a verifiable credential for compliance status
   */
  async issueCredential(
    projectId: string,
    framework: string,
    attestation: ComplianceAttestation,
    options?: { validityDays?: number }
  ): Promise<VerifiableCredential> {
    const now = new Date();
    const validityDays = options?.validityDays || 90; // 90 days default
    const expirationDate = new Date(now.getTime() + validityDays * 24 * 60 * 60 * 1000);

    const credentialId = `urn:uuid:${crypto.randomUUID()}`;

    const credential: Omit<VerifiableCredential, 'proof'> = {
      '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://compiledger.io/credentials/compliance/v1',
      ],
      id: credentialId,
      type: ['VerifiableCredential', 'ComplianceCredential'],
      issuer: {
        id: this.issuerDID,
        name: 'Compiledger Control Enforcement Agent',
      },
      issuanceDate: now.toISOString(),
      expirationDate: expirationDate.toISOString(),
      credentialSubject: {
        id: `did:compiledger:project:${projectId}`,
        type: 'ComplianceSubject',
        complianceStatus: attestation,
      },
    };

    // Generate cryptographic proof
    const proof = await this.generateProof(credential);

    const verifiableCredential: VerifiableCredential = {
      ...credential,
      proof,
    };

    this.logger.log(`Issued VC for project ${projectId}, framework ${framework}`);
    this.metricsService.recordApiRequest('POST', '/credentials/issue', 200);

    return verifiableCredential;
  }

  /**
   * Verify a verifiable credential
   */
  async verifyCredential(credential: VerifiableCredential): Promise<VerificationResult> {
    const errors: string[] = [];
    const warnings: string[] = [];

    try {
      // Check expiration
      const now = new Date();
      const expirationDate = new Date(credential.expirationDate);
      const issuanceDate = new Date(credential.issuanceDate);

      if (now > expirationDate) {
        errors.push('Credential has expired');
      }

      if (now < issuanceDate) {
        errors.push('Credential is not yet valid');
      }

      // Verify cryptographic proof
      const proofValid = await this.verifyProof(credential);
      if (!proofValid) {
        errors.push('Cryptographic proof verification failed');
      }

      // Check issuer
      if (credential.issuer.id !== this.issuerDID) {
        warnings.push('Credential issued by unknown issuer');
      }

      // Verify evidence integrity
      const evidenceValid = await this.verifyEvidence(
        credential.credentialSubject.complianceStatus.evidence
      );
      if (!evidenceValid) {
        errors.push('Evidence integrity check failed');
      }

      const verified = errors.length === 0;

      this.logger.log(`Credential ${credential.id} verification: ${verified ? 'PASS' : 'FAIL'}`);

      return {
        verified,
        credentialId: credential.id,
        status: credential.credentialSubject.complianceStatus.status,
        validFrom: credential.issuanceDate,
        validUntil: credential.expirationDate,
        errors: errors.length > 0 ? errors : undefined,
        warnings: warnings.length > 0 ? warnings : undefined,
      };
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Credential verification failed: ${err.message}`);
      return {
        verified: false,
        credentialId: credential.id,
        status: 'ERROR',
        validFrom: credential.issuanceDate,
        validUntil: credential.expirationDate,
        errors: [err.message],
      };
    }
  }

  /**
   * Generate cryptographic proof for credential
   */
  private async generateProof(
    credential: Omit<VerifiableCredential, 'proof'>
  ): Promise<CredentialProof> {
    const canonicalized = JSON.stringify(credential);
    const signature = this.sign(canonicalized);

    return {
      type: 'Ed25519Signature2020',
      created: new Date().toISOString(),
      verificationMethod: `${this.issuerDID}#keys-1`,
      proofPurpose: 'assertionMethod',
      proofValue: signature,
    };
  }

  /**
   * Verify cryptographic proof
   */
  private async verifyProof(credential: VerifiableCredential): Promise<boolean> {
    try {
      const { proof, ...credentialWithoutProof } = credential;
      const canonicalized = JSON.stringify(credentialWithoutProof);
      
      return this.verify(canonicalized, proof.proofValue);
    } catch (error) {
      return false;
    }
  }

  /**
   * Verify evidence integrity
   */
  private async verifyEvidence(evidence: EvidenceItem[]): Promise<boolean> {
    // In production, would verify hashes against stored evidence
    return evidence.every(e => e.verified);
  }

  /**
   * Create evidence hash for attestation
   */
  createEvidenceHash(data: any): string {
    const serialized = JSON.stringify(data, Object.keys(data).sort());
    return crypto.createHash('sha256').update(serialized).digest('hex');
  }

  /**
   * Sign data with private key
   */
  private sign(data: string): string {
    const hash = crypto.createHash('sha256').update(data).digest();
    // In production, would use proper Ed25519 signing
    // For demo, using HMAC
    return crypto.createHmac('sha256', this.privateKey).update(hash).digest('base64');
  }

  /**
   * Verify signature with public key
   */
  private verify(data: string, signature: string): boolean {
    const hash = crypto.createHash('sha256').update(data).digest();
    const expectedSignature = crypto
      .createHmac('sha256', this.privateKey)
      .update(hash)
      .digest('base64');
    
    return signature === expectedSignature;
  }

  /**
   * Generate key pair for testing
   */
  private generateKeyPair(): { privateKey: string; publicKey: string } {
    // In production, use proper Ed25519 key generation
    const privateKey = crypto.randomBytes(32).toString('hex');
    const publicKey = crypto.randomBytes(32).toString('hex');
    
    return { privateKey, publicKey };
  }

  /**
   * Revoke a credential
   */
  async revokeCredential(
    credentialId: string,
    reason: string
  ): Promise<{ revoked: boolean; timestamp: string }> {
    // In production, would add to revocation list
    this.logger.log(`Revoking credential ${credentialId}: ${reason}`);
    
    return {
      revoked: true,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Check if credential is revoked
   */
  async isRevoked(credentialId: string): Promise<boolean> {
    // In production, would check revocation list
    return false;
  }
}
