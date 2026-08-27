"use client";

import { useEffect, useState, cloneElement, isValidElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type NavItem = { label: string; href: string; icon: React.ReactElement };

function renderIcon(icon: React.ReactElement, size: number) {
  if (isValidElement(icon)) {
    return cloneElement(icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, {
      size,
      strokeWidth: 2,
    });
  }
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
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved === "true") setCollapsed(true);
  }, []);

  function toggle() {
    setCollapsed((v) => {
      localStorage.setItem("sidebar-collapsed", String(!v));
      return !v;
    });
  }

  return (
    <div className="flex min-h-screen">
      {!collapsed && (
        <aside className="flex h-screen w-64 shrink-0 flex-col bg-[#F2F2F7]/80 px-3 py-6 backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-9 w-9 rounded-xl object-contain shadow-sm" />
              <p className="text-base font-semibold text-slate-900">{title}</p>
            </div>
            <button
              onClick={toggle}
              className="rounded-lg p-1 text-slate-500 hover:bg-black/5 hover:text-slate-800"
              aria-label="Tutup sidebar"
            >
              <ChevronLeft size={18} />
            </button>
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
                  {renderIcon(item.icon, 18)}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>
      )}

      <div className="flex-1">
        {collapsed && (
          <div className="flex items-center gap-1 overflow-x-auto border-b border-black/5 bg-white/70 px-3 py-2 backdrop-blur-xl">
            <button
              onClick={toggle}
              className="mr-1 shrink-0 rounded-lg p-1.5 text-slate-500 hover:bg-black/5 hover:text-slate-800"
              aria-label="Buka sidebar"
            >
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
                  {renderIcon(item.icon, 15)}
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
        {topBar}
        <main className="min-h-screen bg-[#F2F2F7] p-6">{children}</main>
      </div>
    </div>
  );
}