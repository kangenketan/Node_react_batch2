var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];
var waktu = 10000;
function baca(waktu, books) {
  if (books.length === 0) {
    console.log("buku Habis");
    return;
  } else {
    readBooks(waktu, books[0], function (sisaWaktu) {
      baca(sisaWaktu, books.slice(1));
    });
  }
}
console.log("Mulai Membaca");
baca(waktu, books);
