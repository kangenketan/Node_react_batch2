console.log("Nomor 1");
var dataPeserta = ["john", "laki-laki", "programmer", "30"];
var output = `Halo, nama saya ${dataPeserta[0]}. Saya ${dataPeserta[1]} berumur ${dataPeserta[3]} bekerja sebagai seorang ${dataPeserta[2]}`;
console.log(output);

console.log("Nomor 2");
var sayuran = []; // array kosong

sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

console.log(sayuran);
console.log("Nomor 3");
sayuran.sort();
for (let i = 0; i < sayuran.length; i++) {
  console.log(`${i + 1}. ${sayuran[i]}`);
}
console.log("Nomor 4");
var word = "car";
var subsets = [];

for (let i = 0; i < word.length; i++) {
  for (let j = i + 1; j <= word.length; j++) {
    subsets.push(word.substring(i, j));
  }
}
console.log(subsets);
console.log("Nomor 5");
var numbers = [4, 5, 1, 4, 6, 8, 9, 21];
var total = numbers.reduce((sum, value) => sum + value, 0);
console.log(total);
console.log("Nomor 6");
var kumpulanAngka = [
  [1, 3, 5, 7, 8, 9],
  [4, 5, 6, 2, 3, 1],
  [6, 7, 8, 1, 3, 5],
];
var hasilJumlah = kumpulanAngka.map(function (baris) {
  return baris.reduce(function (total, angka) {
    return total + angka;
  }, 0);
});

console.log(hasilJumlah);

