# Composition — Bento Showcase Page

Feature/product/portfolio overview built as an asymmetric bento grid (benchmark 10 works
section, 59 dental mosaic, 69 CozyPaws, 52). The antidote to "three equal cards": one
dominant cell + supporting cells, real media inside each.

## When to use
Feature showcases, product highlights, portfolio overviews, no-scroll bento landings.

## The spine
```
z0   committed base
     section header (restrained: one eyebrow max, real heading, short subtext)
     12-col bento grid: ONE dominant hero cell (span 7, row-span 2) + supporting cells
     (alternating 5/5/7/8/4 spans). Every cell holds REAL media, not an icon+sentence.
```

## Key layout (Tailwind spans)
```html
<section class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
  <div class="md:col-span-7 md:row-span-2 …">HERO cell — largest media + title</div>
  <div class="md:col-span-5 …">…</div>
  <div class="md:col-span-5 …">…</div>
  <div class="md:col-span-4 …">…</div>
  <div class="md:col-span-8 …">…</div>
</section>
```
Span rhythm that reads well: 7/5, 5/7, 8/4, 4/8; a full-width 12 for a CTA band. Alternate so
the eye zig-zags. Collapse to 1-col on mobile (hero cell first).

## Cell craft
- **Consistent shell** (same radius, border, surface) across all cells — vary SIZE, keep
  STYLE constant. That is what makes varied spans read as one system, not chaos.
- **Real media inside** (looping video, real photo, chart). One dominant cell gets the
  richest media + largest type.
- **Shared-image mosaic variant** (benchmark 59): one image sampled per cell via computed
  `background-position` + `ResizeObserver` so cells look like windows onto one picture.
- **Hover:** animate the cell's bg/border/shadow — NEVER `scale` the `<img>` itself
  (taste.md). A gradient-border ring on the hero cell is a good focal accent.

## Motion
- Cells reveal on scroll via IntersectionObserver, staggered `index * 80ms`, first-time only.
- Reduced-motion: cells render in place.

## Craft checklist
- [ ] ONE dominant cell (bigger span + richer media + larger type). Not equal cards.
- [ ] Consistent cell shell; varied sizes only.
- [ ] Real media in cells; lazy-load off-screen; `onerror` fallback.
- [ ] No `<img>` hover-scale; animate the cell instead.
- [ ] Restrained header (eyebrow count ≤ ceil(sections/3)).
