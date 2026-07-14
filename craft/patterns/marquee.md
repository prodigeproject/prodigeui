# Craft Pattern — Marquee (infinite + scroll-driven)

## What it delivers
A horizontally scrolling ticker of logos, images, or text. Two flavors: an **always-on
infinite loop** (brand strip, "trusted by") and a **scroll-driven** version where scroll
position drives horizontal offset (gallery rows moving opposite directions).

## When to use
Logo walls, image galleries, announcement bars, kinetic type sections. A pair of rows
moving in opposite directions is a strong, low-cost signature.

## Infinite loop (pure CSS — most performant)

```css
@keyframes marquee { to { transform: translateX(-50%); } }
.marquee { display: flex; width: max-content; animation: marquee 40s linear infinite; }
.marquee:hover { animation-play-state: paused; } /* optional */
@media (prefers-reduced-motion: reduce) { .marquee { animation: none; } }
```

```tsx
// Duplicate the list once so translateX(-50%) loops seamlessly.
<div className="overflow-hidden">
  <div className="marquee gap-12">
    {[...logos, ...logos].map((l, i) => <img key={i} src={l} className="h-10" />)}
  </div>
</div>
```

## Scroll-driven, opposite rows (React)

```tsx
const [offset, setOffset] = useState(0);
useEffect(() => {
  const onScroll = () => {
    const rect = sectionRef.current!.getBoundingClientRect();
    setOffset((window.innerHeight - rect.top) * 0.3);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);

// Row 1 moves right, row 2 moves left. Triple the list for headroom.
<div style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}>…</div>
<div style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}>…</div>
```

## Craft notes
- **Duplicate content for the CSS loop** (`[...items, ...items]`) and translate by `-50%`
  so the seam is invisible.
- **Two rows, opposite directions** create energy without chaos — a reference favorite.
- **Pause on hover** is a nice touch for logo/link marquees, skip it for ambient strips.
- **`linear` timing** — marquees must move at constant speed; eased timing looks broken.

## Performance
- Prefer the **CSS keyframe** version; it runs off the main thread.
- Scroll-driven version: transform + passive listener + `will-change: transform`.
- Lazy-load marquee images (`loading="lazy"`); a logo wall can be many assets.

## Reduced motion
Infinite marquees are decorative and MUST stop under `prefers-reduced-motion` — render a
static wrapped row instead. Scroll-driven marquees should freeze at offset 0.
