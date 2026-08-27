import { createClient } from "@/lib/supabase/server";
import { tambahUser, hapusUser } from "./actions";

type UserRow = {
  id: string;
  auth_id: string | null;
  nama: string;
  role: string;
  branches: { nama: string } | null;
};

type Branch = { id: string; nama: string };

export default async function MasterUserPage() {
  const supabase = await createClient();

  const { data: usersData, error } = await supabase
    .from("users")
    .select("id, auth_id, nama, role, branches(nama)")
    .order("nama");

  const users = (usersData as unknown as UserRow[]) ?? [];

  const { data: branchesData } = await supabase.from("branches").select("id, nama").order("nama");
  const branches = (branchesData as Branch[]) ?? [];

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-slate-800">Master User</h1>

      <form action={tambahUser} className="mb-6 grid max-w-2xl grid-cols-2 gap-3 rounded-lg border bg-white p-4">
        <div>
          <label className="mb-1 block text-xs text-slate-500">Nama</label>
          <input name="nama" required className="w-full rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Email</label>
          <input type="email" name="email" required className="w-full rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Password Awal</label>
          <input type="text" name="password" required minLength={6} className="w-full rounded border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-500">Role</label>
          <select name="role" required className="w-full rounded border px-3 py-2 text-sm">
            <option value="cabang">Cabang</option>
            <option value="gudang">Gudang</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="mb-1 block text-xs text-slate-500">Cabang (kalau role = Cabang)</label>
          <select name="branchId" className="w-full rounded border px-3 py-2 text-sm">
            <option value="">- Tidak berlaku -</option>
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.nama}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="col-span-2 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          + Tambah User
        </button>
      </form>

      {error && <p className="mb-3 text-sm text-red-600">Error: {error.message}</p>}

      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Cabang</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="px-4 py-2">{u.nama}</td>
                <td className="px-4 py-2">{u.role}</td>
                <td className="px-4 py-2">{u.branches?.nama ?? "-"}</td>
                <td className="px-4 py-2">
                  <form action={hapusUser}>
                    <input type="hidden" name="id" value={u.id} />
                    <input type="hidden" name="authId" value={u.auth_id ?? ""} />
                    <button type="submit" className="text-xs text-red-600 hover:underline">
                      Hapus
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-400">
                  Belum ada user.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}