import { createClient } from "@/lib/supabase/server";
import { PrintButton } from "@/components/ui/PrintButton";

type PickingRow = {
  id: string;
  item_id: string;
  qty_diminta: number;
  satuan: string;
  items: { kode: string; nama: string } | null;
  requests: { no_request: string; branches: { nama: string } | null } | null;
};

type ItemLocationRow = { item_id: string; locations: { lantai: string } | null };

type Pengaturan = {
  nama_perusahaan: string;
  footer_text: string;
  ukuran_kertas: string;
  tampilkan_logo: boolean;
};

export default async function PrintPickingPage({
  searchParams,
}: {
  searchParams: Promise<{ lantai?: string }>;
}) {
  const { lantai } = await searchParams;
  const supabase = await createClient();

  const { data: pengaturanData } = await supabase.from("pengaturan_struk").select("*").eq("id", 1).maybeSingle();
  const pengaturan = (pengaturanData as Pengaturan) ?? {
    nama_perusahaan: "CV Profita Agro Sarana",
    footer_text: "Terima kasih",
    ukuran_kertas: "80mm",
    tampilkan_logo: true,
  };

  const { data } = await supabase
    .from("request_items")
    .select(
      "id, item_id, qty_diminta, satuan, items(kode, nama), requests(no_request, branches(nama))"
    )
    .neq("status", "terambil");

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

  const items = lantai
    ? rows.filter((r) => (lantaiPerItem.get(r.item_id) ?? "Tanpa Lokasi") === lantai)
    : rows;

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
        <h1 className="text-center text-base font-bold uppercase">List Picking</h1>
        {lantai && <p className="mb-1 text-center text-sm font-semibold">{lantai}</p>}
        <p className="mb-3 text-center text-xs text-slate-500">Dicetak: {sekarang}</p>

        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="py-1 text-left">No</th>
              <th className="py-1 text-left">Kode</th>
              <th className="py-1 text-left">Nama Barang</th>
              <th className="py-1 text-right">Qty</th>
              <th className="py-1 text-left">No Request</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={item.id} className="border-b border-slate-200">
                <td className="py-1">{idx + 1}</td>
                <td className="py-1">{item.items?.kode ?? "-"}</td>
                <td className="py-1">{item.items?.nama ?? "-"}</td>
                <td className="py-1 text-right">
                  {item.qty_diminta} {item.satuan}
                </td>
                <td className="py-1">{item.requests?.no_request ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8 text-sm">
          <p>Petugas: ___________________</p>
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">--- {pengaturan.footer_text} ---</p>
      </div>
    </div>
  );
}