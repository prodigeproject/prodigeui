# Ecommerce Checkout Flow — Sub-Guide

> Parent: [use-cases/ecommerce/guide.md](./guide.md)

## Recommended Components
- **Stepper** — Checkout progress (Shipping > Payment > Review)
- **Form / Input** — Address fields and payment inputs
- **Card** — Order summary panel
- **Button** — Place order primary CTA
- **Badge** — Security trust indicators
- **Table** — Line items in order review

## Tokens
- `color.primary` — CTA and progress indicator
- `color.feedback.success` — order confirmed state
- `color.surface.secondary` — order summary background
- `typography.heading.md` — step titles
- `typography.body.sm` — field labels and help text
- `space.lg` — section separation

## Motion Presets
- `enter-exit` — step transitions (slide forward/backward)
- `state-transition` — input validation feedback
- `micro-interaction` — loading spinner on submit

## Patterns
- Single-page accordion or multi-step wizard (max 3 steps)
- Persistent order summary sidebar on desktop; collapsible on mobile
- Inline field validation with real-time feedback
- Show estimated delivery date near shipping method selection
- Disable place-order button until all required fields pass validation
- Provide guest checkout option; sign-up as optional enhancement
- Use lock icon near payment section for trust signaling
- Display total prominently with tax and shipping breakdown
