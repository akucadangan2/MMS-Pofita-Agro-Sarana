"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function tambahLokasi(formData: FormData) {
  const lantai = formData.get("lantai") as string;
  const area = formData.get("area") as string;
  const rak = formData.get("rak") as string;
  const bin = formData.get("bin") as string;
  const keterangan = formData.get("keterangan") as string;

  const supabase = await createClient();
  await supabase.from("locations").insert({
    lantai,
    area: area || null,
    rak: rak || null,
    bin: bin || null,
    keterangan: keterangan || null,
  });

  revalidatePath("/admin/lokasi");
}

export async function updateLokasi(formData: FormData) {
  const id = formData.get("id") as string;
  const lantai = formData.get("lantai") as string;
  const area = formData.get("area") as string;
  const rak = formData.get("rak") as string;
  const bin = formData.get("bin") as string;
  const keterangan = formData.get("keterangan") as string;

  const supabase = await createClient();
  await supabase
    .from("locations")
    .update({
      lantai,
      area: area || null,
      rak: rak || null,
      bin: bin || null,
      keterangan: keterangan || null,
    })
    .eq("id", id);

  revalidatePath("/admin/lokasi");
  redirect("/admin/lokasi");
}

export async function hapusLokasi(formData: FormData) {
  const id = formData.get("id") as string;
  const supabase = await createClient();
  await supabase.from("locations").delete().eq("id", id);
  revalidatePath("/admin/lokasi");
}