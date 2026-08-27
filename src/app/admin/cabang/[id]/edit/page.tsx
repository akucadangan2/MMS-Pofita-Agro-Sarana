import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { updateCabang } from "../../actions";

type Cabang = { id: string; nama: string; alamat: string | null };

export default async function EditCabangPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data } = await supabase
    .from("branches")
    .select("id, nama, alamat")
    .eq("id", id)
    .single();

  if (!data) notFound();
  const cabang = data as Cabang;

  return (
    <div>
      <Link href="/admin/cabang" className="mb-4 inline-block text-sm text-blue-600 hover:underline">
        ← Kembali ke Master Cabang
      </Link>
      <h1 className="mb-4 text-2xl font-semibold text-slate-800">Edit Cabang</h1>

      <form action={updateCabang} className="max-w-md space-y-3 rounded-lg border bg-white p-6">
        <input type="hidden" name="id" value={cabang.id} />
        <div>
          <label className="mb-1 block text-xs text-slate-500">Nama Cabang</label>
          <input name="nama" defaultValue={cabang.nama} required className="w-full rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Alamat</label>
          <input name="alamat" defaultValue={cabang.alamat ?? ""} className="w-full rounded border px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}