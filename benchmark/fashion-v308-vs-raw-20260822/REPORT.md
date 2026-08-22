# FOLD fashion benchmark — ProdigeUI v3.0.8 vs without ProdigeUI

Tanggal run: 22 Agustus 2026
Baseline: ProdigeUI v3.0.8 / commit `2ab4e19`

## Keputusan singkat

Untuk brief fashion yang sama, lane dengan ProdigeUI v3.0.8 menghasilkan arah visual yang lebih authored, tenang, dan mudah dibedakan dari template ecommerce generik. Lane raw tetap fungsional, tetapi jatuh ke tiga kartu setara, placeholder hero, tipografi tunggal, dan ritme yang datar.

Skor manual directional:

| Lane | Skor | Catatan |
| :--- | :---: | :--- |
| With ProdigeUI v3.0.8 | **93 / 100** | Satu proposisi editorial, satu material proof object, hierarchy koleksi yang jelas, dan sistem metadata yang konsisten. |
| Without ProdigeUI | **57 / 100** | Fungsional dan readable, tetapi identitas, focal hierarchy, dan authored geometry masih generik. |

Skor ini adalah review visual terarah, bukan pengukuran conversion, usability study, atau klaim performa bisnis.

## Setup yang fair

Kedua lane menerima brief, brand, copy, product facts, CTA, dan batasan runtime yang sama. Keduanya self-contained, tidak memakai stock media atau external runtime, dan memakai cue pakaian yang dibuat lewat HTML/CSS agar tidak ada keunggulan tersembunyi dari aset eksternal.

Brief identik:

> Build a landing page for an independent clothing label called FOLD. The label is launching a small linen wardrobe for people who want fewer, better layers. Show the new drop, explain the material point of view, and invite visitors to view the collection.

Product facts identik: Linen / 01; overshirt, in-between shirt, dan wide trouser; semua dirancang untuk repeat wear. Aksi identik: view the collection dan contact the atelier.

## Hasil quality gate

| Check | With ProdigeUI v3.0.8 | Without ProdigeUI |
| :--- | :---: | :---: |
| Pass | **26** | **24** |
| Fail | **0** | **2** |
| Manual criteria not evaluable by automation | 20 | 20 |
| Runtime errors | 0 | 0 |
| External runtime/assets | 0 | 0 |
| Responsive overflow | 0 | 0 |
| Desktop/mobile contrast failures | 0 | 0 |

Lane raw gagal pada dua pemeriksaan visual yang sama-sama mengukur authored spatial rhythm dan authored project geometry: tiga kartu di desktop setara, variasi bentuknya rendah, dan area/offset tidak membentuk hierarchy yang kuat. Ini bukan kegagalan aksesibilitas atau runtime.

## Manual score breakdown

| Dimension | Weight | v3.0.8 | Raw | Catatan |
| :--- | :---: | :---: | :---: | :--- |
| Art direction | 20 | 19 | 12 | v3.0.8 punya point of view linen yang konsisten; raw terasa seperti starter ecommerce. |
| Visual mass & focal hierarchy | 20 | 19 | 10 | Overshirt menjadi proof object dominan; raw memakai hero placeholder yang datar. |
| Typography | 15 | 14 | 9 | Display, body, dan mono metadata v3.0.8 punya peran berbeda; raw memakai satu keluarga sans. |
| Color & material language | 15 | 14 | 8 | Paper/ink/clay/mauve memberi material story; raw putih/abu/purple kurang spesifik. |
| Section rhythm | 15 | 14 | 8 | Collection v3.0.8 memakai dominant/offset/supporting sequence; raw tiga kartu sama besar. |
| Product proof | 10 | 8 | 5 | Keduanya tidak memakai fotografi produk; v3.0.8 tetap memberi cue konstruksi dan material lebih kaya. |
| Implementation hygiene | 5 | 5 | 5 | Keduanya semantik, keyboard-focusable, contrast-safe, responsive, dan tanpa external dependency. |
| **Total** | **100** | **93** | **57** | — |

## Apa yang benar-benar dibuktikan

- v3.0.8 memperkuat keputusan visual yang biasanya hilang pada brief singkat: hierarchy, material cue, type roles, dan spatial variation.
- Baseline tidak perlu ditambah tuning agresif untuk mendapatkan hasil ini; kekuatannya justru ada pada restraint dan satu focal proposition.
- Raw lane masih dapat dipakai sebagai pembanding karena tidak dibuat rusak secara teknis: ia lolos contrast, focus, runtime, dan responsive checks.

## Batasan

Ini adalah benchmark satu brief dan satu review visual. Belum ada blind user preference test, conversion instrumentation, loading benchmark, atau variasi model/agent. Karena itu kesimpulan dibatasi pada kualitas authored visual dan kepatuhan terhadap gate.

## Artefak

- [Viewer](./index.html)
- [Brief dan fairness contract](./PROMPT.md)
- [With ProdigeUI v3.0.8](./fashion-with-prodigeui-v308.html)
- [Without ProdigeUI](./fashion-without-prodigeui.html)
