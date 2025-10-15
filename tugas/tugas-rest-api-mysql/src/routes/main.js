const express = require("express");
const {
  createMahasiswa,
  readMahasiswaId,
  readMahasiswa,
} = require("../controllers/mahasiswaControllers");

const router = express.Router();
router.post("/mahasiswa", createMahasiswa);
router.get("/mahasiswa/:id", readMahasiswaId);
router.get("/mahasiswa/:id", readMahasiswa);
module.exports = router;
