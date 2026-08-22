# NOVA — seven-way fresh-gen benchmark

Tanggal run: 22 Agustus 2026
Brief identik: `Build a landing page for a creative studio called NOVA.`

## Keputusan baseline

`2ab4e19` / v3.0.8 dipilih sebagai baseline benchmark berdasarkan scorecard manual (92/100). Keputusan ini hanya menetapkan arah untuk iterasi berikutnya; commit Git historis tidak diubah. Lihat [baseline brief](./BASELINE.md).

## Tuning follow-up: v3.0.8 vs `668418a`

Aturan ProdigeUI kemudian dituning dan di-commit sebagai `668418a` (`feat(craft): add evidence-led studio refinement`). Fresh candidate yang dihasilkan setelah tuning memperoleh 26 pass / 0 fail, sama dengan baseline, dan review visual manual 94/100 vs baseline 92/100. Perbedaannya ada pada bukti hero lokal, provenance, variasi delivery-mode pada proyek, CTA penutup yang lebih spesifik, dan motion yang lebih terkendali. Detail dan trade-off ada pada [perbandingan langsung](./V3.0.8-TUNED-COMPARISON.md).

## Protokol fair

- Satu brief yang sama untuk seluruh snapshot.
- Tujuh snapshot yang dibandingkan: `51b60b1`, `fe07d66`, `e6c1acd`, `55214d5`, `51c04cf`, `2ab4e19`, `8f9c918`.
- Implementasi ditulis fresh per snapshot; HTML benchmark lama tidak dipakai sebagai template/input implementasi.
- Semua artifact offline-safe: tanpa remote dependency runtime. `e6c1acd` menggunakan SVG orisinal lokal dengan provenance yang dicatat.
- Verifikasi otomatis pada desktop `1440×900` dan mobile `390×844`, dengan reduced motion.
- Viewer interaktif diverifikasi: ketujuh tab dapat dipilih dan masing-masing menampilkan heading/content NOVA.

## Hasil objektif

| Snapshot | Arah visual fresh | Gate otomatis | Pass | Fail | Manual belum dinilai |
|---|---|---:|---:|---:|---:|
| `51b60b1` | archive signal / acid-green pressure mark | incomplete | 26 | 0 | 20 |
| `fe07d66` | editorial argument / cobalt route line | incomplete | 26 | 0 | 20 |
| `e6c1acd` | local fieldwork artwork / scarlet media composition | incomplete | 26 | 0 | 20 |
| `55214d5` | vermilion night / orbit artifact | incomplete | 26 | 0 | 20 |
| `51c04cf` | warm editorial / cobalt-yellow field guide | incomplete | 26 | 0 | 20 |
| `2ab4e19` | constructed monolith / coral-lilac | incomplete | 26 | 0 | 20 |
| `8f9c918` | synthesized HSL signal engine / obsidian-cyan-coral | incomplete | 26 | 0 | 20 |

`incomplete` berarti tidak ada kegagalan runtime otomatis, tetapi 20 kriteria yang membutuhkan review manusia belum diberi evidence. Jadi angka ini bukan klaim bahwa ketujuh versi memiliki kualitas visual yang sama; ini hanya menunjukkan baseline teknisnya setara dan bersih.

## Interpretasi perbandingan

| Snapshot | Perbedaan sistem yang diuji | Manifestasi fresh artifact |
|---|---|---|
| `51b60b1` | baseline reproduction-proof / craft-rich generation | arsip sinyal dengan satu artifak hero CSS dan ritme proyek asimetris |
| `fe07d66` | research-integrated, anti-imitation, dan pembatasan efek kontekstual | editorial argument dengan satu route-line sebagai signature, bukan kumpulan efek |
| `e6c1acd` | authentic-media routing dan audit visual mass | karya SVG lokal ber-provenance menjadi subjek hero, terintegrasi dengan tipografi dan crop |
| `55214d5` | suite benchmark lintas sistem v3.0.0–v3.0.7 | orbit artifact malam dengan chapter proyek bertingkat |
| `51c04cf` | baseline resmi v3.0.7 | field guide editorial berwarna terang dengan struktur yang lebih formal |
| `2ab4e19` | post-refactor generative framework v3.0.8 | monolith yang memusatkan komposisi pada material dan kontras |
| `8f9c918` | dynamic HSL color-harmony v3.0.9 | signal engine gelap dengan relasi coral/cyan yang diturunkan dari token HSL |

Kesimpulan yang valid dari run ini: seluruh snapshot mampu memenuhi baseline teknis yang sama ketika diberi brief yang sama; diferensiasinya lebih terlihat pada cara tiap sistem membingkai art direction, kontrol efek, dan keputusan media. Untuk memilih pemenang visual, 20 kriteria manual perlu diberi rubric dan reviewer yang sama.

## Snapshot yang dibandingkan

- `51b60b1` — reproduction-proof baseline untuk FlowAI dan NOVA.
- `fe07d66` — ProdigeUI v3 research-integrated benchmark.
- `e6c1acd` — ProdigeUI v4 authentic-media generation.
- `55214d5` — official benchmark suite for FlowAI, NOVA, Delve, and n8n across v3.0.0–v3.0.7.
- `51c04cf` — ProdigeUI v3.0.7 official new system baseline standard.
- `2ab4e19` — fresh post-refactor generative framework v3.0.8 benchmark suite.
- `8f9c918` — fresh dynamic HSL harmony engine v3.0.9 benchmark suite.

## Artifact

- [Viewer interaktif](./index.html)
- [51b60b1](./nova-51b60b1.html)
- [fe07d66](./nova-fe07d66.html)
- [e6c1acd](./nova-e6c1acd.html)
- [55214d5](./nova-55214d5.html)
- [51c04cf](./nova-51c04cf.html)
- [2ab4e19](./nova-2ab4e19.html)
- [8f9c918](./nova-8f9c918.html)
- [668418a tuned candidate](./nova-668418a-tuned.html)
- [Perbandingan baseline vs tuned candidate](./V3.0.8-TUNED-COMPARISON.md)
- [Provenance proof candidate](./assets/nova-668418a-proof-provenance.md)
- [Provenance media lokal](./assets/MEDIA-PROVENANCE.md)
- [Scorecard manual](./SCORECARD.md)
- [Baseline v3.0.8 dan improvement backlog](./BASELINE.md)
- [Brief dan aturan run](./PROMPT.md)
