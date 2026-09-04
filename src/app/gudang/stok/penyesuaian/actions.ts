"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

type BarisPenyesuaian = {
  itemId: string;
  locationId: string;
  qtyFisik: number;
};

export async function simpanPenyesuaianBatch(
  keterangan: string,
  baris: BarisPenyesuaian[]
): Promise<{ ok: true } | { ok: false; pesan: string }> {
  const barisValid = baris.filter((b) => b.itemId && b.locationId && b.qtyFisik >= 0);
  if (barisValid.length === 0) {
    return { ok: false, pesan: "Minimal 1 baris barang dengan Barang, Lokasi, dan Qty terisi." };
  }

  const supabase = await createClient();

  const { data: batch, error: errBatch } = await supabase
    .from("penyesuaian_stok_batch")
    .insert({ keterangan: keterangan || null })
    .select()
    .single();

  if (errBatch || !batch) {
    return { ok: false, pesan: errBatch?.message ?? "Gagal membuat penyesuaian." };
  }

  for (const b of barisValid) {
    const { data: stockRow } = await supabase
      .from("stock")
      .select("id, qty")
      .eq("item_id", b.itemId)
      .eq("location_id", b.locationId)
      .maybeSingle();

    const qtySistem = stockRow?.qty ?? 0;
    const selisih = b.qtyFisik - qtySistem;

    if (stockRow) {
      await supabase.from("stock").update({ qty: b.qtyFisik }).eq("id", stockRow.id);
    } else {
      await supabase.from("stock").insert({ item_id: b.itemId, location_id: b.locationId, qty: b.qtyFisik });
    }

    await supabase.from("penyesuaian_stok").insert({
      batch_id: batch.id,
      item_id: b.itemId,
      location_id: b.locationId,
      qty_sistem: qtySistem,
      qty_fisik: b.qtyFisik,
      selisih,
    });

    const { data: item } = await supabase.from("items").select("satuan_dasar").eq("id", b.itemId).single();

    await supabase.from("stock_movements").insert({
      item_id: b.itemId,
      tipe: selisih >= 0 ? "masuk" : "keluar",
      qty: Math.abs(selisih),
      satuan: item?.satuan_dasar ?? "PCS",
      location_id: b.locationId,
      ref_id: batch.id,
      ref_tipe: "penyesuaian_stok",
    });
  }

  revalidatePath("/gudang/stok");
  revalidatePath("/gudang/stok/penyesuaian");

  return { ok: true };
}

export async function hapusPenyesuaianBatch(batchId: string): Promise<{ ok: true } | { ok: false; pesan: string }> {
  const supabase = await createClient();

  const { data: barisData } = await supabase
    .from("penyesuaian_stok")
    .select("item_id, location_id, selisih")
    .eq("batch_id", batchId);

  for (const b of barisData ?? []) {
    // Balikin efeknya: kalau dulu selisih +5 (nambah stok), sekarang dikurangin 5 lagi.
    const { data: stockRow } = await supabase
      .from("stock")
      .select("id, qty")
      .eq("item_id", b.item_id)
      .eq("location_id", b.location_id)
      .maybeSingle();

    if (stockRow) {
      await supabase.from("stock").update({ qty: stockRow.qty - b.selisih }).eq("id", stockRow.id);
    }
  }

  await supabase.from("stock_movements").delete().eq("ref_id", batchId).eq("ref_tipe", "penyesuaian_stok");
  await supabase.from("penyesuaian_stok_batch").delete().eq("id", batchId);

  revalidatePath("/gudang/stok");
  revalidatePath("/gudang/stok/penyesuaian");

  return { ok: true };
}