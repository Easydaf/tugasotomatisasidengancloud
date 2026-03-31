# Halo Button App

Aplikasi sederhana dengan tombol interaktif yang menampilkan "Halo" dengan animasi bagus.

## Fitur

✨ Tombol interaktif dengan styling gradient
🎨 Animasi mulus dan halus
📱 Fully responsive (mobile-friendly)
⌨️ Keyboard support (Enter/Space key)
📲 Haptic feedback pada mobile

## Cara Menggunakan

1. Buka file `Index.html` di browser
2. Tekan tombol "Tekan Tombol"
3. Teks "Halo!" akan muncul dengan animasi yang cantik
4. Tekan tombol lagi untuk menyembunyikan teks

## Deploy ke Vercel

### Metode 1: Dari GitHub

1. Push folder ini ke repository GitHub
2. Buka https://vercel.com
3. Click "New Project"
4. Import repository Anda
5. Vercel akan otomatis detect dan deploy

### Metode 2: Menggunakan Vercel CLI

```bash
npm install -g vercel
vercel
```

### Metode 3: Upload ZIP ke Vercel

1. Zip semua file di folder ini
2. Buka https://vercel.com/import
3. Upload ZIP file
4. Selesai!

## Struktur File

```
.
├── Index.html      (File HTML utama)
├── Tampilan.js     (JavaScript untuk interaktivitas)
├── UI.css          (Styling dan animasi)
├── package.json    (Konfigurasi npm)
├── vercel.json     (Konfigurasi Vercel)
└── README.md       (File ini)
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Animasi yang Digunakan

- **Slide In**: Container muncul dengan smooth dari atas
- **Pop In**: Teks "Halo" muncul dengan efek bounce
- **Hover Effect**: Tombol naik saat di-hover
- **Active Effect**: Tombol turun saat diklik

Selamat menikmati aplikasi Anda! 🎉
