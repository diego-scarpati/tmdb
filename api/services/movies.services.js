const { Movie, User } = require("../models");

const addMovie = async (data) => {
// console.log("🚀 ~ file: movies.services.js ~ line 4 ~ addMovie ~ data", data)
  const { id, movie } = data;
  try {
    const user = await User.findByPk(id);
    // console.log("🚀 ~ file: movies.services.js ~ line 8 ~ addMovie ~ user", user)
    const addedMovie = await Movie.findOrCreate({
      where: { movieId: movie.movieId },
      include: { model: User },
      defaults: { ...movie },
    });
    // console.log("🚀 ~ file: movies.services.js ~ line 15 ~ addMovie ~ addedMovie", addedMovie)
    return addedMovie[0].addUser(user);
  } catch (error) {
    console.log("service addMovie error", error);
  }
};

const allUserMovies = async (data) => {
// console.log("🚀 ~ file: movies.services.js ~ line 23 ~ allUserMovies ~ data", data)
  try {
    const user = await User.findByPk(data);
    // console.log("🚀 ~ file: movies.services.js ~ line 27 ~ allUserMovies ~ user", user)
    const movies = await Movie.findAll({
      include: [{
        model: User,
        where: {
            id: user.id
        },
        required: true
    }]
    });
    // console.log("🚀 ~ file: movies.services.js ~ line 32 ~ allUserMovies ~ movies", movies)
    return movies;
  } catch (error) {
    console.log("service allUserMovies error", error);
  }
};

module.exports = { addMovie, allUserMovies };
