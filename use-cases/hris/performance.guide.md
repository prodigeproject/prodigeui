# HRIS Performance Review — Sub-Guide

> Parent: [use-cases/hris/guide.md](./guide.md)

## Recommended Components
- **Card** — Review cycle summary and goal cards
- **Table** — Review history and ratings
- **Form / Textarea** — Feedback entry fields
- **Badge** — Rating levels and review status
- **Button** — Submit review, request feedback
- **Tabs** — Switch between Self, Manager, Peer reviews

## Tokens
- `color.feedback.success` — exceeds expectations rating
- `color.feedback.warning` — meets expectations rating
- `color.feedback.error` — needs improvement rating
- `typography.heading.md` — section headings
- `typography.body.md` — review narrative text
- `color.surface.secondary` — goal card backgrounds
- `space.lg` — section spacing

## Motion Presets
- `state-transition` — tab switching transitions
- `enter-exit` — expand/collapse goal detail sections
- `micro-interaction` — rating selection feedback

## Patterns
- Review cycle dashboard: current period status, deadlines, completion progress
- Goals section: list of objectives with progress percentage and due dates
- Rating input: 5-point scale with descriptive labels for each level
- Multi-perspective tabs: Self-assessment, Manager review, Peer feedback
- Narrative fields: structured prompts (Strengths, Areas to Improve, Goals)
- Historical reviews timeline showing rating trend over periods
- Status tracking: Not Started > In Progress > Submitted > Acknowledged
- Ensure private feedback fields are clearly marked as confidential
