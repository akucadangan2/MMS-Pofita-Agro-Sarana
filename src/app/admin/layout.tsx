import { LayoutDashboard, Boxes, Package, MapPin, Building2, Users, BarChart3, History } from "lucide-react";
import { AppShell } from "@/components/ui/AppShell";
import { TopBar } from "@/components/ui/TopBar";
import { createClient } from "@/lib/supabase/server";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let nama = "Admin";
  let role = "admin";
  if (user) {
    const { data } = await supabase.from("users").select("nama, role").eq("auth_id", user.id).maybeSingle();
    if (data?.nama) nama = data.nama;
    if (data?.role) role = data.role;
  }

  const menuAdmin = [
    { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard /> },
    { label: "Barang", href: "/admin/barang", icon: <Boxes /> },
    { label: "Stok", href: "/admin/stok", icon: <Package /> },
    { label: "Lokasi", href: "/admin/lokasi", icon: <MapPin /> },
    { label: "Cabang", href: "/admin/cabang", icon: <Building2 /> },
    ...(role === "super_admin" ? [{ label: "User", href: "/admin/user", icon: <Users /> }] : []),
    { label: "Laporan", href: "/admin/laporan", icon: <BarChart3 /> },
    { label: "Riwayat Picking", href: "/admin/riwayat-picking", icon: <History /> },
  ];

  return (
    <AppShell title="Admin" items={menuAdmin} topBar={<TopBar nama={nama} />}>
      {children}
    </AppShell>
  );
}