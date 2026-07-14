# SaaS Billing & Subscription — Sub-Guide

> Parent: [use-cases/saas/guide.md](./guide.md)

## Recommended Components
- **Card** — Plan comparison and current plan summary
- **Table** — Invoice history with status badges
- **Badge** — Plan tier labels and payment status
- **Button** — Upgrade, downgrade, and cancel actions
- **Modal** — Plan change confirmation dialog
- **Form / Input** — Payment method fields

## Tokens
- `color.primary` — recommended plan highlight
- `color.feedback.success` — paid status
- `color.feedback.warning` — pending/overdue status
- `color.feedback.error` — failed payment indicator
- `typography.heading.lg` — pricing display
- `space.xl` — spacing between plan cards

## Motion Presets
- `state-transition` — plan card selection highlight
- `enter-exit` — modal open/close for confirmations

## Patterns
- Display current plan prominently at top with usage metrics
- Show plan comparison cards side-by-side (max 3-4 plans)
- Highlight recommended plan with primary border and badge
- Invoice table: date, amount, status badge, download link
- Downgrade/cancel flows require explicit confirmation with consequence list
- Display prorated charges clearly before plan change confirmation
- Payment method section shows last 4 digits with edit capability
- Use `illustration-upgrade` asset for upgrade prompts
