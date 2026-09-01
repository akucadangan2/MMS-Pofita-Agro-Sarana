"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function kirimNotifikasi(userId: string, judul: string, pesan: string) {
  try {
    await fetch("https://api.onesignal.com/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${process.env.ONESIGNAL_API_KEY}`,
      },
      body: JSON.stringify({
        app_id: process.env.ONESIGNAL_APP_ID,
        target_channel: "push",
        headings: { en: judul },
        contents: { en: pesan },
        include_aliases: { external_id: [userId] },
      }),
    });
  } catch {
    // Gagal kirim notifikasi jangan sampai gagalin update status utamanya
  }
}

async function perbaruiStatusRequest(requestId: string) {
  const supabase = await createClient();
  const { data: sisaItems } = await supabase
    .from("request_items")
    .select("status")
    .eq("request_id", requestId);

  const semuaTerambil = sisaItems?.every((i) => i.status === "terambil") ?? false;
  const adaYangTerambil = sisaItems?.some((i) => i.status === "terambil") ?? false;
  const statusBaru = semuaTerambil ? "selesai" : adaYangTerambil ? "sedang_diambil" : "baru";

  await supabase.from("requests").update({ status: statusBaru }).eq("id", requestId);
  return { semuaTerambil, statusBaru };
}

// Kurangi stok — ambil dari lokasi dengan qty terbanyak dulu (greedy), bisa kepotong dari >1 lokasi
async function kurangiStok(itemId: string, qtyKeluar: number) {
  const supabase = await createClient();
  const { data: stockRows } = await supabase
    .from("stock")
    .select("id, qty")
    .eq("item_id", itemId)
    .order("qty", { ascending: false });

  let sisa = qtyKeluar;
  for (const row of stockRows ?? []) {
    if (sisa <= 0) break;
    const potong = Math.min(sisa, row.qty);
    await supabase.from("stock").update({ qty: row.qty - potong }).eq("id", row.id);
    sisa -= potong;
  }
}

// Kembalikan stok — taruh di lokasi dengan qty tersedikit (biasa lokasi yang tadi paling banyak diambil)
async function kembalikanStok(itemId: string, qtyMasuk: number) {
  const supabase = await createClient();
  const { data: stockRows } = await supabase
    .from("stock")
    .select("id, qty")
    .eq("item_id", itemId)
    .order("qty", { ascending: true })
    .limit(1);

  const row = stockRows?.[0];
  if (row) {
    await supabase.from("stock").update({ qty: row.qty + qtyMasuk }).eq("id", row.id);
  }
}

export async function tandaiTerambil(formData: FormData) {
  const itemId = formData.get("itemId") as string;
  const requestId = formData.get("requestId") as string;
  const qtyDiminta = Number(formData.get("qtyDiminta"));

  const supabase = await createClient();

  const { data: itemRow } = await supabase
    .from("request_items")
    .select("item_id, satuan, items(nama)")
    .eq("id", itemId)
    .single();

  await supabase
    .from("request_items")
    .update({ qty_terambil: qtyDiminta, status: "terambil" })
    .eq("id", itemId);

  // Potong stok gudang sesuai barang yang diambil — ini yang tadinya belum ada
  if (itemRow?.item_id) {
    await kurangiStok(itemRow.item_id, qtyDiminta);
    await supabase.from("stock_movements").insert({
      item_id: itemRow.item_id,
      tipe: "keluar",
      qty: qtyDiminta,
      satuan: itemRow.satuan,
      ref_id: requestId,
      ref_tipe: "request",
    });
  }

  const { semuaTerambil } = await perbaruiStatusRequest(requestId);

  const { data: request } = await supabase
    .from("requests")
    .select("no_request, branch_id")
    .eq("id", requestId)
    .single();

  if (request) {
    const { data: users } = await supabase
      .from("users")
      .select("id")
      .eq("branch_id", request.branch_id)
      .eq("role", "cabang");

    const namaBarang =
      (itemRow as unknown as { items: { nama: string } | null })?.items?.nama ?? "Barang";
    const pesan = semuaTerambil
      ? `Request ${request.no_request} sudah selesai diambil semua`
      : `${namaBarang} sudah diambil (${request.no_request})`;

    for (const u of users ?? []) {
      await kirimNotifikasi(u.id, "Update Permintaan", pesan);
    }
  }

  revalidatePath(`/gudang/request/${requestId}`);
  revalidatePath("/gudang/request");
  revalidatePath("/gudang/stok");
  revalidatePath("/admin/barang");
}


export async function batalkanItemRequest(formData: FormData) {
  const itemId = formData.get("itemId") as string;
  const requestId = formData.get("requestId") as string;
  const alasan = formData.get("alasan") as string;

  const supabase = await createClient();

  await supabase
    .from("request_items")
    .update({ status: "dibatalkan", catatan: alasan || null })
    .eq("id", itemId);

  const sisaItems = await supabase
    .from("request_items")
    .select("status")
    .eq("request_id", requestId);

  const semuaSelesai = (sisaItems.data ?? []).every(
    (i) => i.status === "terambil" || i.status === "dibatalkan"
  );
  const adaYangTerambil = (sisaItems.data ?? []).some((i) => i.status === "terambil");

  const statusBaru = semuaSelesai ? "selesai" : adaYangTerambil ? "sedang_diambil" : "baru";

  await supabase.from("requests").update({ status: statusBaru }).eq("id", requestId);

  revalidatePath("/gudang/picking");
  revalidatePath(`/gudang/request/${requestId}`);
}

export async function batalkanPengambilan(formData: FormData) {
  const itemId = formData.get("itemId") as string;
  const requestId = formData.get("requestId") as string;

  const supabase = await createClient();

  const { data: itemRow } = await supabase
    .from("request_items")
    .select("item_id, qty_terambil, satuan")
    .eq("id", itemId)
    .single();

  // Kembalikan stok yang tadi kepotong — ini juga tadinya belum ada
  if (itemRow?.item_id && itemRow.qty_terambil > 0) {
    await kembalikanStok(itemRow.item_id, itemRow.qty_terambil);
    await supabase.from("stock_movements").insert({
      item_id: itemRow.item_id,
      tipe: "masuk",
      qty: itemRow.qty_terambil,
      satuan: itemRow.satuan,
      ref_id: requestId,
      ref_tipe: "batal_pengambilan",
    });
  }

  await supabase
    .from("request_items")
    .update({ qty_terambil: 0, status: "belum" })
    .eq("id", itemId);

  await perbaruiStatusRequest(requestId);

  revalidatePath(`/gudang/request/${requestId}`);
  revalidatePath("/gudang/request");
  revalidatePath("/gudang/stok");
  revalidatePath("/admin/barang");
}

export async function ubahQtyRequestItem(formData: FormData) {
  const itemId = formData.get("itemId") as string;
  const requestId = formData.get("requestId") as string;
  const qtyBaru = Number(formData.get("qtyBaru"));
  
  const supabase = await createClient();
  
  if (qtyBaru <= 0) {
    redirect(`/gudang/request/${requestId}?error=${encodeURIComponent("Qty harus lebih dari 0")}`);
  }
  
  await supabase.from("request_items").update({ qty_diminta: qtyBaru }).eq("id", itemId);
  
  revalidatePath(`/gudang/request/${requestId}`);
  redirect(`/gudang/request/${requestId}?berhasil=1`);
}

export async function batalkanSeluruhRequest(formData: FormData) {
  const requestId = formData.get("requestId") as string;
  const alasan = formData.get("alasan") as string;
  
  const supabase = await createClient();
  
  await supabase
    .from("request_items")
    .update({ status: "dibatalkan", catatan: alasan || null })
    .eq("request_id", requestId)
    .neq("status", "terambil");
    
  await supabase.from("requests").update({ status: "dibatalkan" }).eq("id", requestId);
  
  revalidatePath("/gudang/request");
  revalidatePath(`/gudang/request/${requestId}`);
  redirect("/gudang/request?berhasil=1");
}