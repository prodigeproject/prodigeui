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

Use these artifacts as the foundation for every visual decision. Define concrete values once
at a token boundary; repeated component styling must consume semantic variables rather than
repeating raw literals.

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

That same contract separates semantic invariants that should converge across models from
layout, copy, artwork, and motion details that must remain generative. It also routes
research-derived guidance through the canonical evergreen/contextual/dated/rejected policy,
so historical examples never become aesthetic defaults.

Immediately after it, read `canonical/accepted-quality.profile.json`. Select the applicable
semantic profile from product intent and transfer its reasoning standard without copying
benchmark copy, section geometry, class names, dimensions, or color values.

Before emitting implementation code, execute
`canonical/generation.contract.json#oneBuildPreflight` in working context. Treat the first
build as the acceptance candidate: pre-resolve surface contrast, type/weight budgets, 44x44
targets, focal-subject scale, mobile containment, reduced motion, font delivery, and encoding.
The rendered Quality Gate verifies that work; it must not be used as permission to emit a
predictably broken draft.

Every UI/UX design task follows this sequence:

```
1. Brief Analysis        — Understand the request, identify use-case and constraints
2. Design Read           — Set aesthetic direction, calibrate Three Dials.
                           MANDATORY: read `craft/design-read.md` — declare the one-line
                           Design Read, set dials, set the Soul Formula (80/20 + engine
                           moment when MOTION_INTENSITY ≥ 0.7).
3. Craft Selection       — For expressive work (VARIANCE>=0.6 / MOTION>=0.5), pick a
                           hero signature + motion signature + texture from craft/.
                           MOTION ≥ 0.7: also pick an engine element from
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

If an unforeseen Quality Gate failure remains, loop back to the step that produced the
violation and fix it, then record why the preflight missed it so the contract can improve.
For expressive output, "competent but forgettable" is a FAILURE — loop back to Craft
Selection (Step 3). Only deliver once the negative gate passes AND (for expressive work)
the craft-presence rubric scores >= 9/12.

See `skills/prodige-ui-end-to-end/SKILL.md` for the detailed version of each step.

---

## Core Principles

1. **Token-first**: Repeated visual roles MUST be declared at a token-definition boundary and consumed through semantic/component variables. Concrete hex, px, or rem values are valid inside token definitions and one-off generated artwork; repeating them directly across component declarations is a failure.
2. **Rule-backed**: Every design decision is supported by measurable Design Rules with rationale traced to research sources.
3. **Three Dials calibration**: Every project sets `DESIGN_VARIANCE`, `MOTION_INTENSITY`, and `VISUAL_DENSITY` (0.0-1.0 each) to calibrate output appropriately for the use-case.
4. **Accessible**: WCAG 2.1 AA minimum — 4.5:1 contrast (normal text), 3:1 (large text), keyboard navigation, ARIA roles, focus indicators.
5. **Anti-AI-slop**: Use the Quality Gate (`quality-gate/anti-ai-slop.checklist.md`) to ensure expert-quality output. This is ProdigeUI's key differentiator — it detects and prevents generic, purposeless, inconsistent design output.
6. **Traceable**: Design decisions trace back to specific research sources in `research/`.
7. **Atomic composition**: Components follow atoms → molecules → organisms hierarchy.
8. **Route before you invent**: For functional product UI, consider an official design system per `craft/design-system-routing.md` before building a bespoke token layer.
9. **Motion & interaction craft**: For any interactive build, apply `craft/patterns/motion-craft.md` and `craft/patterns/interaction-patterns.md`.
10. **Zero Inline HTML Styles**: Never emit inline `style="..."` attributes in HTML markup. All component styles must be declared via CSS classes consuming custom properties (`var(--prodigeui-*)`).
11. **Mandatory Reduced Motion**: Every generated stylesheet must include `@media (prefers-reduced-motion: reduce)` to disable/simplify layout transforms and animations for sensitive users.
12. **Stacking Layer Safety**: Section wrappers containing pseudo-elements or absolute overlays MUST declare `isolation: isolate;`. Interactive CTA elements MUST explicitly own `position: relative; z-index: 2;`.
13. **Dynamic Recipe Derivation**: Do NOT copy hardcoded recipe artifacts (e.g. `rotate(1deg)` cards or `11:18 → 11:19` watermarks) verbatim across unrelated briefs. Layouts must be organically synthesized for the specific product domain.
14. **Material Depth & Inset Lighting**: Avoid flat, generic cards. Elevate surfaces with subtle top inset highlights (`box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.1)`), backdrop blur (`backdrop-filter: blur(12px) saturate(160%)`), and atmospheric light sweeps.
15. **Interactive Hero Product Canvas**: Hero sections must feature a domain-specific interactive product canvas or live demonstration anchor (e.g. node graph builder, prompt preview tab, interactive risk slider) rather than static text and static images.
16. **Interactive WebGL & JS Engine Craft**: When `MOTION_INTENSITY` ≥ 0.7 or `VARIANCE` ≥ 0.6, hero product anchors MUST include a functional inline JavaScript interactive canvas engine (e.g. HTML5 Canvas particle shader backdrop, dynamic drag-and-connect node DAG state engine, or interactive blueprint room inspector). Static visual representations without JS interactivity are prohibited.
17. **Harmonized Storytelling & Interactive Anchors**: Interactive canvas anchors or live JS widgets MUST NOT displace core domain storytelling typography, editorial project titles, or contextual metadata. High-craft interfaces harmonize editorial storytelling WITH interactive technical anchors.
18. **Strict Container Boundary Containment**: All container surfaces with rounded borders (`border-radius`) that enclose media viewports, image grids, or canvas anchors MUST declare `overflow: hidden;` to ensure 100% pixel-perfect containment without border bleeding.

---

### Theme Catalog (15 themes)
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
