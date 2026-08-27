import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { tambahCabang, hapusCabang } from "./actions";

type BranchRow = { id: string; nama: string; alamat: string | null };

export default async function MasterCabangPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("branches")
    .select("id, nama, alamat")
    .order("nama");

  const cabang = (data as BranchRow[]) ?? [];

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-slate-800">Master Cabang</h1>

      <form action={tambahCabang} className="mb-6 flex flex-wrap items-end gap-3 rounded-lg border bg-white p-4">
        <div>
          <label className="mb-1 block text-xs text-slate-500">Nama Cabang</label>
          <input name="nama" required className="rounded border px-3 py-2 text-sm" />
        </div>
        <div className="flex-1">
          <label className="mb-1 block text-xs text-slate-500">Alamat</label>
          <input name="alamat" className="w-full rounded border px-3 py-2 text-sm" />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          + Tambah Cabang
        </button>
      </form>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-2">Nama Cabang</th>
              <th className="px-4 py-2">Alamat</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {cabang.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="px-4 py-2">{c.nama}</td>
                <td className="px-4 py-2">{c.alamat ?? "-"}</td>
                <td className="px-4 py-2 space-x-2">
                  <Link href={`/admin/cabang/${c.id}/edit`} className="text-xs text-blue-600 hover:underline">
                    Edit
                  </Link>
                  <form action={hapusCabang} className="inline">
                    <input type="hidden" name="id" value={c.id} />
                    <button type="submit" className="text-xs text-red-600 hover:underline">
                      Hapus
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {cabang.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-slate-400">
                  Belum ada cabang.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}