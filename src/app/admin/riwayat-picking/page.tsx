import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { hapusRiwayatPicking } from "@/app/gudang/riwayat-picking/actions";

type MovementRow = {
  id: string;
  qty: number;
  ref_id: string | null;
  created_at: string;
};

type RequestInfo = {
  id: string;
  no_request: string;
  dibuat_at: string;
  branches: { nama: string } | null;
};

export default async function RiwayatPickingAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ berhasil?: string; error?: string }>;
}) {
  const params = await searchParams;
  const berhasil = params.berhasil === "1";
  const pesanError = params.error;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let role = "admin";
  if (user) {
    const { data: userRow } = await supabase.from("users").select("role").eq("auth_id", user.id).maybeSingle();
    if (userRow?.role) role = userRow.role;
  }
  const isSuperAdmin = role === "super_admin";

  const { data: movementsData, error } = await supabase
    .from("stock_movements")
    .select("id, qty, ref_id, created_at")
    .eq("tipe", "keluar")
    .eq("ref_tipe", "request")
    .order("created_at", { ascending: false })
    .limit(1000);

  const movements = (movementsData as MovementRow[]) ?? [];
  const requestIds = Array.from(new Set(movements.map((m) => m.ref_id).filter(Boolean))) as string[];

  let requestsInfo: RequestInfo[] = [];
  if (requestIds.length > 0) {
    const { data } = await supabase
      .from("requests")
      .select("id, no_request, dibuat_at, branches(nama)")
      .in("id", requestIds);
    requestsInfo = (data as unknown as RequestInfo[]) ?? [];
  }
  const petaRequest = new Map(requestsInfo.map((r) => [r.id, r]));

  const rekapMap = new Map<string, { totalItem: number; totalQty: number; waktuTerakhir: string }>();
  for (const m of movements) {
    if (!m.ref_id) continue;
    const existing = rekapMap.get(m.ref_id) ?? { totalItem: 0, totalQty: 0, waktuTerakhir: m.created_at };
    existing.totalItem += 1;
    existing.totalQty += m.qty;
    if (m.created_at > existing.waktuTerakhir) existing.waktuTerakhir = m.created_at;
    rekapMap.set(m.ref_id, existing);
  }

  const daftar = Array.from(rekapMap.entries())
    .map(([requestId, rekap]) => ({
      requestId,
      info: petaRequest.get(requestId),
      ...rekap,
    }))
    .sort((a, b) => new Date(b.waktuTerakhir).getTime() - new Date(a.waktuTerakhir).getTime());

  return (
    <div>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Riwayat Picking</h1>
      <p className="mb-4 text-sm text-slate-500">Rekap pengambilan barang per request</p>

      {berhasil && (
        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          ✓ Riwayat berhasil dihapus.
        </div>
      )}
      {pesanError && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{pesanError}</div>
      )}
      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">No Request</th>
              <th className="px-4 py-3 font-medium">Cabang</th>
              <th className="px-4 py-3 font-medium">Tanggal</th>
              <th className="px-4 py-3 font-medium">Total Item</th>
              <th className="px-4 py-3 font-medium">Total Qty Diambil</th>
              {isSuperAdmin && <th className="px-4 py-3 font-medium">Aksi</th>}
            </tr>
          </thead>
          <tbody>
            {daftar.map((d) => (
              <tr key={d.requestId} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3">
                  <Link href={`/gudang/request/${d.requestId}`} className="font-medium text-blue-600 hover:underline">
                    {d.info?.no_request ?? "-"}
                  </Link>
                </td>
                <td className="px-4 py-3">{d.info?.branches?.nama ?? "-"}</td>
                <td className="px-4 py-3 text-slate-500">
                  {d.info ? new Date(d.info.dibuat_at).toLocaleString("id-ID") : "-"}
                </td>
                <td className="px-4 py-3">{d.totalItem} item</td>
                <td className="px-4 py-3 font-medium">{d.totalQty}</td>
                {isSuperAdmin && (
                  <td className="px-4 py-3">
                    <form action={hapusRiwayatPicking}>
                      <input type="hidden" name="requestId" value={d.requestId} />
                      <button type="submit" className="text-xs text-red-600 hover:underline">
                        Hapus
                      </button>
                    </form>
                  </td>
                )}
              </tr>
            ))}
            {daftar.length === 0 && (
              <tr>
                <td colSpan={isSuperAdmin ? 6 : 5} className="px-4 py-10 text-center text-slate-400">
                  Belum ada riwayat picking.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}