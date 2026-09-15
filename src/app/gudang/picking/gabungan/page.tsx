import { createClient } from "@/lib/supabase/server";

type ItemRow = {
  id: string;
  request_id: string;
  qty_diminta: number;
  satuan: string;
  status: string;
  items: { kode: string; nama: string } | null;
};

type RequestRow = {
  id: string;
  no_request: string;
  sesi: string | null;
  dibuat_at: string;
  branches: { nama: string } | null;
};

function hariIni() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
}

export default async function GabunganPickingPage({
  searchParams,
}: {
  searchParams: Promise<{ tanggal?: string; sesi?: string }>;
}) {
  const params = await searchParams;
  const tanggal = params.tanggal || hariIni();
  const sesi = params.sesi || "Sesi 1";

  const supabase = await createClient();

  const { data: requestsData } = await supabase
    .from("requests")
    .select("id, no_request, sesi, dibuat_at, branches(nama)")
    .eq("sesi", sesi)
    .gte("dibuat_at", `${tanggal}T00:00:00+07:00`)
    .lte("dibuat_at", `${tanggal}T23:59:59+07:00`)
    .order("dibuat_at");

  const requests = (requestsData as unknown as RequestRow[]) ?? [];
  const requestIds = requests.map((r) => r.id);

  let items: ItemRow[] = [];
  if (requestIds.length > 0) {
    const { data: itemsData } = await supabase
      .from("request_items")
      .select("id, request_id, qty_diminta, satuan, status, items(kode, nama)")
      .in("request_id", requestIds);
    items = (itemsData as unknown as ItemRow[]) ?? [];
  }

  const itemsPerRequest = new Map<string, ItemRow[]>();
  for (const i of items) {
    const arr = itemsPerRequest.get(i.request_id) ?? [];
    arr.push(i);
    itemsPerRequest.set(i.request_id, arr);
  }

  const totalKeseluruhan = items.filter((i) => i.status !== "dibatalkan").length;
  const totalQtyKeseluruhan = items
    .filter((i) => i.status !== "dibatalkan")
    .reduce((s, i) => s + i.qty_diminta, 0);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-2xl font-semibold text-slate-800">Rekap Gabungan Picking</h1>
          <p className="text-sm text-slate-500">Semua request dikelompokkan per sesi, tetap terpisah per No Request</p>
        </div>
        
        {/* BAGIAN YANG DIPERBAIKI: Menambahkan tag pembuka <a */}
        <a
          href={`/gudang/picking/gabungan?tanggal=${tanggal}&sesi=${encodeURIComponent(sesi)}`}
          target="_blank"
          className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
        >
          🖨 Print
        </a>
      </div>

      <form method="GET" className="mb-6 flex flex-wrap items-end gap-3 rounded-lg border bg-white p-4">
        <div>
          <label className="mb-1 block text-xs text-slate-500">Tanggal</label>
          <input type="date" name="tanggal" defaultValue={tanggal} className="rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Sesi</label>
          <select name="sesi" defaultValue={sesi} className="rounded border px-3 py-2 text-sm">
            <option value="Sesi 1">Sesi 1</option>
            <option value="Sesi 2">Sesi 2</option>
          </select>
        </div>
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Tampilkan
        </button>
      </form>

      <div className="mb-4 flex gap-4">
        <div className="rounded-lg border bg-blue-50 px-4 py-3 text-blue-700">
          <p className="text-xl font-bold">{requests.length}</p>
          <p className="text-xs">Total Request</p>
        </div>
        <div className="rounded-lg border bg-blue-50 px-4 py-3 text-blue-700">
          <p className="text-xl font-bold">{totalKeseluruhan}</p>
          <p className="text-xs">Total Barang</p>
        </div>
        <div className="rounded-lg border bg-blue-50 px-4 py-3 text-blue-700">
          <p className="text-xl font-bold">{totalQtyKeseluruhan}</p>
          <p className="text-xs">Total Qty</p>
        </div>
      </div>

      <div className="space-y-4">
        {requests.map((r) => {
          const itemsRequest = (itemsPerRequest.get(r.id) ?? []).filter((i) => i.status !== "dibatalkan");
          return (
            <div key={r.id} className="rounded-xl border bg-white shadow-sm">
              <div className="border-b bg-slate-50 px-4 py-2">
                <p className="text-sm font-semibold text-slate-800">
                  {r.no_request} — {r.branches?.nama ?? "-"}
                </p>
                <p className="text-xs text-slate-500">
                  {new Date(r.dibuat_at).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })}
                </p>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {itemsRequest.map((i) => (
                    <tr key={i.id} className="border-t">
                      <td className="px-4 py-2">{i.items?.kode ?? "-"}</td>
                      <td className="px-4 py-2">{i.items?.nama ?? "-"}</td>
                      <td className="px-4 py-2 text-right font-medium">
                        {i.qty_diminta} {i.satuan}
                      </td>
                      <td className="px-4 py-2 text-right">
                        {i.status === "terambil" && <span className="text-xs text-green-600">✓ Diambil</span>}
                        {i.status === "pending" && <span className="text-xs text-amber-600">Pending</span>}
                        {i.status === "belum" && <span className="text-xs text-slate-400">Belum</span>}
                      </td>
                    </tr>
                  ))}
                  {itemsRequest.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-4 py-3 text-center text-slate-400">
                        Tidak ada barang (semua dibatalkan).
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          );
        })}
        {requests.length === 0 && (
          <div className="rounded-xl border bg-white p-10 text-center text-slate-400 shadow-sm">
            Tidak ada request di sesi ini.
          </div>
        )}
      </div>
    </div>
  );
}