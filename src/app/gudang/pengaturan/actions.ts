"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function updateNama(formData: FormData) {
  const nama = formData.get("nama") as string;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("users").update({ nama }).eq("auth_id", user.id);
  revalidatePath("/gudang/pengaturan");
}