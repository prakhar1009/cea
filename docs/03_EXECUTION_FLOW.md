# 3. End-to-End Control Evaluation Flow

## High-Level Pipeline
```
Fact Ingestion → Rule Matching → Evaluation → Status Persistence → Suggestion Generation → Event Emission → Cross-Agent Notifications
```

## Detailed Step-by-Step Flow

### Step 1: Event-Triggered Fact Collection
**Trigger**: Event received (e.g., `sbom.uploaded`, `config.snapshot.created`)

```typescript
// workers/event-consumer.worker.ts
@EventPattern('sbom.uploaded')
async handleSbomUploaded(data: SbomUploadedEvent) {
  const { projectId, sbomId, tenantId } = data;
  
  // 1.1 Extract facts from SBOM
  const facts = await this.factStoreService.extractSbomFacts(sbomId);
  
  // 1.2 Store normalized facts
  await this.factStoreService.saveFacts(projectId, facts, {
    source: 'sbom',
    sourceId: sbomId,
    collectedAt: new Date(),
  });
  
  // 1.3 Identify impacted controls
  const controls = await this.controlService.findByEvidence('sbom');
  
  // 1.4 Trigger re-evaluation
  for (const control of controls) {
    await this.evaluatorService.enqueueEvaluation(control.id, projectId);
  }
}
```

### Step 2: Fact Normalization
**Input**: Raw data from various sources  
**Output**: Normalized key-value facts

```typescript
// services/fact-store.service.ts
async extractSbomFacts(sbomId: string): Promise<Fact[]> {
  const sbom = await this.sbomService.load(sbomId);
  const facts: Fact[] = [];
  
  // Extract structured facts
  facts.push({
    key: 'sbom.present',
    value: true,
    metadata: { sbomId, format: sbom.format },
  });
  
  facts.push({
    key: 'sbom.component_count',
    value: sbom.components.length,
  });
  
  // Vulnerability facts
  if (sbom.vulnerabilities) {
    facts.push({
      key: 'sbom.vulnerabilities.critical',
      value: sbom.vulnerabilities.filter(v => v.severity === 'critical').length,
    });
  }
  
  // Signature verification facts
  const sigValid = await this.verifySignature(sbom);
  facts.push({
    key: 'supplychain.signatures.valid',
    value: sigValid,
  });
  
  return facts;
}
```

### Step 3: Control Selection & Rule Loading
**Input**: Project ID, optional control IDs  
**Output**: List of controls + associated rules

```typescript
// services/evaluator.service.ts
async selectControlsForEvaluation(projectId: string, changedFacts: string[]): Promise<Control[]> {
  // 3.1 Load project's active frameworks
  const project = await this.db.project.findUnique({
    where: { id: projectId },
    include: { frameworks: true },
  });
  
  // 3.2 Load all controls for those frameworks
  const controls = await this.db.control.findMany({
    where: {
      projectId,
      frameworkId: { in: project.frameworks.map(f => f.id) },
      status: { not: 'NOT_APPLICABLE' }, // Skip explicitly disabled
    },
  });
  
  // 3.3 Filter to controls that depend on changed facts
  const impacted = controls.filter(c => {
    const rule = this.ruleEngine.getRule(c.controlId);
    return rule.dependsOnFacts(changedFacts);
  });
  
  return impacted;
}
```

### Step 4: Rule Execution (Deterministic)
**Input**: Control + Project facts  
**Output**: Evaluation result (status + rationale)

```typescript
// services/rule-engine.service.ts
async evaluateControl(control: Control, facts: FactMap): Promise<EvalResult> {
  const rule = await this.loadRule(control.frameworkId, control.controlId);
  
  // 4.1 Check manual override first
  if (rule.manual_if) {
    const manualCondition = this.evaluateConditions(rule.manual_if, facts);
    if (manualCondition.matched) {
      return {
        status: 'MANUAL',
        rationale: manualCondition.note,
        evidence: [],
      };
    }
  }
  
  // 4.2 Evaluate deterministic conditions
  const whenResult = this.evaluateConditions(rule.when, facts);
  
  if (!whenResult.matched) {
    return {
      status: 'FAIL',
      rationale: rule.fail_message || `Required facts not satisfied: ${whenResult.missing}`,
      evidence: [],
    };
  }
  
  // 4.3 Collect evidence references
  const evidence = rule.evidence.map(key => facts[key]).filter(Boolean);
  
  // 4.4 Apply pass criteria
  const passLogic = rule.pass_if || 'all';
  const status = this.applyPassLogic(passLogic, whenResult) ? 'PASS' : 'FAIL';
  
  return {
    status,
    rationale: status === 'PASS' ? 'All requirements satisfied' : rule.fail_message,
    evidence,
  };
}

private evaluateConditions(conditions: Condition[], facts: FactMap) {
  const results = conditions.map(c => {
    const factValue = facts[c.fact];
    let matched = false;
    
    if (c.equals !== undefined) {
      matched = factValue === c.equals;
    } else if (c.greaterThan !== undefined) {
      matched = factValue > c.greaterThan;
    } else if (c.regex) {
      matched = new RegExp(c.regex).test(String(factValue));
    }
    
    return { fact: c.fact, matched, value: factValue };
  });
  
  return {
    matched: results.every(r => r.matched),
    results,
    missing: results.filter(r => !r.matched).map(r => r.fact),
  };
}
```

### Step 5: NLP Policy Alignment (Phase 3)
**Input**: Control + Policy corpus  
**Output**: Alignment score + gaps

```typescript
// nlp/policy-aligner.ts
async checkPolicyAlignment(control: Control, policyIndex: string): Promise<NlpResult> {
  // 5.1 Generate search query from control description
  const query = this.buildSearchQuery(control);
  
  // 5.2 Semantic search over policy documents
  const policySegments = await this.elasticSearch.search({
    index: policyIndex,
    body: {
      query: {
        more_like_this: {
          fields: ['text'],
          like: query,
          min_term_freq: 1,
          min_doc_freq: 1,
        },
      },
      _source: ['text', 'path', 'version'],
      size: 5,
    },
  });
  
  // 5.3 Extract constraints from policy text
  const extractedConstraints = await this.extractConstraints(policySegments);
  
  // 5.4 Compare with control parameters
  const requiredConstraints = control.parameters;
  const gaps = this.compareConstraints(requiredConstraints, extractedConstraints);
  
  // 5.5 Compute alignment score
  const score = 1 - (gaps.length / requiredConstraints.length);
  
  return {
    score,
    gaps,
    segments: policySegments,
  };
}

private compareConstraints(required: Params, extracted: Params): Gap[] {
  const gaps: Gap[] = [];
  
  for (const [key, reqValue] of Object.entries(required)) {
    const extValue = extracted[key];
    
    if (!extValue) {
      gaps.push({
        parameter: key,
        expected: reqValue,
        found: null,
        severity: 'missing',
      });
    } else if (this.isWeakerThan(extValue, reqValue)) {
      gaps.push({
        parameter: key,
        expected: reqValue,
        found: extValue,
        severity: 'insufficient',
      });
    }
  }
  
  return gaps;
}
```

### Step 6: Combine Deterministic + NLP Results
```typescript
// services/evaluator.service.ts
async combineResults(
  deterministicResult: EvalResult,
  nlpResult: NlpResult | null,
  rule: Rule
): Promise<FinalResult> {
  
  let finalStatus = deterministicResult.status;
  let rationale = deterministicResult.rationale;
  const suggestions: Suggestion[] = [];
  
  // 6.1 If NLP enabled and deterministic passed, check policy alignment
  if (nlpResult && deterministicResult.status === 'PASS') {
    if (nlpResult.score < rule.nlp_threshold || 0.85) {
      finalStatus = 'FAIL';
      rationale = `Policy drift detected: alignment score ${nlpResult.score}`;
      
      // 6.2 Generate policy suggestion
      const policySuggestion = await this.suggestionService.generatePolicyPatch(
        nlpResult.gaps,
        nlpResult.segments
      );
      suggestions.push(policySuggestion);
    }
  }
  
  // 6.3 If deterministic failed, generate config suggestion
  if (deterministicResult.status === 'FAIL' && rule.auto_remediate) {
    const configSuggestion = await this.suggestionService.generateConfigPatch(
      deterministicResult,
      rule
    );
    suggestions.push(configSuggestion);
  }
  
  return {
    status: finalStatus,
    rationale,
    evidence: deterministicResult.evidence,
    suggestions,
  };
}
```

### Step 7: Persist Evaluation
```typescript
// services/evaluator.service.ts
async persistEvaluation(
  controlId: string,
  projectId: string,
  result: FinalResult,
  runId: string
): Promise<ControlEvaluation> {
  
  // 7.1 Calculate facts hash for reproducibility
  const facts = await this.factStoreService.loadFacts(projectId);
  const factsHash = this.hashFacts(facts);
  
  // 7.2 Get ruleset version
  const rule = await this.ruleEngine.getRule(controlId);
  const rulesetHash = rule.hash;
  
  // 7.3 Save evaluation
  const evaluation = await this.db.controlEvaluation.create({
    data: {
      controlId,
      projectId,
      runId,
      status: result.status,
      rationale: result.rationale,
      evidenceRefs: result.evidence,
      factsHash,
      rulesetHash,
      rulesetVersion: rule.version,
      updatedAt: new Date(),
    },
  });
  
  // 7.4 Update control current status
  await this.db.control.update({
    where: { id: controlId },
    data: {
      currentStatus: result.status,
      lastEvaluatedAt: new Date(),
    },
  });
  
  return evaluation;
}
```

### Step 8: Generate Suggestions
```typescript
// services/suggestion.service.ts
async generateConfigPatch(result: EvalResult, rule: Rule): Promise<Suggestion> {
  // 8.1 Identify missing configuration
  const missingFacts = result.rationale.match(/Required facts not satisfied: (.+)/)?.[1];
  
  // 8.2 Load template for fix
  const template = rule.remediation_templates?.config;
  if (!template) return null;
  
  // 8.3 Generate diff
  const patch = this.applyTemplate(template, {
    missingFacts,
    controlId: rule.id,
  });
  
  return {
    controlId: rule.id,
    type: 'config',
    diff: patch,
    targetPath: template.target_path,
    confidence: 'high',
    createdAt: new Date(),
  };
}

async generatePolicyPatch(gaps: Gap[], segments: PolicySegment[]): Promise<Suggestion> {
  // 8.4 Build redline text
  const redlines = gaps.map(gap => {
    const segment = segments.find(s => s.text.includes(gap.parameter));
    return {
      file: segment.path,
      line: segment.lineNumber,
      old: gap.found,
      new: gap.expected,
    };
  });
  
  // 8.5 Format as unified diff
  const diff = this.formatUnifiedDiff(redlines);
  
  return {
    type: 'policy',
    diff,
    targetPath: redlines[0].file,
    confidence: 'medium', // NLP-based = lower confidence
    createdAt: new Date(),
  };
}
```

### Step 9: Emit Events
```typescript
// services/evaluator.service.ts
async emitEvents(
  control: Control,
  oldStatus: ControlStatus,
  newStatus: ControlStatus,
  evaluation: ControlEvaluation,
  suggestions: Suggestion[]
): Promise<void> {
  
  // 9.1 Status change event
  if (oldStatus !== newStatus) {
    await this.eventBus.publish('control.status.changed', {
      controlId: control.id,
      projectId: control.projectId,
      tenantId: control.tenantId,
      oldStatus,
      newStatus,
      evidenceRefs: evaluation.evidenceRefs,
      evaluationId: evaluation.id,
      timestamp: new Date(),
    });
  }
  
  // 9.2 Suggestion events
  for (const suggestion of suggestions) {
    await this.eventBus.publish('policy.suggestion.created', {
      controlId: control.id,
      projectId: control.projectId,
      suggestionId: suggestion.id,
      type: suggestion.type,
      targetPath: suggestion.targetPath,
      confidence: suggestion.confidence,
    });
  }
  
  // 9.3 If critical failure, alert
  if (newStatus === 'FAIL' && control.criticality === 'critical') {
    await this.eventBus.publish('control.critical.failed', {
      controlId: control.id,
      projectId: control.projectId,
      rationale: evaluation.rationale,
    });
  }
}
```

### Step 10: Cross-Agent Notifications
```typescript
// Downstream event handlers in other agents

// GitHub Sentinel: Auto-create PR if suggestion is high confidence
@EventPattern('policy.suggestion.created')
async handleSuggestion(data: SuggestionCreatedEvent) {
  if (data.type === 'config' && data.confidence === 'high') {
    const suggestion = await this.suggestionService.load(data.suggestionId);
    await this.githubService.createPR({
      title: `[Compliance] Fix ${data.controlId}`,
      body: suggestion.diff,
      targetPath: suggestion.targetPath,
    });
  }
}

// Autodoc Agent: Regenerate compliance docs when controls change
@EventPattern('control.status.changed')
async handleControlChange(data: ControlStatusChangedEvent) {
  await this.docGeneratorService.enqueueRegeneration(data.projectId, {
    trigger: 'control_status_change',
    controlId: data.controlId,
  });
}

// ZKP Attestation: Invalidate proofs for failed controls
@EventPattern('control.status.changed')
async handleControlChange(data: ControlStatusChangedEvent) {
  if (data.newStatus === 'FAIL') {
    await this.proofService.revoke({
      controlId: data.controlId,
      reason: 'Control evaluation failed',
    });
  }
}
```

## Performance Optimizations

### Batch Evaluation Mode
For full project scans (e.g., onboarding):
```typescript
async evaluateAllControls(projectId: string): Promise<EvaluationRun> {
  const run = await this.createRun(projectId);
  const controls = await this.db.control.findMany({ where: { projectId } });
  
  // Parallelize in chunks
  const chunks = this.chunk(controls, 10);
  for (const chunk of chunks) {
    await Promise.all(chunk.map(c => this.evaluateControl(c.id, projectId, run.id)));
  }
  
  return run;
}
```

### Incremental Re-evaluation
Only evaluate controls that depend on changed facts:
```typescript
async handleFactsChanged(projectId: string, changedKeys: string[]) {
  const impacted = await this.selectControlsForEvaluation(projectId, changedKeys);
  // Only re-evaluate subset
  for (const control of impacted) {
    await this.evaluateControl(control.id, projectId);
  }
}
```

## Next: Data Models & Migrations
