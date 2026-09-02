import { createClient } from "@/lib/supabase/server";
import { PrintButton } from "@/components/ui/PrintButton";

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

type Pengaturan = {
  nama_perusahaan: string;
  footer_text: string;
  ukuran_kertas: string;
  tampilkan_logo: boolean;
};

export default async function PrintLaporanGudangPage({
  searchParams,
}: {
  searchParams: Promise<{ dari?: string; sampai?: string; operator?: string; supervisor?: string }>;
}) {
  const params = await searchParams;
  const dari = params.dari ?? "";
  const sampai = params.sampai ?? "";
  const operator = params.operator ?? "";
  const supervisor = params.supervisor ?? "";

  const supabase = await createClient();

  const { data: pengaturanData } = await supabase.from("pengaturan_struk").select("*").eq("id", 1).maybeSingle();
  const pengaturan = (pengaturanData as Pengaturan) ?? {
    nama_perusahaan: "CV Profita Agro Sarana",
    footer_text: "Terima kasih",
    ukuran_kertas: "80mm",
    tampilkan_logo: true,
  };

  const { data: requestsData } = await supabase
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
    const existing = rekapMap.get(i.items.kode);
    if (existing) {
      existing.qty += i.qty_terambil;
    } else {
      rekapMap.set(i.items.kode, { kode: i.items.kode, nama: i.items.nama, qty: i.qty_terambil, satuan: i.satuan });
    }
  }
  const rekap = Array.from(rekapMap.values()).sort((a, b) => b.qty - a.qty);
  const totalJenisBarang = rekap.length;

  const sekarang = new Date().toLocaleString("id-ID");
  const lebarKertas = pengaturan.ukuran_kertas;

  return (
    <div className="mx-auto p-6 print:p-0" style={{ maxWidth: lebarKertas }}>
      <style>{`@media print { @page { size: ${lebarKertas} auto; margin: 4mm; } }`}</style>
      <div className="mb-4 flex justify-end print:hidden">
        <PrintButton />
      </div>

      <div className="rounded-lg border-2 border-slate-800 p-4 text-xs">
        {pengaturan.tampilkan_logo && (
          <img src="/logo.png" alt="Logo" className="mx-auto mb-2 h-12 w-12 object-contain" />
        )}
        <p className="text-center text-sm font-bold">{pengaturan.nama_perusahaan}</p>
        <h1 className="text-center text-base font-bold uppercase">Laporan Pengambilan Harian Gudang</h1>
        <a href="/gudang/laporan/stok" className="mb-4 inline-block text-sm text-blue-600 hover:underline">
          → Lihat Laporan Stok (filter kategori & merek)
        </a>
        <p className="mb-3 text-center text-xs text-slate-500">
          {dari} s/d {sampai}
        </p>

        <div className="mb-3 border-y border-dashed border-slate-400 py-2">
          <p className="mb-1 text-xs font-bold uppercase">Ringkasan</p>
          <div className="flex justify-between text-sm">
            <span>Total Request</span>
            <span className="font-medium">{totalRequest}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Total Cabang</span>
            <span className="font-medium">{totalCabang}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Total Jenis Barang</span>
            <span className="font-medium">{totalJenisBarang}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Total Quantity</span>
            <span className="font-medium">{totalQty}</span>
          </div>
        </div>

        <p className="mb-1 text-xs font-bold uppercase">Rekap Barang Diambil</p>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="py-1 text-left">Kode</th>
              <th className="py-1 text-left">Nama Barang</th>
              <th className="py-1 text-right">Qty</th>
            </tr>
          </thead>
          <tbody>
            {rekap.map((r) => (
              <tr key={r.kode} className="border-b border-slate-200">
                <td className="py-1">{r.kode}</td>
                <td className="py-1">{r.nama}</td>
                <td className="py-1 text-right">
                  {r.qty} {r.satuan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-3 flex justify-between border-t border-dashed border-slate-400 pt-2 text-sm font-bold">
          <span>TOTAL</span>
          <span>{totalQty} UNIT</span>
        </div>

        <div className="mt-6 text-sm">
          <p>Operator: {operator || "___________________"}</p>
          <p>Supervisor: {supervisor || "___________________"}</p>
        </div>

        <p className="mt-4 text-xs text-slate-500">Dicetak: {sekarang}</p>
        <p className="mt-6 text-center text-xs text-slate-400">--- {pengaturan.footer_text} ---</p>
      </div>
    </div>
  );
}