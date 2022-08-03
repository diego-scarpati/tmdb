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
    name: {
      type: S.STRING,
      allowNull: false,
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
  { sequelize: db, modelName: "movie" }
);

module.exports = Movie;

/*
adult: false
backdrop_path: "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg"
genre_ids: Array(3)
0: 14
1: 12
2: 28
length: 3
[[Prototype]]: Array(0)
id: 338953
original_language: "en"
original_title: "Fantastic Beasts: The Secrets of Dumbledore"
overview: "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers."
popularity: 4188.23
poster_path: "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg"
release_date: "2022-04-06"
title: "Fantastic Beasts: The Secrets of Dumbledore"
video: false
vote_average: 6.9
vote_count: 1841
*/
