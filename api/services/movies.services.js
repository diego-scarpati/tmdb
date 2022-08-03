const { Movie, User } = require("../models");

const addMovie = async (data) => {
  const { id, movie } = data;
  try {
    const user = await User.findByPk(id);
    const addedMovie = await Movie.findOrCreate({
      where: { movieId: movie.id },
      include: { model: User },
      defaults: { ...movie },
    });
    return addedMovie[0].addUser(user);
  } catch (error) {
    console.log("service addMovie error", error);
  }
};

const allUserMovies = async (data) => {
  const { id, movie } = data;
  try {
    const user = await User.findByPk(id);
    const movies = await Movie.findAll({
      where: { userId: user.id },
      include: { model: User }
    });
    return movies;
  } catch (error) {
    console.log("service addMovie error", error);
  }
};

module.exports = { addMovie, allUserMovies };
