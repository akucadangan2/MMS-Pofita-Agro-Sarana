export default function KebijakanPrivasiPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-slate-800">
      <h1 className="mb-2 text-3xl font-bold">Kebijakan Privasi</h1>
      <p className="mb-8 text-sm text-slate-500">Terakhir diperbarui: 1 September 2026</p>

      <div className="space-y-6 text-sm leading-relaxed">
        <p>
          Kebijakan Privasi ini berlaku untuk aplikasi PAS (&quot;Aplikasi&quot;) yang dikembangkan dan
          dioperasikan oleh PT RHG Teknologi Indonesia untuk CV Profita Agro Sarana. Aplikasi ini
          digunakan secara internal oleh staf cabang CV Profita Agro Sarana untuk mengajukan
          permintaan barang ke gudang pusat.
        </p>

        <section>
          <h2 className="mb-2 text-lg font-semibold">1. Informasi yang Kami Kumpulkan</h2>
          <p className="mb-2">Aplikasi ini mengumpulkan dan menyimpan informasi berikut:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Nama pengguna dan alamat email yang digunakan untuk login</li>
            <li>Cabang tempat pengguna bertugas</li>
            <li>Data permintaan barang yang diajukan (nama barang, jumlah, satuan, waktu pengajuan)</li>
            <li>Token perangkat untuk keperluan pengiriman notifikasi push</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">2. Izin Kamera</h2>
          <p>
            Aplikasi ini meminta izin akses kamera untuk fitur pemindaian barcode/QR barang.
            Kamera hanya digunakan saat pengguna secara aktif membuka fitur pemindaian, dan gambar
            dari kamera tidak disimpan maupun dikirim ke server mana pun — kamera hanya digunakan
            untuk membaca kode barang secara langsung di perangkat.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">3. Penggunaan Informasi</h2>
          <p>Informasi yang dikumpulkan digunakan semata-mata untuk:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Memproses dan melacak permintaan barang antara cabang dan gudang</li>
            <li>Mengirimkan notifikasi terkait status permintaan barang</li>
            <li>Keperluan operasional dan pelaporan internal perusahaan</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">4. Penyimpanan Data</h2>
          <p>
            Seluruh data disimpan secara aman menggunakan layanan cloud database pihak ketiga
            (Supabase) dan tidak dibagikan, dijual, atau disewakan kepada pihak luar untuk tujuan
            pemasaran atau komersial apa pun.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">5. Akses Aplikasi</h2>
          <p>
            Aplikasi ini hanya dapat digunakan oleh staf cabang CV Profita Agro Sarana yang telah
            memiliki akun resmi yang diberikan oleh perusahaan. Aplikasi ini tidak ditujukan untuk
            digunakan oleh masyarakat umum.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">6. Keamanan</h2>
          <p>
            Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data dari akses,
            perubahan, atau penghapusan yang tidak sah. Namun demikian, tidak ada metode transmisi
            atau penyimpanan data melalui internet yang sepenuhnya aman.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">7. Perubahan Kebijakan</h2>
          <p>
            Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu. Perubahan akan diinformasikan
            melalui pembaruan tanggal di halaman ini.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">8. Kontak</h2>
          <p>
            Jika ada pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi kami melalui:
          </p>
          <p className="mt-1">
            CV PROFITA AGRO SARANA
            <br />
            Email: info@profitaagrosarana.id
          </p>
        </section>
      </div>
    </div>
  );
}