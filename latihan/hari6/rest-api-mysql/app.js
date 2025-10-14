const express = require("express");
const { mainRouter } = require("./src/routes/main");
const app = express();
const port = 3000;

//root
// app.get("/Movie", getMovies);
// app.get('Movie/:id', getMoviesByID)

//ROUTE MOVIE
// app.get('/movie',getMovies)
// app.get('/movie/:id',getMoviesByID)

app.use("/api", mainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
