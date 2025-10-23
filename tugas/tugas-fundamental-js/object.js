console.log("Nomor 1");

const buah = [
  {
    nama: "Nanas",
    warna: "Kuning",
    adaBijinya: false,
    harga: 9000,
  },
  {
    nama: "Jeruk",
    warna: "Oranye",
    adaBijinya: true,
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: true,
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: false,
    harga: 5000,
  },
];

const tanpaBiji = buah.filter((item) => item.adaBijinya === false);

console.log("Buah yang tidak memiliki biji:");
console.log(tanpaBiji);

console.log("Nomor 2");
var dataFilm = [];

function tambahDataFilm(nama, durasi, genre, tahun) {
  var filmBaru = {
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun,
  };

  dataFilm.push(filmBaru);
}

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");

console.log(dataFilm);

console.log("Nomor 3");
var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

var maleAbove29 = people.filter(function (person) {
  return person.gender === "male" && person.age > 29;
});

console.log(maleAbove29);

console.log("Nomor 4");
