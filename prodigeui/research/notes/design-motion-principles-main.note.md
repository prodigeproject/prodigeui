---
sourceId: design-motion-principles-main
sourceType: repo
sourceName: "design-motion-principles-main"
sourceLocation: "Skill & Library/design-motion-principles-main"
appliedTo: []
---

## Structural Analysis

Workflow-based skill architecture with two operational modes:

- **create.md** — Guides motion creation from scratch with opinionated designer perspectives
- **audit.md** — Reviews existing motion for quality, consistency, and anti-slop patterns

**Conditional reference loading:** Files loaded based on project context → efficient skill usage pattern. The repo maps project types to designer perspectives:

- Emil Kowalski style → restraint, micro-interactions, subtle polish (SaaS, tools)
- Jakub Krehel style → production-level polish, complex choreography (marketing, premium)
- Jhey Tompkins style → playful, experimental, delightful (creative, portfolio)

**File organization:** Flat skill structure with YAML frontmatter + conditional includes. Uses "motion cookbook" concept with named recipes.

**Architecturally sound:** The two-mode operation (Create vs Audit) is excellent because it separates generative from evaluative workflows. Most repos only cover creation.

## Content Quality Audit

**Genuinely valuable content:**
- Context-to-Perspective mapping: project type determines motion philosophy (not arbitrary)
- Frequency Gate principle: "the more frequently an element appears/triggers, the more subtle its animation must be" — brilliant practical rule backed by habituation psychology
- Golden Rule: "best animation goes unnoticed" — anti-overanimation principle
- Anti-checklist for AI-slop motion patterns (specific, actionable):
  - Bounce without purpose
  - Delays that impede task completion
  - Parallax on content-first pages
  - Animation on every scroll event
  - Easing that contradicts element weight
- `prefers-reduced-motion` is documented as MANDATORY (not optional)
- Named designer philosophies give agents a "voice" to emulate rather than generic motion

**AI Slop indicators: None.** Evidence-based approach with named real-world designer philosophies. Every principle has both a DO and a DON'T example.

## Gap Analysis vs Theory

**Strengths:**
- The "Frequency Gate" principle aligns with habituation research in psychology (repeated stimuli lose salience)
- Anti-checklist approach is more effective than positive-only guidelines (humans learn better from anti-patterns)
- Named designer perspectives ground abstract principles in recognizable aesthetic outcomes

**Gaps:**
- No quantitative parameters for the Frequency Gate (how much to reduce by frequency level?)
- Designer perspectives are descriptive but lack token-level mapping (what cubic-bezier = "Emil Kowalski style"?)
- Missing scroll-triggered animation guidelines (viewport intersection thresholds, reveal patterns)
- No mobile-specific considerations (touch feedback timing differs from hover timing)
- Audit mode lacks scoring rubric (pass/fail criteria, severity levels)

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Frequency Gate principle | Quantify: frequency levels (once/rare/frequent/constant) mapped to animation intensity multipliers (1.0/0.7/0.3/0). Add as Quality_Gate criterion. |
| Golden Rule | Transform into measurable criterion: "total animation time on a single user flow should not exceed 15% of task completion time" |
| Anti-checklist for AI slop | Expand with severity levels (critical/warning/info). Encode as JSON rules for automated Quality_Gate checking. |
| Context-to-Perspective mapping | Formalize as ProdigeUI motion personality tokens: each use-case template pre-selects a personality override set |
| Designer philosophies (Emil/Jakub/Jhey) | Extract the PARAMETERS that differentiate them (duration range, overshoot amount, stagger pattern) into named preset bundles |
| prefers-reduced-motion mandate | Strengthen with specific behavior per animation category: transform→instant, opacity→instant, scroll→disable, decorative→remove |

## Adaptation Strategy

The two-mode architecture (Create/Audit) maps directly to ProdigeUI's workflow:

1. **Create mode** → Integrated into `skills/prodige-ui-end-to-end/SKILL.md` motion design step. Agent uses context (project type, brand personality) to select appropriate motion tokens.
2. **Audit mode** → Integrated into `quality-gate/criteria.json` as motion-specific quality criteria. The anti-checklist becomes machine-evaluable rules.

The designer perspective system is adapted as named presets in `motion/presets/` — but instead of referencing real people, ProdigeUI uses semantic personality names (Restrained, Polished, Playful) with the same underlying parameter differences.

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Frequency Gate principle | `design-rules/structure.rules.json` | `motion.frequencyGate` rule with multiplier table | Prevents over-animation of repeated elements; measurable criterion |
| Golden Rule | `quality-gate/criteria.json` | `motion-subtlety-ratio` criterion | Ensures motion enhances rather than dominates UX |
| Anti-checklist patterns | `quality-gate/criteria.json` | `motion-anti-patterns` array of checkable rules | Automated AI slop detection for motion |
| Context-to-Perspective mapping | `prompt-templates/*/metadata.json` | `motionPersonality` field per template | Each use-case template knows its motion voice |
| Create/Audit modes | `skills/prodige-ui-end-to-end/SKILL.md` | Separate creation and review steps | Workflow separation ensures motion is both designed AND validated |
| prefers-reduced-motion handling | `motion/presets/*.json` | `reducedMotion` variant per preset | WCAG 2.1 AA compliance baked into every preset |

## Points Copied

- Two-mode operation (Create + Audit) as architectural principle
- Frequency Gate concept (animation intensity inversely proportional to trigger frequency)
- Anti-pattern checklist as quality mechanism
- Context determines motion philosophy (not one-size-fits-all)
- prefers-reduced-motion as mandatory, not optional

## Points Improved/Fixed

- Frequency Gate quantified with specific multiplier values per frequency tier
- Designer perspectives translated into parameterized preset bundles (not prose descriptions)
- Anti-checklist expanded with severity levels and machine-readable format
- Golden Rule given measurable threshold (animation time budget as % of task time)
- Audit mode enhanced with scoring rubric and pass/fail criteria
- Context mapping formalized with explicit use-case → personality token mapping

## Points Adapted

- Three designer perspectives → three personality presets (Restrained/Polished/Playful) without referencing specific people
- Cookbook recipes → ProdigeUI motion preset JSON format with duration/easing token references
- Conditional file loading → ProdigeUI manifest-based skill section activation
- Audit checklist → Quality_Gate automated criteria with JSON rule format
- Create workflow → Integrated as substep within end-to-end UI/UX skill
