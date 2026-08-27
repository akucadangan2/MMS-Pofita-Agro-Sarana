type StockRow = {
  id: string;
  qty: number;
  items: { kode: string; nama: string; satuan_dasar: string } | null;
  locations: { lantai: string; area: string | null; rak: string | null } | null;
};

export function StokTable({ stock }: { stock: StockRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-left text-slate-500">
          <tr>
            <th className="px-4 py-3 font-medium">Kode</th>
            <th className="px-4 py-3 font-medium">Nama Barang</th>
            <th className="px-4 py-3 font-medium">Lokasi</th>
            <th className="px-4 py-3 font-medium">Qty</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((s) => (
            <tr key={s.id} className="border-t hover:bg-slate-50">
              <td className="px-4 py-3">{s.items?.kode ?? "-"}</td>
              <td className="px-4 py-3">{s.items?.nama ?? "-"}</td>
              <td className="px-4 py-3 text-slate-500">
                {s.locations?.lantai ?? "-"}
                {s.locations?.area ? ` / ${s.locations.area}` : ""}
                {s.locations?.rak ? ` / ${s.locations.rak}` : ""}
              </td>
              <td className="px-4 py-3 font-medium">
                {s.qty} {s.items?.satuan_dasar ?? ""}
              </td>
            </tr>
          ))}
          {stock.length === 0 && (
            <tr>
              <td colSpan={4} className="px-4 py-10 text-center text-slate-400">
                Tidak ada hasil.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}