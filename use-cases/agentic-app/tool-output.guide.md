# Agentic App Tool/Function Output Display — Sub-Guide

> Parent: [use-cases/agentic-app/guide.md](./guide.md)

## Recommended Components
- **Card** — Tool output container with collapsible content
- **Badge** — Tool name and execution status
- **Text** — Output content (plain text, JSON, tables)
- **Button** — Expand/collapse, copy, and retry actions
- **Table** — Structured data output display

## Tokens
- `color.surface.secondary` — tool output card background
- `color.surface.tertiary` — code/JSON output background
- `color.text.primary` — output content text
- `color.text.tertiary` — tool name and metadata
- `typography.mono` — code and JSON output (monospace)
- `typography.body.sm` — output descriptions
- `space.sm` — compact output padding
- `radius.md` — output card corners
- `border.default` — output card border

## Motion Presets
- `enter-exit` — output card expand/collapse animation
- `state-transition` — execution status transition (pending > done)
- `micro-interaction` — copy-to-clipboard feedback

## Patterns
- Tool invocations appear inline in conversation as collapsible cards
- Default collapsed showing: tool name badge, status, brief summary
- Expanded view shows full output with proper formatting
- JSON output: syntax-highlighted with monospace font
- Table output: responsive table with horizontal scroll if needed
- Long output: truncated with "Show more" expansion
- Copy button on all output blocks for quick clipboard access
- Error output: red-tinted card with error message and retry action
- Group sequential tool calls under a "Steps" accordion
