# ProdigeUI — Entry Point Guide

How to use ProdigeUI artifacts when starting a new project.
Follow these steps in order; each layer builds on the previous one.

## Step 1: Start with Token_System

Choose and customize primitive tokens as your design foundation.

- Review `tokens/primitive.tokens.json` — base palette, spacing scale, type scale, radius, shadow, border, z-index, motion.
- Adjust primitives to match your brand. Semantic tokens (`tokens/semantic.tokens.json`) map roles to primitives automatically.
- Component tokens (`tokens/component.tokens.json`) inherit from semantics.
- Run token validation to confirm no dangling references or circular dependencies.

**Artifact:** `tokens/` | **Depends on:** nothing (root of the system)

## Step 2: Select a Theme

Pick a visual identity from the Theme_Catalog or create a custom one.

- Choose `themes/light.theme.json`, `themes/dark.theme.json`, or a brand theme.
- Each theme overrides primitive values while keeping semantic names intact.
- Verify contrast ratios meet WCAG 2.1 AA (4.5:1 normal text, 3:1 large text).
- For a new theme, follow `themes/creating-a-theme.md`.

**Artifact:** `themes/` | **Depends on:** Token_System (Step 1)

## Step 3: Configure Motion

Select a motion personality archetype from the Motion_Library.

- Review `motion/principles.md` for purpose, hierarchy, and timing philosophy.
- Choose presets from `motion/presets/` (enter-exit, state-transition, hover-focus, scroll-based).
- Adjust `motion/motion.tokens.json` to tune global timing without editing individual presets.
- Reduce-motion variants are built in; no extra configuration required.

**Artifact:** `motion/` | **Depends on:** Token_System (Step 1)

## Step 4: Select Assets

Pick icons, fonts, and illustrations from the Design_Asset_Package.

- Browse `assets/assets.manifest.json` for available assets with license metadata.
- Reference assets by unique `id` in components and prompt templates.
- Confirm license compatibility (`commercialUse` field) for your use case.

**Artifact:** `assets/` | **Depends on:** consumed by Components (Step 5)

## Step 5: Compose Components

Build interfaces using the Component_Library following atomic design principles.

- Atoms (Button, Input, Icon, Text) → Molecules (Field, Card, SearchBar) → Organisms (Form, Navbar, Modal).
- Follow `components/composition-guidelines.md` for composition patterns.
- Every component pulls values exclusively from Design_Tokens and the active Theme.
- Verify accessibility: ARIA roles, keyboard operability, visible focus indicators.

**Artifact:** `components/` | **Depends on:** Steps 1-4

## Step 6: Apply Design Rules

Validate your composition against measurable rules.

- `design-rules/typography.rules.json` — scale ratio, line-height range, allowed weights.
- `design-rules/color.rules.json` — color roles, accent usage, contrast thresholds.
- `design-rules/layout.rules.json` — grid columns, breakpoints, spacing base unit.
- `design-rules/structure.rules.json` — visual hierarchy, content grouping, navigation.
- Fix any rule violations before proceeding to the Quality Gate.

**Artifact:** `design-rules/` | **Depends on:** Token_System (Step 1), Components (Step 5)

## Step 7: Validate with Quality Gate

Run the final pass/fail check to confirm enterprise-grade output.

- Execute the Quality_Gate skill or hook (see `quality-gate/` and `hooks/`).
- Evaluates: Design_Rules compliance, token usage (no raw values), theme consistency, WCAG 2.1 AA.
- Result is "pass" only when ALL criteria pass; failures include criterion ID, issue, and fix.
- Review `quality-gate/anti-ai-slop.checklist.md` for common generic-output pitfalls.

**Artifact:** `quality-gate/` | **Depends on:** all previous steps

## Summary Flow

```
Token_System → Theme → Motion → Assets → Components → Design Rules → Quality Gate
     1           2        3        4          5             6              7
```

Each step is additive. Iterate on any layer and re-run the Quality Gate to verify cohesion.
