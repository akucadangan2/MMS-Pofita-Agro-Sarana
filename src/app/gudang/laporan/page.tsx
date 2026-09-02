import { createClient } from "@/lib/supabase/server";
import { Pagination } from "@/components/ui/Pagination";
import { PageSizeSelector } from "@/components/ui/PageSizeSelector";

type RequestRow = {
  id: string;
  branch_id: string;
  dibuat_at: string;
};

type ItemRow = {
  request_id: string;
  qty_terambil: number;
  satuan: string;
  items: { kode: string; nama: string } | null;
};

function awalBulanIni() {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), 1).toISOString().slice(0, 10);
}

function hariIni() {
  return new Date().toISOString().slice(0, 10);
}

export default async function LaporanGudangPage({
  searchParams,
}: {
  searchParams: Promise<{ dari?: string; sampai?: string; q?: string; halaman?: string; ukuran?: string }>;
}) {
  const params = await searchParams;
  const dari = params.dari || awalBulanIni();
  const sampai = params.sampai || hariIni();
  const q = params.q ?? "";
  const ukuran = params.ukuran ?? "20";
  const halaman = Math.max(1, Number(params.halaman) || 1);
  const pageSize = ukuran === "all" ? null : Number(ukuran) || 20;

  const supabase = await createClient();

  const { data: requestsData, error } = await supabase
    .from("requests")
    .select("id, branch_id, dibuat_at")
    .gte("dibuat_at", dari)
    .lte("dibuat_at", `${sampai}T23:59:59`);

  const requests = (requestsData as RequestRow[]) ?? [];
  const requestIds = requests.map((r) => r.id);

  let items: ItemRow[] = [];
  if (requestIds.length > 0) {
    const { data: itemsData } = await supabase
      .from("request_items")
      .select("request_id, qty_terambil, satuan, items(kode, nama)")
      .in("request_id", requestIds);
    items = (itemsData as unknown as ItemRow[]) ?? [];
  }

  const totalRequest = requests.length;
  const totalCabang = new Set(requests.map((r) => r.branch_id)).size;
  const totalQty = items.reduce((s, i) => s + i.qty_terambil, 0);

  const rekapMap = new Map<string, { kode: string; nama: string; qty: number; satuan: string }>();
  for (const i of items) {
    if (!i.items) continue;
    const key = i.items.kode;
    const existing = rekapMap.get(key);
    if (existing) {
      existing.qty += i.qty_terambil;
    } else {
      rekapMap.set(key, { kode: i.items.kode, nama: i.items.nama, qty: i.qty_terambil, satuan: i.satuan });
    }
  }
  let rekap = Array.from(rekapMap.values()).sort((a, b) => b.qty - a.qty);
  const totalJenisBarang = rekap.length;

  if (q) {
    const ql = q.toLowerCase();
    rekap = rekap.filter((r) => r.kode.toLowerCase().includes(ql) || r.nama.toLowerCase().includes(ql));
  }

  const totalHalaman = pageSize ? Math.max(1, Math.ceil(rekap.length / pageSize)) : 1;
  const rekapDitampilkan = pageSize
    ? rekap.slice((halaman - 1) * pageSize, (halaman - 1) * pageSize + pageSize)
    : rekap;

  const linkExportCsv = "/api/export/laporan-gudang?dari=" + dari + "&sampai=" + sampai;
  const linkPrint = "/print/laporan-gudang?dari=" + dari + "&sampai=" + sampai;

  return (
    <div>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Laporan Pengambilan Gudang</h1>
      <a href="/gudang/laporan/stok" className="mb-4 inline-block text-sm text-blue-600 hover:underline">
        → Lihat Laporan Stok (filter kategori & merek)
      </a>

      <form method="GET" className="mb-6 flex flex-wrap items-end gap-3 rounded-lg border bg-white p-4">
        <input type="hidden" name="q" value={q} />
        <input type="hidden" name="ukuran" value={ukuran} />
        <div>
          <label className="mb-1 block text-xs text-slate-500">Dari Tanggal</label>
          <input type="date" name="dari" defaultValue={dari} className="rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Sampai Tanggal</label>
          <input type="date" name="sampai" defaultValue={sampai} className="rounded border px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Terapkan</button>
        <a href={linkExportCsv} className="rounded border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">⬇ Export CSV</a>
        <a href={linkPrint} target="_blank" className="rounded border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">🖨 Print Laporan</a>
      </form>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <KartuRingkasan label="Total Request" nilai={totalRequest} />
        <KartuRingkasan label="Total Cabang" nilai={totalCabang} />
        <KartuRingkasan label="Total Jenis Barang" nilai={totalJenisBarang} />
        <KartuRingkasan label="Total Qty Terambil" nilai={totalQty} />
      </div>

      <h2 className="mb-2 text-lg font-medium text-slate-700">Rekap Barang Diambil</h2>

      <div className="mb-4 flex items-center gap-3">
        <form method="GET" className="flex-1">
          <input type="hidden" name="dari" value={dari} />
          <input type="hidden" name="sampai" value={sampai} />
          <input type="hidden" name="ukuran" value={ukuran} />
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Cari kode atau nama barang..."
            className="w-full max-w-sm rounded-lg border px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </form>
        <PageSizeSelector ukuran={ukuran} />
      </div>

      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-2">Kode</th>
              <th className="px-4 py-2">Nama Barang</th>
              <th className="px-4 py-2">Qty Terambil</th>
            </tr>
          </thead>
          <tbody>
            {rekapDitampilkan.map((r) => (
              <tr key={r.kode} className="border-t">
                <td className="px-4 py-2">{r.kode}</td>
                <td className="px-4 py-2">{r.nama}</td>
                <td className="px-4 py-2">
                  {r.qty} {r.satuan}
                </td>
              </tr>
            ))}
            {rekapDitampilkan.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-slate-400">
                  {q ? "Tidak ada hasil yang cocok." : "Tidak ada data pengambilan di periode ini."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {pageSize && (
        <Pagination
          halamanSekarang={halaman}
          totalHalaman={totalHalaman}
          q={q}
          ukuran={ukuran}
          basePath="/gudang/laporan"
          extraParams={{ dari, sampai }}
        />
      )}
    </div>
  );
}

function KartuRingkasan({ label, nilai }: { label: string; nilai: number }) {
  return (
    <div className="rounded-lg border bg-blue-50 p-4 text-blue-700">
      <p className="text-2xl font-bold">{nilai}</p>
      <p className="text-xs">{label}</p>
    </div>
  );
}