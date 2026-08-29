"use client";

import { useState, useTransition } from "react";
import { tandaiTerambil, batalkanPengambilan } from "@/app/gudang/request/actions";

export function CheckboxTerambil({
  itemId,
  requestId,
  qtyDiminta,
  sudahTerambil,
}: {
  itemId: string;
  requestId: string;
  qtyDiminta: number;
  sudahTerambil: boolean;
}) {
  const [checked, setChecked] = useState(sudahTerambil);
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

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      disabled={isPending}
      className="h-5 w-5 cursor-pointer rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
    />
  );
}