# Draft Threads — FOLD fashion benchmark

**Post 1/7**

Saya audit ulang benchmark fashion FOLD karena versi sebelumnya memang gagal.
Hasilnya lebih terasa seperti landing page dengan pakaian: headline besar, blok
abstrak, dan placeholder CSS. Belum terasa seperti web fashion.

**Post 2/7**

Saya validasi ulang ke situs fashion nyata. Fashion storefront perlu menjawab:
produk apa, koleksinya apa, bagaimana bentuk/material/fit-nya, pilihan size/color,
harga bila memang commerce, dan langkah berikutnya untuk melihat atau membeli.

**Post 3/7**

Run baru memakai brief dan media lokal yang sama di dua lane:

1. ProdigeUI v3.0.8 + intent/media routing
2. Raw generic tanpa ProdigeUI

Media yang sama: lookbook, product still-life, dan material detail. Jadi sistem
tidak menang hanya karena mendapat gambar yang tidak diberikan ke lane raw.

**Post 4/7**

Lane ProdigeUI sekarang dimulai dari lookbook: garment dipakai dalam konteks,
bukan abstrak shape. Lalu masuk ke collection discovery dengan kategori, jumlah
pieces, filters, product image, material, color, size range, price, dan `View piece`.

**Post 5/7**

Strukturnya mengikuti user job fashion: campaign/lookbook → shop → material detail
→ fit/care/shipping → contact. Ini bukan NOVA dengan warna baru. Yang dipindahkan
dari v3.0.8 adalah disiplin membaca intent dan hierarchy; bahasa visualnya diturunkan
untuk FOLD.

**Post 6/7**

Skor manual directional:

• ProdigeUI v3.0.8 + intent route: 94/100
• Raw: 60/100

Catatan penting: ini bukan conversion claim. Ini review atas fashion language,
product proof, merchandising UX, hierarchy, dan authored structure.

**Post 7/7**

Perbaikan yang masuk ke ProdigeUI bukan “tambah theme fashion”. Justru sebaliknya:
theme tidak boleh menjadi preset. Sistem sekarang wajib membaca product, target
market, user job, evidence/media, dan route. Kalau produk berubah, media, layout,
typography, color, dan interaction harus ikut di-derive ulang.

Viewer + source benchmark:
https://github.com/prodigeproject/prodigeui/tree/master/benchmark/fashion-v308-vs-raw-20260822
