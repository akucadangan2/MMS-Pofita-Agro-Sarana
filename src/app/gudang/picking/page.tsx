import { createClient } from "@/lib/supabase/server";
import { tandaiTerambil } from "../request/actions";

type PickingRow = {
  id: string;
  request_id: string;
  item_id: string;
  qty_diminta: number;
  qty_terambil: number;
  satuan: string;
  status: string;
  items: { kode: string; nama: string } | null;
  requests: { no_request: string; branches: { nama: string } | null } | null;
};

type ItemLocationRow = { item_id: string; locations: { lantai: string } | null };

export default async function PickingPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("request_items")
    .select(
      "id, request_id, item_id, qty_diminta, qty_terambil, satuan, status, items(kode, nama), requests(no_request, branches(nama))"
    )
    .neq("status", "terambil")
    .order("request_id");

  const rows = (data as unknown as PickingRow[]) ?? [];
  const itemIds = rows.map((r) => r.item_id);

  const lantaiPerItem = new Map<string, string>();
  if (itemIds.length > 0) {
    const { data: locData } = await supabase
      .from("item_locations")
      .select("item_id, locations(lantai)")
      .in("item_id", itemIds);
    for (const l of (locData as unknown as ItemLocationRow[]) ?? []) {
      if (!lantaiPerItem.has(l.item_id) && l.locations?.lantai) {
        lantaiPerItem.set(l.item_id, l.locations.lantai);
      }
    }
  }

  const grup = new Map<string, PickingRow[]>();
  for (const r of rows) {
    const lantai = lantaiPerItem.get(r.item_id) ?? "Tanpa Lokasi";
    const arr = grup.get(lantai) ?? [];
    arr.push(r);
    grup.set(lantai, arr);
  }
  const daftarLantai = Array.from(grup.keys()).sort();

  return (
    <div>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Picking</h1>
      <p className="mb-6 text-sm text-slate-500">Antrian barang yang masih perlu diambil, dari semua request</p>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      {daftarLantai.map((lantai) => {
        const itemsLantai = grup.get(lantai)!;
        return (
          <div key={lantai} className="mb-8">
            <h2 className="mb-2 text-lg font-medium text-slate-700">
              {lantai} <span className="text-sm text-slate-400">({itemsLantai.length} item)</span>
            </h2>
            <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">No Request</th>
                    <th className="px-4 py-3 font-medium">Cabang</th>
                    <th className="px-4 py-3 font-medium">Kode</th>
                    <th className="px-4 py-3 font-medium">Nama Barang</th>
                    <th className="px-4 py-3 font-medium">Qty</th>
                    <th className="px-4 py-3 font-medium">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsLantai.map((r) => (
                    <tr key={r.id} className="border-t hover:bg-slate-50">
                      <td className="px-4 py-3">{r.requests?.no_request ?? "-"}</td>
                      <td className="px-4 py-3">{r.requests?.branches?.nama ?? "-"}</td>
                      <td className="px-4 py-3">{r.items?.kode ?? "-"}</td>
                      <td className="px-4 py-3">{r.items?.nama ?? "-"}</td>
                      <td className="px-4 py-3">{r.qty_diminta} {r.satuan}</td>
                      <td className="px-4 py-3">
                        <form action={tandaiTerambil}>
                          <input type="hidden" name="itemId" value={r.id} />
                          <input type="hidden" name="requestId" value={r.request_id} />
                          <input type="hidden" name="qtyDiminta" value={r.qty_diminta} />
                          <button type="submit" className="rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700">
                            Tandai Terambil
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      {rows.length === 0 && (
        <p className="text-center text-slate-400">Tidak ada barang yang perlu diambil. 🎉</p>
      )}
    </div>
  );
}