# Website ADLV 🌐

Website resmi untuk **ADLV** yang menawarkan berbagai produk seperti jaket, kaos, dan hoodie dengan fitur lengkap untuk pengalaman belanja online yang optimal. 🛒✨

## Link Deploy Vercel 
```
https://adlv-app-wadiyan-wadiyans-projects.vercel.app
```

## Getting Started
1. **Clone repositori**
   ```bash
   git clone https://github.com/username/adlv-website.git
   cd PW2-22B-ADLVTEAM/Program/adlv-app
   ```

2. **Instal dependensi**
   ```bash
   npm install
   npm install @tabler/icons-react
   ```
3. **Generate prisma**
``` bash
npx prisma generate
```

4. **Jalankan aplikasi**
   ```bash
   npm run dev
   ```

5. **Akses aplikasi**
   - Buka di browser: [http://localhost:3000](http://localhost:3000)
  
7. Catatan: ```jika tampil invalid mounted routed bisa jadi karena sistem tidak mendeteksi sebagai next js refresh terus npm run dev sampai berhasil``` close vs code dan buka lagi


## Fitur Utama

1. **Home** 🏠
   - Banner promosi.
   - Produk terbaru/populer.
   - Cara pemesanan.
   - Tombol navigasi ke halaman lain.

2. **Katalog** 📖
   - Menampilkan semua koleksi produk.
   - Gambar produk, nama, ukuran, harga, tombol 'Tambah ke Keranjang' dan 'Pesan via WhatsApp'.

3. **Detail Produk** 🔍
   - Informasi lengkap produk yang dipilih dari katalog.

4. **Keranjang Belanja** 🛒
   - Daftar produk yang dipilih pengguna.
   - Tombol checkout atau pesan via WhatsApp.

5. **Checkout** ✅
   - Formulir detail pembeli sebelum konfirmasi pesanan.
   - Pembayaran melalui QR code untuk mempermudah transaksi. 🔗
   - Pengiriman hanya untuk wilayah Bandar Lampung dan sekitarnya. 🚚

6. **Tentang Kami** ℹ️
   - Informasi tentang ADLV, filosofi merek, dan kontak.

7. **Kontak** 📞
   - Formulir kontak, tautan WhatsApp, dan media sosial.

8. **FAQ** ❓
   - Jawaban untuk pertanyaan umum.

9. **Kebijakan Pengembalian** 🔄
   - Informasi pengembalian barang dan privasi data pelanggan.

10. **Login/Daftar** 🔐
    - Formulir untuk pengguna membuat akun atau login.

11. **Admin Dashboard** 🖥️
    - Manajemen produk, pesanan, stok, dan pengguna.

---

## Teknologi yang Digunakan 💻

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Database**: MySQL (atau Supabase sebagai opsi)
- **ORM**: Prisma
- **Desain & Styling**: Tailwind CSS, DaisyUI, ShadCN/UI
- **Autentikasi**: Clerk Auth
- **Validasi Data**: Zod
- **Bahasa Pemrograman**: TypeScript

---

## Instalasi dan Setup 🚀



---

## Struktur Direktori 📂

```
project-root/
├── public/              # File statis (gambar, favicon, dll.)
├── src/
│   ├── app/             # Struktur halaman (App Router)
│   ├── components/      # Komponen global
│   ├── styles/          # Styling (Tailwind CSS)
│   └── utils/           # Fungsi utilitas
├── prisma/              # Skema Prisma
├── .env                 # Konfigurasi environment
├── package.json         # Dependensi proyek
└── README.md            # Dokumentasi proyek
```

---

## Timeline Pengembangan 📅

| Hari | Tahapan Pengembangan        | Deskripsi                                      |
|------|-----------------------------|-----------------------------------------------|
| 1    | Perencanaan & Setup Proyek | Inisialisasi proyek dan konfigurasi awal.      |
| 2    | Halaman Utama              | Implementasi desain Home.                     |
| 3    | Katalog & Detail Produk    | Menampilkan produk dari database.             |
| 4    | Keranjang & Checkout       | Logika keranjang belanja dan checkout.        |
| 5    | Admin Dashboard            | Manajemen produk, pesanan, dan pengguna.      |
| 6    | Testing & Validasi         | Validasi data dan pengujian end-to-end.       |
| 7    | Deployment & Optimasi      | Deploy aplikasi dan optimasi performa.        |

---

## Deployment 🌐

- **Platform**: [Vercel](https://vercel.com/)
- Untuk deploy:
  ```bash
  vercel --prod
  ```

---

## Kontribusi 🤝

Kami menerima kontribusi dari siapa saja! Silakan lakukan langkah berikut untuk berkontribusi:

1. Buat branch baru.
   ```bash
   git checkout -b feature/your-feature
   ```
2. Commit perubahan.
   ```bash
   git commit -m "Add new feature"
   ```
3. Push branch.
   ```bash
   git push origin feature/your-feature
   ```
4. Buat pull request.

---

---

## Tim Proyek dan Pembagian Tugas 👥

### **Anggota Tim**
- **Wadiyan (22312085)**: Pengembangan Halaman Katalog dan Detail Produk.
- **Rexlicky Verdhika Sagatha (22312094)**: Pengembangan Halaman Home dan Keranjang Belanja.
- **Hafidz Ferzano Arfani (22312072)**: Pengembangan Halaman Checkout dan Admin Dashboard.

---

## Kontak 📧

Jika Anda memiliki pertanyaan atau saran, silakan hubungi kami melalui email di [support@adlv.com](mailto:support@adlv.com).

