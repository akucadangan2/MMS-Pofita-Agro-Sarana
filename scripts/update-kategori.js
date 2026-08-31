const fs = require("fs");

const pathLama = "C:\\wms-web\\src\\components\\test data\\barang.csv";
const pathBaru = "C:\\wms-web\\src\\components\\test data\\lengkap.csv";
const outputPath = "C:\\wms-web\\scripts\\update-kategori.sql";

// 1. Baca file lama (barang.csv) buat dapetin peta Nama -> Kode
const rawLama = fs.readFileSync(pathLama, "latin1");
const linesLama = rawLama.split(/\r?\n/);

const namaKeKode = new Map();
for (let i = 7; i < linesLama.length; i++) {
  const line = linesLama[i];
  if (!line || !line.trim()) continue;
  const kol = line.split(";");
  if (kol.length < 12) continue;

  const kode = (kol[1] || "").trim();
  const nama = (kol[3] || "").trim();
  const tipe = (kol[9] || "").trim();

  if (kode === "No. Barang" || kode === "" || nama === "") continue;
  if (tipe !== "Persediaan") continue;

  // Kalau nama sama muncul lebih dari sekali, simpan yang pertama aja
  if (!namaKeKode.has(nama)) {
    namaKeKode.set(nama, kode);
  }
}

console.log(`Total nama->kode dari barang.csv: ${namaKeKode.size}`);

// 2. Baca file baru (lengkap.csv) buat dapetin Nama -> Unit & Kategori
const rawBaru = fs.readFileSync(pathBaru, "latin1");
const linesBaru = rawBaru.split(/\r?\n/);

const dataBaru = [];
for (let i = 7; i < linesBaru.length; i++) {
  const line = linesBaru[i];
  if (!line || !line.trim()) continue;
  const kol = line.split(";").map((k) => k.replace(/^"|"$/g, "").trim());
  if (kol.length < 8) continue;

  const nama = kol[0];
  const unit = kol[6];
  const kategori = kol[7];

  if (!nama || nama === "Deskripsi Barang") continue;

  dataBaru.push({ nama, unit: unit || null, kategori: kategori || null });
}

console.log(`Total baris data dari lengkap.csv: ${dataBaru.length}`);

// 3. Cocokkan lewat nama, buat UPDATE SQL
function escapeSql(str) {
  if (!str) return "null";
  return "'" + String(str).replace(/'/g, "''") + "'";
}

let sql = "-- Update kategori detail (merek) & satuan hasil pencocokan nama\n\n";
let cocok = 0;
let tidakCocok = 0;
const tidakCocokList = [];

for (const item of dataBaru) {
  const kode = namaKeKode.get(item.nama);
  if (!kode) {
    tidakCocok++;
    tidakCocokList.push(item.nama);
    continue;
  }
  cocok++;
  sql += `update items set kategori = ${escapeSql(item.kategori)} where kode = ${escapeSql(kode)};\n`;
}

console.log(`Cocok (ketemu kode-nya): ${cocok}`);
console.log(`Tidak cocok (nama gak ketemu di barang.csv): ${tidakCocok}`);

fs.writeFileSync(outputPath, sql, "utf8");
console.log(`File SQL disimpan di: ${outputPath}`);

if (tidakCocokList.length > 0) {
  fs.writeFileSync(
    "C:\\wms-web\\scripts\\tidak-cocok.txt",
    tidakCocokList.join("\n"),
    "utf8"
  );
  console.log(`Daftar nama yang gak cocok disimpan di: scripts/tidak-cocok.txt`);
}