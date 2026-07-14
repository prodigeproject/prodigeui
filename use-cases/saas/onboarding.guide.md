# SaaS Onboarding Flow — Sub-Guide

> Parent: [use-cases/saas/guide.md](./guide.md)

## Recommended Components
- **Modal / FullScreenOverlay** — Welcome step container
- **Stepper** — Progress indicator across onboarding steps
- **Form / Input** — Account setup fields
- **Button** — Primary CTA to advance steps
- **Card** — Feature highlight cards during tour

## Tokens
- `space.xl` / `space.2xl` — generous whitespace between steps
- `color.primary` — progress indicator and CTA
- `color.surface.secondary` — step background panels
- `typography.heading.md` — step titles
- `typography.body.md` — instructional copy

## Motion Presets
- `enter-exit` — slide between onboarding steps
- `state-transition` — progress bar fill animation
- `micro-interaction` — checkmark on step completion

## Patterns
- Use a multi-step wizard with max 5 steps; show progress via Stepper
- Offer a "Skip" action on non-critical steps; persist progress on close
- Show a celebratory completion state (use `illustration-success` asset)
- Collect minimal info per step to reduce cognitive load
- Auto-focus the first input on each step transition
- Allow keyboard navigation between steps (Enter to advance, Escape to skip)
