"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function buatRequestManual(formData: FormData) {
  const branchId = formData.get("branchId") as string;
  const itemIds = formData.getAll("itemId") as string[];
  const qtys = formData.getAll("qty") as string[];
  const satuans = formData.getAll("satuan") as string[];
  const keterangans = formData.getAll("keterangan") as string[];

  if (!branchId) {
    redirect(`/gudang/request/tambah?error=${encodeURIComponent("Cabang wajib dipilih")}`);
  }

  const supabase = await createClient();

  const noRequest =
    "REQ-" +
    new Date()
      .toISOString()
      .replace(/[-:T]/g, "")
      .slice(0, 15) +
    "-MANUAL";

  const { data: requestBaru, error: errRequest } = await supabase
    .from("requests")
    .insert({ no_request: noRequest, branch_id: branchId, status: "baru" })
    .select()
    .single();

  if (errRequest || !requestBaru) {
    redirect(`/gudang/request/tambah?error=${encodeURIComponent(errRequest?.message ?? "Gagal membuat request")}`);
  }

  let adaBarangValid = false;
  for (let i = 0; i < itemIds.length; i++) {
    const itemId = itemIds[i];
    const qty = Number(qtys[i]);
    const satuan = satuans[i];
    const keterangan = keterangans[i];

    if (!itemId || !qty || qty <= 0) continue;
    adaBarangValid = true;

    await supabase.from("request_items").insert({
      request_id: requestBaru.id,
      item_id: itemId,
      qty_diminta: qty,
      satuan,
      status: "belum",
      keterangan: keterangan || null,
    });
  }

  if (!adaBarangValid) {
    await supabase.from("requests").delete().eq("id", requestBaru.id);
    redirect(`/gudang/request/tambah?error=${encodeURIComponent("Minimal 1 barang dengan qty lebih dari 0")}`);
  }

  revalidatePath("/gudang/request");
  redirect(`/gudang/request/${requestBaru.id}?berhasil=1`);
}