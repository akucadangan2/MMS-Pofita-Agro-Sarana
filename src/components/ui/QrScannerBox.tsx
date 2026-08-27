"use client";

import { useEffect, useRef } from "react";

export function QrScannerBox({ onScan }: { onScan: (text: string) => void }) {
  const idRef = useRef(`qr-reader-${Math.random().toString(36).slice(2)}`);
  const onScanRef = useRef(onScan);
  onScanRef.current = onScan;

  useEffect(() => {
    let scanner: { clear: () => Promise<void> } | null = null;
    let batal = false;

    import("html5-qrcode").then((mod) => {
      if (batal) return;
      const s = new mod.Html5QrcodeScanner(idRef.current, { fps: 10, qrbox: 250 }, false);
      s.render(
        (decodedText: string) => {
          onScanRef.current(decodedText);
        },
        () => {
          // dipanggil tiap frame yang gagal decode, bukan error beneran — diabaikan aja
        }
      );
      scanner = s;
    });

    return () => {
      batal = true;
      scanner?.clear().catch(() => {});
    };
  }, []);

  return <div id={idRef.current} className="w-full" />;
}