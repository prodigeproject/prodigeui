# Ecommerce — ProdigeUI Guide

## Overview
Ecommerce interfaces balance product discovery with seamless purchase flows.
Target audience includes shoppers browsing products, comparing options, and
completing transactions across desktop and mobile devices.

## Recommended Theme
- **Primary:** `themes/light.theme.json`
- **Alternative:** `themes/dark.theme.json`

## Key Components
- **Card** — Product cards with media, pricing, and quick actions
- **Button** — Add-to-cart, buy-now, and wishlist actions
- **SearchBar** — Product search with autocomplete
- **Badge** — Sale tags, stock status, and rating indicators
- **Table** — Order history and cart line items
- **Modal** — Quick view, size guides, and cart overlays
- **Navbar** — Category navigation with cart indicator
- **Input** — Quantity selectors and filter inputs

## Prompt Template
- `prompt-templates/ecommerce/product-listing.template.json`

## Design Dials (Three Dials System)
- DESIGN_VARIANCE: 0.5 — Balanced; familiar patterns with brand personality
- MOTION_INTENSITY: 0.5 — Moderate; micro-interactions on add-to-cart
- VISUAL_DENSITY: 0.5 — Medium; grid browsing without overwhelming

## Layout Patterns
- Product grid: 2 columns mobile, 3 tablet, 4 desktop
- Use 12-column grid from `design-rules/layout.rules.json`
- Sticky filter sidebar on desktop, bottom sheet on mobile
- Full-width hero banners for promotions

## Special Considerations
- Use `motion/presets/` hover effects on product Card components
- Apply interactive Card variant for product tiles
- Ensure price typography uses `typography.weight.strong` token
- Badge component for discount labels and stock warnings
- Focus on touch-friendly targets (min 44px) for mobile shoppers

## Related Artifacts
- tokens/, themes/, motion/, components/, design-rules/, quality-gate/
