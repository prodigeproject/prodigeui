# Craft Pattern — Text Reveal (word / char / scroll-linked)

## What it delivers
Choreographed headline and paragraph entrances. Three variants that cover almost every
reference site:
1. **Word blur-in** — words fade + un-blur + rise, staggered. Cinematic hero headlines.
2. **Char slide-in** — characters translate in with per-character delay. Precise, techy.
3. **Scroll-linked opacity sweep** — a paragraph brightens character-by-character as it
   scrolls through the viewport. Editorial, premium.

This is motion *choreography*, not a duration token — it's the difference between "text
appears" and "text performs."

## Variant 1 — Word blur-in (Framer Motion)

```tsx
import { motion } from 'framer-motion';

function BlurText({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ');
  return (
    <p className={`flex flex-wrap ${className}`} style={{ rowGap: '0.1em' }}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          whileInView={{
            filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
            opacity: [0, 0.5, 1],
            y: [50, -5, 0],
          }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, times: [0, 0.5, 1], ease: 'easeOut', delay: i * 0.1 }}
        >
          {w}
        </motion.span>
      ))}
    </p>
  );
}
```

## Variant 2 — Char slide-in (no dependency)

```tsx
function AnimatedHeading({ text, startDelay = 200, charDelay = 30 }: {
  text: string; startDelay?: number; charDelay?: number;
}) {
  return (
    <h1 style={{ letterSpacing: '-0.04em' }}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: 0,
            transform: 'translateX(-18px)',
            animation: `charIn 500ms cubic-bezier(0.16,1,0.3,1) forwards`,
            animationDelay: `${startDelay + i * charDelay}ms`,
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </h1>
  );
}
/* @keyframes charIn { to { opacity: 1; transform: translateX(0); } } */
```

## Variant 3 — Scroll-linked opacity sweep (Framer Motion)

```tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function AnimatedParagraph({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const chars = text.split('');
  return (
    <p ref={ref} className="leading-relaxed">
      {chars.map((ch, i) => {
        const start = i / chars.length;
        const opacity = useTransform(scrollYProgress, [start - 0.1, start + 0.05], [0.2, 1]);
        return <motion.span key={i} style={{ opacity }}>{ch}</motion.span>;
      })}
    </p>
  );
}
```

## Craft notes
- **Stagger is the whole point.** `delay: i * 0.1` for words, `i * 30ms` for chars.
  Without stagger it's just a fade.
- **3-step keyframes** (blur→half→sharp, y 50→-5→0) create a subtle overshoot that reads
  as physical settling. Two-step fades look flat.
- **Negative tracking on large headings** (`-0.02em` to `-0.04em`) is essential — big
  type set at default tracking looks amateur. See `fluid-display-type.md`.
- **Scroll-sweep offset** `['start 0.8', 'end 0.2']` means the sweep runs while the
  paragraph travels from near-bottom to near-top of the viewport.

## Performance
- Animate `opacity`, `filter`, and `transform` only.
- For very long paragraphs, the per-char `useTransform` approach creates many motion
  values; cap scroll-sweep to headlines and short intros, not body copy walls.

## Reduced motion
```tsx
// Under prefers-reduced-motion: render text at final state, no stagger.
// For scroll-sweep, set all chars to opacity 1 and skip the useScroll binding.
```
Every variant must render the fully-legible final text when motion is disabled.
