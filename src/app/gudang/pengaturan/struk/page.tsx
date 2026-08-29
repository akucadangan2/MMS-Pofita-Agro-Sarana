import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { updatePengaturanStruk } from "./actions";

type Pengaturan = {
  nama_perusahaan: string;
  footer_text: string;
  ukuran_kertas: string;
  ukuran_font: string;
  catatan_tambahan: string | null;
  tampilkan_logo: boolean;
};

export default async function PengaturanStrukPage({
  searchParams,
}: {
  searchParams: Promise<{ berhasil?: string; error?: string }>;
}) {
  const params = await searchParams;
  const berhasil = params.berhasil === "1";
  const pesanError = params.error;

  const supabase = await createClient();
  const { data } = await supabase.from("pengaturan_struk").select("*").eq("id", 1).maybeSingle();
  const pengaturan = (data as Pengaturan) ?? {
    nama_perusahaan: "CV Profita Agro Sarana",
    footer_text: "Terima kasih",
    ukuran_kertas: "80mm",
    ukuran_font: "sedang",
    catatan_tambahan: "",
    tampilkan_logo: true,
  };

  return (
    <div>
      <Link href="/gudang/pengaturan" className="mb-4 inline-block text-sm text-blue-600 hover:underline">
        ← Kembali ke Pengaturan
      </Link>
      <h1 className="mb-1 text-2xl font-semibold text-slate-800">Pengaturan Struk</h1>
      <p className="mb-6 text-sm text-slate-500">
        Atur tampilan struk yang dicetak (list pengambilan barang & laporan harian)
      </p>

      {berhasil && (
        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          ✓ Pengaturan struk berhasil disimpan.
        </div>
      )}
      {pesanError && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            Gagal menyimpan: {pesanError}
        </div>
        )}

      <form action={updatePengaturanStruk} className="max-w-lg space-y-4 rounded-xl border bg-white p-6 shadow-sm">
        <div>
          <label className="mb-1 block text-xs text-slate-500">Nama Perusahaan (header struk)</label>
          <input
            name="namaPerusahaan"
            defaultValue={pengaturan.nama_perusahaan}
            required
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Catatan Tambahan (opsional)</label>
          <textarea
            name="catatanTambahan"
            defaultValue={pengaturan.catatan_tambahan ?? ""}
            rows={2}
            placeholder="Contoh: Barang yang sudah diambil tidak dapat dikembalikan"
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Teks Footer</label>
          <input
            name="footerText"
            defaultValue={pengaturan.footer_text}
            required
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-xs text-slate-500">Ukuran Kertas</label>
            <select name="ukuranKertas" defaultValue={pengaturan.ukuran_kertas} className="w-full rounded-lg border px-3 py-2 text-sm">
              <option value="58mm">58mm</option>
              <option value="80mm">80mm</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-500">Ukuran Font</label>
            <select name="ukuranFont" defaultValue={pengaturan.ukuran_font} className="w-full rounded-lg border px-3 py-2 text-sm">
              <option value="kecil">Kecil</option>
              <option value="sedang">Sedang</option>
              <option value="besar">Besar</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="tampilkanLogo"
            name="tampilkanLogo"
            defaultChecked={pengaturan.tampilkan_logo}
            className="h-4 w-4"
          />
          <label htmlFor="tampilkanLogo" className="text-sm text-slate-700">
            Tampilkan logo di struk
          </label>
        </div>
        <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Simpan Pengaturan
        </button>
      </form>
    </div>
  );
}