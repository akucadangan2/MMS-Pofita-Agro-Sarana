"use client";

import { useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase/client";

type RequestPayload = {
  no_request?: string;
};

export function BrowserNotifier() {
  const sudahMinta = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("Notification" in window)) return;

    if (!sudahMinta.current && Notification.permission === "default") {
      sudahMinta.current = true;
      Notification.requestPermission();
    }

    const supabase = createClient();

    // Nama channel-nya sengaja beda dari RealtimeRefresher, biar gak tabrakan
    // (dua channel realtime terpisah boleh dengerin tabel yang sama).
    const channel = supabase
      .channel("browser-notif-requests")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "requests" },
        (payload) => {
          if (Notification.permission !== "granted") return;
          const data = payload.new as RequestPayload;
          new Notification("Request Baru Masuk", {
            body: data.no_request ? `No. Request: ${data.no_request}` : "Ada permintaan baru dari cabang",
            icon: "/logo.png",
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return null;
}