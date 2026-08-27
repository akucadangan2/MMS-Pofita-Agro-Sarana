type Aktivitas = { waktu: string; teks: string };

export function ActivityTimeline({ aktivitas }: { aktivitas: Aktivitas[] }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-medium text-slate-700">Aktivitas / Log</h2>
      <ol className="space-y-4">
        {aktivitas.map((a, i) => (
          <li key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
              {i < aktivitas.length - 1 && <span className="mt-1 w-px flex-1 bg-slate-200" />}
            </div>
            <div className="pb-2">
              <p className="text-xs text-slate-400">
                {new Date(a.waktu).toLocaleString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "short",
                })}
              </p>
              <p className="text-sm text-slate-700">{a.teks}</p>
            </div>
          </li>
        ))}
        {aktivitas.length === 0 && <p className="text-sm text-slate-400">Belum ada aktivitas.</p>}
      </ol>
    </div>
  );
}