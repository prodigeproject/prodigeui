# Craft Pattern — Video Hero with Crossfade Loop

## What it delivers
A full-bleed background video that loops **seamlessly** — no visible jump at the loop
point. The trick is a JS-driven opacity crossfade near the end of playback, driven by
`requestAnimationFrame` (not CSS transitions, which snap and fight each other). This is
the single most impactful "cinematic" hero technique and appears across most reference
landing pages.

## When to use
Landing pages, product launches, brand sites, portfolios. Any hero where you want
motion and atmosphere without building a canvas scene. Do NOT use on data-dense apps.

## The recipe (React + TypeScript)

```tsx
import { useEffect, useRef } from 'react';

const FADE_MS = 500;          // fade duration
const FADE_OUT_LEAD = 0.55;   // seconds before end to start fading out

function FadingVideo({ src, className = '', style }: {
  src: string; className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOut = useRef(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // rAF fade that resumes from the CURRENT opacity (never snaps)
    const fadeTo = (target: number) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const start = parseFloat(v.style.opacity || '0');
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - t0) / FADE_MS, 1);
        v.style.opacity = String(start + (target - start) * p);
        if (p < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const onLoaded = () => { v.style.opacity = '0'; v.play().catch(() => {}); fadeTo(1); };
    const onTime = () => {
      if (!fadingOut.current && v.duration - v.currentTime <= FADE_OUT_LEAD
          && v.duration - v.currentTime > 0) {
        fadingOut.current = true; fadeTo(0);
      }
    };
    const onEnded = () => {
      v.style.opacity = '0';
      setTimeout(() => { v.currentTime = 0; v.play().catch(() => {}); fadingOut.current = false; fadeTo(1); }, 100);
    };

    v.addEventListener('loadeddata', onLoaded);
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('ended', onEnded);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      v.removeEventListener('loadeddata', onLoaded);
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <video ref={ref} src={src} muted playsInline preload="auto"
      className={className} style={{ opacity: 0, ...style }} />
  );
}
```

Usage in a hero:

```tsx
<section className="relative min-h-screen overflow-hidden bg-black">
  <FadingVideo
    src={VIDEO_URL}
    className="absolute inset-0 h-full w-full object-cover"
  />
  {/* No dark overlay unless text contrast requires it — the liquid-glass chrome
      provides contrast instead. If you must, use a subtle bottom gradient only. */}
  <div className="relative z-10 flex min-h-screen flex-col">
    {/* nav + hero content */}
  </div>
</section>
```

## Craft notes
- **`loop` is OFF.** You implement looping manually via `ended` so you control the fade.
- **Resume from current opacity.** Reading `v.style.opacity` each fade prevents flicker
  when a fade-in interrupts a fade-out.
- **Cancel the previous rAF** before starting a new one — competing loops cause jitter.
- **Focal framing.** If the interesting content is in one part of the frame, scale to
  `120%` and use `object-top` / `object-position` to crop the boring part.
- **Contrast comes from chrome, not dimming.** Prefer liquid-glass panels over a flat
  black overlay that mutes the video.

## Performance
- `preload="auto"`, `muted`, `playsInline` are required for autoplay on mobile.
- Only `opacity` animates → GPU-friendly, no layout thrash.
- Serve compressed MP4 (H.264) or use the HLS pattern for adaptive bitrate.

## Reduced motion
```tsx
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```
If reduced motion is requested: render the video with a `poster` frame and do **not**
autoplay, OR replace with a static hero image. Never force looping motion on users who
opted out.

## Portability
The crossfade logic is framework-agnostic — the same event listeners work in vanilla JS.
Only the `useEffect`/`useRef` wrapper is React-specific.
