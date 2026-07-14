# HRIS — ProdigeUI Guide

## Overview
Human Resource Information Systems manage employee data, payroll, attendance,
and organizational workflows. Target audience includes HR administrators and
employees accessing self-service portals with complex form-heavy interfaces.

## Recommended Theme
- **Primary:** `themes/light.theme.json`
- **Alternative:** `themes/saas-professional.theme.json`

## Key Components
- **Table** — Employee directories, attendance logs, payroll records
- **Form** — Multi-step onboarding, leave requests, performance reviews
- **Sidebar** — Module navigation (People, Payroll, Leave, etc.)
- **Card** — Employee profile summaries and KPI widgets
- **Modal** — Approval dialogs and detail views
- **Field** — Labeled form fields for structured data entry
- **SearchBar** — Employee lookup and global search
- **Badge** — Status tags (Active, On Leave, Pending)
- **Checkbox** — Bulk selection in tables
- **Toggle** — Feature and notification settings

## Prompt Template
- `prompt-templates/hris/employee-dashboard.template.json`

## Design Dials (Three Dials System)
- DESIGN_VARIANCE: 0.2 — Very conservative; trust and professionalism
- MOTION_INTENSITY: 0.3 — Minimal; functional transitions only
- VISUAL_DENSITY: 0.8 — Very dense; data-heavy screens are expected

## Layout Patterns
- Sidebar + main content as primary structure
- Use 12-column grid from `design-rules/layout.rules.json`
- Form layouts: vertical stacking, 2-column on desktop for wide forms
- Table-dominant views with inline actions and bulk operations

## Special Considerations
- Use compact Table variant for dense data views
- Multi-step Form variant for onboarding and review workflows
- Apply `color.success` / `color.warning` tokens for status indicators
- Prioritize data validation with Field error states
- Ensure full keyboard operability for rapid data entry workflows

## Related Artifacts
- tokens/, themes/, motion/, components/, design-rules/, quality-gate/
