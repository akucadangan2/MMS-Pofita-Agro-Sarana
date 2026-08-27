import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { tambahSatuan, hapusSatuan } from "./actions";

type Barang = { id: string; kode: string; nama: string; satuan_dasar: string };
type SatuanRow = { id: string; nama_satuan: string; faktor_konversi: number };

export default async function SatuanBarangPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: barang } = await supabase
    .from("items")
    .select("id, kode, nama, satuan_dasar")
    .eq("id", id)
    .single();

  if (!barang) notFound();
  const item = barang as Barang;

  const { data: satuanData, error } = await supabase
    .from("item_units")
    .select("id, nama_satuan, faktor_konversi")
    .eq("item_id", id)
    .order("faktor_konversi");

  const satuan = (satuanData as SatuanRow[]) ?? [];

  return (
    <div>
      <Link href="/admin/barang" className="mb-4 inline-block text-sm text-blue-600 hover:underline">
        ← Kembali ke Master Barang
      </Link>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Satuan: {item.nama}</h1>
      <p className="mb-6 text-sm text-slate-500">
        {item.kode} • Satuan dasar: {item.satuan_dasar}
      </p>

      <form action={tambahSatuan} className="mb-6 flex flex-wrap items-end gap-3 rounded-lg border bg-white p-4">
        <input type="hidden" name="itemId" value={id} />
        <div>
          <label className="mb-1 block text-xs text-slate-500">Nama Satuan</label>
          <input name="namaSatuan" required placeholder="BOX" className="w-32 rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">1 satuan ini = berapa {item.satuan_dasar}?</label>
          <input type="number" name="faktorKonversi" required min={0.01} step="any" className="w-32 rounded border px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          + Tambah Satuan
        </button>
      </form>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-2">Nama Satuan</th>
              <th className="px-4 py-2">Konversi ke {item.satuan_dasar}</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {satuan.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="px-4 py-2">{s.nama_satuan}</td>
                <td className="px-4 py-2">
                  1 {s.nama_satuan} = {s.faktor_konversi} {item.satuan_dasar}
                </td>
                <td className="px-4 py-2">
                  <form action={hapusSatuan}>
                    <input type="hidden" name="id" value={s.id} />
                    <input type="hidden" name="itemId" value={id} />
                    <button type="submit" className="text-xs text-red-600 hover:underline">
                      Hapus
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {satuan.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-slate-400">
                  Belum ada satuan tambahan, cuma pakai {item.satuan_dasar}.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}