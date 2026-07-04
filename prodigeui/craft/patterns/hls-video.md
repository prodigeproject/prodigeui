# Craft Pattern — HLS / Streaming Background Video

## What it delivers
Adaptive-bitrate background video via HLS (`.m3u8`) using `hls.js`. Unlike a single MP4,
HLS serves the right quality for the viewer's bandwidth and starts faster — important for
heavy cinematic hero/footer videos.

## When to use
When the background video is large or you want fast start + adaptive quality. For short,
small clips a plain MP4 (see `video-hero-crossfade.md`) is simpler.

## The recipe (React + TypeScript + hls.js)

```tsx
import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

function HlsVideo({ src, className = '' }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current; if (!v) return;
    let hls: Hls | undefined;
    if (Hls.isSupported()) {
      hls = new Hls({ maxBufferLength: 10 });
      hls.loadSource(src);
      hls.attachMedia(v);
    } else if (v.canPlayType('application/vnd.apple.mpegurl')) {
      v.src = src; // native HLS (Safari)
    }
    v.play().catch(() => {});
    return () => { hls?.destroy(); };
  }, [src]);

  return (
    <video
      ref={ref}
      autoPlay muted loop playsInline
      className={`absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover ${className}`}
    />
  );
}
```

Compose with overlays:

```tsx
<section className="relative h-screen overflow-hidden bg-bg">
  <HlsVideo src="https://stream.mux.com/XXXX.m3u8" />
  <div className="absolute inset-0 bg-black/20" />
  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
  <div className="relative z-10">…content…</div>
</section>
```

## Craft notes
- **`min-w-full min-h-full` + centered translate** guarantees full cover at any aspect
  ratio without letterboxing.
- **A light `bg-black/20` + a bottom fade** to the page background blends the video into
  the layout and improves text contrast without killing the footage.
- **Flip for a footer reprise:** reuse the same source with `scale-y-[-1]` and a heavier
  overlay for a mirrored closing section — a cheap, cohesive callback.

## Performance
- `maxBufferLength: 10` keeps memory down for a background loop.
- Always `hls.destroy()` on unmount to release the media stream.
- Provide a `poster` for the pre-buffer frame.

## Reduced motion
Under `prefers-reduced-motion`, don't attach HLS/autoplay — render the `poster` image.

## Dependency
`npm i hls.js`. ~40kb gzipped; only load it where a stream is actually used (dynamic
import for below-the-fold footer videos).
