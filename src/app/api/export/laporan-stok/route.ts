import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { toCsv } from "@/lib/csv";

type StockRow = {
  qty: number;
  items: { kode: string; nama: string; kategori: string | null; merek: string | null; satuan_dasar: string } | null;
};

export async function GET(req: NextRequest) {
  const kategoriFilter = req.nextUrl.searchParams.get("kategori") ?? "";
  const merekFilter = req.nextUrl.searchParams.get("merek") ?? "";

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("stock")
    .select("qty, items!inner(kode, nama, kategori, merek, satuan_dasar)")
    .order("qty", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const semuaStok = (data as unknown as StockRow[]) ?? [];
  const stok = semuaStok.filter((s) => {
    if (kategoriFilter && s.items?.kategori !== kategoriFilter) return false;
    if (merekFilter && s.items?.merek !== merekFilter) return false;
    return true;
  });

  const rows = stok.map((s) => ({
    Kode: s.items?.kode ?? "-",
    "Nama Barang": s.items?.nama ?? "-",
    Kategori: s.items?.kategori ?? "-",
    Merek: s.items?.merek ?? "-",
    Qty: s.qty,
    Satuan: s.items?.satuan_dasar ?? "",
  }));

  const csv = toCsv(rows, ["Kode", "Nama Barang", "Kategori", "Merek", "Qty", "Satuan"]);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="laporan-stok.csv"`,
    },
  });
}