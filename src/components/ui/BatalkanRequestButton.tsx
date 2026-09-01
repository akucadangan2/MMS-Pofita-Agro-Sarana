"use client";

import { useState } from "react";
import { batalkanSeluruhRequest } from "@/app/gudang/request/actions";

export function BatalkanRequestButton({ requestId }: { requestId: string }) {
  const [tampilkanForm, setTampilkanForm] = useState(false);

  if (!tampilkanForm) {
    return (
      <button
        onClick={() => setTampilkanForm(true)}
        className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
      >
        Batalkan Seluruh Request
      </button>
    );
  }

  return (
    <form action={batalkanSeluruhRequest} className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3">
      <input type="hidden" name="requestId" value={requestId} />
      <input
        type="text"
        name="alasan"
        placeholder="Alasan pembatalan (opsional)"
        className="rounded border px-2 py-1 text-sm"
      />
      <button type="submit" className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700">
        Ya, Batalkan
      </button>
      <button type="button" onClick={() => setTampilkanForm(false)} className="text-sm text-slate-600 hover:underline">
        Batal
      </button>
    </form>
  );
}