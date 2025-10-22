const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./src/routes/main");
const routerCategory = require("./src/routes/categoryRouter");
const app = express();
const port = 3000;

var corsOptions = {
  origin: process.env.CORS_ALLOW_LIST.split(","),
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
//root
// app.get("/Movie", getMovies);
// app.get('Movie/:id', getMoviesByID)

//ROUTE MOVIE
// app.get('/movie',getMovies)
// app.get('/movie/:id',getMoviesByID)

app.use("/api", router, routerCategory);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// var cors = "http://localhost:3000","http://localhost:5000","http://localhost:8080";
//   console.log(cors)
//   console.log(cors.split(','))
