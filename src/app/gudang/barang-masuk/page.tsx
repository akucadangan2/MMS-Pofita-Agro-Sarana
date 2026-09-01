import { createClient } from "@/lib/supabase/server";
import { catatBarangMasuk } from "./actions";
import { Pagination } from "@/components/ui/Pagination";
import { PageSizeSelector } from "@/components/ui/PageSizeSelector";
import { hapusBarangMasuk } from "./actions";

type Barang = { id: string; kode: string; nama: string };
type Lokasi = { id: string; lantai: string; area: string | null; rak: string | null };
type MovementRow = {
  id: string;
  item_id: string;
  location_id: string | null;
  qty: number;
  satuan: string;
  created_at: string;
  items: { kode: string; nama: string } | null;
};

export default async function BarangMasukPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; halaman?: string; ukuran?: string }>;
}) {
  const params = await searchParams;
  const q = params.q ?? "";
  const ukuran = params.ukuran ?? "20";
  const halaman = Math.max(1, Number(params.halaman) || 1);
  const pageSize = ukuran === "all" ? null : Number(ukuran) || 20;

  const supabase = await createClient();

  const { data: itemsData } = await supabase.from("items").select("id, kode, nama").order("nama");
  const daftarBarang = (itemsData as Barang[]) ?? [];

  const { data: locationsData } = await supabase
    .from("locations")
    .select("id, lantai, area, rak")
    .order("lantai");
  const daftarLokasi = (locationsData as Lokasi[]) ?? [];

  let query = supabase
    .from("stock_movements")
    .select("id, item_id, location_id, qty, satuan, created_at, items!inner(kode, nama)", { count: "exact" })
    .eq("tipe", "masuk")
    .order("created_at", { ascending: false });

  if (q) query = query.or(`kode.ilike.%${q}%,nama.ilike.%${q}%`, { foreignTable: "items" });
  if (pageSize) {
    const dari = (halaman - 1) * pageSize;
    query = query.range(dari, dari + pageSize - 1);
  }

  const { data: movementsData, count, error } = await query;
  const movements = (movementsData as unknown as MovementRow[]) ?? [];
  const totalHalaman = pageSize ? Math.max(1, Math.ceil((count ?? 0) / pageSize)) : 1;

  return (
    <div>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Barang Masuk</h1>
      <p className="mb-4 text-sm text-slate-500">Catat kedatangan/restock barang ke gudang</p>

      <form
        action={catatBarangMasuk}
        className="mb-6 flex flex-wrap items-end gap-3 rounded-xl border bg-white p-4 shadow-sm"
      >
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">Barang</label>
          <select name="itemId" required className="rounded-lg border px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100">
            <option value="">Pilih barang...</option>
            {daftarBarang.map((b) => (
              <option key={b.id} value={b.id}>
                {b.kode} - {b.nama}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">Lokasi</label>
          <select name="locationId" required className="rounded-lg border px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100">
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
          <label className="mb-1 block text-xs font-medium text-slate-500">Qty</label>
          <input type="number" name="qty" required min={1} className="w-28 rounded-lg border px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100" />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
        >
          + Catat Barang Masuk
        </button>
      </form>

      <div className="mb-4 flex items-center gap-3">
        <form method="GET" className="flex-1">
          <input type="hidden" name="ukuran" value={ukuran} />
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Cari kode atau nama barang..."
            className="w-full max-w-sm rounded-lg border px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </form>
        <PageSizeSelector ukuran={ukuran} />
      </div>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-left text-slate-500">
          <tr>
            <th className="px-4 py-3 font-medium">Tanggal</th>
            <th className="px-4 py-3 font-medium">Kode</th>
            <th className="px-4 py-3 font-medium">Nama Barang</th>
            <th className="px-4 py-3 font-medium">Qty Masuk</th>
            <th className="px-4 py-3 font-medium">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((m) => (
            <tr key={m.id} className="border-t hover:bg-slate-50">
              <td className="px-4 py-3 text-slate-500">{new Date(m.created_at).toLocaleString("id-ID")}</td>
              <td className="px-4 py-3">{m.items?.kode ?? "-"}</td>
              <td className="px-4 py-3">{m.items?.nama ?? "-"}</td>
              <td className="px-4 py-3 font-medium text-green-700">
                +{m.qty} {m.satuan}
              </td>
              <td className="px-4 py-3 space-x-2">
                <a href={`/gudang/barang-masuk/${m.id}/edit`} className="text-xs text-blue-600 hover:underline">
                  Edit
                </a>
                <form action={hapusBarangMasuk} className="inline">
                  <input type="hidden" name="movementId" value={m.id} />
                  <input type="hidden" name="itemId" value={m.item_id} />
                  <input type="hidden" name="locationId" value={m.location_id ?? ""} />
                  <input type="hidden" name="qty" value={m.qty} />
                  <button type="submit" className="text-xs text-red-600 hover:underline">
                    Hapus
                  </button>
                </form>
              </td>
            </tr>
          ))}
          {movements.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-10 text-center text-slate-400">
                {q ? "Tidak ada hasil yang cocok." : "Belum ada catatan barang masuk."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>

      {pageSize && (
        <Pagination halamanSekarang={halaman} totalHalaman={totalHalaman} q={q} ukuran={ukuran} basePath="/gudang/barang-masuk" />
      )}
    </div>
  );
}