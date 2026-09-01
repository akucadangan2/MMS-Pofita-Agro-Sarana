"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function catatBarangMasuk(formData: FormData) {
  const itemId = formData.get("itemId") as string;
  const locationId = formData.get("locationId") as string;
  const qty = Number(formData.get("qty"));

  const supabase = await createClient();

  const { data: item } = await supabase.from("items").select("satuan_dasar").eq("id", itemId).single();

  const { data: existingStock } = await supabase
    .from("stock")
    .select("id, qty")
    .eq("item_id", itemId)
    .eq("location_id", locationId)
    .maybeSingle();

  if (existingStock) {
    await supabase.from("stock").update({ qty: existingStock.qty + qty }).eq("id", existingStock.id);
  } else {
    await supabase.from("stock").insert({ item_id: itemId, location_id: locationId, qty });
  }

  await supabase.from("stock_movements").insert({
    item_id: itemId,
    tipe: "masuk",
    qty,
    satuan: item?.satuan_dasar ?? "PCS",
    location_id: locationId,
    ref_tipe: "barang_masuk",
  });

  revalidatePath("/gudang/barang-masuk");
}

export async function updateBarangMasuk(formData: FormData) {
  const movementId = formData.get("movementId") as string;
  const itemId = formData.get("itemId") as string;
  const locationIdLama = formData.get("locationIdLama") as string;
  const locationIdBaru = formData.get("locationIdBaru") as string;
  const qtyLama = Number(formData.get("qtyLama"));
  const qtyBaru = Number(formData.get("qtyBaru"));

  const supabase = await createClient();

  // 1. Balikin dulu efek qty lama dari lokasi lama
  const { data: stockLama } = await supabase
    .from("stock")
    .select("id, qty")
    .eq("item_id", itemId)
    .eq("location_id", locationIdLama)
    .maybeSingle();

  if (stockLama) {
    await supabase.from("stock").update({ qty: stockLama.qty - qtyLama }).eq("id", stockLama.id);
  }

  // 2. Terapkan qty baru ke lokasi baru
  const { data: stockBaru } = await supabase
    .from("stock")
    .select("id, qty")
    .eq("item_id", itemId)
    .eq("location_id", locationIdBaru)
    .maybeSingle();

  if (stockBaru) {
    await supabase.from("stock").update({ qty: stockBaru.qty + qtyBaru }).eq("id", stockBaru.id);
  } else {
    await supabase.from("stock").insert({ item_id: itemId, location_id: locationIdBaru, qty: qtyBaru });
  }

  // 3. Update record movement-nya
  await supabase
    .from("stock_movements")
    .update({ qty: qtyBaru, location_id: locationIdBaru })
    .eq("id", movementId);

  revalidatePath("/gudang/barang-masuk");
  redirect("/gudang/barang-masuk?berhasil=1");
}

export async function hapusBarangMasuk(formData: FormData) {
  const movementId = formData.get("movementId") as string;
  const itemId = formData.get("itemId") as string;
  const locationId = formData.get("locationId") as string;
  const qty = Number(formData.get("qty"));

  const supabase = await createClient();

  if (locationId) {
    const { data: stockRow } = await supabase
      .from("stock")
      .select("id, qty")
      .eq("item_id", itemId)
      .eq("location_id", locationId)
      .maybeSingle();

    if (stockRow) {
      await supabase.from("stock").update({ qty: stockRow.qty - qty }).eq("id", stockRow.id);
    }
  }

  await supabase.from("stock_movements").delete().eq("id", movementId);

  revalidatePath("/gudang/barang-masuk");
}