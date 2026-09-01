export default function HapusAkunPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-slate-800">
      <h1 className="mb-2 text-3xl font-bold">Hapus Akun & Data</h1>
      <p className="mb-8 text-sm text-slate-500">Terakhir diperbarui: 1 September 2026</p>

      <div className="space-y-6 text-sm leading-relaxed">
        <p>
          Halaman ini menjelaskan cara mengajukan penghapusan akun dan data pribadi Anda dari
          aplikasi PAS, yang dioperasikan oleh PT RHG Teknologi Indonesia untuk CV Profita Agro
          Sarana.
        </p>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Tentang Akun Aplikasi Ini</h2>
          <p>
            Akun pada aplikasi PAS dibuat dan dikelola oleh administrator CV Profita Agro Sarana,
            bukan melalui pendaftaran mandiri oleh pengguna. Oleh karena itu, permintaan
            penghapusan akun perlu diajukan melalui administrator perusahaan.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Cara Mengajukan Penghapusan Akun</h2>
          <p className="mb-2">
            Untuk mengajukan penghapusan akun dan seluruh data terkait, silakan hubungi kami melalui:
          </p>
          <p>
            Email: info@rhgteknologiindonesia.id
            <br />
            Subjek email: Permintaan Hapus Akun PAS
          </p>
          <p className="mt-2">
            Sertakan nama lengkap, email akun, dan nama cabang tempat Anda bertugas pada email
            tersebut agar permintaan dapat kami proses dengan tepat.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Data yang Akan Dihapus</h2>
          <p className="mb-2">Setelah permintaan diverifikasi, kami akan menghapus:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Akun login (nama, email, kata sandi)</li>
            <li>Token perangkat yang digunakan untuk notifikasi push</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Data yang Tetap Disimpan</h2>
          <p className="mb-2">
            Sebagian data tidak dapat dihapus sepenuhnya karena berkaitan dengan riwayat transaksi
            dan kebutuhan pencatatan operasional perusahaan, yaitu:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Riwayat permintaan barang yang pernah diajukan (nama barang, jumlah, waktu
              pengajuan) — data ini tetap disimpan untuk keperluan audit dan laporan stok gudang,
              namun tidak lagi terhubung dengan informasi pribadi yang dapat mengidentifikasi Anda
              secara langsung setelah akun dihapus
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Waktu Pemrosesan</h2>
          <p>
            Permintaan penghapusan akun akan diproses dalam waktu maksimal 14 hari kerja sejak
            permintaan diterima dan diverifikasi.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Kontak</h2>
          <p>
            PT RHG Teknologi Indonesia
            <br />
            Email: info@rhgteknologiindonesia.id
          </p>
        </section>
      </div>
    </div>
  );
}