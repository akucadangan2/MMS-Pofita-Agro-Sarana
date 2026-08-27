import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { toCsv } from "@/lib/csv";

type DeliveryRow = { id: string };
type DeliveryItemRow = {
  qty: number;
  satuan: string;
  items: { kode: string; nama: string } | null;
};

export async function GET(req: NextRequest) {
  const dari = req.nextUrl.searchParams.get("dari") ?? "";
  const sampai = req.nextUrl.searchParams.get("sampai") ?? "";

  const supabase = await createClient();

  const { data: deliveriesData, error } = await supabase
    .from("customer_deliveries")
    .select("id")
    .gte("tanggal", dari)
    .lte("tanggal", sampai);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const deliveries = (deliveriesData as DeliveryRow[]) ?? [];
  const deliveryIds = deliveries.map((d) => d.id);

  let deliveryItems: DeliveryItemRow[] = [];
  if (deliveryIds.length > 0) {
    const { data } = await supabase
      .from("delivery_items")
      .select("qty, satuan, items(kode, nama)")
      .in("delivery_id", deliveryIds);
    deliveryItems = (data as unknown as DeliveryItemRow[]) ?? [];
  }

  const rekapMap = new Map<string, { kode: string; nama: string; qty: number; satuan: string }>();
  for (const di of deliveryItems) {
    if (!di.items) continue;
    const existing = rekapMap.get(di.items.kode);
    if (existing) {
      existing.qty += di.qty;
    } else {
      rekapMap.set(di.items.kode, { kode: di.items.kode, nama: di.items.nama, qty: di.qty, satuan: di.satuan });
    }
  }

  const rows = Array.from(rekapMap.values())
    .sort((a, b) => b.qty - a.qty)
    .map((r) => ({ Kode: r.kode, "Nama Barang": r.nama, "Qty Keluar": r.qty, Satuan: r.satuan }));

  const csv = toCsv(rows, ["Kode", "Nama Barang", "Qty Keluar", "Satuan"]);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="laporan-barang-keluar-${dari}-sampai-${sampai}.csv"`,
    },
  });
}