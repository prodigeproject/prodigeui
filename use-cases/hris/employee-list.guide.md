# HRIS Employee Directory — Sub-Guide

> Parent: [use-cases/hris/guide.md](./guide.md)

## Recommended Components
- **Table** — Employee list view with sortable columns
- **Card** — Employee grid view cards
- **SearchBar** — Name/department search with filters
- **Badge** — Department, status, and role indicators
- **Button** — View profile, grid/list toggle
- **Modal** — Employee quick-view overlay

## Tokens
- `typography.body.md` — employee names
- `typography.body.sm` — role, department, contact info
- `color.surface.primary` — card/row background
- `color.surface.secondary` — alternate row striping
- `color.primary` — active filter indicators
- `space.md` — table row padding and card gaps
- `radius.lg` — employee card corners

## Motion Presets
- `state-transition` — row/card hover highlight
- `enter-exit` — quick-view modal open/close
- `micro-interaction` — toggle between grid and list views

## Patterns
- Default to list view for density; offer grid toggle for visual browsing
- Columns: avatar, name, title, department, email, status
- Sortable by name, department, and hire date
- Filter panel: department dropdown, status toggle, location select
- Search by name, email, or employee ID with debounced input
- Clicking a row opens quick-view modal with full contact details
- Pagination: 25 rows per page default; show total count
- Export button for CSV/Excel download of filtered results
