# Craft Pattern — Liquid Glass

## What it delivers
The Apple-style translucent "liquid glass" surface: a barely-there fill, a real backdrop
blur, and a **gradient border rendered via a mask trick** (not a flat 1px border). This
is the single most reused chrome technique on modern video-hero landing pages — nav bars,
pills, chips, cards, and CTAs all sit on it. It gives contrast over busy backgrounds
without dimming them.

## When to use
Over photography, video, or rich gradients where a solid panel would look heavy. Nav
bars, badges, stat cards, CTAs, tag pills. Pairs perfectly with the video-hero pattern.

## The recipe (pure CSS — portable to any framework)

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

/* Gradient BORDER via mask compositing — the key craft detail.
   The ::before is a full-size gradient; the mask keeps only the 1.4px ring. */
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0)    40%,
    rgba(255,255,255,0)    60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
}

/* Heavier variant for primary CTAs / floating panels */
.liquid-glass-strong {
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
}
```

For dark backgrounds, swap the fill to `rgba(0,0,0,0.4)` and drop the border-gradient
opacities to `0.3 / 0.1 / 0`.

## Usage

```tsx
<nav className="liquid-glass rounded-full px-2 py-2 flex items-center gap-1">
  {links.map((l) => (
    <a key={l} className="px-3 py-2 text-sm font-medium text-white/90">{l}</a>
  ))}
  <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm text-white">
    Get started
  </button>
</nav>
```

## Craft notes
- **The mask trick is what sells it.** A plain `border: 1px solid rgba(255,255,255,.2)`
  looks cheap. The vertical gradient ring (bright at top/bottom, invisible mid-sides)
  mimics how light catches a real glass edge.
- **Radius must be `inherit`** on the `::before` so the ring follows pill/rounded shapes.
- **Keep the fill near-transparent** (`0.01`). The blur + border do the work; a heavy
  fill kills the "glass" read.
- **`background-blend-mode: luminosity`** subtly desaturates what's behind, improving
  text legibility without a dark overlay.

## Performance
- `backdrop-filter` is GPU-accelerated but expensive at large sizes — use `blur(4px)`
  for chrome, reserve `blur(50px)` for small primary elements.
- Avoid stacking many strong-blur panels over video simultaneously on low-end devices.

## Reduced motion
Liquid glass is static, so no motion concern. If you animate its entrance, respect
`prefers-reduced-motion` per the choreography guide.

## Accessibility
Verify text-on-glass contrast against the ACTUAL background behind it (the blurred
video/image), not against the glass fill. If contrast can't be guaranteed, add a subtle
`text-shadow` or increase fill opacity slightly rather than removing the effect.
