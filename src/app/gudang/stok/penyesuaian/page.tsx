"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { simpanPenyesuaianBatch, hapusPenyesuaianBatch } from "./actions";

type Barang = { id: string; kode: string; nama: string; satuan_dasar: string };
type Lokasi = { id: string; lantai: string; area: string | null; rak: string | null };

type BarisForm = {
  itemId: string;
  teksBarang: string;
  locationId: string;
  qtyFisik: string;
};

type RiwayatBatch = {
  id: string;
  keterangan: string | null;
  dibuat_at: string;
  penyesuaian_stok: {
    id: string;
    qty_sistem: number;
    qty_fisik: number;
    selisih: number;
    items: { kode: string; nama: string } | null;
    locations: { lantai: string } | null;
  }[];
};

function barisKosong(): BarisForm {
  return { itemId: "", teksBarang: "", locationId: "", qtyFisik: "" };
}

export default function PenyesuaianStokPage() {
  const supabase = createClient();

  const [daftarBarang, setDaftarBarang] = useState<Barang[]>([]);
  const [daftarLokasi, setDaftarLokasi] = useState<Lokasi[]>([]);
  const [riwayat, setRiwayat] = useState<RiwayatBatch[]>([]);

  const [keterangan, setKeterangan] = useState("");
  const [baris, setBaris] = useState<BarisForm[]>([barisKosong()]);

  const [error, setError] = useState<string | null>(null);
  const [berhasil, setBerhasil] = useState(false);
  const [menyimpan, setMenyimpan] = useState(false);

  async function muatSemua() {
    const { data: items } = await supabase.from("items").select("id, kode, nama, satuan_dasar").eq("nonaktif", false).order("nama");
    setDaftarBarang((items as Barang[]) ?? []);

    const { data: locations } = await supabase.from("locations").select("id, lantai, area, rak").order("lantai");
    setDaftarLokasi((locations as Lokasi[]) ?? []);

    const { data: riwayatData } = await supabase
      .from("penyesuaian_stok_batch")
      .select("id, keterangan, dibuat_at, penyesuaian_stok(id, qty_sistem, qty_fisik, selisih, items(kode, nama), locations(lantai))")
      .order("dibuat_at", { ascending: false })
      .limit(30);
    setRiwayat((riwayatData as unknown as RiwayatBatch[]) ?? []);
  }

  useEffect(() => {
    muatSemua();
  }, []);

  function ubahBaris(index: number, field: keyof BarisForm, value: string) {
    setBaris((prev) => {
      const baru = [...prev];
      if (field === "teksBarang") {
        const cocok = daftarBarang.find((b) => `${b.kode} - ${b.nama}` === value);
        baru[index] = { ...baru[index], teksBarang: value, itemId: cocok ? cocok.id : "" };
      } else {
        baru[index] = { ...baru[index], [field]: value };
      }
      return baru;
    });
  }

  function tambahBaris() {
    setBaris((prev) => [...prev, barisKosong()]);
  }

  function hapusBaris(index: number) {
    setBaris((prev) => prev.filter((_, i) => i !== index));
  }

  async function simpan() {
    setError(null);
    setBerhasil(false);

    const barisTerisi = baris.filter((b) => b.teksBarang || b.locationId || b.qtyFisik);
    const barisTanpaBarang = barisTerisi.filter((b) => !b.itemId);
    if (barisTanpaBarang.length > 0) {
      setError("Ada baris yang barangnya belum dipilih dari daftar saran. Ketik lalu pilih salah satu.");
      return;
    }

    const payload = baris
      .filter((b) => b.itemId && b.locationId && b.qtyFisik !== "")
      .map((b) => ({ itemId: b.itemId, locationId: b.locationId, qtyFisik: Number(b.qtyFisik) }));

    setMenyimpan(true);
    const hasil = await simpanPenyesuaianBatch(keterangan, payload);
    setMenyimpan(false);

    if (!hasil.ok) {
      setError(hasil.pesan);
      return;
    }

    setBerhasil(true);
    setKeterangan("");
    setBaris([barisKosong()]);
    muatSemua();
  }

  async function hapus(batchId: string) {
    await hapusPenyesuaianBatch(batchId);
    muatSemua();
  }

  return (
    <div>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Penyesuaian Stok</h1>
      <p className="mb-6 text-sm text-slate-500">Koreksi stok sistem sesuai hasil hitung fisik (stock opname) — bisa banyak barang sekaligus</p>

      {berhasil && (
        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          ✓ Penyesuaian stok berhasil disimpan.
        </div>
      )}
      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <datalist id="daftar-barang-opname">
        {daftarBarang.map((b) => (
          <option key={b.id} value={`${b.kode} - ${b.nama}`} />
        ))}
      </datalist>

      <div className="mb-8 rounded-xl border bg-white p-4 shadow-sm">
        <div className="mb-4 max-w-md">
          <label className="mb-1 block text-xs text-slate-500">Keterangan Penyesuaian (opsional)</label>
          <input
            type="text"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            placeholder="Contoh: Stock opname bulanan September"
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
        </div>

        <h2 className="mb-2 text-sm font-medium text-slate-700">Daftar Barang</h2>
        {baris.map((b, i) => (
          <div key={i} className="mb-3 flex flex-wrap items-end gap-3">
            <div className="min-w-[200px] flex-1">
              <label className="mb-1 block text-xs text-slate-500">Barang</label>
              <input
                list="daftar-barang-opname"
                value={b.teksBarang}
                onChange={(e) => ubahBaris(i, "teksBarang", e.target.value)}
                placeholder="Ketik kode atau nama barang..."
                className="w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>
            <div className="min-w-[160px]">
              <label className="mb-1 block text-xs text-slate-500">Lokasi</label>
              <select
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
              <label className="mb-1 block text-xs text-slate-500">Qty Fisik</label>
              <input
                type="number"
                min={0}
                value={b.qtyFisik}
                onChange={(e) => ubahBaris(i, "qtyFisik", e.target.value)}
                className="w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>
            <button onClick={() => hapusBaris(i)} className="rounded-lg border border-red-300 px-3 py-2 text-xs text-red-600 hover:bg-red-50">
              Hapus Baris
            </button>
          </div>
        ))}

        <button onClick={tambahBaris} className="mb-4 text-sm text-blue-600 hover:underline">
          + Tambah Baris Barang
        </button>

        <div>
          <button
            onClick={simpan}
            disabled={menyimpan}
            className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {menyimpan ? "Menyimpan..." : "Simpan Penyesuaian"}
          </button>
        </div>
      </div>

      <h2 className="mb-2 text-sm font-medium text-slate-700">Riwayat Penyesuaian (30 Terakhir)</h2>
      <div className="space-y-3">
        {riwayat.map((batch) => (
          <div key={batch.id} className="rounded-xl border bg-white shadow-sm">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div>
                <p className="text-sm font-medium text-slate-800">{batch.keterangan ?? "(tanpa keterangan)"}</p>
                <p className="text-xs text-slate-500">
                  {new Date(batch.dibuat_at).toLocaleString("id-ID")} • {batch.penyesuaian_stok.length} barang
                </p>
              </div>
              <button onClick={() => hapus(batch.id)} className="text-xs text-red-600 hover:underline">
                Hapus Penyesuaian Ini
              </button>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-slate-500">
                <tr>
                  <th className="px-4 py-2 font-medium">Barang</th>
                  <th className="px-4 py-2 font-medium">Lokasi</th>
                  <th className="px-4 py-2 font-medium">Sistem</th>
                  <th className="px-4 py-2 font-medium">Fisik</th>
                  <th className="px-4 py-2 font-medium">Selisih</th>
                </tr>
              </thead>
              <tbody>
                {batch.penyesuaian_stok.map((r) => (
                  <tr key={r.id} className="border-t">
                    <td className="px-4 py-2">{r.items?.nama ?? "-"}</td>
                    <td className="px-4 py-2">{r.locations?.lantai ?? "-"}</td>
                    <td className="px-4 py-2">{r.qty_sistem}</td>
                    <td className="px-4 py-2">{r.qty_fisik}</td>
                    <td className={`px-4 py-2 font-medium ${r.selisih < 0 ? "text-red-600" : r.selisih > 0 ? "text-green-600" : "text-slate-400"}`}>
                      {r.selisih > 0 ? "+" : ""}
                      {r.selisih}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        {riwayat.length === 0 && (
          <div className="rounded-xl border bg-white p-10 text-center text-slate-400 shadow-sm">
            Belum ada penyesuaian stok.
          </div>
        )}
      </div>
    </div>
  );
}