"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Barang = {
  id: string;
  kode: string;
  nama: string;
  satuan_dasar: string;
};

type BarisItem = {
  itemId: string;
  qty: string;
  satuan: string;
};

export default function TambahBarangKeluarPage() {
  const router = useRouter();
  const supabase = createClient();

  const [daftarBarang, setDaftarBarang] = useState<Barang[]>([]);
  const [tanggal, setTanggal] = useState(() => new Date().toISOString().slice(0, 10));
  const [namaPelanggan, setNamaPelanggan] = useState("");
  const [noDo, setNoDo] = useState("");
  const [supir, setSupir] = useState("");
  const [items, setItems] = useState<BarisItem[]>([{ itemId: "", qty: "", satuan: "" }]);
  const [menyimpan, setMenyimpan] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from("items")
      .select("id, kode, nama, satuan_dasar")
      .order("nama")
      .then(({ data }) => setDaftarBarang((data as Barang[]) ?? []));
  }, [supabase]);

  function ubahBaris(index: number, perubahan: Partial<BarisItem>) {
    setItems((prev) => {
      const salinan = [...prev];
      salinan[index] = { ...salinan[index], ...perubahan };
      return salinan;
    });
  }

  function pilihBarang(index: number, itemId: string) {
    const barang = daftarBarang.find((b) => b.id === itemId);
    ubahBaris(index, { itemId, satuan: barang?.satuan_dasar ?? "" });
  }

  function tambahBaris() {
    setItems((prev) => [...prev, { itemId: "", qty: "", satuan: "" }]);
  }

  function hapusBaris(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  async function kurangiStok(itemId: string, qtyKeluar: number) {
    const { data: stockRows } = await supabase
      .from("stock")
      .select("id, qty")
      .eq("item_id", itemId)
      .order("qty", { ascending: false });

    let sisa = qtyKeluar;
    for (const row of stockRows ?? []) {
      if (sisa <= 0) break;
      const potong = Math.min(sisa, row.qty);
      await supabase.from("stock").update({ qty: row.qty - potong }).eq("id", row.id);
      sisa -= potong;
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const itemValid = items.filter((i) => i.itemId && Number(i.qty) > 0);
    if (itemValid.length === 0) {
      setError("Isi minimal 1 barang dengan jumlah lebih dari 0.");
      return;
    }

    setMenyimpan(true);

    const { data: delivery, error: errDelivery } = await supabase
      .from("customer_deliveries")
      .insert({ tanggal, nama_pelanggan: namaPelanggan, no_do: noDo || null, supir: supir || null })
      .select()
      .single();

    if (errDelivery || !delivery) {
      setError(errDelivery?.message ?? "Gagal menyimpan data pengiriman.");
      setMenyimpan(false);
      return;
    }

    const payload = itemValid.map((i) => ({
      delivery_id: delivery.id,
      item_id: i.itemId,
      qty: Number(i.qty),
      satuan: i.satuan,
    }));

    const { error: errItems } = await supabase.from("delivery_items").insert(payload);
    if (errItems) {
      setError(errItems.message);
      setMenyimpan(false);
      return;
    }

    for (const i of itemValid) {
      await kurangiStok(i.itemId, Number(i.qty));
    }

    router.push("/gudang/barang-keluar");
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-slate-800">Catat Barang Keluar</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-4 rounded-lg border bg-white p-6">
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="mb-1 block text-xs text-slate-500">Tanggal</label>
            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              required
              className="w-full rounded border px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-500">Nama Pelanggan</label>
            <input
              value={namaPelanggan}
              onChange={(e) => setNamaPelanggan(e.target.value)}
              required
              className="w-full rounded border px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-500">No DO</label>
            <input value={noDo} onChange={(e) => setNoDo(e.target.value)} className="w-full rounded border px-3 py-2 text-sm" />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs text-slate-500">Supir</label>
          <input value={supir} onChange={(e) => setSupir(e.target.value)} className="w-full rounded border px-3 py-2 text-sm" />
        </div>

        <div>
          <p className="mb-2 text-sm font-medium text-slate-700">Daftar Barang</p>
          <div className="space-y-2">
            {items.map((row, index) => (
              <div key={index} className="flex items-center gap-2">
                <select
                  value={row.itemId}
                  onChange={(e) => pilihBarang(index, e.target.value)}
                  required
                  className="flex-1 rounded border px-3 py-2 text-sm"
                >
                  <option value="">Pilih barang...</option>
                  {daftarBarang.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.kode} - {b.nama}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Qty"
                  value={row.qty}
                  onChange={(e) => ubahBaris(index, { qty: e.target.value })}
                  required
                  min={0}
                  className="w-24 rounded border px-3 py-2 text-sm"
                />
                <span className="w-14 text-sm text-slate-500">{row.satuan || "-"}</span>
                <button
                  type="button"
                  onClick={() => hapusBaris(index)}
                  className="text-xs text-red-600 hover:underline"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={tambahBaris}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            + Tambah baris barang
          </button>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={menyimpan}
          className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {menyimpan ? "Menyimpan..." : "Simpan"}
        </button>
      </form>
    </div>
  );
}