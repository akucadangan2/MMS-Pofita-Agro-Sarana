import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { PrintButton } from "@/components/ui/PrintButton";
import { ukuranFontKeCss } from "@/lib/strukFont";

type RequestDetail = {
  id: string;
  no_request: string;
  dibuat_at: string;
  branches: { nama: string } | null;
};

type ItemRow = {
  id: string;
  item_id: string;
  qty_diminta: number;
  qty_terambil: number;
  satuan: string;
  status: string;
  items: { kode: string; nama: string } | null;
};

type ItemLocationRow = {
  item_id: string;
  locations: { lantai: string } | null;
};

type Pengaturan = {
  nama_perusahaan: string;
  footer_text: string;
  ukuran_kertas: string;
  ukuran_font: string;
  catatan_tambahan: string | null;
  tampilkan_logo: boolean;
};

export default async function PrintRequestPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lantai?: string }>;
}) {
  const { id } = await params;
  const { lantai } = await searchParams;
  const supabase = await createClient();

  const { data: pengaturanData } = await supabase.from("pengaturan_struk").select("*").eq("id", 1).maybeSingle();
  const pengaturan = (pengaturanData as Pengaturan) ?? {
    nama_perusahaan: "CV Profita Agro Sarana",
    footer_text: "Terima kasih",
    ukuran_kertas: "80mm",
    ukuran_font: "sedang",
    catatan_tambahan: null,
    tampilkan_logo: true,
  };

  const { data: request } = await supabase
    .from("requests")
    .select("id, no_request, dibuat_at, branches(nama)")
    .eq("id", id)
    .single();

  if (!request) notFound();
  const requestDetail = request as unknown as RequestDetail;

  const { data: itemsData } = await supabase
    .from("request_items")
    .select("id, item_id, qty_diminta, qty_terambil, satuan, status, items(kode, nama)")
    .eq("request_id", id);

  const allItems = (itemsData as unknown as ItemRow[]) ?? [];
  const itemIds = allItems.map((i) => i.item_id);

  const lantaiPerItem = new Map<string, string>();
  if (itemIds.length > 0) {
    const { data: locData } = await supabase
      .from("item_locations")
      .select("item_id, locations(lantai)")
      .in("item_id", itemIds);
    const locRows = (locData as unknown as ItemLocationRow[]) ?? [];
    for (const l of locRows) {
      if (!lantaiPerItem.has(l.item_id) && l.locations?.lantai) {
        lantaiPerItem.set(l.item_id, l.locations.lantai);
      }
    }
  }

  const items = lantai
    ? allItems.filter((i) => (lantaiPerItem.get(i.item_id) ?? "Tanpa Lokasi") === lantai)
    : allItems;

  const lebarKertas = pengaturan.ukuran_kertas;
  const ukuranFontCss = ukuranFontKeCss(pengaturan.ukuran_font);

  return (
    <div className="mx-auto p-3 print:p-0" style={{ maxWidth: lebarKertas }}>
      <style>{`@media print { @page { size: ${lebarKertas} auto; margin: 3mm; } }`}</style>
      <div className="mb-4 flex justify-end print:hidden">
        <PrintButton />
      </div>

      <div style={{ fontSize: ukuranFontCss }}>
        {pengaturan.tampilkan_logo && (
          <img src="/logo.png" alt="Logo" className="mx-auto mb-1 h-12 w-12 object-contain" />
        )}
        <p className="text-center font-bold">{pengaturan.nama_perusahaan}</p>
        <h1 className="text-center font-bold uppercase">List Pengambilan Barang</h1>
        {lantai && <p className="text-center font-semibold">{lantai}</p>}
        <p className="mb-2 text-center text-slate-500">
          Dicetak: {new Date(requestDetail.dibuat_at).toLocaleString("id-ID")}
        </p>

        <div className="border-t border-black">
          {items.map((item, idx) => (
            <div key={item.id} className="flex justify-between border-b border-dashed border-slate-300 py-1">
              <span>
                {idx + 1}. {item.items?.nama ?? "-"}
              </span>
              <span className="whitespace-nowrap font-semibold">
                {item.qty_diminta} {item.satuan}
              </span>
            </div>
          ))}
          {items.length === 0 && <p className="py-4 text-center text-slate-400">Tidak ada barang.</p>}
        </div>

        {pengaturan.catatan_tambahan && (
          <p className="mt-2 text-center italic text-slate-600">{pengaturan.catatan_tambahan}</p>
        )}
        <div className="mt-6">
          <p>Petugas: ___________________</p>
        </div>
        <p className="mt-4 text-center text-slate-400">--- {pengaturan.footer_text} ---</p>
      </div>
    </div>
  );
}