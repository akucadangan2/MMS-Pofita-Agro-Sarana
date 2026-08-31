const fs = require("fs");

const inputPath = "C:\\wms-web\\src\\components\\test data\\barang.csv";
const outputPath = "C:\\wms-web\\scripts\\import-barang.sql";

const raw = fs.readFileSync(inputPath, "latin1");
const lines = raw.split(/\r?\n/);

const hasil = [];
const kodeSudahAda = new Set();
let dibuang = 0;

for (let i = 7; i < lines.length; i++) {
  const line = lines[i];
  if (!line || !line.trim()) continue;

  const kol = line.split(";");
  if (kol.length < 12) continue;

  const kode = (kol[1] || "").trim();
  const nama = (kol[3] || "").trim();
  const tipe = (kol[9] || "").trim();
  const kategori = (kol[11] || "").trim();

  if (kode === "No. Barang" || kode === "" || nama === "Deskripsi Barang" || nama === "") {
    dibuang++;
    continue;
  }
  if (kodeSudahAda.has(kode)) {
    dibuang++;
    continue;
  }
  if (tipe !== "Persediaan") {
    dibuang++;
    continue;
  }

  kodeSudahAda.add(kode);
  hasil.push({ kode, nama, kategori: kategori || null });
}

console.log(`Baris dibuang: ${dibuang}`);
console.log(`Total barang valid: ${hasil.length}`);

function escapeSql(str) {
  if (str === null) return "null";
  return "'" + String(str).replace(/'/g, "''") + "'";
}

let sql = "-- Import barang dari ACCURATE, di-generate otomatis\n";
sql += "-- Total barang: " + hasil.length + "\n\n";

sql += "-- 1. Pastikan lokasi \"Lantai 1\" ada (dipakai sebagai lokasi awal semua barang import)\n";
sql += "insert into locations (lantai) select 'Lantai 1' where not exists (select 1 from locations where lantai = 'Lantai 1' and area is null and rak is null);\n\n";

sql += "-- 2. Insert 721 barang\n";
for (const item of hasil) {
  sql += `insert into items (kode, nama, kategori, satuan_dasar) values (${escapeSql(item.kode)}, ${escapeSql(item.nama)}, ${escapeSql(item.kategori)}, 'PCS');\n`;
}

sql += "\n-- 3. Tandai semua barang yang baru diimport ke lokasi \"Lantai 1\" (stok tetap 0, diisi manual belakangan lewat Barang Masuk)\n";
const daftarKode = hasil.map((h) => escapeSql(h.kode)).join(", ");
sql += `insert into item_locations (item_id, location_id)\n`;
sql += `select items.id, locations.id\n`;
sql += `from items, locations\n`;
sql += `where locations.lantai = 'Lantai 1' and locations.area is null and locations.rak is null\n`;
sql += `and items.kode in (${daftarKode});\n`;

fs.writeFileSync(outputPath, sql, "utf8");
console.log(`File SQL disimpan di: ${outputPath}`);