import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";

type RequestRow = {
  id: string;
  no_request: string;
  status: string;
  dibuat_at: string;
  branches: { nama: string } | null;
  request_items: { qty_diminta: number }[];
};

export function RequestMasukTable({
  requests,
  requestKurangStok,
}: {
  requests: RequestRow[];
  requestKurangStok?: Set<string>;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-left text-slate-500">
          <tr>
            <th className="px-4 py-3 font-medium">No Request</th>
            <th className="px-4 py-3 font-medium">Cabang</th>
            <th className="px-4 py-3 font-medium">Tanggal</th>
            <th className="px-4 py-3 font-medium">Total Barang</th>
            <th className="px-4 py-3 font-medium">Total Qty</th>
            <th className="px-4 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((r) => {
            const totalBarang = r.request_items.length;
            const totalQty = r.request_items.reduce((s, i) => s + i.qty_diminta, 0);
            const kurangStok = requestKurangStok?.has(r.id);
            return (
              <tr key={r.id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3">
                  <Link href={`/gudang/request/${r.id}`} className="font-medium text-blue-600 hover:underline">
                    {r.no_request}
                  </Link>
                  {kurangStok && (
                    <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                      Stok kurang
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">{r.branches?.nama ?? "-"}</td>
                <td className="px-4 py-3 text-slate-500">{new Date(r.dibuat_at).toLocaleString("id-ID")}</td>
                <td className="px-4 py-3">{totalBarang}</td>
                <td className="px-4 py-3">{totalQty}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={r.status} />
                </td>
              </tr>
            );
          })}
          {requests.length === 0 && (
            <tr>
              <td colSpan={6} className="px-4 py-10 text-center text-slate-400">
                Tidak ada hasil.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}