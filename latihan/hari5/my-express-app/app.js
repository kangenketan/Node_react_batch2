const express = require("express");
const app = express();
const port = 3000;
let movies = [
  { id: 1, title: "Spider-Man", year: 2002 },
  { id: 2, title: "John Wick", year: 2014 },
  { id: 3, title: "The Avengers", year: 2012 },
  { id: 4, title: "Logan", year: 2017 },
];
const getMovies = (req, res) => {
  let result = " ";
  movies.forEach((item, index) => {
    result += `${index + 1}. ${item.title}</br>`;
  });
  res.send(result);
};
//root
app.get("/Movie", getMovies);

app.get("/", (req, res) => {
  res.send("Hello World");
});

//route
app.get("/peserta/arif", (req, res) => {
  res.send(
    "ini adalah database arif, silahkan telepon ke nomor whatsapp 081250958263"
  );
});
app.get("/Home", (req, res) => {
  res.send("ini adalah halaman rumahku");
});
// app.use(express)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
