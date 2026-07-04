---
sourceId: smoothui-main
sourceType: repo
sourceName: "smoothui-main"
sourceLocation: "Skill & Library/smoothui-main"
appliedTo: []
---

## Structural Analysis

Monorepo animation component library built with modern tooling:

- **Monorepo structure:** Turbo + pnpm workspace
- **Code standards:** Ultracite (strict ESLint config), Biome for formatting/linting
- **SDD folder:** Specification-Driven Development documentation pattern
- **AGENTS.md:** Focused on code quality standards (formatting, imports, naming conventions)
- **Packages:** Multiple packages in workspace (component library + utilities)
- **GSAP-style approach:** Timeline-based animation API

**Architecturally sound patterns:**
- Monorepo with clear package boundaries
- SDD (specification-driven development) — specs define components before implementation
- Strict code quality enforcement through tooling (not just guidelines)
- ANIMATION_IMPROVEMENTS.md suggests iterative quality improvement process

**Architectural weaknesses:**
- AGENTS.md is 100% about code formatting — zero motion design guidance
- No design token integration visible in the animation components
- No accessibility layer in the animation system

## Content Quality Audit

**Genuinely valuable content:**
- Monorepo structure pattern (turborepo + pnpm) as a scalable architecture model
- SDD approach: writing specifications before implementations (good for AI agents)
- Strict quality tooling stack (Ultracite + Biome) demonstrates quality enforcement philosophy
- ANIMATION_IMPROVEMENTS.md implies structured improvement tracking

**AI Slop indicators:**
- AGENTS.md entirely about code formatting — no motion design intelligence. An AI agent reading this would learn nothing about WHEN, WHERE, or HOW to animate.
- No documented rationale for animation timing choices
- No design tokens or semantic values — likely uses hardcoded animation values in components
- Missing accessibility considerations for animations
- No motion principles, just implementation code
- SDD folder exists but its content may be shallow specs without design reasoning

## Gap Analysis vs Theory

**Strengths:**
- SDD approach aligns with specification-first development (good engineering practice)
- Quality tooling stack ensures consistent output (relevant to Quality_Gate concept)
- GSAP-style timeline API is industry-standard for complex choreography

**Gaps vs theory:**
- No connection to 12 Principles of Animation (or any motion theory)
- No perceptual timing guidelines (duration choices appear arbitrary)
- No reduced-motion handling documented
- No motion purpose classification (feedback vs decorative vs navigational)
- Timeline approach without sequencing principles (what determines play order?)
- No performance budget or frame-rate awareness
- Code-quality-obsessed but design-quality-ignorant

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| SDD pattern (spec before code) | Extend SDD to cover DESIGN decisions: each animation component spec must include: purpose, duration rationale, easing rationale, a11y behavior, token references |
| AGENTS.md structure | ProdigeUI's AGENTS.md must cover DESIGN guidance, not just code formatting. Include: when to animate, what to animate, motion token references, quality criteria |
| Monorepo/turbo pattern | Not directly applicable (ProdigeUI is a knowledge package, not a code library), but the multi-package organization informs folder structure |
| Quality tooling enforcement | Translate to ProdigeUI: Quality_Gate criteria should be as strict and automated as code linting. Every design rule = a lint rule equivalent |
| ANIMATION_IMPROVEMENTS.md | Adopt the concept of explicit improvement tracking for ProdigeUI artifacts (version history with rationale) |

## Adaptation Strategy

SmoothUI's value for ProdigeUI is primarily architectural/process-oriented rather than motion-design-oriented:

1. **SDD principle** → Every ProdigeUI component manifest entry IS a specification. Adopt "spec-first" philosophy for all artifacts.
2. **Quality enforcement philosophy** → Quality_Gate should be as non-negotiable as linting. Design rules are not suggestions — they are enforceable criteria.
3. **AGENTS.md as skill-discovery mechanism** → ProdigeUI's AGENTS.md must go FAR beyond code formatting. It should be the primary entry point for design intelligence.

The actual animation components are NOT adopted (they're implementation code without design reasoning), but the PROCESS of specification → implementation → quality check is valuable.

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| SDD (spec-before-code) philosophy | `components/components.manifest.json` | All component entries | Each component definition IS its specification; implementation follows spec |
| AGENTS.md as agent entry point | `AGENTS.md` | Entire file structure | Must include design intelligence, not just code formatting rules |
| Quality tooling enforcement | `quality-gate/criteria.json` | Enforcement model (pass/fail not advisory) | Design quality should be as strictly enforced as code quality |
| Improvement tracking pattern | `research/research-log.json` | Version/iteration metadata | Track how each artifact evolves with rationale |
| Monorepo organization | `prodigeui/` folder structure | Top-level separation of concerns | Clear boundaries between token system, components, motion, etc. |
| Timeline-based animation (GSAP style) | `motion/presets/enter-exit.json` | Sequencing/choreography fields | Timeline concept informs how multi-element animations are specified |

## Points Copied

- SDD (specification-driven development) philosophy: define what before how
- AGENTS.md as primary entry point for AI tool consumption
- Quality enforcement through strict tooling (non-advisory rules)
- Structured improvement tracking (ANIMATION_IMPROVEMENTS.md concept)
- Clear package/module boundary separation

## Points Improved/Fixed

- AGENTS.md expanded from code-only to full design intelligence (motion principles, token usage, quality criteria, skill discovery)
- SDD specs enhanced to include design rationale (why these values?) not just implementation spec
- Quality tooling concept translated from code linting to design rule enforcement
- Animation components enhanced with: token references, purpose classification, a11y behavior, duration rationale
- Added motion principles layer entirely missing from original

## Points Adapted

- Monorepo structure → ProdigeUI's folder-based organization (not npm packages, but knowledge domains)
- Code quality standards (Ultracite/Biome) → Design quality standards (Quality_Gate criteria)
- GSAP timeline API → Choreography specification format in motion presets
- SDD folder → Components manifest as specification, prompt templates as implementation guides
- Turbo build pipeline → ProdigeUI token build pipeline (JSON → CSS variables)
