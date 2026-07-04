---
sourceId: astryx-main
sourceType: repo
sourceName: "astryx-main"
sourceLocation: "Skill & Library/astryx-main"
appliedTo: ["tokens/", "themes/", "motion/", "components/", "design-rules/", "quality-gate/"]
---

## Structural Analysis

THE most architecturally advanced design system in our research corpus. 8 years of internal Meta production use across 13,000+ apps. Key architectural innovations:

**Theme Definition API (defineTheme.ts):**
- Single `defineTheme()` function that orchestrates color, type, radius, and motion scale expansion
- Precedence chain: base theme -> color-generated -> typeScale-generated -> radius-generated -> motion-generated -> explicit token overrides (highest)
- Theme inheritance via `extends` property
- Component style overrides via StyleOverrides (per-variant, per-state, including pseudo-class overrides like :hover, :focus-visible)
- On-media token overrides for surface-aware styling (onDark/onLight sections)
- Built themes compile to static CSS; unbuilt themes inject runtime style tags

**HCT Perceptual Color Model (hct.ts + expandColorScale.ts):**
- Full implementation of HCT (Hue-Chroma-Tone) color space
- Gamut mapping via chroma reduction (binary search for in-gamut sRGB)
- Tonal palette generation at 14 standard tones: 0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100
- Neutral color warmth control: warm(7 chroma), cool(5), neutral(3) + variant(10/8/6)
- Contrast-aware tone assignment: standard vs high contrast modes affect text tone selection
- CSS light-dark() function for automatic mode switching
- Only generates DERIVABLE tokens from accent color; status colors and categorical hues fall through to defaults

**Geometric Type Scale (expandTypeScale.ts):**
- Formula: size = base * ratio^step
- 12-step scale from -5 (4xs) to +6 (5xl), anchor at step 0 (base)
- Two-layer architecture: raw size tokens (rem) + semantic tokens (var() references)
- Tiered line-height ratios: <20px -> 1.5, 20-31px -> 1.4, >=32px -> 1.25
- 4px-grid-snapped line heights with minimum fontSize+4 gap
- Default weights: headings=semibold, body=normal, label=medium, large=semibold, display=normal
- Suggested configs: Dense/functional {base:12, ratio:1.125}, Default {base:14, ratio:1.2}, Airy/editorial {base:16, ratio:1.25}
- Heading step mapping: h1=+3, h2=+2, h3=+1, h4=0, h5=-1, h6=-2
- Text type steps: body=0, large=+1, label=0, code=0, supporting=-1, display-1=+6, display-2=+5, display-3=+4

**Radius Scale (expandRadiusScale.ts):**
- Semantic naming: none, inner(x1), element(x2), container(x3), page(x7), full(9999px)
- Formula: base * step * multiplier (default base=4, multiplier=1)
- Multiplier=0 produces brutalist (all 0). Multiplier=1.5 produces extra-rounded.
- Fixed anchors: none(0px) and full(9999px) never change

**Motion Scale (expandMotionScale.ts):**
- Three duration bands: fast (micro), medium (entrance/exit), slow (continuous)
- Ratio-based min/max: min = base * ratio, max = base / ratio
- Default: fast=175ms, medium=410ms, slow=975ms, ratio=0.75
- Suggested configs: Snappy {fast:100, medium:250, ratio:0.75}, Cinematic {fast:200, medium:500, slow:1200, ratio:0.7}
- Durations rounded to nearest 5ms for clean values
- Optional easing curve override for --ease-standard

**Component Architecture (150+ components):**
- Categories found in src/: AlertDialog, AppShell, Avatar, Badge, Banner, Breadcrumbs, Button, Calendar, Card, Carousel, Chat, Checkbox, Code, CodeBlock, Collapsible, CommandPalette, ContextMenu, DateInput, DateRange, DateTimeInput, Dialog, Divider, Dropdown, EmptyState, Field, FieldStatus, FileInput, FormLayout, Grid, Heading, HoverCard, HStack, Icon, IconButton, InputGroup, Item, Kbd, Layer, Layout, Lightbox, Link, List, Markdown, MetadataList, MobileNav, MoreMenu, MultiSelector, NavIcon, NavItem, NavMenu, NumberInput, Outline, OverflowList, Overlay, Pagination, Popover, PowerSearch, ProgressBar, RadioList, Resizable, Section, SegmentedControl, SelectableCard, Selector, SideNav, Skeleton, Slider, Spinner, Stack, StatusDot, Switch, Table, TabList, Text, TextArea, TextInput, Thumbnail, TimeInput, Timestamp, Toast, ToggleButton, Token, Tokenizer, Toolbar, Tooltip, TopNav, TreeList, Typeahead, VisuallyHidden, VStack
- Each component has: source, tests (colocated), doc.mjs (structured documentation)
- Documentation via ComponentDoc objects with JSDoc annotations
- BaseProps.ts for shared prop interface across all components

**CLAUDE.md Agent Integration:**
- CLI commands for AI discovery: `$ASTRYX component --list`, `$ASTRYX docs principles --dense`
- Structured documentation format: --dense flag for token-efficient AI consumption
- Vibe tests: automated testing of how well LLMs generate correct component code
- Rules: "always run bootstrap on each branch", "always run component docs before modifying"
- StyleX capabilities reference embedded directly in CLAUDE.md

**Theme Presets (7 themes):**
- neutral, butter, chocolate, matcha, stone, gothic, y2k
- Each theme is a package at packages/themes/name/
- Theme names represent distinct visual personalities

## Content Quality Audit

**Genuinely exceptional content (production-grade):**
- HCT color model is THE gold standard for perceptual color palette generation
- Type scale with 4px grid snapping directly implements Bringhurst's vertical rhythm
- Tiered line-height ratios are scientifically correct (backed by readability research)
- Radius semantic naming (inner/element/container/page) is more meaningful than sm/md/lg
- Motion ratio system ensures proportional timing relationships across the entire system
- Component style override system is the most flexible found in any repo (per-variant, per-state, pseudo-class)
- defineTheme precedence chain elegantly handles conflicts between generated and explicit tokens

**Insights for ProdigeUI that we MUST adopt:**
1. HCT over HSL for palette generation (perceptually uniform)
2. light-dark() CSS function for automatic color mode
3. Tiered line-height (<20px -> 1.5, 20-31px -> 1.4, >=32px -> 1.25) instead of fixed values
4. 4px grid snapping for line heights
5. Semantic radius naming (inner/element/container/page vs sm/md/lg)
6. Duration ratio system (min=base*ratio, max=base/ratio) instead of arbitrary durations
7. Type scale "suggested starting points" per context (dense, default, editorial)
8. Component style overrides that support pseudo-class targeting
9. Neutral warmth parameter (warm/cool/neutral chroma control)
10. Tone-aware contrast levels (standard vs high)

## Gap Analysis vs Theory

**How astryx implements book theory:**
- Bringhurst's vertical rhythm -> 4px-grid-snapped line heights + baseline unit
- Mueller-Brockmann's proportional grid -> base * multiplier radius system
- Color Works perceptual uniformity -> HCT color space (not HSL/RGB)
- Practical UI shadow hierarchy -> elevation as semantic concept
- Designing Interface Animation timing -> ratio-based duration expansion
- Atomic Design -> rich component hierarchy (150+ components with clear boundaries)

**What astryx adds beyond books:**
- Automated scale expansion from minimal config (one accent color -> full theme)
- Runtime CSS injection for unbuilt themes (development) + pre-compiled for production
- Gamut mapping (binary search for valid sRGB from HCT coordinates)
- Surface-aware token overrides (onDark/onLight media overrides)
- AI-first documentation format (--dense CLI output for token efficiency)

## Improvement Blueprint

| Astryx Pattern | ProdigeUI Adoption | Enhancement |
|---|---|---|
| HCT color model | Adopt for palette generation | Add palette validation (min contrast between adjacent tones) |
| Tiered line-height | Replace fixed line-height values | Add per-component line-height overrides |
| Radius semantic naming | Adopt inner/element/container/page | Add document source citation per name |
| Duration ratio system | Adopt min/base/max per band | Add frequency-gate integration (motion-design-skill) |
| Type scale configs | Adopt dense/default/airy presets | Map to Three Dials VISUAL_DENSITY parameter |
| Component style overrides | Document override API pattern | Add Quality Gate validation for overrides |
| light-dark() function | Adopt for theme token values | Add fallback for older browsers |
| Neutral warmth | Adopt warm/cool/neutral parameter | Add cultural context guidance |
| AI-dense documentation | Adopt --dense concept for skills/docs | Integrate into AGENTS.md format |
| Vibe testing methodology | Adapt for ProdigeUI validation | Create vibe test prompts for our components |

## Adaptation Strategy

Astryx represents the HIGHEST QUALITY production design system in our research. ProdigeUI should adopt its architecture wholesale for:

1. **Palette generation** -> Replace simple HSL palette with HCT-based generation. Add to color-palette-generation skill.
2. **Type scale** -> Adopt geometric progression + 4px grid snapping + tiered line-heights. Update typography.rules.json.
3. **Radius naming** -> Migrate from sm/md/lg to inner/element/container/page semantic naming.
4. **Motion architecture** -> Adopt ratio-based min/base/max duration bands with context configs (snappy/default/cinematic).
5. **Theme definition** -> Adopt single-function theme definition with ordered precedence.
6. **AI integration** -> Adopt --dense documentation format and vibe testing methodology.

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| HCT color space | `skills/color-palette-generation/SKILL.md` | Step 2 tonal scale | Perceptually uniform > HSL |
| Tiered line-height | `design-rules/typography.rules.json` | `lineHeightBody` -> tiered object | Scientific readability basis |
| 4px grid snap | `design-rules/typography.rules.json` | `verticalRhythmGrid: 4` | Bringhurst vertical rhythm |
| Radius semantics | `tokens/semantic.tokens.json` | radius.inner/element/container/page | Meaningful names > arbitrary sizes |
| Duration ratio | `motion/motion.tokens.json` | fast-min/fast/fast-max pattern | Proportional timing relationships |
| Type configs | `design-rules/typography.rules.json` | `presets: {dense, default, editorial}` | Context-appropriate type scales |
| Neutral warmth | `themes/creating-a-theme.md` | neutralStyle parameter | Brand warmth control |
| Tone contrast | `quality-gate/criteria.json` | contrast-standard vs contrast-high | Accessibility flexibility |
| light-dark() | `tokens/build/tokens.css` | Token output format | Automatic color mode |
| --dense docs | `AGENTS.md` | Documentation density modes | AI token efficiency |
| Vibe tests | `quality-gate/` | Prompt-based validation methodology | Measures actual LLM output quality |
| 150+ components | `components/components.manifest.json` | Coverage goal | Meta-scale component vocabulary |
| StyleX no-lock-in | `AGENTS.md` | Principle: no styling lock-in | ProdigeUI already follows this |
| Component doc.mjs | Component documentation format | Structured doc export pattern | Machine-readable component docs |

## Points Copied

- HCT (Hue-Chroma-Tone) perceptual color model for palette generation
- Geometric type scale formula: size = base * ratio^step
- Tiered line-height targets: <20px -> 1.5, 20-31px -> 1.4, >=32px -> 1.25
- 4px grid snapping for computed line heights
- Radius semantic naming: none/inner/element/container/page/full
- Duration ratio expansion: min = base * ratio, max = base / ratio
- Theme precedence chain: base -> generated -> explicit overrides
- light-dark() CSS function for color mode tokens
- Neutral warmth parameter (warm/cool/neutral chroma control)
- Component style override system (base + variant + pseudo-class)
- AI-first documentation (--dense mode for token efficiency)

## Points Improved/Fixed

- HCT implementation enhanced with ProdigeUI-specific palette validation (min contrast between adjacent tones)
- Type scale integrated with Three Dials system (VISUAL_DENSITY maps to dense/default/editorial configs)
- Duration bands integrated with frequency gate from motion-design-skill (high-freq actions get fast-min only)
- Radius system enriched with research citations per semantic name
- Theme definition simplified for non-React consumers (pure JSON + CSS, not TypeScript)
- Component overrides connected to Quality Gate validation (overrides must pass anti-slop check)
- Neutral warmth connected to brand psychology research (Color Works + 100 Things)
- AI documentation format integrated with existing AGENTS.md structure

## Points Adapted

- TypeScript defineTheme() -> JSON theme definition + CSS custom property output
- StyleX internal styling -> framework-agnostic CSS custom property system
- React-specific theme provider -> platform-agnostic CSS cascade
- .doc.mjs component documentation -> JSON manifest format (already in place)
- Vibe test infrastructure -> Quality Gate prompt-based validation concept
- 150+ React components -> 40 framework-agnostic component specifications (can grow)
- Runtime style tag injection -> pre-compiled tokens/build/tokens.css
- pnpm monorepo -> single folder knowledge package (ProdigeUI architecture)

## Technical Deep Dive: HCT Color Model

The HCT (Hue-Chroma-Tone) model is the single most important technical innovation from astryx for ProdigeUI. Key implementation details:

- **Hue**: 0-360 degrees, perceptually uniform rotation (unlike HSL where green takes more arc)
- **Chroma**: 0-120+ unbounded saturation (higher = more vivid, but limited by gamut)
- **Tone**: 0-100 perceptual lightness (0=black, 100=white, 50=perceptual middle)
- **Gamut mapping**: When HCT coordinates fall outside sRGB, reduce chroma via binary search until in-gamut
- **14-tone palette**: Specific tones [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100] cover the full range
- **Tone assignment for text**: standard mode picks tones 10/90 for text; high contrast picks 0/100
- **Neutral generation**: Takes accent hue but reduces chroma drastically (3-10 depending on warmth setting)
- **Automatic light/dark**: Uses CSS light-dark() to select appropriate tone from the same palette

This replaces the naive HSL rotation approach where "same saturation" does NOT mean "same perceptual colorfulness." HCT guarantees that palette swatches at the same tone value LOOK equally light, regardless of hue.

## Technical Deep Dive: Theme Precedence Architecture

The defineTheme() precedence chain solves a fundamental problem: how do you let generated scales coexist with manual overrides without conflicts?

Resolution order (lowest to highest priority):
1. Base theme defaults (the fallback values when nothing else is specified)
2. Color-generated tokens (from expandColorScale using accent HCT)
3. TypeScale-generated tokens (from expandTypeScale using base/ratio config)
4. Radius-generated tokens (from expandRadiusScale using base/multiplier)
5. Motion-generated tokens (from expandMotionScale using fast/medium/slow/ratio)
6. Explicit token overrides (manually specified values that trump all generation)

This means you can say "generate everything from accent=#3B82F6" but then override `--color-primary-hover` specifically. The override wins. This eliminates the all-or-nothing problem where customization requires opting out of the entire generation system.

## Research Priority Classification

This note receives the HIGHEST relevance rating in our entire research corpus because:
- Production-proven at unprecedented scale (13,000+ apps, 8 years)
- Covers ALL ProdigeUI subsystems (tokens, themes, motion, components, quality)
- Innovations are concrete and implementable (formulas, algorithms, not opinions)
- Architecture is adaptable to framework-agnostic context (CSS custom properties)
- Directly addresses gaps identified in other research notes (perceptual color, vertical rhythm, semantic naming)