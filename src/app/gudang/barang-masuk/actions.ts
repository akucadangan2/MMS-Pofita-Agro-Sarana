"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function catatBarangMasuk(formData: FormData) {
  const itemId = formData.get("itemId") as string;
  const locationId = formData.get("locationId") as string;
  const qty = Number(formData.get("qty"));

  const supabase = await createClient();

  const { data: existing } = await supabase
    .from("stock")
    .select("id, qty")
    .eq("item_id", itemId)
    .eq("location_id", locationId)
    .maybeSingle();

  if (existing) {
    await supabase.from("stock").update({ qty: existing.qty + qty }).eq("id", existing.id);
  } else {
    await supabase.from("stock").insert({ item_id: itemId, location_id: locationId, qty });
  }

  const { data: barang } = await supabase
    .from("items")
    .select("satuan_dasar")
    .eq("id", itemId)
    .single();

  await supabase.from("stock_movements").insert({
    item_id: itemId,
    tipe: "masuk",
    qty,
    satuan: barang?.satuan_dasar ?? "",
  });

  revalidatePath("/gudang/barang-masuk");
  revalidatePath("/admin/barang");
}