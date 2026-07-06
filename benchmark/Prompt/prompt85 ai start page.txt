Build a single-page React + Vite + TypeScript + Tailwind app (shadcn-ui base) that exactly recreates the page described below. Use framer-motion and lucide-react. Implement everything inside src/pages/Index.tsx. Do not use any custom Tailwind tokens for colors — use the inline styles and exact pixel values listed.

Global setup

- src/index.css sets html, body, #root { font-family: "Inter Tight", sans-serif; } (keep the default shadcn HSL design tokens otherwise).
- Page background: #EEF1F7, min-height: 100vh, overflow: hidden, flex centered.
- All remote assets are loaded from the constant:
    const A = "https://qclay.design/lovable/sixsense";
  - Local assets (in public/tiles/): tile-empty.svg, tile-1.svg, tile-2.svg, tile-3.svg, tile-4.svg, tile-5.svg (rounded blue glass-tile SVGs).

Layout (top to bottom, z-index order)

1. Pixel-grid background (two  instances, side="left" and side="right")
- Canvas-based grid: cols=12, rows=16, tile size 32px, gap=1px.
- Tiles: tile-empty.svg for off, one of tile-1..5.svg (chosen randomly per cell) for on. Sprites loaded once via a module-level promise cache and rasterized at devicePixelRatio (capped at 2) into offscreen canvases.
- Positioned position: absolute, anchored to its side: 0, top: 50%, transform: translateY(-40%), z-index: 0, pointer-events: none.
- Radial mask: radial-gradient(ellipse 80% 80% at 30% 50%, black 0%, transparent 75%) for left, at 70% 50% for right.
- Base fill ratio 0.35 of cells, shuffled fisher-yates reveal order.
- Reveal animation on mount: process ceil(total/18) tiles per RAF tick (~300–400 ms total) turning on each base-filled cell.
- Ambient flicker: every 120–300 ms toggle 3 random non-hovered cells using base fill ratio, indefinitely.
- Hover blob (window-level pointer): organic radius around cursor with base radius 4 cells; radius modulated by sin(angle3 + t0.0011)0.55 + sin(angle5 - t0.0017 + 1.3)0.30 + sin(angle2 + t0.0007 + 2.1)0.20, multiplied by (0.95 + n0.30). Cells inside rMax-0.5 are on; cells in (rMax-0.5, rMax+0.4] use deterministic edge noise (sin(x12.9898 + y78.233 + t0.002)+1)0.5 > 0.45. Hovered cells use HOVER_FILL_RATIO = 0.7. Throttle pointermove with rAF; reconcile hoverSet on every move so cells release on leave.
- Hover flicker: every 70–160 ms re-randomize ~18% of hovered cells.
- Honor prefers-reduced-motion: skip reveal/flicker, just paint final base state.

2. Navbar (position: fixed, top:0, full width, z:50, transparent)
- Inner row at margin-top: 22px, margin-left: 22px, gap: 6px, total width 86.816px, height 16px.
- Two images side-by-side, each height: 16px, width auto:
  - ${A}/logo-icon.svg
  - ${A}/logo-text.svg

3. Left sidebar (position: fixed, left:16, vertically centered, z:10, column flex, gap:8)
- Two 40×40 buttons, both with border-radius: 12, transition background 0.2s.
  - Top (filled): border: 1px solid rgba(34,106,205,0.05), background: rgba(255,255,255,0.90), backdrop-filter: blur(8px). Hover -> rgba(255,255,255,1). Icon: ${A}/chat.svg, 18×18.
  - Bottom (ghost): no border, transparent. Hover -> rgba(255,255,255,0.5). Icon: ${A}/search.svg, 18×18.

4. Main column (z:5, centered, padding-top: 60, max-width: 760)

4a. Folder/lights stack — wrapper position: relative; width: 113.67; height: 220; overflow: visible
Render in this exact order (later = higher visual stack). All position: absolute, all images use ${A}/.... Each enters with framer-motion as listed.

| z | src | bottom | left | width | height | enter animation |
|---|---|---|---|---|---|---|
| 1 | blue-light-2.svg | 50 | 54.6 (translateX -50%) | 104 | 170 | opacity 0→1, dur 0.8, delay 1.0, easeOut |
| 2 | blue-light.svg | 28 | 54.6 (translateX -50%) | 104 | 170 | same as above |
| 3 | light-1.svg | 35 | 57.2 (translateX -50%) | 180.5 | 124.5 | opacity 0→1, dur 1.0, delay 1.0, easeOut |
| 4 | folder-3.svg | 60 | 23.4 | 69.71 | 45 | opacity 0→1, y 30→0, dur 0.6, delay 0.8, ease [0.22,1,0.36,1] |
| 5 | small-light-2.svg | 55 | 67.6 (translateX -50%) | 39 | 17 | opacity 0→1, dur 0.6, delay 1.4, easeOut |
| 6 | small-light.svg | 50 | 44.2 (translateX -50%) | 39 | 25 | same as above |
| 7 | folder-2.svg | 45 | 18.98 | 79 | 51 | opacity 0→1, y 30→0, dur 0.6, delay 0.6, ease [0.22,1,0.36,1] |
| 8 | light-2.svg | 20 | 57.2 (translateX -50%) | 109 | 162.5 | opacity 0→1, dur 1.0, delay 1.1, easeOut |
| 9 | folder-1.svg | 30 | 13 | 91 | 58 | opacity 0→1, y 30→0, dur 0.6, delay 0.4, ease [0.22,1,0.36,1] |
| 10 | folder-0.svg?v=2 | 0 | 0 | 113.67 | 76.5 | opacity 0→1, y 30→0, dur 0.6, delay 0.0, ease [0.22,1,0.36,1] |

4b. Three floating cards (image-1, image-2, image-3) — inside the same wrapper
Final positions (x is offset from the folder horizontal center = 113.67/2, y is bottom):
1. image-1.png → w 88.55, h 68.46, x −82, y 123, rotate −16°
2. image-2.png → w 105, h 87, x 68, y 124, rotate 24°
3. image-3.png → w 105, h 96, x −4, y 148, rotate −4°

Start state (all three): w/h 20, rotate 0, sitting just above the folder (x:-5,y:7, x:35,y:33, x:-4,y:27).

Entrance: animate opacity 0→1, width, height, left, bottom together with duration: 1.4, delay: 0.6 + i*0.25, ease: [0.16, 1, 0.3, 1]. transform-origin: 50% 100%. border-radius: 10, box-shadow: 0 16px 40px rgba(0,0,0,0.18), 0 4px 10px rgba(0,0,0,0.10). Image fills with object-fit: cover.

Idle (no card hovered): infinite y and rotate keyframe loops per card:
- card 0: y [0,-6,0,4,0], rot [r, r-2, r, r+2, r], duration 6s
- card 1: y [0,5,0,-5,0], rot [r, r+2, r, r-2, r], duration 7s
- card 2: y [0,-4,0,6,0], rot [r, r-1.5, r, r+1.5, r], duration 8s
- All repeat: Infinity, ease: easeInOut.

Hover (per card): hovered card scale: 1.08, z-index: 20, all three freeze floating (y:0, rotate: final rotate). Transition duration 0.4, ease [0.16,1,0.3,1]. cursor: pointer.

4c. Heading
Let's find the right
references for your work
- 

 — Inter Tight, 32px, weight 400, line-height 32px, letter-spacing −0.64px, color #11315D, width 385, margin 32px auto 8px, text-align center.
- Enter: opacity 0→1, y 16→0, filter blur(6px)→blur(0), dur 0.6, delay 0.3, easeOut.

4d. Subtitle
- 

 text: What type of references are you looking for?
- Inter Tight 14, weight 400, color rgba(13,27,75,0.50), centered, margin-bottom: 20.
- Enter: opacity 0→1, y 12→0, dur 0.6, delay 0.45, easeOut.

4e. Prompt input box
Outer wrapper:
- width 702 (max 100%), centered, padding 4, border-radius 24, border 0.5px solid rgba(0,0,0,0.05), background rgba(157,196,250,0.15), backdrop-filter: blur(50px).
- Enter: opacity 0→1, y 16→0, filter blur(4px)→0, dur 0.6, delay 0.55, easeOut.

Inner card: width 100%, height 116, white background, border-radius 20, border 1px solid rgba(34,106,205,0.05), padding 14px 14px 12px 16px, flex column.

Typewriter line (): height 32, font Inter Tight 15/22, weight 400, color #0D1B4B, padding-bottom 10. Phrases (cycle infinitely):
1. "Create a finance dashboard design"
2. "Branding with M letter"
3. "Liquid glass effect"
4. "Loader animation"
5. "SaaS landing page"

Behavior: type one char at 22 + random*25 ms; on full phrase, pause 1400 ms (≈ two caret blinks); delete one char per 14 ms; advance to next phrase, loop. Caret: 2×18 px bar, color #0D1B4B, margin-left: 2, blinks via @keyframes promptCaretBlink { 0%,49%{opacity:1} 50%,100%{opacity:0} } at 1s steps(1) infinite.

Bottom toolbar row (margin-top: 5, space-between, align-items: center):

Left cluster (gap: 6, transform: translateY(35%)):
- "Top Expert" pill — width 110, height 28, background #E8F1FF, border-radius 8, padding 0 8. Inside: 14×14 rounded-4 square with linear-gradient(166deg, #A0E4FF 9.8%, #9CA4FB 184.41%) containing 8×8 ${A}/ai-select.svg; label "Top Expert" Inter Tight 12/16, color #5085CE, centered, no-wrap;  from lucide.
- 28×28 button, radius 6, border 1px solid rgba(0,0,0,0.10), bg rgba(255,255,255,0.80), icon ${A}/image.svg 14×14.
- 28×28 button, same style, icon ${A}/Capa_1.svg 14×14.
- Vertical divider: 1×18, rgba(0,0,0,0.12), margin 0 2.
- 28×28 ghost "+" button: radius 6, border 1px solid rgba(0,0,0,0.10), transparent bg, glyph + 16px rgba(0,0,0,0.40).
- "UI Design" tag pill: height 28, bg rgba(0,0,0,0.05), radius 6, padding 0 8, gap 4. Label Inter Tight 12 rgba(13,27,75,0.65), then "×" 12 rgba(0,0,0,0.35) margin-left 2.

Right side: SendButton (see below).

4f. SendButton (44×44 wrapper)
- motion.div wrapper: 44×44, flex centered, cursor pointer, translateY: 10% (persistent vertical offset), animate={{ scale: hovered ? 1.05 : 1 }}, transition 0.2s.
- Outer halo: absolute inset 0, radius 15, background: rgba(151,195,255,0.15), z 1.
- Inner 36×36 square (centered): radius 12, background: linear-gradient(180deg, #70A8F2 0%, #3D82DE 100%), padding 8, overflow hidden, z 2,
  box-shadow: inset 0 1px 18px 2px rgba(173,208,255,0.20), inset 0 1px 4px 2px rgba(222,236,255,0.80), 0 42px 107px 0 rgba(61,130,222,0.34), 0 10px 10px 0 rgba(61,130,222,0.20), 0 3.714px 4.846px 0 rgba(61,130,222,0.15).
- Spinning border: absolute inset:-1, radius 13, padding 1, masked to a 1px ring using WebkitMask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); WebkitMaskComposite: xor (and mask / maskComposite: exclude equivalents). Background conic-gradient(from 0deg, rgba(255,255,255,0) 0deg, #FFFFFF 60deg, #9EC7FF 120deg, rgba(255,255,255,0) 200deg, rgba(255,255,255,0) 360deg). Inner 

 has its transform: rotate(Xdeg) updated each rAF. Speed eased toward target via k = 1 - exp(-dt/tau) with tau=250ms while hovered (target = 360deg / 1500ms) and tau=700ms while not hovered (target=0). Loop stops when speed < 0.0005.
- Static fallback border: absolute inset 0, radius 12, 1px solid #9EC7FF, z 4.
- Dots overlay: absolute inset 0, z 2, image ${A}/dots.svg filling 100%/100% with object-fit: cover, opacity: 0.7.
- Hover blink/shine sweep: only render when an arrowToggle counter > 0 (incremented on each hoverStart). Uses key={blink-${arrowToggle}} so it re-mounts every hover. motion.div absolute inset 0, z 4, pointer-events: none, mixBlendMode: screen, background linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%), initial={{x:'-120%'}}, animate={{x:'120%'}}, transition: { duration: 0.7, ease: [0.4,0,0.2,1] }. Plays exactly once per hover, never reverses.
- Arrow swap: 16×16 relative box, overflow hidden, z 5. Two motion.img of ${A}/arrow-up.svg, both 16×16 absolute inset 0:
  - Outgoing: key={out-${arrowToggle}}, initial {y:0, opacity:1}, animate {y:-16, opacity:0}, transition { duration: 0.32, ease: [0.65,0,0.35,1] }.
  - Incoming: key={in-${arrowToggle}}, initial {y:16, opacity:0}, animate {y:0, opacity:1}, same transition. The new arrow remains in place after hover-out.

5. Footer (position: fixed, bottom 20, full width, z 5, centered)
- Inter Tight 13, weight 400, color rgba(13,27,75,0.45).
- Text: By sending a message to ChatBot, you agree to our Terms and have read our Privacy Policy.
- "Terms" and "Privacy Policy." are , color rgba(13,27,75,0.65), underline, text-underline-offset: 2, cursor pointer.

Asset list (all from ${A} unless noted)

Remote (https://qclay.design/lovable/sixsense/...):
logo-icon.svg, logo-text.svg, chat.svg, search.svg, folder-0.svg (use ?v=2), folder-1.svg, folder-2.svg, folder-3.svg, blue-light.svg, blue-light-2.svg, light-1.svg, light-2.svg, small-light.svg, small-light-2.svg, image-1.png, image-2.png, image-3.png, ai-select.svg, image.svg, Capa_1.svg, dots.svg, arrow-up.svg.

Local (public/tiles/): tile-empty.svg, tile-1.svg … tile-5.svg.

Dependencies

framer-motion, lucide-react, react, react-dom, react-router-dom, tailwindcss, vite, plus the standard shadcn-ui boilerplate. Only src/pages/Index.tsx and src/index.css need page-specific code; the rest is the default Vite + shadcn template.