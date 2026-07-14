---
sourceId: taste-skill-main
sourceType: repo
sourceName: "taste-skill-main"
sourceLocation: "Skill & Library/taste-skill-main"
appliedTo: []
---

## Structural Analysis

The anti-AI-slop frontend skill — the single most important methodology source for ProdigeUI's quality differentiation. Implements a THREE DIALS system that parameterizes design variance, creating a spectrum between "safe/conventional" and "bold/distinctive."

**Architecturally sound patterns:**
- **Three Dials system**: `DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY` — each a continuous parameter that agents can tune based on context. This is a BREAKTHROUGH concept: instead of binary "creative vs boring", use dials.
- **Brief Inference pipeline**: Before any code, infer the design direction from brief/context. "Design Read" declaration forces explicit aesthetic commitment.
- **Anti-Default Discipline**: Named, explicit list of LLM defaults to actively avoid. Not "be creative" (vague), but "do NOT use these specific patterns" (actionable).
- **Signal-to-Dial inference tables**: Maps contextual signals (industry, audience, content type) to dial positions. Machine-readable decision logic.
- **Use-Case Presets table**: Pre-configured dial positions for common scenarios (SaaS dashboard, landing page, portfolio, etc.)
- **Audience-picks-aesthetic principle**: The TARGET USER's taste determines dial positions, not the developer's or the AI's.

**No overengineering detected.** This skill is precisely scoped — it tackles ONE problem (AI design sameness) with a rigorous, parameterized approach.

## Content Quality Audit

**Genuinely valuable content (ALL of it):**
- Explicit AI default blacklist: AI-purple gradients, centered hero over dark mesh/gradient, three equal cards in a row, generic glassmorphism/blur panels, Inter + slate-900, rounded-2xl on everything, generic "Get Started" CTA copy, gradient borders for no reason
- Each blacklisted pattern has implicit RATIONALE: these patterns are overrepresented in AI outputs because they appeared frequently in training data, not because they're good design
- Context-dependent aesthetic choices: "A fintech dashboard for CFOs needs DIFFERENT design variance than a creative agency portfolio" — this is expert-level thinking
- Design Read declaration: forces the agent to STATE its aesthetic direction before producing code. This is a quality gate mechanism — makes the invisible visible.
- Dial positions are NOT arbitrary: they're inferred from signals (brand maturity, audience sophistication, content density, interaction complexity)

**AI Slop indicators: ZERO.** This skill is ITSELF the antidote to AI slop. Every rule is evidence-based, specific, and actionable. No vague advice. No generic platitudes.

## Gap Analysis vs Theory

**Strengths relative to design theory:**
- Aligns with semiotics: design choices SIGNIFY meaning to audiences (audience-picks-aesthetic)
- Aligns with Gestalt: visual density dial implicitly controls proximity/similarity relationships
- Aligns with brand theory: design variance maps to brand personality dimensions (safe=corporate, bold=challenger)
- Anti-Default Discipline aligns with creativity research: genuine creativity requires EXPLICIT rejection of defaults

**Gaps identified:**
- No formal connection to color theory (how dials affect palette generation)
- No connection to typography theory (how DESIGN_VARIANCE affects type scale, weight, and pairing choices)
- No motion theory integration (MOTION_INTENSITY is a dial but lacks the WHY — perceptual thresholds, cognitive load implications)
- No accessibility guardrails on dials (high VISUAL_DENSITY could violate cognitive load limits; high MOTION_INTENSITY could trigger vestibular issues)
- No MEASUREMENT of resulting design (how to verify dial positions were actually achieved in output)
- Missing: how to handle MULTI-PAGE consistency when dials are applied per-component

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Three Dials system | Add accessibility constraints: MOTION_INTENSITY capped at 0.3 when prefers-reduced-motion detected. VISUAL_DENSITY capped at 0.7 when content is information-dense. Add per-dial MEASUREMENT criteria for Quality_Gate. |
| Anti-Default Discipline blacklist | Expand from 8 patterns to 20+ with severity scoring. Add: "default BUT acceptable when [condition]" exceptions. Add positive alternatives for each blacklisted pattern. |
| Brief Inference pipeline | Formalize as ProdigeUI Skill step with structured output format. Inference → structured JSON (not prose). Add validation: inferred dials must be justifiable from brief context. |
| Signal-to-Dial inference tables | Expand signal vocabulary. Add: content type, target device, brand maturity, competitor landscape, accessibility requirements. Make tables machine-readable JSON. |
| Use-Case Presets | Map to ProdigeUI prompt-template categories (saas, landing, ecommerce, portfolio, hris, agentic-app). Each preset = dial positions + token overrides + component variant selections. |
| Audience-picks-aesthetic principle | Formalize with audience persona → dial mapping table. Add cultural considerations (Western minimalism vs Eastern density preferences). Add age/tech-savviness factors. |
| Design Read declaration | Transform into Quality_Gate pre-production check: agent MUST output Design_Read.json before generating any component code. Failure to declare = hard block. |

## Adaptation Strategy

The taste-skill becomes ProdigeUI's QUALITY DIFFERENTIATION layer. It's integrated at three levels:

1. **Skill Workflow Level**: Design Read is a MANDATORY step in every ProdigeUI skill. Before generating UI, declare aesthetic direction with dial positions + justification.
2. **Token System Level**: Dial positions MAP to token overrides. DESIGN_VARIANCE=0.8 → selects from "bold" token variants (larger scale ratios, more weight contrast, wider spacing). DESIGN_VARIANCE=0.2 → "safe" variants (standard scale, moderate contrast, tight spacing).
3. **Quality Gate Level**: Anti-Default Discipline becomes a checklist in `quality-gate/criteria.json`. Output is scored against known AI-slop patterns. Presence of blacklisted patterns = automatic quality flag.

The THREE DIALS framework is the single most important architectural contribution from all research sources. It transforms vague "be creative" directives into PARAMETERIZED, MEASURABLE, REPRODUCIBLE design decisions.

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Three Dials (DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY) | `quality-gate/criteria.json` + `skills/*/SKILL.md` | `dials` configuration section | Parameterizes design quality along three measurable axes |
| Anti-Default Discipline blacklist | `quality-gate/anti-slop.criteria.json` | `blacklistedPatterns[]` array | Explicit, checkable list of AI-slop patterns to reject |
| Brief Inference pipeline | `skills/prodige-ui-end-to-end/SKILL.md` | Step 1: "Design Read" | Mandatory aesthetic declaration before code generation |
| Signal-to-Dial inference tables | `design-rules/aesthetic-inference.rules.json` | Signal-to-dial mapping tables | Machine-readable decision logic for dial position selection |
| Use-Case Presets | `prompt-templates/*/meta.json` | `defaultDials` per template | Each use-case category gets appropriate dial defaults |
| Audience-picks-aesthetic | `skills/prodige-ui-end-to-end/SKILL.md` | Brief analysis step | Forces agent to identify target audience before design decisions |
| Design Read declaration | `quality-gate/pre-checks.json` | `designRead` required output | Hard block: no code generation without explicit design declaration |
| AI-purple gradient blacklist item | `quality-gate/anti-slop.criteria.json` | `colorPatterns.blacklisted[]` | Prevents most common AI color slop |
| "Three equal cards" blacklist item | `quality-gate/anti-slop.criteria.json` | `layoutPatterns.blacklisted[]` | Prevents lazy symmetric layouts |
| Context-dependent aesthetics | `design-rules/aesthetic-inference.rules.json` | Context → aesthetic mapping | Ensures design choices match use-case, not AI defaults |

## Points Copied

- Three Dials system concept (DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY)
- Anti-Default Discipline approach (explicit blacklist of AI failure modes)
- Brief Inference before coding (infer aesthetic from context before execution)
- Design Read declaration pattern (make aesthetic direction explicit/visible)
- Signal-to-Dial inference tables (contextual signals determine dial positions)
- Use-Case Presets (pre-configured dial positions per scenario type)
- Audience-picks-aesthetic principle (target user determines aesthetic, not AI)
- Specific blacklisted patterns (AI-purple, centered hero on mesh, three equal cards, generic glassmorphism, Inter+slate-900, rounded-2xl everything)

## Points Improved/Fixed

- Three Dials enhanced with accessibility constraints (caps on motion/density for a11y)
- Three Dials connected to token system (dial positions → token variant selection)
- Three Dials given MEASUREMENT criteria (Quality_Gate verifies achieved dial position in output)
- Anti-Default blacklist expanded from 8 to 20+ with severity scoring and conditional exceptions
- Brief Inference formalized as structured JSON output (not prose)
- Signal tables expanded with additional signals (device, brand maturity, competitor landscape)
- Use-Case Presets mapped to ProdigeUI prompt-template categories with full token/component overrides
- Added multi-page consistency rules (dials locked per project, not per component)
- Added positive alternatives for each blacklisted pattern (what TO do, not just what NOT to do)
- Added cultural considerations to audience-picks-aesthetic

## Points Adapted

- Prose skill instructions → structured SKILL.md with frontmatter, steps, validation links
- Implicit dial logic → explicit JSON rules in `design-rules/aesthetic-inference.rules.json`
- Anti-Default list → scored Quality_Gate criteria in `quality-gate/anti-slop.criteria.json`
- Design Read → mandatory pre-production check with structured output format
- Use-Case Presets table → per-template `meta.json` files with `defaultDials` + token overrides
- Context inference → formalized decision tree consumable by AI agents programmatically
- Single-skill scope → integrated across ProdigeUI's entire skill chain (every skill inherits dial awareness)
