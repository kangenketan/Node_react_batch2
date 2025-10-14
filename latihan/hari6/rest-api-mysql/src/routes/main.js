const express = require('express')
const { getMovies, getMoviesByID, createMovie} = require('../controllers/movieController')

const router = express.Router();

router.get("/movie", getMovies);
router.get("/movie/:id", getMoviesByID);
router.post('/movie', createMovie)
module.exports = { router };
