"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ComboboxBarang } from "@/components/ui/ComboboxBarang";

type Barang = { id: string; kode: string; nama: string; satuan_dasar: string };
type SatuanTambahan = { item_id: string; nama_satuan: string; faktor_konversi: number };

type BarisItem = {
  itemId: string;
  teksBarang: string;
  qty: string;
  satuan: string;
};

export default function TambahBarangKeluarPage() {
  const router = useRouter();
  const supabase = createClient();

  const [daftarBarang, setDaftarBarang] = useState<Barang[]>([]);
  const [satuanTambahan, setSatuanTambahan] = useState<SatuanTambahan[]>([]);

  const [tanggal, setTanggal] = useState(new Date().toISOString().slice(0, 10));
  const [namaPelanggan, setNamaPelanggan] = useState("");
  const [noDo, setNoDo] = useState("");
  const [supir, setSupir] = useState("");
  const [platMobil, setPlatMobil] = useState("");

  const [baris, setBaris] = useState<BarisItem[]>([{ itemId: "", teksBarang: "", qty: "", satuan: "" }]);
  const [menyimpan, setMenyimpan] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function muat() {
      const { data: items } = await supabase.from("items").select("id, kode, nama, satuan_dasar").eq("nonaktif", false).order("nama").range(0, 9999);
      setDaftarBarang((items as Barang[]) ?? []);

      const { data: satuan } = await supabase.from("item_units").select("item_id, nama_satuan, faktor_konversi").range(0, 9999);
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

  function ubahBaris(index: number, field: "qty" | "satuan", value: string) {
    setBaris((prev) => {
      const baru = [...prev];
      baru[index] = { ...baru[index], [field]: value };
      return baru;
    });
  }

  function pilihBarang(index: number, barangTerpilih: Barang | null, teks: string) {
    setBaris((prev) => {
      const baru = [...prev];
      const opsi = barangTerpilih ? opsiSatuan(barangTerpilih.id) : [];
      baru[index] = {
        ...baru[index],
        teksBarang: teks,
        itemId: barangTerpilih ? barangTerpilih.id : "",
        satuan: opsi[0] ?? "",
      };
      return baru;
    });
  }

  function tambahBaris() {
    setBaris((prev) => [...prev, { itemId: "", teksBarang: "", qty: "", satuan: "" }]);
  }

  function hapusBaris(index: number) {
    setBaris((prev) => prev.filter((_, i) => i !== index));
  }

  async function simpan() {
    setError(null);

    if (!namaPelanggan.trim()) {
      setError("Nama pelanggan wajib diisi.");
      return;
    }
    const barisValid = baris.filter((b) => b.itemId && Number(b.qty) > 0);
    if (barisValid.length === 0) {
      setError("Minimal 1 barang dengan qty lebih dari 0.");
      return;
    }

    setMenyimpan(true);

    const { data: delivery, error: errDelivery } = await supabase
      .from("customer_deliveries")
      .insert({
        tanggal,
        nama_pelanggan: namaPelanggan,
        no_do: noDo || null,
        supir: supir || null,
        plat_mobil: platMobil || null,
      })
      .select()
      .single();

    if (errDelivery || !delivery) {
      setError(errDelivery?.message ?? "Gagal menyimpan data.");
      setMenyimpan(false);
      return;
    }

    const deliveryItemsPayload = barisValid.map((b) => ({
      delivery_id: delivery.id,
      item_id: b.itemId,
      qty: Number(b.qty),
      satuan: b.satuan,
    }));
    await supabase.from("delivery_items").insert(deliveryItemsPayload);

    const totalPerItem = new Map<string, number>();
    for (const b of barisValid) {
      const infoSatuan = satuanTambahan.find((s) => s.item_id === b.itemId && s.nama_satuan === b.satuan);
      const faktor = infoSatuan?.faktor_konversi ?? 1;
      const qtyDalamSatuanDasar = Number(b.qty) * faktor;
      totalPerItem.set(b.itemId, (totalPerItem.get(b.itemId) ?? 0) + qtyDalamSatuanDasar);
    }

    await Promise.all(
      Array.from(totalPerItem.entries()).map(async ([itemId, qtyDalamSatuanDasar]) => {
        const { data: stockRows } = await supabase
          .from("stock")
          .select("id, qty")
          .eq("item_id", itemId)
          .order("qty", { ascending: false });

        let sisa = qtyDalamSatuanDasar;
        for (const row of stockRows ?? []) {
          if (sisa <= 0) break;
          const potong = Math.min(sisa, row.qty);
          await supabase.from("stock").update({ qty: row.qty - potong }).eq("id", row.id);
          sisa -= potong;
        }
      })
    );

    const movementsPayload = barisValid.map((b) => ({
      item_id: b.itemId,
      tipe: "keluar",
      qty: Number(b.qty),
      satuan: b.satuan,
      ref_id: delivery.id,
      ref_tipe: "barang_keluar_customer",
    }));
    await supabase.from("stock_movements").insert(movementsPayload);

    setMenyimpan(false);
    router.push("/gudang/barang-keluar");
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-slate-800">Catat Barang Keluar</h1>

      <div className="mb-6 grid grid-cols-1 gap-4 rounded-xl border bg-white p-4 shadow-sm sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs text-slate-500">Tanggal</label>
          <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Nama Pelanggan</label>
          <input value={namaPelanggan} onChange={(e) => setNamaPelanggan(e.target.value)} className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">No DO</label>
          <input value={noDo} onChange={(e) => setNoDo(e.target.value)} className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Supir</label>
          <input value={supir} onChange={(e) => setSupir(e.target.value)} className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Plat Mobil</label>
          <input value={platMobil} onChange={(e) => setPlatMobil(e.target.value)} placeholder="B 1234 XYZ" className="w-full rounded-lg border px-3 py-2 text-sm" />
        </div>
      </div>

      <div className="mb-4 rounded-xl border bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-sm font-medium text-slate-700">Daftar Barang</h2>

        {baris.map((b, i) => (
          <div key={i} className="mb-3 flex flex-wrap items-end gap-3">
            <div className="min-w-[220px] flex-1">
              <label className="mb-1 block text-xs text-slate-500">Barang</label>
              <ComboboxBarang
                daftarBarang={daftarBarang}
                value={b.teksBarang}
                onPilih={(barangTerpilih, teks) => pilihBarang(i, barangTerpilih, teks)}
              />
            </div>
            <div className="w-28">
              <label className="mb-1 block text-xs text-slate-500">Qty</label>
              <input
                type="number"
                min={0}
                value={b.qty}
                onChange={(e) => ubahBaris(i, "qty", e.target.value)}
                className="w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>
            <div className="w-28">
              <label className="mb-1 block text-xs text-slate-500">Satuan</label>
              <select
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
            <button onClick={() => hapusBaris(i)} className="rounded-lg border border-red-300 px-3 py-2 text-xs text-red-600 hover:bg-red-50">
              Hapus
            </button>
          </div>
        ))}

        <button onClick={tambahBaris} className="text-sm text-blue-600 hover:underline">
          + Tambah Baris
        </button>
      </div>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <button
        onClick={simpan}
        disabled={menyimpan}
        className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 disabled:opacity-50"
      >
        {menyimpan ? "Menyimpan..." : "Simpan"}
      </button>
    </div>
  );
}