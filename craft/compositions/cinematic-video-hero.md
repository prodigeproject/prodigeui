# Composition — Cinematic Video Hero

The most common award-quality skeleton (≈22 of 73 benchmark prompts). A full-bleed real
video is the focal subject; minimal glass chrome floats over it; a choreographed entrance
brings in the copy. Legibility comes from glass + a gradient fade, NOT a flat dark overlay.

## When to use
Brand, product, agency, launch, wellness, portfolio — anywhere atmosphere matters and you
have (or can source) a fitting looping video.

## The spine (z-index layering)
```
z0   full-bleed <video> (object-cover, real footage)
z1   subtle bottom gradient fade to page bg (legibility, NOT a full dark scrim)
z10  floating glass pill nav (top)
z10  hero content — centered OR bottom-anchored, max 4 text elements
z20  optional single floating glass widget (stat / now-playing / badge)
z50  grain overlay (fixed, pointer-events:none)
```

## Complete skeleton (standalone HTML; ports directly to React)
```html
<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- Deliberate display face (run the reflex-reject procedure; this is ONE example) -->
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{ --bg:#0a0a0b; --text:#f4f2ee; --muted:rgba(244,242,238,.72); --accent:#ff6a3d; }
*{margin:0;box-sizing:border-box} body{background:var(--bg);color:var(--text);font-family:Inter,sans-serif;-webkit-font-smoothing:antialiased}
.hero{position:relative;min-height:100svh;overflow:hidden;display:flex;flex-direction:column}
.hero video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
.fade{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(10,10,11,.35)0%,transparent 30%,transparent 60%,rgba(10,10,11,.85)100%)}
.grain{position:fixed;inset:0;z-index:50;pointer-events:none;opacity:.35;mix-blend-mode:overlay;background-size:200px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E")}
.glass{background:rgba(255,255,255,.02);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);box-shadow:inset 0 1px 1px rgba(255,255,255,.1);position:relative;overflow:hidden}
.glass::before{content:'';position:absolute;inset:0;border-radius:inherit;padding:1.4px;background:linear-gradient(180deg,rgba(255,255,255,.45),rgba(255,255,255,.12)20%,transparent 40%,transparent 60%,rgba(255,255,255,.12)80%,rgba(255,255,255,.45));-webkit-mask:linear-gradient(#fff 0 0)content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}
nav{position:relative;z-index:10;margin:20px auto 0;width:calc(100% - 32px);max-width:1080px;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 22px;border-radius:999px}
nav .brand{font-weight:600;letter-spacing:.22em;font-size:14px}
nav .links{display:none;gap:4px} nav .links a{color:var(--muted);text-decoration:none;font-size:14px;padding:8px 14px;border-radius:999px;transition:background-color .2s,color .2s}
nav .links a:hover{background:rgba(255,255,255,.08);color:#fff}
nav .cta{background:var(--text);color:var(--bg);border:none;font:600 14px Inter;padding:10px 18px;border-radius:999px;cursor:pointer}
@media(min-width:860px){nav .links{display:flex}}
.body{position:relative;z-index:10;flex:1;display:flex;flex-direction:column;justify-content:flex-end;padding:0 24px 64px;max-width:1080px;margin:0 auto;width:100%}
.eyebrow{color:var(--muted);font-size:12px;letter-spacing:.28em;text-transform:uppercase;margin-bottom:18px}
h1{font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;font-size:clamp(2.6rem,8vw,6.5rem);line-height:.95;letter-spacing:-.02em;max-width:16ch}
.lead{color:var(--muted);font-size:clamp(1rem,1.5vw,1.15rem);line-height:1.6;max-width:48ch;margin-top:22px}
.actions{display:flex;gap:14px;margin-top:30px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:10px;background:var(--accent);color:#1a0d07;font:600 15px Inter;padding:15px 26px;border-radius:999px;border:none;cursor:pointer}
.ghost{padding:15px 26px;border-radius:999px;color:var(--text);font:500 15px Inter;cursor:pointer}
.rise{opacity:0;transform:translateY(24px)}
.rise.in{opacity:1;transform:none;transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:6px}
@media(prefers-reduced-motion:reduce){.rise{opacity:1!important;transform:none!important;transition:none!important}}
</style></head>
<body>
<section class="hero">
  <video autoplay muted loop playsinline poster="/hero-poster.jpg"
    src="REAL_VIDEO_URL.mp4"></video>
  <div class="fade"></div>
  <nav class="glass" aria-label="Primary">
    <span class="brand">BRAND</span>
    <div class="links"><a href="#">Work</a><a href="#">Studio</a><a href="#">Process</a><a href="#">Contact</a></div>
    <button class="cta">Start a project</button>
  </nav>
  <div class="body">
    <p class="eyebrow rise" data-d="0">Creative studio — est. 2019</p>
    <h1 class="rise" data-d="150">We build brands<br>that move.</h1>
    <p class="lead rise" data-d="320">One decisive line of value. Concrete, specific, under twenty words.</p>
    <div class="actions rise" data-d="460">
      <button class="btn">See the work</button>
      <button class="ghost">Watch showreel</button>
    </div>
  </div>
</section>
<div class="grain" aria-hidden="true"></div>
<script>
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.querySelectorAll('.rise').forEach(el=>{
  if(reduce){el.classList.add('in');return;}
  setTimeout(()=>el.classList.add('in'),+(el.dataset.d||0));
});
</script>
</body></html>
```

## Wiring the techniques
- **Seamless loop:** upgrade the plain `loop` video to the rAF crossfade in
  `patterns/video-hero-crossfade.md`, or `patterns/hls-video.md` for heavy footage.
- **Headline:** upgrade the CSS `.rise` to word-by-word blur-in (`patterns/text-reveal.md`).
- **Widget (optional, ONE):** a single glass stat/now-playing card at z20, bottom-right.
- **Multi-video ambience switcher:** labeled buttons crossfade 3–4 videos (benchmark 67/68).

## Craft checklist (before shipping)
- [ ] Real video (or real image) — NOT a gradient/mesh. Preloaded + poster + `onerror`.
- [ ] Legibility from the bottom gradient + glass, not a flat dark scrim.
- [ ] Max 4 text elements in the hero; headline ≤ 2 lines; CTA visible without scroll.
- [ ] One accent, one display face (reflex-rejected), tight tracking.
- [ ] Entrance is a staggered timeline; reduced-motion renders final state.
- [ ] Contrast ≥ 4.5:1 verified over the ACTUAL darkest video frame.

## Common failure (do not do this)
Replacing the video with an animated blurred CSS gradient mesh "because it's easier / no
asset." That is the NOVA failure — a hero with no real focal subject reads as empty and
generic. If you truly have no media, use the **giant-type-hero** composition instead (type
becomes the subject), not a gradient blob.
