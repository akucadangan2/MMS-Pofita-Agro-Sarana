"use client";

import { useState, useTransition } from "react";
import { tandaiTerambil, batalkanPengambilan, batalkanItemRequest } from "@/app/gudang/request/actions";

export function CheckboxTerambil({
  itemId,
  requestId,
  qtyDiminta,
  sudahTerambil,
  sudahDibatalkan,
}: {
  itemId: string;
  requestId: string;
  qtyDiminta: number;
  sudahTerambil: boolean;
  sudahDibatalkan?: boolean;
}) {
  const [checked, setChecked] = useState(sudahTerambil);
  const [dibatalkan, setDibatalkan] = useState(sudahDibatalkan ?? false);
  const [tampilkanForm, setTampilkanForm] = useState(false);
  const [alasan, setAlasan] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const dicentang = e.target.checked;
    setChecked(dicentang);

    startTransition(async () => {
      const formData = new FormData();
      formData.set("itemId", itemId);
      formData.set("requestId", requestId);

      if (dicentang) {
        formData.set("qtyDiminta", String(qtyDiminta));
        await tandaiTerambil(formData);
      } else {
        await batalkanPengambilan(formData);
      }
    });
  }

  function submitBatalkan() {
    startTransition(async () => {
      const formData = new FormData();
      formData.set("itemId", itemId);
      formData.set("requestId", requestId);
      formData.set("alasan", alasan);
      await batalkanItemRequest(formData);
      setDibatalkan(true);
      setTampilkanForm(false);
    });
  }

  if (dibatalkan) {
    return <span className="text-xs font-medium text-slate-400">Dibatalkan</span>;
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={isPending}
        className="h-5 w-5 cursor-pointer rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
      />
      {!checked && !tampilkanForm && (
        <button
          onClick={() => setTampilkanForm(true)}
          disabled={isPending}
          className="text-xs text-red-600 hover:underline disabled:opacity-50"
        >
          Batalkan
        </button>
      )}
      {tampilkanForm && (
        <div className="absolute z-10 mt-2 w-56 rounded-lg border bg-white p-3 shadow-lg">
          <p className="mb-2 text-xs text-slate-600">Alasan pembatalan (opsional):</p>
          <input
            type="text"
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            placeholder="Contoh: Stok kosong"
            className="mb-2 w-full rounded border px-2 py-1 text-xs"
          />
          <div className="flex gap-2">
            <button
              onClick={submitBatalkan}
              disabled={isPending}
              className="rounded bg-red-600 px-2 py-1 text-xs font-medium text-white hover:bg-red-700"
            >
              Konfirmasi Batal
            </button>
            <button
              onClick={() => setTampilkanForm(false)}
              className="rounded border px-2 py-1 text-xs text-slate-600 hover:bg-slate-50"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}