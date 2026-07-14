---
sourceId: ui-ux-design-pro-skill-main
sourceType: repo
sourceName: "ui-ux-design-pro-skill-main"
sourceLocation: "Skill & Library/ui-ux-design-pro-skill-main"
appliedTo: []
---

## Structural Analysis

Professional UI/UX design skill with comprehensive end-to-end workflow steps. Represents a complete design process encoded as an AI agent skill.

**Architecturally sound patterns:**
- **End-to-end workflow**: Covers the full design pipeline from brief/research through to implementation — not just one step
- **Phase-based structure**: Distinct phases (research → design → implement → review) with clear transitions
- **Professional process encoding**: Attempts to encode what a professional UI/UX designer actually DOES (not just what they know)

**Structural characteristics:**
- Process-oriented (describes workflow, not just rules)
- Comprehensive scope (tries to cover everything from brief to delivery)
- Sequential execution (phases follow a defined order)
- Professional-practice-based (derived from real design workflows)

## Content Quality Audit

**Potentially valuable content:**
- Workflow phase structure (what comes before what in a design process)
- Step decomposition (breaking "design" into manageable, executable actions)
- Professional practice encoding (non-obvious steps that experts do but novices skip)

**AI Slop risk areas:**
- If steps are vague ("research the user" without specifying WHAT to research and HOW to use findings)
- If the skill lacks DEPTH per step (broad coverage at surface level)
- If no connection to concrete artifacts (just describes process, doesn't reference design tokens/rules/systems)
- If no quality validation between phases (no gate preventing bad output from flowing downstream)
- Risk of being a "recipe" without ingredients (process steps without the KNOWLEDGE needed to execute them well)

## Gap Analysis vs Theory

**Strengths:**
- Recognizes design as a PROCESS (not just output)
- Phase separation aligns with Double Diamond and Design Thinking methodologies
- Attempts comprehensive coverage (not just one slice of design)

**Gaps:**
- Likely lacks depth at each step (breadth vs depth tradeoff)
- No integration with structured design knowledge (tokens, rules, quality gates)
- No measurement between phases (how to verify phase output quality before proceeding)
- No anti-AI-slop awareness built into workflow steps
- No token system reference (implementations may use raw values)
- No accessibility integration at workflow level
- Missing: iteration loops (what happens when quality gate fails? how to recover/improve?)
- Missing: context-dependent workflow modification (SaaS vs landing page need different process emphasis)

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| End-to-end workflow structure | ProdigeUI's end-to-end skill adopts the phase structure BUT: each phase references specific ProdigeUI artifacts (design-rules, tokens, quality-gate). Each phase has measurable exit criteria. |
| Phase transitions | Add quality gates between phases. Phase N output must pass validation before Phase N+1 begins. Prevents cascading errors. |
| Step decomposition | Each step in ProdigeUI's skill specifies: INPUT (what context/artifacts to consult), ACTION (what to produce), OUTPUT (format specification), VALIDATE (quality-gate criteria to check). |
| Professional process encoding | Ground each step in ProdigeUI's design-rules + research findings. "Choose colors" becomes "Select colors from semantic token roles, verify contrast per color.rules.json, ensure harmony per palette generation method." |

## Adaptation Strategy

This repo's workflow pattern becomes ProdigeUI's SKILL SKELETON — the structural backbone that ProdigeUI's end-to-end skill inherits:

1. **Phase structure** → ProdigeUI skill phases: Brief Analysis → Design Read → Token Selection → Component Assembly → Quality Gate → Output
2. **Each phase** → enriched with specific ProdigeUI artifact references (what to consult, what to produce, what to validate against)
3. **Professional steps** → formalized as executable agent steps with defined inputs/outputs
4. **Breadth** → ProdigeUI adds the DEPTH (each step backed by research, rules, tokens)

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| End-to-end workflow structure | `skills/prodige-ui-end-to-end/SKILL.md` | Overall step structure | Provides phase backbone for ProdigeUI's main skill |
| Phase-based design process | `skills/prodige-ui-end-to-end/SKILL.md` | Phase definitions (Brief → Design → Implement → Review) | Clear phase boundaries with quality gates |
| Step decomposition approach | `skills/*/SKILL.md` | Per-step INPUT/ACTION/OUTPUT/VALIDATE format | Structured executable steps for AI agents |
| Professional practice encoding | `skills/prodige-ui-end-to-end/SKILL.md` | Non-obvious expert steps (design read, constraint analysis) | Captures expert behaviors that generic agents miss |
| Research → design flow | `skills/prodige-ui-end-to-end/SKILL.md` | Brief analysis step | Context gathering before design decisions |

## Points Copied

- End-to-end workflow structure (brief → research → design → implement → review)
- Phase-based organization with clear transitions
- Step decomposition into executable actions
- Professional design process encoding (what experts actually do)

## Points Improved/Fixed

- Generic steps → ProdigeUI-artifact-backed steps (every step references tokens, rules, or quality-gate)
- No quality gates between phases → mandatory validation between each phase
- Vague actions → specific INPUT/ACTION/OUTPUT/VALIDATE per step
- No design system awareness → full token system integration throughout workflow
- No iteration support → explicit recovery/improvement loops when quality gate fails
- No anti-AI-slop → taste-skill dials and anti-default checks integrated into workflow
- Context-blind → context-dependent workflow (different use-cases modify step emphasis)
- No measurement → each phase has measurable exit criteria

## Points Adapted

- Professional UX process → AI agent workflow steps (executable, not just descriptive)
- Sequential phases → phase + quality gate pairs (gate must pass before next phase)
- Generic "design" phase → decomposed into: Design Read + Token Selection + Component Assembly
- Research phase → Brief Analysis step with structured output (not open-ended exploration)
- Review phase → Quality_Gate execution with scoring and anti-slop detection
