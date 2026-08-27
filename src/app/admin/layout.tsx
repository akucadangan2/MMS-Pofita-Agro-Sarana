import { LayoutDashboard, Boxes, Package, MapPin, Building2, Users, BarChart3 } from "lucide-react";
import { AppShell } from "@/components/ui/AppShell";
import { TopBar } from "@/components/ui/TopBar";
import { createClient } from "@/lib/supabase/server";

const menuAdmin = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard /> },
  { label: "Barang", href: "/admin/barang", icon: <Boxes /> },
  { label: "Stok", href: "/admin/stok", icon: <Package /> },
  { label: "Lokasi", href: "/admin/lokasi", icon: <MapPin /> },
  { label: "Cabang", href: "/admin/cabang", icon: <Building2 /> },
  { label: "User", href: "/admin/user", icon: <Users /> },
  { label: "Laporan", href: "/admin/laporan", icon: <BarChart3 /> },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let nama = "Admin";
  if (user) {
    const { data } = await supabase.from("users").select("nama").eq("auth_id", user.id).maybeSingle();
    if (data?.nama) nama = data.nama;
  }

  return (
    <AppShell title="Admin" items={menuAdmin} topBar={<TopBar nama={nama} />}>
      {children}
    </AppShell>
  );
}