import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { RequestMasukTable } from "@/components/tables/RequestMasukTable";
import { Pagination } from "@/components/ui/Pagination";
import { PageSizeSelector } from "@/components/ui/PageSizeSelector";
import type { SupabaseClient } from "@supabase/supabase-js";

type RequestRow = {
  id: string;
  no_request: string;
  status: string;
  dibuat_at: string;
  branches: { nama: string } | null;
  request_items: { item_id: string; qty_diminta: number }[];
};

const DAFTAR_STATUS = [
  { value: "semua", label: "Semua" },
  { value: "baru", label: "Baru" },
  { value: "sedang_diambil", label: "Sedang Diambil" },
  { value: "selesai", label: "Selesai" },
];

async function ambilJumlah(supabase: SupabaseClient, status: string, q: string) {
  let query = supabase.from("requests").select("*", { count: "exact", head: true });
  if (status !== "semua") query = query.eq("status", status);
  if (q) query = query.ilike("no_request", `%${q}%`);
  const { count } = await query;
  return count ?? 0;
}

export default async function RequestMasukPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; halaman?: string; ukuran?: string; status?: string }>;
}) {
  const params = await searchParams;
  const q = params.q ?? "";
  const status = params.status ?? "semua";
  const ukuran = params.ukuran ?? "20";
  const halaman = Math.max(1, Number(params.halaman) || 1);
  const pageSize = ukuran === "all" ? null : Number(ukuran) || 20;

  const supabase = await createClient();

  const jumlahPerStatus = await Promise.all(
    DAFTAR_STATUS.map((s) => ambilJumlah(supabase, s.value, q))
  );

  let query = supabase
    .from("requests")
    .select("id, no_request, status, dibuat_at, branches(nama), request_items(item_id, qty_diminta)", {
      count: "exact",
    })
    .order("dibuat_at", { ascending: false });

  if (status !== "semua") query = query.eq("status", status);
  if (q) query = query.ilike("no_request", `%${q}%`);
  if (pageSize) {
    const dari = (halaman - 1) * pageSize;
    query = query.range(dari, dari + pageSize - 1);
  }

  const { data, count, error } = await query;
  const requests = (data as unknown as RequestRow[]) ?? [];
  const totalHalaman = pageSize ? Math.max(1, Math.ceil((count ?? 0) / pageSize)) : 1;

  function buatLinkStatus(nilaiStatus: string) {
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (ukuran !== "20") p.set("ukuran", ukuran);
    p.set("status", nilaiStatus);
    return `/gudang/request?${p.toString()}`;
  }

  const semuaItemId = Array.from(new Set(requests.flatMap((r) => r.request_items.map((i) => i.item_id))));
  const { data: stockData } = await supabase.from("stock").select("item_id, qty").in("item_id", semuaItemId);
  const stokPerItem = new Map<string, number>();
  for (const s of stockData ?? []) {
    stokPerItem.set(s.item_id, (stokPerItem.get(s.item_id) ?? 0) + s.qty);
  }
  const requestKurangStok = new Set(
    requests
      .filter((r) => r.request_items.some((i) => (stokPerItem.get(i.item_id) ?? 0) < i.qty_diminta))
      .map((r) => r.id)
  );

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-2xl font-semibold text-slate-800">Request Masuk</h1>
          <p className="text-sm text-slate-500">Daftar permintaan barang dari semua cabang</p>
        </div>
        <Link href="/gudang/request/tambah" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
          + Buat Request Manual
        </Link>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {DAFTAR_STATUS.map((s, i) => {
          const aktif = status === s.value;
          return (
            <Link
              key={s.value}
              href={buatLinkStatus(s.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                aktif ? "bg-blue-600 text-white" : "bg-white text-slate-600 hover:bg-slate-50"
              } border`}
            >
              {s.label} ({jumlahPerStatus[i]})
            </Link>
          );
        })}
      </div>

      <div className="mb-4 flex items-center gap-3">
        <form method="GET" className="flex-1">
          <input type="hidden" name="ukuran" value={ukuran} />
          <input type="hidden" name="status" value={status} />
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Cari no. request..."
            className="w-full max-w-sm rounded-lg border px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </form>
        <PageSizeSelector ukuran={ukuran} />
      </div>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <RequestMasukTable requests={requests} requestKurangStok={requestKurangStok} />
      

      {pageSize && (
        <Pagination halamanSekarang={halaman} totalHalaman={totalHalaman} q={q} ukuran={ukuran} basePath="/gudang/request" />
      )}
    </div>
  );
}