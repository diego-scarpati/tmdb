const movieServices = require("../services/movies.services")

const addMovie = async (req, res, next) => {
  try {
    const addedMovie = await movieServices.addMovie(req.body)
    return res.send(addedMovie)
  } catch (error) {
    console.log("controller addedMovie error", error)
  }
}

const allUserMovies = async (req, res, next) => {
  try {
    const movies = await movieServices.allUserMovies(req.body)
    return res.send(movies)
  } catch (error) {
    console.log("controller allUserMovies error", error)
  }
}

module.exports = {addMovie, allUserMovies}