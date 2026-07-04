# Asset Sourcing Guide — Rich Media for Craft

> The reference sites we benchmark against are NOT built from gray placeholder boxes and
> icon fonts. They use real video, real photography, real illustration. Media is not
> decoration — it IS the design in an expressive hero. This guide covers how to source,
> reference, preload, and degrade rich media so craft output looks finished, not wireframed.
>
> The existing `assets.manifest.json` covers icons/fonts/illustrations metadata. This guide
> covers the strategy the manifest was missing: **how to actually use rich media in output.**

## The rule: never ship placeholder boxes on expressive work

A `bg-gray-200` rectangle where an image should be is the #1 tell of unfinished AI output.
For expressive use-cases, either use a real asset or generate a meaningful visual (gradient
mesh with intent, CSS art, SVG). "Image goes here" is a failure state.

## Media types and where they fit

| Media | Best for | Craft recipe |
|-------|----------|--------------|
| Looping video (MP4) | Cinematic heroes, feature cards | `craft/patterns/video-hero-crossfade.md` |
| HLS stream (.m3u8) | Heavy/long background video | `craft/patterns/hls-video.md` |
| Photography (webp) | Product, portrait, editorial | `bento-grid.md`, `sticky-card-stack.md` |
| GIF/animated preview | Gallery tiles, showreels | `marquee.md`, `scroll-parallax.md` |
| SVG / inline art | Logos, decorative, ghost shapes | `fluid-display-type.md` ghost text |
| Grain / noise | Texture over everything | `grain-noise-overlay.md` (no asset needed) |

## Sourcing strategy (in priority order)

1. **User-provided assets.** If the brief includes URLs or files, use those EXACTLY
   (Enhancement Mode). This is always first choice.
2. **Project asset directory.** Check `assets/` and the project's own `public/` or
   `src/assets/` before reaching outward.
3. **Reputable free stock (attribution-aware).** For placeholders that must look real:
   - Photography: Unsplash Source, Pexels, Picsum (`https://picsum.photos/1280/720`).
   - Video: Coverr, Mixkit, Pexels Video (free-to-use loops).
   - Verify license before shipping to production; note it in the delivery.
4. **Generated visuals.** When no real asset fits, generate intent-driven visuals rather
   than gray boxes: a concept-derived gradient, a duotone-treated photo, CSS/SVG shapes,
   an animated gradient mesh. These read as designed.
5. **Never** invent broken URLs or link to assets you can't verify resolve. A broken image
   is worse than a tasteful placeholder gradient.

## Referencing media in generated code

### Critical: hero/showcase images should degrade gracefully

Browser security interventions (e.g., VS Code Simple Browser, sandboxed iframes, `file://`
protocol) can replace `<img>` elements with placeholder shapes when external URLs cannot be
fetched. To prevent visual degradation:

**Recommended for hero/showcase images:** CSS `background-image` on a `<div>` with a solid
`background-color` fallback. CSS backgrounds are not intercepted by image-replacement
interventions.
```html
<div class="heroshot">
  <div class="heroshot-img" role="img"
       aria-label="Descriptive alt text"
       style="background: var(--surface-2) url('...') center/cover no-repeat">
  </div>
</div>
```

**Alternative (standard `<img>`):** acceptable, but include `onerror` fallback and a
`background-color` so the element degrades to a colored rectangle, not a browser-chosen
placeholder shape.

### Standard `<img>` pattern

```tsx
<img
  src={SRC}
  alt="Descriptive alt text — required, not decorative unless truly decorative"
  width={1280} height={720}
  loading="lazy"                 // off-screen media
  decoding="async"
  style="background:var(--surface-2)"
  className="h-full w-full object-cover"
  onError={(e) => { e.target.removeAttribute('src'); }}
/>
```

For hero/above-the-fold media use `loading="eager"` (or preload); for everything else
`loading="lazy"`.

## Preloading (perceived performance is craft)

```tsx
// Preload the critical hero image(s) on mount so the first paint is complete.
useEffect(() => {
  [HERO_1, HERO_2].forEach((src) => { const img = new Image(); img.src = src; });
}, []);
```

```html
<!-- Or declaratively in <head> for the LCP asset -->
<link rel="preload" as="image" href="/hero.webp" />
<link rel="preload" as="video" href="/hero.mp4" type="video/mp4" />
```

Carousels/galleries: preload ALL frames on mount so navigation is instant (this is the
exact fix for the "swipe felt heavy / images popped in" benchmark regression).

## DO NO HARM checklist for media (Enhancement Mode)

The earlier benchmark degraded because the enhancement layer broke media. Never repeat it:
- [ ] Every image/video URL from the brief is used verbatim and actually resolves.
- [ ] No `loading="lazy"` on the LCP hero (it delays the most important asset).
- [ ] No `IntersectionObserver`/`will-change`/touch handler added that stalls a swipe or
      blocks paint. If an "optimization" makes interaction heavier, remove it.
- [ ] Carousels preload all frames; transitions use `transform`/`opacity` only.
- [ ] `onError` fallback exists so a failed asset degrades gracefully, never a broken icon.

## Fonts (display + body)

Craft typography needs real display fonts. Load them properly:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```
- `display=swap` prevents invisible text during load.
- Preload the display face used above the fold.
- See `craft/patterns/fluid-display-type.md` for pairing guidance.

## Accessibility & licensing

- **Alt text** on all meaningful images; `alt=""` + `aria-hidden` only for pure decoration.
- **Reduced motion:** video/animated media must have a static poster fallback under
  `prefers-reduced-motion` (see each craft recipe).
- **License:** record the source and license of any third-party asset in the delivery
  notes. Prefer CC0 / royalty-free for shipped placeholders; flag anything that needs a
  paid license before production.

## Related
- `assets/assets.manifest.json` — icon/font/illustration registry
- `craft/` — every recipe that consumes media links back here
