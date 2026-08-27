"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

type NavItem = { label: string; href: string; icon: React.ReactElement };

function renderIcon(icon: React.ReactElement, size: number) {
  return icon;
}

export function AppShell({
  title,
  items,
  topBar,
  children,
}: {
  title: string;
  items: NavItem[];
  topBar: React.ReactNode;
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerTerbuka, setDrawerTerbuka] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved === "true") setCollapsed(true);
  }, []);

  useEffect(() => {
    setDrawerTerbuka(false);
  }, [pathname]);

  function toggle() {
    setCollapsed((v) => {
      localStorage.setItem("sidebar-collapsed", String(!v));
      return !v;
    });
  }

  function isiMenu(ukuranIkon: number, tutupSetelahKlik: boolean) {
    return items.map((item) => {
      const aktif = pathname.startsWith(item.href);
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => tutupSetelahKlik && setDrawerTerbuka(false)}
          className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-base transition-all ${
            aktif ? "bg-[#007AFF] font-medium text-white shadow-sm" : "text-slate-700 hover:bg-black/5"
          }`}
        >
          {renderIcon(item.icon, ukuranIkon)}
          <span>{item.label}</span>
        </Link>
      );
    });
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar tetap — cuma muncul di layar besar (desktop) */}
      {!collapsed && (
        <aside className="hidden h-screen w-64 shrink-0 flex-col bg-[#F2F2F7]/80 px-3 py-6 backdrop-blur-xl lg:flex">
          <div className="mb-6 flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-9 w-9 rounded-xl object-contain shadow-sm" />
              <p className="text-base font-semibold text-slate-900">{title}</p>
            </div>
            <button onClick={toggle} className="rounded-lg p-1 text-slate-500 hover:bg-black/5 hover:text-slate-800" aria-label="Tutup sidebar">
              <ChevronLeft size={18} />
            </button>
          </div>
          <nav className="flex-1 space-y-1">{isiMenu(18, false)}</nav>
        </aside>
      )}

      {/* Drawer geser — buat tablet & HP */}
      {drawerTerbuka && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerTerbuka(false)} />
          <aside className="absolute left-0 top-0 flex h-full w-72 flex-col bg-white px-3 py-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between px-3">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" className="h-9 w-9 rounded-xl object-contain shadow-sm" />
                <p className="text-base font-semibold text-slate-900">{title}</p>
              </div>
              <button onClick={() => setDrawerTerbuka(false)} className="rounded-lg p-1 text-slate-500 hover:bg-black/5" aria-label="Tutup menu">
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto">{isiMenu(20, true)}</nav>
          </aside>
        </div>
      )}

      <div className="flex-1">
        {/* Bar atas mobile/tablet: tombol hamburger */}
        <div className="flex items-center gap-3 border-b border-black/5 bg-white/70 px-4 py-3 backdrop-blur-xl lg:hidden">
          <button onClick={() => setDrawerTerbuka(true)} className="rounded-lg p-1.5 text-slate-600 hover:bg-black/5" aria-label="Buka menu">
            <Menu size={22} />
          </button>
          <img src="/logo.png" alt="Logo" className="h-7 w-7 rounded-lg object-contain" />
          <p className="text-base font-semibold text-slate-900">{title}</p>
        </div>

        {/* Bar horizontal pengganti sidebar pas di-collapse manual (desktop) */}
        {collapsed && (
          <div className="hidden items-center gap-1 overflow-x-auto border-b border-black/5 bg-white/70 px-3 py-2 backdrop-blur-xl lg:flex">
            <button onClick={toggle} className="mr-1 shrink-0 rounded-lg p-1.5 text-slate-500 hover:bg-black/5 hover:text-slate-800" aria-label="Buka sidebar">
              <ChevronRight size={18} />
            </button>
            <img src="/logo.png" alt="Logo" className="mr-2 h-7 w-7 shrink-0 rounded-lg object-contain" />
            {items.map((item) => {
              const aktif = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-all ${
                    aktif ? "bg-[#007AFF] font-medium text-white" : "text-slate-600 hover:bg-black/5"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}

        {topBar}
        <main className="min-h-screen bg-[#F2F2F7] p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}