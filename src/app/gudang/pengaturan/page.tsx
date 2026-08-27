import { createClient } from "@/lib/supabase/server";
import { PengaturanForm } from "./PengaturanForm";

export default async function PengaturanPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let nama = "";
  let role = "gudang";
  if (user) {
    const { data } = await supabase.from("users").select("nama, role").eq("auth_id", user.id).maybeSingle();
    if (data) {
      nama = data.nama;
      role = data.role;
    }
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-slate-800">Pengaturan</h1>
      <PengaturanForm email={user?.email ?? "-"} role={role} namaSekarang={nama} />
    </div>
  );
}