# Portfolio Project Grid — Sub-Guide

> Parent: [use-cases/portfolio/guide.md](./guide.md)

## Recommended Components
- **Card** — Project thumbnail cards with hover overlay
- **Badge** — Category/technology tags
- **Text** — Project title and short description
- **Button** — View project link
- **Tabs / Filter** — Category filter controls

## Tokens
- `typography.heading.sm` — project card titles
- `typography.body.sm` — project descriptions
- `color.surface.primary` — card background
- `color.text.primary` — card title
- `color.text.secondary` — card description
- `space.lg` — grid gap between cards
- `radius.md` — card border radius
- `shadow.md` — card hover elevation

## Motion Presets
- `state-transition` — card hover scale and shadow
- `enter-exit` — grid items stagger on filter change
- `scroll-reveal` — cards fade up on scroll into viewport

## Patterns
- Masonry or uniform grid: 2 columns on tablet, 3 on desktop
- Each card shows: thumbnail image, title, category tags, brief description
- Hover state reveals overlay with quick action (View Project)
- Category filter tabs at top with "All" default selected
- Filter transitions: items fade out/in without layout jump
- Thumbnail aspect ratio: 16:9 or 4:3 consistent across grid
- Limit visible projects to 6-9; "View All" for more
- Lazy-load images below the fold for performance
