const S = require("sequelize");
const db = require("../db");

class Movie extends S.Model {}

Movie.init(
  {
    movieId: {
      type: S.INTEGER,
      allowNull: false,
      unique: true,
    },
    title: {
      type: S.STRING,
      allowNull: false,
    },
    genresList: {
      type: S.ARRAY(S.STRING),
    },
    overview: {
      type: S.TEXT,
    },
    releaseDate: {
      type: S.STRING,
    },
    poster_path: {
      type: S.TEXT,
    },
    backdrop_path: {
      type: S.TEXT,
    },
    popularity: {
      type: S.FLOAT,
    },
    vote_average: {
      type: S.FLOAT,
    },
    vote_count: {
      type: S.INTEGER,
    },
    budget: {
      type: S.INTEGER,
    },
    revenue: {
      type: S.INTEGER,
    },
    runtime: {
      type: S.INTEGER,
    },
    adult: {
      type: S.BOOLEAN,
    },
    
  },
  { sequelize: db, modelName: "movie" }
);

module.exports = Movie;

// genres: genres.map(genre => genre.name)