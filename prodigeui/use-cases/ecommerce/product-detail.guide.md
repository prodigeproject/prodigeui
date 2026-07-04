# Ecommerce Product Detail Page — Sub-Guide

> Parent: [use-cases/ecommerce/guide.md](./guide.md)

## Recommended Components
- **Card** — Product image gallery container
- **Button** — Add to cart, buy now, wishlist
- **Badge** — Sale, new, stock status labels
- **Input** — Quantity selector
- **Tabs** — Description, specs, reviews sections
- **Text** — Price display and product copy

## Tokens
- `typography.heading.lg` — product title
- `typography.heading.md` — price display (weight: strong)
- `color.feedback.success` — in-stock indicator
- `color.feedback.error` — out-of-stock / sale price
- `color.primary` — add-to-cart button
- `space.xl` — gap between media and details columns
- `radius.lg` — image container corners

## Motion Presets
- `state-transition` — variant selection feedback
- `micro-interaction` — add-to-cart button animation
- `enter-exit` — image gallery slide transitions

## Patterns
- Two-column layout: media gallery left, details right on desktop
- Image gallery with thumbnail strip and zoom on hover/tap
- Variant selectors (color, size) as radio group with visual swatches
- Sticky add-to-cart bar on mobile scroll
- Show stock count when below threshold (e.g., "Only 3 left")
- Reviews section with star rating summary and paginated list
- Related products carousel below the fold
- Breadcrumb navigation above product title
