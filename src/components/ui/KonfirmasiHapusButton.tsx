"use client";

import { useState } from "react";

export function KonfirmasiHapusButton({
  formAction,
  hiddenFields,
  namaBarang,
  label = "Hapus",
}: {
  formAction: (formData: FormData) => void;
  hiddenFields: Record<string, string>;
  namaBarang: string;
  label?: string;
}) {
  const [tampilkanKonfirmasi, setTampilkanKonfirmasi] = useState(false);

  if (!tampilkanKonfirmasi) {
    return (
      <button
        type="button"
        onClick={() => setTampilkanKonfirmasi(true)}
        className="text-xs text-red-600 hover:underline"
      >
        {label}
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
        <h3 className="mb-2 text-base font-semibold text-slate-800">Yakin mau hapus?</h3>
        <p className="mb-4 text-sm text-slate-600">
          <span className="font-medium">{namaBarang}</span> akan dihapus. Tindakan ini tidak bisa dibatalkan.
        </p>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => setTampilkanKonfirmasi(false)}
            className="rounded-lg border px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
          >
            Batal
          </button>
          <form action={formAction}>
            {Object.entries(hiddenFields).map(([key, value]) => (
              <input key={key} type="hidden" name={key} value={value} />
            ))}
            <button type="submit" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
              Ya, Hapus
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}