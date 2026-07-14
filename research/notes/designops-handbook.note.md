---
sourceId: designops-handbook
sourceType: book
sourceName: "DesignOps Handbook (Kate Battles, Meredith Black, Dave Malouf)"
sourceLocation: "Book/UX/DesignOps Handbook (Kate Battles, Meredith Black, Dave Malouf etc.) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **DesignOps as Enablement:** DesignOps removes friction from the design process — it optimizes workflows, tools, and governance so designers (or agents) focus on design decisions rather than process overhead.
- **Three Pillars of DesignOps:** People (team structure, roles), Process (workflows, rituals, handoffs), and Craft (tools, libraries, quality standards).
- **Standardized Workflows:** Documented, repeatable workflows reduce variance in output quality. Every design task should follow a known path from request to delivery.
- **Design System as Infrastructure:** The design system is a DesignOps responsibility — it's infrastructure enabling consistent output, not a design project with an end date.
- **Measurement and Metrics:** Track design team health through metrics: time-to-design, component reuse rate, design debt backlog, adoption rate, satisfaction scores.
- **Governance Without Bottlenecks:** Enable contribution from many while maintaining quality through clear standards, templates, and lightweight review processes.
- **Tool Chain Management:** Standardize tool selection and configuration so design artifacts are interoperable and discoverable.

## Concrete Rules & Parameters

- Workflow stages: Request → Triage → Assign → Design → Review → Handoff → Verify (7 stages)
- Review cadence: design critiques weekly; system-level review monthly; strategy quarterly
- Component contribution: propose → prototype → test → document → merge (5 steps, ≤2 week cycle)
- Design debt tracking: categorize as Critical (blocks users), Major (inconsistency), Minor (polish); address in ratio 3:2:1
- Reuse metrics: component reuse rate target ≥ 80% (custom components ≤ 20%)
- Handoff checklist: specs complete, tokens mapped, states documented, accessibility annotated, responsive defined
- Quality standard: every design artifact must pass peer review before handoff to development

## Modern Context Application

- **Agent Workflow = DesignOps Process:** AI agents are "designers" whose workflow needs the same operational structure: triage → design → review → deliver.
- **Skill as Standardized Workflow:** Each ProdigeUI Skill is essentially a DesignOps standardized workflow for an AI agent.
- **Automated Quality Review:** The Quality_Gate acts as automated peer review — DesignOps review without human bottleneck.
- **Contribution via Skills:** New capabilities are added through skill contribution workflow, mirroring DesignOps component contribution process.
- **Metrics for AI Design:** Track agent design quality through reuse rate, token coverage, quality gate pass rate.

## Anti-AI-Slop Indicators

| Operationalized Design | AI Slop |
|---|---|
| Documented workflow per task type | Ad-hoc generation without process |
| Quality review before delivery | Direct output without validation |
| Component reuse ≥80% | Custom one-offs for every element |
| Handoff with complete specs | Incomplete artifacts requiring interpretation |
| Design debt tracked and prioritized | Accumulating inconsistencies without awareness |
| Standard tools and templates | Different approach every generation |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Standardized workflow stages | `skills/*/SKILL.md` | Workflow steps definition | Each skill IS a standardized workflow |
| Handoff checklist | `quality-gate/criteria.json` | Handoff completeness criteria | Validates completeness before "delivery" |
| Component contribution workflow | `AGENTS.md` | Adding new components section | 5-step contribution process |
| Reuse metrics | `quality-gate/criteria.json` | "component-reuse" criterion | Target ≥80% reuse rate |
| Quality review gate | `skills/design-audit/SKILL.md` | Review workflow | Agent self-review before output |
| Design debt categorization | `quality-gate/criteria.json` | Severity levels for findings | Critical/Major/Minor classification |

## Cross-References

- Process model feeds Requirement 2 (Agentic_Workflow) — skills as DesignOps workflows
- Quality gates align with Requirement 12 (Quality Assurance)
- Contribution workflow connects to `design-systems-handbook` governance model
- Metrics inform measurable quality criteria
- Handoff checklist complements `designing-ux-prototyping` annotation standards
- Infrastructure mindset aligns with Requirement 8 (Design System Cohesion)
