const express = require("express");
const {
  createMovie,
  readMovie,
  readMovieById,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");
const { validationBodyMovies } = require("../middleware/validation");
const { register, login } = require("../controllers/userControllers");
const router = express.Router();

router.post("/movie", createMovie);
router.get("/movie", readMovie);
router.get("/movie/:id", readMovieById);
router.put("/movie/:id", updateMovie);
router.delete("/movie/:id", deleteMovie);
module.exports = router;
//LOGIN
router.post("/register", register);
router.post("/login", login);
