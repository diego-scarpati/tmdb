const movieServices = require("../services/movies.services");

const addMovie = async (req, res, next) => {
  try {
    const addedMovie = await movieServices.addMovie(req.body);
    return res.send(addedMovie);
  } catch (error) {
    console.log("controller addedMovie error", error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const deletedMovie = await movieServices.deleteMovie(req.body);
    return res.sendStatus(202);
  } catch (error) {
    console.log("controller deletedMovie error", error);
  }
};

const allUserMovies = async (req, res, next) => {
  const { id } = req.query;
  try {
    const movies = await movieServices.allUserMovies(id);
    return res.send(movies);
  } catch (error) {
    console.log("controller allUserMovies error", error);
  }
};

module.exports = { addMovie, allUserMovies, deleteMovie };
