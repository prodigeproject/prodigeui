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
- **Footer** — Closing chapter with proposition-scale type, a specific contact action,
  useful navigation/availability context, and a visual echo from the page
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
- Full-bleed image sections only when the concept earns edge-to-edge treatment
- Use 12-column grid from `design-rules/layout.rules.json`
- Masonry or asymmetric grid for project galleries, using at least two independent signals:
  dominance plus offset, stagger, crop/height variation, overlap, or negative-space anchoring
- Rotate container width and grid topology across consecutive expressive sections
- Keep project title and primary metadata visible without hover or focus; touch and static
  preview must preserve identity.
- Confirm final CSS preserves unequal spans and crops. One shared fixed height, aspect ratio, or
  min-height may not flatten the gallery into matching cards.
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
- Resolve the closing chapter with one proposition, one primary action, one compact context row,
  and at most one ambient visual system.
- When the brief explicitly requests a cinematic footer or a reprise of hero footage, preserve
  that video as the single ambient system. Give it a poster, responsive focal crop, optional
  intentional mirror, reduced-motion still, and a localized scrim no darker than 50% black.
  Do not flatten it into a utility footer or replace it with a marquee, particles, or gradient.
- Dark theme enhances visual work presentation contrast
- Use REAL media (see `assets/asset-sourcing.guide.md`), never gray placeholder boxes

## Related Artifacts
- craft/, tokens/, themes/, motion/, components/, design-rules/, quality-gate/
