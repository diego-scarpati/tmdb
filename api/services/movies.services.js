const { Movie, User } = require("../models");

const addMovie = async (data) => {
  const { id, movie } = data;
  try {
    const user = await User.findByPk(id);
    const addedMovie = await Movie.findOrCreate({
      where: { movieId: movie.movieId },
      include: { model: User },
      defaults: { ...movie },
    });
    return addedMovie[0].addUser(user);
  } catch (error) {
    console.log("service addMovie error", error);
  }
};

const deleteMovie = async (data) => {
  const { id, movie } = data;
  try {
    const user = await User.findByPk(id);
    const deletedMovie = await Movie.findOne({ where: { movieId: movie } });
    return deletedMovie.removeUser(user);
  } catch (error) {
    console.log("service addMovie error", error);
  }
};

const allUserMovies = async (data) => {
  try {
    const user = await User.findByPk(data);
    const movies = await Movie.findAll({
      include: [
        {
          model: User,
          where: {
            id: user.id,
          },
          required: true,
        },
      ],
    });
    return movies;
  } catch (error) {
    console.log("service allUserMovies error", error);
  }
};

module.exports = { addMovie, allUserMovies, deleteMovie };
