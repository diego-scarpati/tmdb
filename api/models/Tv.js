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
    genreIds: {
      type: S.ARRAY(S.INTEGER),
    },
    overview: {
      type: S.TEXT,
    },
    releaseDate: {
      type: S.DATE,
    },
    posterPath: {
      type: S.TEXT,
    },
    backdropPath: {
      type: S.TEXT,
    },
    popularity: {
      type: S.FLOAT,
    },
    voteAverage: {
      type: S.FLOAT,
    },
    voteCount: {
      type: S.INTEGER,
    },
  },
  { sequelize: db, modelName: "tv" }
);

module.exports = Tv;

/*
backdrop_path: "/n6vVs6z8obNbExdD3QHTr4Utu1Z.jpg"
first_air_date: "2019-07-25"
genre_ids: Array(2)
0: 10765
1: 10759
length: 2
[[Prototype]]: Array(0)
id: 76479
name: "The Boys"
origin_country: Array(1)
0: "US"
length: 1
[[Prototype]]: Array(0)
original_language: "en"
original_name: "The Boys"
overview: "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty."
popularity: 4278.866
poster_path: "/stTEycfG9928HYGEISBFaG1ngjM.jpg"
vote_average: 8.4
vote_count: 6050
*/
