console.log("Nomor 1");
var john = introduce("John", "laki-laki", "penulis", "30");
console.log(john); // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

var sarah = introduce("Sarah", "perempuan", "model", "28");
console.log(sarah); // Menampilkan "Bu Sarah adalah seorang model yang berusia 28 tahun"
function introduce(nama, jenisKelamin, pekerjaan, umur) {
  let sapaan = "";

  if (jenisKelamin.toLowerCase() === "laki-laki") {
    sapaan = "Pak";
  } else if (jenisKelamin.toLowerCase() === "perempuan") {
    sapaan = "Bu";
  } else {
    sapaan = "";
  }

  return `${sapaan} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
}
console.log("Nomor 2");
var text = "Super Bootcamp Fullstack Dev 2022";
function findUniqueCharacters(input) {
  let text = input.toLowerCase().replace(/\s/g, "");
  let frequency = {};
  for (let char of text) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  let result = "";
  for (let char of text) {
    if (frequency[char] === 1) {
      result += char;
    }
  }

  return result;
}
console.log(findUniqueCharacters(text));
console.log("Nomor 3");
var angka = [2, 3, 1, 9, 12, 8, 9, 7];
function cariTerbesarTerkecil(arr) {
  if (arr.length === 0) {
    return "Array kosong";
  }

  let terbesar = arr[0];
  let terkecil = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > terbesar) {
      terbesar = arr[i];
    }
    if (arr[i] < terkecil) {
      terkecil = arr[i];
    }
  }

  return `angka terbesar adalah ${terbesar} dan angka terkecil adalah ${terkecil}`;
}
console.log(cariTerbesarTerkecil(angka));
console.log("Nomor 4");
function arrangeString(str) {
  return str.split("").sort().join("");
}
console.log(arrangeString("bahasa"));
console.log(arrangeString("similikiti"));
console.log(arrangeString("sanbercode"));
console.log(arrangeString(" "));
