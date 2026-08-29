import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ActivityTimeline } from "@/components/ui/ActivityTimeline";
import { DetailRequestLantaiTabs } from "@/components/tables/DetailRequestLantaiTabs";

type RequestDetail = {
  id: string;
  no_request: string;
  status: string;
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

type MovementLog = {
  id: string;
  tipe: string;
  qty: number;
  satuan: string;
  ref_tipe: string | null;
  created_at: string;
  items: { nama: string } | null;
};

export default async function DetailRequestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: request } = await supabase
    .from("requests")
    .select("id, no_request, status, dibuat_at, branches(nama)")
    .eq("id", id)
    .single();

  if (!request) notFound();
  const requestDetail = request as unknown as RequestDetail;

  const { data: itemsData } = await supabase
    .from("request_items")
    .select("id, item_id, qty_diminta, qty_terambil, satuan, status, items(kode, nama)")
    .eq("request_id", id);

  const items = (itemsData as unknown as ItemRow[]) ?? [];
  const itemIds = items.map((i) => i.item_id);

  const totalBarang = items.length;
  const totalQtyDiminta = items.reduce((s, i) => s + i.qty_diminta, 0);
  const totalQtyTerambil = items.reduce((s, i) => s + i.qty_terambil, 0);
  const progress = totalQtyDiminta > 0 ? Math.round((totalQtyTerambil / totalQtyDiminta) * 100) : 0;

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

  const grupPerLantai = new Map<string, ItemRow[]>();
  for (const item of items) {
    const lantai = lantaiPerItem.get(item.item_id) ?? "Tanpa Lokasi";
    const arr = grupPerLantai.get(lantai) ?? [];
    arr.push(item);
    grupPerLantai.set(lantai, arr);
  }
  const daftarLantai = Array.from(grupPerLantai.keys()).sort();
  const grupArray = daftarLantai.map((lantai) => ({
    lantai,
    items: grupPerLantai.get(lantai)!,
  }));

  const { data: movementsData } = await supabase
    .from("stock_movements")
    .select("id, tipe, qty, satuan, ref_tipe, created_at, items(nama)")
    .eq("ref_id", id)
    .order("created_at", { ascending: true });

  const movements = (movementsData as unknown as MovementLog[]) ?? [];

  const aktivitas = [
    {
      waktu: requestDetail.dibuat_at,
      teks: "Request dibuat oleh " + (requestDetail.branches?.nama ?? "Cabang"),
    },
    ...movements.map((m) => ({
      waktu: m.created_at,
      teks:
        m.ref_tipe === "batal_pengambilan"
          ? "Pengambilan " + (m.items?.nama ?? "barang") + " dibatalkan (" + m.qty + " " + m.satuan + ")"
          : (m.items?.nama ?? "Barang") + " diambil (" + m.qty + " " + m.satuan + ")",
    })),
  ].sort((a, b) => new Date(a.waktu).getTime() - new Date(b.waktu).getTime());

  return (
    <div>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">{requestDetail.no_request}</h1>
      <p className="mb-4 text-sm text-slate-500">
        {requestDetail.branches?.nama ?? "-"} • {new Date(requestDetail.dibuat_at).toLocaleString("id-ID")}
      </p>

      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-2xl font-bold text-slate-800">{totalBarang}</p>
          <p className="text-xs text-slate-500">Total Barang</p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-2xl font-bold text-slate-800">{totalQtyDiminta}</p>
          <p className="text-xs text-slate-500">Total Qty</p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-2xl font-bold text-blue-600">{progress}%</p>
          <p className="text-xs text-slate-500">Progress</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {grupArray.length > 0 ? (
            <DetailRequestLantaiTabs requestId={id} groups={grupArray} />
          ) : (
            <p className="text-center text-slate-400">Tidak ada barang di request ini.</p>
          )}
        </div>

        <div>
          <ActivityTimeline aktivitas={aktivitas} />
        </div>
      </div>
    </div>
  );
}