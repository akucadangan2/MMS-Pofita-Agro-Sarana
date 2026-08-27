import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { updateLokasi } from "../../actions";

type Lokasi = {
  id: string;
  lantai: string;
  area: string | null;
  rak: string | null;
  bin: string | null;
  keterangan: string | null;
};

export default async function EditLokasiGudangPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data } = await supabase
    .from("locations")
    .select("id, lantai, area, rak, bin, keterangan")
    .eq("id", id)
    .single();

  if (!data) notFound();
  const lokasi = data as Lokasi;

  return (
    <div>
      <Link href="/gudang/lokasi" className="mb-4 inline-block text-sm text-blue-600 hover:underline">
        ← Kembali ke Lokasi
      </Link>
      <h1 className="mb-4 text-2xl font-semibold text-slate-800">Edit Lokasi</h1>

      <form action={updateLokasi} className="max-w-md space-y-3 rounded-xl border bg-white p-6 shadow-sm">
        <input type="hidden" name="id" value={lokasi.id} />
        <div>
          <label className="mb-1 block text-xs text-slate-500">Lantai</label>
          <input name="lantai" defaultValue={lokasi.lantai} required className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Area</label>
          <input name="area" defaultValue={lokasi.area ?? ""} className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Rak</label>
          <input name="rak" defaultValue={lokasi.rak ?? ""} className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Bin</label>
          <input name="bin" defaultValue={lokasi.bin ?? ""} className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Keterangan</label>
          <input name="keterangan" defaultValue={lokasi.keterangan ?? ""} className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}