# Craft Pattern — Sticky Card Stack

## What it delivers
Cards that pin to the viewport and scale down slightly as the next card scrolls up over
them, creating a layered "deck" effect. A staple of premium portfolio and project
showcases.

## When to use
Project galleries, case-study lists, feature walkthroughs — anywhere sequential cards
benefit from a sense of depth and deliberate pacing.

## The recipe (React + TypeScript + Framer Motion)

```tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function StackCard({ i, total, children }: {
  i: number; total: number; children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  // Each card scales to a slightly smaller target so lower cards recede.
  const targetScale = 1 - (total - 1 - i) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="sticky top-24 md:top-32 h-[85vh] flex items-center justify-center">
      <motion.div
        style={{ scale, top: `${i * 28}px` }}
        className="relative w-full max-w-4xl rounded-[40px] border-2 border-white/80 bg-black p-6 md:p-8"
      >
        {children}
      </motion.div>
    </div>
  );
}

function ProjectStack({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-black">
      {projects.map((p, i) => (
        <StackCard key={p.id} i={i} total={projects.length}>
          {/* card content: number, title, image grid, CTA */}
        </StackCard>
      ))}
    </section>
  );
}
```

## Craft notes
- **`sticky top-*` inside a tall container** is what pins each card. The container height
  (`h-[85vh]`) defines how long each card stays pinned before releasing.
- **`targetScale = 1 - (total - 1 - i) * 0.03`** makes earlier cards shrink more as the
  stack grows — the deck reads front-to-back.
- **`top: ${i * 28}px`** offsets each pinned card slightly so edges peek out, reinforcing
  the stack.
- **Heavy border-radius + a visible border** on a dark card is the reference look; pair
  with a two-column image grid inside (40% / 60% split) for editorial rhythm.

## Performance
- Only `scale` transforms — GPU friendly.
- Keep card count reasonable (3–6). Long stacks create long scroll regions.

## Reduced motion
Under `prefers-reduced-motion`, drop the scale transform and render the cards as a normal
vertical list (remove `sticky` or keep it without the scaling). The content is identical.

## Portability
Achievable in pure CSS `position: sticky` for the pinning; the scale-on-scroll needs a
scroll listener or Framer Motion / GSAP ScrollTrigger.
