"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function tambahBarang(formData: FormData) {
  const kode = formData.get("kode") as string;
  const nama = formData.get("nama") as string;
  const kategori = formData.get("kategori") as string;
  const merek = formData.get("merek") as string;
  const barcode = formData.get("barcode") as string;
  const deskripsi = formData.get("deskripsi") as string;
  const satuanDasar = formData.get("satuanDasar") as string;

  const supabase = await createClient();
  await supabase.from("items").insert({
    kode,
    nama,
    kategori: kategori || null,
    merek: merek || null,
    barcode: barcode || null,
    deskripsi: deskripsi || null,
    satuan_dasar: satuanDasar,
  });

  revalidatePath("/gudang/barang");
  revalidatePath("/admin/barang");
}

export async function updateBarang(formData: FormData) {
  const id = formData.get("id") as string;
  const kode = formData.get("kode") as string;
  const nama = formData.get("nama") as string;
  const kategori = formData.get("kategori") as string;
  const merek = formData.get("merek") as string;
  const barcode = formData.get("barcode") as string;
  const deskripsi = formData.get("deskripsi") as string;
  const satuanDasar = formData.get("satuanDasar") as string;
  const stokMinimum = formData.get("stokMinimum") as string;

  const supabase = await createClient();
  await supabase
    .from("items")
    .update({
      kode,
      nama,
      kategori: kategori || null,
      merek: merek || null,
      barcode: barcode || null,
      deskripsi: deskripsi || null,
      satuan_dasar: satuanDasar,
      stok_minimum: stokMinimum ? Number(stokMinimum) : 10,
    })
    .eq("id", id);

  revalidatePath("/gudang/barang");
  revalidatePath("/admin/barang");
  redirect("/gudang/barang?berhasil=1");
}

export async function hapusBarang(formData: FormData) {
  const id = formData.get("id") as string;
  const supabase = await createClient();

  const { error } = await supabase.from("items").delete().eq("id", id);

  if (error) {
    // Kode 23503 = foreign key violation, artinya barang ini masih kepake di tempat lain
    // (ada di stok, riwayat request, dll) — jadi dinonaktifkan aja, bukan dihapus permanen.
    if (error.code === "23503") {
      await supabase.from("items").update({ nonaktif: true }).eq("id", id);
      revalidatePath("/gudang/barang");
      revalidatePath("/admin/barang");
      redirect("/gudang/barang?nonaktif=1");
    }
    redirect(`/gudang/barang?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/gudang/barang");
  revalidatePath("/admin/barang");
}

export async function aktifkanKembaliBarang(formData: FormData) {
  const id = formData.get("id") as string;
  const supabase = await createClient();

  await supabase.from("items").update({ nonaktif: false }).eq("id", id);

  revalidatePath("/gudang/barang");
  revalidatePath("/admin/barang");
}