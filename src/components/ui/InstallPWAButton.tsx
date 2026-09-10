"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallPWAButton() {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [sudahTerinstall, setSudahTerinstall] = useState(false);

  useEffect(() => {
    // Kalau udah kebuka dalam mode "standalone" (artinya udah ke-install), gak perlu tampilin tombol
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setSudahTerinstall(true);
      return;
    }

    function handleBeforeInstallPrompt(e: Event) {
      e.preventDefault();
      setPromptEvent(e as BeforeInstallPromptEvent);
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  async function handleInstall() {
    if (!promptEvent) return;
    await promptEvent.prompt();
    const hasil = await promptEvent.userChoice;
    if (hasil.outcome === "accepted") {
      setPromptEvent(null);
    }
  }

  if (sudahTerinstall || !promptEvent) return null;

  return (
    <button
      onClick={handleInstall}
      className="flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-700 hover:bg-blue-100"
    >
      <Download size={16} />
      Install Aplikasi ke Desktop
    </button>
  );
}