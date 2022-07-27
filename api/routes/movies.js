const express = require("express");
const moviesRouter = express.Router();
const axios = require("axios");
const { Movie, User } = require("../models");
const movieController = require("../controllers/movies.controller")

const apiKey = "6edac15cca9bd35488d662783103bd8f";

moviesRouter.post("addMovie", movieController.addMovie)
moviesRouter.get("allUserMovies", movieController.allUserMovies)


module.exports = moviesRouter