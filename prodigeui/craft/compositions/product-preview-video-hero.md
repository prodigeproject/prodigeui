# Composition — Product-Preview Video Hero

The award-grade **AI / SaaS / automation** hero (Nexora, Neuralyn, Linear-launch lineage).
A full-bleed real video sets atmosphere; a centered headline follows the page's art direction;
a **coded product preview** (dashboard-in-glass) overflows
the bottom as the focal artifact — proving there is a real product, not just a video with
text on it. A staggered entrance times the pieces in; scroll then lifts the copy and drifts
the preview up.

This is the composition to reach for when the earlier `cinematic-video-hero` feels "pasted
on" — the coded preview is exactly what fixes the "nempel"/floating-text problem.

## When to use
Agentic AI, automation studio, SaaS, dev tool, fintech, "we build you a system" briefs.
Needs: a fitting looping video **and** a plausible product surface to render (console,
dashboard, inbox, workflow). If you have no product surface, use `cinematic-video-hero` or
`giant-type-hero` instead.

## The spine (z-index layering)
```
z0   full-bleed <video> (object-cover) + art-directed treatment (see below)
z0   treatment: brand duotone (soft-light, ~40%) + edge-anchored legibility scrims + vignette
z10  floating glass pill nav (top)  — from cinematic-video-hero
z10  hero copy (centered): badge · role-driven headline emphasis · subhead · dual CTA
z10  coded product preview — centered, max-w-5xl, OVERFLOWS bottom (clipped by section)
z10  bottom gradient fade → page bg (melts the preview into the floor)
z50  grain overlay
```
Scroll choreography: copy `y: 0→-40% / opacity 1→0`; preview `y: 0→-24%` (parallax rise).

## Video treatment (do NOT slap it on)
The complaint "it feels pasted on" is a *treatment* failure, not a video-content failure.
Apply, back-to-front: (1) footage, slow Ken-Burns scale; (2) a **brand duotone** wash
(`mix-blend-soft-light`, ~40%, using the accent gradient) so the clip joins the palette;
(3) **edge-anchored** legibility scrims (dark at top for nav, bottom for the preview, wash
on the text side) — keep the center bright so it still reads as video; (4) a soft inset
vignette. Full detail: `patterns/video-hero-crossfade.md` + `craft/taste.md` §imagery.

### Match the treatment to the palette THEME (do not assume dark)
The scrim step above is written for a **dark** hero. A video hero is equally valid on a
**clean/light** palette — but the treatment must invert, or the clip turns the airy page into
a muddy dark box (a real regression: a light baseline that "lost" its video because the only
recipe on file used black scrims).

| | Dark hero | Light / clean hero |
|---|---|---|
| Video opacity | 0.45–0.65 (video is the atmosphere) | **0.10–0.20** (whisper — motion *texture*, not the subject) |
| Scrim direction | **darken** edges toward near-black | **lighten** — a *paper wash*: `radial-gradient` of the bg color brightening the center/text + a top→bottom bg-color fade at the edges. Never black scrims on a light page. |
| Duotone | accent gradient, soft-light ~40% | accent gradient, soft-light ~15–20% (subtler; the bright base eats blend) |
| Contrast check | text over the *darkest* frame ≥ 4.5:1 | dark text over the *brightest* washed frame ≥ 4.5:1 |

The rule: the treatment's job is to pull the clip into the palette and protect text legibility
in whichever direction the theme runs. Verify the theme first (is the base light or dark?),
then pick lighten-vs-darken accordingly. A `video.ready { opacity }` around 0.14 with a paper
wash is the light-theme default.

## Typographic signature: role-driven emphasis

Choose the emphasis treatment deliberately rather than adding an accent face automatically:
weight for importance, width for expansion, strike-through for removal, color for state, or
italic for voice/quotation. Prefer an existing family or related variable axis. A third
family is valid only when it owns a repeated role across the page.
```tsx
<h1 className="font-display font-semibold tracking-[-0.03em] leading-[0.95]"
    style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}>
  Operations that run{' '}
  <span className="font-display-emphasis">themselves</span>.
</h1>
```
```css
.font-display-emphasis {
  color: var(--color-accent);
  font-family: var(--type-brand);
  font-variation-settings: "wdth" 88, "wght" 650;
}
```
Italic may be right when the art direction calls for editorial voice, but it is not a
requirement of this hero.

## Complete skeleton (React + TS + Tailwind + framer-motion)
```tsx
import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Play } from 'lucide-react'
import HeroVideo from './HeroVideo'          // full-bleed video + treatment (see pattern)
import ProductPreview from './ProductPreview' // coded dashboard-in-glass (see pattern)

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 0.6], ['0%', '-40%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const previewY = useTransform(scrollYProgress, [0, 1], ['0%', '-24%'])

  const rise = (delay: number, y = 18) => reduce
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay, ease: EASE } }

  return (
    <section ref={ref} data-theme="dark"
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-bg-base text-text-primary">
      <HeroVideo className="pointer-events-none absolute inset-0 z-0" />

      <motion.div style={reduce ? undefined : { y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-content flex-col items-center px-6 pt-28 text-center">
        <motion.div {...rise(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-bg-surface/40 px-3.5 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary">Eyebrow = new info</span>
        </motion.div>

        <motion.h1 {...rise(0.1, 22)} className="max-w-4xl font-display font-semibold leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}>
          Outcome-first line{' '}
          <span className="font-display-emphasis">accent</span>.
        </motion.h1>

        <motion.p {...rise(0.2)} className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
          One decisive value line — concrete, specific, under twenty words.
        </motion.p>

        <motion.div {...rise(0.3)} className="mt-8 flex items-center gap-3">
          <a href="#" className="group inline-flex items-center gap-2 rounded-pill bg-text-primary px-6 py-3.5 text-sm font-semibold text-bg-base active:scale-[0.97]">
            Book a call <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#" className="group inline-flex items-center gap-2.5 rounded-pill border border-white/15 bg-bg-surface/30 py-1.5 pl-1.5 pr-5 text-sm font-medium backdrop-blur-sm hover:border-white/30">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-text-primary/10"><Play size={11} className="translate-x-px fill-current" /></span>
            See it work
          </a>
        </motion.div>
      </motion.div>

      <motion.div {...rise(0.5, 40)} style={reduce ? undefined : { y: previewY }}
        className="relative z-10 mx-auto mt-12 w-full max-w-5xl flex-1 px-4">
        <ProductPreview />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-bg-base to-transparent" />
    </section>
  )
}
```
- `HeroVideo` → `patterns/video-hero-crossfade.md` + the treatment above.
- `ProductPreview` → `patterns/coded-product-preview.md`.
- Smooth scroll + reveal infra → `recipes/motion-stack-lenis-gsap.recipe.md`.

## Entrance timeline (staggered)
`badge 0 → headline 0.1 → subhead 0.2 → CTA 0.3 → preview 0.5`, each 0.7s on
`cubic-bezier(.16,1,.3,1)`. Reduced-motion renders the final state (no transforms), and the
scroll parallax is disabled.

## Craft checklist (before shipping)
- [ ] Real video, preloaded + poster + `onerror` fallback; treatment applied (duotone + edge scrims + vignette), NOT a flat dark box.
- [ ] Treatment matches the palette THEME: dark hero → darken/scrim + video 0.45–0.65; light hero → paper wash (lighten) + video 0.10–0.20. Never black scrims on a light page.
- [ ] Headline ≤ 2 lines with one deliberate emphasis treatment; outcome-first copy; eyebrow carries new info.
- [ ] Exactly one primary CTA + one ghost ("See it work"); primary visible without scroll.
- [ ] Coded product preview (not a screenshot), `aria-hidden`, overflowing the fold + bottom fade.
- [ ] One accent used consistently across accent word, CTA, preview chart/pills.
- [ ] Staggered entrance timeline; scroll lifts copy + drifts preview; full reduced-motion path.
- [ ] Contrast ≥ 4.5:1 over the actual darkest video frame (verify on the text side).

## Common failure
Headline + CTA floating in the vertical center of a full-bleed video with nothing anchoring
the lower half → reads as "text pasted on stock footage." The coded product preview
overflowing the fold is the anchor that fixes it. If you can't build a plausible product
surface, switch composition — do not leave the fold empty.
