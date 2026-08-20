---
sourceId: motion-ui-design-master
sourceType: repo
sourceName: "motion-ui-design-master"
sourceLocation: "Skill & Library/motion-ui-design-master"
appliedTo: []
---

## Structural Analysis

Curated resource collection (awesome-list style) for motion/animation in UI design:

- **Format:** Markdown file(s) with categorized links
- **Categories:**
  - Easing tools (easings.net, cubic-bezier.com)
  - CSS triggers (csstriggers.com for performance awareness)
  - Animation libraries (GreenSock, Velocity.js, anime.js, Mo.js, Popmotion)
  - Design guidelines (Material Design Motion, Apple HIG Motion, Windows Motion)
  - Books and articles on motion design
  - Conference talks on animation in UI
- **Referenced experts:** Val Head extensively cited (leading voice in web animation)
- **Scope:** Aggregation/curation, NOT original content

**Architecturally sound patterns:**
- Categorization by technology and use case (organized for quick lookup)
- Links to PRIMARY SOURCES (official documentation, not blog recaps)
- Cross-referencing tools + guidelines + libraries (the full ecosystem)
- Expert attribution (Val Head, Rachel Nabors — recognized authorities)

**Architectural weaknesses:**
- Static resource list (no original principles, rules, or content)
- No structured data format (just markdown links)
- Likely outdated (libraries evolve, links break)
- No decision guidance (lists everything without ranking or recommending)

## Content Quality Audit

**Genuinely valuable content:**
- Resource categorization reveals the ECOSYSTEM of motion design tools and guidelines:
  - **Easing tools:** easings.net (visual easing reference), cubic-bezier.com (curve builder) — essential reference for easing selection
  - **CSS triggers:** csstriggers.com — which CSS properties trigger layout/paint/composite → PERFORMANCE awareness
  - **Platform guidelines:** Material Design Motion principles, Apple Human Interface Guidelines Motion, Windows motion principles — these ARE the industry standards
  - **Libraries landscape:** GreenSock (most powerful), Velocity.js (performance-focused), anime.js (lightweight), Mo.js (motion graphics), Popmotion (functional)
  - **Expert references:** Val Head's "Designing Interface Animation" (book → separate research note), Rachel Nabors' conference talks

**AI Slop indicators:**
- This IS essentially a link collection — no original design intelligence
- No comparative analysis (which library for which use case?)
- No timing/easing recommendations extracted from the sources
- No synthesis of the guidelines into actionable rules
- Many links may be outdated (libraries deprecated, URLs moved)
- No quality evaluation of linked resources (all links treated equally)

## Gap Analysis vs Theory

**Strengths:**
- Points to authoritative primary sources (Material Design, Apple HIG, Windows Fluent)
- Includes PERFORMANCE awareness (csstriggers.com) which many motion resources ignore
- Includes both TOOLS (build animations) and GUIDELINES (design animations correctly)
- References academic/conference work (not just blog posts)

**Gaps vs theory:**
- Curation without synthesis — links exist but no extracted principles
- No distillation of Material Design motion rules into actionable token values
- No comparison of Apple vs Google vs Microsoft motion philosophies (where they agree = high-confidence principles)
- Missing modern resources (Web Animations API, View Transitions API, CSS scroll-driven animations)
- No mobile-specific motion resources
- No accessibility-focused motion resources (reduced motion, vestibular disorders)

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Platform guidelines references (Material Design, Apple HIG, Windows) | SYNTHESIZE: Extract the common principles across all three → these become ProdigeUI's motion principles. Where they agree = high-confidence rule. Where they disagree = document variance with rationale for ProdigeUI's choice. |
| Easing tool references (easings.net, cubic-bezier.com) | EXTRACT: From easings.net, identify the 5-7 easing curves actually needed for UI. Name them semantically. Document when to use each. Encode as token values. |
| CSS triggers (performance awareness) | ENCODE: Create performance tier classification for animatable properties. Tier 1 (composite only): transform, opacity. Tier 2 (paint): color, background, box-shadow. Tier 3 (layout): width, height, margin, padding. Add as Quality_Gate rule: "only animate Tier 1 properties unless explicitly justified." |
| Animation library landscape | EXTRACT: From each library's approach, identify reusable concepts. GreenSock: timeline, stagger. anime.js: SVG path animation. Popmotion: spring physics. Mo.js: shape morphing. Map concepts to ProdigeUI presets. |
| Val Head references | Cross-reference with book research (separate note). Val Head's principles should DIRECTLY inform `motion/principles.md`. |

## Adaptation Strategy

This repo is a POINTER to valuable resources, not a resource itself. Its value is the ECOSYSTEM MAP it provides:

1. **Platform guidelines synthesis** → ProdigeUI distills Material Design + Apple HIG + Windows motion into a unified motion principles document, noting consensus points and deliberate divergences.
2. **Easing tools** → ProdigeUI's motion tokens include ALL standard easing curves with visual reference documentation and usage guidelines.
3. **Performance tiers** → Quality_Gate includes CSS property animation performance classification.
4. **Library concepts** → Timeline (GSAP), spring (Popmotion), stagger (GSAP), morph (Mo.js) concepts are encoded in preset format.
5. **Expert references** → Used to validate ProdigeUI's principles against recognized authority opinions.

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Material Design + Apple HIG + Windows motion (cross-platform consensus) | `motion/principles.md` | Core principles section (synthesized from all three) | Cross-platform consensus = high-confidence universal principles |
| Easing curve reference (easings.net taxonomy) | `motion/motion.tokens.json` | `easing.*` token definitions with named curves | ProdigeUI needs finite, named easing set (not infinite cubic-bezier possibilities) |
| CSS triggers performance tiers | `quality-gate/criteria.json` | `motion-duration` criterion | Enforce: only animate composite-layer properties by default |
| GreenSock timeline concept | `motion/presets/enter-exit.json` | Choreography/sequence specification | Timeline concept for multi-element orchestration |
| GreenSock stagger concept | `motion/presets/enter-exit.json` | Stagger configuration | List animation timing via calculated delays |
| Popmotion spring physics | `motion/motion.tokens.json` | `easing.spring.*` tokens | Spring-based easing for natural, physics-based feel |
| Val Head expertise reference | `motion/principles.md` | Authority attribution for principles | Principles backed by recognized expert authority |

## Points Copied

- Ecosystem awareness: the CATEGORIES of motion resources needed (tools, guidelines, libraries, performance)
- Cross-platform guideline synthesis approach (Material + Apple + Windows → consensus)
- Performance tier awareness (composite vs paint vs layout properties)
- Named easing curve reference as a finite, documented set
- Expert attribution for credibility (Val Head, Rachel Nabors)

## Points Improved/Fixed

- From link list to SYNTHESIZED principles (extracted and distilled, not just referenced)
- Easing curves selected and NAMED with usage guidelines (not just "here are all possible curves")
- Performance tiers made into Quality_Gate enforcement rule (not just awareness)
- Library concepts extracted as PATTERNS and encoded in preset format
- Guidelines cross-referenced for consensus identification (agreement across 3 platforms = principle)
- Added modern resources: Web Animations API, View Transitions API, CSS scroll-driven animations

## Points Adapted

- Awesome-list format → Structured JSON artifacts with encoded knowledge
- Link curation → Principle distillation and synthesis
- Tool references → Built-in knowledge (agents don't visit external tools, they use ProdigeUI's encoded easing tokens)
- Library ecosystem overview → Concept extraction mapped to preset capabilities
- Conference talk references → Principles extracted and documented (agents can't watch videos)
