# ProdigeUI — Agent Entry Point

> ⚠️ **Read `PHILOSOPHY.md` first.** ProdigeUI has two modes. In **Creative Mode** (vague
> brief) you ARE the designer — produce cinematic, craft-rich output using the `craft/`
> library; it must look visibly BETTER than raw AI, never merely "safe." In **Enhancement
> Mode** (specific brief) honor the designer's intent, execute their chosen techniques at
> reference quality, and DO NO HARM (never break assets, slow interaction, or add jank).
>
> ⚠️ **Rules prevent bad output; craft produces great output. You need BOTH.** The tokens,
> rules, and anti-slop gate below are the floor. For any expressive build, start at
> `craft/AGENTS.md` and pick a signature — otherwise output will be competent but
> forgettable, which is a FAILURE for expressive work.

> This document is the canonical entry point for AI agents using ProdigeUI.
> Read this file first. It tells you what ProdigeUI is, where things live, and how to work.

## System Purpose

ProdigeUI is a **portable UI/UX knowledge system** that equips you (AI agent) with:

- Measurable design rules backed by theory and research (80+ books, 39 repos — 119 sources indexed in `research/research-log.json`)
- A three-layer token system as the single source of visual truth
- Enterprise-grade component specifications (states, accessibility, variants)
- Accessible and purposeful motion presets with reduce-motion compliance
- Professional prompt templates for 6 use-case categories
- A quality gate ensuring output is free of "AI slop"
- The **Three Dials** system for calibrating aesthetic direction per project

Use these artifacts as the foundation for every visual decision.
**Never use raw values** — always reference Design Tokens.

---

## Available Skills

Skills are structured capability units stored in `skills/`. Each has a `SKILL.md` with
frontmatter (name, description, triggers) and step-by-step workflow instructions.

| Skill | Triggers | Purpose |
|-------|----------|---------|
| **prodige-ui-end-to-end** | "design ui", "create interface", "build component", "ui end to end", "design from brief" | Full workflow from brief to implementation with Quality Gate validation |
| **quality-check** | "check quality", "run quality gate", "audit design", "anti slop check" | Evaluate output against criteria.json and anti-AI-slop checklist |
| **token-management** | "manage tokens", "add token", "update token", "validate tokens" | Add, modify, and validate tokens across primitive/semantic/component layers |
| **theme-creation** | "create theme", "new theme", "custom theme", "brand theme" | Create a new theme with palette selection, token mapping, and contrast verification |
| **motion-review** | "review animations", "review motion", "check animations" | Review motion code against a high craft bar (easing, frequency, origin, interruptibility, GPU, a11y) |
| **design-lens** | "make it bolder", "tone it down", "fix the spacing", "colors feel flat", "polish this" | Apply a focused adjustment lens to existing output instead of rebuilding (`craft/design-lenses.md`) |

> The registry above is a subset. See `skills/AGENTS.md` for the full skill list (14 skills).

**How to find and run a skill:**
1. Match your need against the triggers above (or browse `skills/AGENTS.md`)
2. Open the skill folder and read `SKILL.md`
3. Follow the numbered steps — each references specific ProdigeUI artifacts
4. Validate output with Quality Gate before delivering

---

## General Workflow (8-Step Process)

### Model-robust baseline (mandatory for every agent, including smaller models)

Before implementing, read `craft/model-robust-generation.md`. It converts the creative
workflow into a short deterministic contract: derive a product-specific palette family,
choose one hero signature, cap effect complexity, build the first viewport around a real
product/story artifact, and run a rendered-state contrast plus encoding check. Do not copy
an older benchmark HTML as a starting point. Re-derive from the current brief.

Every UI/UX design task follows this sequence:

```
1. Brief Analysis        — Understand the request, identify use-case and constraints
2. Design Read           — Set aesthetic direction, calibrate Three Dials.
                           MANDATORY: read `craft/design-read.md` — declare the one-line
                           Design Read, set dials, set the Soul Formula (80/20 + engine
                           moment when MOTION_INTENSITY ≥ 7).
3. Craft Selection       — For expressive work (VARIANCE>=0.6 / MOTION>=0.5), pick a
                           hero signature + motion signature + texture from craft/.
                           MOTION ≥ 7: also pick an engine element from
                           `craft/patterns/engine-interactivity.md` (ScrollTrigger,
                           Three.js, particles, Lenis, etc) — static page = FAIL here.
4. Token Selection       — Choose/customize theme from Theme_Catalog
5. Component Selection   — Map features to Component_Library (atomic design)
6. Layout Design         — Apply grid system and structural rules
7. Motion Design         — Choreograph per motion/choreography.md + MOTION_INTENSITY dial
8. Implementation        — Generate code from craft/ recipes + tokens, components, rules
9. Quality Gate          — Validate against criteria + anti-AI-slop (negative gate) AND
                           the craft-presence rubric (positive gate) for expressive work
```

If Quality Gate fails, loop back to the step that produced the violation and fix.
For expressive output, "competent but forgettable" is a FAILURE — loop back to Craft
Selection (Step 3). Only deliver once the negative gate passes AND (for expressive work)
the craft-presence rubric scores >= 9/12.

See `skills/prodige-ui-end-to-end/SKILL.md` for the detailed version of each step.

---

## Core Principles

1. **Token-first**: All visual values MUST come from Design Tokens. No hardcoded hex, px, or rem.
2. **Rule-backed**: Every design decision is supported by measurable Design Rules with rationale traced to research sources.
3. **Three Dials calibration**: Every project sets `DESIGN_VARIANCE`, `MOTION_INTENSITY`, and `VISUAL_DENSITY` (0.0-1.0 each) to calibrate output appropriately for the use-case.
4. **Accessible**: WCAG 2.1 AA minimum — 4.5:1 contrast (normal text), 3:1 (large text), keyboard navigation, ARIA roles, focus indicators.
5. **Anti-AI-slop**: Use the Quality Gate (`quality-gate/anti-ai-slop.checklist.md`) to ensure expert-quality output. This is ProdigeUI's key differentiator — it detects and prevents generic, purposeless, inconsistent design output.
6. **Traceable**: Design decisions trace back to specific research sources in `research/`.
7. **Atomic composition**: Components follow atoms → molecules → organisms hierarchy.
8. **Route before you invent**: for functional product UI (dashboard, admin, enterprise, regulated), consider an official design system (Fluent/Carbon/Material/Radix/shadcn/govuk/uswds) per `craft/design-system-routing.md` before building a bespoke token layer. Invent for expressive/brand work.
9. **Motion & interaction craft**: for any interactive build, apply `craft/patterns/motion-craft.md` (committed easing, entrance physics, interruptibility, GPU-only) and `craft/patterns/interaction-patterns.md` (native dialog/popover, focus, forms, undo-over-confirm). Keyboard/high-frequency actions get no animation.

---

## Folder Structure

| Folder | Contents | When to Use |
|--------|----------|-------------|
| `craft/` | Reference implementations — recipes for advanced techniques (video hero, liquid glass, magnetic hover, text reveal, parallax, bento, fluid type, grain) PLUS interaction-level craft: `patterns/motion-craft.md` (easing/physics/perf), `patterns/interaction-patterns.md` (dialog/popover/a11y), `patterns/animation-vocabulary.md`, `taste.md`, `composition.md`, and `design-system-routing.md` (invent vs reach for an official system). **NEW:** `design-read.md` (brief inference + Design Read + Three Dials + Soul Formula), `patterns/motion-personality.md` (4 archetypes + 3 motion layers), `patterns/advanced-effects.md` (11 high-impact CSS/JS effects), `patterns/engine-interactivity.md` (GSAP/ScrollTrigger/Lenis/Three.js/WebGL/canvas/AudioContext/ViewTransitions/skeletons/charts/dev-tool), `patterns/responsive-patterns.md`, `recipes/*.recipe.md` (6 copy-paste component recipes) | **Every expressive build AND every interactive build. Rules prevent bad output, craft produces great output.** |
| `tokens/` | Design tokens (primitive, semantic, component) + CSS build | Every visual value decision |
| `themes/` | Ready-to-use themes (default, light, dark, saas-professional) | Choosing a visual identity |
| `motion/` | Animation presets + motion principles | Adding transitions/animations |
| `components/` | Component specifications (atomic design) + composition guide | Building interfaces |
| `assets/` | Icons, fonts, illustrations + license metadata | Selecting visual assets |
| `design-system/` | Cohesion document + entry point | Understanding artifact relationships |
| `design-rules/` | Typography, color, layout, structure rules (JSON + narrative) | Validating design decisions |
| `prompt-templates/` | Prompt templates per use-case | Generating UI/UX artifacts |
| `use-cases/` | Per-category guides (saas, landing, ecommerce, portfolio, hris, agentic-app) | Referencing use-case specific patterns |
| `quality-gate/` | Quality criteria + anti-AI-slop checklist + report schema | Final output evaluation |
| `skills/` | Structured capability units (14 skills) | Running workflows |
| `hooks/` | Automation and plugin definitions | Automatic triggers |
| `installers/` | Installer + adapters per agentic tool | Installing to AI tools |
| `research/` | Research notes, synthesis, and log | Tracing design decision origins |

---

## Completed Artifacts

### Core Configuration
- `manifest.json` — complete artifact registry with types and statuses

### Token System (3 layers)
- `tokens/primitive.tokens.json` — raw palette, spacing scale, type scale, radii, shadows
- `tokens/semantic.tokens.json` — role-based tokens referencing primitives
- `tokens/component.tokens.json` — per-component tokens referencing semantics
- `tokens/build/tokens.css` — resolved CSS custom properties

### Theme Catalog (15 themes)
- `themes/_default.theme.json` — fallback baseline
- `themes/light.theme.json` — light mode (verified contrast >= 4.5:1)
- `themes/dark.theme.json`, `themes/dark-premium.theme.json`, `themes/creative-dark.theme.json` — dark modes (verified contrast >= 4.5:1)
- `themes/saas-professional.theme.json`, `themes/startup-bold.theme.json`, `themes/enterprise-neutral.theme.json` — SaaS/product brand themes
- `themes/fintech-blue.theme.json`, `themes/healthcare-green.theme.json`, `themes/education-warm.theme.json`, `themes/ecommerce-warm.theme.json`, `themes/government-accessible.theme.json` — sector brand themes
- `themes/portfolio-minimal.theme.json`, `themes/social-vibrant.theme.json` — expressive brand themes
- See `themes/creating-a-theme.md` for the authoring guide

### Motion Library
- `motion/motion.tokens.json` — duration and easing tokens
- `motion/presets/enter-exit.json`, `state-transition.json`, `hover-focus.json`, `scroll-based.json`
- `motion/principles.md` — purpose-driven motion principles

### Component Library
- `components/components.manifest.json` — 55 components (16 atoms, 18 molecules, 21 organisms)
- `components/composition-guidelines.md` — atomic design composition rules

### Design Rules (JSON + narrative)
- `design-rules/typography.rules.json`, `color.rules.json`, `layout.rules.json`, `structure.rules.json`
- `design-rules/form.rules.json`, `responsive.rules.json`, `data-visualization.rules.json`, `advanced-methodology.rules.json`
- `design-rules/design-rules.md` — full rationale with book references

### Use-Case Guides (6 categories)
- `use-cases/saas/guide.md`
- `use-cases/landing/guide.md`
- `use-cases/ecommerce/guide.md`
- `use-cases/portfolio/guide.md`
- `use-cases/hris/guide.md`
- `use-cases/agentic-app/guide.md`

### Quality Gate
- `quality-gate/criteria.json` — measurable pass/fail criteria
- `quality-gate/anti-ai-slop.checklist.md` — expert vs generic output indicators
- `quality-gate/report.schema.json` — report format

### Design System Cohesion
- `design-system/design-system.md` — dependency graph between all 6 core artifacts
- `design-system/entry-point.md` — recommended reading order

### Assets
- `assets/assets.manifest.json` — icons, fonts, illustrations with license metadata

### Research
- `research/research-log.json` — index of all research notes
- `research/synthesis.md` — cross-source consolidated findings

---

## Quick Start for Agents

1. **You receive a UI brief** → Start with Step 1 (Brief Analysis)
2. **You need a specific component** → Open `components/components.manifest.json`
3. **You need color/spacing values** → Open `tokens/semantic.tokens.json`
4. **You want to check your work** → Run `skills/quality-check/SKILL.md`
5. **You need to create a new theme** → Run `skills/theme-creation/SKILL.md`
6. **You need to add/change tokens** → Run `skills/token-management/SKILL.md`

---

## Anti-AI-Slop: The Key Differentiator

The `quality-gate/anti-ai-slop.checklist.md` defines what separates expert UI from generic AI output:

- **Spacing rhythm** — consistent, intentional, not arbitrary margins
- **Visual hierarchy** — purposeful sizing/weight, not random
- **Motion purpose** — every animation has a documented reason
- **Color coherence** — roles and relationships, not decoration
- **Typography discipline** — scale adherence, limited weights, vertical rhythm
- **Whitespace intent** — breathing room with purpose, not filler

Run this checklist as the final gate on every output. If it fails, iterate.

---

## Reference

- **Full artifact list**: `manifest.json`
- **Installation instructions**: `README.md`
- **Skill registry (detailed)**: `skills/AGENTS.md`
- **Research index**: `research/research-log.json`
- **Research synthesis**: `research/synthesis.md`
