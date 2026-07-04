# Portfolio Contact Form — Sub-Guide

> Parent: [use-cases/portfolio/guide.md](./guide.md)

## Recommended Components
- **Form** — Contact form container
- **Input** — Name, email, subject fields
- **Textarea** — Message body field
- **Button** — Submit CTA
- **Card** — Form wrapper with alternative contact info
- **Text** — Section heading and helper copy

## Tokens
- `typography.heading.md` — section heading
- `typography.body.sm` — field labels and helper text
- `color.primary` — submit button
- `color.feedback.success` — submission success state
- `color.feedback.error` — validation error messages
- `color.surface.secondary` — form container background
- `space.md` — field spacing
- `radius.md` — input and card corners

## Motion Presets
- `state-transition` — input focus ring animation
- `micro-interaction` — success checkmark on submit
- `enter-exit` — success message appearance

## Patterns
- Keep form fields minimal: name, email, message (3-4 fields max)
- Show inline validation errors on blur, not on submit only
- Submit button disabled until required fields are valid
- Success state replaces form with confirmation message + illustration
- Use `illustration-success` asset for post-submission state
- Include alternative contact: email link, social profiles alongside form
- Honeypot or invisible captcha for spam prevention (no visible CAPTCHA)
- Two-column on desktop: form left, contact info/map right
