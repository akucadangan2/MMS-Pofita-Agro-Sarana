const fs = require("fs");

const inputPath = "C:\\wms-web\\src\\components\\test data\\lengkap.csv";

const raw = fs.readFileSync(inputPath, "latin1");
const lines = raw.split(/\r?\n/).filter((l) => l.trim() !== "");

console.log(`Total baris (tidak kosong): ${lines.length}`);
console.log("");
console.log("=== 15 baris pertama (mentah) ===");
for (let i = 0; i < Math.min(15, lines.length); i++) {
  console.log(`[${i}] ${lines[i]}`);
}

console.log("");
console.log("=== Deteksi delimiter ===");
const contoh = lines[0] || "";
console.log(`Jumlah titik koma (;) di baris pertama: ${(contoh.match(/;/g) || []).length}`);
console.log(`Jumlah koma (,) di baris pertama: ${(contoh.match(/,/g) || []).length}`);
console.log(`Jumlah tab di baris pertama: ${(contoh.match(/\t/g) || []).length}`);