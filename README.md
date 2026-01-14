# Just0rdinaryGuy.dev - Portofolio & Resume Eksis

![Portfolio Banner](public/assets/img/bges_dashboard.png) <!-- Gambar pemanis, ambil dari salah satu project -->

Yellow! 👋 Selamat datang di repository portofolio digital eug. Project ini dibikin buat nunjukin karya-karya, skill, dan perjalanan karir eug sebagai IT Enthusiast. Semuanya dibangun pake teknologi web modern biar performanya ngebut dan tampilannya kece.

## 🚀 Cek Website Live-nya

**[Mampir ke Portofolio](https://just0rdinaryguy.github.io/Porto/)**

## ✨ Fitur-Fitur 

- **Tampilan Modern**: Pake **Next.js 15** dan **Shadcn/ui**, jadi desainnya responsif, rapi, dan enak dilihat di HP maupun laptop.
- **Pamer Project**: Halaman detail project yang lengkap banget, ada deskripsi, tech stack, sampai galeri foto.
- **Resume Interaktif**: Gak perlu download PDF ribet-ribet, resume eug bisa langsung dilihat di website (terintegrasi sama Canva/PDF).
- **Bahasa Santai**: Kontennya pake Bahasa Indonesia yang luwes, biar bacanya gak kaku kayak baca koran.
- **Dark Mode**: Aman buat mata kalian yang suka begadang (mode gelap udah jadi standar lah ya).
- **Auto Deploy**: Hostingnya di **GitHub Pages**, deploy-nya otomatis pake GitHub Actions. Canggih kan?

## 🛠️ Sedang Memasak di Dapur (Tech Stack)

Ini alat-alat tempur yang gue pake buat bangun web ini:

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) - Biar ngebut dan SEO friendly.
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/) - Biar codingan lebih aman dan minim bug.
- **Gaya-gayaan**: [Tailwind CSS](https://tailwindcss.com/) - Styling cepet tanpa pusing mikirin class name.
- **Komponen UI**: [Shadcn/ui](https://ui.shadcn.com/) - Kumpulan komponen yang clean dan gampang di-custom.
- **Animasi**: [Framer Motion](https://www.framer.com/motion/) - Biar transisi halamannya mulus kayak jalan tol.
- **Hosting**: GitHub Pages (Gratis tis tis).

## 📂 Struktur Project 

Buat yang mau ngintip struktur foldernya:

```bash
├── app/                  # Halaman-halaman Next.js (App Router)
│   ├── page.tsx          # Halaman Depan (Hero, List Project, Kontak)
│   ├── resume/           # Halaman buat nampilin CV/Resume
│   └── projects/[slug]/  # Halaman detail tiap project (dinamis)
├── components/           # Komponen UI yang dipake ulang (Navbar, Hero, Card)
├── lib/                  # Data-data statis (project list ada di sini)
│   └── projects.ts       # Tempat ngedit data project
├── public/               # Tempat naruh gambar, font, dll
└── ...
```

© 2024 - 2026 Just0rdinaryGuy
