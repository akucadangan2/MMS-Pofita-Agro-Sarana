"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

/**
 * Komponen tak-terlihat: dengerin perubahan (insert/update/delete) di satu tabel
 * lewat Supabase Realtime, terus panggil router.refresh() biar Server Component
 * di halaman ini narik data terbaru tanpa perlu reload manual.
 *
 * Syarat: Realtime harus diaktifkan buat tabel ini di Supabase
 * (Dashboard -> Database -> Replication, atau jalankan:
 *  alter publication supabase_realtime add table nama_tabel;)
 */
export function RealtimeRefresher({ table }: { table: string }) {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    const channel = supabase
      .channel(`realtime-${table}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table },
        () => {
          router.refresh();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [table, router]);

  return null;
}