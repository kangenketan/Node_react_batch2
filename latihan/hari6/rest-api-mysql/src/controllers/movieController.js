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

  module.exports = {getMovies,getMoviesByID}

  const createMovie = (req,res) => {
    let {title, year} = req.body

    let queryText = 1INSERT INTO movies (title, year, created_at)
  }