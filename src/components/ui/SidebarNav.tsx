"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string; icon: string };

export function SidebarNav({ title, items }: { title: string; items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col bg-[#F2F2F7]/80 px-3 py-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-2 px-3">
        <img src="/logo.png" alt="Logo" className="h-9 w-9 rounded-xl object-contain shadow-sm" />
        <p className="text-base font-semibold text-slate-900">{title}</p>
      </div>
      <nav className="flex-1 space-y-1">
        {items.map((item) => {
          const aktif = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] transition-all ${
                aktif ? "bg-[#007AFF] font-medium text-white shadow-sm" : "text-slate-700 hover:bg-black/5"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}