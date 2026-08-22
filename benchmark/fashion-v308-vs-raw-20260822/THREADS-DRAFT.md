# Draft Threads — FOLD fashion benchmark

**Post 1/6**

Saya uji satu hal yang sering diklaim oleh design system: apakah ia benar-benar mengubah hasil ketika brief-nya sama-sama singkat?

Brief-nya: landing page untuk label pakaian independen FOLD yang meluncurkan wardrobe linen kecil untuk orang yang ingin lebih sedikit, tapi lebih baik.

**Post 2/6**

Saya buat dua lane dengan kontrak yang sama:

1. Dengan ProdigeUI v3.0.8
2. Tanpa ProdigeUI, implementasi raw/generic

Copy, product facts, CTA, dan batasan teknis sama. Keduanya self-contained dan tidak memakai stock image atau external runtime.

**Post 3/6**

Hasil review visual directional:

• ProdigeUI v3.0.8: 93/100
• Raw: 57/100

Bukan karena lane raw dibuat rusak. Ia tetap readable, responsive, contrast-safe, dan keyboard-focusable. Bedanya muncul di arah visual dan hierarchy.

**Post 4/6**

Dengan v3.0.8, satu overshirt menjadi material proof object. Tipografi punya peran display/body/metadata. Koleksi tidak berhenti di tiga kartu sama besar: ada dominant study, offset study, lalu supporting study.

Hasilnya lebih tenang, lebih spesifik, dan terasa seperti keputusan art direction—bukan sekadar layout yang terisi.

**Post 5/6**

Quality gate otomatis:

• v3.0.8: 26 pass / 0 fail
• Raw: 24 pass / 2 fail

Dua fail di lane raw adalah pemeriksaan authored spatial rhythm dan project geometry. Keduanya tidak gagal di runtime, contrast, focus, atau responsive overflow.

**Post 6/6**

Catatan jujur: ini bukan klaim conversion atau sales uplift. Ini benchmark satu brief untuk melihat apakah ProdigeUI membantu AI membuat identitas, focal hierarchy, material cue, dan rhythm yang lebih authored.

Viewer + source benchmark:
https://github.com/prodigeproject/prodigeui/tree/main/benchmark/fashion-v308-vs-raw-20260822

Baseline yang dipakai: ProdigeUI v3.0.8 (`2ab4e19`).
