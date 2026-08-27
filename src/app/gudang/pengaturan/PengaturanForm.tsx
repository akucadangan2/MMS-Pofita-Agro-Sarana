"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { updateNama } from "./actions";

export function PengaturanForm({
  email,
  role,
  namaSekarang,
}: {
  email: string;
  role: string;
  namaSekarang: string;
}) {
  const supabase = createClient();
  const [passwordBaru, setPasswordBaru] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");
  const [statusPassword, setStatusPassword] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string | null>(null);
  const [menyimpan, setMenyimpan] = useState(false);

  async function handleGantiPassword(e: React.FormEvent) {
    e.preventDefault();
    setErrorPassword(null);
    setStatusPassword(null);

    if (passwordBaru.length < 6) {
      setErrorPassword("Password minimal 6 karakter.");
      return;
    }
    if (passwordBaru !== konfirmasi) {
      setErrorPassword("Konfirmasi password tidak cocok.");
      return;
    }

    setMenyimpan(true);
    const { error } = await supabase.auth.updateUser({ password: passwordBaru });
    setMenyimpan(false);

    if (error) {
      setErrorPassword(error.message);
    } else {
      setStatusPassword("Password berhasil diganti.");
      setPasswordBaru("");
      setKonfirmasi("");
    }
  }

  return (
    <div className="max-w-lg space-y-6">
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-sm font-medium text-slate-700">Info Akun</h2>
        <p className="text-sm text-slate-500">
          Email: <span className="text-slate-800">{email}</span>
        </p>
        <p className="text-sm text-slate-500">
          Role: <span className="text-slate-800 capitalize">{role}</span>
        </p>
      </div>

      <form action={updateNama} className="rounded-xl border bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-sm font-medium text-slate-700">Ubah Nama</h2>
        <input
          type="text"
          name="nama"
          required
          defaultValue={namaSekarang}
          placeholder="Nama lengkap"
          className="mb-3 w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Simpan Nama
        </button>
      </form>

      <form onSubmit={handleGantiPassword} className="rounded-xl border bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-sm font-medium text-slate-700">Ganti Password</h2>
        <input
          type="password"
          placeholder="Password baru"
          value={passwordBaru}
          onChange={(e) => setPasswordBaru(e.target.value)}
          className="mb-3 w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
        <input
          type="password"
          placeholder="Konfirmasi password baru"
          value={konfirmasi}
          onChange={(e) => setKonfirmasi(e.target.value)}
          className="mb-3 w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
        {errorPassword && <p className="mb-3 text-sm text-red-600">{errorPassword}</p>}
        {statusPassword && <p className="mb-3 text-sm text-green-600">{statusPassword}</p>}
        <button
          type="submit"
          disabled={menyimpan}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {menyimpan ? "Menyimpan..." : "Ganti Password"}
        </button>
      </form>
    </div>
  );
}