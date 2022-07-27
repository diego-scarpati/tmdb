const { User, Movie, Tv } = require("../models");

const getAll = async () => {
  try {
    const movies = await Movie.findAll();
    const tv = await Tv.findAll();
    const users = await User.findAll({ include: { model: Movie, model: Tv } });
    return users;
  } catch (error) {
    console.log("getAll services error", error);
  }
};

const getById = async (id) => {
  try {
    const movies = await Movie.findAll();
    const tv = await Tv.findAll();
    const user = await User.findByPk(id, {include: {model: Movie, model: Tv}})
    return user
  } catch (error) {
    console.log("getById services error", error);
  }
}

module.exports = { getAll, getById };
