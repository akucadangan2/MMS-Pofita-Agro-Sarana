import { createClient } from "@/lib/supabase/server";

type RequestRow = {
  id: string;
  branch_id: string;
  dibuat_at: string;
  branches: { nama: string } | null;
};

type ReqItemRow = {
  request_id: string;
  qty_diminta: number;
  qty_terambil: number;
};

type DeliveryRow = { id: string; tanggal: string };

type DeliveryItemRow = {
  delivery_id: string;
  qty: number;
  satuan: string;
  items: { kode: string; nama: string } | null;
};

type RekapCabang = {
  nama: string;
  totalRequest: number;
  qtyDiminta: number;
  qtyTerambil: number;
};

type RekapBarang = {
  kode: string;
  nama: string;
  qty: number;
  satuan: string;
};

function awalBulanIni() {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), 1).toISOString().slice(0, 10);
}

function hariIni() {
  return new Date().toISOString().slice(0, 10);
}

export default async function LaporanAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ dari?: string; sampai?: string }>;
}) {
  const params = await searchParams;
  const dari = params.dari || awalBulanIni();
  const sampai = params.sampai || hariIni();

  const supabase = await createClient();

  const { data: requestsData, error: errRequests } = await supabase
    .from("requests")
    .select("id, branch_id, dibuat_at, branches(nama)")
    .gte("dibuat_at", dari)
    .lte("dibuat_at", `${sampai}T23:59:59`);

  const requests = (requestsData as unknown as RequestRow[]) ?? [];
  const requestIds = requests.map((r) => r.id);

  let reqItems: ReqItemRow[] = [];
  if (requestIds.length > 0) {
    const { data } = await supabase
      .from("request_items")
      .select("request_id, qty_diminta, qty_terambil")
      .in("request_id", requestIds);
    reqItems = (data as ReqItemRow[]) ?? [];
  }

  const qtyPerRequest = new Map<string, { diminta: number; terambil: number }>();
  for (const it of reqItems) {
    const cur = qtyPerRequest.get(it.request_id) ?? { diminta: 0, terambil: 0 };
    cur.diminta += it.qty_diminta;
    cur.terambil += it.qty_terambil;
    qtyPerRequest.set(it.request_id, cur);
  }

  const rekapCabangMap = new Map<string, RekapCabang>();
  for (const r of requests) {
    const existing = rekapCabangMap.get(r.branch_id) ?? {
      nama: r.branches?.nama ?? "-",
      totalRequest: 0,
      qtyDiminta: 0,
      qtyTerambil: 0,
    };
    existing.totalRequest += 1;
    const qty = qtyPerRequest.get(r.id) ?? { diminta: 0, terambil: 0 };
    existing.qtyDiminta += qty.diminta;
    existing.qtyTerambil += qty.terambil;
    rekapCabangMap.set(r.branch_id, existing);
  }
  const rekapCabang = Array.from(rekapCabangMap.values()).sort((a, b) => b.totalRequest - a.totalRequest);

  const { data: deliveriesData, error: errDeliveries } = await supabase
    .from("customer_deliveries")
    .select("id, tanggal")
    .gte("tanggal", dari)
    .lte("tanggal", sampai);

  const deliveries = (deliveriesData as DeliveryRow[]) ?? [];
  const deliveryIds = deliveries.map((d) => d.id);

  let deliveryItems: DeliveryItemRow[] = [];
  if (deliveryIds.length > 0) {
    const { data } = await supabase
      .from("delivery_items")
      .select("delivery_id, qty, satuan, items(kode, nama)")
      .in("delivery_id", deliveryIds);
    deliveryItems = (data as unknown as DeliveryItemRow[]) ?? [];
  }

  const rekapBarangKeluarMap = new Map<string, RekapBarang>();
  for (const di of deliveryItems) {
    if (!di.items) continue;
    const existing = rekapBarangKeluarMap.get(di.items.kode);
    if (existing) {
      existing.qty += di.qty;
    } else {
      rekapBarangKeluarMap.set(di.items.kode, {
        kode: di.items.kode,
        nama: di.items.nama,
        qty: di.qty,
        satuan: di.satuan,
      });
    }
  }
  const rekapBarangKeluar = Array.from(rekapBarangKeluarMap.values()).sort((a, b) => b.qty - a.qty);

  const linkExportCabang = "/api/export/laporan-admin-cabang?dari=" + dari + "&sampai=" + sampai;
  const linkExportBarangKeluar = "/api/export/laporan-admin-barang-keluar?dari=" + dari + "&sampai=" + sampai;

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-slate-800">Laporan Rekap</h1>

      <form method="GET" className="mb-6 flex flex-wrap items-end gap-3 rounded-lg border bg-white p-4">
        <div>
          <label className="mb-1 block text-xs text-slate-500">Dari Tanggal</label>
          <input type="date" name="dari" defaultValue={dari} className="rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Sampai Tanggal</label>
          <input type="date" name="sampai" defaultValue={sampai} className="rounded border px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Terapkan</button>
      </form>

      {(errRequests || errDeliveries) && (
        <p className="mb-3 text-sm text-red-600">
          Error: {errRequests?.message ?? errDeliveries?.message}
        </p>
      )}

      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-medium text-slate-700">Rekap Permintaan per Cabang</h2>
        <a href={linkExportCabang} className="rounded border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">⬇ Export CSV</a>
      </div>
      <div className="mb-8 overflow-x-auto rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-2">Cabang</th>
              <th className="px-4 py-2">Total Request</th>
              <th className="px-4 py-2">Qty Diminta</th>
              <th className="px-4 py-2">Qty Terambil</th>
            </tr>
          </thead>
          <tbody>
            {rekapCabang.map((c) => (
              <tr key={c.nama} className="border-t">
                <td className="px-4 py-2">{c.nama}</td>
                <td className="px-4 py-2">{c.totalRequest}</td>
                <td className="px-4 py-2">{c.qtyDiminta}</td>
                <td className="px-4 py-2">{c.qtyTerambil}</td>
              </tr>
            ))}
            {rekapCabang.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-400">
                  Tidak ada data permintaan di periode ini.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-medium text-slate-700">Rekap Barang Keluar Customer</h2>
        <a href={linkExportBarangKeluar} className="rounded border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">⬇ Export CSV</a>
      </div>
      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-2">Kode</th>
              <th className="px-4 py-2">Nama Barang</th>
              <th className="px-4 py-2">Qty Keluar</th>
            </tr>
          </thead>
          <tbody>
            {rekapBarangKeluar.map((r) => (
              <tr key={r.kode} className="border-t">
                <td className="px-4 py-2">{r.kode}</td>
                <td className="px-4 py-2">{r.nama}</td>
                <td className="px-4 py-2">
                  {r.qty} {r.satuan}
                </td>
              </tr>
            ))}
            {rekapBarangKeluar.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-slate-400">
                  Tidak ada barang keluar di periode ini.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}