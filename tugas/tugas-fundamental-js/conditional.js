// No. 1
console.log("Nomor 1")
var kata = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript"

var length = kata.length;
var kategori;

if (length < 10){
    kategori = "Pendek";
}
else if (length >= 10 && length <= 30){
    kategori = "Sedang";
} else {
    kategori = "Panjang";
}

console.log("Kategori:", kategori);

// No. 2
console.log("Nomor 2")
var nilai = 75;
var indeks;

if (nilai >= 80){
    indeks = "A";
}
else if (nilai >= 70 && nilai < 80){
    indeks = "B";
}
else if (nilai >= 60 && nilai < 70){
    indeks = "C";
}
else if (nilai >= 50 && nilai < 60){
    indeks = "D";
} else {
    indeks = "E";
}
console.log(nilai)

// No. 3
console.log("Nomor 3")
var tanggal = 21;
var bulan = 1;
var tahun = 1987;

switch (bulan) {
    case 1:
        console.log("Januari")
        break;

    default:
        break;
}




