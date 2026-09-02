"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { buatRequestManual } from "./actions";

type Branch = { id: string; nama: string };
type Barang = { id: string; kode: string; nama: string; satuan_dasar: string };
type SatuanTambahan = { item_id: string; nama_satuan: string };

type BarisItem = {
  itemId: string;
  qty: string;
  satuan: string;
  keterangan: string;
};

export default function TambahRequestManualPage() {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const pesanError = searchParams.get("error");

  const [daftarBranch, setDaftarBranch] = useState<Branch[]>([]);
  const [daftarBarang, setDaftarBarang] = useState<Barang[]>([]);
  const [satuanTambahan, setSatuanTambahan] = useState<SatuanTambahan[]>([]);
  const [branchId, setBranchId] = useState("");
  const [baris, setBaris] = useState<BarisItem[]>([{ itemId: "", qty: "", satuan: "", keterangan: "" }]);

  useEffect(() => {
    async function muat() {
      const { data: branches } = await supabase.from("branches").select("id, nama").order("nama");
      setDaftarBranch((branches as Branch[]) ?? []);

      const { data: items } = await supabase.from("items").select("id, kode, nama, satuan_dasar").eq("nonaktif", false).order("nama");
      setDaftarBarang((items as Barang[]) ?? []);

      const { data: satuan } = await supabase.from("item_units").select("item_id, nama_satuan");
      setSatuanTambahan((satuan as SatuanTambahan[]) ?? []);
    }
    muat();
  }, []);

  function opsiSatuan(itemId: string) {
    const barang = daftarBarang.find((b) => b.id === itemId);
    if (!barang) return [];
    const tambahan = satuanTambahan.filter((s) => s.item_id === itemId).map((s) => s.nama_satuan);
    return [barang.satuan_dasar, ...tambahan];
  }

  function ubahBaris(index: number, field: keyof BarisItem, value: string) {
    setBaris((prev) => {
      const baru = [...prev];
      baru[index] = { ...baru[index], [field]: value };
      if (field === "itemId") {
        const opsi = opsiSatuan(value);
        baru[index].satuan = opsi[0] ?? "";
      }
      return baru;
    });
  }

  function tambahBaris() {
    setBaris((prev) => [...prev, { itemId: "", qty: "", satuan: "", keterangan: "" }]);
  }

  function hapusBaris(index: number) {
    setBaris((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Buat Request Manual</h1>
      <p className="mb-6 text-sm text-slate-500">Untuk permintaan barang yang masuk lewat telepon/langsung, bukan dari app</p>

      {pesanError && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{pesanError}</div>
      )}

      <form action={buatRequestManual}>
        <div className="mb-6 max-w-md rounded-xl border bg-white p-4 shadow-sm">
          <label className="mb-1 block text-xs text-slate-500">Cabang</label>
          <select
            name="branchId"
            value={branchId}
            onChange={(e) => setBranchId(e.target.value)}
            required
            className="w-full rounded-lg border px-3 py-2 text-sm"
          >
            <option value="">Pilih cabang...</option>
            {daftarBranch.map((b) => (
              <option key={b.id} value={b.id}>
                {b.nama}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="mb-3 text-sm font-medium text-slate-700">Daftar Barang</h2>

          <datalist id="daftar-barang-manual">
            {daftarBarang.map((b) => (
              <option key={b.id} value={`${b.kode} - ${b.nama}`} />
            ))}
          </datalist>

          {baris.map((b, i) => (
            <div key={i} className="mb-3 flex flex-wrap items-end gap-3">
              <div className="min-w-[200px] flex-1">
                <label className="mb-1 block text-xs text-slate-500">Barang</label>
                <input
                  list="daftar-barang-manual"
                  placeholder="Ketik kode atau nama barang..."
                  onChange={(e) => {
                    const cocok = daftarBarang.find((x) => `${x.kode} - ${x.nama}` === e.target.value);
                    if (cocok) ubahBaris(i, "itemId", cocok.id);
                  }}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                />
                <input type="hidden" name="itemId" value={b.itemId} />
              </div>
              <div className="w-24">
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
              <div className="w-24">
                <label className="mb-1 block text-xs text-slate-500">Satuan</label>
                <select
                  name="satuan"
                  value={b.satuan}
                  onChange={(e) => ubahBaris(i, "satuan", e.target.value)}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                >
                  {opsiSatuan(b.itemId).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="min-w-[160px] flex-1">
                <label className="mb-1 block text-xs text-slate-500">Catatan (opsional)</label>
                <input
                  type="text"
                  name="keterangan"
                  value={b.keterangan}
                  onChange={(e) => ubahBaris(i, "keterangan", e.target.value)}
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
          Buat Request
        </button>
      </form>
    </div>
  );
}