# Forms of Arrival — v3.0.8 vs latest fresh transfer benchmark

Tanggal review: 22 Agustus 2026
Prompt identik: `Build a landing page for a public architecture exhibition called Forms of Arrival.`

## Metode

- Dua artifact dibuat fresh dari prompt di atas; tidak ada HTML NOVA yang dipakai ulang sebagai implementasi.
- `2ab4e19` merepresentasikan expressiveStudio v3.0.8: proposition dan concept-tied graphic.
- `1d85e7a` merepresentasikan aturan terbaru: proposition dan truthful local proof yang dibatasi menjadi satu visual mass pada hero.
- Keduanya memakai SVG original lokal, tanpa request eksternal, dan diuji pada desktop, mobile, serta reduced motion.
- Render awal v3.0.8 yang terlalu ramai diregenerasi sebelum scoring. Artifact final ini sengaja memulihkan karakter v3.0.8 yang terbukti kuat pada NOVA: cream field yang lapang, satu monolith gelap, dan warna kejutan yang terkonsentrasi pada objek.

## Hasil objektif

| Artifact | Gate otomatis | Pass | Fail | Manual belum dievaluasi |
|---|---:|---:|---:|---:|
| [`forms-2ab4e19.html`](./forms-2ab4e19.html) | incomplete | 26 | 0 | 20 |
| [`forms-1d85e7a.html`](./forms-1d85e7a.html) | incomplete | 26 | 0 | 20 |

`incomplete` hanya berarti ada 20 kriteria yang memerlukan review manusia, bukan failure runtime atau responsivitas.

## Review visual manual

| Dimensi | v3.0.8 | Latest | Catatan |
|---|---:|---:|---|
| Art direction | 20/20 | 19/20 | v3.0.8 paling tenang dan paling mudah diingat di hero; latest tetap cohesive, tetapi membawa lebih banyak informasi. |
| Hierarki / visual mass | 19/20 | 18/20 | Monolith v3.0.8 menjaga blank field lebih disiplin. Latest menjaga satu entry object, tetapi memiliki cue internal yang lebih banyak. |
| Tipografi | 14/15 | 14/15 | Keduanya poster-scale dan tetap terbaca. |
| Warna / material | 15/15 | 14/15 | Coral-lilac v3.0.8 punya kejutan yang lebih bersih; oxide-blue latest lebih bersifat objek/proof. |
| Ritme | 13/15 | 15/15 | Latest menjelaskan route, marker, dan invitation sebagai urutan yang lebih berguna untuk exhibition. |
| Artifak / evidence | 6/10 | 9/10 | v3.0.8 memakai formal volume yang kuat tetapi abstrak; latest punya entry instrument lokal yang bisa dibaca sebagai route, marker, dan invitation. |
| Technical proof | 5/5 | 5/5 | Kedua artifact 26 pass / 0 fail. |
| **Total** | **92/100** | **94/100** | Latest menang untuk brief ini, dengan trade-off yang tetap terlihat. |

## Catatan jujur

### `2ab4e19` / v3.0.8

Ini versi yang paling dekat dengan rasa v3.0.8 yang kamu sukai: hero tenang, gestur tunggal, dan ruang negatif yang benar-benar bekerja. Ia tidak membutuhkan banyak bukti untuk terasa seperti sebuah exhibition. Kekurangannya adalah volume hero masih menjadi metafora formal; setelah first viewport, visitor belum langsung tahu apa yang akan ditemui secara nyata.

### `1d85e7a` / latest quiet evidence

Aturan baru terbukti transfer ke prompt yang bukan studio: entry instrument membuat exhibition terasa dapat didatangi, bukan hanya dipandang. Route, marker, dan invitation menerjemahkan konsep ke program yang jelas; CTA juga berbicara tentang arrival, bukan tombol generik. Trade-off-nya tetap sama: proof membawa sedikit lebih banyak struktur ke hero, sehingga v3.0.8 masih unggul bila targetnya satu poster gesture yang paling hening.

## Putusan

Untuk landing exhibition yang perlu menjual pengalaman kunjungan nyata, `1d85e7a` adalah arah generator yang lebih lengkap (94/100). Untuk art direction murni dan hero yang paling hening, `2ab4e19` tetap reference composition yang lebih kuat (92/100). Ini mengonfirmasi tuning terbaru tanpa menghapus nilai v3.0.8: aturan yang benar adalah **proof harus nyata, tetapi ia tidak boleh mengambil alih ketenangan hero**.

## Artifact

- [Viewer interaktif](./index.html)
- [v3.0.8 fresh artifact](./forms-2ab4e19.html)
- [latest fresh artifact](./forms-1d85e7a.html)
- [Prompt dan protokol fair](./PROMPT.md)
- [Provenance media lokal](./assets/MEDIA-PROVENANCE.md)
