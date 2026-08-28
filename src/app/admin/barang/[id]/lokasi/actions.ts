"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function tambahLokasiBarang(formData: FormData) {
  const itemId = formData.get("itemId") as string;
  const locationId = formData.get("locationId") as string;

  const supabase = await createClient();
  await supabase.from("item_locations").insert({ item_id: itemId, location_id: locationId });

  revalidatePath(`/gudang/barang/${itemId}/lokasi`);
}

export async function hapusLokasiBarang(formData: FormData) {
  const itemId = formData.get("itemId") as string;
  const locationId = formData.get("locationId") as string;

  const supabase = await createClient();
  await supabase.from("item_locations").delete().eq("item_id", itemId).eq("location_id", locationId);

  revalidatePath(`/admin/barang/${itemId}/lokasi`);
}