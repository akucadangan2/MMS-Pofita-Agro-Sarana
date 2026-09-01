import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { updateBarangMasuk } from "../../actions";

type Movement = {
  id: string;
  item_id: string;
  location_id: string | null;
  qty: number;
  items: { kode: string; nama: string } | null;
};

type Lokasi = { id: string; lantai: string; area: string | null; rak: string | null };

export default async function EditBarangMasukPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data } = await supabase
    .from("stock_movements")
    .select("id, item_id, location_id, qty, items(kode, nama)")
    .eq("id", id)
    .single();

  if (!data) notFound();
  const movement = data as unknown as Movement;

  const { data: locationsData } = await supabase.from("locations").select("id, lantai, area, rak").order("lantai");
  const daftarLokasi = (locationsData as Lokasi[]) ?? [];

  return (
    <div>
      <Link href="/gudang/barang-masuk" className="mb-4 inline-block text-sm text-blue-600 hover:underline">
        ← Kembali ke Barang Masuk
      </Link>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Edit Barang Masuk</h1>
      <p className="mb-6 text-sm text-slate-500">
        {movement.items?.kode} — {movement.items?.nama}
      </p>

      <form action={updateBarangMasuk} className="max-w-md space-y-3 rounded-xl border bg-white p-6 shadow-sm">
        <input type="hidden" name="movementId" value={movement.id} />
        <input type="hidden" name="itemId" value={movement.item_id} />
        <input type="hidden" name="locationIdLama" value={movement.location_id ?? ""} />
        <input type="hidden" name="qtyLama" value={movement.qty} />

        <div>
          <label className="mb-1 block text-xs text-slate-500">Lokasi</label>
          <select name="locationIdBaru" defaultValue={movement.location_id ?? ""} required className="w-full rounded-lg border px-3 py-2 text-sm">
            <option value="">Pilih lokasi...</option>
            {daftarLokasi.map((l) => (
              <option key={l.id} value={l.id}>
                {l.lantai}
                {l.area ? ` / ${l.area}` : ""}
                {l.rak ? ` / ${l.rak}` : ""}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs text-slate-500">Qty</label>
          <input type="number" name="qtyBaru" defaultValue={movement.qty} min={0} required className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>

        <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}