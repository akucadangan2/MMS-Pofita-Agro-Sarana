import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { tambahLokasiBarang, hapusLokasiBarang } from "./actions";

type Barang = { id: string; kode: string; nama: string };
type LokasiRow = {
  location_id: string;
  locations: { lantai: string; area: string | null; rak: string | null; bin: string | null } | null;
};
type Lokasi = { id: string; lantai: string; area: string | null; rak: string | null; bin: string | null };

export default async function LokasiBarangPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: barang } = await supabase.from("items").select("id, kode, nama").eq("id", id).single();
  if (!barang) notFound();
  const item = barang as Barang;

  const { data: lokasiData, error } = await supabase
    .from("item_locations")
    .select("location_id, locations(lantai, area, rak, bin)")
    .eq("item_id", id);

  const lokasiTerpasang = (lokasiData as unknown as LokasiRow[]) ?? [];

  const { data: semuaLokasiData } = await supabase
    .from("locations")
    .select("id, lantai, area, rak, bin")
    .order("lantai");
  const semuaLokasi = (semuaLokasiData as Lokasi[]) ?? [];

  const idTerpasang = new Set(lokasiTerpasang.map((l) => l.location_id));
  const lokasiBelumTerpasang = semuaLokasi.filter((l) => !idTerpasang.has(l.id));

  return (
    <div>
      <Link href="/gudang/barang" className="mb-4 inline-block text-sm text-blue-600 hover:underline">
        ← Kembali ke Barang
      </Link>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Lokasi: {item.nama}</h1>
      <p className="mb-6 text-sm text-slate-500">{item.kode}</p>

      <form action={tambahLokasiBarang} className="mb-6 flex flex-wrap items-end gap-3 rounded-xl border bg-white p-4 shadow-sm">
        <input type="hidden" name="itemId" value={id} />
        <div>
          <label className="mb-1 block text-xs text-slate-500">Tambah Lokasi</label>
          <select name="locationId" required className="rounded-lg border px-3 py-2 text-sm">
            <option value="">Pilih lokasi...</option>
            {lokasiBelumTerpasang.map((l) => (
              <option key={l.id} value={l.id}>
                {l.lantai}
                {l.area ? ` / ${l.area}` : ""}
                {l.rak ? ` / ${l.rak}` : ""}
                {l.bin ? ` / ${l.bin}` : ""}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          + Tambahkan
        </button>
      </form>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Lantai</th>
              <th className="px-4 py-3 font-medium">Area</th>
              <th className="px-4 py-3 font-medium">Rak</th>
              <th className="px-4 py-3 font-medium">Bin</th>
              <th className="px-4 py-3 font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {lokasiTerpasang.map((l) => (
              <tr key={l.location_id} className="border-t">
                <td className="px-4 py-3">{l.locations?.lantai ?? "-"}</td>
                <td className="px-4 py-3">{l.locations?.area ?? "-"}</td>
                <td className="px-4 py-3">{l.locations?.rak ?? "-"}</td>
                <td className="px-4 py-3">{l.locations?.bin ?? "-"}</td>
                <td className="px-4 py-3">
                  <form action={hapusLokasiBarang}>
                    <input type="hidden" name="itemId" value={id} />
                    <input type="hidden" name="locationId" value={l.location_id} />
                    <button type="submit" className="text-xs text-red-600 hover:underline">
                      Hapus
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {lokasiTerpasang.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-slate-400">
                  Barang ini belum ditempatkan di lokasi manapun — bakal masuk grup &quot;Tanpa Lokasi&quot; saat picking.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}