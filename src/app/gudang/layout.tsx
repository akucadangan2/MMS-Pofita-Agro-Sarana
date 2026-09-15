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
  PauseCircle,
} from "lucide-react";
import { AppShell } from "@/components/ui/AppShell";
import { TopBar } from "@/components/ui/TopBar";
import { RealtimeRefresher } from "@/components/ui/RealtimeRefresher";
import { BrowserNotifier } from "@/components/ui/BrowserNotifier";
import { createClient } from "@/lib/supabase/server";

export default async function GudangLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();

  const [userResult, badgeRequestResult, badgePickingResult, badgePendingResult] = await Promise.allSettled([
    supabase.auth.getUser(),
    supabase.from("requests").select("*", { count: "exact", head: true }).eq("status", "baru"),
    supabase.from("request_items").select("*", { count: "exact", head: true }).eq("status", "belum"),
    supabase.from("request_items").select("*", { count: "exact", head: true }).eq("status", "pending"),
  ]);

  const user = userResult.status === "fulfilled" ? userResult.value.data.user : null;
  const totalBaru = badgeRequestResult.status === "fulfilled" ? badgeRequestResult.value.count ?? 0 : 0;
  const totalPicking = badgePickingResult.status === "fulfilled" ? badgePickingResult.value.count ?? 0 : 0;
  const totalPending = badgePendingResult.status === "fulfilled" ? badgePendingResult.value.count ?? 0 : 0;

  let nama = "Staff Gudang";
  if (user) {
    const { data } = await supabase.from("users").select("nama").eq("auth_id", user.id).maybeSingle();
    if (data?.nama) nama = data.nama;
  }

  const menuGudang = [
    { label: "Dashboard", href: "/gudang/dashboard", icon: <LayoutDashboard /> },
    { label: "Request Masuk", href: "/gudang/request", icon: <Inbox />, badge: totalBaru },
    { label: "Picking", href: "/gudang/picking", icon: <ClipboardList />, badge: totalPicking },
    { label: "Barang Pending", href: "/gudang/picking/pending", icon: <PauseCircle />, badge: totalPending },
    { label: "Riwayat Picking", href: "/gudang/riwayat-picking", icon: <History /> },
    { label: "Rekap Gabungan", href: "/gudang/picking/gabungan", icon: <ClipboardList /> },
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
      <BrowserNotifier />
      <AppShell title="Gudang" items={menuGudang} topBar={<TopBar nama={nama} />}>
        {children}
      </AppShell>
    </>
  );
}