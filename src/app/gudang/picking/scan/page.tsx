"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { QrScannerBox } from "@/components/ui/QrScannerBox";
import { tandaiTerambil } from "../../request/actions";

type Hasil = {
  id: string;
  request_id: string;
  qty_diminta: number;
  satuan: string;
  no_request: string;
  nama_cabang: string;
};

type RowJoin = {
  id: string;
  request_id: string;
  qty_diminta: number;
  satuan: string;
  requests: { no_request: string; branches: { nama: string } | null } | null;
};

export default function ScanPickingPage() {
  const supabase = createClient();
  const [hasil, setHasil] = useState<Hasil[]>([]);
  const [namaBarang, setNamaBarang] = useState("");
  const [pesan, setPesan] = useState<string | null>(null);
  const [scanning, setScanning] = useState(true);

  async function handleScan(kode: string) {
    setScanning(false);
    setPesan(null);

    const kodeBersih = kode.trim();

    const { data: item } = await supabase
      .from("items")
      .select("id, nama")
      .or(`kode.eq.${kodeBersih},barcode.eq.${kodeBersih}`)
      .maybeSingle();

    if (!item) {
      setPesan(`Kode "${kode}" tidak dikenali sebagai barang.`);
      setHasil([]);
      return;
    }

    setNamaBarang(item.nama);

    const { data: rows } = await supabase
      .from("request_items")
      .select("id, request_id, qty_diminta, satuan, requests(no_request, branches(nama))")
      .eq("item_id", item.id)
      .neq("status", "terambil");

    const daftar: Hasil[] = ((rows as unknown as RowJoin[]) ?? []).map((r) => ({
      id: r.id,
      request_id: r.request_id,
      qty_diminta: r.qty_diminta,
      satuan: r.satuan,
      no_request: r.requests?.no_request ?? "-",
      nama_cabang: r.requests?.branches?.nama ?? "-",
    }));

    if (daftar.length === 0) {
      setPesan(`"${item.nama}" tidak ada di antrian picking saat ini.`);
    }
    setHasil(daftar);
  }

  function scanLagi() {
    setHasil([]);
    setPesan(null);
    setNamaBarang("");
    setScanning(true);
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-2xl font-semibold text-slate-800">Scan Picking</h1>
          <p className="text-sm text-slate-500">Arahkan kamera ke QR kode atau barcode barang</p>
        </div>
        <Link href="/gudang/picking" className="text-sm text-blue-600 hover:underline">
          ← Kembali ke Picking
        </Link>
      </div>

      {scanning && (
        <div className="mx-auto max-w-sm rounded-xl border bg-white p-4 shadow-sm">
          <QrScannerBox onScan={handleScan} />
        </div>
      )}

      {!scanning && (
        <div className="mx-auto max-w-lg">
          {namaBarang && (
            <p className="mb-3 text-center text-sm text-slate-600">
              Hasil scan: <span className="font-medium text-slate-800">{namaBarang}</span>
            </p>
          )}

          {pesan && (
            <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
              {pesan}
            </div>
          )}

          {hasil.length > 0 && (
            <div className="mb-4 overflow-x-auto rounded-xl border bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">No Request</th>
                    <th className="px-4 py-3 font-medium">Cabang</th>
                    <th className="px-4 py-3 font-medium">Qty</th>
                    <th className="px-4 py-3 font-medium">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {hasil.map((h) => (
                    <tr key={h.id} className="border-t">
                      <td className="px-4 py-3">{h.no_request}</td>
                      <td className="px-4 py-3">{h.nama_cabang}</td>
                      <td className="px-4 py-3">{h.qty_diminta} {h.satuan}</td>
                      <td className="px-4 py-3">
                        <form action={tandaiTerambil}>
                          <input type="hidden" name="itemId" value={h.id} />
                          <input type="hidden" name="requestId" value={h.request_id} />
                          <input type="hidden" name="qtyDiminta" value={h.qty_diminta} />
                          <button type="submit" className="rounded bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
                            Tandai Terambil
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <button onClick={scanLagi} className="w-full rounded-lg bg-slate-800 px-4 py-3 text-sm font-medium text-white hover:bg-slate-900">
            Scan Lagi
          </button>
        </div>
      )}
    </div>
  );
}