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

ProdigeUI is a **Generative UI/UX Knowledge Engine** that equips AI agents to synthesize world-class interfaces driven by 4 core pillars:

1. **Intent & Product Read**: Deeply analyzing product domain, user persona, and emotional positioning.
2. **Dynamic Taste Engine**: Deriving custom HSL color harmonies (`themes/generative-theme-synthesis.md`), font pairings, material depth, and spatial rhythms dynamically for ANY brief.
3. **High-Craft Copywriting System**: Writing authentic domain storytelling copy (`craft/high-craft-copywriting.md`) while strictly prohibiting prompt instruction leaks (e.g. `(CLICK TO...)`).
4. **Non-Negotiable Guardrails**: Enforcing WCAG AA contrast (>=4.5:1 / 7.0:1+), 0 inline HTML styles, `prefers-reduced-motion`, and strict container boundary containment (`overflow: hidden;`).

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

## Generative Workflow (4-Pillar Pipeline)

Every UI/UX design task follows this dynamic sequence:

```
1. INTENT & PRODUCT READ   — Infer domain stance, user emotion, and visual ambition.
2. DYNAMIC TASTE SYNTHESIS — Synthesize custom HSL palette, Google Font pairing, and material depth.
3. GENERATIVE ENGINE CRAFT — Build dynamic layout geometries and JS interactive anchors (craft/generative-craft-engine.md).
4. HIGH-CRAFT COPYWRITING — Write authentic domain storytelling copy (0 prompt leaks / hints).
5. QUALITY GATE CHECK     — Validate against WCAG AA, 0 inline styles, overflow containment, & anti-slop rules.
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
