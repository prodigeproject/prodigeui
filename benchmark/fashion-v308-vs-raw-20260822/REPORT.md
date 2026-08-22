# FOLD fashion benchmark — v3.0.8 intent route vs without ProdigeUI

Tanggal run: 22 Agustus 2026
Baseline: ProdigeUI v3.0.8 / commit `2ab4e19` + intent/media routing correction
Brief route: fashion commerce with an editorial lookbook layer

## Keputusan jujur

Artefak sebelumnya memang gagal. Ia membuat “landing page tentang pakaian”:
headline besar, blok abstrak, dan cue CSS. Itu tidak cukup untuk disebut fashion
storefront. Run ini mengganti artefaknya dengan keputusan yang lebih dekat ke
perilaku situs fashion nyata:

- hero lookbook dengan garment yang sedang dipakai;
- navigasi kategori, collection count, filter/sort cue, dan bag/search path;
- product grid dengan foto, product name, material, warna, size range, price, dan
  aksi `View piece`;
- material/detail editorial chapter;
- fit, care, shipping, dan support information sebelum contact/checkout path.

Dengan begitu, yang ditransfer dari ProdigeUI bukan skin NOVA, melainkan cara
membaca user job dan memilih bukti. Warna, type, dan topology tetap diturunkan
untuk FOLD.

## Referensi validasi

Saya cek beberapa situs dan praktik fashion yang aktual sebelum regenerasi:

- [COS women’s collection](https://www.cos.com/en-eu/women) memakai campaign/lifestyle
  photography sebagai pintu masuk koleksi, bukan placeholder geometrik.
- [LEMAIRE new arrivals](https://www.lemaire.fr/collections/new-arrivals-women-unisex)
  memperlihatkan kategori (women, men, bags, shoes, accessories), search/cart,
  sorting, product name, price, dan color count sebagai bagian dari discovery.
- [Fashion product-grid guidance](https://depict.ai/resources/blog/10-best-practices-for-fashion-store-product-grid-design)
  menekankan high-quality/multiple imagery, lifestyle context, filter size/price/color,
  responsive grid, dan quick-view/product actions.

Referensi dipakai sebagai evaluasi information architecture dan proof, bukan untuk
menyalin brand identity atau layout situs tertentu.

## Setup yang fair

Kedua lane menerima brief, copy, product facts, CTA, batasan runtime, dan tiga file
media lokal yang sama:

- `assets/fold-linen-lookbook-v1.png` — contextual/lifestyle proof;
- `assets/fold-linen-overshirt-v1.png` — product/still-life proof;
- `assets/fold-linen-detail-v1.png` — material/construction proof.

Ketiganya dibuat khusus untuk benchmark dengan imagegen dan dicatat di
`assets/PROVENANCE.md`. Tidak ada stock image, remote runtime, atau hidden media
advantage untuk lane ProdigeUI.

Brief identik:

> Build a landing page for an independent clothing label called FOLD. The label is launching
> a small linen wardrobe for people who want fewer, better layers. Show the new drop, explain
> the material point of view, and invite visitors to view the collection.

## Lane

1. `fashion-with-prodigeui-v308.html` — v3.0.8 quality baseline plus the new
   intent/media routing. The declared shopper job is to judge silhouette, material,
   fit, and repeat wear before entering the collection.
2. `fashion-without-prodigeui.html` — same brief, same copy facts, and same media,
   implemented as a generic split-hero + equal-card landing page.

## Manual directional score

| Dimension | Weight | With v3.0.8 + intent route | Raw | Note |
| :--- | :---: | :---: | :---: | :--- |
| Art direction | 20 | 19 | 11 | Lookbook, detail, and product-still hierarchy give FOLD a fashion point of view. |
| Visual mass & focal hierarchy | 20 | 19 | 12 | The worn garment leads, then the collection; raw repeats a generic split hero. |
| Typography | 15 | 13 | 9 | Display, body, metadata, and commerce labels have separate jobs. |
| Color & material language | 15 | 14 | 9 | Mineral/moss/tobacco roles are derived from the warm-climate linen brief and media. |
| Section rhythm | 15 | 14 | 8 | Campaign → shop → material → fit/care follows a fashion decision path. |
| Product/commerce proof | 10 | 10 | 6 | The system lane exposes product attributes and contextual/detail proof; raw mainly lists cards. |
| Implementation hygiene | 5 | 5 | 5 | Both lanes use local assets, semantic HTML, responsive rules, focus, and reduced motion. |
| **Total** | **100** | **94** | **60** | Directional review, not conversion research. |

## Automated quality gate

| Lane | Pass | Fail | Flag | Not evaluable |
| :--- | ---: | ---: | ---: | ---: |
| With v3.0.8 + intent route | **26** | **0** | **0** | 20 |
| Raw | **24** | **2** | **0** | 20 |

The raw lane's two failures are the existing expressive spatial-rhythm and authored
project-geometry checks caused by three equal product cards. Both lanes now pass
contrast, focus, responsive overflow, runtime integrity, and local asset loading.

## What this run proves, and what it does not

- The prior failure was a routing failure, not merely a missing image.
- A physical-product brief needs physical-product evidence and commerce information
  architecture. Abstract CSS shapes cannot stand in for that proof.
- The new ProdigeUI contract now makes route, user job, media strategy, and physical
  storefront checks explicit. It does not force every future product into this fashion
  structure; a SaaS, civic service, or editorial brief must select a different route.
- This is one fashion brief and one directional review. It is not a conversion uplift,
  usability study, or proof that all product categories are solved.
