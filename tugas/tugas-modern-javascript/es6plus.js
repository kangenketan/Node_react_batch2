console.log("Nomor 1 Arrow Function");
let r = 7;
const luasLingkaran = (r) => {
  const phi = 22 / 7;
  return phi * r * r;
};
const kelilingLingkaran = (r) => {
  const phi = 22 / 7;
  return 2 * phi * r;
};
console.log("Luas Lingkaran:", luasLingkaran(r));
console.log("Keliling Lingkaran:", kelilingLingkaran(r));

console.log("Nomor 2 Membuat function introduce sesuai ES6");
const introduce = (...value) => {
  const [nama, umur, JenisKelamin, pekerjaan] = value;
  if (JenisKelamin == "Laki-laki") {
    return `Pak ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun.`;
  } else {
    return `Bu ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun.`;
  }
};
const perkenalanJohn = introduce("john", "30", "Laki-laki", "penulis");
console.log(perkenalanJohn);
const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru");
console.log(perkenalanSarah);
console.log("Nomor 3 mengubah kode es5 menjadi kode es6");
const newFunction = (firstName, lastName) => ({
  firstName,
  lastName,
  fullName() {
    console.log(`${firstName} ${lastName}`);
  },
});

console.log(newFunction("John", "Doe").firstName);
console.log(newFunction("Richard", "Roe").lastName);
newFunction("William", "Imoh").fullName();
console.log("Nomor 4 Menggunakan Destructuring");
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};

const {
  brand: phoneBrand,
  name: phoneName,
  year,
  colors: [colorBronze, , colorBlack],
} = phone;

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);
console.log("Nomor 5 Menggunakan Spread Operator");
let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"],
};

buku = {
  ...buku,
  ...dataBukuTambahan,
  warnaSampul: [...buku.warnaSampul, ...warna],
};

console.log(buku);
console.log("Nomor 6 Mengisi data products");

function addProducts(samsung, newProducts) {
  return {
    ...samsung,
    products: [...samsung.products, ...newProducts],
  };
}

let samsung = {
  name: "Samsung",
  products: [
    { name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"] },
    { name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"] },
    { name: "Samsung Galaxy Note 20s", colors: ["white", "black"] },
  ],
};

let newProducts = [
  { name: "Samsung Galaxy A52", colors: ["white", "black"] },
  { name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"] },
];

samsung = addProducts(samsung, newProducts);
console.log(samsung);
console.log("Nomor 7 Konversi Object");
const createObject = ([nama, domisili, umur]) => ({
  nama,
  domisili,
  umur,
});

let data = ["Bondra", "Medan", 25];
console.log(createObject(data));
console.log("Nomor 8 Graduate");
const graduate = (...studentsData) => {
  const allStudents = [].concat(...studentsData);
  const result = {};
  allStudents.forEach(({ name, class: className }) => {
    if (!result[className]) result[className] = [];
    result[className].push(name);
  });

  return result;
};

const data1 = [
  { name: "Ahmad", class: "adonis" },
  { name: "Regi", class: "laravel" },
  { name: "Bondra", class: "adonis" },
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" },
];

const data2 = [
  { name: "Yogi", class: "react" },
  { name: "Fikri", class: "agile" },
  { name: "Arief", class: "agile" },
];

console.log(graduate(data1));
console.log(graduate(data2));
