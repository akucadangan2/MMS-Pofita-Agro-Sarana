"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updatePengaturanStruk(formData: FormData) {
  const namaPerusahaan = formData.get("namaPerusahaan") as string;
  const footerText = formData.get("footerText") as string;
  const ukuranKertas = formData.get("ukuranKertas") as string;
  const ukuranFont = formData.get("ukuranFont") as string;
  const catatanTambahan = formData.get("catatanTambahan") as string;
  const tampilkanLogo = formData.get("tampilkanLogo") === "on";

  const supabase = await createClient();
  const { error } = await supabase
    .from("pengaturan_struk")
    .update({
      nama_perusahaan: namaPerusahaan,
      footer_text: footerText,
      ukuran_kertas: ukuranKertas,
      ukuran_font: ukuranFont,
      catatan_tambahan: catatanTambahan || null,
      tampilkan_logo: tampilkanLogo,
    })
    .eq("id", 1);

  if (error) {
    redirect(`/gudang/pengaturan/struk?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/gudang/pengaturan/struk");
  redirect("/gudang/pengaturan/struk?berhasil=1");
}