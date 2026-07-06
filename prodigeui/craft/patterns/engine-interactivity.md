# Engine-Level Interactivity — The "Premium Agency" Layer

> This is what separates a competent static page from work that feels ALIVE and
> professionally engineered. ProdigeUI's CSS craft (effects-catalog, advanced-effects) is
> the foundation — this doc adds the ENGINE layer that senior UI/UX devs ship: scroll-driven
> storytelling, real-time WebGL/3D, canvas systems, audio-reactivity, seamless transitions.
>
> **The core diagnosis:** output that feels "AI slop / conventional / static" is almost always
> missing engine-level interactivity, not missing CSS polish. A page that only fades in on
> scroll reads as a template. A page where scroll DRIVES a narrative, where a hero object
> responds to the pointer, where numbers and visuals feel physical — reads as crafted.

---

## When to reach for engine-grade (gated by dials)

From `craft/design-read.md`, use MOTION_INTENSITY to decide:

| MOTION_INTENSITY | Engine layer to add |
|------------------|---------------------|
| 1-3 (static/corporate) | CSS reveals only. No engine. |
| 4-6 (standard landing) | Lenis smooth scroll + ONE scroll-driven moment (pin or scrub) + count-up |
| 7-8 (premium/agency) | ScrollTrigger timeline storytelling + ONE WebGL/canvas hero element + cursor interaction |
| 9-10 (experimental/Awwwards) | Full scroll-choreographed 3D/shader scene, audio-reactive optional, view transitions |

**Mandatory rule:** For an agency/portfolio/premium/experimental brief (MOTION ≥ 7), a fully
static page (only CSS fade-ins) is a **FAIL** — it needs at least one engine-grade interactive
moment. At MOTION ≤ 6 (a plain B2B/SaaS/dashboard/trust-first surface) CSS craft + Lenis + ONE
scroll-driven moment is enough. BUT this is a floor, not a cap: a B2B product **positioned as
a premium launch** legitimately earns agency-grade motion (MOTION 8-9) — a concept-tied
particle/constellation field (e.g. "the network we observe"), pinned feature sequencing,
scrubbed product reveals. The caution is against RANDOM decoration and jank on a
working-tool surface, NOT against ambition on a marketing page. If the brief wants premium,
go premium (the FlowAI high-motion build is the reference). What is genuinely wrong is
bolting heavy WebGL onto the *in-app product UI* (dashboards, editors) where users work daily.
Three.js, shader backgrounds, particles, and audio-reactivity are MOTION 7+ moves.

**Always:** feature-detect, lazy-init on visibility, disable/reduce under
`prefers-reduced-motion`, and downgrade on mobile (no heavy WebGL on low-power devices).

**Anchor taste priority (learned the hard way — the NOVA v5 lesson).** "Engine-grade" is not
enough; the *choice* of engine element decides whether it reads premium or as AI-techy slop.
Rank the hero anchor best → worst and pick the highest that fits the concept:
1. **A real 3D product / object** (R3F/Three.js) — e.g. Infinite Machine's vehicle. Best when
   there's a physical or brandable object.
2. **A scroll-scrubbed real product-UI walkthrough** — pinned device/screen advancing through
   states (Plasma, Tokens Studio). Best for software.
3. **A restrained generative shader tied to the concept** (kept dim, behind content).
4. **A particle / constellation field — LAST resort.** Pointer-reactive dot-and-line fields
   and floating low-poly blobs are now clichés; they satisfy "moving pixels" while reading as
   generic. Use only with a genuine conceptual reason AND a distinct visual treatment, never
   as the default "make it feel alive" move. Prefer options 1–3.
Also prefer a **committed refined accent** on the anchor over a fluorescent one (see
`taste.md` anti-neon guard) — a neon particle field is the double-slop combination.

**Modern stack additions** (beyond the vanilla recipes below): in a React/Next context reach
for **React Three Fiber + drei** for option 1, **Framer Motion** for component/layout motion
and `whileInView`, and **WAAPI** (`element.animate`) for interruptible one-off
micro-interactions (button press, toast, count-up) instead of a library. View Transitions API
for state/page morphs. All still obey the auto-trigger + fallback contract at the bottom of
this file.

---

## 1. GSAP + ScrollTrigger — the scroll-engine (highest impact)

The single biggest "premium site" lever. Scroll becomes a timeline scrubber, not just a reveal trigger.

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
```

```js
gsap.registerPlugin(ScrollTrigger);

// A) SCRUB — animation progress tied directly to scroll position
gsap.to('.hero-visual', {
  scale: 1.4, opacity: 0.3,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,          // 1 = smooth catch-up; true = instant
  }
});

// B) PIN — hold a section in place while its content animates through
const panels = gsap.utils.toArray('.panel');
gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-wrap',
    pin: true,
    scrub: 1,
    end: () => '+=' + document.querySelector('.horizontal-wrap').offsetWidth,
  }
});  // horizontal pin-pan — the classic agency "sideways scroll" section

// C) TIMELINE storytelling — sequence multiple beats across one pinned section
const tl = gsap.timeline({
  scrollTrigger: { trigger: '.story', start: 'top top', end: '+=2000', pin: true, scrub: 1 }
});
tl.from('.story-title', { y: 60, opacity: 0 })
  .from('.story-img', { scale: 0.8, opacity: 0 }, '<0.2')
  .to('.story-title', { y: -40, opacity: 0 });

// D) BATCH reveal — performant staggered reveal for many items
ScrollTrigger.batch('.card', {
  onEnter: (els) => gsap.from(els, { y: 40, opacity: 0, stagger: 0.08, overwrite: true }),
  start: 'top 85%',
});
```

**Rules:** pin sparingly (1-2 pinned sections max per page — over-pinning traps the user).
Always set `scrub` a number (0.5-1.5) for smooth, not `true` (janky). Use
`ScrollTrigger.matchMedia()` to disable pinning on mobile. Kill triggers on route change in SPAs.

---

## 2. Lenis — smooth scroll (pairs with ScrollTrigger)

The buttery inertia scroll on nearly every award-winning site. ~2KB.

```html
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1/dist/lenis.min.js"></script>
```
```js
const lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

// Sync with ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
```
**Rules:** disable under `prefers-reduced-motion` (`new Lenis()` only if not reduced). Never
hijack scroll so hard that the scrollbar feels disconnected — `duration` ≤ 1.2. Provide a
plain-scroll fallback. Don't use on content-heavy docs/dashboards where users scan fast.

---

## 3. Three.js — real-time 3D scene (web, RAF-driven)

For a 3D hero object, product spin, or floating geometry. Web version uses `requestAnimationFrame`
(NOT seek-driven). Lazy-init when the canvas scrolls into view.

```html
<script type="importmap">
{ "imports": { "three": "https://cdn.jsdelivr.net/npm/three@0.181.2/build/three.module.js" } }
</script>
<canvas id="scene" aria-hidden="true"></canvas>
<script type="module">
import * as THREE from 'three';
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));  // cap DPR for perf
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
camera.position.z = 6;
const mesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(1.5, 3),
  new THREE.MeshStandardMaterial({ color: 0xb8ff3a, roughness: .35, flatShading: true })
);
scene.add(mesh, new THREE.HemisphereLight(0xffffff, 0x0b0d10, 2.4));

let px = 0, py = 0;                       // pointer-reactive tilt
addEventListener('pointermove', e => { px = (e.clientX/innerWidth-0.5); py = (e.clientY/innerHeight-0.5); });

function resize(){ const r=canvas.getBoundingClientRect(); renderer.setSize(r.width,r.height,false); camera.aspect=r.width/r.height; camera.updateProjectionMatrix(); }
resize(); addEventListener('resize', resize);

let running = false;
function loop(){ if(!running) return; mesh.rotation.y += 0.004; mesh.rotation.x += (py*0.5 - mesh.rotation.x)*0.05; mesh.rotation.y += (px*0.5)*0.01; renderer.render(scene, camera); requestAnimationFrame(loop); }
// Lazy start only when visible + not reduced-motion + not low-power
const io = new IntersectionObserver(([e]) => { running = e.isIntersecting; if(running) loop(); });
if(!matchMedia('(prefers-reduced-motion: reduce)').matches) io.observe(canvas);
</script>
```
**Rules:** cap `setPixelRatio` at 2. Pause the RAF loop when off-screen (IntersectionObserver).
Disable entirely on `prefers-reduced-motion` and very small viewports (fallback to a static
image/gradient). Load models/textures before first paint. One 3D scene per page — it's the anchor.

---

## 4. WebGL / GLSL shader background (real-time generative)

A living gradient/noise field — far richer than a CSS mesh. Keep it dim (≤15% over content) and behind everything.

```js
// Minimal full-screen fragment shader (FBM noise + cosine palette). RAF-driven, u_time in seconds.
const FRAG = `#version 300 es
precision highp float; out vec4 o; uniform vec2 u_res; uniform float u_time;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);float a=hash(i),b=hash(i+vec2(1,0)),c=hash(i+vec2(0,1)),d=hash(i+vec2(1,1));vec2 u=f*f*(3.-2.*f);return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p*=2.;a*=.5;}return v;}
vec3 pal(float t){return .5+.5*cos(6.28*(vec3(1)*t+vec3(0.0,0.33,0.67)));}
void main(){vec2 uv=gl_FragCoord.xy/u_res;float n=fbm(uv*3.+u_time*0.05);o=vec4(pal(n+u_time*0.03)*0.12,1.);}`;
```
**Rules:** the shader output stays behind content at low alpha. Provide a CSS `radial-gradient`
fallback for no-WebGL. Pause when off-screen. Skip on reduced-motion. This is a MOTION 8+ move.
For a captured-HTML-through-shader treatment (chromatic warp, dissolve, holographic, CRT scanlines,
pixel-sort), see the fragment-shader catalog in `craft/patterns/advanced-effects.md` and adapt any
ShaderToy effect: swap `iResolution`→`u_res`, `iTime`→`u_time`.

---

## 5. Canvas particle system (pointer-reactive)

A field of particles that drift and react to the cursor. Classic hero/background for tech brands.

```js
const c = document.getElementById('particles'), x = c.getContext('2d');
let W, H, pts = [], mx = -999, my = -999;
function init(){ W=c.width=c.offsetWidth; H=c.height=c.offsetHeight; pts = Array.from({length: Math.min(120, W*H/12000)}, () => ({ x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.3, vy:(Math.random()-.5)*.3 })); }
addEventListener('pointermove', e => { const r=c.getBoundingClientRect(); mx=e.clientX-r.left; my=e.clientY-r.top; });
function frame(){
  x.clearRect(0,0,W,H);
  for(const p of pts){
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1;
    const d=Math.hypot(p.x-mx,p.y-my);
    if(d<120){ p.x+=(p.x-mx)/d*1.5; p.y+=(p.y-my)/d*1.5; }  // repel from cursor
    x.fillStyle='rgba(184,255,58,.5)'; x.beginPath(); x.arc(p.x,p.y,1.6,0,7); x.fill();
  }
  // connective lines (constellation)
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const a=pts[i],b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<90){x.strokeStyle=`rgba(184,255,58,${.12*(1-d/90)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke();}}
  raf=requestAnimationFrame(frame);
}
let raf; init(); addEventListener('resize', init);
// lazy start on visibility, stop off-screen; skip on reduced-motion
```
**Rules:** cap particle count by viewport area (perf). Stop RAF off-screen. Skip on reduced-motion.
Keep it subtle/behind content. Don't do particles AND a shader bg AND 3D — pick one ambient system.

---

## 6. AudioContext — audio-reactive visuals (rare, high-impact)

For music/audio/creative brands where a visual pulses to sound. Requires user gesture to start audio.

```js
let actx, analyser, data;
async function startAudio(srcEl){
  actx = new (window.AudioContext||window.webkitAudioContext)();
  const src = actx.createMediaElementSource(srcEl);
  analyser = actx.createAnalyser(); analyser.fftSize = 256;
  src.connect(analyser); analyser.connect(actx.destination);
  data = new Uint8Array(analyser.frequencyBinCount);
}
function vizFrame(){
  analyser.getByteFrequencyData(data);
  const bass = (data[1]+data[2]+data[3])/3/255;     // 0-1 low-freq energy
  document.documentElement.style.setProperty('--pulse', 1 + bass*0.15);  // drive CSS scale/glow
  requestAnimationFrame(vizFrame);
}
// Trigger startAudio() on a click/play button (browsers block autoplay audio).
```
**Rules:** MUST be user-initiated (button/play). Always provide a mute/stop control. Never
autoplay sound. Use only for genuinely audio-centric briefs (music, podcast, sound design).

---

## 7. View Transitions API + FLIP — seamless state/page morphs

Smooth morphs between states/pages with almost no code. Progressive enhancement.

```js
// Same-document state change (filter, tab, sort, expand)
function update(applyDomChange){
  if(!document.startViewTransition){ applyDomChange(); return; }  // fallback
  document.startViewTransition(applyDomChange);
}
```
```css
/* Elements that should morph between states share a view-transition-name */
.card-hero{ view-transition-name: hero; }
::view-transition-old(hero),::view-transition-group(hero){ animation-duration: .4s; }
@media (prefers-reduced-motion: reduce){ ::view-transition-group(*){ animation: none; } }
```
**FLIP** (First-Last-Invert-Play) is the manual fallback for browsers without View Transitions:
measure `getBoundingClientRect()` before + after a layout change, apply an inverted transform,
then transition it to identity. GSAP's `Flip` plugin does this automatically. Use for reordering
grids, expanding cards, list filtering.

**Rules:** always feature-detect `document.startViewTransition`. Cross-document (MPA) view
transitions need `@view-transition{ navigation: auto; }`. Keep durations ≤ 0.4s. Reduced-motion off.

---

## 8. Skeleton screens (perceived-performance polish)

Real dev-grade loading state. Shape-matched shimmer placeholders, NOT a spinner.

```css
.skeleton{ position:relative; overflow:hidden; background:var(--surface-2); border-radius:var(--r); }
.skeleton::after{ content:''; position:absolute; inset:0;
  background:linear-gradient(90deg, transparent, rgba(255,255,255,.06), transparent);
  transform:translateX(-100%); animation:sk 1.4s ease-in-out infinite; }
@keyframes sk{ to{ transform:translateX(100%); } }
/* Match skeleton block dimensions to the REAL content it replaces (title bar, avatar circle,
   3 text lines, image ratio) — a generic gray box is slop; a shape-matched skeleton is craft. */
@media (prefers-reduced-motion: reduce){ .skeleton::after{ animation:none; } }
```
**Rules:** skeleton MUST mirror the real layout (same block sizes/positions), not a generic box.
Show within ~200ms of load start. Cross-fade to real content (don't pop). Skeletons > spinners
for content areas; spinners only for tiny inline/button states.

---

## 9. Interactive charts / data viz (dashboards, metrics)

Never hand-roll complex charts. Match library to data type; keep it accessible.

| Data | Chart | Library (lightweight → full) |
|------|-------|------------------------------|
| Trend over time | line/area | uPlot (tiny), Chart.js, Recharts (React) |
| Comparison | bar | Chart.js, Recharts |
| Proportion (≤5) | donut | Chart.js |
| Relationship/geo/custom | bespoke | D3, visx |
| Sparkline inline | mini-line | uPlot, hand-rolled SVG polyline |

**Rules (from `design-rules/data-visualization.rules.json`):** never color-alone — add
label/pattern/shape; data vs bg ≥ 3:1, labels ≥ 4.5:1; tooltip on hover AND keyboard focus;
`tabular-nums` on values; ship empty/loading(skeleton)/error(retry) states; provide a table
alternative or `aria-label` summary of the key insight. Animate the draw-in once (line sweep,
bar grow) — not on every re-render.

---

## 10. Dev-tool / engineered aesthetic (monospace + swatches + terminal)

The "built by engineers" look — highly effective for dev-tools, APIs, infra, AI products.

- **Monospace as signal, not body:** use a mono face (`Geist Mono`, `JetBrains Mono`,
  `Berkeley Mono`) for code, metrics, labels, kbd hints, version/commit stamps, terminal blocks.
  Pair with a clean sans for prose. Mono for the WHOLE body only for a deliberate brutalist/terminal brief.
- **Live code/terminal block:** a syntax-highlighted snippet or a typewriter-animated terminal
  (see effects-catalog "Decrypting text" / typewriter) makes a dev product feel real. Show a real
  API call, CLI command, or config — product-specific, never lorem.
- **Color swatches / interactive palette:** for design/brand/creative products, render the actual
  palette as clickable swatches (copy hex on click, show token name). One-line JS: click → copy →
  toast "Copied #b8ff3a". This is a memorable product-specific micro-interaction.
- **`kbd` shortcut hints:** styled `<kbd>` chips (⌘K, /, Esc) signal a keyboard-first pro tool.
- **Radial/conic gradients as CRAFT:** a single tuned `radial-gradient` glow behind a hero or a
  `conic-gradient` animated border on the featured card is craft when concept-tied (see
  effects-catalog). The slop version is a rainbow mesh with no intent.

```css
.mono{ font-family:'Geist Mono','JetBrains Mono',monospace; font-feature-settings:'ss01'; letter-spacing:-.01em; }
.kbd{ font-family:'Geist Mono',monospace; font-size:.8em; padding:.15em .5em; border:1px solid var(--line);
  border-bottom-width:2px; border-radius:6px; background:var(--surface-2); color:var(--muted); }
.swatch{ width:40px; aspect-ratio:1; border-radius:8px; cursor:pointer; border:1px solid rgba(255,255,255,.1); transition:transform .15s; }
.swatch:hover{ transform:scale(1.08); }
```

---

## Performance & fallback contract (applies to EVERYTHING above)

Non-negotiable for every engine-grade element:

1. **Feature-detect** before init (`'startViewTransition' in document`, WebGL context test, `layoutSubtree` etc). Always have a graceful fallback path (static image, CSS gradient, instant DOM change).
2. **Lazy-init on visibility** — start RAF loops / heavy scenes only when the element enters the viewport (IntersectionObserver); pause when it leaves.
3. **`prefers-reduced-motion: reduce`** — disable scroll-hijack (Lenis), pin/scrub, particles, shaders, audio-viz; show final states immediately.
4. **Mobile / low-power downgrade** — cap `devicePixelRatio` at 2; skip 3D/particles/shaders on small viewports or `navigator.hardwareConcurrency <= 4`; horizontal-pin sections often become vertical stacks on mobile.
5. **One ambient system at a time** — never stack particles + shader bg + 3D. Pick the ONE that fits the concept.
6. **Animate transform/opacity/filter only** in RAF loops; never layout properties.
7. **Clean up** — kill ScrollTriggers, cancel RAF, close AudioContext on SPA route change / unmount.

---

## Decision: does this page need the engine layer?

Run this at the Design Read stage:
- Is the brief agency / portfolio / premium / creative / experimental, OR MOTION_INTENSITY ≥ 7?
  → YES: pick at least ONE engine element (usually ScrollTrigger storytelling + one WebGL/canvas/3D anchor + Lenis). A static page here is a FAIL.
  → NO (B2B SaaS / dashboard / trust-first, MOTION ≤ 6): CSS craft + Lenis + one scroll-driven moment is enough. Do NOT over-engineer.
- Always: the engine element must serve the concept (a 3D globe for "global infra," particles for "network," audio-viz for a music product) — never decoration for its own sake.

## Related
- `craft/patterns/advanced-effects.md` — CSS-level effects + the fragment-shader catalog
- `craft/patterns/motion-personality.md` — which archetype/dials call for engine work
- `craft/design-read.md` — the dials that gate this
- `design-rules/data-visualization.rules.json` — chart accessibility rules
