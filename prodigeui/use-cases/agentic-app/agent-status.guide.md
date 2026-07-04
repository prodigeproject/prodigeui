# Agentic App Agent Status Visualization — Sub-Guide

> Parent: [use-cases/agentic-app/guide.md](./guide.md)

## Recommended Components
- **Badge** — Agent state indicators (idle, thinking, executing, error)
- **Card** — Agent status panel container
- **Text** — Status labels and descriptions
- **Button** — Stop, retry, and configure actions
- **Stepper / Progress** — Multi-step task progress

## Tokens
- `color.feedback.success` — agent idle/ready state
- `color.feedback.warning` — agent thinking/processing state
- `color.feedback.error` — agent error/failed state
- `color.primary` — agent executing/active state
- `typography.body.sm` — status descriptions
- `typography.body.xs` — elapsed time indicators
- `space.sm` — compact status layout spacing
- `radius.sm` — status badge corners

## Motion Presets
- `state-transition` — status color transitions between states
- `micro-interaction` — thinking indicator pulse animation
- `enter-exit` — step completion reveal

## Patterns
- Display agent state prominently: Idle, Thinking, Executing, Completed, Error
- Show elapsed time for active operations
- Multi-step tasks: stepper showing current step with completed checkmarks
- Thinking state: animated indicator (pulse dot or spinner) with context label
- Error state: clear error message with retry button
- Allow user to cancel/stop long-running agent operations
- Collapsible detail view showing internal steps and reasoning
- Use `illustration-loading-error` for agent failure empty state
