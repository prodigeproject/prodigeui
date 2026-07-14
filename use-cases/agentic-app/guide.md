# Agentic App — ProdigeUI Guide

## Overview
Agentic applications feature AI-driven conversational interfaces, tool execution
panels, and real-time streaming outputs. Target audience includes developers and
knowledge workers interacting with AI agents for complex tasks.

## Recommended Theme
- **Primary:** `themes/dark.theme.json`
- **Alternative:** `themes/light.theme.json`

## Key Components
- **Card** — Message bubbles, tool result panels, and context cards
- **Input** — Chat input with multi-line support
- **Button** — Send, stop, and action buttons
- **Sidebar** — Conversation history and agent selection
- **Badge** — Agent status, model indicators, and token counts
- **Modal** — Settings, API key management, and confirmations
- **Text** — Code variant for streamed outputs
- **Tooltip** — Inline explanations and help indicators

## Prompt Template
- `prompt-templates/agentic-app/chat-interface.template.json`

## Design Dials (Three Dials System)
- DESIGN_VARIANCE: 0.4 — Moderate; familiar chat patterns with modern feel
- MOTION_INTENSITY: 0.5 — Moderate; streaming text and panel transitions
- VISUAL_DENSITY: 0.6 — Medium-high; conversation threads are content-rich

## Layout Patterns
- Two-panel: sidebar (conversations) + main chat area
- Use 12-column grid from `design-rules/layout.rules.json`
- Chat messages: full-width bubbles with max-width constraint
- Responsive: overlay sidebar on mobile, side-by-side on desktop

## Special Considerations
- Use `motion/presets/` enter animations for streaming message appearance
- Apply `typography.font-family.code` token for code block rendering
- Dark theme preferred for reduced eye strain in extended sessions
- Card elevated variant for tool execution result panels
- Ensure real-time updates do not disrupt focus for screen readers
- Use `z.sticky` token for pinned input area at viewport bottom

## Related Artifacts
- tokens/, themes/, motion/, components/, design-rules/, quality-gate/
