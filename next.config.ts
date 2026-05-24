import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 
     Mengubah output menjadi 'export' agar Next.js menghasilkan file HTML statis.
     Hasil build akan berada di folder 'out' dan bisa di-hosting tanpa Node.js (misal: di cPanel/PHP Project).
  */
  output: 'export',

  /* 
     Menambahkan '/' di akhir URL (contoh: /about menjadi /about/).
     Ini akan membuat struktur folder 'about/index.html' yang lebih kompatibel 
     dengan server Nginx/Apache untuk menghindari error 403/404.
  */
  trailingSlash: true,

  /* Opsi konfigurasi tambahan bisa ditambahkan di bawah ini */
};

export default nextConfig;
