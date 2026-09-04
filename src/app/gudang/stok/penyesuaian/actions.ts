"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function simpanPenyesuaianStok(
  itemId: string,
  locationId: string,
  qtyFisik: number,
  alasan: string
): Promise<{ ok: true } | { ok: false; pesan: string }> {
  if (!itemId) return { ok: false, pesan: "Barang wajib dipilih dari daftar." };
  if (!locationId) return { ok: false, pesan: "Lokasi wajib dipilih." };

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

  return { ok: true };
}