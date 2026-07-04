# Landing Page Hero Section — Sub-Guide

> Parent: [use-cases/landing/guide.md](./guide.md)

## Recommended Components
- **Text** — Headline (h1) and supporting subheadline
- **Button** — Primary CTA and optional secondary CTA
- **Card** — Social proof ticker or trust badges
- **Badge** — Announcement pill above headline
- **Image / Video** — Hero media (product screenshot or illustration)

## Tokens
- `typography.heading.2xl` — hero headline (largest scale)
- `typography.body.lg` — subheadline
- `color.primary` — primary CTA button
- `color.text.primary` — headline text
- `color.text.secondary` — subheadline text
- `space.2xl` — vertical padding for hero section
- `space.lg` — gap between headline and CTA

## Motion Presets
- `enter-exit` — staggered reveal on page load (headline > subheadline > CTA)
- `scroll-reveal` — parallax effect on background media
- `micro-interaction` — button hover glow effect

## Patterns
- Keep headline to 6-12 words maximum for impact
- Place single primary CTA above the fold; secondary CTA optional
- Use announcement badge above headline for time-sensitive offers
- Hero image/screenshot: right side on desktop, below text on mobile
- Include social proof (logos, user count, rating) near CTA
- Min viewport height for hero: 80vh on desktop, auto on mobile
- Background: gradient or subtle pattern using surface tokens, never busy images
- Ensure headline contrast meets 4.5:1 against background
