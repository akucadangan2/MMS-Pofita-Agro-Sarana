"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { simpanPenyesuaianStok } from "./actions";

type Barang = { id: string; kode: string; nama: string; satuan_dasar: string };
type Lokasi = { id: string; lantai: string; area: string | null; rak: string | null };

type RiwayatRow = {
  id: string;
  qty_sistem: number;
  qty_fisik: number;
  selisih: number;
  alasan: string | null;
  dibuat_at: string;
  items: { kode: string; nama: string } | null;
  locations: { lantai: string } | null;
};

export default function PenyesuaianStokPage() {
  const supabase = createClient();

  const [daftarBarang, setDaftarBarang] = useState<Barang[]>([]);
  const [daftarLokasi, setDaftarLokasi] = useState<Lokasi[]>([]);
  const [riwayat, setRiwayat] = useState<RiwayatRow[]>([]);

  const [itemId, setItemId] = useState("");
  const [teksBarang, setTeksBarang] = useState("");
  const [locationId, setLocationId] = useState("");
  const [qtyFisik, setQtyFisik] = useState("");
  const [alasan, setAlasan] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [berhasil, setBerhasil] = useState(false);
  const [menyimpan, setMenyimpan] = useState(false);

  async function muatSemua() {
    const { data: items } = await supabase.from("items").select("id, kode, nama, satuan_dasar").eq("nonaktif", false).order("nama");
    setDaftarBarang((items as Barang[]) ?? []);

    const { data: locations } = await supabase.from("locations").select("id, lantai, area, rak").order("lantai");
    setDaftarLokasi((locations as Lokasi[]) ?? []);

    const { data: riwayatData } = await supabase
      .from("penyesuaian_stok")
      .select("id, qty_sistem, qty_fisik, selisih, alasan, dibuat_at, items(kode, nama), locations(lantai)")
      .order("dibuat_at", { ascending: false })
      .limit(50);
    setRiwayat((riwayatData as unknown as RiwayatRow[]) ?? []);
  }

  useEffect(() => {
    muatSemua();
  }, []);

  function pilihBarang(value: string) {
    setTeksBarang(value);
    const cocok = daftarBarang.find((b) => `${b.kode} - ${b.nama}` === value);
    setItemId(cocok ? cocok.id : "");
  }

  async function simpan() {
    setError(null);
    setBerhasil(false);

    if (!itemId) {
      setError("Barang belum dipilih dari daftar. Ketik lalu pilih salah satu saran yang muncul.");
      return;
    }
    if (!locationId) {
      setError("Lokasi wajib dipilih.");
      return;
    }
    if (!qtyFisik || Number(qtyFisik) < 0) {
      setError("Qty hasil hitung fisik wajib diisi.");
      return;
    }

    setMenyimpan(true);
    const hasil = await simpanPenyesuaianStok(itemId, locationId, Number(qtyFisik), alasan);
    setMenyimpan(false);

    if (!hasil.ok) {
      setError(hasil.pesan);
      return;
    }

    setBerhasil(true);
    setItemId("");
    setTeksBarang("");
    setLocationId("");
    setQtyFisik("");
    setAlasan("");
    muatSemua();
  }

  return (
    <div>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Penyesuaian Stok</h1>
      <p className="mb-6 text-sm text-slate-500">Koreksi stok sistem sesuai hasil hitung fisik (stock opname)</p>

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

      <div className="mb-8 max-w-lg space-y-3 rounded-xl border bg-white p-4 shadow-sm">
        <div>
          <label className="mb-1 block text-xs text-slate-500">Barang</label>
          <input
            list="daftar-barang-opname"
            value={teksBarang}
            onChange={(e) => pilihBarang(e.target.value)}
            placeholder="Ketik kode atau nama barang..."
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
          {teksBarang && !itemId && (
            <p className="mt-1 text-xs text-amber-600">Belum cocok dengan barang manapun, pilih dari saran yang muncul.</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Lokasi</label>
          <select value={locationId} onChange={(e) => setLocationId(e.target.value)} className="w-full rounded-lg border px-3 py-2 text-sm">
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
        <div>
          <label className="mb-1 block text-xs text-slate-500">Qty Hasil Hitung Fisik</label>
          <input
            type="number"
            min={0}
            value={qtyFisik}
            onChange={(e) => setQtyFisik(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Alasan / Catatan (opsional)</label>
          <input
            type="text"
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            placeholder="Contoh: Ada barang rusak, hasil hitung ulang gudang"
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
        </div>
        <button
          onClick={simpan}
          disabled={menyimpan}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {menyimpan ? "Menyimpan..." : "Simpan Penyesuaian"}
        </button>
      </div>

      <h2 className="mb-2 text-sm font-medium text-slate-700">Riwayat Penyesuaian (50 Terakhir)</h2>
      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Tanggal</th>
              <th className="px-4 py-3 font-medium">Barang</th>
              <th className="px-4 py-3 font-medium">Lokasi</th>
              <th className="px-4 py-3 font-medium">Sistem</th>
              <th className="px-4 py-3 font-medium">Fisik</th>
              <th className="px-4 py-3 font-medium">Selisih</th>
              <th className="px-4 py-3 font-medium">Alasan</th>
            </tr>
          </thead>
          <tbody>
            {riwayat.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="px-4 py-3 text-slate-500">{new Date(r.dibuat_at).toLocaleString("id-ID")}</td>
                <td className="px-4 py-3">{r.items?.nama ?? "-"}</td>
                <td className="px-4 py-3">{r.locations?.lantai ?? "-"}</td>
                <td className="px-4 py-3">{r.qty_sistem}</td>
                <td className="px-4 py-3">{r.qty_fisik}</td>
                <td className={`px-4 py-3 font-medium ${r.selisih < 0 ? "text-red-600" : r.selisih > 0 ? "text-green-600" : "text-slate-400"}`}>
                  {r.selisih > 0 ? "+" : ""}
                  {r.selisih}
                </td>
                <td className="px-4 py-3 text-slate-500">{r.alasan ?? "-"}</td>
              </tr>
            ))}
            {riwayat.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-slate-400">
                  Belum ada penyesuaian stok.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}