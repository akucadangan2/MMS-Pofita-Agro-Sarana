import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { tambahBarang, hapusBarang } from "./actions";

type ItemRow = {
  id: string;
  kode: string;
  nama: string;
  kategori: string | null;
  satuan_dasar: string;
};

type StockRow = { item_id: string; qty: number };

export default async function BarangGudangPage() {
  const supabase = await createClient();

  const { data: itemsData, error } = await supabase
    .from("items")
    .select("id, kode, nama, kategori, satuan_dasar")
    .order("kode");

  const items = (itemsData as ItemRow[]) ?? [];

  const { data: stockData } = await supabase.from("stock").select("item_id, qty");
  const stockRows = (stockData as StockRow[]) ?? [];

  const stokPerItem = new Map<string, number>();
  for (const s of stockRows) {
    stokPerItem.set(s.item_id, (stokPerItem.get(s.item_id) ?? 0) + s.qty);
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-slate-800">Barang</h1>

      <form action={tambahBarang} className="mb-6 flex flex-wrap items-end gap-3 rounded-xl border bg-white p-4 shadow-sm">
        <div>
          <label className="mb-1 block text-xs text-slate-500">Kode</label>
          <input name="kode" required className="rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Nama Barang</label>
          <input name="nama" required className="rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Kategori</label>
          <input name="kategori" className="rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Satuan Dasar</label>
          <input name="satuanDasar" required placeholder="PCS" className="w-24 rounded-lg border px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
          + Tambah Barang
        </button>
      </form>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Kode</th>
              <th className="px-4 py-3 font-medium">Nama Barang</th>
              <th className="px-4 py-3 font-medium">Kategori</th>
              <th className="px-4 py-3 font-medium">Satuan</th>
              <th className="px-4 py-3 font-medium">Stok Total</th>
              <th className="px-4 py-3 font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3">{item.kode}</td>
                <td className="px-4 py-3">{item.nama}</td>
                <td className="px-4 py-3">{item.kategori ?? "-"}</td>
                <td className="px-4 py-3">{item.satuan_dasar}</td>
                <td className="px-4 py-3">{stokPerItem.get(item.id) ?? 0}</td>
                <td className="px-4 py-3 space-x-2">
                  <Link href={`/gudang/barang/${item.id}/edit`} className="text-xs text-blue-600 hover:underline">
                    Edit
                  </Link>
                  <Link href={`/gudang/barang/${item.id}/satuan`} className="text-xs text-blue-600 hover:underline">
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
                <td colSpan={6} className="px-4 py-10 text-center text-slate-400">
                  Belum ada barang.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}