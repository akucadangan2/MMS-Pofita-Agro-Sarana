"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function simpanDoBarangMasuk(formData: FormData) {
  const tanggal = formData.get("tanggal") as string;
  const noDo = formData.get("noDo") as string;
  const ekspedisi = formData.get("ekspedisi") as string;
  const supir = formData.get("supir") as string;
  const noPlat = formData.get("noPlat") as string;
  const noContainer = formData.get("noContainer") as string;
  const keterangan = formData.get("keterangan") as string;

  const itemIds = formData.getAll("itemId") as string[];
  const locationIds = formData.getAll("locationId") as string[];
  const qtys = formData.getAll("qty") as string[];

  const supabase = await createClient();

  const { data: doHeader, error: errDo } = await supabase
    .from("barang_masuk_do")
    .insert({
      tanggal,
      no_do: noDo || null,
      ekspedisi: ekspedisi || null,
      supir: supir || null,
      no_plat: noPlat || null,
      no_container: noContainer || null,
      keterangan: keterangan || null,
    })
    .select()
    .single();

  if (errDo || !doHeader) {
    redirect(`/gudang/barang-masuk/do?error=${encodeURIComponent(errDo?.message ?? "Gagal menyimpan DO")}`);
  }

  for (let i = 0; i < itemIds.length; i++) {
    const itemId = itemIds[i];
    const locationId = locationIds[i];
    const qty = Number(qtys[i]);

    if (!itemId || !locationId || !qty || qty <= 0) continue;

    const { data: item } = await supabase.from("items").select("satuan_dasar").eq("id", itemId).single();

    await supabase.from("barang_masuk_do_items").insert({
      do_id: doHeader.id,
      item_id: itemId,
      location_id: locationId,
      qty,
      satuan: item?.satuan_dasar ?? "PCS",
    });

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
      ref_id: doHeader.id,
      ref_tipe: "barang_masuk_do",
    });
  }

  revalidatePath("/gudang/barang-masuk");
  revalidatePath("/gudang/barang-masuk/do");
  redirect("/gudang/barang-masuk/do?berhasil=1");
}