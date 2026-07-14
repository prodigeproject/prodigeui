# Craft Pattern — Scroll Parallax

## What it delivers
Depth by moving layers at different speeds relative to scroll. Background elements move
slower than foreground, or columns drift in opposite directions. Used for gallery
sections, decorative floats, and "explorations" walls.

## When to use
Portfolio galleries, marketing storytelling sections, decorative depth. NOT on
content-first / reading pages where it fights legibility. Parallax is craft when it
serves atmosphere; it's slop when it's on a blog post.

## The recipe (React + Framer Motion)

```tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function ParallaxColumn({ items, speed }: { items: string[]; speed: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // speed > 0 moves up faster, < 0 drifts down. Column B uses the inverse of column A.
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed]);
  return (
    <motion.div ref={ref} style={{ y }} className="flex flex-col gap-12">
      {items.map((src, i) => (
        <img key={i} src={src} className="aspect-square max-w-[320px] rounded-3xl object-cover" />
      ))}
    </motion.div>
  );
}
```

## Lightweight variant (no dependency — passive scroll listener)

```tsx
useEffect(() => {
  const onScroll = () => {
    const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
    rowRef.current!.style.transform = `translateX(${offset - 200}px)`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

## Craft notes
- **Opposite directions read as depth.** Two columns, one drifting up, one down, is more
  convincing than a single slow layer.
- **Keep displacement modest** (100–250px). Extreme parallax causes motion sickness and
  reveals empty gaps.
- **`will-change: transform`** on parallax layers, and always a **passive** scroll
  listener so scrolling stays smooth.
- **Pin + parallax combo:** pin a centered heading with `position: sticky` while image
  columns parallax past it — a signature "explorations" layout.

## Performance
- Transform only. Never animate `top`/`margin` on scroll.
- Debounce is unnecessary with `passive: true` + transform; the browser composits it.

## Reduced motion
`prefers-reduced-motion` → set all parallax `y`/`x` to 0 and render a static grid. This
is mandatory: parallax is a top offender for vestibular discomfort.
