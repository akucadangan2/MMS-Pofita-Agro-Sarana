type SatuanTambahan = {
  nama_satuan: string;
  faktor_konversi: number;
};

// Ubah qty (dalam satuan dasar, misal PCS) jadi pecahan tiap satuan yang lebih besar.
// Contoh: qty=1250, satuan dasar PCS, ada DUS (120) dan SLP (6)
// -> hasil: "10 DUS 3 SLP 2 PCS"
export function konversiKeSemuaSatuan(
  qtyDalamSatuanDasar: number,
  satuanDasar: string,
  satuanTambahan: SatuanTambahan[]
): string {
  if (qtyDalamSatuanDasar === 0) return `0 ${satuanDasar}`;

  // Urutkan dari faktor konversi terbesar ke terkecil (DUS dulu, baru SLP)
  const urutan = [...satuanTambahan].sort((a, b) => b.faktor_konversi - a.faktor_konversi);

  let sisa = qtyDalamSatuanDasar;
  const bagian: string[] = [];

  for (const s of urutan) {
    if (s.faktor_konversi <= 0) continue;
    const jumlah = Math.floor(sisa / s.faktor_konversi);
    if (jumlah > 0) {
      bagian.push(`${jumlah} ${s.nama_satuan}`);
      sisa -= jumlah * s.faktor_konversi;
    }
  }

  // Sisa yang gak cukup buat 1 satuan besar pun, ditulis pakai satuan dasar
  if (sisa > 0 || bagian.length === 0) {
    bagian.push(`${sisa} ${satuanDasar}`);
  }

  return bagian.join(" ");
}