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
  let {title} = req.query
  let result = " ";
  
  if(title === undefined){
    title=""
  }

  console.log(title)

  movies.forEach((item, index) => {
    if(item.title.toLowerCase().includes(title)){
    result += `${index + 1}. ${item.title}</br>`;
  }
  //console.log(title)
  })
  res.send(result);
}

const getMoviesByID = (req, res) => {
  let (id) = req.params

  console.log(id)

  let result = movies.find(movies => movies.id === Number(id))
    result.send(`${result.title}`)
  }

//root
app.get("/Movie", getMovies);
app.get('Movie/:id', getMoviesByID)

//MIDDLEWARE
const logMiddleware = (req, res, next) => {
  console.log ("anda telah melewati Middleware")
  next()
}
const getText =(req, res) => {
  res.status(400).json('text': halaman ini dilewati dengan middleware',
        res.status: 400 
  })
}

//MIDDLEWARE TOKEN
const checkToken = (req, res, next) => {
  let {token} = req.query
  if(token != 12345){

  }
}

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
