import { konversiKeSemuaSatuan } from "@/lib/konversiSatuan";

type StockRow = {
  id: string;
  qty: number;
  items: { id: string; kode: string; nama: string; satuan_dasar: string } | null;
  locations: { lantai: string; area: string | null; rak: string | null } | null;
};

type SatuanTambahanRow = {
  item_id: string;
  nama_satuan: string;
  faktor_konversi: number;
};

export function StokTable({
  stock,
  satuanPerItem,
}: {
  stock: StockRow[];
  satuanPerItem: Map<string, SatuanTambahanRow[]>;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-left text-slate-500">
          <tr>
            <th className="px-4 py-3 font-medium">Kode</th>
            <th className="px-4 py-3 font-medium">Nama Barang</th>
            <th className="px-4 py-3 font-medium">Lokasi</th>
            <th className="px-4 py-3 font-medium">Qty ({"satuan dasar"})</th>
            <th className="px-4 py-3 font-medium">Konversi</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((s) => {
            const satuanDasar = s.items?.satuan_dasar ?? "";
            const daftarSatuan = s.items?.id ? satuanPerItem.get(s.items.id) ?? [] : [];
            const punyaKonversi = daftarSatuan.length > 0;
            const hasilKonversi = punyaKonversi
              ? konversiKeSemuaSatuan(s.qty, satuanDasar, daftarSatuan)
              : null;

            return (
              <tr key={s.id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3">{s.items?.kode ?? "-"}</td>
                <td className="px-4 py-3">{s.items?.nama ?? "-"}</td>
                <td className="px-4 py-3 text-slate-500">
                  {s.locations?.lantai ?? "-"}
                  {s.locations?.area ? ` / ${s.locations.area}` : ""}
                  {s.locations?.rak ? ` / ${s.locations.rak}` : ""}
                </td>
                <td className="px-4 py-3 font-medium">
                  {s.qty} {satuanDasar}
                </td>
                <td className="px-4 py-3 text-slate-600">
                  {hasilKonversi ?? <span className="text-slate-300">-</span>}
                </td>
              </tr>
            );
          })}
          {stock.length === 0 && (
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