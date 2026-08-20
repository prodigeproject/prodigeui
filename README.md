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

## Official Benchmark Suite (FlowAI & NOVA)

To evaluate real-world performance under **Creative Mode** (vague brief, zero design specifics given), we benchmarked AI generation against two official test suites: **FlowAI** (B2B Engineering SaaS) and **NOVA** (Creative Studio Portfolio).

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

### Benchmark 2: NOVA (Creative Studio Portfolio)
> **Brief:** *"Build a landing page for a creative studio called NOVA."*

| Metric / Dimension | Standard Raw AI Output (Without ProdigeUI) | With ProdigeUI (Creative Mode Engine) |
| :--- | :--- | :--- |
| **Hero Subject** | Text floating over plain radial gradient, no focal subject | **Incandescent Vermilion `#ff4d15`**, Three.js WebGL nova core, & 9rem display type |
| **Gallery Craft** | Static 3-column card grid with flat color fills | **GSAP ScrollTrigger Horizontal Pin-Pan Gallery** with real media |
| **Typography** | Standard Inter font everywhere, flat scale | Bricolage Grotesque display face with tight tracking (`-0.04em`) |
| **Accessibility (a11y)** | 0% ARIA attributes, non-semantic `<div>` soup | 100% WCAG 2.1 AA, semantic HTML5 tags, reduced-motion fallbacks |
| **Anti-AI-Slop Score** | 3.2 / 10 (Fails anti-slop gate) | **9.8 / 10** 🚀 (Passes negative slop gate + craft rubric) |

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

