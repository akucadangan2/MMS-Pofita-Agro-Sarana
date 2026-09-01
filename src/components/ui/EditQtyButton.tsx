"use client";

import { useState } from "react";
import { ubahQtyRequestItem } from "@/app/gudang/request/actions";

export function EditQtyButton({
  itemId,
  requestId,
  qtySekarang,
  satuan,
}: {
  itemId: string;
  requestId: string;
  qtySekarang: number;
  satuan: string;
}) {
  const [editing, setEditing] = useState(false);

  if (!editing) {
    return (
      <button onClick={() => setEditing(true)} className="text-xs text-blue-600 hover:underline">
        Edit Qty
      </button>
    );
  }

  return (
    <form action={ubahQtyRequestItem} className="flex items-center gap-1">
      <input type="hidden" name="itemId" value={itemId} />
      <input type="hidden" name="requestId" value={requestId} />
      <input
        type="number"
        name="qtyBaru"
        defaultValue={qtySekarang}
        min={1}
        step="any"
        autoFocus
        className="w-20 rounded border px-1 py-0.5 text-xs"
      />
      <span className="text-xs text-slate-400">{satuan}</span>
      <button type="submit" className="rounded bg-blue-600 px-2 py-0.5 text-xs text-white hover:bg-blue-700">
        Simpan
      </button>
      <button type="button" onClick={() => setEditing(false)} className="text-xs text-slate-500 hover:underline">
        Batal
      </button>
    </form>
  );
}