# Craft Pattern — Cursor Spotlight Mask

## What it delivers
A second image revealed only inside a soft, glowing circle that trails the cursor over a
base image. It reads as "peeling back a layer" — highly memorable for storytelling
heroes (geology, x-ray, before/after, hidden detail). Built with a canvas-generated
radial mask applied to a CSS `mask-image`.

## When to use
Editorial and narrative heroes where two images tell a story (surface vs interior,
day vs night, sketch vs render). One per page — it's a signature moment.

## The recipe (React + TypeScript)

```tsx
import { useEffect, useRef, useState } from 'react';

const SPOTLIGHT_R = 260;

function useSmoothedCursor() {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const raw = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const raf = useRef<number | null>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => { raw.current = { x: e.clientX, y: e.clientY }; };
    const loop = () => {
      smooth.current.x += (raw.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (raw.current.y - smooth.current.y) * 0.1;
      setPos({ x: smooth.current.x, y: smooth.current.y });
      raf.current = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(loop);
    return () => { window.removeEventListener('mousemove', onMove); if (raf.current) cancelAnimationFrame(raf.current); };
  }, []);
  return pos;
}

function RevealLayer({ image, x, y }: { image: string; x: number; y: number }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [mask, setMask] = useState('');
  useEffect(() => {
    const c = canvas.current; if (!c) return;
    c.width = window.innerWidth; c.height = window.innerHeight;
    const ctx = c.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, c.width, c.height);
    const g = ctx.createRadialGradient(x, y, 0, x, y, SPOTLIGHT_R);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.4, 'rgba(255,255,255,1)');
    g.addColorStop(0.6, 'rgba(255,255,255,0.75)');
    g.addColorStop(0.75, 'rgba(255,255,255,0.4)');
    g.addColorStop(0.88, 'rgba(255,255,255,0.12)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, SPOTLIGHT_R, 0, Math.PI * 2); ctx.fill();
    setMask(c.toDataURL());
  }, [x, y]);
  return (
    <>
      <canvas ref={canvas} style={{ display: 'none' }} />
      <div
        className="absolute inset-0 z-30 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url(${image})`,
          maskImage: `url(${mask})`, WebkitMaskImage: `url(${mask})`,
          maskSize: '100% 100%', WebkitMaskSize: '100% 100%',
        }}
      />
    </>
  );
}
```

Compose:

```tsx
function Hero() {
  const { x, y } = useSmoothedCursor();
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-10 bg-cover bg-center" style={{ backgroundImage: `url(${BASE})` }} />
      <RevealLayer image={REVEAL} x={x} y={y} />
      {/* headings at z-50 */}
    </section>
  );
}
```

## Craft notes
- **Smoothing (lerp 0.1) is essential** — a raw cursor position makes the spotlight
  jittery. The eased trail feels liquid.
- **The gradient stops matter.** Full white to ~0.4 radius, then a long soft falloff.
  A hard-edged circle looks like a cheap flashlight; the feathered edge sells it.
- **Canvas → dataURL → CSS mask** keeps the reveal a real DOM element (crisp, scalable),
  unlike drawing the image into canvas directly.

## Performance
- Regenerating `toDataURL()` every frame is the cost. Keep the canvas at viewport size,
  not device-pixel-ratio scaled, and throttle if needed on low-end devices.
- Everything else is GPU compositing.

## Reduced motion
Disable the trailing entirely: show the base image only, or reveal the second image via
a static hover/tap region. Do not run the rAF loop when motion is reduced.
