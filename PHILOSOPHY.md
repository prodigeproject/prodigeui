# ProdigeUI Philosophy

> **"Guidance over enforcement."** — Astryx (Meta), Principles
>
> **"Paste the snippet into any project and apply it to any component WITHOUT pulling in demo-specific markup."** — transitions.dev
>
> **"If you pass a value, the component renders it."** — Astryx (Meta)

---

## Two Modes of Operation

ProdigeUI operates in TWO modes depending on what the user provides:

### Mode 1: CREATIVE MODE (vague brief, no design direction)
**Trigger:** The user says something like "build a landing page for my SaaS" without specifying colors, layout, images, or style.

In this mode, ProdigeUI IS the designer. It:
- Applies the full anti-slop checklist to AVOID generic AI defaults
- Uses the Three Dials system to calibrate aesthetic direction
- Selects tokens, themes, and motion presets appropriate to the use case
- Produces output that is VISUALLY SUPERIOR to raw AI output
- Makes opinionated design choices backed by research (typography scale, spacing rhythm, color roles, motion timing)

**The value of Creative Mode = BETTER VISUAL DESIGN.**
The output should look like a professional designer built it, not an AI.

### Mode 2: ENHANCEMENT MODE (specific brief, design direction exists)  
**Trigger:** The user provides specific colors, layout, images, fonts, or a detailed spec to implement.

In this mode, ProdigeUI preserves the designer's intent and adds a quality layer. It:
- Implements the specified design faithfully — colors, layout, images, fonts, structure
- Adds accessibility (aria-labels, keyboard nav, focus-visible, semantic HTML)
- Adds performance optimizations (preloading, reduced-motion, cleanup, GPU-only transforms)
- Adds code quality (error handling, proper structure, types)
- Adds **craft polish WITHIN the spec** — smoother easing, correct crossfade/cleanup,
  faithful motion timing — using the `craft/` recipes to implement the specified
  techniques *correctly* (e.g. a seamless video loop instead of a janky one)

**The value of Enhancement Mode = PRODUCTION READINESS + CORRECT CRAFT EXECUTION.**

**Two hard rules for Enhancement Mode:**
1. **DO NO HARM.** The enhancement layer must NEVER degrade the result. If an
   "improvement" could break an image, slow a swipe, add jank, or change the intended
   visual — it is not an enhancement, it is a regression. Remove it. (This is the exact
   failure mode that produced broken images and heavy swipe in earlier benchmarks: an
   invisible layer of observers / `will-change` / touch handlers that FOUGHT the design.)
2. **PRESERVE INTENT, ELEVATE EXECUTION.** Do not change WHAT the designer chose (colors,
   layout, media). DO make sure the technique they chose is executed at reference quality
   — the crossfade actually crossfades, the magnetic hover is smooth, the animation runs
   at 60fps, nothing leaks or breaks.

Enhancement Mode does NOT promise an identical screenshot. It promises the same design
INTENT, executed correctly, accessible, performant, and never worse than the brief.

### How to detect which mode:
- Brief has specific hex colors, font names, image URLs, pixel values → **Enhancement Mode**
- Brief describes a Figma design or references specific styling → **Enhancement Mode**  
- Brief is conceptual ("make a dashboard", "build a landing page") → **Creative Mode**
- Brief names a product/audience but not visual specifics → **Creative Mode**

---

## The Core Principle: ENHANCE, NEVER REPLACE

ProdigeUI is NOT a design replacement tool. It is an ENHANCEMENT layer.

When an AI agent receives a design brief or prompt:
1. **FIRST:** Implement the design EXACTLY as specified. Follow the brief. Use the URLs, colors, layout, and structure the user asked for.
2. **THEN:** Add ProdigeUI quality enhancements ON TOP — as invisible improvements that don't change the visual outcome.

**If ProdigeUI's output looks DIFFERENT from what the user asked for, ProdigeUI has FAILED.**

---

## Creative Mode: What Makes the Visual Output BETTER

> **Creative Mode is not "safe corporate defaults." It is craft.** The purpose of Creative
> Mode is to produce output that looks like a top figma-site / award-style reference built
> it — cinematic, textured, motion-rich, memorable — not a competent-but-forgettable
> template. Avoiding slop is the FLOOR, not the goal. The goal is craft.
>
> **Calibrate ambition to the use-case.** Expressive use-cases (landing, portfolio,
> product launch, brand, creative tool) get HIGH craft ambition — reach into the `craft/`
> library by default. Functional use-cases (dashboards, admin, data tools) get restraint
> and clarity. The guidance below has a CRAFT lane and a RESTRAINED lane; pick per the
> `DESIGN_VARIANCE` / `MOTION_INTENSITY` / `VISUAL_DENSITY` dials.

### Step 0 for expressive work: reach for craft
Before applying the constraint rules below, decide the **signature**. Every expressive
page needs ONE hero technique + a motion signature + a texture layer. Select from
`craft/AGENTS.md`:
- Hero: crossfading video, cursor spotlight, magnetic hero element, or giant fluid ghost type
- Motion signature: staggered word/char reveal, scroll-linked opacity sweep, sticky stack
- Texture: grain overlay + liquid glass (kills the flat-AI look)
Then implement it from the recipe, and only THEN layer the constraint discipline below.

### Visual Hierarchy (not flat)
- ONE element dominates each viewport (Von Restorff Effect)
- Clear size progression: display → heading → subheading → body
- Weight used intentionally: 700+ for headlines, 600 for subheads, 400 for body
- Not three equal cards — always hierarchy (bento grid: one hero cell + supporting cells)

### Spacing Rhythm (not arbitrary)
- All values from a coherent scale (4px base: 8, 16, 24, 32, 48, 64, 80, 96)
- Tighter within groups, wider between groups (Gestalt proximity)
- Section padding: 64-96px between major sections. Expressive hero height follows the concept,
  content, and focal subject; use `100vh` only when the first-view composition earns it.
- Component padding: 16-32px inside cards/containers

### Color Intent (not AI defaults)
- Choose a concept-driven palette — a confident single accent, or a duotone/gradient that
  derives from the brand or photography (NOT a reflex purple→blue gradient)
- Dark text on light OR light text on dark (never muddy)
- Contrast minimum 4.5:1 for body text, always (over video, verify against the actual frame)

### Typography System (personality first)
- **Expressive (CRAFT lane):** pair a DISPLAY face (Anton, Instrument Serif, Kanit,
  Playfair italic, Helvetica Now Display) with a clean body face. Headlines at fluid
  `clamp()` scale (e.g. `clamp(2.5rem, 14vw, 17.5rem)`), line-height 0.85–1.0, negative
  tracking `-0.02em` to `-0.05em`. See `craft/patterns/fluid-display-type.md`.
- **Restrained (functional lane):** one UI family (Inter/Geist/system), modular scale
  1.25 (14, 16, 20, 24, 30, 36, 48, 60px), line-height 1.5 body / 1.15 display.
- Max 2 families (display + body) + mono. This is a discipline in BOTH lanes.

### Motion (choreography, not decoration — and not timidity)
- **Expressive (CRAFT lane):** choreographed entrances (staggered word/char reveal,
  scroll-linked sweeps), ambient motion (crossfading video, opposing marquees, gentle
  parallax), magnetic hover. Motion sets mood and guides the eye. See `motion/choreography.md`.
- **Restrained (functional lane):** hover 150ms ease-out (translateY -2px / scale 1.02),
  entrance scroll-reveal 20-30px / 500ms ease-out, no ambient decoration.
- Reduce-motion ALWAYS respected in both lanes. Ambient/continuous motion is legitimate
  on expressive pages — it is not "decorative slop" (see the rewritten anti-slop gate).

### Layout Intelligence (not centered-everything, but centered-with-depth is fine)
- Asymmetric layouts create tension and guide the eye — use them
- A centered hero is fine WHEN it has real media, texture, and motion (not a flat gradient)
- Concept-led cinematic composition for expressive heroes; `max-width: 1200px` for
  content layouts, `720px` for reading text
- Layered z-index (ghost type behind subject, glass chrome above media) creates depth
- Whitespace as a design tool (generous, not filler)

### Anti-AI-Slop in Practice (Creative Mode)
- Reflex purple gradient → concept-driven palette or confident single accent
- Flat centered mesh hero → centered hero WITH crossfading video + grain + glass + entrance
- Three equal cards → bento grid with a dominant hero cell
- "Get Started" → specific CTA describing outcome ("Start 14-day trial", "See the work")
- Random bounce → choreographed entrances with a tasteful settle-overshoot
- Untouched Inter → display face at fluid scale with intentional tracking
- Flat color field → grain overlay + depth + real media

---

## Enhancement Mode: What ProdigeUI Adds (Invisible Enhancements)

These are additions that make the output BETTER without making it look DIFFERENT:

### 1. Accessibility (Zero Visual Change)
- Add `aria-label`, `role`, `aria-live` attributes — invisible to sighted users
- Add keyboard navigation — invisible until Tab is pressed
- Add `prefers-reduced-motion` — only activates for users who opt in
- Add focus-visible indicators — only visible on keyboard navigation
- Add semantic HTML (`<nav>`, `<header>`, `<main>`) — zero visual difference

### 2. Performance (Zero Visual Change)
- Add image preloading — faster perceived load time
- Add `will-change` only during animation (not permanent)
- Add `loading="lazy"` on off-screen images
- Remove layout-triggering CSS properties from animations (use transform/opacity)
- Add CSS containment where appropriate

### 3. Motion Quality (Same Animation, Better Execution)
- Keep the SAME timing the designer specified
- Add `prefers-reduced-motion` fallback only (doesn't change default experience)
- Add proper cleanup of timeouts/listeners (prevents memory leaks)
- Add isAnimating lock to prevent double-fires (smoother transitions)
- Use CSS transitions over JS-driven animation where possible (60fps)

### 4. Code Quality (Zero Visual Change)
- Proper event listener cleanup on unmount
- Error boundaries for graceful failure
- Proper TypeScript types (if TS project)
- Meaningful variable names and clean structure
- No unnecessary re-renders (memo, useCallback where needed)

### 5. Touch & Interaction (Additive, Not Replacing)
- Add touch/swipe support WHERE THE DESIGN IMPLIES IT (carousels, drawers)
- Add hover states only on devices that support hover (`@media (hover: hover)`)
- Add active press feedback (subtle scale 0.98) on touch devices
- Never ADD interactions that conflict with the designer's interaction model

---

## What ProdigeUI NEVER Does

### ❌ NEVER changes the visual design
- If the brief says "dark theme" → don't switch to light
- If the brief says "centered hero" → don't make it asymmetric
- If the brief provides specific colors → use those exact colors
- If the brief provides image URLs → use those exact URLs

### ❌ NEVER adds visual complexity the user didn't ask for
- Don't add indicator dots unless the design includes them
- Don't add text that wasn't in the brief
- Don't add sections (footer, sub-headers) that weren't requested
- Don't change font choices or sizes unless they violate readability minimums

### ❌ NEVER sacrifices performance for "quality"
- Don't add heavy state management when simple useState works
- Don't add will-change permanently (GPU memory waste)
- Don't add complex observer patterns when CSS handles it
- Don't add multiple transition layers that fight each other

### ❌ NEVER overrides the designer's creative intent
- If the designer chose purple gradients → that's their brand decision
- If they want centered layout → center it
- If they want dark theme → use dark theme
- The anti-slop checklist is for when NO design direction exists, not to override explicit direction

---

## When Anti-Slop Rules Apply vs When They Don't

### APPLY anti-slop rules when:
- The user gives a VAGUE brief ("make a landing page for my SaaS")
- No specific colors, layout, or style direction is given
- The agent must INVENT the design from scratch
- Multiple valid approaches exist and quality must differentiate

### DO NOT APPLY anti-slop rules when:
- The user provides SPECIFIC design direction (colors, layout, images)
- A Figma design or reference exists
- The brief is detailed enough to implement directly
- The user explicitly chose a style (dark theme, centered, gradients)

**The anti-slop rules exist to prevent AI DEFAULT behavior when no direction exists. They do NOT override explicit human design decisions.**

---

## The Enhancement Checklist

After implementing a design exactly as specified, apply these enhancements IN ORDER:

1. ✅ Does it match the brief visually? (If no, fix THAT first)
2. ✅ Add semantic HTML (header, nav, main, section, footer)
3. ✅ Add ARIA labels on interactive elements
4. ✅ Add keyboard navigation support
5. ✅ Add prefers-reduced-motion fallback
6. ✅ Add focus-visible indicators
7. ✅ Add image preloading/lazy-loading
8. ✅ Add proper error handling for assets
9. ✅ Add event listener cleanup
10. ✅ Add touch/swipe where interaction pattern implies it
11. ✅ Verify contrast ratio meets 4.5:1 (flag if it doesn't, don't change colors)
12. ✅ Verify animations are GPU-accelerated (transform/opacity only)

**If ANY of these changes alter the visual output, REVERT that specific enhancement.**

---

## The Quality Test

The test depends on the mode.

**Creative Mode passes when:**
1. **It looks like a top reference built it** — the output would sit comfortably next to a
   figma-site / award-style page, not next to a template. It ships craft (hero signature,
   choreographed motion, texture, distinctive display type, real media, clear focal point).
2. **It is visibly BETTER than raw AI output** — there IS a large, obvious difference
   between "with ProdigeUI" and "without." If there's no visible difference, Creative Mode
   has failed its entire purpose.
3. It passes accessibility, performance, and the craft-presence rubric.

**Enhancement Mode passes when:**
1. **It honors the designer's intent** (colors, layout, media, chosen techniques).
2. **The chosen techniques are executed at reference quality** (smooth, seamless, 60fps).
3. **It is never worse than the brief** — no broken assets, no added jank, no slowed
   interaction. DO NO HARM.
4. **A keyboard-only user can use it** (they often can't use the un-enhanced version).
5. **A screen reader user gets meaningful announcements.**
6. **It loads and runs at least as fast as the brief** — preloading and GPU-only motion,
   never heavier.

> The earlier rule "with and without ProdigeUI must look IDENTICAL" was wrong. In Creative
> Mode they must look DIFFERENT (better). In Enhancement Mode they share the same intent,
> but the enhanced version is executed correctly and is production-ready — and, above all,
> never degraded.

---

## Sources

- Astryx (Meta): "Guidance over enforcement" — the system gives CAPABILITY, not GUARDRAILS that fight you
- transitions.dev: Quality enhancements are "self-contained" and can be applied "without pulling in demo-specific markup"
- Refactoring UI: "Don't design too much" — start with the feature, enhance later
- taste-skill: "If you can confidently infer from context, do not ask. Just proceed." — follow the designer's intent
- Norman (Design of Everyday Things): "Design for errors" — quality means graceful handling, not prevention of user choices

---

## Integration with AGENTS.md

AGENTS.md should reference this document:

> **Read PHILOSOPHY.md first.** ProdigeUI enhances designs — it does not replace them. If a user provides specific design direction, follow it exactly and add quality enhancements as an invisible layer. The anti-slop rules, token system, and design rules are defaults for when no direction exists, not overrides for explicit creative choices.
