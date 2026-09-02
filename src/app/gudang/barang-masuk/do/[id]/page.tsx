import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { hapusDoBarangMasuk } from "../actions";

type DoDetail = {
  id: string;
  tanggal: string;
  no_do: string | null;
  ekspedisi: string | null;
  supir: string | null;
  no_plat: string | null;
  no_container: string | null;
  keterangan: string | null;
};

type DoItemRow = {
  id: string;
  qty: number;
  satuan: string;
  items: { kode: string; nama: string } | null;
  locations: { lantai: string; area: string | null; rak: string | null } | null;
};

export default async function DetailDoBarangMasukPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: doData } = await supabase
    .from("barang_masuk_do")
    .select("id, tanggal, no_do, ekspedisi, supir, no_plat, no_container, keterangan")
    .eq("id", id)
    .single();

  if (!doData) notFound();
  const doDetail = doData as DoDetail;

  const { data: itemsData } = await supabase
    .from("barang_masuk_do_items")
    .select("id, qty, satuan, items(kode, nama), locations(lantai, area, rak)")
    .eq("do_id", id);

  const items = (itemsData as unknown as DoItemRow[]) ?? [];

  return (
    <div>
      <Link href="/gudang/barang-masuk/do" className="mb-4 inline-block text-sm text-blue-600 hover:underline">
        ← Kembali ke DO Barang Masuk
      </Link>

      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="mb-1 text-2xl font-semibold text-slate-800">
            DO {doDetail.no_do ?? "(tanpa nomor)"}
          </h1>
          <p className="text-sm text-slate-500">{new Date(doDetail.tanggal).toLocaleDateString("id-ID")}</p>
        </div>
        <form action={hapusDoBarangMasuk}>
          <input type="hidden" name="doId" value={doDetail.id} />
          <button
            type="submit"
            className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            Hapus DO Ini
          </button>
        </form>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4 rounded-xl border bg-white p-4 shadow-sm sm:grid-cols-3">
        <div>
          <p className="text-xs text-slate-500">Ekspedisi</p>
          <p className="text-sm font-medium">{doDetail.ekspedisi ?? "-"}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Supir</p>
          <p className="text-sm font-medium">{doDetail.supir ?? "-"}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">No Plat</p>
          <p className="text-sm font-medium">{doDetail.no_plat ?? "-"}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">No Container</p>
          <p className="text-sm font-medium">{doDetail.no_container ?? "-"}</p>
        </div>
        <div className="col-span-2 sm:col-span-3">
          <p className="text-xs text-slate-500">Keterangan</p>
          <p className="text-sm font-medium">{doDetail.keterangan ?? "-"}</p>
        </div>
      </div>

      <h2 className="mb-2 text-sm font-medium text-slate-700">Daftar Barang</h2>
      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Kode</th>
              <th className="px-4 py-3 font-medium">Nama Barang</th>
              <th className="px-4 py-3 font-medium">Qty</th>
              <th className="px-4 py-3 font-medium">Lokasi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-3">{item.items?.kode ?? "-"}</td>
                <td className="px-4 py-3">{item.items?.nama ?? "-"}</td>
                <td className="px-4 py-3 font-medium text-green-700">
                  +{item.qty} {item.satuan}
                </td>
                <td className="px-4 py-3">
                  {item.locations
                    ? `${item.locations.lantai}${item.locations.area ? ` / ${item.locations.area}` : ""}${item.locations.rak ? ` / ${item.locations.rak}` : ""}`
                    : "-"}
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center text-slate-400">
                  Tidak ada barang di DO ini.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}