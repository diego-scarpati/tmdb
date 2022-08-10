const S = require("sequelize");
const db = require("../db");

class Tv extends S.Model {}

Tv.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    tvId: {
      type: S.INTEGER,
      allowNull: false,
      unique: true,
    },
    genresList: {
      type: S.ARRAY(S.STRING),
    },
    createdByList: {
      type: S.ARRAY(S.STRING),
    },
    overview: {
      type: S.TEXT,
    },
    first_air_date: {
      type: S.STRING,
    },
    last_air_date: {
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
    adult: {
      type: S.BOOLEAN,
    },
    seasonsCount: {
      type: S.INTEGER,
    },
    episodes: {
      type: S.INTEGER,
    },

  },
  { sequelize: db, modelName: "tv" }
);

module.exports = Tv;

// seasonsCount: seasons.length
// genresList: genres.map(genre => genre.name)
// createdByList: idem genre