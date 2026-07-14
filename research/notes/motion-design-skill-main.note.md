---
sourceId: motion-design-skill-main
sourceType: repo
sourceName: "motion-design-skill-main"
sourceLocation: "Skill & Library/motion-design-skill-main"
appliedTo: []
---

## Structural Analysis

This repository represents one of the most architecturally mature motion design resources analyzed. It follows a skill-based architecture with YAML frontmatter, organized into three clear directories:

- **director/** — Philosophy and decision-making frameworks (emotional intent, narrative structure)
- **reference/** — Lookup tables for durations, easing curves, weight classifications
- **patterns/** — Reusable motion recipes and choreography templates

**Sound patterns adopted:**
- Separation of philosophy (why) from reference data (what) from recipes (how) — excellent information architecture
- Decision tree approach: "given context X, apply motion Y" — directly usable by AI agents
- Named abstractions instead of raw values (e.g., "decelerate" instead of `cubic-bezier(0,0,0.2,1)`)

**File format:** Markdown with structured sections. The skill frontmatter pattern (name, description, triggers) aligns perfectly with ProdigeUI's SKILL.md format requirement.

## Content Quality Audit

**Genuinely valuable content:**
- Three Pillars framework (Emotional Intent, Visual Narrative, Motion Craft) provides a coherent mental model
- Motion Personality archetypes (Playful, Premium, Corporate, Energetic) with SPECIFIC parameter ranges per archetype
- Duration tables broken by element type with rationale:
  - Tooltip: 80-120ms (small, peripheral, needs instant feel)
  - Button: 120-180ms (primary interaction, needs responsiveness)
  - Card: 200-350ms (medium content, needs choreography time)
  - Modal: 300-400ms (large overlay, needs emphasis)
  - Page: 400-600ms (full context switch, needs narrative)
- Easing selection rules with cognitive reasoning (entrance=decelerate because objects appearing should "settle in")
- Industry standard curves documented with named references
- 1/3 Rules for distance and simultaneous elements

**AI Slop indicators: None.** This repo demonstrates expert-level depth. Every rule has a WHY attached. Duration values come with cognitive justification. Easing selection is backed by perception science (objects entering field of view naturally decelerate).

## Gap Analysis vs Theory

**Strengths relative to animation theory:**
- Covers Disney's 12 Principles implicitly (anticipation → easing in, follow-through → overshoot settings)
- Purpose-driven motion philosophy aligns with Material Design and Apple HIG motion principles
- Duration values are perceptually grounded (below 100ms = imperceptible, above 1000ms = sluggish)

**Gaps identified:**
- No explicit performance budget framework (when to skip animation based on device capability)
- No `prefers-reduced-motion` strategy documented (critical for WCAG 2.1 AA compliance)
- Missing staggering/sequencing math (how to calculate delay offsets for N elements)
- No frame-rate considerations (60fps target, when to reduce complexity)
- Emotion-to-motion mapping lacks citation to empirical psychology research
- No scroll-based animation principles (IntersectionObserver patterns, parallax constraints)

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Duration tables by element type | Add cognitive load justification from psychology research (working memory processing time ~200-300ms aligns with modal/card durations). Add reduce-motion variant per entry. |
| Easing selection rules | Formalize into a decision matrix with 3 inputs: direction (in/out/both), element size, interaction type. Add cubic-bezier values alongside named aliases. |
| Motion Personality archetypes | Cross-reference with brand personality frameworks (Aaker's dimensions). Add token mapping: each archetype = a set of motion token overrides. |
| 1/3 Rules | Provide mathematical formula: `delay = baseDuration / 3 * elementIndex`. Add max total sequence duration cap. |
| Emotion-to-motion mapping | Back with Mehrabian's pleasure-arousal-dominance model. Map emotional dimensions to motion parameters (arousal→speed, pleasure→smoothness). |
| Weight classification system | Connect to perceived performance research (Nielsen's response time thresholds: 0.1s/1.0s/10s). |

## Adaptation Strategy

This repo's Three Pillars framework becomes the philosophical backbone of ProdigeUI's Motion_Library, but transformed:

1. **Emotional Intent** → Encoded as `personality` field in `motion/motion.tokens.json` with archetype presets
2. **Visual Narrative** → Becomes sequencing rules in motion presets (choreography tokens)
3. **Motion Craft** → Becomes the concrete duration/easing token values + quality gate criteria

The decision tree approach is preserved but made machine-readable: instead of prose, encode as JSON decision rules that an AI agent can evaluate given context parameters.

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Duration tables (tooltip 80-120ms, button 120-180ms, etc.) | `motion/motion.tokens.json` | `duration.*` token values | Provides perceptually-grounded defaults; prevents AI slop of random timing values |
| Easing selection rules (entrance=decelerate, exit=accelerate) | `motion/motion.tokens.json` | `easing.*` token values + usage metadata | Named easing with documented purpose prevents agents from using `ease` for everything |
| Motion Personality archetypes | `motion/presets/*.json` | `personality` override sets | Enables brand-aligned motion without per-animation manual tuning |
| Three Pillars framework | `motion/principles.md` | Core philosophical section | Provides intent-first approach (why → what → how) |
| 1/3 Rules for staggering | `motion/presets/enter-exit.json` | `stagger.delayFormula` field | Mathematical stagger prevents arbitrary delay values |
| Weight classification | `design-rules/structure.rules.json` | `motion.weightClasses` | Connects element visual weight to animation intensity |
| Decision tree (when to animate) | `skills/prodige-ui-end-to-end/SKILL.md` | Motion design step | Guides agent decision-making during implementation |

## Points Copied

- Duration value ranges by element type (tooltip/button/card/modal/page)
- Easing direction mapping (entrance→decelerate, exit→accelerate, bidirectional→standard)
- Named curve vocabulary (smooth, snappy, bouncy as semantic aliases)
- Three-level organization (philosophy/reference/patterns)
- Skill frontmatter format with triggers

## Points Improved/Fixed

- Duration tables enhanced with cognitive science citations and reduce-motion variants
- Easing rules formalized as a computable decision matrix (not prose)
- Personality archetypes connected to Design Token overrides (not just descriptive)
- All timing values constrained to 100-1000ms range with validation rule
- Added performance budget layer (device capability → animation complexity cap)
- Added explicit WCAG prefers-reduced-motion handling per preset

## Points Adapted

- Three Pillars → encoded as structured JSON metadata on each preset (not separate documents)
- Decision tree → transformed into Quality Gate criteria for motion review
- Weight classification → merged with component manifest (each component gets a motion weight class)
- Emotion mapping → simplified to 4 brand personality presets with token override sets
- Pattern recipes → transformed into ProdigeUI motion preset JSON format with token references
