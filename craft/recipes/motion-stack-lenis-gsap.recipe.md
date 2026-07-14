# Recipe — Motion Stack: Lenis + GSAP ScrollTrigger + Framer Motion

## What it delivers
The complete, production-safe motion foundation behind an award-grade marketing site:
**Lenis** smooth scroll driven by the **GSAP** ticker (one clock, no drift), **ScrollTrigger**
for scrubbed/pinned scenes, **Framer Motion** for component reveals and micro-interactions,
plus a scroll-linked **parallax** hook — all with a first-class `prefers-reduced-motion`
path and route-change resets. Copy these five files and you have the same motion baseline
used by the reference build.

## When to use
Any expressive marketing/landing/portfolio build at `MOTION_INTENSITY ≥ 0.5`. Skip Lenis on
data-dense apps/dashboards (native scroll is correct there); keep only Framer micro-interactions.

## Install
```bash
npm i gsap lenis framer-motion
```

## 1) Easing + variants — `lib/motion.ts`
```ts
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
}
export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
})
export const viewportOnce = { once: true, amount: 0.35 } as const
```

## 2) Lenis singleton — `lib/lenis.ts`
```ts
import type Lenis from 'lenis'
let instance: Lenis | null = null
export const setLenis = (l: Lenis | null) => { instance = l }
export const getLenis = () => instance
export const scrollTo = (target: string | number | HTMLElement, opts?: object) =>
  instance?.scrollTo(target, { offset: -80, duration: 1.2, ...opts })
```

## 3) Provider — sync Lenis to the GSAP ticker — `providers/SmoothScroll.tsx`
```tsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setLenis } from '@/lib/lenis'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return // native scroll only; no Lenis, no jank for opted-out users

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    setLenis(lenis)

    // ONE clock: drive Lenis from GSAP's ticker so ScrollTrigger stays in sync
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  // reset scroll + refresh triggers on route change
  useEffect(() => {
    window.scrollTo(0, 0)
    ScrollTrigger.refresh()
  }, [pathname])

  return <>{children}</>
}
```
Wrap the app once (inside the router): `<SmoothScroll><App /></SmoothScroll>`.

Lenis CSS (global):
```css
html.lenis, html.lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-stopped { overflow: hidden; }
```

## 4) Reveal primitive (Framer) — `components/Reveal.tsx`
```tsx
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'

export function Reveal({ children, delay = 0, className }:
  { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div className={className} variants={fadeUp} initial="hidden"
      whileInView="visible" viewport={viewportOnce}
      transition={{ delay }}>
      {children}
    </motion.div>
  )
}
```

## 5) Scroll-linked parallax hook (GSAP) — `hooks/useParallax.ts`
```ts
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** Drift an element as it scrolls through the viewport. distance in px. */
export function useParallax<T extends HTMLElement>(distance = 80) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const anim = gsap.fromTo(el, { y: -distance / 2 }, {
      y: distance / 2, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    })
    return () => { anim.scrollTrigger?.kill(); anim.kill() }
  }, [distance])
  return ref
}
```

## Choosing the right tool (don't overlap them)
| Need | Tool |
|------|------|
| Buttery page scroll | Lenis (ticker-driven) |
| Scrubbed / pinned scroll scenes, horizontal pans | GSAP ScrollTrigger |
| Component entrance reveals, `whileInView`, layout, gestures | Framer Motion |
| Hero copy fade/lift + preview parallax on scroll | Framer `useScroll`/`useTransform` |
| Continuous ambient (marquee, Ken-Burns) | CSS keyframes |

## Craft notes
- **One clock.** Never run a separate `requestAnimationFrame` loop for Lenis alongside
  GSAP's ticker — sync it via `gsap.ticker.add`, or ScrollTrigger positions drift.
- **`lagSmoothing(0)`** keeps Lenis + ScrollTrigger aligned during frame drops.
- **Reduced motion:** don't instantiate Lenis at all; render Reveal's final state; bail out
  of `useParallax`. The page must be fully usable with zero motion.
- **Route changes:** reset scroll to top and `ScrollTrigger.refresh()` so measurements match
  the new DOM.
- **GPU only:** animate `transform`/`opacity`. `will-change` only while animating; kill
  triggers on unmount (shown above) to avoid leaks.

## Performance budget
Lenis + GSAP core + ScrollTrigger + Framer ≈ acceptable for marketing; code-split heavy
scenes (Three.js/R3F) so they don't inflate the hero bundle. Lazy-mount below-the-fold
ScrollTrigger scenes.
