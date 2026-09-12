"use client";

import { useState, useRef, useEffect } from "react";

type Barang = { id: string; kode: string; nama: string; satuan_dasar: string };

export function ComboboxBarang({
  daftarBarang,
  value,
  onPilih,
}: {
  daftarBarang: Barang[];
  value: string;
  onPilih: (barang: Barang | null, teks: string) => void;
}) {
  const [terbuka, setTerbuka] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setTerbuka(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hasilFilter = value.trim()
    ? daftarBarang
        .filter(
          (b) =>
            b.nama.toLowerCase().includes(value.toLowerCase()) ||
            b.kode.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 50)
    : [];

  return (
    <div ref={ref} className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onPilih(null, e.target.value);
          setTerbuka(true);
        }}
        onFocus={() => setTerbuka(true)}
        placeholder="Ketik kode atau nama barang..."
        className="w-full rounded-lg border px-3 py-2 text-sm"
      />
      {terbuka && hasilFilter.length > 0 && (
        <div className="absolute z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border bg-white shadow-lg">
          {hasilFilter.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => {
                onPilih(b, `${b.kode} - ${b.nama}`);
                setTerbuka(false);
              }}
              className="block w-full px-3 py-2 text-left text-sm hover:bg-blue-50"
            >
              <span className="font-medium">{b.kode}</span> - {b.nama}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}