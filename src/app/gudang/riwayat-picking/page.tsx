import { createClient } from "@/lib/supabase/server";

type MovementRow = {
  id: string;
  qty: number;
  satuan: string;
  created_at: string;
  ref_id: string | null;
  items: { kode: string; nama: string } | null;
};

export default async function RiwayatPickingPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("stock_movements")
    .select("id, qty, satuan, created_at, ref_id, items(kode, nama)")
    .eq("tipe", "keluar")
    .eq("ref_tipe", "request")
    .order("created_at", { ascending: false })
    .limit(200);

  const movements = (data as unknown as MovementRow[]) ?? [];
  const requestIds = Array.from(new Set(movements.map((m) => m.ref_id).filter(Boolean))) as string[];

  const petaRequest = new Map<string, string>();
  if (requestIds.length > 0) {
    const { data: requestsData } = await supabase.from("requests").select("id, no_request").in("id", requestIds);
    for (const r of requestsData ?? []) {
      petaRequest.set(r.id, r.no_request);
    }
  }

  return (
    <div>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Riwayat Picking</h1>
      <p className="mb-4 text-sm text-slate-500">Catatan pengambilan barang untuk request cabang</p>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Tanggal</th>
              <th className="px-4 py-3 font-medium">No Request</th>
              <th className="px-4 py-3 font-medium">Barang</th>
              <th className="px-4 py-3 font-medium">Qty Diambil</th>
            </tr>
          </thead>
          <tbody>
            {movements.map((m) => (
              <tr key={m.id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-500">{new Date(m.created_at).toLocaleString("id-ID")}</td>
                <td className="px-4 py-3">{m.ref_id ? petaRequest.get(m.ref_id) ?? "-" : "-"}</td>
                <td className="px-4 py-3">{m.items?.nama ?? "-"}</td>
                <td className="px-4 py-3 font-medium">{m.qty} {m.satuan}</td>
              </tr>
            ))}
            {movements.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center text-slate-400">
                  Belum ada riwayat picking.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}