# Agentic App Conversation / Chat — Sub-Guide

> Parent: [use-cases/agentic-app/guide.md](./guide.md)

## Recommended Components
- **Card** — Message bubble containers
- **Input / Textarea** — Message composition field
- **Button** — Send, attach, and action buttons
- **Badge** — Agent/user role indicators
- **Text** — Message content and timestamps
- **Sidebar** — Conversation history list

## Tokens
- `color.surface.primary` — user message bubble background
- `color.surface.secondary` — agent message bubble background
- `color.primary` — send button and active indicators
- `typography.body.md` — message text
- `typography.body.xs` — timestamps
- `space.sm` — gap between sequential same-sender messages
- `space.md` — gap between different-sender messages
- `radius.lg` — message bubble corners

## Motion Presets
- `enter-exit` — new message slide-in animation
- `state-transition` — typing indicator pulse
- `micro-interaction` — send button activation

## Patterns
- Messages stream bottom-to-top; auto-scroll on new message unless user scrolled up
- User bubbles right-aligned; agent bubbles left-aligned with avatar
- Show typing indicator with animated dots during agent processing
- Support markdown rendering in agent messages (code blocks, lists, bold)
- Input area: auto-growing textarea with max height, submit on Enter (Shift+Enter for newline)
- Conversation list sidebar shows recent chats with preview text
- Attachment support: file upload button with drag-and-drop zone
- Message actions on hover: copy, retry, feedback (thumbs up/down)
