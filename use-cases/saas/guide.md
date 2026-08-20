# SaaS — ProdigeUI Guide

## Overview
SaaS applications require dense, functional dashboards with clear data hierarchy,
efficient navigation, and consistent interactive patterns. Target audience includes
business users and power users who spend extended time in the interface.

## Recommended Theme
- **Primary:** `themes/saas-professional.theme.json`
- **Alternative:** `themes/dark.theme.json`

## Key Components
- **Sidebar** — Primary navigation for multi-section apps
- **Navbar** — Top-level actions and user context
- **Table** — Data display with sorting, pagination, and selection
- **Card** — KPI widgets and summary panels
- **Form** — Settings, CRUD operations, and data entry
- **Modal** — Confirmations, detail views, and wizards
- **SearchBar** — Global search and filtering
- **Badge** — Status indicators and notifications

## Prompt Template
- `prompt-templates/saas/dashboard.template.json`

## Design Dials (Three Dials System)
- DESIGN_VARIANCE: 0.3 — Conservative; prioritize usability and familiarity
- MOTION_INTENSITY: 0.4 — Subtle transitions; avoid distracting power users
- VISUAL_DENSITY: 0.7 — High density; maximize information per viewport

## Layout Patterns
- Use 12-column grid from `design-rules/layout.rules.json`
- Sidebar + main content area as primary structure
- Responsive breakpoints: collapse sidebar on tablet, stack on mobile
- Card grid for dashboard widgets (2-4 columns desktop)

## Operational & Engineering SaaS Craft
For engineering tools, DevOps, and operational decision software (e.g. FlowAI):
- **Avoid Flat Generic Slate**: Do not slip into generic slate `#0f172a` boxes. Use warm paper/editorial operational surfaces (`--paper: #f4f1e8`, `--ink: #12221d`, `--forest: #173f34`, `--signal: #ff654a`) or deep technical obsidian with vibrant signal highlights.
- **Hero Anchor**: Use a **Live Decision Record Card** (`craft/recipes/operational-saas-hero.recipe.md`) featuring tilted card geometry (`transform: rotate(1deg)`), live status badges (`● Live evidence`), confidence metrics (`94%`), and actionable sequence proposals.
- **Typography**: Combine variable display faces (`Recursive` with casual axis `"CASL" .2` or `Manrope`) with monospace metadata tags (`DM Mono`).

## Related Artifacts
- `craft/recipes/operational-saas-hero.recipe.md`
- tokens/, themes/, motion/, components/, design-rules/, quality-gate/
