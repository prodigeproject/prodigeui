# ProdigeUI — Claude Code Configuration

> This file configures Claude Code to use ProdigeUI's design tokens, rules, components, and skills when generating UI/UX output. It is the adapted equivalent of `AGENTS.md` for Claude Code's conventions.

## Purpose

ProdigeUI is a **portable UI/UX knowledge system** that equips you (AI agent) with:

- Measurable design rules backed by theory and research
- A layered token system as the single source of visual truth
- Enterprise-grade component specifications (states, accessibility, variants)
- Accessible and purposeful motion presets
- Professional prompt templates per use-case
- A quality gate ensuring output is free of "AI slop"

Use these artifacts as the foundation for every visual decision.

## How It Works

ProdigeUI's knowledge authority lives within `prodigeui/`; executable integrity and artifact
gates live in the sibling root `scripts/` and `package.json`. When a user asks for UI/UX work,
you:

1. Read `craft/model-robust-generation.md` before design or implementation.
2. Read `canonical/accepted-quality.profile.json`, select the applicable profile from product
   intent, and never use benchmark HTML as generation context.
3. Execute `canonical/generation.contract.json#oneBuildPreflight` before emitting code; the
   first implementation is the acceptance candidate, not a knowingly broken draft.
4. Identify the use-case from the brief → reference `use-cases/<category>/guide.md`.
5. Find and run `skills/prodige-ui-end-to-end/SKILL.md`; use `skills/AGENTS.md` as registry.
6. Derive a project-local theme and token boundary, then compose from component specifications.
7. Add motion from canonical tokens/presets with the Three Dials on a `0.0–1.0` scale.
8. Complete manual quality evidence and execute
   `npm run quality-gate -- <artifact.html> --review <manual-review.json>`.
9. Deliver only when the artifact report is `overall: pass`.

## Folder Structure

| Folder | Purpose | When to Use |
|--------|---------|-------------|
| `tokens/` | Design tokens (primitive, semantic, component) | Every visual value decision |
| `themes/` | Ready-to-use themes (light, dark, brand) | Choosing a visual identity |
| `motion/` | Animation presets + motion principles | Adding transitions/animations |
| `components/` | Component specs organized by atomic design | Building interfaces |
| `assets/` | Icons, fonts, illustrations + license metadata | Selecting visual assets |
| `design-system/` | Cohesion document + entry point | Understanding artifact relationships |
| `design-rules/` | Typography, color, layout, structure rules | Validating design decisions |
| `prompt-templates/` | Prompt templates per use-case | Generating UI/UX artifacts |
| `use-cases/` | Per-application-category guides | Referencing use-case patterns |
| `quality-gate/` | Quality criteria + anti-AI-slop checklist | Final output evaluation |
| `skills/` | Structured capability units | Running workflows |
| `hooks/` | Automation and plugins | Automatic triggers |
| `installers/` | Installer and adapters per tool | Installing to agentic tools |
| `research/` | Research notes and synthesis | Tracing design decision origins |

## Skills Available

Skills are structured capability units. To find and run a skill:

1. Open `skills/AGENTS.md` — the Skill Registry listing all skills with triggers
2. Match your current need against the available triggers
3. Open the skill folder and follow the `SKILL.md` instructions
4. Validate output with the Quality Gate before finalizing

Current skills are listed in `skills/AGENTS.md`.

## Key Rules

- **Token-first**: Repeated visual roles use semantic variables. Concrete values are allowed
  at the token-definition boundary and for one-off generated artwork, not repeated directly
  across component declarations.
- **Rule-backed**: Every design decision must be supported by measurable Design Rules (`design-rules/`).
- **Accessible**: WCAG 2.1 AA is the minimum standard (4.5:1 contrast for normal text, 3:1 for large text, keyboard navigation, ARIA roles).
- **Anti-AI-slop**: Validate with the Quality Gate (`quality-gate/`) before delivering any output.
- **Motion from authority**: Start from motion tokens/presets; a custom animation is allowed
  only when no preset fits, its purpose is documented, and canonical duration/reduced-motion
  constraints still pass.
- **Theme-driven**: Apply themes from `themes/` for visual identity. Components render from the active theme only.
- **Traceable**: Design decisions can be traced to research sources in `research/`.

## Quick Reference

| Need | Go To | Key File |
|------|-------|----------|
| Color, spacing, radius values | `tokens/` | `semantic.tokens.json` |
| Light/dark visual identity | `themes/` | `light.theme.json`, `dark.theme.json` |
| Animation timing and easing | `motion/` | `motion.tokens.json`, `presets/` |
| Button, Card, Modal specs | `components/` | `components.manifest.json` |
| Typography rules | `design-rules/` | `typography.rules.json` |
| Color contrast rules | `design-rules/` | `color.rules.json` |
| Layout and grid rules | `design-rules/` | `layout.rules.json` |
| Prompt for landing page | `prompt-templates/` | Per use-case template |
| Quality validation | `quality-gate/` | Checklist and criteria |
| Full skill list | `skills/` | `AGENTS.md` |
| Artifact manifest | root | `manifest.json` |

## Token Hierarchy

The token system has three layers. Always resolve in this order:

1. **Primitive** (`tokens/primitive.tokens.json`) — raw values (hex colors, pixel sizes, font stacks)
2. **Semantic** (`tokens/semantic.tokens.json`) — role-based names referencing primitives (e.g., `color.surface.primary`)
3. **Component** (`tokens/component.tokens.json`) — component-specific tokens referencing semantics (e.g., `button.bg`)

When writing CSS or style output, use semantic or component token names. Never reference primitives directly in component code.

## Important Constraints

1. **Never repeat raw visual values in component declarations** — declare project-specific
   values once as tokens, then consume semantic variables.
2. **Never skip the Quality Gate** — every deliverable must pass before being presented to the user.
3. **Respect reduce-motion** — when the user has `prefers-reduced-motion`, disable non-essential animations and limit essential ones to 100ms maximum.
4. **Follow atomic design** — compose atoms into molecules, molecules into organisms.
5. **One skill at a time** — read the SKILL.md, follow its steps, reference its linked artifacts.
6. **Accessibility first** — ensure all interactive components have ARIA roles, keyboard operability, and visible focus indicators.
7. **Theme-complete** — every component must render correctly under any theme in the catalog.
