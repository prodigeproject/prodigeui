# ProdigeUI

**A Portable UI/UX Knowledge System for AI Coding Agents**

ProdigeUI is a comprehensive UI/UX knowledge kit that equips AI coding agents with design rules, tokens, themes, components, motion presets, assets, and structured workflows — enabling agents to design and implement enterprise-grade, interactive, and "AI slop"-free user interfaces.

## Key Features

- **Semantic Design Tokens** — A three-layer token system (primitive → semantic → component) serving as the single source of truth for all visual decisions.
- **Theme Catalog** — Ready-to-use themes (light, dark, brand) with WCAG AA contrast compliance.
- **Motion Presets** — Parameterized animation/transition presets with reduce-motion support and documented motion principles.
- **Component Specs** — Agent-consumable Atomic Design specification catalog with complete
  state, variant, accessibility, and token-binding metadata; it is not an importable framework package.
- **Design Rules** — Measurable, verifiable rules for typography, color, layout, structure, forms, responsive behavior, data-visualization, and advanced methodology, backed by research and design theory.
- **Quality Gate** — Objective quality criteria and an anti-AI-slop checklist to ensure expert-level output.
- **Prompt Templates** — Professional prompt templates per use-case (SaaS, landing page, ecommerce, portfolio, HRIS, agentic app) that reference the token system, rules, and components.

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
