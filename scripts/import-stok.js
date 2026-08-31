const fs = require("fs");

const inputPath = "C:\\wms-web\\src\\components\\test data\\satuan.csv";
const outputPath = "C:\\wms-web\\scripts\\import-stok.sql";

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

for (let i = 7; i < lines.length; i++) {
  const line = lines[i];
  if (!line || !line.trim()) continue;
  const kol = line.split(";").map(bersih);
  if (kol.length < 16) continue;

  const nama = kol[0];
  const kode = kol[10];
  const ktsStok = angka(kol[8]);

  if (!kode || !nama || kode === "No. Barang") continue;
  if (kodeSudahAda.has(kode)) continue;
  kodeSudahAda.add(kode);

  dataBarang.push({ kode, nama, ktsStok });
}

console.log(`Total barang terbaca: ${dataBarang.length}`);

const adaStok = dataBarang.filter((b) => b.ktsStok > 0);
console.log(`Barang dengan stok > 0: ${adaStok.length}`);

let sql = "-- Import stok awal (Kts. Stok) ke lokasi Lantai 1, hasil dari satuan.csv\n\n";

for (const item of adaStok) {
  sql += `insert into stock (item_id, location_id, qty)\n`;
  sql += `select items.id, locations.id, ${item.ktsStok}\n`;
  sql += `from items, locations\n`;
  sql += `where items.kode = ${escapeSql(item.kode)}\n`;
  sql += `and locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null\n`;
  sql += `and not exists (\n`;
  sql += `  select 1 from stock s where s.item_id = items.id and s.location_id = locations.id\n`;
  sql += `);\n`;
}

fs.writeFileSync(outputPath, sql, "utf8");
console.log(`File SQL disimpan di: ${outputPath}`);