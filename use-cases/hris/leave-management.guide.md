# HRIS Leave Management — Sub-Guide

> Parent: [use-cases/hris/guide.md](./guide.md)

## Recommended Components
- **Card** — Leave balance summary cards
- **Table** — Leave request history
- **Button** — Request leave, approve, deny actions
- **Badge** — Leave type and status indicators
- **Modal** — Leave request form
- **Form / Input** — Date range picker and reason field

## Tokens
- `color.feedback.success` — approved status
- `color.feedback.warning` — pending status
- `color.feedback.error` — denied status
- `typography.heading.lg` — balance numbers
- `typography.body.sm` — leave type labels
- `color.surface.secondary` — balance card backgrounds
- `space.lg` — card gap in balance row

## Motion Presets
- `state-transition` — status badge color transition on approval
- `enter-exit` — request modal open/close
- `micro-interaction` — balance card count animation

## Patterns
- Top section: leave balance cards (Vacation, Sick, Personal) with remaining days
- Balance cards show: type, remaining/total, a progress ring or bar
- Request form: date range picker, leave type selector, reason textarea
- History table: date range, type, status badge, approver, actions
- Manager view: pending requests queue with approve/deny inline buttons
- Calendar overlay showing team leave for overlap visibility
- Show accrual schedule and policy links in help section
- Notify users of low balance with warning threshold badges
