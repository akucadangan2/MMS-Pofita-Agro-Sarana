"use client";

import { useState } from "react";

type ItemRow = {
  id: string;
  item_id: string;
  qty_diminta: number;
  qty_terambil: number;
  satuan: string;
  status: string;
  items: { kode: string; nama: string } | null;
};

type LantaiGroup = {
  lantai: string;
  items: ItemRow[];
};

export function DetailRequestLantaiTabs({
  requestId,
  groups,
  onTandaiTerambil,
  onBatalkan,
}: {
  requestId: string;
  groups: LantaiGroup[];
  onTandaiTerambil: (formData: FormData) => void;
  onBatalkan: (formData: FormData) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const aktif = groups[activeIndex];

  if (!aktif) return null;

  const linkPrint = "/print/request/" + requestId + "?lantai=" + encodeURIComponent(aktif.lantai);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {groups.map((g, i) => (
          <button
            key={g.lantai}
            onClick={() => setActiveIndex(i)}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              i === activeIndex ? "bg-blue-600 text-white" : "border bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {g.lantai} ({g.items.length} Barang)
          </button>
        ))}
      </div>

      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-medium text-slate-700">{aktif.lantai}</h2>
        <a href={linkPrint} target="_blank" className="rounded border border-blue-600 px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50">
          Print List {aktif.lantai}
        </a>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Kode</th>
              <th className="px-4 py-3 font-medium">Nama Barang</th>
              <th className="px-4 py-3 font-medium">Diminta</th>
              <th className="px-4 py-3 font-medium">Terambil</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {aktif.items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-3">{item.items?.kode ?? "-"}</td>
                <td className="px-4 py-3">{item.items?.nama ?? "(barang tidak ditemukan)"}</td>
                <td className="px-4 py-3">{item.qty_diminta} {item.satuan}</td>
                <td className="px-4 py-3">{item.qty_terambil} {item.satuan}</td>
                <td className="px-4 py-3">{item.status}</td>
                <td className="px-4 py-3">
                  {item.status === "terambil" ? (
                    <form action={onBatalkan}>
                      <input type="hidden" name="itemId" value={item.id} />
                      <input type="hidden" name="requestId" value={requestId} />
                      <button type="submit" className="rounded border border-red-600 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50">
                        Batalkan
                      </button>
                    </form>
                  ) : (
                    <form action={onTandaiTerambil}>
                      <input type="hidden" name="itemId" value={item.id} />
                      <input type="hidden" name="requestId" value={requestId} />
                      <input type="hidden" name="qtyDiminta" value={item.qty_diminta} />
                      <button type="submit" className="rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700">
                        Tandai Terambil
                      </button>
                    </form>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {activeIndex < groups.length - 1 && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setActiveIndex(activeIndex + 1)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Lanjut ke {groups[activeIndex + 1].lantai} →
          </button>
        </div>
      )}
    </div>
  );
}