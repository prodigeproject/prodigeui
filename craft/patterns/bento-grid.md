# Craft Pattern — Bento Grid

## What it delivers
An asymmetric grid of feature cards of varying sizes — the "bento box" layout. It creates
visual hierarchy (one hero cell, several supporting cells) instead of the AI-default row
of three identical cards. A cornerstone of modern feature and product sections.

## When to use
Feature showcases, product highlights, portfolio overviews, dashboards-as-marketing.
Any time you'd otherwise reach for "three equal cards."

## The recipe (Tailwind — 12-col span mixing)

```tsx
<section className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
  {/* Hero cell — spans 7, tall */}
  <div className="md:col-span-7 md:row-span-2 rounded-3xl bg-surface border border-stroke p-8 min-h-[320px]">
    …primary feature (largest type, image/video)…
  </div>
  {/* Supporting cells alternate 5 / 5 / 7 spans */}
  <div className="md:col-span-5 rounded-3xl bg-surface border border-stroke p-6">…</div>
  <div className="md:col-span-5 rounded-3xl bg-surface border border-stroke p-6">…</div>
  <div className="md:col-span-7 rounded-3xl bg-surface border border-stroke p-6">…</div>
</section>
```

Column spans that read well: `7/5`, `5/7`, `8/4`, `4/8`, and a full-width `12` for a
CTA band. Alternate them so the eye zig-zags.

## Craft notes
- **One cell must dominate.** Give the hero cell more span, taller height, larger type,
  and the richest media (video or a real image). Von Restorff effect — one thing stands
  out, the rest support.
- **Consistent radius + border + surface** across cells is what makes varied sizes feel
  like one system, not chaos. Vary SIZE, keep STYLE constant.
- **Media inside cells** (a looping video, a real product image, a chart) elevates a
  bento far above icon-and-text cells.
- **Hover craft:** subtle `group-hover:scale-105` on the cell's background image inside
  `overflow-hidden`, or an animated gradient border ring on the hero cell.

## Responsive
- Collapse to `grid-cols-1` on mobile; every cell becomes full width, hero cell first.
- At `md`, switch to the 12-col span mix. Optionally a `sm` 2-col intermediate.

## Performance
- Lazy-load off-screen cell media.
- If cells contain video, use one shared `IntersectionObserver` to play only visible
  videos.

## Reduced motion
Hover scale and gradient-shift borders should be gated by `prefers-reduced-motion`. The
layout itself is static and always fine.

## Anti-slop note
The bento grid is the direct antidote to the flagged "three equal feature cards" pattern.
Equal cards are slop because they impose no hierarchy; a bento imposes hierarchy by size.
