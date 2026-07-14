---
name: layout-composition
description: |
  Composes page layouts using grid systems and atomic design principles, handling spacing rhythm, visual hierarchy, responsive reflow, and structural validation.
triggers:
  - "layout composition"
  - "compose layout"
  - "page layout"
  - "grid layout"
  - "design layout"
---

# layout-composition

## Purpose

Compose coherent page layouts by combining grid systems with atomic design
methodology. Ensures content blocks are arranged with proper spacing rhythm,
clear visual hierarchy, logical responsive reflow behavior, and compliance
with ProdigeUI's structural design rules.

## When to Use

- Designing a new page layout from content requirements
- Restructuring an existing layout for better hierarchy or flow
- Combining multiple components into a cohesive page section
- Applying consistent spacing rhythm across a multi-section page
- Validating that a layout follows grid and structure rules

## Workflow Steps

### Step 1 — Identify Content Blocks

1. List all content elements the page must contain.
2. Classify each block using atomic design taxonomy:
   - Atoms: buttons, inputs, labels, icons
   - Molecules: search bar, card header, form group
   - Organisms: navigation bar, hero section, card grid, footer
   - Templates: full page structure with placeholder content
3. Determine the reading order and information hierarchy.
4. Identify primary action vs supporting content.
5. Note which blocks are fixed/persistent vs scrollable.

### Step 2 — Choose Grid Configuration

1. Select grid type based on content:
   - 12-column grid: flexible general-purpose layouts
   - Content + sidebar: 8+4 or 9+3 column split
   - Symmetric: 6+6 for comparison or split layouts
   - Single column: content-focused (articles, forms)
2. Define max container width (typically 1280px or 1440px).
3. Set column gap using spacing tokens (16px, 24px, or 32px).
4. Set row gap independently if content blocks need vertical breathing room.
5. Document grid specifications referencing token values.

### Step 3 — Apply Spacing Rhythm

1. Use the ProdigeUI spacing scale for all margins and padding.
2. Apply vertical rhythm using a consistent base unit (8px grid).
3. Section spacing: use larger increments (48px, 64px, 80px) between major sections.
4. Component spacing: use medium increments (16px, 24px) within sections.
5. Element spacing: use small increments (4px, 8px, 12px) within components.
6. Maintain consistent spacing ratios: internal < between-elements < between-sections.
7. Never use arbitrary values — every spacing must resolve to a token.

### Step 4 — Establish Visual Hierarchy

1. Apply size contrast: primary content is visually largest.
2. Apply weight contrast: headings and CTAs are bolder.
3. Apply color contrast: active elements use primary/accent colors.
4. Apply whitespace: important elements have more surrounding space.
5. Group related content with proximity and enclosure.
6. Use alignment to create visual flow paths (F-pattern, Z-pattern).
7. Verify hierarchy with the squint test: blur your eyes and check emphasis order.

### Step 5 — Handle Responsive Reflow

1. Define reflow behavior for each content block at each breakpoint.
2. Common reflow patterns:
   - Multi-column to stacked: cards, feature grids
   - Sidebar to collapsed: navigation, filters
   - Horizontal to vertical: toolbars, button groups
   - Grid reduction: 4-col -> 2-col -> 1-col
3. Maintain hierarchy order during reflow (primary content first in source).
4. Specify which elements change size, hide, or transform at breakpoints.
5. Verify no content is lost or inaccessible after reflow.

### Step 6 — Validate Against Structure Rules

1. Check layout against `design-rules/structure-rules.md`:
   - No orphaned headings (heading must precede content)
   - No floating actions (CTAs must be near related content)
   - Consistent alignment axes throughout the page
   - Footer content is reachable without excessive scrolling
2. Verify spacing tokens are used consistently (no mixed systems).
3. Check that grid tracks are respected (no off-grid elements).
4. Validate responsive reflow preserves content accessibility.
5. Run quality-check skill for final structural validation.
6. Report: grid config, spacing tokens used, hierarchy analysis, any violations.
