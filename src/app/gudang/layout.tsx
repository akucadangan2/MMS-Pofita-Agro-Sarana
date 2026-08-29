import {
  LayoutDashboard,
  Inbox,
  ClipboardList,
  History,
  Boxes,
  MapPin,
  Package,
  ArrowDownToLine,
  ArrowUpFromLine,
  BarChart3,
  Settings,
} from "lucide-react";
import { AppShell } from "@/components/ui/AppShell";
import { TopBar } from "@/components/ui/TopBar";
import { RealtimeRefresher } from "@/components/ui/RealtimeRefresher";
import { createClient } from "@/lib/supabase/server";

export default async function GudangLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let nama = "Staff Gudang";
  if (user) {
    const { data } = await supabase.from("users").select("nama").eq("auth_id", user.id).maybeSingle();
    if (data?.nama) nama = data.nama;
  }

  // Query badge dibungkus try/catch — kalau ini gagal (misal Supabase lagi lemot),
  // jangan sampai bikin seluruh halaman Gudang blank, badge-nya cukup nampilin 0.
  let totalBaru = 0;
  try {
    const { count } = await supabase
      .from("requests")
      .select("*", { count: "exact", head: true })
      .eq("status", "baru");
    totalBaru = count ?? 0;
  } catch {
    totalBaru = 0;
  }

  const menuGudang = [
    { label: "Dashboard", href: "/gudang/dashboard", icon: <LayoutDashboard /> },
    { label: "Request Masuk", href: "/gudang/request", icon: <Inbox />, badge: totalBaru },
    { label: "Picking", href: "/gudang/picking", icon: <ClipboardList /> },
    { label: "Riwayat Picking", href: "/gudang/riwayat-picking", icon: <History /> },
    { label: "Stok", href: "/gudang/stok", icon: <Package /> },
    { label: "Barang", href: "/gudang/barang", icon: <Boxes /> },
    { label: "Lokasi", href: "/gudang/lokasi", icon: <MapPin /> },
    { label: "Barang Masuk", href: "/gudang/barang-masuk", icon: <ArrowDownToLine /> },
    { label: "Barang Keluar", href: "/gudang/barang-keluar", icon: <ArrowUpFromLine /> },
    { label: "Laporan", href: "/gudang/laporan", icon: <BarChart3 /> },
    { label: "Pengaturan", href: "/gudang/pengaturan", icon: <Settings /> },
  ];

  return (
    <>
      <RealtimeRefresher table="requests" />
      <AppShell title="Gudang" items={menuGudang} topBar={<TopBar nama={nama} />}>
        {children}
      </AppShell>
    </>
  );
}