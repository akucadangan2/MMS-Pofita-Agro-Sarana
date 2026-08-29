"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updatePengaturanStruk(formData: FormData) {
  const namaPerusahaan = formData.get("namaPerusahaan") as string;
  const footerText = formData.get("footerText") as string;
  const ukuranKertas = formData.get("ukuranKertas") as string;
  const tampilkanLogo = formData.get("tampilkanLogo") === "on";

  const supabase = await createClient();
  await supabase
    .from("pengaturan_struk")
    .update({
      nama_perusahaan: namaPerusahaan,
      footer_text: footerText,
      ukuran_kertas: ukuranKertas,
      tampilkan_logo: tampilkanLogo,
    })
    .eq("id", 1);

  revalidatePath("/gudang/pengaturan/struk");
  redirect("/gudang/pengaturan/struk?berhasil=1");
}