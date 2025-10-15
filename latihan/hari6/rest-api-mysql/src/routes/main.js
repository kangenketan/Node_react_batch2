const express = require("express");
const {
  createMovie,
  readMovies,
  readMovieById,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");
const router = express.Router();

router.post("/movie", createMovie);
router.get("/movie", readMovies);
router.get("/movie/:id", readMovieById);
router.put("/movie/:id", updateMovie);
router.delete("/movie/:id", deleteMovie);
module.exports = router;
