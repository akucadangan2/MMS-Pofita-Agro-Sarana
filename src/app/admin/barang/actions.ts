"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function tambahBarang(formData: FormData) {
  const kode = formData.get("kode") as string;
  const nama = formData.get("nama") as string;
  const kategori = formData.get("kategori") as string;
  const satuanDasar = formData.get("satuanDasar") as string;

  const supabase = await createClient();
  await supabase.from("items").insert({
    kode,
    nama,
    kategori: kategori || null,
    satuan_dasar: satuanDasar,
  });

  revalidatePath("/admin/barang");
}

export async function updateBarang(formData: FormData) {
  const id = formData.get("id") as string;
  const kode = formData.get("kode") as string;
  const nama = formData.get("nama") as string;
  const kategori = formData.get("kategori") as string;
  const satuanDasar = formData.get("satuanDasar") as string;

  const supabase = await createClient();
  await supabase
    .from("items")
    .update({
      kode,
      nama,
      kategori: kategori || null,
      satuan_dasar: satuanDasar,
    })
    .eq("id", id);

  revalidatePath("/admin/barang");
  redirect("/admin/barang");
}

export async function hapusBarang(formData: FormData) {
  const id = formData.get("id") as string;
  const supabase = await createClient();
  await supabase.from("items").delete().eq("id", id);
  revalidatePath("/admin/barang");
}