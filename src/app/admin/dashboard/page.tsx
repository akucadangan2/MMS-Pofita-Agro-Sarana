import { createClient } from "@/lib/supabase/server";
import { RekapCabangChart } from "@/components/charts/RekapCabangChart";
import { StokTeratasChart } from "@/components/charts/StokTeratasChart";
import {
  Building2,
  Package,
  MapPin,
  Users,
  Activity,
  ArrowUpRight,
} from "lucide-react";

type RequestRow = {
  branch_id: string;
  branches: { nama: string } | null;
};

type StockRow = {
  item_id: string;
  qty: number;
  items: { nama: string } | null;
};

export default async function DashboardAdminPage() {
  const supabase = await createClient();

  // ============================================================
  // SUMMARY
  // ============================================================

  const { count: totalCabang } = await supabase
    .from("branches")
    .select("*", {
      count: "exact",
      head: true,
    });

  const { count: totalBarang } = await supabase
    .from("items")
    .select("*", {
      count: "exact",
      head: true,
    });

  const { count: totalLokasi } = await supabase
    .from("locations")
    .select("*", {
      count: "exact",
      head: true,
    });

  const { count: totalUser } = await supabase
    .from("users")
    .select("*", {
      count: "exact",
      head: true,
    });

  // ============================================================
  // REQUEST PER CABANG
  // ============================================================

  const { data: requestsData } = await supabase
    .from("requests")
    .select("branch_id, branches(nama)");

  const requests =
    (requestsData as unknown as RequestRow[]) ?? [];

  const petaCabang = new Map<string, number>();

  for (const request of requests) {
    const nama = request.branches?.nama ?? "-";

    petaCabang.set(
      nama,
      (petaCabang.get(nama) ?? 0) + 1
    );
  }

  const dataCabang = Array.from(
    petaCabang.entries()
  )
    .map(([nama, jumlah]) => ({
      nama,
      jumlah,
    }))
    .sort((a, b) => b.jumlah - a.jumlah);

  // ============================================================
  // STOCK
  // ============================================================

  const { data: stockData } = await supabase
    .from("stock")
    .select("item_id, qty, items(nama)");

  const stockRows =
    (stockData as unknown as StockRow[]) ?? [];

  const petaStok = new Map<string, number>();

  for (const stock of stockRows) {
    const nama = stock.items?.nama;

    if (!nama) continue;

    petaStok.set(
      nama,
      (petaStok.get(nama) ?? 0) + stock.qty
    );
  }

  const dataStok = Array.from(
    petaStok.entries()
  )
    .map(([nama, qty]) => ({
      nama,
      qty,
    }))
    .sort((a, b) => b.qty - a.qty)
    .slice(0, 5);

  // ============================================================
  // DASHBOARD
  // ============================================================

  return (
    <div className="min-h-full bg-slate-50/50">

      <div className="space-y-6">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <div className="mb-1 flex items-center gap-2">
              <Activity
                className="h-4 w-4 text-slate-500"
                strokeWidth={2}
              />

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Overview
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Dashboard Admin
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Ringkasan operasional Warehouse Management System
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-xs font-medium text-slate-600">
              Sistem Aktif
            </span>
          </div>
        </div>


        {/* ======================================================
            SUMMARY CARDS
        ====================================================== */}

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

          <KartuRingkasan
            label="Total Cabang"
            nilai={totalCabang ?? 0}
            icon={Building2}
            iconStyle="bg-indigo-50 text-indigo-600"
          />

          <KartuRingkasan
            label="Total Barang"
            nilai={totalBarang ?? 0}
            icon={Package}
            iconStyle="bg-blue-50 text-blue-600"
          />

          <KartuRingkasan
            label="Total Lokasi"
            nilai={totalLokasi ?? 0}
            icon={MapPin}
            iconStyle="bg-amber-50 text-amber-600"
          />

          <KartuRingkasan
            label="Total User"
            nilai={totalUser ?? 0}
            icon={Users}
            iconStyle="bg-emerald-50 text-emerald-600"
          />

        </div>


        {/* ======================================================
            CHART SECTION
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* Request per Cabang */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Aktivitas Cabang
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Distribusi request berdasarkan cabang
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50">
                <Building2
                  className="h-4 w-4 text-indigo-600"
                  strokeWidth={1.8}
                />
              </div>

            </div>

            <div className="p-4">
              <RekapCabangChart data={dataCabang} />
            </div>

          </div>


          {/* Top Stock */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Stok Teratas
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Lima item dengan jumlah stok terbesar
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                <Package
                  className="h-4 w-4 text-blue-600"
                  strokeWidth={1.8}
                />
              </div>

            </div>

            <div className="p-4">
              <StokTeratasChart data={dataStok} />
            </div>

          </div>

        </div>


        {/* ======================================================
            SYSTEM INFO
        ====================================================== */}

        <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                <Activity
                  className="h-4 w-4 text-slate-600"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Warehouse Management System
                </p>

                <p className="text-xs text-slate-500">
                  CV Profita Agro Sarana
                </p>
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


// ====================================================================
// SUMMARY CARD
// ====================================================================

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

        {/* Icon */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconStyle}`}
        >
          <Icon
            className="h-5 w-5"
            strokeWidth={1.8}
          />
        </div>

        {/* Arrow */}
        <ArrowUpRight
          className="h-4 w-4 text-slate-300 transition-colors group-hover:text-slate-500"
          strokeWidth={1.8}
        />

      </div>

      <div className="mt-5">

        <p className="text-2xl font-bold tracking-tight text-slate-900">
          {nilai.toLocaleString("id-ID")}
        </p>

        <p className="mt-1 text-xs font-medium text-slate-500">
          {label}
        </p>

      </div>

    </div>
  );
}
