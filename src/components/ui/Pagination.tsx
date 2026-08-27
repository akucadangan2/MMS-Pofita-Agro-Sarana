import Link from "next/link";

export function Pagination({
  halamanSekarang,
  totalHalaman,
  q,
  ukuran,
  basePath,
}: {
  halamanSekarang: number;
  totalHalaman: number;
  q?: string;
  ukuran?: string;
  basePath: string;
}) {
  if (totalHalaman <= 1) return null;

  function buatLink(halaman: number) {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (ukuran) params.set("ukuran", ukuran);
    params.set("halaman", String(halaman));
    return `${basePath}?${params.toString()}`;
  }

  const sebelumnyaAktif = halamanSekarang > 1;
  const selanjutnyaAktif = halamanSekarang < totalHalaman;

  return (
    <div className="mt-4 flex items-center justify-between text-sm">
      <span className="text-slate-500">
        Halaman {halamanSekarang} dari {totalHalaman}
      </span>
      <div className="flex gap-2">
        <Link
          href={buatLink(Math.max(1, halamanSekarang - 1))}
          className={`rounded-lg border px-3 py-1.5 ${
            sebelumnyaAktif ? "text-slate-600 hover:bg-slate-50" : "pointer-events-none text-slate-300"
          }`}
        >
          ← Sebelumnya
        </Link>
        <Link
          href={buatLink(Math.min(totalHalaman, halamanSekarang + 1))}
          className={`rounded-lg border px-3 py-1.5 ${
            selanjutnyaAktif ? "text-slate-600 hover:bg-slate-50" : "pointer-events-none text-slate-300"
          }`}
        >
          Selanjutnya →
        </Link>
      </div>
    </div>
  );
}