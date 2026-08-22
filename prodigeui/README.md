# ProdigeUI

**A Portable UI/UX Knowledge System for AI Coding Agents**

ProdigeUI is a comprehensive UI/UX knowledge kit that equips AI coding agents with design rules, tokens, intent routing, components, motion guidance, assets, and structured workflows — enabling agents to design and implement product-specific, accessible, and "AI slop"-free user interfaces.

## Key Features

- **Semantic Design Tokens** — A three-layer token system (primitive → semantic → component) serving as the single source of truth for all visual decisions.
- **Intent-Driven Art Direction** — Product, target market, user job, evidence, and media are read before layout and token synthesis; themes are derived, not reused as hidden presets.
- **Motion Presets** — Parameterized animation/transition presets with reduce-motion support and documented motion principles.
- **Component Specs** — Agent-consumable Atomic Design specification catalog with complete
  state, variant, accessibility, and token-binding metadata; it is not an importable framework package.
- **Design Rules** — Measurable, verifiable rules for typography, color, layout, structure, forms, responsive behavior, data-visualization, and advanced methodology, backed by research and design theory.
- **Quality Gate** — Objective quality criteria and an anti-AI-slop checklist to ensure expert-level output.
- **Prompt Templates** — Professional prompt templates per use-case (SaaS, landing page, ecommerce, portfolio, HRIS, agentic app) that reference the token system, rules, and components.

## Official Benchmark Suite (FlowAI, NOVA & FOLD)

To evaluate real-world performance under **Creative Mode** (vague brief, zero design specifics given), we benchmark AI generation against three reference suites: **FlowAI** (B2B Engineering SaaS), **NOVA** (Creative Studio Portfolio), and **FOLD** (fashion product launch).

**Active promotion baseline:** ProdigeUI **v3.0.8** / commit `2ab4e19`. Later tuning candidates remain historical comparisons; they are not promoted as the default because the v3.0.8 output has the calmer, more coherent visual balance. The baseline is a quality contract, not a NOVA visual template; each product benchmark keeps an independent art direction.

### Benchmark 1: FlowAI (B2B Engineering SaaS)
> **Brief:** *"Build a single-page landing for FlowAI — an AI project management tool for engineering teams."*

| Metric / Dimension | Standard Raw AI Output (Without ProdigeUI) | With ProdigeUI (Creative Mode Engine) |
| :--- | :--- | :--- |
| **Visual Identity** | Standard generic dark slate `#0f172a`, purple `#6366f1` accent | Concept-driven dark-tech obsidian `#0b0d10` + lime `#b8ff3a` accent |
| **Typography** | Default Arial / Inter flat font scale | Space Grotesk + Inter pairing at fluid `clamp()` display scale |
| **Grid Architecture** | 3 equal 1:1 rectangular cards, no visual hierarchy | **Asymmetric Bento Grid** with dominant hero telemetry cell |
| **Motion & Physics** | Static / choppy hover opacity `0.9` | **60fps GSAP ScrollTrigger**, particle network canvas, & spring physics |
| **WCAG 2.1 AA Contrast** | ❌ **2.8:1 (FAIL)** — Unreadable text & low contrast comments | ✅ **7.5:1 (PASS)** — Verified contrast & full keyboard `:focus-visible` rings |
| **Anti-AI-Slop Score** | 3.5 / 10 (Fails anti-slop gate) | **9.8 / 10** 🚀 (Passes negative slop gate + craft rubric) |

---

### Benchmark 2: NOVA (Creative Studio Portfolio) — selected v3.0.8 baseline
> **Brief:** *"Build a landing page for a creative studio called NOVA."*

| Metric / Dimension | Standard Raw AI Output (Without ProdigeUI) | With ProdigeUI (Creative Mode Engine) |
| :--- | :--- | :--- |
| **Hero Subject** | Generic type-led field with no clear material focal point | One dominant constructed monolith with a paper-release field and restrained coral/lilac surfaces |
| **Composition** | Equal cards and generic section rhythm | Controlled asymmetry, varied studies, and a calmer editorial sequence |
| **Typography** | Standard sans-serif hierarchy | Deliberate display/body/metadata roles with clearer pacing |
| **Accessibility (a11y)** | Baseline checks vary by raw implementation | **26 pass / 0 fail** automatic checks; semantic structure, contrast, focus, and reduced-motion fallbacks |
| **Manual visual review** | Not used as the selected baseline | **92 / 100** directional review; selected for balance and calm |

`2ab4e19` / v3.0.8 is the selected baseline because it preserves one strong proposition, one readable focal object, and a restrained section rhythm. This is a visual-quality benchmark, not a conversion or performance claim.

See the [NOVA v3.0.8 benchmark](../benchmark/nova-fresh-4way-20260822/index.html) and [baseline decision](../benchmark/nova-fresh-4way-20260822/BASELINE.md).

---

### Benchmark 3: FOLD (Fashion Product Launch)
> **Brief:** *"Build a landing page for an independent clothing label called FOLD. The label is launching a small linen wardrobe for people who want fewer, better layers. Show the new drop, explain the material point of view, and invite visitors to view the collection."*

The two lanes use the same brief, copy, product facts, actions, and local generated fashion media. The intended difference is whether the implementation follows the selected ProdigeUI v3.0.8 quality baseline plus intent/media routing; the fashion lane deliberately keeps its own commerce/editorial art direction instead of copying NOVA's surface or geometry.

| Metric / Dimension | Without ProdigeUI | With v3.0.8 principles |
| :--- | :--- | :--- |
| **Visual identity** | Generic white/gray ecommerce surface with a purple accent | Mineral/moss/tobacco fashion register derived from warm-climate linen and the shared media |
| **Fashion proof** | Same media, but used inside a generic split hero and card grid | Worn lookbook hero, product still-life, construction detail, and material chapter |
| **Merchandising UX** | Three equal cards with limited product decision context | Category cues, collection count, filters, product name/material/color/size/price, and `View piece` path |
| **Automatic quality gate** | **24 pass / 2 fail / 0 flag / 20 not evaluated**; both failures are visual-geometry criteria | **26 pass / 0 fail / 0 flag / 20 not evaluated** |
| **Manual visual review** | **60 / 100** directional score | **94 / 100** directional score |

The previous fashion artifact did not meet this bar and was replaced. The new result supports the v3.0.8 claim at the level of transferable intent reading, product proof, merchandising hierarchy, and visual craft: the system produces a fashion storefront rather than a generic landing page, without forcing fashion to look like NOVA. It does not claim higher sales, conversion, or user preference without a separate user study.

See the [FOLD benchmark viewer](../benchmark/fashion-v308-vs-raw-20260822/index.html) and [full comparison report](../benchmark/fashion-v308-vs-raw-20260822/REPORT.md).

---

## Folder Structure

```
prodigeui/
├── AGENTS.md                 # Canonical entry point for AI agents
├── README.md                 # This document
├── manifest.json             # Artifact manifest (list & type of every artifact)
│
├── tokens/                   # Token_System (primitive → semantic → component)
│   ├── primitive.tokens.json
│   ├── semantic.tokens.json
│   ├── component.tokens.json
│   ├── tokens.schema.json
│   └── build/tokens.css      # Derived CSS custom properties
│
├── themes/                   # Theme_Catalog (light, dark, brand)
│   ├── _default.theme.json
│   ├── light.theme.json
│   ├── dark.theme.json
│   └── theme.schema.json
│
├── motion/                   # Motion_Library (presets + principles)
│   ├── motion.tokens.json
│   ├── principles.md
│   └── presets/              # enter-exit, state-transition, hover-focus, scroll-based
│
├── components/               # Component_Library (atomic design)
│   ├── components.manifest.json
│   ├── composition-guidelines.md
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
│
├── assets/                   # Design_Asset_Package (icons, fonts, illustrations)
│   ├── assets.manifest.json
│   ├── icons/
│   ├── fonts/
│   └── illustrations/
│
├── design-system/            # Design system cohesion documentation
│   ├── design-system.md
│   └── entry-point.md
│
├── design-rules/             # Measurable design rules
│   ├── typography.rules.json
│   ├── color.rules.json
│   ├── layout.rules.json
│   ├── structure.rules.json
│   ├── form.rules.json
│   ├── responsive.rules.json
│   ├── data-visualization.rules.json
│   ├── advanced-methodology.rules.json
│   └── design-rules.md
│
├── prompt-templates/         # Prompt templates per use-case
│   ├── template.schema.json
│   ├── saas/
│   ├── landing/
│   ├── ecommerce/
│   ├── portfolio/
│   ├── hris/
│   └── agentic-app/
│
├── use-cases/                # Per-use-case guides
│
├── quality-gate/             # Quality criteria & anti-AI-slop checklist
│   ├── criteria.json
│   ├── anti-ai-slop.checklist.md
│   └── report.schema.json
│
├── skills/                   # Skill_Registry (agent capabilities)
│   └── AGENTS.md
│
├── hooks/                    # Documented hooks & plugins
│
├── installers/               # Installer & adapters per Agentic_Tool
│   └── adapters/
│
└── research/                 # Research_Log & Research_Notes
    ├── research-log.json
    └── notes/
```

## Installation

ProdigeUI supports installation on the following AI coding tools:

- Claude Code
- GLM
- Codex
- Antigravity
- Hermes
- Cursor

For installation instructions specific to your tool, see the `installers/` directory:

```
installers/install.<tool>.md
```

Each installer copies and registers ProdigeUI artifacts into the tool's documented configuration location. See the per-tool instructions for details.

## How to Use with AI Agents

1. **Read `AGENTS.md`** — This is the canonical entry point. It describes the system purpose, folder structure, and how to find and run skills.
2. **Identify the use-case** — Check `use-cases/` for guidance on your specific application type.
3. **Choose a theme** — Select from `themes/` for the visual identity.
4. **Run a skill** — Open `skills/AGENTS.md` to find the right workflow for your task.
5. **Reference tokens & rules** — All visual decisions must come from `tokens/` and follow `design-rules/`.
6. **Compose components** — Build interfaces using specs from `components/` following atomic design.
7. **Add motion** — Apply animation presets from `motion/` following documented principles.
8. **Validate with Quality Gate** — Run the quality gate from `quality-gate/` before finalizing output.

## Quality Standards

- Enterprise-grade output, not "AI slop"
- WCAG 2.1 AA compliance (contrast, keyboard navigation, ARIA)
- All visual values sourced from Design Tokens
- Measurable, verifiable design rules
- Research notes traceable to original sources (repos & books)

## Artifact Manifest

See `manifest.json` for a complete listing of all artifacts, their types, and current status.

## License

See per-asset license metadata in `assets/assets.manifest.json`.
