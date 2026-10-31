"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { InstallPWAButton } from "@/components/ui/InstallPWAButton";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError || !authData.user) {
      setError(authError?.message ?? "Login gagal");
      setLoading(false);
      return;
    }

    const { data: userRow } = await supabase
      .from("users")
      .select("role")
      .eq("auth_id", authData.user.id)
      .maybeSingle();

    if (!userRow) {
      setError(
        "Akun ini belum terdaftar di tabel users, atau tidak punya akses web."
      );
      await supabase.auth.signOut();
      setLoading(false);
      return;
    }

    if (userRow.role === "admin" || userRow.role === "super_admin") {
      router.push("/admin/dashboard");
    } else if (userRow.role === "gudang") {
      router.push("/gudang/dashboard");
    } else {
      setError(
        "Akun ini untuk app Cabang (mobile), bukan untuk web Gudang/Admin."
      );
      await supabase.auth.signOut();
      setLoading(false);
    }
  }

  const fitur = [
    {
      judul: "Request Barang Real-Time",
      deskripsi: "Cabang mengajukan permintaan barang langsung dari aplikasi Android, langsung muncul di dashboard gudang.",
    },
    {
      judul: "Picking per Lantai & Sesi",
      deskripsi: "Alur pengambilan barang terstruktur per lantai gudang dan sesi kerja (pagi/siang), termasuk status pending.",
    },
    {
      judul: "Stok Otomatis Ter-update",
      deskripsi: "Stok terpotong otomatis saat barang diambil, lengkap dengan peringatan jika stok tidak mencukupi.",
    },
    {
      judul: "Barang Masuk & Keluar",
      deskripsi: "Pencatatan lengkap dengan Delivery Order (DO), konversi satuan otomatis (PCS ke DUS/BOX), dan riwayat transaksi.",
    },
    {
      judul: "Laporan & Cetak Struk",
      deskripsi: "Laporan harian per sesi yang bisa dicetak A4 atau diekspor, serta cetak struk thermal dengan pengaturan kustom.",
    },
    {
      judul: "Multi-Level Akses",
      deskripsi: "Peran berjenjang Super Admin, Admin, Gudang, dan Cabang, masing-masing dengan hak akses sesuai tanggung jawab.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* =====================================================
          TOP — FARM SCENE + LOGIN
      ====================================================== */}
      <div className="lg:flex">
        {/* LEFT — FARM ANIMATION */}
        <div className="relative hidden min-h-screen overflow-hidden lg:flex lg:w-[58%]">
          {/* Sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#60a5fa] via-[#93c5fd] to-[#dcfce7]" />

          {/* Sun */}
          <div className="sun-glow absolute right-[14%] top-[9%] h-24 w-24 rounded-full bg-yellow-300 shadow-[0_0_80px_rgba(253,224,71,0.7)]" />

          {/* Clouds */}
          <div className="cloud cloud-one absolute left-[8%] top-[13%]">
            <div className="relative h-8 w-24 rounded-full bg-white/90">
              <div className="absolute -top-5 left-5 h-12 w-12 rounded-full bg-white/90" />
              <div className="absolute -top-3 left-14 h-10 w-10 rounded-full bg-white/90" />
            </div>
          </div>
          <div className="cloud cloud-two absolute right-[22%] top-[24%]">
            <div className="relative h-7 w-20 rounded-full bg-white/75">
              <div className="absolute -top-4 left-4 h-10 w-10 rounded-full bg-white/75" />
              <div className="absolute -top-2 left-11 h-8 w-8 rounded-full bg-white/75" />
            </div>
          </div>

          {/* Birds */}
          <div className="bird bird-one absolute left-[30%] top-[18%] text-xl text-slate-700/70">⌃</div>
          <div className="bird bird-two absolute left-[40%] top-[22%] text-sm text-slate-700/60">⌃</div>

          {/* Windmill */}
          <div className="absolute right-[10%] top-[30%]">
            <div className="mx-auto h-16 w-1.5 bg-slate-500" />
            <div className="windmill-blades relative -mt-16 ml-[-29px] h-16 w-16">
              <div className="absolute left-1/2 top-1/2 h-14 w-2 -translate-x-1/2 -translate-y-full rounded-full bg-slate-100" />
              <div className="absolute left-1/2 top-1/2 h-2 w-14 -translate-y-1/2 translate-x-0 rounded-full bg-slate-100" />
              <div className="absolute left-1/2 top-1/2 h-14 w-2 -translate-x-1/2 rounded-full bg-slate-100" />
              <div className="absolute left-1/2 top-1/2 h-2 w-14 -translate-x-full -translate-y-1/2 rounded-full bg-slate-100" />
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-600" />
            </div>
          </div>

          {/* Main branding */}
          <div className="relative z-20 flex w-full flex-col items-center justify-center px-12 pb-40 text-center">
            <div className="mb-6 rounded-3xl border border-white/30 bg-white/90 p-5 shadow-2xl shadow-green-900/20 backdrop-blur-md">
              <img
                src="/logo.png"
                alt="CV Profita Agro Sarana"
                className="h-20 w-auto object-contain"
              />
            </div>

            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-white/90">
              CV Profita Agro Sarana
            </p>

            <div className="mb-4 inline-flex rounded-full border border-white/30 bg-white/15 px-5 py-2 backdrop-blur-md">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-white">
                WMS • SYSTEM
              </span>
            </div>

            <h1 className="text-6xl font-black tracking-tight text-white drop-shadow-[4px_5px_0_rgba(21,94,53,0.35)]">
              WMS
            </h1>

            <h2 className="mt-2 text-2xl font-bold text-green-50">
              Warehouse Management System
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-green-50/95">
              Sistem terintegrasi untuk mengelola inventory, gudang,
              barang masuk, barang keluar, dan aktivitas operasional
              CV Profita Agro Sarana.
            </p>
          </div>

          {/* FIELD */}
          <div className="absolute bottom-0 left-0 right-0 h-48">
            {/* Hills */}
            <div className="absolute bottom-20 left-[-10%] h-40 w-[58%] rounded-[50%] bg-green-500" />
            <div className="absolute bottom-20 right-[-15%] h-48 w-[65%] rounded-[50%] bg-green-600" />

            {/* Soil */}
            <div className="absolute bottom-0 h-20 w-full border-t-4 border-amber-900 bg-[#8b5a2b]">
              <div className="grid h-full grid-cols-12 opacity-30">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-black/20" />
                ))}
              </div>
            </div>

            {/* Crop rows */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-around">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="crop"
                  style={{ animationDelay: `${(i % 5) * 0.2}s` }}
                >
                  <div className="h-5 w-1 rounded-full bg-green-700" />
                  <div className="-mt-4 ml-[-6px] h-3 w-3 rounded-full bg-green-400" />
                  <div className="-mt-3 ml-[6px] h-3 w-3 rounded-full bg-green-500" />
                </div>
              ))}
            </div>

            {/* Barn */}
            <div className="absolute bottom-20 left-[20%]">
              <div className="relative h-10 w-14 bg-red-600">
                <div
                  className="absolute -top-5 left-0 h-5 w-14"
                  style={{
                    background: "#b91c1c",
                    clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-1/2 h-6 w-3 -translate-x-1/2 bg-amber-900" />
              </div>
            </div>
          </div>

          {/* Bottom branding */}
          <div className="absolute bottom-5 left-0 right-0 z-30 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-white/80">
              CV PROFITA AGRO SARANA
            </p>
          </div>
        </div>

        {/* RIGHT — LOGIN */}
        <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 px-5 py-10 lg:w-[42%]">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center lg:text-left">
              <div className="mb-5 flex justify-center lg:justify-start">
                <img
                  src="/logo.png"
                  alt="CV Profita Agro Sarana"
                  className="h-16 w-auto object-contain"
                />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                CV Profita Agro Sarana
              </p>

              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                Selamat Datang
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Masuk ke Warehouse Management System
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 sm:p-9"
            >
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    @
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="nama@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    •
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Masukkan password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-14 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {error && (
                <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full overflow-x-auto rounded-xl bg-green-700 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="relative z-10">
                  {loading ? "Memproses..." : "Masuk ke WMS →"}
                </span>
                <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
              </button>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Secure Login
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                Akses khusus pengguna Gudang dan Admin.
                <br />
                Staff Cabang menggunakan aplikasi mobile.
              </p>
            </form>

            <div className="mt-6 flex flex-col items-center gap-3">
              <InstallPWAButton />
              <p className="text-center text-xs text-slate-400">
                © {new Date().getFullYear()} CV Profita Agro Sarana
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FITUR
      ====================================================== */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900">Fitur Utama</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fitur.map((f) => (
              <div key={f.judul} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="mb-2 text-sm font-bold text-slate-900">{f.judul}</h3>
                <p className="text-sm leading-6 text-slate-500">{f.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}
      <style jsx>{`
        .cloud-one {
          animation: cloudMoveOne 18s ease-in-out infinite;
        }
        .cloud-two {
          animation: cloudMoveTwo 24s ease-in-out infinite;
        }
        .sun-glow {
          animation: sunPulse 4s ease-in-out infinite;
        }
        .bird-one {
          animation: birdFly 12s linear infinite;
        }
        .bird-two {
          animation: birdFly 16s linear infinite;
          animation-delay: 2s;
        }
        .windmill-blades {
          animation: spin 6s linear infinite;
        }
        .crop {
          animation: cropSway 2.4s ease-in-out infinite;
          transform-origin: bottom center;
        }

        @keyframes sunPulse {
          0%, 100% {
            box-shadow: 0 0 80px rgba(253, 224, 71, 0.7);
          }
          50% {
            box-shadow: 0 0 100px rgba(253, 224, 71, 0.95);
          }
        }

        @keyframes birdFly {
          0% {
            transform: translateX(-10px);
          }
          50% {
            transform: translateX(260px) translateY(-14px);
          }
          100% {
            transform: translateX(520px) translateY(0);
            opacity: 0;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes cropSway {
          0%, 100% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }

        @keyframes cloudMoveOne {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(40px);
          }
        }

        @keyframes cloudMoveTwo {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-35px);
          }
        }
      `}</style>
    </div>
  );
}