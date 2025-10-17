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
const { authJWT } = require("../middleware/auth");
const { register, login } = require("../controllers/userControllers");
const router = express.Router();

router.post("/movie", authJWT, validationBodyMovies, createMovie);
router.get("/movie", readMovie);
router.get("/movie/:id", readMovieById);
router.put("/movie/:id", basicAuth, updateMovie);
router.delete("/movie/:id", basicAuth, deleteMovie);
module.exports = router;
//LOGIN
router.post("/register", register);
router.post("/login", login);
