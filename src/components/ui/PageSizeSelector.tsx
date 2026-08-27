"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export function PageSizeSelector({ ukuran }: { ukuran: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function ubah(nilai: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("ukuran", nilai);
    params.set("halaman", "1");
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <select
      value={ukuran}
      onChange={(e) => ubah(e.target.value)}
      className="rounded-lg border px-3 py-2 text-sm"
    >
      <option value="20">20 / halaman</option>
      <option value="50">50 / halaman</option>
      <option value="100">100 / halaman</option>
      <option value="all">Semua</option>
    </select>
  );
}