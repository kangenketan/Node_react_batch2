const express = require("express");
const router = require("./src/routes/main");

const app = express();
const port = 3000;

app.use(express.json());
//root
// app.get("/Movie", getMovies);
// app.get('Movie/:id', getMoviesByID)

//ROUTE MOVIE
// app.get('/movie',getMovies)
// app.get('/movie/:id',getMoviesByID)

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
