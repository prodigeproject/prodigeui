# Craft Pattern — Magnetic Hover

## What it delivers
An element that is gently "pulled" toward the cursor when the pointer is near it, then
eases back when the pointer leaves. Applied to buttons, portraits, logos, or CTA pills,
it adds a tactile, premium feel that reads as hand-crafted rather than templated.

## When to use
Hero portraits, primary CTAs, feature icons, playful brand marks. Use sparingly — one
or two magnetic elements per view. On touch devices it does nothing (no hover), so it is
a progressive enhancement, never a load-bearing interaction.

## The recipe (React + TypeScript)

```tsx
import { useRef, useState, useCallback } from 'react';

function Magnet({ children, padding = 120, strength = 3 }: {
  children: React.ReactNode; padding?: number; strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const near =
      Math.abs(dx) < r.width / 2 + padding &&
      Math.abs(dy) < r.height / 2 + padding;
    if (near) { setActive(true); setPos({ x: dx / strength, y: dy / strength }); }
    else { setActive(false); setPos({ x: 0, y: 0 }); }
  }, [padding, strength]);

  const reset = () => { setActive(false); setPos({ x: 0, y: 0 }); };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
```

Usage:

```tsx
<Magnet padding={150} strength={3}>
  <img src={PORTRAIT} className="w-[440px]" draggable={false} />
</Magnet>
```

## Craft notes
- **Asymmetric easing is the secret.** Fast follow while active (`0.3s ease-out`), slow
  luxurious return when the pointer leaves (`0.6s ease-in-out`). Symmetric timing feels
  robotic.
- **`strength` divides the offset** — higher = subtler pull. 3–4 is tasteful; 1–2 is
  aggressive/playful.
- **`padding` is the activation halo** beyond the element's edge, so the pull begins
  before the cursor actually touches it.
- **`translate3d`** forces GPU compositing; combined with `will-change: transform` it
  stays at 60fps.

## Performance
- Only `transform` animates. Keep `will-change: transform` on the wrapper (it's cheap
  for a single transform); do not add it to dozens of elements at once.
- Prefer wrapping a handful of hero elements, not entire grids.

## Reduced motion
Wrap activation in a reduced-motion check and skip the effect entirely:

```tsx
const reduce = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// if (reduce) render children without the Magnet wrapper
```

## Portability
The math is framework-agnostic. In vanilla JS, attach `mousemove` to the element and set
`el.style.transform` directly with the same easing swap.
