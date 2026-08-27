import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { toCsv } from "@/lib/csv";

type RequestRow = { id: string };
type ItemRow = {
  qty_terambil: number;
  satuan: string;
  items: { kode: string; nama: string } | null;
};

export async function GET(req: NextRequest) {
  const dari = req.nextUrl.searchParams.get("dari") ?? "";
  const sampai = req.nextUrl.searchParams.get("sampai") ?? "";

  const supabase = await createClient();

  const { data: requestsData, error } = await supabase
    .from("requests")
    .select("id")
    .gte("dibuat_at", dari)
    .lte("dibuat_at", `${sampai}T23:59:59`);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const requests = (requestsData as RequestRow[]) ?? [];
  const requestIds = requests.map((r) => r.id);

  let items: ItemRow[] = [];
  if (requestIds.length > 0) {
    const { data: itemsData } = await supabase
      .from("request_items")
      .select("qty_terambil, satuan, items(kode, nama)")
      .in("request_id", requestIds);
    items = (itemsData as unknown as ItemRow[]) ?? [];
  }

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

  const rows = Array.from(rekapMap.values())
    .sort((a, b) => b.qty - a.qty)
    .map((r) => ({ Kode: r.kode, "Nama Barang": r.nama, "Qty Terambil": r.qty, Satuan: r.satuan }));

  const csv = toCsv(rows, ["Kode", "Nama Barang", "Qty Terambil", "Satuan"]);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="laporan-gudang-${dari}-sampai-${sampai}.csv"`,
    },
  });
}