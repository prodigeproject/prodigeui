---
name: responsive-design
description: |
  Guides creation of responsive layouts across breakpoints, ensuring content adapts fluidly from mobile to desktop with proper grid, typography, and touch-target handling.
triggers:
  - "responsive design"
  - "responsive layout"
  - "breakpoints"
  - "mobile layout"
  - "adaptive grid"
---

# responsive-design

## Purpose

Guide the creation of responsive layouts that adapt gracefully across all
viewport sizes. Ensures content hierarchy is preserved, grid configurations
are appropriate per breakpoint, fluid typography scales correctly, and
touch targets meet minimum size requirements on mobile devices.

## When to Use

- Designing a new page layout that must work across mobile, tablet, and desktop
- Adapting an existing desktop design down to smaller screens
- Defining a breakpoint strategy for a new project
- Verifying touch-target sizing and tap-area spacing on mobile
- Configuring fluid typography that scales between breakpoints

## Workflow Steps

### Step 1 — Analyze Content Needs

1. Inventory all content blocks on the page (navigation, hero, cards, forms, etc.).
2. Rank content by priority — what must be visible first on smallest screens.
3. Identify content that can be hidden, collapsed, or deferred on mobile.
4. Note interactive elements that require minimum touch-target sizes.
5. Determine reading flow: single-column mobile vs multi-column desktop.

### Step 2 — Define Breakpoint Strategy

1. Review the ProdigeUI token system for existing breakpoint tokens.
2. Adopt a mobile-first approach: design for smallest viewport, enhance upward.
3. Define breakpoints aligned to content needs, not device brands:
   - `sm`: 640px — large phones in landscape
   - `md`: 768px — tablets in portrait
   - `lg`: 1024px — tablets in landscape / small laptops
   - `xl`: 1280px — standard desktops
   - `2xl`: 1536px — wide monitors
4. Document which layout shifts occur at each breakpoint.

### Step 3 — Configure Grid Per Breakpoint

1. Define column count per breakpoint (1 col mobile, 2-3 col tablet, 4-12 col desktop).
2. Set gutter width using spacing tokens (tighter on mobile, wider on desktop).
3. Set container max-width and horizontal padding per breakpoint.
4. Map content blocks to grid areas at each breakpoint.
5. Verify no content overflows or creates horizontal scroll.

### Step 4 — Handle Images and Media

1. Specify responsive image strategy (srcset, art direction, or fluid width).
2. Set aspect ratios to prevent layout shift during image load.
3. Define maximum image dimensions per breakpoint.
4. For video/embedded media: use intrinsic ratio containers (16:9, 4:3).
5. Consider lazy-loading for below-the-fold media on mobile.

### Step 5 — Test Fluid Typography

1. Reference the typography system tokens for base sizes and scale.
2. Configure fluid type using clamp() between min and max viewport widths.
3. Verify heading hierarchy remains visually distinct at all sizes.
4. Ensure body text stays within 45-75 character line length across breakpoints.
5. Check that line-height adjusts appropriately (tighter at large sizes).

### Step 6 — Verify Touch Targets on Mobile

1. All interactive elements must be minimum 44x44px tap area.
2. Spacing between adjacent touch targets must be at least 8px.
3. Verify form inputs, buttons, and links meet these minimums.
4. Check that navigation items have sufficient spacing in mobile nav.
5. Test that no overlapping tap areas exist in collapsed/stacked layouts.
6. Document any elements needing padding adjustments for mobile.

### Step 7 — Validate and Report

1. Walk through each breakpoint and confirm layout integrity.
2. Verify no content is inaccessible at any viewport size.
3. Confirm all spacing uses token values (no magic numbers).
4. Run quality-check skill on the responsive output.
5. Report: breakpoints defined, grid configs, any known limitations.
