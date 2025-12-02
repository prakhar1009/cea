# 11. Phased Delivery Roadmap

## Phase 1: Deterministic MVP (4 weeks)

### Goal
Ship a production-ready CEA that can evaluate controls using deterministic rules, expose REST APIs, and integrate with the event bus.

### Features
- ✅ NestJS agent structure with shared libs
- ✅ PostgreSQL schema + Prisma migrations
- ✅ Rule engine with YAML rule definitions
- ✅ Fact store (SBOM, config, VC status)
- ✅ Deterministic evaluation pipeline
- ✅ REST API (list controls, get posture, trigger evaluation)
- ✅ NATS event subscriptions (sbom.uploaded, vc.changed)
- ✅ NATS event emissions (control.status.changed)
- ✅ Multi-tenant isolation (RLS + app-layer)
- ✅ Audit logging
- ✅ Basic caching (Redis)
- ✅ CI gate integration (block PRs on control regression)

### Rulesets
- **NIST 800-53 Rev 5**: 20 core controls (AC-2, CM-8, SI-2, etc.)
- **SOC 2**: 10 Trust Services Criteria controls

### Deliverables
| Deliverable | Owner | Status |
|-------------|-------|--------|
| Database schema + migrations | Backend | ✅ Planned |
| Rule engine + YAML loader | Backend | ✅ Planned |
| Fact store service | Backend | ✅ Planned |
| Evaluator service | Backend | ✅ Planned |
| REST API (6 endpoints) | Backend | ✅ Planned |
| Event subscriptions (3 events) | Backend | ✅ Planned |
| Event emissions (2 events) | Backend | ✅ Planned |
| Unit tests (80% coverage) | Backend | ✅ Planned |
| Integration tests (E2E) | Backend | ✅ Planned |
| Kubernetes deployment | DevOps | ✅ Planned |
| Observability (metrics + logs) | Backend | ✅ Planned |

### Dependencies
- ✅ Database cluster provisioned
- ✅ Redis cluster provisioned
- ✅ NATS JetStream deployed
- ⚠️ GitHub Sentinel operational (for SBOM events)
- ⚠️ Credential Monitor operational (for VC events)

### Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| OSCAL parsing complexity | Medium | High | Start with hand-authored rules; OSCAL sync in Phase 2 |
| Event bus reliability | Low | High | Use durable streams; replay tests |
| Multi-tenant data leakage | Low | Critical | RLS + code review + penetration test |

### Acceptance Criteria
- ✅ AC-1: 20 NIST controls auto-evaluated with pass/fail/manual status
- ✅ AC-2: API returns control status in <200ms (P95)
- ✅ AC-3: Control evaluation completes in <1s (P95)
- ✅ AC-4: Multi-tenant isolation verified (penetration test)
- ✅ AC-5: CI gate blocks PR when control would regress
- ✅ AC-6: 100% uptime during 48-hour soak test

---

## Phase 2: Event-Driven Automation (3 weeks)

### Goal
Automate evaluation triggers, add suggestion generation, integrate with GitHub Sentinel for PR creation.

### Features
- ✅ Incremental re-evaluation (fact dependency tracking)
- ✅ Config suggestion generation (template-based)
- ✅ GitHub Sentinel integration (auto-create PRs for high-confidence suggestions)
- ✅ Batch evaluation mode (full project scan)
- ✅ Job queue (BullMQ) for async evaluations
- ✅ Evaluation run tracking (progress, ETA)
- ✅ Webhook support (notify external systems)
- ✅ Control hierarchy propagation (parent ← children)
- ✅ OSCAL catalog sync (auto-import controls from OSCAL JSON)

### Rulesets
- **NIST 800-53 Rev 5**: 50 total controls (expand families: AC, CM, SI, SR)
- **PCI DSS v4**: 15 core requirements

### Deliverables
| Deliverable | Owner | Status |
|-------------|-------|--------|
| Suggestion service | Backend | 📋 Planned |
| Template-based remediation | Backend | 📋 Planned |
| GitHub Sentinel PR integration | Backend | 📋 Planned |
| Batch evaluator worker | Backend | 📋 Planned |
| Job queue setup | DevOps | 📋 Planned |
| Incremental re-eval logic | Backend | 📋 Planned |
| OSCAL catalog sync | Backend | 📋 Planned |
| Webhook API | Backend | 📋 Planned |
| E2E tests (event → suggestion → PR) | Backend | 📋 Planned |

### Dependencies
- ✅ Phase 1 complete and stable
- ⚠️ GitHub Sentinel PR API ready
- ⚠️ Autodoc Agent can consume control.status.changed events

### Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| GitHub API rate limits | Medium | Medium | Cache PR creation; batch updates |
| Suggestion confidence calibration | High | Medium | Golden test fixtures; manual review tier |
| Event storm (cascading re-evals) | Medium | High | Deduplication; rate limiting |

### Acceptance Criteria
- ✅ AC-1: Fact change triggers re-evaluation of only impacted controls (<60s latency)
- ✅ AC-2: High-confidence config suggestions create GitHub PRs automatically
- ✅ AC-3: Full project evaluation (100 controls) completes in <15s
- ✅ AC-4: OSCAL catalog updates sync within 1 hour
- ✅ AC-5: Webhook notifications delivered with <5s latency
- ✅ AC-6: Zero duplicate evaluations during stress test

---

## Phase 3: NLP + VC/ZKP Integration (4 weeks)

### Goal
Add semantic policy alignment checks, integrate with Credential Monitor and ZKP Attestation Agent.

### Features
- ✅ Elasticsearch + OpenAI embeddings for policy corpus
- ✅ Policy segment indexing (Autodoc integration)
- ✅ NLP constraint extraction (durations, booleans, frequencies)
- ✅ Semantic policy alignment scoring
- ✅ Policy suggestion generation (text redlines)
- ✅ VC/DID status enforcement (control failure on revocation/expiry)
- ✅ ZKP Attestation integration (generate proofs for passed controls)
- ✅ Proof invalidation on control failure
- ✅ LLM fallback for complex constraint extraction

### Rulesets
- **NIST 800-53 Rev 5**: 100+ controls (enable NLP alignment for all)
- **SOC 2**: Full TSC coverage with policy alignment
- **DORA**: 20 core controls

### Deliverables
| Deliverable | Owner | Status |
|-------------|-------|--------|
| Elasticsearch cluster + schema | DevOps | 📋 Planned |
| Policy indexer (Autodoc sync) | Backend | 📋 Planned |
| NLP aligner service | Backend | 📋 Planned |
| Constraint extractor | Backend | 📋 Planned |
| Policy suggestion generator | Backend | 📋 Planned |
| VC status poller | Backend | 📋 Planned |
| ZKP Attestation gRPC client | Backend | 📋 Planned |
| Proof generation trigger | Backend | 📋 Planned |
| LLM integration (OpenAI/LLaMA) | Backend | 📋 Planned |
| NLP golden tests | Backend | 📋 Planned |

### Dependencies
- ✅ Phase 2 complete and stable
- ⚠️ Elasticsearch cluster provisioned (8GB+ heap)
- ⚠️ OpenAI API key / LLaMA model deployed
- ⚠️ ZKP Attestation Agent operational
- ⚠️ Credential Monitor provides VC status feed

### Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| NLP accuracy (false positives) | High | Medium | Confidence scoring; manual review tier; regression tests |
| LLM API costs | Medium | Medium | Cache embeddings; rate limit; use smaller models |
| Elasticsearch resource usage | Medium | Medium | Partition by tenant; archive old segments |
| VC registry downtime | Low | High | Cache VC status; fallback to manual |

### Acceptance Criteria
- ✅ AC-1: Policy drift detected with alignment score (threshold 0.85)
- ✅ AC-2: Policy suggestions include actionable text redlines
- ✅ AC-3: NLP extraction accuracy >90% on golden test set
- ✅ AC-4: VC revocation/expiry flips control status within 30s
- ✅ AC-5: ZKP proofs generated for 100% passed controls
- ✅ AC-6: LLM API costs <$0.01 per evaluation

---

## Phase 4: Continuous Compliance Mode (3 weeks)

### Goal
Enable real-time compliance monitoring, advanced analytics, and regulatory reporting.

### Features
- ✅ Continuous evaluation mode (schedule-based + event-based)
- ✅ Control posture trending (time-series analytics)
- ✅ Risk scoring (weighted by criticality + vulnerability severity)
- ✅ Compliance dashboard (real-time posture by framework)
- ✅ Scheduled evaluation runs (daily, weekly)
- ✅ Compliance report generation (SSP, SAR, PoA&M integration with Autodoc)
- ✅ Regulatory export formats (OSCAL, JSON, PDF)
- ✅ Anomaly detection (mass failures, abnormal patterns)
- ✅ Incident response automation
- ✅ Advanced RBAC (control-level permissions)

### Rulesets
- **NIST 800-53 Rev 5**: Full catalog (300+ controls)
- **SOC 2**: Complete Trust Services Criteria
- **PCI DSS v4**: Full requirements
- **HIPAA**: Security Rule controls
- **MiCA**: Crypto-asset regulatory controls

### Deliverables
| Deliverable | Owner | Status |
|-------------|-------|--------|
| Scheduler service (cron-based) | Backend | 📋 Planned |
| Time-series analytics | Backend | 📋 Planned |
| Risk scoring engine | Backend | 📋 Planned |
| Compliance dashboard UI | Frontend | 📋 Planned |
| Report export API | Backend | 📋 Planned |
| Anomaly detection | Backend | 📋 Planned |
| Incident automation | Backend | 📋 Planned |
| Advanced RBAC | Backend | 📋 Planned |
| Full ruleset authoring (300+ controls) | Compliance | 📋 Planned |

### Dependencies
- ✅ Phase 3 complete and stable
- ⚠️ Autodoc Agent supports OSCAL report generation
- ⚠️ Frontend team available for dashboard

### Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| Full ruleset authoring effort | High | High | Prioritize most-requested frameworks; community contributions |
| Time-series DB scaling | Medium | Medium | Use TimescaleDB or InfluxDB; downsample old data |
| False positive alerts | Medium | High | Tune anomaly thresholds; supervised learning |

### Acceptance Criteria
- ✅ AC-1: Daily scheduled evaluations run for all projects
- ✅ AC-2: Posture trend chart shows 90-day history
- ✅ AC-3: Risk score computed for all controls (0-100 scale)
- ✅ AC-4: Compliance reports exportable in OSCAL JSON + PDF
- ✅ AC-5: Anomaly detection flags suspicious patterns within 5 minutes
- ✅ AC-6: 300+ NIST controls fully authored and tested

---

## Post-Phase 4: Future Enhancements

### Advanced Features (Backlog)
- **AI-Powered Remediation**: GPT-4 generates context-aware fixes
- **Custom Rule Builder**: UI for compliance teams to author rules without code
- **Cross-Framework Mapping**: Automatic control overlap detection (e.g., NIST AC-2 ≈ SOC2 CC6.1)
- **Compliance Simulation**: "What-if" analysis for control changes
- **Vendor Attestation**: Ingest third-party compliance certifications
- **Blockchain Anchoring**: Immutable compliance audit trail (Ethereum/Polygon)
- **Federated Evaluation**: Multi-cloud/multi-region control checks

### Integration Wishlist
- **Jira/ServiceNow**: Auto-create tickets for failed controls
- **Slack/Teams**: Real-time compliance alerts
- **Datadog/New Relic**: APM correlation with control status
- **HashiCorp Vault**: Dynamic credential rotation enforcement
- **AWS Config/Azure Policy**: Cloud-native compliance checks

---

## Timeline Summary

| Phase | Duration | Start | End | Cumulative |
|-------|----------|-------|-----|------------|
| Phase 1 (MVP) | 4 weeks | Week 1 | Week 4 | 4 weeks |
| Phase 2 (Automation) | 3 weeks | Week 5 | Week 7 | 7 weeks |
| Phase 3 (NLP/ZKP) | 4 weeks | Week 8 | Week 11 | 11 weeks |
| Phase 4 (Continuous) | 3 weeks | Week 12 | Week 14 | 14 weeks |

**Total: 14 weeks (~3.5 months) to full production**

---

## Resource Requirements

### Team
- **2 Backend Engineers** (full-time)
- **1 DevOps Engineer** (50% allocation)
- **1 Compliance Specialist** (ruleset authoring, 25% allocation)
- **1 Frontend Engineer** (Phase 4 dashboard, 50% allocation)
- **1 QA Engineer** (testing, 50% allocation)

### Infrastructure (Monthly Costs)
- **PostgreSQL** (Primary + Replica): ~$300/mo
- **Redis** (Cluster): ~$150/mo
- **NATS JetStream**: ~$100/mo
- **Elasticsearch** (Phase 3): ~$400/mo
- **Kubernetes** (CEA pods + workers): ~$500/mo
- **OpenAI API** (Phase 3): ~$200/mo (variable)
- **Monitoring** (Prometheus + Grafana): ~$100/mo

**Total: ~$1,750/mo** (scales with usage)

---

## Success Metrics (Post-Launch)

### Adoption
- **Target**: 50+ projects onboarded within 6 months
- **Metric**: Active projects with ≥1 evaluation/day

### Performance
- **Target**: P95 evaluation latency <1s
- **Target**: 99.9% uptime

### Accuracy
- **Target**: <5% false positive rate (controls incorrectly marked as FAIL)
- **Target**: >85% NLP alignment accuracy (Phase 3)

### Business Impact
- **Target**: Reduce manual compliance audit prep by 60%
- **Target**: Decrease control remediation time by 40% (via auto-suggestions)
- **Target**: Zero compliance-related security incidents

---

## Next Steps (Before Implementation)

### Pre-Kickoff Checklist
- [ ] Validate tech stack with team (TypeScript/NestJS vs Go vs Python)
- [ ] Confirm database cluster capacity
- [ ] Review event taxonomy with other agent teams
- [ ] Align on multi-tenancy model (RLS vs app-layer)
- [ ] Approve Phase 1 scope (20 controls sufficient for MVP?)
- [ ] Assign team members
- [ ] Set up project board (Jira/Linear)
- [ ] Schedule kickoff meeting

### Immediate Actions
1. **Infrastructure**: Provision DB, Redis, NATS (1 week)
2. **Codebase**: Initialize monorepo structure (1 day)
3. **Design Review**: Walk through this plan with team (1 day)
4. **Sprint Planning**: Break Phase 1 into 2-week sprints (1 day)

---

**End of Implementation Plan**

This plan is ready for team review and approval. Once approved, we'll proceed to:
1. Initialize the monorepo structure
2. Set up shared libraries
3. Begin Phase 1 implementation

Awaiting your go/no-go decision.
