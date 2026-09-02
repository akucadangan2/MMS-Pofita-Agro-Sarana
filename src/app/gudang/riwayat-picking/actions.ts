"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function hapusRiwayatPicking(formData: FormData) {
  const requestId = formData.get("requestId") as string;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: userRow } = await supabase.from("users").select("role").eq("auth_id", user.id).maybeSingle();

  if (userRow?.role !== "super_admin") {
    redirect(`/gudang/riwayat-picking?error=${encodeURIComponent("Cuma Super Admin yang bisa hapus riwayat")}`);
  }

  await supabase.from("stock_movements").delete().eq("ref_id", requestId).eq("ref_tipe", "request");

  revalidatePath("/gudang/riwayat-picking");
  redirect("/gudang/riwayat-picking?berhasil=1");
}