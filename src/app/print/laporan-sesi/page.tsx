import { createClient } from "@/lib/supabase/server";
import { PrintButton } from "@/components/ui/PrintButton";

type RequestRow = {
  id: string;
  sesi: string | null;
};

type ItemRow = {
  request_id: string;
  qty_terambil: number;
  satuan: string;
  items: { kode: string; nama: string } | null;
};

function hariIni() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
}

export default async function PrintLaporanSesiPage({
  searchParams,
}: {
  searchParams: Promise<{ tanggal?: string; sesi?: string }>;
}) {
  const params = await searchParams;
  const tanggal = params.tanggal || hariIni();
  const filterSesi = params.sesi; // "1", "2", atau kosong (= keduanya)

  const supabase = await createClient();

  const { data: requestsData } = await supabase
    .from("requests")
    .select("id, sesi")
    .gte("dibuat_at", `${tanggal}T00:00:00+07:00`)
    .lte("dibuat_at", `${tanggal}T23:59:59+07:00`);

  const requests = (requestsData as RequestRow[]) ?? [];
  const requestIds = requests.map((r) => r.id);
  const sesiPerRequest = new Map(requests.map((r) => [r.id, r.sesi ?? "Sesi 1"]));

  let items: ItemRow[] = [];
  if (requestIds.length > 0) {
    const { data: itemsData } = await supabase
      .from("request_items")
      .select("request_id, qty_terambil, satuan, items(kode, nama)")
      .in("request_id", requestIds)
      .gt("qty_terambil", 0);
    items = (itemsData as unknown as ItemRow[]) ?? [];
  }

  function rekapSesi(namaSesi: string) {
    const rekapMap = new Map<string, { kode: string; nama: string; qty: number; satuan: string }>();
    for (const i of items) {
      if (sesiPerRequest.get(i.request_id) !== namaSesi) continue;
      if (!i.items) continue;
      const existing = rekapMap.get(i.items.kode);
      if (existing) {
        existing.qty += i.qty_terambil;
      } else {
        rekapMap.set(i.items.kode, { kode: i.items.kode, nama: i.items.nama, qty: i.qty_terambil, satuan: i.satuan });
      }
    }
    return Array.from(rekapMap.values()).sort((a, b) => a.kode.localeCompare(b.kode));
  }

  const rekapSesi1 = rekapSesi("Sesi 1");
  const rekapSesi2 = rekapSesi("Sesi 2");

  const tanggalTampil = new Date(`${tanggal}T00:00:00`).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mx-auto max-w-4xl p-8 print:p-0">
      <style>{`@media print { @page { size: A4; margin: 15mm; } }`}</style>
      <div className="mb-4 flex justify-end print:hidden">
        <PrintButton />
      </div>

      <div className="mb-6 text-center">
        <p className="text-lg font-bold">CV Profita Agro Sarana</p>
        <h1 className="text-xl font-bold uppercase">Laporan Harian Pengambilan Barang</h1>
        <p className="text-sm text-slate-600">Tanggal: {tanggalTampil}</p>
      </div>

      {filterSesi !== "2" && <SeksiTabel judul="Sesi 1 (sebelum jam 11.00)" rekap={rekapSesi1} />}
      {filterSesi !== "1" && filterSesi !== "2" && <div className="mt-8" />}
      {filterSesi !== "1" && <SeksiTabel judul="Sesi 2 (jam 11.00 ke atas)" rekap={rekapSesi2} />}

      <div className="mt-10 grid grid-cols-2 gap-8 text-sm">
        <div>
          <p className="mb-10">Operator:</p>
          <p className="border-t border-slate-800 pt-1">_____________________</p>
        </div>
        <div>
          <p className="mb-10">Supervisor:</p>
          <p className="border-t border-slate-800 pt-1">_____________________</p>
        </div>
      </div>
    </div>
  );
}

function SeksiTabel({
  judul,
  rekap,
}: {
  judul: string;
  rekap: { kode: string; nama: string; qty: number; satuan: string }[];
}) {
  const totalQty = rekap.reduce((s, r) => s + r.qty, 0);

  return (
    <div>
      <h2 className="mb-2 border-b-2 border-slate-800 pb-1 text-base font-bold">{judul}</h2>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-400 text-left">
            <th className="py-1">No</th>
            <th className="py-1">Kode</th>
            <th className="py-1">Nama Barang</th>
            <th className="py-1 text-right">Qty Diambil</th>
          </tr>
        </thead>
        <tbody>
          {rekap.map((r, idx) => (
            <tr key={r.kode} className="border-b border-slate-200">
              <td className="py-1">{idx + 1}</td>
              <td className="py-1">{r.kode}</td>
              <td className="py-1">{r.nama}</td>
              <td className="py-1 text-right">
                {r.qty} {r.satuan}
              </td>
            </tr>
          ))}
          {rekap.length === 0 && (
            <tr>
              <td colSpan={4} className="py-4 text-center text-slate-400">
                Tidak ada barang diambil di sesi ini.
              </td>
            </tr>
          )}
        </tbody>
        {rekap.length > 0 && (
          <tfoot>
            <tr className="border-t-2 border-slate-800 font-bold">
              <td colSpan={3} className="py-1">
                Total
              </td>
              <td className="py-1 text-right">{totalQty} unit</td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}