type DeliveryRow = {
  id: string;
  tanggal: string;
  nama_pelanggan: string;
  no_do: string | null;
  supir: string | null;
  delivery_items: { qty: number; satuan: string }[];
};

export function BarangKeluarTable({ deliveries }: { deliveries: DeliveryRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-left text-slate-500">
          <tr>
            <th className="px-4 py-3 font-medium">Tanggal</th>
            <th className="px-4 py-3 font-medium">Nama Pelanggan</th>
            <th className="px-4 py-3 font-medium">No DO</th>
            <th className="px-4 py-3 font-medium">Supir</th>
            <th className="px-4 py-3 font-medium">Jumlah Item</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((d) => (
            <tr key={d.id} className="border-t hover:bg-slate-50">
              <td className="px-4 py-3 text-slate-500">{new Date(d.tanggal).toLocaleDateString("id-ID")}</td>
              <td className="px-4 py-3 font-medium">{d.nama_pelanggan}</td>
              <td className="px-4 py-3">{d.no_do ?? "-"}</td>
              <td className="px-4 py-3">{d.supir ?? "-"}</td>
              <td className="px-4 py-3">{d.delivery_items.length} jenis barang</td>
            </tr>
          ))}
          {deliveries.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-10 text-center text-slate-400">
                Tidak ada hasil.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}