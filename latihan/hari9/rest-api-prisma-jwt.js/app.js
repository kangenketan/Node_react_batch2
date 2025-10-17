require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
const router = require("./src/routes/main");
const routerCategory = require("./src/routes/categoryRouter");
const port = 3000;

var corsOptions = {
  origin: process.env.CORS_ALLOW_LIST.split(","),
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", router, routerCategory);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//root
// app.get("/Movie", getMovies);
// app.get('Movie/:id', getMoviesByID)

//ROUTE MOVIE
// app.get('/movie',getMovies)
// app.get('/movie/:id',getMoviesByID)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// var cors = "http://localhost:3000","http://localhost:5000","http://localhost:8080";
//   console.log(cors)
//   console.log(cors.split(','))
