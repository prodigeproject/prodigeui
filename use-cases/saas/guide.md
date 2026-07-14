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

## Special Considerations
- Prioritize keyboard navigation for power users (Tab, Shift+Tab flows)
- Use `motion/presets/` enter/exit for panel transitions only
- Table pagination and infinite scroll patterns for large datasets
- Prefer outlined Card variant for dashboard widget containers

## Related Artifacts
- tokens/, themes/, motion/, components/, design-rules/, quality-gate/
