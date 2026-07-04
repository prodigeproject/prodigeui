# Landing Page — ProdigeUI Guide

## Overview
Landing pages focus on conversion through strong visual hierarchy, compelling hero
sections, and clear calls-to-action. Target audience is first-time visitors who
need to quickly understand value and take action.

## Recommended Theme
- **Primary:** `themes/light.theme.json`
- **Alternative:** `themes/dark.theme.json`

## Key Components
- **Button** — Primary and secondary CTAs with high visibility
- **Text** — Display and heading variants for hero content
- **Card** — Feature showcases and pricing tiers
- **Navbar** — Minimal, transparent or sticky navigation
- **Footer** — Multi-column with links and social
- **Badge** — Social proof and trust indicators
- **Icon** — Feature illustrations and visual accents

## Prompt Template
- `prompt-templates/landing/hero-page.template.json`

## Design Dials (Three Dials System)
- DESIGN_VARIANCE: 0.7 — Bold and expressive; stand out visually
- MOTION_INTENSITY: 0.6 — Engaging scroll-based and entrance animations
- VISUAL_DENSITY: 0.3 — Spacious; generous whitespace for readability

## Craft (HIGH ambition — expressive use-case)
A landing page is an expressive surface: it must ship craft, not just avoid slop. Pick a
signature before building (see `craft/AGENTS.md`):
- **Hero (choose one):** crossfading background video (`craft/patterns/video-hero-crossfade.md`
  or `hls-video.md`), giant fluid display headline with ghost type
  (`fluid-display-type.md`), or a cursor-spotlight reveal (`cursor-spotlight-mask.md`).
- **Chrome:** liquid-glass nav / pills / stat cards over the media (`liquid-glass.md`).
- **Motion signature:** staggered word blur-in for the headline + scroll reveals
  (`text-reveal.md`, `motion/choreography.md`).
- **Features:** bento grid with a dominant hero cell (`bento-grid.md`), NOT three equal cards.
- **Social proof / logos:** opposing-direction marquee (`marquee.md`).
- **Texture:** grain overlay to kill the flat-AI look (`grain-noise-overlay.md`).
Use 2-5 of these with intent, not all at once. Target craft-presence >= 9/12.

## Layout Patterns
- Full-viewport (`100vh`) cinematic hero — centered is fine WHEN it has media + texture + motion
- Use 12-column grid from `design-rules/layout.rules.json` for content sections
- Section-based vertical scroll structure with choreographed reveals
- Breakpoints: single column mobile, 2-col tablet, full desktop
- Layer z-index for depth (ghost type behind subject, glass above media)

## Special Considerations
- Use `motion/choreography.md` for section reveals, not just fade-in
- Use fluid `clamp()` display type for hero headlines (not the modular UI scale)
- Ensure CTA buttons meet 44px minimum touch target on mobile
- Verify text contrast over video/photography against the actual frame
- Use REAL media (see `assets/asset-sourcing.guide.md`), never gray placeholder boxes
- Always ship reduced-motion fallbacks for video, parallax, and marquees

## Related Artifacts
- craft/, tokens/, themes/, motion/, components/, design-rules/, quality-gate/
