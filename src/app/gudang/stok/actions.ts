"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function gabungkanStokBarang(
  itemId: string,
  locationIdTujuan: string
): Promise<{ ok: true; totalGabungan: number } | { ok: false; pesan: string }> {
  const supabase = await createClient();

  const { data: semuaStok, error } = await supabase
    .from("stock")
    .select("id, qty, location_id")
    .eq("item_id", itemId);

  if (error) return { ok: false, pesan: error.message };
  if (!semuaStok || semuaStok.length <= 1) {
    return { ok: false, pesan: "Barang ini cuma ada di 1 lokasi, tidak perlu digabung." };
  }

  const totalGabungan = semuaStok.reduce((sum, s) => sum + Number(s.qty), 0);

  const idBaris = semuaStok.map((s) => s.id);
  await supabase.from("stock").delete().in("id", idBaris);

  await supabase.from("stock").insert({
    item_id: itemId,
    location_id: locationIdTujuan,
    qty: totalGabungan,
  });

  const { data: item } = await supabase.from("items").select("satuan_dasar").eq("id", itemId).single();

  await supabase.from("stock_movements").insert({
    item_id: itemId,
    tipe: "masuk",
    qty: 0,
    satuan: item?.satuan_dasar ?? "PCS",
    location_id: locationIdTujuan,
    ref_tipe: "gabung_stok",
  });

  revalidatePath("/gudang/stok");
  revalidatePath("/admin/stok");

  return { ok: true, totalGabungan };
}