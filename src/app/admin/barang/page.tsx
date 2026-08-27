import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { tambahBarang, hapusBarang } from "./actions";
import { Pagination } from "@/components/ui/Pagination";
import { PageSizeSelector } from "@/components/ui/PageSizeSelector";

type ItemRow = {
  id: string;
  kode: string;
  nama: string;
  kategori: string | null;
  satuan_dasar: string;
};

type StockRow = { item_id: string; qty: number };

export default async function MasterBarangPage({
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

  let query = supabase
    .from("items")
    .select("id, kode, nama, kategori, satuan_dasar", { count: "exact" })
    .order("kode");

  if (q) query = query.or(`kode.ilike.%${q}%,nama.ilike.%${q}%`);
  if (pageSize) {
    const dari = (halaman - 1) * pageSize;
    query = query.range(dari, dari + pageSize - 1);
  }

  const { data: itemsData, count, error } = await query;
  const items = (itemsData as ItemRow[]) ?? [];
  const totalHalaman = pageSize ? Math.max(1, Math.ceil((count ?? 0) / pageSize)) : 1;

  const { data: stockData } = await supabase.from("stock").select("item_id, qty");
  const stockRows = (stockData as StockRow[]) ?? [];

  const stokPerItem = new Map<string, number>();
  for (const s of stockRows) {
    stokPerItem.set(s.item_id, (stokPerItem.get(s.item_id) ?? 0) + s.qty);
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-slate-800">Master Barang</h1>

      <form action={tambahBarang} className="mb-6 flex flex-wrap items-end gap-3 rounded-lg border bg-white p-4">
        <div>
          <label className="mb-1 block text-xs text-slate-500">Kode</label>
          <input name="kode" required className="rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Nama Barang</label>
          <input name="nama" required className="rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Kategori</label>
          <input name="kategori" className="rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Satuan Dasar</label>
          <input name="satuanDasar" required placeholder="PCS" className="w-24 rounded border px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          + Tambah Barang
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

      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-2">Kode</th>
              <th className="px-4 py-2">Nama Barang</th>
              <th className="px-4 py-2">Kategori</th>
              <th className="px-4 py-2">Satuan</th>
              <th className="px-4 py-2">Stok Total</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">{item.kode}</td>
                <td className="px-4 py-2">{item.nama}</td>
                <td className="px-4 py-2">{item.kategori ?? "-"}</td>
                <td className="px-4 py-2">{item.satuan_dasar}</td>
                <td className="px-4 py-2">{stokPerItem.get(item.id) ?? 0}</td>
                <td className="px-4 py-2 space-x-2">
                  <Link href={`/admin/barang/${item.id}/edit`} className="text-xs text-blue-600 hover:underline">
                    Edit
                  </Link>
                  <Link href={`/admin/barang/${item.id}/satuan`} className="text-xs text-blue-600 hover:underline">
                    Satuan
                  </Link>
                  <form action={hapusBarang} className="inline">
                    <input type="hidden" name="id" value={item.id} />
                    <button type="submit" className="text-xs text-red-600 hover:underline">
                      Hapus
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-400">
                  {q ? "Tidak ada hasil yang cocok." : "Belum ada barang."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {pageSize && (
        <Pagination halamanSekarang={halaman} totalHalaman={totalHalaman} q={q} ukuran={ukuran} basePath="/admin/barang" />
      )}
    </div>
  );
}