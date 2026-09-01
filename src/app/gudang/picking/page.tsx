import { createClient } from "@/lib/supabase/server";
import { CheckboxTerambil } from "@/components/ui/CheckboxTerambil";
import Link from "next/link";
import { BadgeStokKurang } from "@/components/ui/BadgeStokKurang";

type PickingRow = {
  id: string;
  request_id: string;
  item_id: string;
  qty_diminta: number;
  qty_terambil: number;
  satuan: string;
  status: string;
  items: { kode: string; nama: string; kategori: string | null } | null;
  requests: { no_request: string; branches: { nama: string } | null } | null;
};

type ItemLocationRow = { item_id: string; locations: { lantai: string } | null };

export default async function PickingPage({
  searchParams,
}: {
  searchParams: Promise<{ berhasil?: string }>;
}) {
  const params = await searchParams;
  const berhasil = params.berhasil === "1";

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("request_items")
    .select(
      "id, request_id, item_id, qty_diminta, qty_terambil, satuan, status, items(kode, nama, kategori), requests(no_request, branches(nama))"
    )
    .eq("status", "belum")
    .order("request_id");

  const rows = (data as unknown as PickingRow[]) ?? [];
  const itemIds = rows.map((r) => r.item_id);
  const { data: stockData } = await supabase.from("stock").select("item_id, qty").in("item_id", itemIds);
  const stokPerItem = new Map<string, number>();
  for (const s of stockData ?? []) {
    stokPerItem.set(s.item_id, (stokPerItem.get(s.item_id) ?? 0) + s.qty);
  }

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

  const grup = new Map<string, PickingRow[]>();
  for (const r of rows) {
    const lantai = lantaiPerItem.get(r.item_id) ?? "Tanpa Lokasi";
    const arr = grup.get(lantai) ?? [];
    arr.push(r);
    grup.set(lantai, arr);
  }
  const daftarLantai = Array.from(grup.keys()).sort();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-2xl font-semibold text-slate-800">Picking</h1>
          <p className="text-sm text-slate-500">Antrian barang yang masih perlu diambil, dari semua request</p>
        </div>
        <Link href="/gudang/picking/scan" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
          📷 Scan Barcode
        </Link>
      </div>

      {berhasil && (
        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          ✓ Barang berhasil ditandai terambil.
        </div>
      )}

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      {daftarLantai.map((lantai) => {
        const itemsLantai = grup.get(lantai)!;
        return (
          <div key={lantai} className="mb-8">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-medium text-slate-700">
                {lantai} <span className="text-sm text-slate-400">({itemsLantai.length} item)</span>
              </h2>
              <a href={"/print/picking?lantai=" + encodeURIComponent(lantai)} target="_blank" className="rounded border border-blue-600 px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50">🖨 Print Lantai Ini</a>
            </div>
            <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">No Request</th>
                    <th className="px-4 py-3 font-medium">Cabang</th>
                    <th className="px-4 py-3 font-medium">Kode</th>
                    <th className="px-4 py-3 font-medium">Nama Barang</th>
                    <th className="px-4 py-3 font-medium">Kategori</th>
                    <th className="px-4 py-3 font-medium">Qty</th>
                    <th className="px-4 py-3 text-center font-medium">Sudah Diambil</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsLantai.map((r) => (
                    <tr key={r.id} className="border-t hover:bg-slate-50">
                      <td className="px-4 py-3">{r.requests?.no_request ?? "-"}</td>
                      <td className="px-4 py-3">{r.requests?.branches?.nama ?? "-"}</td>
                      <td className="px-4 py-3">{r.items?.kode ?? "-"}</td>
                      <td className="px-4 py-3">{r.items?.nama ?? "-"}</td>
                      <td className="px-4 py-3 text-slate-500">{r.items?.kategori ?? "-"}</td>
                      <td className="px-4 py-3">
                        {r.qty_diminta} {r.satuan}
                        <BadgeStokKurang diminta={r.qty_diminta} tersedia={stokPerItem.get(r.item_id) ?? 0} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CheckboxTerambil
                          itemId={r.id}
                          requestId={r.request_id}
                          qtyDiminta={r.qty_diminta}
                          sudahTerambil={false}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      {rows.length === 0 && (
        <p className="text-center text-slate-400">Tidak ada barang yang perlu diambil. 🎉</p>
      )}
    </div>
  );
}