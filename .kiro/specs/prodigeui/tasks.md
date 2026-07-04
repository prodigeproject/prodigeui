# Implementation Plan: ProdigeUI

## Overview

Rencana ini memecah desain ProdigeUI menjadi langkah-langkah inkremental untuk membangun
**paket pengetahuan UI/UX portabel** (bukan aplikasi TypeScript). ProdigeUI adalah folder berisi
data files & dokumentasi (JSON schema, token files, manifest, markdown guides, prompt templates,
skill definitions) yang dikonsumsi oleh AI coding agents.

Pendekatan: **Scaffold → Research ALL sources (DEEP) → Cross-Synthesis → Write artifacts informed by research → Skills & Hooks → Minimal validation scripts.**

Konvensi:
- Seluruh artefak ditulis di dalam folder root `prodigeui/prodigeui/`
- Sumber riset repos: `c:/Users/Pc/Downloads/UI/Skill & Library/`
- Sumber riset buku: `c:/Users/Pc/Downloads/UI/Book/`
- Validasi = skrip utilitas ringan di `prodigeui/scripts/`, BUKAN aplikasi TypeScript
- Sub-task bertanda `*` bersifat opsional dan tidak wajib diimplementasikan untuk MVP

## Tasks

- [x] 1. Scaffold folder structure & infrastruktur dasar
  - [x] 1.1 Buat seluruh struktur folder `prodigeui/` sesuai desain
    - Buat folder root `prodigeui/` beserta sub-folder: `tokens/`, `tokens/build/`, `themes/`, `motion/`, `motion/presets/`, `components/`, `components/atoms/`, `components/molecules/`, `components/organisms/`, `assets/`, `assets/icons/`, `assets/fonts/`, `assets/illustrations/`, `design-system/`, `design-rules/`, `prompt-templates/`, `prompt-templates/saas/`, `prompt-templates/landing/`, `prompt-templates/ecommerce/`, `prompt-templates/portfolio/`, `prompt-templates/hris/`, `prompt-templates/agentic-app/`, `use-cases/`, `quality-gate/`, `skills/`, `hooks/`, `installers/`, `installers/adapters/`, `research/`, `research/notes/`
    - _Requirements: 1.1, 8.1_

  - [x] 1.2 Buat JSON schemas (token, theme, component manifest, asset manifest, report)
    - Tulis `tokens/tokens.schema.json` sesuai model data desain (layer, type, ref/value)
    - Tulis `themes/theme.schema.json` (name, mode, extends, overrides)
    - Tulis `components/components.manifest.json` (kosong/skeleton — akan diisi Phase 3)
    - Tulis `assets/assets.manifest.json` (skeleton)
    - Tulis `prompt-templates/template.schema.json`
    - Tulis `quality-gate/report.schema.json`
    - _Requirements: 3.1, 3.6, 4.1, 6.3, 7.2, 12.1_

  - [x] 1.3 Buat manifest.json, README.md, dan AGENTS.md skeleton
    - Tulis `manifest.json` (daftar & tipe setiap artefak yang ada/akan ada)
    - Tulis `README.md` (ikhtisar ProdigeUI + tautan instalasi + cara pakai)
    - Tulis `AGENTS.md` skeleton (tujuan sistem, struktur folder, cara menemukan/menjalankan skill — akan diperkaya setelah skills ditulis)
    - _Requirements: 1.1, 2.1_

  - [x] 1.4 Buat infrastruktur riset (research-log.json kosong & folder notes)
    - Tulis `research/research-log.json` dengan struktur `{ "notes": [] }`
    - Pastikan folder `research/notes/` tersedia
    - _Requirements: 14.1_

- [x] 2. Checkpoint — pastikan scaffold lengkap
  - Verifikasi semua folder & file skeleton ada sesuai desain. Tanyakan user jika ada pertanyaan.

- [x] 3. Riset repositori `Skill & Library` — Batch A (motion/animation)
  - [x] 3.1 Riset MENDALAM & buat Research_Note untuk repo-repo motion/animation
    - **Analisis Struktural**: Identifikasi pola arsitektural yang sound (folder structure, file format, naming conventions, token organization, API design patterns). Apa yang bisa di-adopt secara arsitektural?
    - **Audit Kualitas Konten**: Evaluasi setiap repo — di mana kontennya genuinely useful vs generic/shallow? Identifikasi pola "AI slop": deskripsi vague tanpa rationale, aturan inkonsisten, missing edge cases, placeholder tanpa substansi, naming yang tidak semantic
    - **Gap Analysis vs Teori**: Bandingkan apa yang repo sediakan dengan prinsip teori animasi/motion yang benar (12 principles of animation, purpose-driven motion, performance budgets). Di mana repo jatuh pendek dari standar expert?
    - **Improvement Blueprint**: Untuk setiap poin yang di-"copy", tuliskan SECARA SPESIFIK apa yang perlu diubah untuk mencapai kualitas expert (informed by buku riset nanti). Contoh: "timing values tanpa rationale → perlu ditambah justifikasi berdasarkan cognitive load theory"
    - **Adaptation Strategy**: Bagaimana mentransformasi pola practical dari repo ini menjadi framework Motion_Library ProdigeUI yang lebih rigorous dan theory-backed?
    - **Concrete Artefact Mapping**: Untuk SETIAP temuan, spesifikasikan artefak ProdigeUI mana yang terpengaruh dan BAGAIMANA. Contoh: "Easing curve taxonomy dari repo X → `motion/motion.tokens.json` field `easing` enum values; rationale: provides named abstractions instead of raw cubic-bezier"
    - Tambahkan entri ke `research/research-log.json` per note
    - Repo: `ant-motion-master`, `cssanimation-master`, `design-motion-principles-main`, `expo-motion-tabs-main`, `hyperframes-main`, `morphos-main`, `motion-design-skill-main`, `Motion-development`, `motion-ui-design-master`, `tailwindcss-motion-main`, `theatre-main`, `transitions.dev-main`, `smoothui-main`
    - _Requirements: 14.2, 14.4, 14.5, 14.6, 14.7_

- [x] 4. Riset repositori `Skill & Library` — Batch B (skills & design systems)
  - [x] 4.1 Riset MENDALAM & buat Research_Note untuk repo-repo skills & design systems
    - **Analisis Struktural**: Evaluasi arsitektur skill system — frontmatter format, trigger mechanism, registry pattern, folder conventions. Identifikasi apa yang architecturally sound vs overengineered vs terlalu simpel
    - **Audit Kualitas Konten**: Di mana isi skill/design system BENAR-BENAR substantif vs hanya surface-level bullet points? Cari: apakah ada rationale di balik setiap rule? Apakah edge cases ter-cover? Apakah ada contoh konkret yang actionable? Tandai setiap instance "AI slop" (generic advice tanpa depth, rule tanpa justifikasi, inconsistency antar skill)
    - **Gap Analysis vs Teori**: Bandingkan design rules/principles yang ada di repo dengan established design theory (Atomic Design, Gestalt principles, information hierarchy). Di mana repo memberikan aturan yang salah atau incomplete?
    - **Improvement Blueprint**: Untuk setiap poin "copy", spesifikasikan transformasi yang diperlukan. Contoh: "open-design skill step 'choose colors' → perlu diperkaya dengan: (1) color role definition referencing token system, (2) contrast verification step, (3) palette generation method based on color theory, bukan hanya 'pick nice colors'"
    - **Adaptation Strategy**: Bagaimana skill structure dari repo-repo ini ditransformasi menjadi ProdigeUI Skill yang LEBIH RIGOROUS — setiap langkah backed by Design_Rules, setiap output di-validate oleh Quality_Gate?
    - **Concrete Artefact Mapping**: Map temuan ke artefak spesifik. Contoh: "Frontmatter schema dari open-design → SKILL.md frontmatter format di ProdigeUI; TAPI ditambah: `outputs` field, `validates` field yang link ke Quality_Gate criteria"
    - Tambahkan entri ke `research/research-log.json` per note
    - Repo: `open-design-main`, `awesome-design-md-main`, `awesome-design-skills-main`, `claude-code-ui-agents-main`, `design-dna-main`, `emil skills-main`, `impeccable-main`, `skills-main`, `taste-skill-main`, `ui-ux-design-pro-skill-main`, `ui-ux-pro-max-skill-main`, `swiftui-design-skill-main`, `video-production-skills-main`
    - _Requirements: 14.2, 14.4, 14.5, 14.6, 14.7_

- [x] 5. Riset repositori `Skill & Library` — Batch C (UI libraries & tooling)
  - [x] 5.1 Riset MENDALAM & buat Research_Note untuk repo-repo UI libraries & tooling
    - **Analisis Struktural**: Evaluasi component architecture, token organization, theming approach, file naming, API patterns. Apa yang best-practice vs anti-pattern? Bagaimana mereka handle: variant system, state management, responsive behavior, accessibility?
    - **Audit Kualitas Konten**: Evaluasi depth komponen — apakah spesifikasi lengkap (semua states, semua props, semua a11y requirements)? Atau hanya surface "Button component" tanpa detail? Cari: hardcoded values, missing disabled states, no keyboard handling, generic descriptions
    - **Gap Analysis vs Teori**: Bandingkan component design dengan Atomic Design principles, accessibility standards (WCAG 2.1 AA), dan design token best practices. Di mana library ini gagal memenuhi standar enterprise?
    - **Improvement Blueprint**: Untuk setiap pola yang di-adopt, tuliskan upgrade path. Contoh: "shadcn/ui variant system → adopt pattern TAPI: (1) semua values harus referensi token bukan raw CSS, (2) tambah mandatory a11y spec per variant, (3) tambah state documentation (hover/focus/active/disabled/error), (4) tambah composition rules"
    - **Adaptation Strategy**: Bagaimana mentransformasi UI library patterns menjadi ProdigeUI Component_Library yang sepenuhnya token-driven, accessible, dan theory-backed?
    - **Concrete Artefact Mapping**: Map setiap temuan. Contoh: "Token structure dari pearl-ui → `tokens/component.tokens.json` naming pattern; shadcn variant enum → `components/components.manifest.json` variants field structure"
    - Tambahkan entri ke `research/research-log.json` per note
    - Repo: `arrow-js-main`, `Graphite-master`, `huashu-design-master`, `pearl-ui-main`, `react-main`, `Semantic-UI-master`, `seraui-main`, `ShipSwift-main`, `storybook-next`, `tixl-main`, `ui shadcn`, `ui-neumorphism-master`
    - _Requirements: 14.2, 14.4, 14.5, 14.6, 14.7_

- [x] 6. Riset buku `Book` — Batch A (root + koleksi warna)
  - [x] 6.1 Riset MENDALAM & buat Research_Note untuk buku-buku root dan koleksi warna
    - **Deep Read & Extract**: Baca secara thorough — ekstrak PRINSIP, FRAMEWORKS, METODOLOGI, dan ATURAN KONKRET, bukan hanya surface summary. Contoh: dari "Animation for the Web" ekstrak: timing principles (durasi optimal per jenis interaksi), easing curve selection rules, performance budgets, choreography patterns. Dari buku warna: color harmony formulas, contrast calculation methods, palette generation algorithms, color meaning across cultures
    - **Critical Analysis**: Evaluasi setiap prinsip — mana yang TIMELESS (Gestalt, cognitive load, contrast) vs OUTDATED (skeuomorphism-era tips)? Mana yang LANGSUNG applicable vs perlu adaptasi untuk AI-generated UI era (design tokens, component systems, responsive-first, dark mode)?
    - **Cross-Reference antar Buku**: Hubungkan insight lintas buku dalam batch ini. Contoh: "Animation timing principles (Animation for the Web) + cognitive load theory (Designing for Emotion) + color attention theory (Color Works) → synthesized rule: high-contrast elements should have SHORTER animation duration because they already command attention"
    - **Map to Modern Context**: Untuk setiap prinsip, jelaskan bagaimana ia berlaku di konteks modern: responsive design, dark mode, motion design, accessibility-first, mobile-first, design tokens, component-driven architecture. Contoh: "Modular scale dari tipografi → di modern context = CSS clamp() + fluid type + token-based scale steps"
    - **Identify Anti-AI-Slop Patterns**: Apa yang membedakan output EXPERT vs GENERIC menurut buku ini? Contoh: "Expert typography = consistent modular scale, intentional weight hierarchy, optical alignment. AI slop = random font sizes, too many weights, no vertical rhythm"
    - **Concrete Artefact Mapping**: Untuk SETIAP temuan, spesifikasikan artefak ProdigeUI + field/section yang terpengaruh + RATIONALE. Contoh: "Modular scale ratio 1.25 dari Typographic Style → `design-rules/typography.rules.json` field `scaleRatio`; rationale: prevents arbitrary type sizing (AI slop indicator) while maintaining readable hierarchy"
    - Tambahkan entri ke `research/research-log.json` per note
    - Buku root: `Animation for the Web`, `Animation-in-Design-Systems`, `Atomic Design`, `CSS Animations and Transitions for the Modern Web`, `Designing for Emotion`, `Designing Interface Animation`, `Designing with AI-Generated`, `Experiencing-Design`, `Integration and exploitation of AI`, `Obanya_Chukwuemeka`, `Mobile App UX Principles`, `User Experience Design`, `White Hat UX`, `Don't Make Me Think`, `The Design of Everyday Things`, `The Elements of Typographic Style`, `The Web In Motion`, `UI Design Principles - Michael Filipiuk`, `UX for Dummies`, `UX Fundamentals for Non-UX Professionals`, `Visual Design Solutions`, `The Essential Guide to User Interface Design`
    - Buku colors: `配色設計原理`, `Color Mixing Essentials`, `Color Theory (Dan Scott)`, `Color Vision and Colorimetry`, `Color Works`, `Colour Perception`, `Contemporary Color Theory`, `How to Learn Digital Painting`, `Playing with Color`, `The Complete Guide for Choosing Colors`, `The Designers Dictionary of Color`
    - _Requirements: 14.3, 14.4, 14.5, 14.6, 14.7_

- [x] 7. Riset buku `Book` — Batch B (design principles, graphic design, Figma)
  - [x] 7.1 Riset MENDALAM & buat Research_Note untuk buku-buku design principles, graphic design & Figma
    - **Deep Read & Extract**: Ekstrak prinsip-prinsip FUNDAMENTAL yang dapat dijadikan aturan terukur. Dari design principles: universal patterns (80/20 rule, progressive disclosure, recognition vs recall, Fitts's law parameters). Dari graphic design: grid construction methods, whitespace ratios, visual weight balancing formulas, alignment rules. Dari Figma books: component architecture patterns, variant/prop organization, auto-layout best practices, design system structuring
    - **Critical Analysis**: Evaluasi — mana yang UNIVERSAL (grid systems, visual hierarchy, Gestalt) vs TOOL-SPECIFIC (Figma-only features)? Mana yang bisa diterjemahkan menjadi RULES yang enforceable oleh Quality_Gate? Pisahkan: (1) hard rules (measurable, automatable), (2) soft guidelines (require human judgment), (3) outdated advice
    - **Cross-Reference antar Buku**: Hubungkan — grid systems (Mueller-Brockmann) + universal design principles (Lidwell) + modern component architecture (Figma books) → synthesized spacing/layout system. Contoh: "8px grid base (Mueller-Brockmann grid theory) + fibonacci spacing progression + component padding rules = ProdigeUI spacing token scale"
    - **Map to Modern Context**: Setiap prinsip → modern implementation. Contoh: "Mueller-Brockmann grid → CSS Grid + responsive columns + container queries + token-based gutter values. Design principles 'progressive disclosure' → component variant states + conditional rendering patterns"
    - **Identify Anti-AI-Slop Patterns**: Apa tanda "expert layout" vs "AI layout" menurut buku ini? Contoh: "Expert = intentional whitespace rhythm, consistent grid adherence, optical alignment corrections. AI slop = inconsistent margins, no grid discipline, decoration without purpose, arbitrary breakpoints"
    - **Concrete Artefact Mapping**: Contoh: "Grid system rules (Mueller-Brockmann) → `design-rules/layout.rules.json` fields `gridColumns`, `gutterRatio`, `breakpoints`; rationale: enforces mathematical grid discipline. Universal Principles 'progressive disclosure' → `quality-gate/criteria.json` criterion checking information density per viewport"
    - Tambahkan entri ke `research/research-log.json` per note
    - Design-principles: `Design by Nature`, `Universal Principles of UX`, `Tragic Design`, `Ruined by Design`, `Universal Principles of Design (Lidwell)`
    - Graphic-design: `Design Elements (Samara)`, `Design Elements 3rd Ed`, `Design Evolution`, `Graphic Design Rules`, `Grid Systems in Graphic Design (Mueller-Brockmann)`
    - Figma: `Designing and Prototyping Interfaces with Figma`, `Designing and Prototyping 2nd Ed`, `Designing in Figma`, `Designing User Interfaces (Calonaci)`, `The Designer's Guide to Figma`, `UX Design with Figma`
    - _Requirements: 14.3, 14.4, 14.5, 14.6, 14.7_

- [x] 8. Riset buku `Book` — Batch C (psychology & UI)
  - [x] 8.1 Riset MENDALAM & buat Research_Note untuk buku-buku psychology dan UI
    - **Deep Read & Extract**: Ekstrak PRINSIP KOGNITIF dan BEHAVIORAL yang bisa dijadikan design rules. Dari psychology: cognitive load limits (Miller's 7±2, working memory constraints), attention patterns (F-pattern, Z-pattern, serial position effect), decision-making biases (Hick's law parameters, paradox of choice thresholds), emotional design triggers. Dari UI books: concrete component patterns, spacing systems, visual hierarchy formulas, responsive breakpoint logic, state design patterns
    - **Critical Analysis**: Evaluasi evidence-based vs anecdotal. Mana yang didukung RISET EMPIRIS (Fitts's law, Hick's law, contrast sensitivity) vs opini penulis? Mana yang LANGSUNG quantifiable sebagai design rule? Pisahkan: (1) scientifically-backed rules → Quality_Gate criteria, (2) expert heuristics → Design_Rules guidelines, (3) subjective preferences → tidak dipakai
    - **Cross-Reference antar Buku**: Contoh synthesis: "Miller's 7±2 (100 Things) + Hick's law (Laws of UX) + navigation patterns (Designing Interfaces) → rule: navigation items per level ≤ 7, sub-menu depth ≤ 3, decision points per screen ≤ 5. Backed by: cognitive load theory + empirical UX research"
    - **Map to Modern Context**: Contoh: "Fitts's law → minimum touch target 44px (mobile), minimum click target 32px (desktop) → `design-rules/structure.rules.json` field `minTouchTarget`. Laws of UX 'aesthetic usability effect' → Quality_Gate criterion: visual consistency score across component states"
    - **Identify Anti-AI-Slop Patterns**: Menurut psychology books: "Expert UI = respects cognitive limits (chunking, progressive disclosure, clear hierarchy). AI slop = information overload, no visual breathing room, inconsistent interaction patterns, decoration without cognitive purpose, random animations that don't guide attention"
    - **Concrete Artefact Mapping**: Contoh: "Hick's law parameters → `design-rules/structure.rules.json` fields `maxNavItems`, `maxMenuDepth`; Laws of UX aesthetic-usability → `quality-gate/criteria.json` criterion `visual-consistency-score`; Practical UI spacing system → `tokens/primitive.tokens.json` spacing scale values + rationale"
    - Tambahkan entri ke `research/research-log.json` per note
    - Psychology: `100 Things Every Designer Needs to Know about People`, `Laws of UX (Yablonski)`, `Neuro Web Design`, `Color Codes (philosophy)`, buku Donald A. Norman (English + Chinese editions), `设计师要懂心理学`
    - UI: `Designing Interfaces`, `Designing User Interfaces (Malewicz)`, `Effective UI`, `Practical UI (Adham Dannaway)`, `Practical UI 2nd Edition`, `Practical UI Patterns for Design Systems`, `Refactoring UI`, `The Ultimate UI Design Roadmap`, `UI Design Principles (Filipiuk)`, `UI Design Systems Mastery`, `UI Pedia`, `Web UI Design for the Human Eye`
    - _Requirements: 14.3, 14.4, 14.5, 14.6, 14.7_

- [x] 9. Riset buku `Book` — Batch D (UX & wayfinding)
  - [x] 9.1 Riset MENDALAM & buat Research_Note untuk buku-buku UX dan wayfinding
    - **Deep Read & Extract**: Ekstrak FRAMEWORKS dan METODOLOGI UX yang bisa diintegrasikan ke dalam skill workflow dan prompt templates. Dari UX: user journey mapping methods, information architecture patterns, form design rules (field ordering, validation timing, error messaging), micro-interaction specifications, usability heuristics dengan parameter terukur. Dari wayfinding: navigation hierarchy principles, signage clarity rules, spatial orientation patterns applicable to UI navigation
    - **Critical Analysis**: Evaluasi — mana yang PROCESS-oriented (cara kerja UX designer) vs OUTPUT-oriented (aturan konkret untuk artefak)? ProdigeUI butuh KEDUANYA: process → Skill workflow steps; output rules → Design_Rules + Quality_Gate criteria. Pisahkan dan tandai masing-masing
    - **Cross-Reference antar Buku**: Contoh synthesis: "Form design rules (Designing UX Forms) + error prevention (Don't Make Me Think) + cognitive load (Designing with the Mind in Mind) + field accessibility (UX Fundamentals) → synthesized Form Design Rules: field grouping ≤5 per section, inline validation timing, error message placement, required field indication pattern"
    - **Map to Modern Context**: Contoh: "Wayfinding clarity principles → breadcrumb pattern rules, navigation state indication requirements, page transition animations. UX form design → modern form patterns: floating labels, inline validation, skeleton loading, progressive form completion"
    - **Identify Anti-AI-Slop Patterns**: Menurut UX books: "Expert UX = purposeful information architecture, clear user mental models, consistent interaction patterns, meaningful feedback timing. AI slop = dumping all info on one page, inconsistent navigation, no error recovery paths, generic placeholder copy, animations without purpose"
    - **Concrete Artefact Mapping**: Contoh: "Form design rules → `design-rules/structure.rules.json` section `formPatterns`; Navigation hierarchy principles → `components/components.manifest.json` Navbar/Sidebar spec + `design-rules/structure.rules.json` `navigationRules`; UX process methodology → `skills/prodige-ui-end-to-end/SKILL.md` workflow steps; Usability heuristics → `quality-gate/criteria.json` heuristic evaluation criteria"
    - Tambahkan entri ke `research/research-log.json` per note
    - UX: `App Design Apprentice`, `Design for Developers`, `Design for how People Think`, `Design Systems Handbook`, `Designing UX Forms`, `Designing UX Prototyping`, `Designing with the Mind in Mind`, `DesignOps Handbook`, `UX/UI Design 2022 (kedua edisi)`, `Don't Make Me Think Revisited`, `Fixing Bad UX Designs`, `Principles of Product Design`, `Simple and Usable`, `Storytelling in Design`, `Strategic Writing for UX`, `The Basics of UX Design`, `The Elements of User Experience`, `UX Fundamentals`, `UX Writing`, `这才是用户体验设计`
    - Wayfinding: `Signage and Wayfinding Design (Calori)`, `Wayfinding Designs Worldwide`
    - _Requirements: 14.3, 14.4, 14.5, 14.6, 14.7_

- [x] 10. Cross-Synthesis: Konsolidasi riset lintas SEMUA sumber
  - [x] 10.1 Buat dokumen Research Synthesis yang memetakan consolidated insights ke artefak ProdigeUI
    - **Cross-reference ALL sources**: Identifikasi pola yang KONSISTEN muncul di banyak sumber (books + repos). Prinsip yang dikonfirmasi oleh 3+ sumber = HIGH CONFIDENCE rule. Prinsip dari 1 sumber saja = tandai sebagai "tentative"
    - **Identifikasi KONTRADIKSI**: Di mana sumber berbeda pendapat? Contoh: satu buku bilang "max 5 nav items" tapi repo lain implement 7. Resolusi: prioritaskan evidence-based (psychology research > expert opinion > repo implementation)
    - **Gap Analysis konsolidasi**: Apa yang TIDAK ter-cover oleh sumber manapun? Area mana yang perlu keputusan desain original? Dokumentasikan gaps + proposed approach
    - **Synthesized Rules per Artefak**: Untuk SETIAP artefak ProdigeUI, compile consolidated rules/decisions dari semua sumber:
      - `tokens/` → synthesized scale values, naming patterns, layer structure decisions
      - `themes/` → contrast rules, color role definitions, light/dark differentiation criteria
      - `motion/` → timing rules, easing selection criteria, reduce-motion strategy
      - `components/` → state specifications, variant patterns, a11y requirements, composition rules
      - `design-rules/` → consolidated measurable rules (typography scale, grid system, spacing, structure)
      - `quality-gate/` → anti-AI-slop indicators, measurable quality criteria
      - `prompt-templates/` → effective prompting patterns, constraint formulation approaches
      - `skills/` → workflow steps, validation integration points
    - **Anti-AI-Slop Synthesis**: Compile MASTER LIST of indicators that distinguish expert work from AI-generated generic output, sourced from all books + gap analysis from repos
    - **Priority Matrix**: Rank setiap consolidated finding by: (1) confidence level (evidence strength), (2) impact on quality, (3) implementation complexity
    - Tulis output ke `research/synthesis.md`
    - _Requirements: 14.4, 14.6, 8.1, 9.1, 9.2, 9.3, 9.4, 12.5_

- [x] 11. Checkpoint — pastikan seluruh Research_Note terindeks dan synthesis selesai
  - Verifikasi setiap note memiliki entri di research-log.json (korespondensi 1:1)
  - Verifikasi setiap note memuat 3 kategori temuan (copy/ditingkatkan/diadaptasi) dengan DEPTH (bukan surface-level)
  - Verifikasi `research/synthesis.md` ada dan mencakup consolidated rules per artefak
  - Tanyakan user jika ada pertanyaan.

- [x] 12. Tulis Token_System (informed by research + synthesis)
  - [x] 12.1 Tulis primitive tokens (palet warna, skala spacing, tipografi, radius, shadow, border, z-index, motion)
    - Tulis `tokens/primitive.tokens.json` dengan nilai konkret untuk semua kategori wajib
    - Gunakan temuan riset (teori warna, tipografi, spacing systems) sebagai dasar keputusan nilai
    - _Requirements: 3.1, 3.2, 3.4_

  - [x] 12.2 Tulis semantic tokens (peran → referensi ke primitive)
    - Tulis `tokens/semantic.tokens.json` — semua token menggunakan `ref` ke primitive, nama berbasis peran (BUKAN literal)
    - Pastikan cakupan kategori: color, typography, spacing, radius, shadow/elevation, border, z-index, motion
    - _Requirements: 3.1, 3.3, 3.4_

  - [x] 12.3 Tulis component tokens (referensi ke semantic)
    - Tulis `tokens/component.tokens.json` — token per komponen (button, input, card, dsb.) mengacu ke semantic tokens
    - _Requirements: 3.1, 3.4_

  - [x] 12.4 Tulis CSS variables derivation
    - Tulis `tokens/build/tokens.css` — derivasi seluruh resolved token menjadi `:root { --name: value }`
    - _Requirements: 3.6_

- [x] 13. Tulis Theme_Catalog (informed by research + synthesis)
  - [x] 13.1 Tulis theme default, light, dan dark
    - Tulis `themes/_default.theme.json` (fallback semua token semantik)
    - Tulis `themes/light.theme.json` (luminance latar > luminance teks)
    - Tulis `themes/dark.theme.json` (luminance latar < luminance teks)
    - Pastikan setiap token semantik yang dipakai Component_Library terdefinisi
    - Pastikan rasio kontras ≥ 4.5:1 (normal) dan ≥ 3:1 (besar)
    - _Requirements: 3.9, 4.1, 4.2, 4.6, 13.2, 13.3_

  - [x] 13.2 Tulis theme per use-case/brand
    - Tulis minimal satu theme tambahan untuk brand/use-case spesifik
    - _Requirements: 4.1, 11.1_

  - [x] 13.3 Tulis dokumentasi pembuatan theme baru
    - Tulis `themes/creating-a-theme.md` — langkah + daftar token semantik wajib
    - _Requirements: 4.5_

- [x] 14. Tulis Motion_Library (informed by research + synthesis)
  - [x] 14.1 Tulis motion tokens dan preset per kategori
    - Tulis `motion/motion.tokens.json` (durasi & easing sebagai Design_Token)
    - Tulis `motion/presets/enter-exit.json`, `motion/presets/state-transition.json`, `motion/presets/hover-focus.json`, `motion/presets/scroll-based.json` — setiap preset menaut ke token motion, durasi ∈ [100ms, 1000ms], easing = fungsi bernama atau cubic-bezier
    - Sertakan varian reduce-motion per preset
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [x] 14.2 Tulis prinsip motion
    - Tulis `motion/principles.md` — prinsip tujuan, hierarki, timing; setiap preset menaut ≥1 prinsip
    - _Requirements: 5.5_

- [x] 15. Tulis Component_Library (informed by research + synthesis)
  - [x] 15.1 Tulis component manifest lengkap
    - Tulis `components/components.manifest.json` dengan komponen atomic design:
      - Atoms: Button, Input, Icon, Text, Badge, Toggle, Checkbox, Radio
      - Molecules: Field, Card, MenuItem, SearchBar, Tooltip
      - Organisms: Form, Navbar, Table, Modal, Sidebar, Footer
    - Minimal satu komponen per kategori fungsional (input & form, navigasi, feedback, data display, layout, overlay)
    - Setiap komponen: variants, props, states (default/hover/focus/active/disabled/error), a11y (role ARIA, keyboard, focusVisible), tokens (HANYA referensi Design_Token, tanpa nilai mentah)
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 13.4, 13.5_

  - [x] 15.2 Tulis pedoman komposisi atomic design
    - Tulis `components/composition-guidelines.md` — cara menyusun atoms → molecules → organisms
    - _Requirements: 6.6_

- [x] 16. Tulis Design_Asset_Package (informed by research + synthesis)
  - [x] 16.1 Tulis asset manifest dengan metadata lisensi lengkap
    - Tulis `assets/assets.manifest.json` dengan minimal 5 aset per kategori (icons, fonts, illustrations)
    - Setiap aset: `id` unik, `category`, `path`, `license` (name, source, commercialUse)
    - Tandai aset restricted secara eksplisit
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [x] 16.2 Sediakan aset (icons, fonts, illustrations)
    - Siapkan/kurasi file aset di `assets/icons/`, `assets/fonts/`, `assets/illustrations/`
    - Pastikan semua aset yang ada di manifest memiliki file yang sesuai
    - _Requirements: 7.1_

- [x] 17. Tulis Design_Rules (informed by research + synthesis)
  - [x] 17.1 Tulis aturan tipografi, warna, layout, dan struktur sebagai JSON terukur
    - Tulis `design-rules/typography.rules.json` (scaleRatio, lineHeightRange, allowedWeights, allowedPairings, minFontSizePx)
    - Tulis `design-rules/color.rules.json` (peran warna, aksen, contrast normal=4.5, contrast large=3)
    - Tulis `design-rules/layout.rules.json` (gridColumns, breakpoints ≥3 tingkat, spacingBaseUnit)
    - Tulis `design-rules/structure.rules.json` (hierarki visual, pengelompokan konten, pola navigasi)
    - Setiap aturan dinyatakan sebagai kriteria terverifikasi (rentang/rasio/daftar)
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 13.6_

  - [x] 17.2 Tulis narasi Design_Rules dengan rasional bersumber buku
    - Tulis `design-rules/design-rules.md` — penjelasan naratif tiap aturan + referensi ke buku sumber (The Elements of Typographic Style, Grid Systems, Laws of UX, dsb.)
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [x] 18. Tulis Design_System kohesi & Quality_Gate
  - [x] 18.1 Tulis dokumen kohesi design system
    - Tulis `design-system/design-system.md` — dependency graph antar keenam artefak (Token_System, Theme_Catalog, Motion_Library, Component_Library, Design_Asset_Package, Design_Rules); tiap artefak ≥1 referensi terdokumentasi
    - _Requirements: 8.1_

  - [x] 18.2 Tulis entry-point design system
    - Tulis `design-system/entry-point.md` — urutan penggunaan artefak untuk proyek baru (token → tema → motion/aset → komponen → aturan)
    - _Requirements: 8.4_

  - [x] 18.3 Tulis Quality_Gate (criteria, anti-AI-slop checklist, report schema)
    - Tulis `quality-gate/criteria.json` — daftar kriteria lolos/gagal objektif (kepatuhan Design_Rules, pemakaian token, konsistensi Theme, aksesibilitas)
    - Tulis `quality-gate/anti-ai-slop.checklist.md` — indikator terukur: nilai mentah vs token, hierarki visual, kontras di bawah ambang
    - Verifikasi `quality-gate/report.schema.json` sudah dibuat di Phase 1
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 13.7, 13.8_

- [x] 19. Tulis Prompt_Template_Library
  - [x] 19.1 Tulis prompt templates per use-case
    - Tulis template untuk setiap Use_Case: `prompt-templates/saas/`, `prompt-templates/landing/`, `prompt-templates/ecommerce/`, `prompt-templates/portfolio/`, `prompt-templates/hris/`, `prompt-templates/agentic-app/`
    - Setiap template memuat bagian eksplisit: context, constraint, output criteria
    - Setiap template mereferensikan Design_Rules/Token_System/Component_Library
    - Setiap template menyertakan ≥1 contoh keluaran + kriteria penerimaan
    - Sertakan arahan kepatuhan Quality_Gate & Accessibility_Standard
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_

- [x] 20. Tulis Use_Case guides
  - [x] 20.1 Tulis panduan per Use_Case yang menautkan artefak
    - Tulis `use-cases/saas/guide.md`, `use-cases/landing/guide.md`, `use-cases/ecommerce/guide.md`, `use-cases/portfolio/guide.md`, `use-cases/hris/guide.md`, `use-cases/agentic-app/guide.md`
    - Masing-masing menautkan ≥1 Component, ≥1 Theme, ≥1 Prompt_Template
    - Sertakan panduan pola khusus yang mereferensikan token/komponen tanpa duplikat
    - _Requirements: 11.1, 11.3, 11.5_

- [x] 21. Checkpoint — pastikan seluruh artefak data tertulis & kohesif
  - Verifikasi semua tokens, themes, motion, components, assets, rules, quality-gate, prompt-templates, dan use-cases sudah lengkap
  - Verifikasi cross-references antar artefak konsisten (token direferensikan benar, tidak ada dangling ref)
  - Tanyakan user jika ada pertanyaan.

- [x] 22. Tulis Skills (SKILL.md per skill)
  - [x] 22.1 Tulis skill UI/UX end-to-end (brief → implementasi)
    - Buat `skills/prodige-ui-end-to-end/SKILL.md` dengan frontmatter (name unik, description, triggers) + isi lengkap langkah perancangan UI/UX end-to-end
    - _Requirements: 2.2, 2.3, 2.7_

  - [x] 22.2 Tulis skill tambahan (quality-check, token-management, theme-creation, dsb.)
    - Buat folder + `SKILL.md` untuk setiap skill tambahan yang relevan
    - Pastikan frontmatter lengkap (name, description, triggers) dan name unik
    - _Requirements: 2.2, 2.3_

  - [x] 22.3 Tulis Skill_Registry (skills/AGENTS.md)
    - Tulis `skills/AGENTS.md` — mencantumkan seluruh skill: name, deskripsi, pemicu
    - Pastikan format append-only (penambahan skill baru tidak mengubah entri lama)
    - _Requirements: 2.4, 2.5_

- [x] 23. Tulis Hooks & dokumentasi
  - [x] 23.1 Tulis dokumentasi hooks
    - Tulis `hooks/<hook>.md` untuk setiap hook/plugin/script terdokumentasi
    - Setiap hook: pemicu, efek, cara aktivasi
    - Minimal: hook quality-gate-check (jalankan Quality_Gate setelah output)
    - _Requirements: 2.6, 12.6_

- [x] 24. Tulis Installer & adaptor per Agentic_Tool
  - [x] 24.1 Tulis peta adaptor per tool
    - Tulis `installers/adapters/claude-code.json`, `installers/adapters/glm.json`, `installers/adapters/codex.json`, `installers/adapters/antigravity.json`, `installers/adapters/hermes.json`, `installers/adapters/cursor.json`
    - Setiap adaptor memetakan lokasi konfigurasi tujuan tool
    - _Requirements: 1.2_

  - [x] 24.2 Tulis instruksi instalasi per tool
    - Tulis `installers/install.claude-code.md`, `installers/install.glm.md`, `installers/install.codex.md`, `installers/install.antigravity.md`, `installers/install.hermes.md`, `installers/install.cursor.md`
    - Setiap instruksi: langkah-langkah, prasyarat, troubleshooting
    - _Requirements: 1.9_

  - [x] 24.3 Tulis berkas adaptor isi (CLAUDE.md, dsb.)
    - Generate `CLAUDE.md` dan berkas setara lainnya untuk tool yang tidak mendukung format `AGENTS.md` native
    - _Requirements: 1.10_

- [x] 25. Finalisasi AGENTS.md root
  - [x] 25.1 Perkaya AGENTS.md root dengan konten lengkap
    - Update `AGENTS.md` skeleton dari Phase 1 menjadi versi final: tujuan sistem, struktur folder lengkap, cara menemukan/menjalankan skill, referensi manifest.json
    - _Requirements: 2.1_

- [x] 26. Checkpoint — pastikan seluruh skills, hooks, installer, dan AGENTS.md lengkap
  - Verifikasi Skill_Registry konsisten dengan folder skills yang ada
  - Verifikasi manifest.json mencakup semua artefak yang telah dibuat
  - Tanyakan user jika ada pertanyaan.

- [x] 27. Tulis validation scripts (utilitas minimal, BUKAN aplikasi)
  - [x] 27.1 Tulis script validasi JSON schema
    - Buat `scripts/validate-schemas.mjs` — Node.js script yang memvalidasi semua file JSON terhadap schema masing-masing (tokens vs tokens.schema, themes vs theme.schema, dsb.)
    - Gunakan library `ajv` atau validasi JSON Schema bawaan
    - _Requirements: 3.5, 3.8, 4.4, 7.5, 12.1_

  - [x] 27.2 Tulis script pemeriksaan cross-references
    - Buat `scripts/check-references.mjs` — verifikasi bahwa:
      - Semua token `ref` menunjuk ke token yang ada (no dangling)
      - Semua component tokens mereferensikan semantic tokens yang valid
      - Semua theme overrides mereferensikan token yang ada
      - Asset id di manifest sesuai dengan file yang ada
    - _Requirements: 3.5, 8.5, 7.6_

  - [x] 27.3 Tulis script verifikasi Research_Log completeness
    - Buat `scripts/check-research-log.mjs` — verifikasi:
      - Setiap file di `research/notes/` punya entri di research-log.json
      - Setiap entri di research-log.json menunjuk ke file yang ada
      - Korespondensi 1:1
    - _Requirements: 14.1, 14.7_

  - [x] 27.4 Tulis script verifikasi kelengkapan manifest
    - Buat `scripts/check-manifest.mjs` — verifikasi semua artefak yang tercantum di manifest.json benar-benar ada sebagai file/folder
    - _Requirements: 1.1_

  - [x] 27.5 Tulis script pemeriksaan penamaan token literal
    - Buat `scripts/check-token-naming.mjs` — verifikasi nama token semantik/komponen tidak cocok pola literal (hex, rgb, px/rem/em/%)
    - _Requirements: 3.3_

  - [x] 27.6 Tulis script pemeriksaan kontras WCAG
    - Buat `scripts/check-contrast.mjs` — hitung rasio kontras untuk pasangan teks/latar di setiap theme, verifikasi ≥ 4.5:1 (normal) dan ≥ 3:1 (besar)
    - _Requirements: 4.6, 13.2, 13.3_

- [x] 28. Final checkpoint — jalankan semua validation scripts & pastikan lolos
  - Jalankan `node scripts/validate-schemas.mjs`, `node scripts/check-references.mjs`, `node scripts/check-research-log.mjs`, `node scripts/check-manifest.mjs`
  - Perbaiki error yang ditemukan
  - Tanyakan user jika ada pertanyaan.

## Notes

- ProdigeUI adalah **paket pengetahuan portabel** (folder data/docs), BUKAN aplikasi TypeScript
- Tidak ada Vitest, fast-check, atau property-based testing sebagai kode eksekusi
- Correctness properties dari design doc diekspresikan sebagai:
  - Aturan validasi di `quality-gate/criteria.json`
  - Checklist di `quality-gate/anti-ai-slop.checklist.md`
  - Validation scripts minimal di `scripts/`
- Riset WAJIB selesai sebelum menulis artefak (Phase 3-9 sebelum Phase 12-20)
- **Riset harus MENDALAM** — bukan surface-level note-taking:
  - Buku = sumber TEORI KUAT → ekstrak prinsip, frameworks, aturan konkret terukur
  - Repo = sumber PRACTICAL tapi masih "AI slop" → analisis arsitektur, audit kualitas, identifikasi gaps
  - Cross-synthesis (task 10) = WAJIB sebelum menulis artefak → konsolidasi semua insight
- Tasks bertanda `*` bersifat opsional dan dapat di-skip untuk MVP lebih cepat
- Checkpoints memastikan validasi inkremental
- Setiap task mereferensikan requirements spesifik untuk traceability

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3", "1.4"] },
    { "id": 1, "tasks": ["3.1", "4.1", "5.1"] },
    { "id": 2, "tasks": ["6.1", "7.1", "8.1", "9.1"] },
    { "id": 3, "tasks": ["10.1"] },
    { "id": 4, "tasks": ["12.1", "12.2", "12.3"] },
    { "id": 5, "tasks": ["12.4", "13.1", "13.2", "13.3"] },
    { "id": 6, "tasks": ["14.1", "14.2", "16.1", "16.2"] },
    { "id": 7, "tasks": ["15.1", "15.2", "17.1", "17.2"] },
    { "id": 8, "tasks": ["18.1", "18.2", "18.3", "19.1"] },
    { "id": 9, "tasks": ["20.1"] },
    { "id": 10, "tasks": ["22.1", "22.2", "22.3", "23.1"] },
    { "id": 11, "tasks": ["24.1", "24.2", "24.3", "25.1"] },
    { "id": 12, "tasks": ["27.1", "27.2", "27.3", "27.4", "27.5", "27.6"] }
  ]
}
```