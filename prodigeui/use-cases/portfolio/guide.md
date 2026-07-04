# Portfolio — ProdigeUI Guide

## Overview
Portfolio sites showcase creative work with emphasis on visual presentation,
smooth transitions, and minimal UI chrome. Target audience includes potential
clients, employers, and collaborators evaluating creative work.

## Recommended Theme
- **Primary:** `themes/dark.theme.json`
- **Alternative:** `themes/light.theme.json`

## Key Components
- **Card** — Project showcases with media-first layout
- **Text** — Display variant for personal branding
- **Navbar** — Minimal, transparent navigation
- **Footer** — Simple variant with social links
- **Modal** — Fullscreen project detail views
- **Icon** — Social and skill icons
- **Button** — Contact CTA and project links

## Prompt Template
- `prompt-templates/portfolio/showcase.template.json`

## Design Dials (Three Dials System)
- DESIGN_VARIANCE: 0.8 — Highly expressive; showcase personality
- MOTION_INTENSITY: 0.7 — Rich animations; parallax and transitions
- VISUAL_DENSITY: 0.2 — Very spacious; let work breathe

## Layout Patterns
- Full-bleed image sections with overlay text
- Use 12-column grid from `design-rules/layout.rules.json`
- Masonry or asymmetric grid for project galleries
- Single column scrolling narrative on mobile

## Craft (HIGH ambition — this use-case demands it)
Portfolio is the most craft-forward use-case. A restrained portfolio is a failed
portfolio. Reach into `craft/` and pick a signature per section:
- **Hero:** magnetic hero portrait (`craft/patterns/magnetic-hover.md`), giant fluid
  display name (`fluid-display-type.md`), or a crossfading showreel video
  (`video-hero-crossfade.md` / `hls-video.md`).
- **Project gallery:** sticky card stack (`sticky-card-stack.md`), bento grid
  (`bento-grid.md`), or parallax columns (`scroll-parallax.md`).
- **Motion signature:** scroll-linked text sweep + staggered reveals (`text-reveal.md`,
  `motion/choreography.md`).
- **Texture:** grain overlay + subtle glass chrome (`grain-noise-overlay.md`,
  `liquid-glass.md`).
Target the craft-presence rubric at 10-12/12. Always ship reduced-motion fallbacks.

## Special Considerations
- Leverage scroll-based motion and `motion/choreography.md` for project reveals
- Use `shadow.lg` and elevated Card variant for featured work; layer z-index for depth
- Apply fluid display type for name and tagline (not the modular UI scale)
- Respect `prefers-reduced-motion` for all parallax and ambient effects
- Dark theme enhances visual work presentation contrast
- Use REAL media (see `assets/asset-sourcing.guide.md`), never gray placeholder boxes

## Related Artifacts
- craft/, tokens/, themes/, motion/, components/, design-rules/, quality-gate/
