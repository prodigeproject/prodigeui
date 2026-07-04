# Requirements Document

## Introduction

ProdigeUI adalah sebuah UI/UX kit system lengkap yang portabel dan dapat dipasang dengan mudah pada berbagai AI agentic coding tools (antara lain Claude/Claude Code, GLM, Codex, Antigravity, Hermes, Cursor). Tujuan produk adalah membekali AI agent dengan pengetahuan, aturan, aset, dan alur kerja terstruktur agar mampu merancang serta mengimplementasikan UI/UX kelas dunia untuk aplikasi desktop, web, dan mobile — dengan kualitas enterprise-grade, interaktif, dan bebas dari "AI slop".

ProdigeUI bersifat general-purpose: mendukung banyak use case (SaaS, landing page, ecommerce, portfolio, HRIS, agentic app, dan lainnya) melalui satu kesatuan sistem. Sistem ini dibangun dari hasil riset menyeluruh atas kumpulan repositori skill/library (folder `Skill & Library`) dan koleksi buku teori desain (folder `Book`), dengan artefak catatan ekstraksi yang mendokumentasikan poin yang di-copy, ditingkatkan, dan diadaptasi dari setiap sumber.

Output akhir adalah satu paket sistem yang berada di dalam folder bernama `prodigeui`.

## Glossary

- **ProdigeUI**: Sistem UI/UX kit lengkap yang menjadi produk yang dispesifikasikan pada dokumen ini, disimpan dalam folder `prodigeui`.
- **Agentic_Tool**: Perangkat lunak AI agentic coding yang menjadi target instalasi ProdigeUI (Claude Code, GLM, Codex, Antigravity, Hermes, Cursor, dan sejenisnya).
- **Installer**: Komponen ProdigeUI yang bertanggung jawab menyalin, mendaftarkan, dan mengonfigurasi ProdigeUI ke dalam sebuah Agentic_Tool.
- **Agentic_Workflow**: Kumpulan artefak yang mengarahkan perilaku agent, mencakup `AGENTS.md`, berkas skill, hooks, plugins, dan scripts.
- **Skill**: Sebuah unit kemampuan tunggal yang disimpan dalam folder tersendiri dengan berkas `SKILL.md` (frontmatter + isi) beserta berkas pendukungnya.
- **Skill_Registry**: Berkas indeks (`AGENTS.md`/`skills.md`) yang mencatat dan mendeskripsikan seluruh Skill yang tersedia beserta pemicunya.
- **Design_Token**: Nilai desain bernama dan semantik (mis. `color.surface.primary`, `space.md`, `radius.lg`) yang menjadi sumber kebenaran tunggal untuk keputusan visual.
- **Token_System**: Kumpulan seluruh Design_Token beserta strukturnya (primitive, semantik, dan komponen).
- **Theme**: Konfigurasi lengkap nilai Design_Token yang membentuk satu identitas visual (mis. light, dark, brand tertentu).
- **Theme_Catalog**: Kumpulan Theme siap pakai yang disediakan ProdigeUI.
- **Motion_Preset**: Definisi animasi/transisi terparameter (durasi, easing, keyframe) yang dapat digunakan ulang.
- **Motion_Library**: Kumpulan seluruh Motion_Preset.
- **Component**: Elemen antarmuka yang dapat digunakan ulang (mis. Button, Card, Modal) beserta spesifikasi dan variannya.
- **Component_Library**: Kumpulan seluruh Component.
- **Design_Asset_Package**: Paket berisi aset desain (ikon, ilustrasi, font, gambar, template) yang dapat didistribusikan bersama ProdigeUI.
- **Design_Rules**: Aturan desain terdokumentasi untuk tipografi, warna, tata letak (layout), dan struktur.
- **Prompt_Template**: Template atau contoh prompt profesional dan terperinci untuk menghasilkan artefak UI/UX.
- **Prompt_Template_Library**: Kumpulan seluruh Prompt_Template.
- **Research_Note**: Artefak catatan ekstraksi untuk sebuah sumber referensi (repo atau buku) yang mendokumentasikan poin yang di-copy, ditingkatkan/diperbaiki, dan diadaptasi.
- **Research_Log**: Kumpulan seluruh Research_Note beserta indeksnya.
- **Use_Case**: Kategori aplikasi yang didukung ProdigeUI (SaaS, landing page, ecommerce, portfolio, HRIS, agentic app, dan lainnya).
- **Quality_Gate**: Mekanisme validasi yang memastikan output desain memenuhi standar enterprise-grade dan bebas "AI slop".
- **Accessibility_Standard**: Standar aksesibilitas acuan, yaitu WCAG 2.1 level AA.

## Requirements
### Requirement 1: Portabilitas Lintas Agentic Tools dan Instalasi
**User Story:** Sebagai AI enthusiast, saya ingin memasang ProdigeUI ke berbagai AI agentic coding tool dengan mudah, sehingga saya dapat langsung memakainya tanpa konfigurasi manual yang rumit.
#### Acceptance Criteria
1. THE ProdigeUI SHALL menyediakan seluruh artefaknya dalam satu folder root bernama `prodigeui`.
2. THE ProdigeUI SHALL mendukung instalasi pada Agentic_Tool berikut: Claude Code, GLM, Codex, Antigravity, Hermes, dan Cursor.
3. WHEN pengguna menjalankan Installer untuk sebuah Agentic_Tool yang didukung, THE Installer SHALL menyalin dan mendaftarkan artefak ProdigeUI ke lokasi konfigurasi terdokumentasi milik Agentic_Tool tersebut.
4. WHEN proses instalasi selesai tanpa kesalahan, THE Installer SHALL menampilkan ringkasan berisi daftar setiap artefak yang terpasang beserta lokasi tujuan absolutnya.
5. IF Agentic_Tool target tidak termasuk dalam daftar Agentic_Tool yang didukung, THEN THE Installer SHALL menghentikan instalasi dan menampilkan pesan kesalahan yang menyebutkan seluruh daftar Agentic_Tool yang didukung.
6. IF sebuah artefak dengan nama yang sama telah ada di lokasi tujuan, THEN THE Installer SHALL meminta konfirmasi eksplisit dari pengguna sebelum menimpa berkas tersebut.
7. IF pengguna menolak konfirmasi penimpaan untuk sebuah artefak, THEN THE Installer SHALL melewati penimpaan artefak tersebut dan mempertahankan berkas yang telah ada tanpa perubahan.
8. IF proses instalasi gagal saat menyalin atau mendaftarkan sebuah artefak, THEN THE Installer SHALL menghentikan proses, menampilkan pesan kesalahan yang menyebutkan artefak yang gagal terpasang, dan mengembalikan lokasi tujuan ke keadaan sebelum instalasi dimulai.
9. THE ProdigeUI SHALL menyediakan instruksi instalasi terdokumentasi untuk setiap Agentic_Tool yang didukung.
10. WHERE sebuah Agentic_Tool tidak mendukung format asli ProdigeUI, THE ProdigeUI SHALL menyediakan berkas adaptasi (mis. `AGENTS.md`, `CLAUDE.md`) yang setara secara isi untuk Agentic_Tool tersebut.
### Requirement 2: Struktur Agentic Workflow
**User Story:** Sebagai AI agent, saya ingin memiliki alur kerja terstruktur berupa AGENTS.md, skill, dan hooks, sehingga saya dapat menemukan dan menjalankan kemampuan UI/UX yang tepat pada saat yang tepat.
#### Acceptance Criteria
1. THE Agentic_Workflow SHALL menyertakan sebuah berkas `AGENTS.md` pada root ProdigeUI yang memuat deskripsi tujuan sistem, struktur folder, dan petunjuk pemakaian yang mencakup cara menemukan dan menjalankan Skill.
2. THE Agentic_Workflow SHALL menyimpan setiap Skill dalam folder tersendiri yang memuat tepat satu berkas `SKILL.md`.
3. THE SKILL.md SHALL memuat frontmatter yang mencakup sekurang-kurangnya field `name`, `description`, dan `triggers`, dengan nilai `name` yang unik di seluruh Skill_Registry.
4. THE Skill_Registry SHALL mencantumkan seluruh Skill yang tersedia beserta `name`, deskripsi, dan pemicunya.
5. WHEN sebuah Skill baru ditambahkan ke folder skill, THE Skill_Registry SHALL mencantumkan Skill tersebut tanpa mengubah entri atau struktur Skill yang sudah ada.
6. WHERE otomatisasi disediakan untuk sebuah alur kerja, THE Agentic_Workflow SHALL menyediakan hooks, plugins, atau scripts terdokumentasi yang mencantumkan pemicu, efek, dan cara mengaktifkannya.
7. THE ProdigeUI SHALL menyediakan sekurang-kurangnya satu Skill yang mengarahkan agent untuk perancangan UI/UX end-to-end dari brief hingga implementasi.
8. IF sebuah folder Skill tidak memuat berkas `SKILL.md`, THEN THE Skill_Registry SHALL mengabaikan folder tersebut dan menandainya sebagai Skill tidak valid dengan indikasi yang dapat diamati.
9. IF frontmatter pada `SKILL.md` tidak memuat salah satu field wajib (`name`, `description`, atau `triggers`), THEN THE Skill_Registry SHALL tidak mencantumkan Skill tersebut dan memberikan indikasi kesalahan yang menyebutkan field yang hilang.
### Requirement 3: Semantic Design Tokens
**User Story:** Sebagai developer, saya ingin sistem token desain semantik, sehingga keputusan visual konsisten dan dapat diubah secara terpusat.
#### Acceptance Criteria
1. THE Token_System SHALL mendefinisikan Design_Token pada tiga tingkat: primitive, semantik, dan komponen.
2. THE Token_System SHALL mencakup kategori token untuk warna, tipografi, spacing, radius, shadow/elevation, border, dan z-index.
3. THE Design_Token SHALL menggunakan penamaan semantik yang mendeskripsikan peran (mis. `color.surface.primary`) dan nama token semantik SHALL tidak memuat nilai literal seperti kode warna atau ukuran piksel.
4. THE Token_System SHALL memetakan setiap token semantik ke sebuah token primitive atau nilai konkret, dan setiap token komponen ke sebuah token semantik.
5. IF sebuah token semantik atau komponen mereferensikan token yang tidak terdefinisi, THEN THE Token_System SHALL menggagalkan validasi tanpa menghasilkan keluaran token dan menghasilkan laporan yang mengidentifikasi token perujuk beserta nama referensi yang tidak terdefinisi.
6. THE Token_System SHALL disediakan dalam format yang dapat dibaca mesin (mis. JSON) dan dapat diturunkan menjadi variabel CSS.
7. THE Token_System SHALL mendukung penggantian nilai per Theme tanpa mengubah nama token semantik.
8. IF terdeteksi referensi melingkar (circular reference) antar token, THEN THE Token_System SHALL menggagalkan validasi dan menghasilkan laporan yang mengidentifikasi rantai token yang membentuk siklus.
9. IF sebuah Theme tidak mendefinisikan nilai untuk sebuah token semantik yang terdefinisi, THEN THE Token_System SHALL menggunakan nilai token dari Theme default dan menandai token tersebut sebagai tidak lengkap pada laporan validasi.
### Requirement 4: Theme Catalog
**User Story:** Sebagai pengguna, saya ingin katalog tema siap pakai, sehingga saya dapat memilih identitas visual dengan cepat untuk berbagai use case.
#### Acceptance Criteria
1. THE Theme_Catalog SHALL menyediakan sekurang-kurangnya satu Theme terang (light) dan sekurang-kurangnya satu Theme gelap (dark), di mana Theme terang memiliki warna latar dengan luminance lebih tinggi daripada warna teks utamanya dan Theme gelap memiliki warna latar dengan luminance lebih rendah daripada warna teks utamanya.
2. THE Theme SHALL mendefinisikan sebuah nilai untuk setiap token semantik yang dipakai Component_Library, tanpa ada token semantik yang tidak memiliki nilai.
3. WHEN sebuah Theme diterapkan, THE ProdigeUI SHALL merender setiap Component hanya menggunakan nilai Design_Token yang berasal dari Theme yang aktif tersebut, tanpa nilai visual yang di-hardcode di luar Theme.
4. IF sebuah Theme tidak mendefinisikan nilai untuk sebuah token semantik yang dibutuhkan Component_Library, THEN THE ProdigeUI SHALL menggagalkan validasi Theme dan menghasilkan keluaran validasi yang menyebutkan setiap nama token semantik yang hilang.
5. THE Theme_Catalog SHALL menyediakan dokumentasi langkah pembuatan Theme baru berbasis Token_System yang mencakup daftar seluruh token semantik yang wajib didefinisikan.
6. THE setiap Theme dalam Theme_Catalog SHALL memenuhi Accessibility_Standard dengan rasio kontras minimal 4.5:1 untuk teks normal dan minimal 3:1 untuk teks berukuran besar, antara warna teks dan warna latar di belakangnya.
### Requirement 5: Motion Presets
**User Story:** Sebagai desainer, saya ingin preset animasi yang siap pakai, sehingga antarmuka terasa hidup dan interaktif tanpa mengorbankan performa atau aksesibilitas.
#### Acceptance Criteria
1. THE Motion_Library SHALL menyediakan minimal satu Motion_Preset untuk masing-masing kategori berikut: enter/exit, transisi state, hover/focus, dan scroll-based.
2. THE Motion_Preset SHALL mendefinisikan durasi dalam rentang 100 milidetik hingga 1000 milidetik dan nilai easing yang eksplisit dinyatakan sebagai fungsi easing bernama atau kurva cubic-bezier.
3. THE Motion_Library SHALL menautkan nilai durasi dan easing setiap Motion_Preset ke Design_Token motion sehingga perubahan pada token diterapkan secara terpusat ke seluruh preset yang mereferensikannya.
4. WHILE preferensi sistem pengguna menyetel "reduce motion", THE ProdigeUI SHALL menonaktifkan animasi non-esensial dan membatasi animasi esensial pada durasi maksimum 100 milidetik tanpa gerakan berbasis posisi atau parallax.
5. THE Motion_Library SHALL mendokumentasikan prinsip motion (tujuan, hierarki, dan timing) dengan minimal satu prinsip yang tertaut secara eksplisit ke setiap Motion_Preset.
### Requirement 6: Component Library
**User Story:** Sebagai developer, saya ingin pustaka komponen yang lengkap dan konsisten, sehingga saya dapat menyusun antarmuka enterprise-grade dengan cepat.
#### Acceptance Criteria
1. THE Component_Library SHALL menyediakan minimal satu Component untuk masing-masing kategori berikut: input & form, navigasi, umpan balik (feedback), tampilan data (data display), tata letak (layout), dan overlay.
2. THE setiap Component SHALL mengambil seluruh nilai visualnya (warna, tipografi, spasi, radius, dan bayangan) dari Design_Token dan tidak menggunakan nilai mentah yang ditulis langsung.
3. THE setiap Component interaktif SHALL mendokumentasikan seluruh varian yang tersedia, seluruh properti yang tersedia, dan setiap state berikut: default, hover, focus, active, disabled, dan error.
4. THE setiap Component interaktif SHALL memenuhi Accessibility_Standard, mencakup peran ARIA yang sesuai, pengoperasian penuh seluruh fungsi melalui keyboard, dan indikator fokus terlihat yang memenuhi rasio kontras minimum yang ditetapkan Accessibility_Standard.
5. WHEN sebuah Theme aktif diterapkan pada Component, THE Component SHALL menampilkan nilai visual yang bersumber dari Design_Token milik Theme aktif tersebut tanpa memerlukan muat ulang halaman.
6. THE Component_Library SHALL mendokumentasikan pedoman komposisi antar-Component menurut prinsip atomic design.
7. IF Design_Token yang dirujuk oleh sebuah Component tidak tersedia atau tidak valid saat Theme diterapkan, THEN THE Component SHALL menggunakan nilai Design_Token default dan mempertahankan tampilan yang dapat digunakan (tidak kosong atau rusak).
8. WHILE sebuah Component interaktif berada dalam state disabled, THE Component SHALL mengabaikan seluruh masukan pengguna dan tidak memicu aksi apa pun.
### Requirement 7: Design Asset Packages
**User Story:** Sebagai pengguna, saya ingin paket aset desain yang terkurasi, sehingga saya dapat memakai ikon, font, dan ilustrasi berkualitas tanpa mencari sendiri.
#### Acceptance Criteria
1. THE Design_Asset_Package SHALL mencakup ketiga kategori aset berikut: ikon, tipografi/font, dan ilustrasi atau gambar contoh, dengan minimal 5 aset per kategori.
2. THE setiap Design_Asset_Package SHALL menyertakan metadata lisensi untuk seluruh aset yang dikandungnya, yang mencakup nama lisensi, sumber atau pemegang hak, dan status penggunaan komersial (diizinkan atau dibatasi).
3. IF sebuah aset memiliki lisensi yang membatasi penggunaan komersial, THEN THE Design_Asset_Package SHALL menandai batasan tersebut secara eksplisit pada metadata aset yang bersangkutan.
4. THE Design_Asset_Package SHALL mendokumentasikan cara mereferensikan setiap aset dari Component dan Prompt_Template menggunakan pengidentifikasi aset yang unik.
5. IF sebuah aset tidak memiliki metadata lisensi yang lengkap (nama lisensi, sumber, dan status penggunaan komersial), THEN THE Design_Asset_Package SHALL tidak menyertakan aset tersebut dan menampilkan indikasi kesalahan yang menyatakan bahwa metadata lisensi tidak lengkap.
6. IF referensi aset dari Component atau Prompt_Template menunjuk ke pengidentifikasi yang tidak ada dalam Design_Asset_Package, THEN THE ProdigeUI SHALL menampilkan indikasi kesalahan yang menyatakan aset tidak ditemukan dan mempertahankan konfigurasi sebelumnya tanpa perubahan.
### Requirement 8: Design System dan Kohesi
**User Story:** Sebagai pengguna, saya ingin seluruh bagian terhubung sebagai satu design system, sehingga token, tema, komponen, motion, dan aturan bekerja secara harmonis.
#### Acceptance Criteria
1. THE ProdigeUI SHALL mendokumentasikan sebuah design system yang secara eksplisit menautkan keenam artefak berikut: Token_System, Theme_Catalog, Motion_Library, Component_Library, Design_Asset_Package, dan Design_Rules, di mana setiap artefak memiliki setidaknya satu referensi terdokumentasi menuju artefak lain yang bergantung padanya.
2. THE design system SHALL mendefinisikan skala dasar spacing dan skala tipografi sebagai token pada Token_System, dan setiap komponen pada Component_Library serta setiap aturan pada Design_Rules SHALL mereferensikan token skala tersebut alih-alih menggunakan nilai literal.
3. WHEN sebuah nilai skala dasar diubah pada Token_System, THE design system SHALL mencerminkan perubahan tersebut pada seluruh artefak yang mereferensikannya tanpa memerlukan penyuntingan manual pada masing-masing artefak.
4. THE design system SHALL menyediakan dokumentasi entry point yang menjelaskan urutan penggunaan keenam artefak untuk sebuah proyek baru, mulai dari token dasar hingga komponen dan aturan.
5. IF sebuah artefak mereferensikan token atau nilai skala yang tidak terdefinisi pada Token_System, THEN THE design system SHALL menandai referensi tersebut sebagai tidak valid dan menyertakan indikasi yang mengidentifikasi artefak beserta referensi yang bermasalah.
6. IF terdapat definisi token dengan nama yang sama namun nilai berbeda di antara artefak, THEN THE design system SHALL menandai konflik tersebut dan mempertahankan definisi pada Token_System sebagai sumber kebenaran tunggal.
### Requirement 9: Design Rules (Tipografi, Warna, Layout, Struktur)
**User Story:** Sebagai AI agent, saya ingin aturan desain yang tegas dan terukur, sehingga hasil rancangan konsisten dan mengikuti prinsip desain yang benar.
#### Acceptance Criteria
1. THE Design_Rules SHALL mendefinisikan aturan tipografi yang mencakup skala ukuran (dinyatakan sebagai rasio skala tetap antar tingkat ukuran), rentang tinggi baris (line-height) sebagai rasio terhadap ukuran font, daftar berat font (weight) yang diizinkan, dan pasangan font (font pairing) yang dipilih dari daftar kombinasi yang diizinkan.
2. THE Design_Rules SHALL mendefinisikan aturan warna yang mencakup peran warna, penggunaan warna aksen, dan rasio kontras minimum sesuai Accessibility_Standard, yaitu minimal 4.5:1 untuk teks normal dan minimal 3:1 untuk teks berukuran besar (≥ 18pt, atau ≥ 14pt bold).
3. THE Design_Rules SHALL mendefinisikan aturan tata letak (layout) yang mencakup sistem grid dengan jumlah kolom yang ditetapkan, breakpoint responsif (minimal tiga tingkat: mobile, tablet, dan desktop dengan ambang lebar yang ditetapkan), dan skala spacing yang diturunkan dari satu unit dasar yang konsisten.
4. THE Design_Rules SHALL mendefinisikan aturan struktur yang mencakup hierarki visual, pengelompokan konten, dan pola navigasi.
5. THE setiap aturan dalam Design_Rules SHALL dinyatakan dalam kriteria yang dapat diverifikasi (mis. rentang nilai, rasio, atau daftar pilihan yang diizinkan).
6. IF sebuah rancangan melanggar aturan terukur dalam Design_Rules, THEN THE Quality_Gate SHALL menandai pelanggaran tersebut beserta identitas aturan yang dilanggar dan lokasi pelanggaran, serta mempertahankan rancangan asli tanpa modifikasi.
7. WHEN sebuah rancangan mematuhi seluruh aturan terukur dalam Design_Rules, THE Quality_Gate SHALL menandai rancangan tersebut sebagai lolos verifikasi.
8. IF sebuah aturan dalam Design_Rules tidak dinyatakan dalam kriteria yang dapat diverifikasi, THEN THE Quality_Gate SHALL menandai aturan tersebut sebagai tidak dapat dievaluasi beserta identitas aturannya.
### Requirement 10: Prompt Template Library
**User Story:** Sebagai AI enthusiast, saya ingin template prompt profesional dan terperinci, sehingga saya dapat mengarahkan agent menghasilkan UI/UX berkualitas tinggi secara konsisten.
#### Acceptance Criteria
1. THE Prompt_Template_Library SHALL menyediakan minimal satu Prompt_Template untuk setiap Use_Case yang didukung.
2. THE Prompt_Template_Library SHALL memastikan setiap Prompt_Template mereferensikan Design_Rules, Token_System, dan Component_Library yang relevan dengan Use_Case terkait.
3. THE setiap Prompt_Template SHALL memuat secara eksplisit bagian konteks, batasan (constraint), dan kriteria keluaran, serta mencakup seluruh elemen yang ada pada baseline `prompt-templates` di `open-design-main`.
4. THE setiap Prompt_Template SHALL menyertakan minimal satu contoh keluaran yang diharapkan beserta kriteria penerimaan keluaran.
5. WHEN sebuah Prompt_Template dipakai, THE Prompt_Template SHALL mengarahkan agent untuk menghasilkan keluaran yang mematuhi Quality_Gate.
6. WHEN sebuah Prompt_Template dipakai, THE Prompt_Template SHALL mengarahkan agent untuk menghasilkan keluaran yang mematuhi Accessibility_Standard.
7. IF sebuah Use_Case yang didukung tidak memiliki Prompt_Template, THEN THE Prompt_Template_Library SHALL menandai kondisi tersebut dengan indikasi kesalahan yang menyebutkan Use_Case terkait dan tidak menyajikan template kosong.
8. IF sebuah Prompt_Template mereferensikan Design_Rules, Token_System, atau Component_Library yang tidak ada, THEN THE Prompt_Template_Library SHALL menolak template tersebut dan memberikan indikasi kesalahan yang menyebutkan referensi tidak valid.
### Requirement 11: Cakupan Multi Use Case
**User Story:** Sebagai pengguna, saya ingin satu sistem yang mendukung banyak jenis aplikasi, sehingga saya tidak perlu kit terpisah untuk tiap kebutuhan.
#### Acceptance Criteria
1. THE ProdigeUI SHALL menyediakan setidaknya satu Theme, satu set Component, dan satu Prompt_Template untuk masing-masing Use_Case berikut: SaaS, landing page, ecommerce, portfolio, HRIS, dan agentic app (total 6 Use_Case).
2. THE ProdigeUI SHALL memastikan setiap Component dapat dirender dan berfungsi penuh pada ketiga target platform: desktop, web, dan mobile.
3. THE ProdigeUI SHALL menyediakan dokumentasi pedoman untuk masing-masing dari 6 Use_Case pada kriteria 1, di mana setiap dokumentasi menautkan minimal satu Component, satu Theme, dan satu Prompt_Template yang relevan.
4. IF sebuah Use_Case tidak memiliki dokumentasi pedoman yang menautkan Component, Theme, dan Prompt_Template, THEN THE ProdigeUI SHALL menandai Use_Case tersebut sebagai belum lengkap dengan indikasi bagian yang hilang.
5. WHERE sebuah Use_Case membutuhkan pola khusus, THE ProdigeUI SHALL menyediakan panduan pola tersebut dengan mereferensikan Design_Token dan Component yang sudah ada tanpa membuat duplikat.
### Requirement 12: Quality Assurance ("No AI Slop" / Enterprise-Grade)
**User Story:** Sebagai pembeli, saya ingin jaminan kualitas keluaran, sehingga hasil desain tampak seperti karya expert kelas dunia dan bukan "AI slop".
#### Acceptance Criteria
1. THE Quality_Gate SHALL mendefinisikan daftar kriteria kualitas di mana setiap kriteria memiliki definisi lolos/gagal yang objektif dan dapat diukur, mencakup kepatuhan Design_Rules, penggunaan Design_Token, konsistensi Theme, dan pemenuhan Accessibility_Standard.
2. WHEN sebuah keluaran desain dievaluasi terhadap Quality_Gate, THE Quality_Gate SHALL menghasilkan status lolos atau gagal untuk setiap kriteria yang didefinisikan tanpa menyisakan kriteria yang tidak dievaluasi.
3. WHEN evaluasi Quality_Gate selesai, THE Quality_Gate SHALL menetapkan hasil keseluruhan "lolos" hanya jika seluruh kriteria lolos, dan "gagal" jika terdapat satu atau lebih kriteria yang gagal.
4. IF sebuah keluaran desain gagal memenuhi satu atau lebih kriteria Quality_Gate, THEN THE Quality_Gate SHALL menyediakan, untuk setiap kegagalan, identitas kriteria yang gagal, deskripsi masalah, dan rekomendasi perbaikan yang dapat ditindaklanjuti.
5. THE Quality_Gate SHALL menyertakan checklist "anti AI slop" dengan indikator terukur yang minimal mencakup penggunaan nilai mentah alih-alih Design_Token, hierarki visual yang tidak memenuhi Design_Rules, dan rasio kontras teks yang berada di bawah ambang Accessibility_Standard.
6. THE Quality_Gate SHALL dapat dijalankan sebagai bagian dari Agentic_Workflow melalui Skill atau hook terdokumentasi dan mengembalikan hasil evaluasi kepada pemanggil.
### Requirement 13: Aksesibilitas
**User Story:** Sebagai pengguna, saya ingin keluaran memenuhi standar aksesibilitas, sehingga aplikasi dapat digunakan oleh sebanyak mungkin orang.
#### Acceptance Criteria
1. THE ProdigeUI SHALL menetapkan WCAG 2.1 level AA sebagai Accessibility_Standard acuan.
2. THE Component_Library dan Theme_Catalog SHALL menjaga rasio kontras minimum 4.5:1 antara teks normal dan latar belakangnya, sesuai Accessibility_Standard.
3. THE Component_Library dan Theme_Catalog SHALL menjaga rasio kontras minimum 3:1 untuk teks berukuran besar (≥ 18pt, atau ≥ 14pt tebal) serta untuk komponen antarmuka non-teks dan indikator status, sesuai Accessibility_Standard.
4. THE setiap Component interaktif SHALL dapat dioperasikan penuh (menerima fokus, aktivasi, dan navigasi keluar) hanya melalui keyboard tanpa menimbulkan keyboard trap.
5. WHILE sebuah Component interaktif menerima fokus keyboard, THE Component SHALL menampilkan indikator fokus yang terlihat dengan rasio kontras minimum 3:1 terhadap latar sekitarnya.
6. THE Design_Rules SHALL menyertakan pedoman aksesibilitas terukur untuk warna (rasio kontras minimum), tipografi (ukuran font minimum dan tinggi baris), dan fokus (visibilitas indikator fokus).
7. WHEN Quality_Gate dijalankan, THE Quality_Gate SHALL mengevaluasi kepatuhan terhadap Accessibility_Standard dan melaporkan setiap pelanggaran yang dapat dideteksi secara otomatis beserta lokasi Component atau token yang melanggar.
8. IF Quality_Gate mendeteksi minimal satu pelanggaran Accessibility_Standard, THEN THE Quality_Gate SHALL menandai hasil evaluasi sebagai gagal.
### Requirement 14: Artefak Riset dan Catatan Ekstraksi Referensi
**User Story:** Sebagai pembuat produk, saya ingin catatan riset dari setiap sumber referensi, sehingga keputusan desain dapat dilacak asal-usulnya dan sumber dapat ditingkatkan secara transparan.
#### Acceptance Criteria
1. THE ProdigeUI SHALL memelihara sebuah Research_Log tunggal yang berisi tepat satu entri indeks untuk setiap Research_Note, dan setiap entri SHALL mencantumkan identitas sumber serta referensi ke Research_Note terkait.
2. WHEN sebuah repo pada folder `Skill & Library` selesai diriset, THE ProdigeUI SHALL membuat tepat satu Research_Note untuk repo tersebut.
3. WHEN sebuah buku pada folder `Book` selesai diriset, THE ProdigeUI SHALL membuat tepat satu Research_Note untuk buku tersebut.
4. THE setiap Research_Note SHALL mendokumentasikan tiga kategori temuan — poin yang di-copy, poin yang perlu ditingkatkan atau diperbaiki, dan poin yang perlu diadaptasi — di mana setiap kategori berisi nol atau lebih temuan dan SHALL ditandai secara eksplisit sebagai "tidak ada" ketika kategori tersebut kosong.
5. THE setiap Research_Note SHALL menyertakan identitas sumber berupa nama repo atau judul buku beserta lokasi sumber pada folder terkait sehingga sumber dapat ditelusuri kembali ke berkas aslinya.
6. WHERE sebuah temuan riset diterapkan pada artefak ProdigeUI, THE Research_Note SHALL mereferensikan artefak tujuan penerapannya dengan pengenal artefak yang unik.
7. WHEN sebuah Research_Note baru dibuat, THE ProdigeUI SHALL menambahkan entri untuk Research_Note tersebut ke Research_Log dalam operasi pembuatan yang sama sehingga Research_Log tetap mengindeks 100% Research_Note yang ada.
8. IF pembuatan Research_Note gagal untuk sebuah sumber yang diriset, THEN THE ProdigeUI SHALL menandai sumber tersebut sebagai belum terdokumentasi pada Research_Log dan SHALL mempertahankan seluruh entri Research_Note lain yang sudah ada tanpa perubahan.
