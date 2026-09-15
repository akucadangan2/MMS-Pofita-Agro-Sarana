import { createClient } from "@/lib/supabase/server";
import { CheckboxTerambil } from "@/components/ui/CheckboxTerambil";

type PendingRow = {
  id: string;
  request_id: string;
  qty_diminta: number;
  satuan: string;
  catatan: string | null;
  items: { kode: string; nama: string } | null;
  requests: { no_request: string; branches: { nama: string } | null } | null;
};

export default async function BarangPendingPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("request_items")
    .select(
      "id, request_id, qty_diminta, satuan, catatan, items(kode, nama), requests(no_request, branches(nama))"
    )
    .eq("status", "pending");

  const items = (data as unknown as PendingRow[]) ?? [];

  return (
    <div>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Barang Pending</h1>
      <p className="mb-6 text-sm text-slate-500">Barang yang ditunda pengambilannya (misal karena muatan penuh)</p>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">No Request</th>
              <th className="px-4 py-3 font-medium">Cabang</th>
              <th className="px-4 py-3 font-medium">Barang</th>
              <th className="px-4 py-3 font-medium">Qty</th>
              <th className="px-4 py-3 font-medium">Alasan Pending</th>
              <th className="px-4 py-3 text-center font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3">{item.requests?.no_request ?? "-"}</td>
                <td className="px-4 py-3">{item.requests?.branches?.nama ?? "-"}</td>
                <td className="px-4 py-3">{item.items?.nama ?? "-"}</td>
                <td className="px-4 py-3">
                  {item.qty_diminta} {item.satuan}
                </td>
                <td className="px-4 py-3 text-slate-500 italic">{item.catatan ?? "-"}</td>
                <td className="px-4 py-3 text-center">
                  <CheckboxTerambil
                    itemId={item.id}
                    requestId={item.request_id}
                    qtyDiminta={item.qty_diminta}
                    sudahTerambil={false}
                  />
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-slate-400">
                  Tidak ada barang pending.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}