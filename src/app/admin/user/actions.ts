"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function tambahUser(formData: FormData) {
  const nama = formData.get("nama") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;
  const branchId = formData.get("branchId") as string;

  const admin = createAdminClient();

  const { data: authUser, error: authError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (authError || !authUser.user) {
    throw new Error(authError?.message ?? "Gagal membuat akun login");
  }

  const supabase = await createClient();
  const { error: insertError } = await supabase.from("users").insert({
    auth_id: authUser.user.id,
    nama,
    role,
    branch_id: role === "cabang" ? branchId || null : null,
  });

  if (insertError) {
    await admin.auth.admin.deleteUser(authUser.user.id);
    throw new Error(insertError.message);
  }

  revalidatePath("/admin/user");
}

export async function hapusUser(formData: FormData) {
  const id = formData.get("id") as string;
  const authId = formData.get("authId") as string;

  const supabase = await createClient();
  await supabase.from("users").delete().eq("id", id);

  if (authId) {
    const admin = createAdminClient();
    await admin.auth.admin.deleteUser(authId);
  }

  revalidatePath("/admin/user");
}