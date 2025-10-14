console.log("Nomor 1");
//lingkaran-tabung
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Route: GET /lingkaran-tabung/:jariJari/:tinggi
app.get("/lingkaran-tabung/:jariJari/:tinggi", (req, res) => {
  const jariJari = parseFloat(req.params.jariJari);
  const tinggi = parseFloat(req.params.tinggi);
  const phi = 22 / 7;

  // Validasi input
  if (isNaN(jariJari) || isNaN(tinggi)) {
    return res.status(400).send("Jari-jari dan tinggi harus berupa angka.");
  }

  // Perhitungan
  const luasAlas = phi * jariJari * jariJari;
  const kelilingAlas = 2 * phi * jariJari;
  const volumeTabung = luasAlas * tinggi;

  const response = `
    jariJari : ${jariJari}, 
    tinggi: ${tinggi}, 
    volume tabung : ${volumeTabung.toFixed(2)}, 
    luas alas tabung : ${luasAlas.toFixed(2)}, 
    keliling alas tabung : ${kelilingAlas.toFixed(2)}
  `;

  res.send(response);
});

let dataOrang = [
  { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
  {
    id: 4,
    name: "Benzema",
    umur: 34,
    pekerjaan: "Pemain Bola",
    jenisKelamin: "L",
  },
  { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
  {
    id: 9,
    name: "Shohei Ohtani",
    umur: 28,
    pekerjaan: "Pemain Baseball",
    jenisKelamin: "L",
  },
  {
    id: 11,
    name: "Maria Sharapova",
    umur: 35,
    pekerjaan: "Petenis",
    jenisKelamin: "P",
  },
];

console.log("Nomor 2");

// Route GET /data-orang
app.get("/data-orang", (req, res) => {
  // Ambil parameter dari URL
  const { umur, gender } = req.query;

  // Filter data sesuai parameter
  let filtered = dataOrang;

  if (umur) {
    filtered = filtered.filter((person) => person.umur >= parseInt(umur));
  }

  if (gender) {
    filtered = filtered.filter((person) => person.jenisKelamin === gender);
  }

  // Format hasil menjadi teks seperti contoh
  const result = filtered.map((person, index) => {
    return `${index + 1}. ${person.name} - Pekerjaan: ${
      person.pekerjaan
    } - Umur: ${person.umur} Tahun`;
  });

  // Kirim response
  res.send(result.join("\n"));
});

console.log("Nomor 3");

app.get("/data-orang/:id", (req, res) => {
  // Ambil parameter ID dari URL dan ubah jadi integer
  const id = parseInt(req.params.id);

  // Cari data yang sesuai
  const orang = dataOrang.find((item) => item.id === id);

  if (!orang) {
    res.send("Maaf data tidak ditemukan");
  } else {
    // Tentukan sapaan berdasarkan jenis kelamin
    const sapaan = orang.jenisKelamin === "L" ? "Pak" : "Bu";
    res.send(
      `${sapaan} ${orang.name} adalah seorang ${orang.pekerjaan} yang berusia ${orang.umur} tahun`
    );
  }
});
