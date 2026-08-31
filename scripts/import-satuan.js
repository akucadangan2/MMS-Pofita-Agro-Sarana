const fs = require("fs");

const inputPath = "C:\\wms-web\\src\\components\\test data\\satuan.csv";
const outputPath = "C:\\wms-web\\scripts\\import-satuan.sql";

const raw = fs.readFileSync(inputPath, "latin1");
const lines = raw.split(/\r?\n/).filter((l) => l.trim() !== "");

function angka(str) {
  if (!str) return 0;
  return Number(str.replace(/\./g, "").replace(",", "."));
}

function bersih(str) {
  return (str || "").replace(/^"|"$/g, "").trim();
}

function escapeSql(str) {
  if (!str) return "null";
  return "'" + String(str).replace(/'/g, "''") + "'";
}

const dataBarang = [];
const kodeSudahAda = new Set();
let dibuangDuplikat = 0;

for (let i = 7; i < lines.length; i++) {
  const line = lines[i];
  if (!line || !line.trim()) continue;
  const kol = line.split(";").map(bersih);
  if (kol.length < 16) continue;

  const nama = kol[0];
  const kode = kol[10];
  const kategori = kol[11];
  const unit2 = kol[12];
  const unit3 = kol[13];
  const rasio2 = angka(kol[14]);
  const rasio3 = angka(kol[15]);

  // Buang baris judul kolom yang keulang, dan baris kode yang udah pernah diproses
  if (!kode || !nama || kode === "No. Barang") continue;
  if (kodeSudahAda.has(kode)) {
    dibuangDuplikat++;
    continue;
  }
  kodeSudahAda.add(kode);

  dataBarang.push({ kode, nama, kategori, unit2, unit3, rasio2, rasio3 });
}

console.log(`Total baris unik terbaca: ${dataBarang.length}`);
console.log(`Baris duplikat dibuang: ${dibuangDuplikat}`);

let sql = "-- Update kategori + tambah satuan konversi (DUS/SLP dll), hasil dari satuan.csv\n\n";

let jumlahKategori = 0;
let jumlahSatuanTambahan = 0;

for (const item of dataBarang) {
  if (item.kategori) {
    sql += `update items set kategori = ${escapeSql(item.kategori)} where kode = ${escapeSql(item.kode)};\n`;
    jumlahKategori++;
  }

  if (item.unit2 && item.rasio2 > 0) {
    sql += `insert into item_units (item_id, nama_satuan, faktor_konversi) select id, ${escapeSql(item.unit2)}, ${item.rasio2} from items where kode = ${escapeSql(item.kode)} and not exists (select 1 from item_units iu where iu.item_id = items.id and iu.nama_satuan = ${escapeSql(item.unit2)});\n`;
    jumlahSatuanTambahan++;
  }
  if (item.unit3 && item.rasio3 > 0) {
    sql += `insert into item_units (item_id, nama_satuan, faktor_konversi) select id, ${escapeSql(item.unit3)}, ${item.rasio3} from items where kode = ${escapeSql(item.kode)} and not exists (select 1 from item_units iu where iu.item_id = items.id and iu.nama_satuan = ${escapeSql(item.unit3)});\n`;
    jumlahSatuanTambahan++;
  }
}

console.log(`Baris update kategori: ${jumlahKategori}`);
console.log(`Baris insert satuan tambahan (DUS/SLP/dll): ${jumlahSatuanTambahan}`);

fs.writeFileSync(outputPath, sql, "utf8");
console.log(`File SQL disimpan di: ${outputPath}`);