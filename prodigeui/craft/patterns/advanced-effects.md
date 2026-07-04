# Advanced Effects — High-Impact Visual Techniques

> These are the techniques that make output "mencolok" (striking) — the difference between
> correct-but-template and genuinely impressive. Each effect includes complete CSS/JS.
> Use sparingly per the Soul Formula: pick 1-2 per project, not all of them.
>
> Sourced from: transitions.dev, hyperframes, smoothui, open-design, Emil.

---

## 1. Clip-Path Reveals (Geometric Wipes)

Replace boring opacity+translateY fades with geometric reveals for ONE key section.

```css
/* Inset wipe — element reveals from all edges inward */
.clip-reveal {
  clip-path: inset(100% 0 0 0);  /* hidden: clipped from top */
  transition: clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.clip-reveal.in {
  clip-path: inset(0 0 0 0);     /* visible: no clip */
}

/* Circle expand — reveals from center outward */
.clip-circle {
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 1s cubic-bezier(0.16, 1, 0.3, 1);
}
.clip-circle.in {
  clip-path: circle(75% at 50% 50%);
}

/* Diagonal wipe — sweeps from corner */
.clip-diagonal {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  transition: clip-path 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}
.clip-diagonal.in {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
```

**When:** Hero images, feature showcase sections, portfolio reveals. Use on MAX one section per page.

---

## 2. Card Cursor Glare (3D Tilt + Pointer Tracking)

A card that subtly tilts toward the cursor with a radial glare highlight.

```css
.tilt-card {
  perspective: 800px;
  transform-style: preserve-3d;
}
.tilt-card-inner {
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
}
.tilt-card-inner::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mx) var(--my),
    rgba(255,255,255,0.08) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
.tilt-card:hover .tilt-card-inner::after { opacity: 1; }
```

```js
function initTiltCards(selector = '.tilt-card') {
  document.querySelectorAll(selector).forEach(card => {
    const inner = card.querySelector('.tilt-card-inner') || card;
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      inner.style.transform = `rotateY(${x * 8}deg) rotateX(${y * -8}deg)`;
      inner.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
      inner.style.setProperty('--my', `${(y + 0.5) * 100}%`);
    });
    card.addEventListener('mouseleave', () => {
      inner.style.transform = 'rotateY(0) rotateX(0)';
    });
  });
}
```

**When:** Featured product card, pricing popular tier, portfolio project card. MAX 3-6 cards per page.

---

## 3. Variable Font Animation

Animate font weight/width on reveal or hover for typographic drama.

```css
@font-face {
  font-family: 'InterVariable';
  src: url('...') format('woff2');
  font-weight: 100 900;
}

.vf-reveal {
  font-variation-settings: 'wght' 100;
  transition: font-variation-settings 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.vf-reveal.in {
  font-variation-settings: 'wght' 700;
}

/* Hover weight shift on nav links */
.vf-hover {
  font-variation-settings: 'wght' 400;
  transition: font-variation-settings 0.3s ease;
}
.vf-hover:hover {
  font-variation-settings: 'wght' 600;
}

/* Ambient breathe (accent heading) — use sparingly */
@keyframes weight-breathe {
  0%, 100% { font-variation-settings: 'wght' 600; }
  50% { font-variation-settings: 'wght' 700; }
}
.vf-breathe { animation: weight-breathe 4s ease-in-out infinite; }
```

**When:** Hero headline on reveal, nav links on hover. Requires variable font (Inter Variable, Geist, Outfit support wght axis).

---

## 4. Shimmer Text (Gradient Sweep)

A highlight sweeps across text — used for brand names or accent words.

```css
.shimmer-text {
  background: linear-gradient(
    110deg,
    currentColor 35%,
    rgba(255,255,255,0.8) 50%,
    currentColor 65%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}
```

**When:** Brand logo text on load (one-shot variant: remove `infinite`, use `forwards`). Never on body text.

---

## 5. Number Count-Up

Metrics/stats animate from 0 to their value when entering viewport.

```js
function countUp(el, target, duration = 2000) {
  const start = performance.now();
  const isFloat = String(target).includes('.');
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out deceleration
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = isFloat
      ? (eased * target).toFixed(1)
      : Math.round(eased * target);
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// Trigger on scroll
const metricObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      countUp(el, target);
      metricObserver.unobserve(el);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('[data-count-up]').forEach(el => {
  el.dataset.target = el.textContent.replace(/[^0-9.]/g, '');
  el.textContent = '0';
  metricObserver.observe(el);
});
```

```html
<div class="metric">
  <span class="n" data-count-up data-suffix="%">40</span>
  <span class="l">less time in meetings</span>
</div>
```

**When:** Metrics/stats sections, pricing numbers, social proof counts. Always with `tabular-nums`.

---

## 6. Blur Masks (Emil Technique)

Use blur to make imperfect transitions feel polished. Blur hides the "seam."

```css
/* Element enters with blur that clears */
.blur-enter {
  filter: blur(8px);
  opacity: 0;
  transform: translateY(12px);
  transition: filter 0.6s, opacity 0.5s, transform 0.6s;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.blur-enter.in {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0);
}

/* Image loads with blur-clear (perceived faster loading) */
.img-blur-load {
  filter: blur(20px);
  transform: scale(1.05);
  transition: filter 0.8s ease, transform 0.8s ease;
}
.img-blur-load.loaded {
  filter: blur(0);
  transform: scale(1);
}
```

**When:** Hero headline entrance (blur clears as it settles), image lazy-load transitions, tab content swaps.

---

## 7. Velocity-Matched Transitions (Hyperframes)

Exit accelerates, enter decelerates — their speeds MATCH at the cut point for perceived continuity.

```css
/* Tab panel swap: exiting panel */
.panel-exit {
  animation: panel-out 250ms cubic-bezier(0.55, 0, 1, 0.45) forwards;
}
@keyframes panel-out {
  to { opacity: 0; transform: translateX(-8px); }
}

/* Tab panel swap: entering panel */
.panel-enter {
  animation: panel-in 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes panel-in {
  from { opacity: 0; transform: translateX(8px); }
  to { opacity: 1; transform: translateX(0); }
}
```

**Principle:** The exit ease-IN (accelerating away) and enter ease-OUT (decelerating in) meet at equal velocity mid-swap. This is what makes Apple's transitions feel continuous.

---

## 8. Scroll-Driven Animation (CSS native, Chrome 115+)

No JS needed — CSS `animation-timeline: scroll()` for parallax and progress effects.

```css
/* Parallax hero image on scroll */
.hero-parallax img {
  animation: parallax linear;
  animation-timeline: scroll();
  animation-range: 0vh 80vh;
}
@keyframes parallax {
  from { transform: translateY(0); }
  to { transform: translateY(80px); }
}

/* Progress bar that fills as you scroll */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: var(--accent);
  transform-origin: left;
  animation: fill-bar linear;
  animation-timeline: scroll();
}
@keyframes fill-bar {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

/* Section fade-in driven by scroll position */
.scroll-reveal {
  animation: scroll-fade-in linear;
  animation-timeline: view();
  animation-range: entry 0% entry 50%;
}
@keyframes scroll-fade-in {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
```

**Fallback:** For browsers without support, include a JS IntersectionObserver fallback:
```css
@supports not (animation-timeline: scroll()) {
  .scroll-reveal { /* fallback to .rv class behavior */ }
}
```

---

## 9. WebGL / Shader Backgrounds (Hyperframes)

A living, generative gradient background that looks unique — not a static mesh.

```html
<canvas class="shader-bg" aria-hidden="true"></canvas>
```

```js
// Minimal FBM noise shader for ambient background
function initShaderBg(canvas) {
  const gl = canvas.getContext('webgl');
  if (!gl) return; // graceful fallback to CSS gradient

  // Resize to fill
  function resize() {
    canvas.width = canvas.offsetWidth * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resize();
  window.addEventListener('resize', resize);

  // Shader source (FBM noise + cosine palette)
  const frag = `
    precision mediump float;
    uniform float u_time;
    uniform vec2 u_resolution;
    // ... FBM noise implementation ...
    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      float n = fbm(uv * 3.0 + u_time * 0.1);
      vec3 col = palette(n + u_time * 0.05);
      gl_FragColor = vec4(col * 0.15, 1.0); // keep VERY dim
    }
  `;
  // ... compile, link, render loop at 30fps ...
}
```

**When:** ONLY for MOTION ≥ 8 and when the brief justifies a cinematic/experimental feel. Provide a static CSS gradient fallback for all other cases. Keep shader output at ≤15% opacity so it doesn't overwhelm content.

---

## 10. Avatar Group Hover with Distance-Falloff

When hovering one avatar in a group, neighbors shift away proportionally.

```css
.avatar-group { display: flex; }
.avatar-group img {
  width: 40px; height: 40px; border-radius: 50%;
  margin-left: -12px; border: 2px solid var(--bg);
  transition: transform 0.3s var(--ease-hover), z-index 0s;
}
.avatar-group img:first-child { margin-left: 0; }
.avatar-group img:hover { transform: translateY(-4px) scale(1.15); z-index: 10; }
```

```js
// Distance-falloff: neighbors shift based on distance from hovered
function initAvatarGroup(group) {
  const items = [...group.children];
  group.addEventListener('mouseover', (e) => {
    const hovered = e.target.closest('img');
    if (!hovered) return;
    const idx = items.indexOf(hovered);
    items.forEach((item, i) => {
      if (i === idx) return;
      const dist = Math.abs(i - idx);
      const shift = dist === 1 ? 6 : dist === 2 ? 3 : 0;
      const dir = i < idx ? -1 : 1;
      item.style.transform = `translateX(${dir * shift}px)`;
    });
  });
  group.addEventListener('mouseleave', () => {
    items.forEach(item => { item.style.transform = ''; });
  });
}
```

---

## 11. Plus-to-Menu Icon Morph

Hamburger/plus icon morphs to X using CSS transforms (no SVG swap).

```css
.morph-icon { position: relative; width: 24px; height: 24px; }
.morph-icon span {
  position: absolute; left: 4px; width: 16px; height: 2px;
  background: currentColor; border-radius: 1px;
  transition: transform 0.3s var(--ease-hover), opacity 0.2s;
}
.morph-icon span:nth-child(1) { top: 7px; }
.morph-icon span:nth-child(2) { top: 11px; }
.morph-icon span:nth-child(3) { top: 15px; }

/* Open state — morph to X */
.morph-icon.open span:nth-child(1) { transform: translateY(4px) rotate(45deg); }
.morph-icon.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.morph-icon.open span:nth-child(3) { transform: translateY(-4px) rotate(-45deg); }
```

---

## Usage Rules

1. **Max 2-3 advanced effects per page.** More = circus. Less = forgettable.
2. **The Soul Formula decides which effects:** pick based on Design Read, not by default.
3. **Every effect has a `prefers-reduced-motion` off-switch.**
4. **Fallbacks for non-supporting browsers** (clip-path, scroll-timeline, WebGL).
5. **Performance budget:** advanced effects must not block main thread >16ms/frame. Use CSS animations/transitions over JS where possible. `will-change` only on actively animating elements.

---

## Related
- `craft/patterns/effects-catalog.md` — simpler effects (grain, glow, marquee)
- `craft/patterns/motion-personality.md` — which archetype uses which effects
- `craft/patterns/motion-craft.md` — foundational motion principles
