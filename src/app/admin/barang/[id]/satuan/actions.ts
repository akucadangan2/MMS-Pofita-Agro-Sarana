"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function tambahSatuan(formData: FormData) {
  const itemId = formData.get("itemId") as string;
  const namaSatuan = formData.get("namaSatuan") as string;
  const faktorKonversi = Number(formData.get("faktorKonversi"));

  const supabase = await createClient();
  await supabase.from("item_units").insert({
    item_id: itemId,
    nama_satuan: namaSatuan,
    faktor_konversi: faktorKonversi,
  });

  revalidatePath(`/admin/barang/${itemId}/satuan`);
}

export async function hapusSatuan(formData: FormData) {
  const id = formData.get("id") as string;
  const itemId = formData.get("itemId") as string;

  const supabase = await createClient();
  await supabase.from("item_units").delete().eq("id", id);

  revalidatePath(`/admin/barang/${itemId}/satuan`);
}