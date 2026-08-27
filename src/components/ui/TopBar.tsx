"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function TopBar({ nama }: { nama: string }) {
  const router = useRouter();
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-black/5 bg-white/70 px-6 backdrop-blur-xl">
      <span className="text-[15px] text-slate-600">
        Halo, <span className="font-medium text-slate-900">{nama}</span>
      </span>
      <button
        onClick={handleLogout}
        className="rounded-full px-4 py-1.5 text-sm font-medium text-[#FF3B30] hover:bg-[#FF3B30]/10"
      >
        Logout
      </button>
    </header>
  );
}