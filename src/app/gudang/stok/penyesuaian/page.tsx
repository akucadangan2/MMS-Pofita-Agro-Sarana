import { createClient } from "@/lib/supabase/server";
import { simpanPenyesuaianStok } from "./actions";

type Barang = { id: string; kode: string; nama: string; satuan_dasar: string };
type Lokasi = { id: string; lantai: string; area: string | null; rak: string | null };

type RiwayatRow = {
  id: string;
  qty_sistem: number;
  qty_fisik: number;
  selisih: number;
  alasan: string | null;
  dibuat_at: string;
  items: { kode: string; nama: string } | null;
  locations: { lantai: string } | null;
};

export default async function PenyesuaianStokPage({
  searchParams,
}: {
  searchParams: Promise<{ berhasil?: string }>;
}) {
  const params = await searchParams;
  const berhasil = params.berhasil === "1";

  const supabase = await createClient();

  const { data: itemsData } = await supabase.from("items").select("id, kode, nama, satuan_dasar").eq("nonaktif", false).order("nama");
  const daftarBarang = (itemsData as Barang[]) ?? [];

  const { data: locationsData } = await supabase.from("locations").select("id, lantai, area, rak").order("lantai");
  const daftarLokasi = (locationsData as Lokasi[]) ?? [];

  const { data: riwayatData } = await supabase
    .from("penyesuaian_stok")
    .select("id, qty_sistem, qty_fisik, selisih, alasan, dibuat_at, items(kode, nama), locations(lantai)")
    .order("dibuat_at", { ascending: false })
    .limit(50);
  const riwayat = (riwayatData as unknown as RiwayatRow[]) ?? [];

  return (
    <div>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Penyesuaian Stok</h1>
      <p className="mb-6 text-sm text-slate-500">Koreksi stok sistem sesuai hasil hitung fisik (stock opname)</p>

      {berhasil && (
        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          ✓ Penyesuaian stok berhasil disimpan.
        </div>
      )}

      <datalist id="daftar-barang-opname">
        {daftarBarang.map((b) => (
          <option key={b.id} value={`${b.kode} - ${b.nama}`} />
        ))}
      </datalist>

      <form action={simpanPenyesuaianStok} className="mb-8 max-w-lg space-y-3 rounded-xl border bg-white p-4 shadow-sm">
        <div>
          <label className="mb-1 block text-xs text-slate-500">Barang</label>
          <input list="daftar-barang-opname" placeholder="Ketik kode atau nama barang..." className="w-full rounded-lg border px-3 py-2 text-sm" id="input-cari-barang" />
          <input type="hidden" name="itemId" id="input-item-id" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Lokasi</label>
          <select name="locationId" required className="w-full rounded-lg border px-3 py-2 text-sm">
            <option value="">Pilih lokasi...</option>
            {daftarLokasi.map((l) => (
              <option key={l.id} value={l.id}>
                {l.lantai}
                {l.area ? ` / ${l.area}` : ""}
                {l.rak ? ` / ${l.rak}` : ""}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Qty Hasil Hitung Fisik</label>
          <input type="number" name="qtyFisik" min={0} required className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Alasan / Catatan (opsional)</label>
          <input type="text" name="alasan" placeholder="Contoh: Ada barang rusak, hasil hitung ulang gudang" className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Simpan Penyesuaian
        </button>
      </form>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.getElementById('input-cari-barang').addEventListener('change', function(e) {
              var opsi = ${JSON.stringify(daftarBarang)};
              var cocok = opsi.find(function(b) { return (b.kode + ' - ' + b.nama) === e.target.value; });
              document.getElementById('input-item-id').value = cocok ? cocok.id : '';
            });
          `,
        }}
      />

      <h2 className="mb-2 text-sm font-medium text-slate-700">Riwayat Penyesuaian (50 Terakhir)</h2>
      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Tanggal</th>
              <th className="px-4 py-3 font-medium">Barang</th>
              <th className="px-4 py-3 font-medium">Lokasi</th>
              <th className="px-4 py-3 font-medium">Sistem</th>
              <th className="px-4 py-3 font-medium">Fisik</th>
              <th className="px-4 py-3 font-medium">Selisih</th>
              <th className="px-4 py-3 font-medium">Alasan</th>
            </tr>
          </thead>
          <tbody>
            {riwayat.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="px-4 py-3 text-slate-500">{new Date(r.dibuat_at).toLocaleString("id-ID")}</td>
                <td className="px-4 py-3">{r.items?.nama ?? "-"}</td>
                <td className="px-4 py-3">{r.locations?.lantai ?? "-"}</td>
                <td className="px-4 py-3">{r.qty_sistem}</td>
                <td className="px-4 py-3">{r.qty_fisik}</td>
                <td className={`px-4 py-3 font-medium ${r.selisih < 0 ? "text-red-600" : r.selisih > 0 ? "text-green-600" : "text-slate-400"}`}>
                  {r.selisih > 0 ? "+" : ""}
                  {r.selisih}
                </td>
                <td className="px-4 py-3 text-slate-500">{r.alasan ?? "-"}</td>
              </tr>
            ))}
            {riwayat.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-slate-400">
                  Belum ada penyesuaian stok.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}