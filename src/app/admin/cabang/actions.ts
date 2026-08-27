"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function tambahCabang(formData: FormData) {
  const nama = formData.get("nama") as string;
  const alamat = formData.get("alamat") as string;

  const supabase = await createClient();
  await supabase.from("branches").insert({ nama, alamat: alamat || null });

  revalidatePath("/admin/cabang");
}

export async function updateCabang(formData: FormData) {
  const id = formData.get("id") as string;
  const nama = formData.get("nama") as string;
  const alamat = formData.get("alamat") as string;

  const supabase = await createClient();
  await supabase
    .from("branches")
    .update({ nama, alamat: alamat || null })
    .eq("id", id);

  revalidatePath("/admin/cabang");
  redirect("/admin/cabang");
}

export async function hapusCabang(formData: FormData) {
  const id = formData.get("id") as string;
  const supabase = await createClient();
  await supabase.from("branches").delete().eq("id", id);
  revalidatePath("/admin/cabang");
}