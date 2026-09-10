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

  // Kalau ada baris barang+lokasi yang persis sama, gabung jadi 1 (ambil yang terakhir),
  // biar gak ada 2 proses baca-tulis stok yang sama secara bersamaan
  const barisUnik = new Map<string, BarisPenyesuaian>();
  for (const b of barisValid) {
    barisUnik.set(`${b.itemId}__${b.locationId}`, b);
  }

  // Ambil satuan dasar semua barang SEKALIGUS di awal (1 query), bukan diulang tiap baris
  const itemIds = Array.from(new Set(Array.from(barisUnik.values()).map((b) => b.itemId)));
  const { data: itemsData } = await supabase.from("items").select("id, satuan_dasar").in("id", itemIds);
  const satuanPerItem = new Map((itemsData ?? []).map((i) => [i.id, i.satuan_dasar]));

  // Proses tiap kombinasi barang+lokasi BERSAMAAN (beda kombinasi = aman diparalel)
  const hasilPerBaris = await Promise.all(
    Array.from(barisUnik.values()).map(async (b) => {
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

      return { ...b, qtySistem, selisih };
    })
  );

  // Simpan semua riwayat sekaligus (1 kali kirim buat masing-masing tabel)
  const penyesuaianPayload = hasilPerBaris.map((h) => ({
    batch_id: batch.id,
    item_id: h.itemId,
    location_id: h.locationId,
    qty_sistem: h.qtySistem,
    qty_fisik: h.qtyFisik,
    selisih: h.selisih,
  }));
  await supabase.from("penyesuaian_stok").insert(penyesuaianPayload);

  const movementsPayload = hasilPerBaris.map((h) => ({
    item_id: h.itemId,
    tipe: h.selisih >= 0 ? "masuk" : "keluar",
    qty: Math.abs(h.selisih),
    satuan: satuanPerItem.get(h.itemId) ?? "PCS",
    location_id: h.locationId,
    ref_id: batch.id,
    ref_tipe: "penyesuaian_stok",
  }));
  await supabase.from("stock_movements").insert(movementsPayload);

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

  await Promise.all(
    (barisData ?? []).map(async (b) => {
      const { data: stockRow } = await supabase
        .from("stock")
        .select("id, qty")
        .eq("item_id", b.item_id)
        .eq("location_id", b.location_id)
        .maybeSingle();

      if (stockRow) {
        await supabase.from("stock").update({ qty: stockRow.qty - b.selisih }).eq("id", stockRow.id);
      }
    })
  );

  await supabase.from("stock_movements").delete().eq("ref_id", batchId).eq("ref_tipe", "penyesuaian_stok");
  await supabase.from("penyesuaian_stok_batch").delete().eq("id", batchId);

  revalidatePath("/gudang/stok");
  revalidatePath("/gudang/stok/penyesuaian");

  return { ok: true };
}