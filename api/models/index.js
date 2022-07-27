const User = require("./User");
const Tv = require("./Tv");
const Movie = require("./Movie")

Tv.belongsToMany(User, { through: "users_tvs" });
User.belongsToMany(Tv, { through: "users_tvs" });

Movie.belongsToMany(User, { through: "users_movies" });
User.belongsToMany(Movie, { through: "users_movies" });

module.exports = { User, Tv, Movie };
