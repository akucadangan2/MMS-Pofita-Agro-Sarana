"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function simpanPenyesuaianStok(formData: FormData) {
  const itemId = formData.get("itemId") as string;
  const locationId = formData.get("locationId") as string;
  const qtyFisik = Number(formData.get("qtyFisik"));
  const alasan = formData.get("alasan") as string;

  const supabase = await createClient();

  const { data: stockRow } = await supabase
    .from("stock")
    .select("id, qty")
    .eq("item_id", itemId)
    .eq("location_id", locationId)
    .maybeSingle();

  const qtySistem = stockRow?.qty ?? 0;
  const selisih = qtyFisik - qtySistem;

  if (stockRow) {
    await supabase.from("stock").update({ qty: qtyFisik }).eq("id", stockRow.id);
  } else {
    await supabase.from("stock").insert({ item_id: itemId, location_id: locationId, qty: qtyFisik });
  }

  await supabase.from("penyesuaian_stok").insert({
    item_id: itemId,
    location_id: locationId,
    qty_sistem: qtySistem,
    qty_fisik: qtyFisik,
    selisih,
    alasan: alasan || null,
  });

  const { data: item } = await supabase.from("items").select("satuan_dasar").eq("id", itemId).single();

  await supabase.from("stock_movements").insert({
    item_id: itemId,
    tipe: selisih >= 0 ? "masuk" : "keluar",
    qty: Math.abs(selisih),
    satuan: item?.satuan_dasar ?? "PCS",
    location_id: locationId,
    ref_tipe: "penyesuaian_stok",
  });

  revalidatePath("/gudang/stok");
  revalidatePath("/gudang/stok/penyesuaian");
  redirect("/gudang/stok/penyesuaian?berhasil=1");
}