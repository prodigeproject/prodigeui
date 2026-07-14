# Craft Pattern — Grain / Noise Overlay

## What it delivers
A subtle film-grain texture layered over the page or a hero. It's the smallest change
with the biggest anti-"flat AI" payoff: flat gradients and solid color fields look cheap;
a faint grain gives them a tactile, printed, cinematic quality.

## When to use
Over solid color heroes, flat gradients, video, and dark backgrounds. Nearly universal
for expressive pages. Skip on dense data UIs where it adds visual noise to content.

## The recipe (inline SVG data URI — no image asset needed)

```tsx
function GrainOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-50"
      style={{
        opacity: 0.4,
        backgroundSize: '200px 200px',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
```

As a reusable CSS utility:

```css
.grain::after {
  content: '';
  position: absolute; inset: 0;
  pointer-events: none;
  opacity: 0.4;
  background-size: 200px 200px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}
```

## Craft notes
- **Two opacity knobs:** the `opacity` inside the SVG (`0.08`) controls grain intensity;
  the container `opacity` (`0.4`) controls overall presence. Tune both — too much looks
  dirty, too little is invisible. Sweet spot: SVG 0.05–0.1, container 0.3–0.5.
- **`baseFrequency` sets grain size.** `0.9` = fine film grain; lower = coarser, blotchy.
- **`numOctaves` adds detail** — 4 is rich; 1–2 is smoother.
- **`mix-blend-mode: overlay`** integrates the grain with the colors beneath instead of
  sitting on top as gray fuzz.
- **`pointer-events-none` + top z-index** so it covers everything without blocking clicks.

## Performance
- The SVG data URI is tiny and cached; no network request, no image file.
- Tiling `200px` keeps GPU memory low. Avoid full-viewport non-repeating noise textures.

## Reduced motion
Static grain has no motion — always safe. (Do not animate grain position; animated noise
is both expensive and a vestibular trigger.)

## Portability
Pure CSS/SVG — works in any framework or plain HTML.
