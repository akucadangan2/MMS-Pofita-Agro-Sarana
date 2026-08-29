export function BadgeStokKurang({ diminta, tersedia }: { diminta: number; tersedia: number }) {
  if (tersedia >= diminta) return null;
  return (
    <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
      Stok kurang ({tersedia}/{diminta})
    </span>
  );
}