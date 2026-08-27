# WMS Web (Gudang + Admin)

Web app Next.js (App Router + TypeScript + Tailwind) untuk modul **Gudang** (terima request, picking, stok) dan **Admin** (master data, laporan). Backend: Supabase — sama seperti app Android Cabang.

## Setup awal

1. Extract project ini, buka foldernya, install dependency:
   ```
   npm install
   ```
2. Copy `.env.local.example` jadi `.env.local`, isi dengan kredensial Supabase kakak (Project Settings → API):
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx
   ```
3. Jalankan:
   ```
   npm run dev
   ```
   Buka `http://localhost:3000` — otomatis diarahkan ke `/login`.

Ini pakai Supabase project **yang sama** dengan app Android (tabel `items`, `requests`, `users`, dst sudah ada dari sana), jadi begitu login di web pakai akun yang role-nya `gudang` atau `admin` di tabel `users`, datanya langsung nyambung.

## Struktur folder

```
src/
├── app/
│   ├── (auth)/login/page.tsx        # halaman login (URL tetap /login, folder (auth) cuma pengelompokan)
│   ├── gudang/
│   │   ├── layout.tsx               # sidebar + shell khusus Gudang
│   │   ├── dashboard/page.tsx
│   │   ├── request/page.tsx         # list request masuk
│   │   ├── request/[id]/page.tsx    # detail + picking per lantai
│   │   ├── stok/page.tsx
│   │   ├── barang-masuk/page.tsx
│   │   ├── barang-keluar/page.tsx   # modul DO customer (pengganti Excel)
│   │   ├── barang-keluar/tambah/page.tsx
│   │   └── laporan/page.tsx
│   ├── admin/
│   │   ├── layout.tsx               # sidebar + shell khusus Admin
│   │   ├── barang/page.tsx          # master barang + satuan
│   │   ├── lokasi/page.tsx
│   │   ├── cabang/page.tsx
│   │   ├── user/page.tsx
│   │   └── laporan/page.tsx
│   └── page.tsx                     # redirect ke /login
├── components/ui/
│   └── SidebarNav.tsx                # sidebar reusable, dipakai Gudang & Admin
└── lib/supabase/
    ├── client.ts                    # Supabase client untuk Client Component ("use client")
    └── server.ts                    # Supabase client untuk Server Component/Action
```

Semua halaman `page.tsx` saat ini **masih placeholder** (judul + teks singkat) — kerangka routing & layout-nya sudah jalan dan ke-build, tinggal diisi kontennya satu-satu.

## Cara nambah halaman baru

Contoh: mau isi halaman "Request Masuk" (`/gudang/request`):

1. Buka `src/app/gudang/request/page.tsx`.
2. Tambahkan `"use client"` di baris paling atas kalau butuh interaktivitas (state, event handler).
3. Import Supabase: `import { createClient } from "@/lib/supabase/client"`.
4. Query seperti biasa: `const { data } = await supabase.from("requests").select()`.

Halaman baru di luar yang sudah ada? Buat folder baru di bawah `app/gudang/` atau `app/admin/`, isi `page.tsx`, lalu tambahkan link-nya di `SidebarNav` (`app/gudang/layout.tsx` atau `app/admin/layout.tsx`).

## Konvensi

- Nama variabel/komentar dalam Bahasa Indonesia, konsisten dengan app Android.
- Query Supabase langsung di Server Component kalau datanya cuma dibaca sekali per halaman (lebih cepat, SEO-friendly). Pakai Client Component + `lib/supabase/client.ts` kalau butuh interaktif (form, realtime, filter tanpa reload).
- Sidebar di `components/ui/SidebarNav.tsx` dipakai bersama Gudang & Admin — cukup beda daftar menunya, jangan duplikat komponen.

## Status saat ini (scaffold)

Sudah bisa di-build (`npm run build` sukses, semua 15 route ke-generate). Yang masih perlu dikerjakan:

- [ ] Isi konten asli tiap halaman (list request, form barang masuk, dst) — nyambung ke tabel yang sama dengan app Android.
- [ ] Proteksi route: sekarang siapa pun bisa akses `/gudang/*` dan `/admin/*` tanpa dicek login/role dulu. Perlu middleware yang cek sesi + role dari tabel `users`.
- [ ] Cek role setelah login (`/login`) — sekarang selalu diarahkan ke `/gudang/dashboard`, harusnya baca role user dulu (gudang vs admin) baru redirect yang sesuai.
