# Design Rules — Rationale & Sources

Every rule in this document is backed by established design theory, cognitive psychology research, or accessibility standards. Rules are organized by domain (typography, color, layout, structure) and each cites its source material. Where multiple sources converge on the same principle, confidence is highest.

---

## Typography

### Scale Ratio: 1.25 (Major Third)

**Rule:** All font sizes derive from a modular scale with ratio 1.25, generating the sequence: 12, 14, 16, 20, 24, 32, 40, 48 (base 16px).

**Source:** The Elements of Typographic Style (Robert Bringhurst) — modular scales based on musical intervals produce natural visual harmony; Practical UI (Adham Dannaway); Design Elements (Timothy Samara).

**Rationale:** A fixed ratio prevents arbitrary type sizing — one of the clearest indicators of amateur or AI-generated design. The major third (1.25) provides sufficient contrast between levels without dramatic jumps, making it ideal for body-centric UI interfaces. For editorial/marketing contexts, 1.333 (perfect fourth) may be substituted.

### Line Height: 1.4–1.6 for Body, 1.1–1.2 for Headings

**Rule:** Body text line-height is expressed as a ratio of font-size, constrained to 1.4–1.6. Headings use 1.1–1.2. Small text (< 14px) uses 1.6–1.8.

**Source:** The Elements of Typographic Style (Bringhurst); Practical UI (Dannaway); Web UI Design for the Human Eye (Cao).

**Rationale:** Below 1.4 the eye struggles to track back to the next line; above 1.6 lines lose cohesion and feel disconnected. Headings sit tighter because their larger size already provides sufficient internal whitespace. Small text needs more breathing room to remain legible.

### Line Length (Measure): 45–75 Characters

**Rule:** Optimal line length for body text is 45–75 characters, with 66 characters (~720px) as the ideal.

**Source:** The Elements of Typographic Style (Bringhurst); Designing with the Mind in Mind (Johnson).

**Rationale:** Lines that are too long cause the eye to lose its place on line return. Lines that are too short cause uncomfortable word breaks and interrupt reading rhythm. The 66-character sweet spot maximizes reading speed and comprehension.

### Maximum 2 Fonts, 3–4 Weights

**Rule:** Use at most 2 typefaces (heading + body) plus monospace for code. Within each typeface, use at most 3–4 weights (regular 400, medium 500, semibold 600, bold 700).

**Source:** The Elements of Typographic Style (Bringhurst); Graphic Design Rules (Bucher); Practical UI (Dannaway); Refactoring UI (Wathan & Schoger).

**Rationale:** Every additional font or weight reduces visual consistency and increases cognitive load. Limiting to 2 fonts forces deliberate pairing decisions. 3–4 weights provide enough hierarchy (body, emphasis, headings, strong headings) without noise.

### Minimum Font Size: 16px Body, 12px Caption

**Rule:** Body text minimum 16px (1rem). Caption and helper text minimum 12px. Nothing smaller is permitted.

**Source:** WCAG 2.1 AA accessibility guidelines; Practical UI (Dannaway); Mobile App UX Principles.

**Rationale:** 16px is the browser default and the threshold below which readability degrades for significant portions of users. 12px is the absolute floor for supplementary text that is not critical for comprehension.

### Letter-Spacing Adjustments

**Rule:** Headings >24px receive tighter tracking (-0.01em to -0.02em). Small text <12px receives looser tracking (+0.01em).

**Source:** The Elements of Typographic Style (Bringhurst).

**Rationale:** Large type appears visually looser at scale due to optical illusion — tightening restores apparent evenness. Small type needs more air between characters to remain distinguishable.

---

## Color

### Contrast: 4.5:1 Normal Text, 3:1 Large Text

**Rule:** Every text/background pair must achieve 4.5:1 contrast for normal text (<18pt) and 3:1 for large text (>=18pt or >=14pt bold). Non-text UI elements and focus indicators require 3:1.

**Source:** WCAG 2.1 AA (W3C); Laws of UX (Jon Yablonski); 100 Things Every Designer Needs to Know about People (Susan Weinschenk).

**Rationale:** Based on relative luminance perception research. The 4.5:1 threshold ensures readability for users with moderately low vision (common with aging). 3:1 for large text is acceptable because larger letterforms provide more visual information per character.

### Maximum 5–7 Palette Colors

**Rule:** A design should use 5–7 perceptually distinct colors maximum: primary, secondary, neutral, plus semantic states (success, warning, error, info).

**Source:** Miller's Law — Laws of UX (Yablonski); Color Works (Opara & Cantwell); Contemporary Color Theory (Bleicher).

**Rationale:** Working memory holds 7 plus/minus 2 items. Beyond this threshold, users cannot maintain a consistent mental model of color meaning. Each color must have a distinct semantic role.

### Color Roles, Not Color Values

**Rule:** Colors are assigned by role (surface, foreground, primary, accent, destructive, etc.) not by their literal value. Tokens use semantic names exclusively.

**Source:** Color Works (Opara & Cantwell); open-design-main color role system; Semantic-UI theming architecture.

**Rationale:** Role-based color naming enables theme switching without breaking component logic. It also makes intent explicit — a developer referencing `color.destructive` communicates meaning, whereas `#ef4444` communicates nothing.

### Never Rely on Color Alone

**Rule:** Color must always be paired with a secondary indicator (icon, text label, pattern, or position) for communicating state or meaning.

**Source:** WCAG 2.1 AA (1.4.1 Use of Color); Color Works (Opara & Cantwell); 100 Things Every Designer Needs to Know (Weinschenk).

**Rationale:** Approximately 8% of males have some form of color vision deficiency. Relying solely on color to convey information creates an inaccessible experience for a significant user population.

### Primary CTA Distinction: 3:1 Against Surroundings

**Rule:** The primary call-to-action element must achieve at least 3:1 contrast ratio against its immediately surrounding elements.

**Source:** Laws of UX — Von Restorff Effect (Yablonski); Refactoring UI (Wathan & Schoger).

**Rationale:** The Von Restorff Effect demonstrates that items which visually differ from their surroundings are more memorable and more likely to receive action. Sufficient contrast ensures the primary action is unambiguous.

---

## Layout

### 12-Column Grid (Desktop), 8-Column (Tablet), 4-Column (Mobile)

**Rule:** Desktop layouts use 12 columns; tablet uses 8; mobile uses 4.

**Source:** Grid Systems in Graphic Design (Josef Mueller-Brockmann); Practical UI (Dannaway); universal responsive convention.

**Rationale:** 12 is divisible by 2, 3, 4, and 6 — providing maximum layout flexibility for common content arrangements (halves, thirds, quarters, sixths). 8 columns on tablet and 4 on mobile maintain proportional flexibility at reduced widths.

### 4px Base Unit, 8px Primary Step

**Rule:** The smallest spacing increment is 4px. The primary spacing step used for most component-level decisions is 8px. All measurements must be multiples of 4px.

**Source:** Grid Systems in Graphic Design (Mueller-Brockmann); Practical UI (Dannaway); pearl-ui spacing system.

**Rationale:** 4px is the finest granularity needed (icon padding, badge spacing, hairline adjustments) while maintaining mathematical consistency. 8px covers 90% of practical use cases (component padding, gaps, margins). Enforcing multiples of 4px eliminates arbitrary spacing — a hallmark of AI-generated designs.

### Responsive Breakpoints

**Rule:** Minimum 3 breakpoints — Mobile: <640px, Tablet: 640–1023px, Desktop: >=1024px. Extended: Large >=1440px.

**Source:** Grid Systems (Mueller-Brockmann) adapted for responsive; Practical UI (Dannaway); content-based responsive methodology.

**Rationale:** These breakpoints align with common device categories while being content-driven rather than device-specific. The three-tier minimum ensures layouts adapt meaningfully rather than simply scaling.

### Container Max-Width: 1200–1440px

**Rule:** Content containers cap at 1200–1440px. Text blocks cap at 720px (~65 characters).

**Source:** Grid Systems (Mueller-Brockmann); The Elements of Typographic Style (Bringhurst); Practical UI (Dannaway).

**Rationale:** Beyond 1440px, content becomes difficult to scan and line lengths exceed comfortable reading. The 720px text limit directly enforces the 45–75 character measure rule from typography.

### Outer Margins >= Gutter Width

**Rule:** Page outer margins must be at least equal to the internal gutter width.

**Source:** Grid Systems in Graphic Design (Mueller-Brockmann).

**Rationale:** Visual framing requires that content does not press against viewport edges. When margins are thinner than gutters, the edge of the screen becomes the tightest space on the page, creating visual tension.

---

## Structure

### Maximum 7 Navigation Items Per Level

**Rule:** Navigation presents at most 7 items per level (recommended: 5).

**Source:** Laws of UX — Miller's Law (Yablonski); 100 Things Every Designer Needs to Know about People (Weinschenk); Hick's Law.

**Rationale:** Working memory capacity is 7 plus/minus 2 chunks. Beyond this limit, users cannot hold all options in mind simultaneously, increasing selection time and error rate. 5 items is the comfortable optimum where scanning remains instant.

### Maximum 3 Navigation Depth Levels

**Rule:** Navigation hierarchy goes no deeper than 3 levels.

**Source:** Don't Make Me Think (Steve Krug); Laws of UX — Hick's Law (Yablonski).

**Rationale:** Each navigation level multiplies decision time (Hick's Law). At 3 levels deep, users already face compounded cognitive cost. Beyond 3, users lose orientation and abandon tasks. Flat information architecture is always preferred.

### Maximum 5 Decisions Per Screen

**Rule:** A single screen presents no more than 5 distinct decision points.

**Source:** Laws of UX — Hick's Law (Yablonski); Design for How People Think (Whalen).

**Rationale:** Decision fatigue sets in proportionally with option count. The paradox of choice research demonstrates that beyond 5 options, satisfaction decreases even when a choice is made. Limiting decisions forces progressive disclosure.

### Visual Hierarchy: Size > Weight > Color > Position

**Rule:** Hierarchy is established through (in order of effectiveness): size differentiation, weight differentiation, color differentiation, positional differentiation.

**Source:** Web UI Design for the Human Eye (Cao); Refactoring UI (Wathan & Schoger); Universal Principles of Design (Lidwell).

**Rationale:** Size differences are processed pre-attentively (within 200ms) and are the strongest hierarchy signal. Weight provides secondary differentiation within same-size text. Color is processed after form. Position is the weakest signal alone but reinforces the others.

### Touch Target: 44px Mobile, 32px Desktop

**Rule:** Interactive elements have minimum 44x44px hit area on touch devices, 32x32px on pointer devices. The hit area may exceed visual bounds via padding.

**Source:** Laws of UX — Fitts's Law (Yablonski); 100 Things Every Designer Needs to Know (Weinschenk); WCAG 2.5.5; Mobile App UX Principles.

**Rationale:** Fitts's Law establishes that smaller targets require exponentially more time to acquire. 44px corresponds to the average adult fingertip contact area. Below this, touch error rates climb sharply.

### Spacing Rhythm: Proximity Signals Relationship

**Rule:** Related elements are spaced tighter than unrelated elements. The ratio should be at least 2:1 (unrelated spacing is 2x or more than related spacing).

**Source:** Universal Principles of Design — Gestalt Law of Proximity (Lidwell); Practical UI (Dannaway); Grid Systems (Mueller-Brockmann).

**Rationale:** The Gestalt principle of proximity is one of the strongest perceptual grouping cues. When spacing is uniform throughout a layout, users cannot determine which elements belong together without reading every label.

### Maximum 1 Primary CTA Per Viewport

**Rule:** Each visible viewport contains at most one primary call-to-action.

**Source:** Laws of UX — Von Restorff Effect (Yablonski); Don't Make Me Think (Krug).

**Rationale:** When everything is emphasized, nothing is. Multiple competing primary actions dilute attention and reduce conversion. Secondary actions should be visually subordinate (ghost, outline, or text-link style).

### Content Chunking: 5–7 Items Per Group

**Rule:** Lists, grids, and feature sections chunk content into groups of 5–7 items.

**Source:** Laws of UX — Miller's Law (Yablonski); 100 Things Every Designer Needs to Know (Weinschenk).

**Rationale:** Chunking leverages working memory limits — instead of processing N individual items, the brain processes M chunks. Groups larger than 7 overwhelm this mechanism and require visual scanning rather than comprehension.

### Form Fields: Maximum 5 Per Visual Group

**Rule:** Form sections contain no more than 5 fields per visual group. Longer forms use step-based or section-based progressive disclosure.

**Source:** Designing UX Forms (Jarrett & Gaffney); Laws of UX — Miller's Law (Yablonski); Don't Make Me Think (Krug).

**Rationale:** Seeing more than 5 fields at once triggers abandonment anxiety. Breaking forms into logical groups of 5 or fewer reduces perceived complexity while maintaining the same total field count.

---

## Accessibility

### Focus Indicator: 3:1 Contrast, 2px Minimum

**Rule:** All interactive elements display a visible focus indicator with at least 3:1 contrast against the adjacent background and at least 2px outline offset.

**Source:** WCAG 2.1 AA (2.4.7 Focus Visible); Laws of UX (Yablonski); Designing Interfaces (Tidwell).

**Rationale:** Keyboard-only users depend entirely on focus indicators for orientation. Without sufficient contrast, the indicator becomes invisible on many backgrounds, creating an inaccessible experience.

### No Keyboard Traps

**Rule:** Focus can always be moved away from any interactive element using standard keyboard navigation (Tab, Shift+Tab, Escape).

**Source:** WCAG 2.1 AA (2.1.2 No Keyboard Trap); 100 Things Every Designer Needs to Know (Weinschenk).

**Rationale:** A keyboard trap strands users with no escape path, forcing a page reload. Modal overlays must provide Escape dismissal; composite widgets must allow Tab to exit.

### Reduce-Motion Compliance

**Rule:** When `prefers-reduced-motion: reduce` is active, all decorative animations are disabled. Essential animations are limited to 100ms duration with opacity-only transitions — no position-based movement or parallax.

**Source:** WCAG 2.1 AA (2.3.3 Animation from Interactions); Animation for the Web; design-motion-principles (repo); transitions.dev (repo).

**Rationale:** Motion sensitivity affects a significant population including users with vestibular disorders, migraine conditions, and attention difficulties. Respecting this preference is both an accessibility requirement and a user trust signal.

---

## Forms

> **Rule file:** `form.rules.json`
> **Primary sources:** Designing UX Forms (Jessica Enders/Jarrett & Gaffney), Don't Make Me Think (Steve Krug), Laws of UX (Jon Yablonski — Hick's Law, Miller's Law, Zeigarnik Effect, Fitts's Law)

### Max 5 Fields Per Group, 7 Per Page

**Rule:** Form sections contain no more than 5 fields per visual group. A single page displays no more than 7 total visible fields before requiring pagination or progressive disclosure.

**Source:** Miller's Law (7±2 working memory limit) applied to form context; Designing UX Forms Ch.2 & Ch.4.

**Rationale:** Beyond 7 visible fields, form abandonment rate increases 15-20% per additional field. Grouping into chunks of 5 leverages working memory chunking while keeping perceived complexity low.

### Labels Above Field, Errors Below

**Rule:** Field labels are placed directly above input fields. Validation error messages appear directly below the associated field.

**Source:** Designing UX Forms Ch.6; Matteo Penzo eye-tracking study; Luke Wroblewski inline validation research.

**Rationale:** Above-field labels produce the fastest form completion times in eye-tracking studies. Below-field errors maintain reading flow and proximity to the input that needs correction. Inline validation on blur (after first submit attempt) reduces errors by 22%.

### Input Height and Touch Targets

**Rule:** Minimum input height is 44px for touch, standard range 40-48px. Submit button is left-aligned following natural reading flow.

**Source:** Fitts's Law (Laws of UX); Apple HIG; Don't Make Me Think Ch.3; Practical UI.

**Rationale:** Fitts's Law establishes exponential difficulty increase for small targets. Left-aligned submit follows the natural F-pattern reading flow, reducing eye travel distance to find the primary action.

### Progress Indicators for Multi-Step Forms

**Rule:** Multi-step forms (>3 steps) must display a progress indicator showing current position and total steps.

**Source:** Zeigarnik Effect — Laws of UX (Yablonski).

**Rationale:** The Zeigarnik Effect demonstrates that people remember incomplete tasks better than completed ones. A visible progress indicator leverages this by creating a psychological commitment to finish, significantly improving completion rates.

---

## Data Visualization

> **Rule file:** `data-visualization.rules.json`
> **Primary sources:** Color Works (Eddie Opara), 100 Things Every Designer Needs to Know (Susan Weinschenk), Laws of UX (Jon Yablonski), Practical UI (Adham Dannaway), Edward Tufte principles

### Max 7 Series Colors, Direct Labels

**Rule:** Charts display at most 7 distinct series colors. Data series should be labeled directly on or adjacent to the data rather than using a separate legend.

**Source:** Miller's Law (Laws of UX); Color Works Ch.3; Edward Tufte data-ink ratio principle; Refactoring UI.

**Rationale:** Beyond 7 colors, users cannot maintain distinct mental associations between colors and their meanings. Direct labeling eliminates the cognitive cost of legend lookup — matching color in chart to color in legend requires working memory that should be spent on data comprehension.

### Grid Lines Recede, Data Dominates

**Rule:** Grid lines use low opacity (0.3), dashed/dotted style, and border-level color. They must never compete visually with data marks.

**Source:** Edward Tufte's data-ink ratio principle; Practical UI (Dannaway).

**Rationale:** The data-ink ratio principle states that ink (pixels) should maximally encode data. Non-data elements (grid lines, borders, backgrounds) should recede to the minimum needed for spatial reference without drawing attention.

### Accessibility: Never Color Alone, 3:1 Series Contrast

**Rule:** Data series differentiation never relies solely on color. Patterns, shapes, line styles, or direct labels must supplement color. Adjacent series must maintain 3:1 contrast ratio.

**Source:** WCAG 1.4.1; 100 Things #34 (Weinschenk); Color Works (Opara).

**Rationale:** 8% of males have color vision deficiency. Without secondary cues, these users cannot distinguish data series. The 3:1 minimum ensures even users with reduced vision can perceive series boundaries.

### Required States: Empty, Loading, Tooltip

**Rule:** Every chart component must implement empty state, loading skeleton, and hover tooltip. Tooltips show value first, then label context.

**Source:** Don't Make Me Think Ch.6 (orientation); Practical UI (state completeness methodology).

**Rationale:** A chart without data context (empty state) or loading feedback creates uncertainty. Tooltips providing value-first format respect the user's primary question: "what is this number?" before "what category is this?"

---

## Responsive Behavior

> **Rule file:** `responsive.rules.json`
> **Primary sources:** Grid Systems in Graphic Design (Josef Mueller-Brockmann), Practical UI (Adham Dannaway), Mobile App UX Principles, Atomic Design (Brad Frost), The Elements of Typographic Style (Robert Bringhurst)

### Mobile-First with Content Priority

**Rule:** Design mobile-first. Content priority follows "essential-first, supplementary-progressive" — essential content renders immediately, supplementary content loads on demand.

**Source:** Mobile App UX Principles; Grid Systems adapted for responsive; Don't Make Me Think (progressive disclosure).

**Rationale:** Mobile-first forces designers to identify truly essential content before decoration. Progressive disclosure reduces cognitive load by presenting only what's needed at each decision point, revealing complexity only when requested.

### Fluid Typography with Clamp Bounds

**Rule:** Typography scales fluidly between 375px (mobile) and 1440px (desktop) viewports using CSS clamp() with defined minimums and maximums.

**Source:** The Elements of Typographic Style (Bringhurst); modern CSS responsive methodology.

**Rationale:** Fixed breakpoint jumps create jarring text size changes. Fluid scaling maintains reading rhythm across all viewport widths while clamp() boundaries prevent text from becoming too small (mobile) or too large (ultra-wide).

### Component Adaptation by Atomic Level

**Rule:** Atoms scale only (size change). Molecules can reflow (e.g., label moves from beside to above). Organisms can restructure entirely (e.g., sidebar becomes bottom sheet).

**Source:** Atomic Design (Brad Frost) — component hierarchy defines adaptation behavior.

**Rationale:** Atoms are the smallest indivisible design units — changing their layout would break their identity. Molecules have internal relationships that can be rearranged. Organisms are complex enough that entirely different structural patterns may serve the same purpose at different screen sizes.

### Spacing Scales Proportionally

**Rule:** Spacing uses a multiplier system: mobile 0.75x, tablet 0.875x, desktop 1.0x of base tokens.

**Source:** Grid Systems (Mueller-Brockmann) — proportional reduction maintains rhythm; spacing as percentage of base preserves ratios.

**Rationale:** Uniform reduction maintains the relative hierarchy of spacing relationships (grouping, separation) while fitting content into smaller viewports. The rhythm established at desktop transfers proportionally rather than collapsing arbitrarily.

---

## References (Full Bibliography)

| Short Name | Full Title | Author(s) |
|---|---|---|
| Typographic Style | The Elements of Typographic Style | Robert Bringhurst |
| Grid Systems | Grid Systems in Graphic Design | Josef Mueller-Brockmann |
| Laws of UX | Laws of UX: Using Psychology to Design Better Products | Jon Yablonski |
| 100 Things | 100 Things Every Designer Needs to Know about People | Susan Weinschenk |
| Practical UI | Practical UI | Adham Dannaway |
| Refactoring UI | Refactoring UI | Adam Wathan & Steve Schoger |
| Don't Make Me Think | Don't Make Me Think, Revisited | Steve Krug |
| Color Works | Color Works: Best Practices for Graphic Designers | Eddie Opara & John Cantwell |
| Design Elements | Design Elements: A Graphic Style Manual | Timothy Samara |
| Universal Principles | Universal Principles of Design | William Lidwell et al. |
| Designing Interfaces | Designing Interfaces | Jenifer Tidwell |
| Web UI Human Eye | Web UI Design for the Human Eye | Jerry Cao |
| Contemporary Color | Contemporary Color Theory and Use | Steven Bleicher |
| Mobile UX | Mobile App UX Principles | Various |
| Animation Web | Animation for the Web | Various |
| Designing with Mind | Designing with the Mind in Mind | Jeff Johnson |
| Graphic Design Rules | Graphic Design Rules | Stefan G. Bucher |
| Design for People Think | Design for How People Think | John Whalen |
| Designing UX Forms | Designing UX: Forms | Jessica Jarrett & Caroline Gaffney |
| Atomic Design | Atomic Design | Brad Frost |
| Refactoring UI | Refactoring UI | Adam Wathan & Steve Schoger |
| Edward Tufte | The Visual Display of Quantitative Information | Edward Tufte |
