---
sourceId: impeccable-main
sourceType: repo
sourceName: "impeccable-main"
sourceLocation: "Skill & Library/impeccable-main"
appliedTo: []
---

## Structural Analysis

Design polish and audit skill. Implements systematic UI quality assessment — checking for visual consistency, spacing correctness, typography coherence, and color harmony in generated output.

**Architecturally sound patterns:**
- **Quality gate pattern**: Systematic evaluation criteria applied to UI output. This is the AUDIT side of design — not generating UI, but VERIFYING generated UI quality.
- **Criteria-based assessment**: Named criteria that can be checked sequentially (consistency, spacing, typography, color harmony)
- **Audit workflow**: Input (UI) → Evaluate against criteria → Report findings → Suggest fixes

**Structural characteristics:**
- Evaluation-focused (not generation-focused)
- Post-production quality check (applied AFTER UI is generated)
- Systematic rather than subjective (named criteria, not "does it look good?")
- Fix-suggestion capability (not just flagging issues, but proposing solutions)

## Content Quality Audit

**Genuinely valuable content:**
- Named quality criteria categories (visual consistency, spacing, typography, color harmony)
- Systematic evaluation approach (check each criterion independently)
- Fix suggestion pattern (identify issue → explain why it's wrong → propose specific fix)
- Post-generation quality assurance concept

**AI Slop concerns:**
- If criteria are VAGUE ("check for consistency" without defining WHAT consistency means measurably)
- If assessment is purely visual/subjective without quantifiable thresholds
- If fix suggestions are generic ("improve spacing" vs "increase gap from 8px to 16px to match 8px grid")
- Risk: audit that produces OPINIONS rather than EVIDENCE-BASED findings

## Gap Analysis vs Theory

**Strengths:**
- Demonstrates that AUDIT is a distinct skill from GENERATION (critical insight)
- Systematic approach prevents random "looks good to me" reviews
- Fix suggestion pattern aligns with iterative improvement methodology

**Gaps:**
- Likely lacks quantifiable thresholds (when is spacing "wrong"? what's the tolerance?)
- No connection to design token system (can't verify token compliance without knowing which tokens exist)
- No accessibility audit component (visual polish ≠ accessibility)
- No performance assessment (visual complexity vs rendering budget)
- No anti-AI-slop awareness (can it detect the patterns taste-skill identifies?)
- Missing: severity levels (critical issue vs minor polish vs style preference)
- Missing: confidence scoring (how certain is the finding?)
- No connection to design-rules (auditing against what standard exactly?)

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Quality gate audit pattern | Ground in SPECIFIC rules: every check references a design-rule with measurable threshold. "Spacing consistency" = "all spacing values must be multiples of 8px base unit." |
| Criteria categories (consistency, spacing, typography, color) | Expand to: token compliance, accessibility (contrast, focus), motion appropriateness, anti-AI-slop patterns, responsive behavior, component state completeness |
| Fix suggestion pattern | Enhance with: severity level (critical/moderate/minor), confidence score, specific token value to use, design-rule reference justifying the fix |
| Post-generation evaluation concept | Integrate INTO generation workflow (not just post-hoc). Quality checks at each skill step, not only at the end. |

## Adaptation Strategy

Impeccable directly informs ProdigeUI's Quality_Gate system — the enforcement mechanism that prevents generic/incorrect output:

1. **Criteria → measurable rules**: Every audit criterion becomes a rule in `quality-gate/criteria.json` with specific thresholds and measurement methods
2. **Audit workflow → Quality_Gate integration**: Quality checks run at multiple points during skill execution (not just post-hoc)
3. **Fix suggestions → token-aware corrections**: Fixes always reference ProdigeUI tokens and design-rules (not arbitrary values)
4. **Subjective assessment → evidence-based scoring**: Each finding has confidence level, severity, and design-rule citation

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Quality gate audit pattern | `quality-gate/criteria.json` | Overall structure and schema | ProdigeUI's quality gate is the evolved version of this concept |
| Visual consistency criteria | `quality-gate/criteria.json` | `tokenCompliance.*` criteria | Consistency = adherence to token system |
| Spacing assessment | `quality-gate/criteria.json` | `spacing.*` criteria referencing layout.rules.json | Spacing correctness defined by grid adherence |
| Typography coherence check | `quality-gate/criteria.json` | `typography.*` criteria referencing typography.rules.json | Typography correctness = modular scale + weight hierarchy |
| Color harmony evaluation | `quality-gate/criteria.json` | `color.*` criteria referencing color.rules.json | Harmony = palette coherence + contrast compliance |
| Fix suggestion pattern | `quality-gate/report.schema.json` | `findings[].suggestion` structure | Structured fix recommendations with token references |
| Audit workflow | `skills/prodige-ui-end-to-end/SKILL.md` | Quality validation step | Where in workflow to run quality checks |
| Severity assessment | `quality-gate/report.schema.json` | `findings[].severity` field | Prioritization of quality findings |

## Points Copied

- Quality gate pattern (systematic post-generation evaluation)
- Named criteria categories (spacing, typography, color harmony, consistency)
- Fix suggestion capability (not just flagging, but proposing specific corrections)
- Audit workflow structure (input → evaluate → report → fix)

## Points Improved/Fixed

- Vague criteria → quantifiable thresholds referencing design-rules (measurable, not subjective)
- No standard reference → every check grounded in ProdigeUI design-rules JSON
- Subjective assessment → evidence-based scoring with confidence levels
- No severity levels → critical/moderate/minor classification
- No token awareness → token compliance as PRIMARY quality criterion
- Post-hoc only → integrated at multiple workflow steps
- No accessibility → accessibility criteria included (contrast, focus, motion)
- Generic fix suggestions → token-referenced, design-rule-cited specific corrections

## Points Adapted

- Standalone audit skill → ProdigeUI's Quality_Gate system (built-in, not external)
- Ad-hoc criteria → structured `quality-gate/criteria.json` with measurable rules
- Manual audit execution → automation-ready criteria (parseable by scripts)
- Single-pass evaluation → multi-stage quality checks throughout skill workflow
- Opinion-based review → evidence-based, citation-backed findings
