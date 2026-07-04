# Landing Page Pricing Section — Sub-Guide

> Parent: [use-cases/landing/guide.md](./guide.md)

## Recommended Components
- **Card** — Plan cards with feature lists
- **Button** — Plan selection CTA per card
- **Badge** — "Popular" or "Best Value" labels
- **Text** — Price display and feature descriptions
- **Toggle / Tabs** — Monthly/annual billing switch

## Tokens
- `typography.heading.xl` — price number display
- `typography.body.sm` — feature list items and billing period
- `color.primary` — recommended plan highlight border and CTA
- `color.surface.primary` — default plan card background
- `color.surface.secondary` — highlighted plan card background
- `space.xl` — gap between plan cards
- `radius.lg` — plan card corners
- `shadow.lg` — elevated recommended plan card

## Motion Presets
- `state-transition` — monthly/annual toggle price update
- `enter-exit` — plan cards stagger in on scroll
- `micro-interaction` — hover elevation on plan cards

## Patterns
- Show 2-4 plan options maximum (3 is optimal)
- Highlight recommended plan with elevated shadow and badge
- Monthly/annual toggle with savings percentage shown
- Feature list with checkmarks for included, muted X for excluded
- Align CTA buttons across all plan cards at same vertical position
- Enterprise/custom plan: use "Contact Sales" variant
- Price displayed prominently: large number + small billing period text
- Include FAQ section below pricing for objection handling
