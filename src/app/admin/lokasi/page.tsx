import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { tambahLokasi, hapusLokasi } from "./actions";

type LocationRow = {
  id: string;
  lantai: string;
  area: string | null;
  rak: string | null;
  bin: string | null;
  keterangan: string | null;
};

export default async function MasterLokasiPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("locations")
    .select("id, lantai, area, rak, bin, keterangan")
    .order("lantai");

  const lokasi = (data as LocationRow[]) ?? [];

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-slate-800">Master Lokasi</h1>

      <form action={tambahLokasi} className="mb-6 flex flex-wrap items-end gap-3 rounded-lg border bg-white p-4">
        <div>
          <label className="mb-1 block text-xs text-slate-500">Lantai</label>
          <input name="lantai" required placeholder="Lantai 1" className="rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Area</label>
          <input name="area" placeholder="A01" className="w-24 rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Rak</label>
          <input name="rak" placeholder="A01-01" className="w-28 rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Bin</label>
          <input name="bin" placeholder="A01-01-01" className="w-28 rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Keterangan</label>
          <input name="keterangan" placeholder="Area Bearing" className="rounded border px-3 py-2 text-sm" />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          + Tambah Lokasi
        </button>
      </form>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-2">Lantai</th>
              <th className="px-4 py-2">Area</th>
              <th className="px-4 py-2">Rak</th>
              <th className="px-4 py-2">Bin</th>
              <th className="px-4 py-2">Keterangan</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {lokasi.map((l) => (
              <tr key={l.id} className="border-t">
                <td className="px-4 py-2">{l.lantai}</td>
                <td className="px-4 py-2">{l.area ?? "-"}</td>
                <td className="px-4 py-2">{l.rak ?? "-"}</td>
                <td className="px-4 py-2">{l.bin ?? "-"}</td>
                <td className="px-4 py-2">{l.keterangan ?? "-"}</td>
                <td className="px-4 py-2 space-x-2">
                  <Link href={`/admin/lokasi/${l.id}/edit`} className="text-xs text-blue-600 hover:underline">
                    Edit
                  </Link>
                  <form action={hapusLokasi} className="inline">
                    <input type="hidden" name="id" value={l.id} />
                    <button type="submit" className="text-xs text-red-600 hover:underline">
                      Hapus
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {lokasi.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-400">
                  Belum ada lokasi.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}