"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

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

  return (
    <div className="min-h-screen bg-slate-100 lg:flex">
      {/* =====================================================
          LEFT — GAME / BRANDING AREA
      ====================================================== */}
      <div className="relative hidden min-h-screen overflow-hidden lg:flex lg:w-[58%]">
        {/* Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b82f6] via-[#60a5fa] to-[#dbeafe]" />

        {/* Sun */}
        <div className="absolute right-[12%] top-[10%] h-24 w-24 rounded-full bg-yellow-300 shadow-[0_0_70px_rgba(253,224,71,0.65)]" />

        {/* Clouds */}
        <div className="cloud cloud-one absolute left-[10%] top-[15%]">
          <div className="relative h-8 w-24 rounded-full bg-white/95">
            <div className="absolute -top-5 left-5 h-12 w-12 rounded-full bg-white/95" />
            <div className="absolute -top-3 left-14 h-10 w-10 rounded-full bg-white/95" />
          </div>
        </div>

        <div className="cloud cloud-two absolute right-[18%] top-[28%]">
          <div className="relative h-7 w-20 rounded-full bg-white/80">
            <div className="absolute -top-4 left-4 h-10 w-10 rounded-full bg-white/80" />
            <div className="absolute -top-2 left-11 h-8 w-8 rounded-full bg-white/80" />
          </div>
        </div>

        {/* Main branding */}
        <div className="relative z-20 flex w-full flex-col items-center justify-center px-12 pb-40 text-center">
          {/* Logo */}
          <div className="mb-6 rounded-3xl border border-white/30 bg-white/90 p-5 shadow-2xl shadow-blue-900/20 backdrop-blur-md">
            <img
              src="/logo.png"
              alt="CV Profita Agro Sarana"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Company */}
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-white/90">
            CV Profita Agro Sarana
          </p>

          <div className="mb-4 inline-flex rounded-full border border-white/30 bg-white/15 px-5 py-2 backdrop-blur-md">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-white">
              WMS • SYSTEM
            </span>
          </div>

          <h1 className="text-6xl font-black tracking-tight text-white drop-shadow-[4px_5px_0_rgba(30,64,175,0.35)]">
            WMS
          </h1>

          <h2 className="mt-2 text-2xl font-bold text-blue-50">
            Warehouse Management System
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-blue-50/95">
            Sistem terintegrasi untuk mengelola inventory, gudang,
            barang masuk, barang keluar, dan aktivitas operasional
            CV Profita Agro Sarana.
          </p>
        </div>

        {/* =====================================================
            GAME WORLD
        ====================================================== */}
        <div className="absolute bottom-0 left-0 right-0 h-48">
          {/* Hills */}
          <div className="absolute bottom-20 left-[-10%] h-40 w-[58%] rounded-[50%] bg-green-500" />

          <div className="absolute bottom-20 right-[-15%] h-48 w-[65%] rounded-[50%] bg-green-600" />

          {/* Ground */}
          <div className="absolute bottom-0 h-20 w-full border-t-4 border-green-800 bg-[#8b5a2b]">
            <div className="grid h-full grid-cols-12 opacity-30">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-black/20" />
              ))}
            </div>
          </div>

          {/* Bricks */}
          <div className="absolute bottom-20 left-[14%] flex gap-1">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="brick h-10 w-10 rounded-md border-4 border-orange-700 bg-orange-400 shadow-[inset_3px_3px_0_rgba(255,255,255,0.3)]"
              >
                <div className="h-full w-full opacity-20">
                  <div className="h-1/2 border-b-2 border-orange-800" />
                </div>
              </div>
            ))}
          </div>

          {/* Question Block */}
          <div className="question-block absolute bottom-20 left-[31%] flex h-11 w-11 items-center justify-center rounded-md border-4 border-yellow-700 bg-yellow-400 text-xl font-black text-yellow-900 shadow-[inset_3px_3px_0_rgba(255,255,255,0.35)]">
            ?
          </div>

          {/* Character */}
          <div className="character absolute bottom-[77px] left-[43%]">
            {/* Hat */}
            <div className="mx-auto mb-[-3px] h-3 w-12 rounded-t-lg bg-red-500" />

            {/* Head */}
            <div className="relative mx-auto h-10 w-10 rounded-xl border-2 border-orange-700 bg-orange-300">
              <div className="absolute left-2 top-3 h-2 w-2 rounded-full bg-slate-800" />
              <div className="absolute right-2 top-3 h-2 w-2 rounded-full bg-slate-800" />
              <div className="absolute bottom-2 left-1/2 h-1 w-4 -translate-x-1/2 rounded-full bg-orange-700" />
            </div>

            {/* Body */}
            <div className="mx-auto h-9 w-12 rounded-lg border-2 border-blue-800 bg-blue-600" />

            {/* Legs */}
            <div className="mx-auto flex w-12 justify-between">
              <div className="h-5 w-4 rounded-b-md bg-slate-800" />
              <div className="h-5 w-4 rounded-b-md bg-slate-800" />
            </div>
          </div>

          {/* Coins */}
          <div className="coin coin-one absolute bottom-32 left-[60%]">
            ★
          </div>

          <div className="coin coin-two absolute bottom-44 left-[67%]">
            ★
          </div>

          <div className="coin coin-three absolute bottom-32 left-[74%]">
            ★
          </div>

          {/* Flag */}
          <div className="absolute bottom-20 right-[10%]">
            <div className="h-20 w-1 bg-slate-700" />
            <div className="absolute left-1 top-1 h-8 w-14 rounded-r-md bg-red-500 shadow-md" />
          </div>
        </div>

        {/* Bottom branding */}
        <div className="absolute bottom-5 left-0 right-0 z-30 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/80">
            CV PROFITA AGRO SARANA
          </p>
        </div>
      </div>

      {/* =====================================================
          RIGHT — LOGIN
      ====================================================== */}
      <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 px-5 py-10 lg:w-[42%]">
        <div className="w-full max-w-md">
          {/* Mobile Logo / Desktop Login Header */}
          <div className="mb-8 text-center lg:text-left">
            <div className="mb-5 flex justify-center lg:justify-start">
              <img
                src="/logo.png"
                alt="CV Profita Agro Sarana"
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              CV Profita Agro Sarana
            </p>

            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Selamat Datang 👋
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Masuk ke Warehouse Management System
            </p>
          </div>

          {/* Login Card */}
          <form
            onSubmit={handleLogin}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 sm:p-9"
          >
            {/* Email */}
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Password */}
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-14 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
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

            {/* Error */}
            {error && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-600">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full overflow-x-auto rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="relative z-10">
                {loading ? "Memproses..." : "Masuk ke WMS →"}
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
            </button>

            {/* Security */}
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

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} CV Profita Agro Sarana
          </p>
        </div>
      </div>

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

        .character {
          animation: characterJump 1.1s steps(2) infinite;
        }

        .coin {
          font-size: 28px;
          font-weight: 900;
          color: #facc15;
          text-shadow:
            2px 2px 0 #a16207,
            0 0 12px rgba(250, 204, 21, 0.7);
          animation: coinFloat 1.2s ease-in-out infinite;
        }

        .coin-two {
          animation-delay: 0.2s;
        }

        .coin-three {
          animation-delay: 0.4s;
        }

        .question-block {
          animation: questionBounce 1.4s ease-in-out infinite;
        }

        .brick {
          animation: brickFloat 2s ease-in-out infinite;
        }

        .brick:nth-child(2) {
          animation-delay: 0.15s;
        }

        .brick:nth-child(3) {
          animation-delay: 0.3s;
        }

        .brick:nth-child(4) {
          animation-delay: 0.45s;
        }

        @keyframes characterJump {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes coinFloat {
          0%,
          100% {
            transform: translateY(0) rotateY(0deg);
          }

          50% {
            transform: translateY(-10px) rotateY(180deg);
          }
        }

        @keyframes questionBounce {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes brickFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes cloudMoveOne {
          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(40px);
          }
        }

        @keyframes cloudMoveTwo {
          0%,
          100% {
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

