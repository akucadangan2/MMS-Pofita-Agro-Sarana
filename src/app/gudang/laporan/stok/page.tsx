import { createClient } from "@/lib/supabase/server";

type StockRow = {
  id: string;
  qty: number;
  items: { kode: string; nama: string; kategori: string | null; merek: string | null; satuan_dasar: string } | null;
};

export default async function LaporanStokPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string; merek?: string }>;
}) {
  const params = await searchParams;
  const kategoriFilter = params.kategori ?? "";
  const merekFilter = params.merek ?? "";

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("stock")
    .select("id, qty, items!inner(kode, nama, kategori, merek, satuan_dasar)")
    .order("qty", { ascending: false });

  const semuaStok = (data as unknown as StockRow[]) ?? [];

  const daftarKategori = Array.from(
    new Set(semuaStok.map((s) => s.items?.kategori).filter((k): k is string => !!k))
  ).sort();
  const daftarMerek = Array.from(
    new Set(semuaStok.map((s) => s.items?.merek).filter((m): m is string => !!m))
  ).sort();

  const stok = semuaStok.filter((s) => {
    if (kategoriFilter && s.items?.kategori !== kategoriFilter) return false;
    if (merekFilter && s.items?.merek !== merekFilter) return false;
    return true;
  });

  const totalQty = stok.reduce((sum, s) => sum + s.qty, 0);
  const totalJenis = stok.length;

  const linkExportCsv =
    "/api/export/laporan-stok?kategori=" + encodeURIComponent(kategoriFilter) + "&merek=" + encodeURIComponent(merekFilter);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-slate-800">Laporan Stok</h1>

      <form method="GET" className="mb-6 flex flex-wrap items-end gap-3 rounded-lg border bg-white p-4">
        <div>
          <label className="mb-1 block text-xs text-slate-500">Kategori</label>
          <select name="kategori" defaultValue={kategoriFilter} className="rounded border px-3 py-2 text-sm">
            <option value="">Semua Kategori</option>
            {daftarKategori.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Merek</label>
          <select name="merek" defaultValue={merekFilter} className="rounded border px-3 py-2 text-sm">
            <option value="">Semua Merek</option>
            {daftarMerek.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Terapkan
        </button>
        <a href={linkExportCsv} className="rounded border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
          ⬇ Export CSV
        </a>
      </form>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-blue-50 p-4 text-blue-700">
          <p className="text-2xl font-bold">{totalJenis}</p>
          <p className="text-xs">Total Jenis Barang</p>
        </div>
        <div className="rounded-lg border bg-blue-50 p-4 text-blue-700">
          <p className="text-2xl font-bold">{totalQty}</p>
          <p className="text-xs">Total Qty</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-2">Kode</th>
              <th className="px-4 py-2">Nama Barang</th>
              <th className="px-4 py-2">Kategori</th>
              <th className="px-4 py-2">Merek</th>
              <th className="px-4 py-2">Qty</th>
            </tr>
          </thead>
          <tbody>
            {stok.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="px-4 py-2">{s.items?.kode ?? "-"}</td>
                <td className="px-4 py-2">{s.items?.nama ?? "-"}</td>
                <td className="px-4 py-2">{s.items?.kategori ?? "-"}</td>
                <td className="px-4 py-2">{s.items?.merek ?? "-"}</td>
                <td className="px-4 py-2">
                  {s.qty} {s.items?.satuan_dasar ?? ""}
                </td>
              </tr>
            ))}
            {stok.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-slate-400">
                  Tidak ada data yang cocok.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}