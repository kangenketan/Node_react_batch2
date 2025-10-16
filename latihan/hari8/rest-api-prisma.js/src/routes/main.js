const express = require("express");
const {
  createMovie,
  readMovie,
  readMovieById,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");
const { basicAuth } = require("../middleware/basicAuth");
const { validationBodyMovies } = require("../middleware/validation");
const router = express.Router();

router.post("/movie", basicAuth, validationBodyMovies, createMovie);
router.get("/movie", readMovie);
router.get("/movie/:id", readMovieById);
router.put("/movie/:id", basicAuth, updateMovie);
router.delete("/movie/:id", basicAuth, deleteMovie);
module.exports = router;
