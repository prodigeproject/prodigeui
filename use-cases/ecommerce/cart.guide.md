# Ecommerce Cart — Sub-Guide

> Parent: [use-cases/ecommerce/guide.md](./guide.md)

## Recommended Components
- **Table** — Cart line items on desktop
- **Card** — Cart item cards on mobile
- **Button** — Remove, update quantity, proceed to checkout
- **Input** — Quantity number input with +/- buttons
- **Badge** — Discount and promo indicators
- **Text** — Price subtotals and grand total

## Tokens
- `typography.body.md` — product names
- `typography.heading.md` — total price display
- `color.feedback.error` — remove action and out-of-stock warning
- `color.feedback.success` — discount applied indicator
- `color.surface.secondary` — summary section background
- `space.md` — row spacing between items
- `border.subtle` — line item dividers

## Motion Presets
- `enter-exit` — item removal animation (fade + collapse)
- `state-transition` — quantity update feedback
- `micro-interaction` — promo code applied confirmation

## Patterns
- Show item thumbnail, name, variant info, unit price, quantity, line total
- Quantity input: min 1, max based on stock; disable +/- at bounds
- Remove action: use undo toast pattern (5s window) instead of confirm dialog
- Empty cart state: use `illustration-empty-state` with "Continue Shopping" CTA
- Order summary sidebar (desktop) or collapsible section (mobile)
- Promo code input with inline apply button and success/error feedback
- Show "Free shipping" threshold progress bar if applicable
- Update totals immediately on quantity change via optimistic UI
