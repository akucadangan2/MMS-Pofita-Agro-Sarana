"use client";

import { useState } from "react";
import { CheckboxTerambil } from "@/components/ui/CheckboxTerambil";
import { EditQtyButton } from "@/components/ui/EditQtyButton";

type ItemRow = {
  id: string;
  item_id: string;
  qty_diminta: number;
  qty_terambil: number;
  satuan: string;
  status: string;
  keterangan: string | null;
  items: { kode: string; nama: string } | null;
};

type LantaiGroup = {
  lantai: string;
  items: ItemRow[];
};

export function DetailRequestLantaiTabs({
  requestId,
  groups,
}: {
  requestId: string;
  groups: LantaiGroup[];
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
              <th className="px-4 py-3 font-medium">Aksi Diminta</th>
              <th className="px-4 py-3 font-medium">Terambil</th>
              <th className="px-4 py-3 text-center font-medium">Sudah Diambil</th>
            </tr>
          </thead>
          <tbody>
            {aktif.items.map((item) => (
              <tr key={item.id} className="border-t">
              <td className="px-4 py-3">{item.items?.kode ?? "-"}</td>
              <td className="px-4 py-3">
                {item.items?.nama ?? "(barang tidak ditemukan)"}
                {item.keterangan && (
                  <p className="mt-0.5 text-xs italic text-amber-600">📝 {item.keterangan}</p>
                )}
              </td>
                <td className="px-4 py-3">{item.qty_diminta} {item.satuan}</td>
                <td className="px-4 py-3">
                  {item.status !== "terambil" && item.status !== "dibatalkan" && (
                    <EditQtyButton
                      itemId={item.id}
                      requestId={requestId}
                      qtySekarang={item.qty_diminta}
                      satuan={item.satuan}
                    />
                  )}
                </td>
                <td className="px-4 py-3">{item.qty_terambil} {item.satuan}</td>
                <td className="px-4 py-3 text-center">
                  <CheckboxTerambil
                    itemId={item.id}
                    requestId={requestId}
                    qtyDiminta={item.qty_diminta}
                    sudahTerambil={item.status === "terambil"}
                    sudahDibatalkan={item.status === "dibatalkan"}
                  />
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