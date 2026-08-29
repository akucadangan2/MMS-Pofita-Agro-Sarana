import { createClient } from "@/lib/supabase/server";
import { RealtimeRefresher } from "@/components/ui/RealtimeRefresher";
import { TrenRequestChart } from "@/components/charts/TrenRequestChart";
import { TopBarangChart } from "@/components/charts/TopBarangChart";
import {
  Inbox,
  FileText,
  Clock,
  CheckCircle2,
  Package,
  Activity,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

export default async function DashboardGudangPage() {
  const supabase = await createClient();

  const mulai = new Date();
  mulai.setDate(mulai.getDate() - 13);
  mulai.setHours(0, 0, 0, 0);

  // 4 query ini gak saling ketergantungan, jadi dijalankan bareng (Promise.all)
  // biar total waktu tunggu = query yang paling lama, bukan jumlah semuanya.
  const [requestsRes, totalBarangRes, requestsTrenRes, itemsTrenRes] = await Promise.all([
    supabase.from("requests").select("status"),
    supabase.from("items").select("*", { count: "exact", head: true }),
    supabase.from("requests").select("dibuat_at").gte("dibuat_at", mulai.toISOString()),
    supabase.from("request_items").select("qty_diminta, items(nama)"),
  ]);

  const requests = requestsRes.data ?? [];
  const totalBarang = totalBarangRes.count;

  const totalRequest = requests.length;
  const baru = requests.filter((r) => r.status === "baru").length;
  const sedangDiambil = requests.filter((r) => r.status === "sedang_diambil").length;
  const selesai = requests.filter((r) => r.status === "selesai").length;

  const petaTanggal = new Map<string, number>();
  for (let i = 0; i < 14; i++) {
    const d = new Date(mulai);
    d.setDate(d.getDate() + i);
    const key = d.toLocaleDateString("id-ID", { day: "2-digit", month: "short" });
    petaTanggal.set(key, 0);
  }
  for (const r of requestsTrenRes.data ?? []) {
    const key = new Date(r.dibuat_at).toLocaleDateString("id-ID", { day: "2-digit", month: "short" });
    if (petaTanggal.has(key)) {
      petaTanggal.set(key, (petaTanggal.get(key) ?? 0) + 1);
    }
  }
  const dataTren = Array.from(petaTanggal.entries()).map(([tanggal, jumlah]) => ({ tanggal, jumlah }));

  const petaBarang = new Map<string, number>();
  for (const i of (itemsTrenRes.data as unknown as { qty_diminta: number; items: { nama: string } | null }[]) ?? []) {
    const nama = i.items?.nama;
    if (!nama) continue;
    petaBarang.set(nama, (petaBarang.get(nama) ?? 0) + i.qty_diminta);
  }
  const topBarang = Array.from(petaBarang.entries())
    .map(([nama, qty]) => ({ nama, qty }))
    .sort((a, b) => b.qty - a.qty)
    .slice(0, 5);

  return (
    <div className="min-h-full bg-slate-50/50">
      <RealtimeRefresher table="requests" />

      <div className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <Activity className="h-4 w-4 text-slate-500" strokeWidth={2} />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Overview
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Gudang</h1>

            <p className="mt-1 text-sm text-slate-500">
              Ringkasan operasional Warehouse Management System
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-slate-600">Sistem Aktif</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <KartuRingkasan label="Total Request" nilai={totalRequest} icon={Inbox} iconStyle="bg-blue-50 text-blue-600" />
          <KartuRingkasan label="Baru" nilai={baru} icon={FileText} iconStyle="bg-slate-100 text-slate-600" />
          <KartuRingkasan label="Sedang Diambil" nilai={sedangDiambil} icon={Clock} iconStyle="bg-amber-50 text-amber-600" />
          <KartuRingkasan label="Selesai" nilai={selesai} icon={CheckCircle2} iconStyle="bg-emerald-50 text-emerald-600" />
          <KartuRingkasan label="Total Jenis Barang" nilai={totalBarang ?? 0} icon={Package} iconStyle="bg-indigo-50 text-indigo-600" />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">Tren Request</h2>
                <p className="mt-1 text-xs text-slate-500">Jumlah request 14 hari terakhir</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                <TrendingUp className="h-4 w-4 text-blue-600" strokeWidth={1.8} />
              </div>
            </div>
            <div className="p-4">
              <TrenRequestChart data={dataTren} />
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">Barang Terlaris</h2>
                <p className="mt-1 text-xs text-slate-500">Lima barang paling banyak diminta</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50">
                <Package className="h-4 w-4 text-indigo-600" strokeWidth={1.8} />
              </div>
            </div>
            <div className="p-4">
              <TopBarangChart data={topBarang} />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                <Activity className="h-4 w-4 text-slate-600" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Warehouse Management System</p>
                <p className="text-xs text-slate-500">CV Profita Agro Sarana</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs font-medium text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Operational
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KartuRingkasan({
  label,
  nilai,
  icon: Icon,
  iconStyle,
}: {
  label: string;
  nilai: number;
  icon: React.ElementType;
  iconStyle: string;
}) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconStyle}`}>
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <ArrowUpRight className="h-4 w-4 text-slate-300 transition-colors group-hover:text-slate-500" strokeWidth={1.8} />
      </div>

      <div className="mt-5">
        <p className="text-2xl font-bold tracking-tight text-slate-900">{nilai.toLocaleString("id-ID")}</p>
        <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
      </div>
    </div>
  );
}