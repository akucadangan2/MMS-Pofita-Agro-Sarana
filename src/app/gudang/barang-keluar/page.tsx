import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { BarangKeluarTable } from "@/components/tables/BarangKeluarTable";
import { Pagination } from "@/components/ui/Pagination";
import { PageSizeSelector } from "@/components/ui/PageSizeSelector";

type DeliveryRow = {
  id: string;
  tanggal: string;
  nama_pelanggan: string;
  no_do: string | null;
  supir: string | null;
  delivery_items: { qty: number; satuan: string }[];
};

export default async function BarangKeluarPage({
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
    .from("customer_deliveries")
    .select("id, tanggal, nama_pelanggan, no_do, supir, delivery_items(qty, satuan)", { count: "exact" })
    .order("tanggal", { ascending: false });

  if (q) query = query.or(`nama_pelanggan.ilike.%${q}%,no_do.ilike.%${q}%`);
  if (pageSize) {
    const dari = (halaman - 1) * pageSize;
    query = query.range(dari, dari + pageSize - 1);
  }

  const { data, count, error } = await query;
  const deliveries = (data as unknown as DeliveryRow[]) ?? [];
  const totalHalaman = pageSize ? Math.max(1, Math.ceil((count ?? 0) / pageSize)) : 1;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-2xl font-semibold text-slate-800">Barang Keluar Customer</h1>
          <p className="text-sm text-slate-500">Pengganti pencatatan Excel — otomatis potong stok</p>
        </div>
        <Link
          href="/gudang/barang-keluar/tambah"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
        >
          + Catat Barang Keluar
        </Link>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <form method="GET" className="flex-1">
          <input type="hidden" name="ukuran" value={ukuran} />
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Cari nama pelanggan atau no DO..."
            className="w-full max-w-sm rounded-lg border px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </form>
        <PageSizeSelector ukuran={ukuran} />
      </div>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <BarangKeluarTable deliveries={deliveries} />

      {pageSize && (
        <Pagination halamanSekarang={halaman} totalHalaman={totalHalaman} q={q} ukuran={ukuran} basePath="/gudang/barang-keluar" />
      )}
    </div>
  );
}