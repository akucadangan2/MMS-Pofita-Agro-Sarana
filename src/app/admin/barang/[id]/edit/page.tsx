import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { updateBarang } from "../../actions";

type Barang = {
  id: string;
  kode: string;
  nama: string;
  kategori: string | null;
  satuan_dasar: string;
};

export default async function EditBarangPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data } = await supabase
    .from("items")
    .select("id, kode, nama, kategori, satuan_dasar")
    .eq("id", id)
    .single();

  if (!data) notFound();
  const item = data as Barang;

  return (
    <div>
      <Link href="/admin/barang" className="mb-4 inline-block text-sm text-blue-600 hover:underline">
        ← Kembali ke Master Barang
      </Link>
      <h1 className="mb-4 text-2xl font-semibold text-slate-800">Edit Barang</h1>

      <form action={updateBarang} className="max-w-md space-y-3 rounded-lg border bg-white p-6">
        <input type="hidden" name="id" value={item.id} />
        <div>
          <label className="mb-1 block text-xs text-slate-500">Kode</label>
          <input name="kode" defaultValue={item.kode} required className="w-full rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Nama Barang</label>
          <input name="nama" defaultValue={item.nama} required className="w-full rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Kategori</label>
          <input name="kategori" defaultValue={item.kategori ?? ""} className="w-full rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Satuan Dasar</label>
          <input name="satuanDasar" defaultValue={item.satuan_dasar} required className="w-full rounded border px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}