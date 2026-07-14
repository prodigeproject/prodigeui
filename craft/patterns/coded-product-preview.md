# Craft Pattern — Coded Product Preview (Dashboard-in-Glass)

## What it delivers
A hand-built, *fake-but-believable* product UI (a dashboard / console / app screen) that
sits inside frosted glass as the hero's focal artifact — usually overflowing the bottom of
the viewport, clipped by the section. This is the single technique that makes an AI /
SaaS / automation hero read as **a real product**, not a stock video with text pasted on
top. It recurs across award-grade AI landing pages (Nexora, Neuralyn, Linear, Vercel,
Framer-style launches).

Crucially it is **coded, not a screenshot**: real DOM, real tokens, hand-drawn SVG
sparklines / area charts, live-looking status pills. It scales crisply, themes with your
tokens, and can animate.

## When to use
AI/automation studios, SaaS, dev tools, fintech, "we built you a system" briefs — anywhere
the value proposition is *software doing work*. Pair it with `compositions/product-preview-video-hero.md`.
Do NOT use for editorial/fashion/agency brand work (there the subject is media, not a UI).

## The spine
```
frosted glass card (rounded-t-2xl, hairline border, big soft shadow, backdrop-blur)
├── top bar: brand mark + product name + "● Live" pill · search ⌘K · bell · avatar
├── sidebar (hidden < sm): nav items, one active, a badge, a footer status card
└── main:
    ├── header row: section title + segmented control (Week/Month)
    ├── status cards row (2–3): name + state dot + metric + SVG sparkline
    └── feed + chart row:
        ├── live activity feed (task · agent · status pill · time)   [3/5 width]
        └── metric card: big number + delta + SVG area chart (bezier) [2/5 width]
```

## Two decorative-integrity rules
1. **`aria-hidden="true"` + `pointer-events-none select-none`.** It is a decorative
   artifact, not real UI. Never trap focus or announce fake data to screen readers.
2. **Never a `<img>` screenshot.** Screenshots blur when scaled and don't theme. Build the
   DOM. The charts are the only "art" and they are hand-drawn SVG paths (below).

## Hand-drawn SVG sparkline (crisp at any size)
```tsx
function Sparkline({ points }: { points: number[] }) {
  const w = 72, h = 24
  const min = Math.min(...points), max = Math.max(...points)
  const range = max - min || 1
  const step = w / (points.length - 1)
  const d = points.map((p, i) => {
    const x = i * step
    const y = h - ((p - min) / range) * (h - 4) - 2
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <path d={d} fill="none" stroke="rgb(var(--accent))" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
```

## Hand-drawn area chart (filled, with gradient)
```tsx
<svg viewBox="0 0 240 80" className="mt-2 w-full" preserveAspectRatio="none">
  <defs>
    <linearGradient id="ac-fill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"  stopColor="rgb(var(--accent))" stopOpacity="0.25" />
      <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity="0" />
    </linearGradient>
  </defs>
  {/* fill uses the same path closed to the baseline */}
  <path d="M0 60 C 30 55, 45 40, 70 42 S 115 30, 140 26 S 190 16, 240 8 L 240 80 L 0 80 Z"
        fill="url(#ac-fill)" />
  <path d="M0 60 C 30 55, 45 40, 70 42 S 115 30, 140 26 S 190 16, 240 8"
        fill="none" stroke="rgb(var(--accent))" strokeWidth="1.5" strokeLinecap="round" />
</svg>
```

## Status pills (semantic, token-bound)
```tsx
const statusStyles: Record<string, string> = {
  Done:    'bg-success/15 text-success',
  Running: 'bg-accent/15 text-accent',
  Queued:  'bg-bg-elevated text-text-muted',
}
```
A `Running` row can pulse: a small `animate-ping` dot behind a solid dot sells "live."

## Glass shell (the frame)
```tsx
<div
  aria-hidden="true"
  className="pointer-events-none select-none overflow-hidden rounded-t-2xl
             border border-white/10 bg-bg-surface/70 shadow-2xl backdrop-blur-xl"
  style={{ boxShadow: '0 30px 90px -20px rgb(var(--shadow-color) / 0.7), inset 0 1px 0 0 rgb(255 255 255 / 0.06)' }}
>
  {/* top bar / sidebar / main */}
</div>
```

## Making it feel alive (optional, gated by MOTION dial)
- One `Running` status with a pulsing dot (CSS `animate-ping`).
- A `CountUp` on the hero metric (see `patterns/advanced-effects.md`).
- A slow marquee of "agent activity" as a secondary ambient layer.
- On scroll, drift the whole card up slightly (parallax) so it "rises" out of the fold —
  see `compositions/product-preview-video-hero.md`.
Keep it to ONE ambient cue; the preview is a supporting actor, not a dashboard demo.

## Craft checklist
- [ ] Coded DOM, not a screenshot; charts are hand-drawn SVG paths.
- [ ] `aria-hidden` + `pointer-events-none select-none`.
- [ ] Every colour from tokens (`--accent`, `--success`, `--bg-*`, `--text-*`).
- [ ] Believable, specific copy ("Reconciled 42 vendor invoices"), never lorem.
- [ ] Overflows the fold (clipped) so it invites scroll; a bottom gradient fades it into the floor.
- [ ] Hairline borders + one soft large shadow + subtle inner top highlight (glass depth).
- [ ] Collapses gracefully: sidebar `hidden sm:flex`, cards stack on mobile.

## Common failure
Pasting a real screenshot (blurs, won't theme, dates instantly), or over-building it into a
full interactive dashboard that competes with the headline. It is a *portrait of the
product*, not the product. One glance should read "software, working" — then the eye
returns to the headline and CTA.
