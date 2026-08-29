import Link from "next/link";
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

      <div className="mt-6 max-w-lg rounded-xl border bg-white p-4 shadow-sm">
        <h2 className="mb-1 text-sm font-medium text-slate-700">Pengaturan Struk</h2>
        <p className="mb-3 text-sm text-slate-500">Atur nama perusahaan, footer, dan ukuran kertas struk.</p>
        <Link href="/gudang/pengaturan/struk" className="text-sm text-blue-600 hover:underline">
          Buka Pengaturan Struk →
        </Link>
      </div>
    </div>
  );
}