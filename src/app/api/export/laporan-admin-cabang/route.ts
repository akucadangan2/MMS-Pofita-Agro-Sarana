import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { toCsv } from "@/lib/csv";

type RequestRow = {
  id: string;
  branch_id: string;
  branches: { nama: string } | null;
};

type ReqItemRow = { request_id: string; qty_diminta: number; qty_terambil: number };

export async function GET(req: NextRequest) {
  const dari = req.nextUrl.searchParams.get("dari") ?? "";
  const sampai = req.nextUrl.searchParams.get("sampai") ?? "";

  const supabase = await createClient();

  const { data: requestsData, error } = await supabase
    .from("requests")
    .select("id, branch_id, branches(nama)")
    .gte("dibuat_at", dari)
    .lte("dibuat_at", `${sampai}T23:59:59`);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

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

  const rekapMap = new Map<string, { nama: string; totalRequest: number; qtyDiminta: number; qtyTerambil: number }>();
  for (const r of requests) {
    const existing = rekapMap.get(r.branch_id) ?? {
      nama: r.branches?.nama ?? "-",
      totalRequest: 0,
      qtyDiminta: 0,
      qtyTerambil: 0,
    };
    existing.totalRequest += 1;
    const qty = qtyPerRequest.get(r.id) ?? { diminta: 0, terambil: 0 };
    existing.qtyDiminta += qty.diminta;
    existing.qtyTerambil += qty.terambil;
    rekapMap.set(r.branch_id, existing);
  }

  const rows = Array.from(rekapMap.values())
    .sort((a, b) => b.totalRequest - a.totalRequest)
    .map((c) => ({
      Cabang: c.nama,
      "Total Request": c.totalRequest,
      "Qty Diminta": c.qtyDiminta,
      "Qty Terambil": c.qtyTerambil,
    }));

  const csv = toCsv(rows, ["Cabang", "Total Request", "Qty Diminta", "Qty Terambil"]);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="laporan-cabang-${dari}-sampai-${sampai}.csv"`,
    },
  });
}