const GAYA: Record<string, string> = {
  baru: "bg-slate-100 text-slate-600",
  sedang_diambil: "bg-amber-100 text-amber-700",
  selesai: "bg-green-100 text-green-700",
  dibatalkan: "bg-red-100 text-red-700",
};

const LABEL: Record<string, string> = {
  baru: "Baru",
  sedang_diambil: "Sedang Diambil",
  selesai: "Selesai",
  dibatalkan: "Dibatalkan",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
        GAYA[status] ?? "bg-slate-100 text-slate-600"
      }`}
    >
      {LABEL[status] ?? status}
    </span>
  );
}