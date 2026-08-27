import { createClient } from "@/lib/supabase/server";
import { StokTable } from "@/components/tables/StokTable";
import { Pagination } from "@/components/ui/Pagination";
import { PageSizeSelector } from "@/components/ui/PageSizeSelector";

type StockRow = {
  id: string;
  qty: number;
  items: { kode: string; nama: string; satuan_dasar: string } | null;
  locations: { lantai: string; area: string | null; rak: string | null } | null;
};

export default async function StokPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; halaman?: string; ukuran?: string }>;
}) {
  const params = await searchParams;
  const q = params.q ?? "";
  const ukuran = params.ukuran ?? "20";
  const halaman = Math.max(1, Number(params.halaman) || 1);
  const pageSize = ukuran === "all" ? null : Number(ukuran) || 20;

  const supabase = await createClient();

  let query = supabase
    .from("stock")
    .select("id, qty, items!inner(kode, nama, satuan_dasar), locations(lantai, area, rak)", {
      count: "exact",
    })
    .order("qty", { ascending: false });

  if (q) query = query.or(`kode.ilike.%${q}%,nama.ilike.%${q}%`, { foreignTable: "items" });
  if (pageSize) {
    const dari = (halaman - 1) * pageSize;
    query = query.range(dari, dari + pageSize - 1);
  }

  const { data, count, error } = await query;
  const stock = (data as unknown as StockRow[]) ?? [];
  const totalHalaman = pageSize ? Math.max(1, Math.ceil((count ?? 0) / pageSize)) : 1;

  return (
    <div>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Stok</h1>
      <p className="mb-4 text-sm text-slate-500">Stok barang di semua lokasi gudang</p>

      <div className="mb-4 flex items-center gap-3">
        <form method="GET" className="flex-1">
          <input type="hidden" name="ukuran" value={ukuran} />
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Cari kode atau nama barang..."
            className="w-full max-w-sm rounded-lg border px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </form>
        <PageSizeSelector ukuran={ukuran} />
      </div>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <StokTable stock={stock} />

      {pageSize && (
        <Pagination halamanSekarang={halaman} totalHalaman={totalHalaman} q={q} ukuran={ukuran} basePath="/gudang/stok" />
      )}
    </div>
  );
}