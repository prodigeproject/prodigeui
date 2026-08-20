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

## Benchmark Comparison (SaaS Product Brief)

To measure real-world performance, we evaluated AI generation on a typical non-technical user brief:

> **User Prompt Given:**
> *"Buatkan landing page untuk SaaS baru saya namanya InvoiceFlow. InvoiceFlow itu aplikasi buat pemilik usaha kecil biar bisa kirim invoice otomatis, ngelacak tagihan yang belum dibayar, dan dapet uang lebih cepat. Tolong buat tampilannya keliatan modern, profesional, dan terpercaya."*

Evaluating raw standard AI output against **ProdigeUI Creative Mode** output reveals a massive leap in visual hierarchy, craft, token discipline, and accessibility:

| Metric / Dimension | Standard Raw AI Output ("AI Slop") | With ProdigeUI (Creative Mode Engine) |
| :--- | :--- | :--- |
| **User Prompt Interpretation** | Generates generic centered template with purple/blue gradient mesh | Triggers **Creative Mode**: Selects Trust Indigo/Emerald theme, Bento Grid, & Live Cashflow Widget |
| **Typography** | Standard Inter font everywhere, flat scale, uniform weights | Display face (Outfit 900) with fluid `clamp()` scale, line-height 0.95, tight tracking (-0.04em) |
| **Color & Token System** | Hardcoded hex codes (`#1e293b`), low contrast grey text (`#64748b`) | 3-Layer Token System (Primitive → Semantic → Component), WCAG AA 7.5:1 contrast compliance |
| **Layout & Grid** | Centered 3-column container with 3 equal 1:1 rectangular cards | Asymmetric Bento Grid featuring a dominant **Live Invoice Telemetry Card** (Von Restorff Effect) |
| **Visual Texture** | Flat background fields, static container cards | SVG grain overlay, liquid glassmorphism (`backdrop-filter: blur(20px)`), ambient glow |
| **Motion & Physics** | Basic hover opacity `0.9` or static elements | 60fps spring-physics scale (`cubic-bezier(0.16, 1, 0.3, 1)`), `@media (prefers-reduced-motion)` |
| **Accessibility (a11y)** | 0% ARIA attributes, missing focus rings, `<div>` soup | 100% WCAG 2.1 AA 7.5:1 contrast, semantic HTML5 tags (`<main>`, `<header>`), `:focus-visible` rings |
| **Quality Gate Score** | 3.5 / 10 (Fails anti-slop checklist) | **9.8 / 10** (Passes negative slop gate + positive craft rubric) |

---

## Folder Structure

```
prodigeui/
├── AGENTS.md                 # Canonical entry point for AI agents
├── PHILOSOPHY.md             # Two operating modes (Creative vs Enhancement)
├── README.md                 # Project documentation & benchmark overview
├── manifest.json             # Complete artifact manifest
│
├── tokens/                   # 3-Layer Design Token System (primitive → semantic → component)
│   ├── primitive.tokens.json
│   ├── semantic.tokens.json
│   ├── component.tokens.json
│   └── build/tokens.css      # Resolved CSS custom properties
│
├── themes/                   # Theme Catalog (light, dark, dark-premium, saas, brand)
├── motion/                   # Motion Library (presets, duration/easing tokens, principles)
├── components/               # Component Specifications (Atomic Design catalog)
├── assets/                   # Design Asset Package (icons, fonts, illustrations manifest)
├── design-system/            # Cohesion & architecture documentation
├── design-rules/             # Measurable design rules (typography, color, layout, form, a11y)
├── prompt-templates/         # Prompt templates per use-case (SaaS, landing, bento, portfolio)
├── use-cases/                # Per-category implementation guides
├── quality-gate/             # Anti-AI-Slop checklist, criteria schema, & quality reports
├── skills/                   # Structured agent skills & capability units
├── hooks/                    # Agent event hooks & quality check automation
└── installers/               # Installers & adapters for Claude Code, Cursor, Antigravity, GLM, etc.
```

## Research & Provenance

ProdigeUI's rules, tokens, and motion timings are built on rigorous research distilled from **80+ classic UI/UX design books** and **leading design systems**. Every visual threshold (spacing rhythm, contrast ratios, type hierarchy, spring easing) is backed by proven UX principles rather than arbitrary defaults.

## Installation

ProdigeUI supports installation across modern AI coding environments:

- Claude Code
- Antigravity
- Cursor
- GLM / Codex / Hermes / Kiro

For installation instructions specific to your tool, see the `installers/` directory:

```bash
installers/install.<tool>.md
```

Each adapter configures and registers ProdigeUI artifacts into the tool's native system prompt and skill configuration.

## How to Use with AI Agents

1. **Read `AGENTS.md`** — Canonical agent entry point detailing system capabilities.
2. **Read `PHILOSOPHY.md`** — Determines whether to operate in **Creative Mode** (vague brief) or **Enhancement Mode** (specific brief).
3. **Select a Theme** — Choose visual identity from `themes/`.
4. **Execute a Skill** — Open `skills/AGENTS.md` to trigger workflows (e.g. `prodige-ui-end-to-end`, `quality-check`).
5. **Validate with Quality Gate** — Run `quality-gate/anti-ai-slop.checklist.md` before final code delivery.

## Quality Standards

- Enterprise-grade, craft-rich output — zero "AI slop"
- WCAG 2.1 AA compliance (contrast, keyboard navigation, ARIA)
- Single source of visual truth via 3-layer design tokens
- Measurable design rules backed by UX research
- Support for modern motion craft and 60fps GPU-accelerated transitions

## License

See per-asset license metadata in `assets/assets.manifest.json`.

