"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { simpanDoBarangMasuk } from "../actions";

type Barang = { id: string; kode: string; nama: string; satuan_dasar: string };
type Lokasi = { id: string; lantai: string; area: string | null; rak: string | null };

type BarisItem = {
  itemId: string;
  locationId: string;
  qty: string;
};

export default function TambahDoBarangMasukPage() {
  const supabase = createClient();

  const [daftarBarang, setDaftarBarang] = useState<Barang[]>([]);
  const [daftarLokasi, setDaftarLokasi] = useState<Lokasi[]>([]);
  const [baris, setBaris] = useState<BarisItem[]>([{ itemId: "", locationId: "", qty: "" }]);

  useEffect(() => {
    async function muat() {
      const { data: items } = await supabase.from("items").select("id, kode, nama, satuan_dasar").order("nama");
      setDaftarBarang((items as Barang[]) ?? []);

      const { data: locations } = await supabase.from("locations").select("id, lantai, area, rak").order("lantai");
      setDaftarLokasi((locations as Lokasi[]) ?? []);
    }
    muat();
  }, []);

  function ubahBaris(index: number, field: keyof BarisItem, value: string) {
    setBaris((prev) => {
      const baru = [...prev];
      baru[index] = { ...baru[index], [field]: value };
      return baru;
    });
  }

  function tambahBaris() {
    setBaris((prev) => [...prev, { itemId: "", locationId: "", qty: "" }]);
  }

  function hapusBaris(index: number) {
    setBaris((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-slate-800">Buat DO Barang Masuk</h1>

      <form action={simpanDoBarangMasuk}>
        <div className="mb-6 grid grid-cols-1 gap-4 rounded-xl border bg-white p-4 shadow-sm sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs text-slate-500">Tanggal</label>
            <input type="date" name="tanggal" required defaultValue={new Date().toISOString().slice(0, 10)} className="w-full rounded-lg border px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-500">No DO</label>
            <input name="noDo" className="w-full rounded-lg border px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-500">Ekspedisi</label>
            <input name="ekspedisi" className="w-full rounded-lg border px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-500">Supir</label>
            <input name="supir" className="w-full rounded-lg border px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-500">No Plat</label>
            <input name="noPlat" placeholder="B 1234 XYZ" className="w-full rounded-lg border px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-500">No Container</label>
            <input name="noContainer" className="w-full rounded-lg border px-3 py-2 text-sm" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs text-slate-500">Keterangan</label>
            <textarea name="keterangan" rows={2} className="w-full rounded-lg border px-3 py-2 text-sm" />
          </div>
        </div>

        <div className="mb-4 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="mb-3 text-sm font-medium text-slate-700">Daftar Barang</h2>

          <datalist id="daftar-barang">
            {daftarBarang.map((b) => (
              <option key={b.id} value={`${b.kode} - ${b.nama}`} />
            ))}
          </datalist>

          {baris.map((b, i) => (
            <div key={i} className="mb-3 flex flex-wrap items-end gap-3">
              <div className="min-w-[220px] flex-1">
                <label className="mb-1 block text-xs text-slate-500">Barang</label>
                <input
                  list="daftar-barang"
                  placeholder="Ketik kode atau nama barang..."
                  onChange={(e) => {
                    const cocok = daftarBarang.find((x) => `${x.kode} - ${x.nama}` === e.target.value);
                    if (cocok) ubahBaris(i, "itemId", cocok.id);
                  }}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                />
                <input type="hidden" name="itemId" value={b.itemId} />
              </div>
              <div className="min-w-[180px]">
                <label className="mb-1 block text-xs text-slate-500">Lokasi</label>
                <select
                  name="locationId"
                  value={b.locationId}
                  onChange={(e) => ubahBaris(i, "locationId", e.target.value)}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                >
                  <option value="">Pilih lokasi...</option>
                  {daftarLokasi.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.lantai}
                      {l.area ? ` / ${l.area}` : ""}
                      {l.rak ? ` / ${l.rak}` : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-28">
                <label className="mb-1 block text-xs text-slate-500">Qty</label>
                <input
                  type="number"
                  name="qty"
                  min={0}
                  value={b.qty}
                  onChange={(e) => ubahBaris(i, "qty", e.target.value)}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                />
              </div>
              <button type="button" onClick={() => hapusBaris(i)} className="rounded-lg border border-red-300 px-3 py-2 text-xs text-red-600 hover:bg-red-50">
                Hapus
              </button>
            </div>
          ))}

          <button type="button" onClick={tambahBaris} className="text-sm text-blue-600 hover:underline">
            + Tambah Baris
          </button>
        </div>

        <button type="submit" className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
          Simpan DO
        </button>
      </form>
    </div>
  );
}