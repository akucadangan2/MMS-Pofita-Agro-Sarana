import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

type DoRow = {
  id: string;
  tanggal: string;
  no_do: string | null;
  ekspedisi: string | null;
  supir: string | null;
  no_plat: string | null;
  barang_masuk_do_items: { qty: number }[];
};

export default async function ListDoBarangMasukPage({
  searchParams,
}: {
  searchParams: Promise<{ berhasil?: string; error?: string }>;
}) {
  const params = await searchParams;
  const berhasil = params.berhasil === "1";
  const pesanError = params.error;

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("barang_masuk_do")
    .select("id, tanggal, no_do, ekspedisi, supir, no_plat, barang_masuk_do_items(qty)")
    .order("tanggal", { ascending: false });

  const daftarDo = (data as unknown as DoRow[]) ?? [];

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-2xl font-semibold text-slate-800">DO Barang Masuk</h1>
          <p className="text-sm text-slate-500">Catat kedatangan barang lengkap dengan info pengiriman</p>
        </div>
        <Link href="/gudang/barang-masuk/do/tambah" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
          + Buat DO Baru
        </Link>
      </div>

      {berhasil && (
        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          ✓ DO berhasil disimpan.
        </div>
      )}
      {pesanError && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Gagal menyimpan: {pesanError}
        </div>
      )}
      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Tanggal</th>
              <th className="px-4 py-3 font-medium">No DO</th>
              <th className="px-4 py-3 font-medium">Ekspedisi</th>
              <th className="px-4 py-3 font-medium">Supir</th>
              <th className="px-4 py-3 font-medium">No Plat</th>
              <th className="px-4 py-3 font-medium">Jumlah Item</th>
            </tr>
          </thead>
          <tbody>
            {daftarDo.map((d) => (
              <tr key={d.id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-500">{new Date(d.tanggal).toLocaleDateString("id-ID")}</td>
                <td className="px-4 py-3 font-medium">{d.no_do ?? "-"}</td>
                <td className="px-4 py-3">{d.ekspedisi ?? "-"}</td>
                <td className="px-4 py-3">{d.supir ?? "-"}</td>
                <td className="px-4 py-3">{d.no_plat ?? "-"}</td>
                <td className="px-4 py-3">{d.barang_masuk_do_items.length} jenis barang</td>
              </tr>
            ))}
            {daftarDo.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-slate-400">
                  Belum ada DO tercatat.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}