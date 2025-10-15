const { connectionPool } = require("../config/db");
const createMahasiswa = (req, res) => {
  var { nama, mata_kuliah, nilai } = req.body;
  console.log(nama);
  console.log(mata_kuliah);
  console.log(nilai);
  let queryText = `INSERT INTO nilai_mahasiswa(nama,mata_kuliah,nilai,indeks_nilai,created_at,updated_at) VALUES ("${nama}", "${mata_kuliah}", ${nilai},"${getIndeksNilai(
    nilai
  )}", now(), now())`;
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  res.json({ message: "Index nilai telah dibuat", status: "success" });
};
const readMahasiswaId = (req, res) => {
  let { id } = req.params;
  let queryText = `SELECT * FROM nilai_mahasiswa WHERE id = ${id}`;
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let mahasiswa = data[0];
    res.json(mahasiswa);
  });
};
const readMahasiswa = (req, res) => {
  let queryText = "SELECT * FROM nilai_mahasiswa";
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(data);
  });
};
function getIndeksNilai(nilai) {
  if (nilai < 0 || nilai > 100) {
    return "Data nilai salah";
  }
  if (nilai >= 80) {
    return "A";
  } else if (nilai >= 70) {
    return "B";
  } else if (nilai >= 60) {
    return "C";
  } else if (nilai >= 50) {
    return "D";
  } else {
    return "E";
  }
}
module.exports = { createMahasiswa, readMahasiswaId, readMahasiswa };
