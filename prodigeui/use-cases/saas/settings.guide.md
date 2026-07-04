# SaaS Settings Page — Sub-Guide

> Parent: [use-cases/saas/guide.md](./guide.md)

## Recommended Components
- **Sidebar / Tabs** — Settings category navigation
- **Form / Input** — Editable fields for preferences
- **Toggle / Switch** — Boolean setting controls
- **Card** — Settings section containers
- **Button** — Save, cancel, and destructive actions
- **Modal** — Confirmation for irreversible changes

## Tokens
- `space.lg` — section spacing
- `color.feedback.error` — danger zone destructive actions
- `color.surface.primary` — card backgrounds
- `color.border.default` — section dividers
- `typography.heading.sm` — section headings
- `typography.body.sm` — field descriptions

## Motion Presets
- `state-transition` — toggle switch animation
- `enter-exit` — section tab transitions

## Patterns
- Group settings into logical sections: Profile, Notifications, Security, Billing
- Use inline editing where possible; avoid full-page forms
- Danger zone (account deletion, data export) placed at bottom with red accent
- Show unsaved changes indicator with "Save" button enabled only on change
- Use descriptive help text below each field explaining the impact
- Provide keyboard shortcut hints for power users (Ctrl+S to save)
- Auto-save toggles immediately; text fields require explicit save
