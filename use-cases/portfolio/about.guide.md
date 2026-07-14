# Portfolio About / Bio Section — Sub-Guide

> Parent: [use-cases/portfolio/guide.md](./guide.md)

## Recommended Components
- **Card** — Bio container with photo and text
- **Text** — Heading, bio paragraph, and skills list
- **Badge** — Skill/technology tags
- **Button** — Resume download and social links
- **Image** — Profile photo

## Tokens
- `typography.heading.lg` — section heading
- `typography.body.md` — bio paragraph text
- `typography.body.sm` — skill tags and metadata
- `color.text.primary` — headings and bio text
- `color.text.secondary` — supporting details
- `color.primary` — accent for name or highlight
- `space.xl` — section padding
- `radius.full` — circular profile photo

## Motion Presets
- `enter-exit` — section fade in on scroll
- `state-transition` — skill tag hover highlight
- `scroll-reveal` — staggered reveal of bio elements

## Patterns
- Two-column layout: photo left, text right on desktop; stacked on mobile
- Keep bio concise: 2-3 paragraphs covering expertise and background
- Skills displayed as horizontal tag list with Badge components
- Include downloadable resume link as secondary CTA
- Social links (GitHub, LinkedIn, etc.) as icon buttons
- Profile photo: high quality, consistent with brand tone
- Optional: timeline or experience list below bio section
- Ensure profile photo has descriptive alt text
