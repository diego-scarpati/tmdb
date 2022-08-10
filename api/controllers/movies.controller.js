const movieServices = require("../services/movies.services")

const addMovie = async (req, res, next) => {
// console.log("🚀 ~ file: movies.controller.js ~ line 4 ~ addMovie ~ req.body", req.body)
  try {
    const addedMovie = await movieServices.addMovie(req.body)
    // console.log("🚀 ~ file: movies.controller.js ~ line 7 ~ addMovie ~ addedMovie", addedMovie)
    return res.send(addedMovie)
  } catch (error) {
    console.log("controller addedMovie error", error)
  }
}

const allUserMovies = async (req, res, next) => {
  // console.log("🚀 ~ file: movies.controller.js ~ line 15 ~ allUserMovies ~ req.query", req.query)
  const {id} = req.query
  try {
    const movies = await movieServices.allUserMovies(id)
    // console.log("🚀 ~ file: movies.controller.js ~ line 19 ~ allUserMovies ~ movies", movies)
    return res.send(movies)
  } catch (error) {
    console.log("controller allUserMovies error", error)
  }
}

module.exports = {addMovie, allUserMovies}