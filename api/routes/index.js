const express = require("express");
const router = express.Router();
const usersRouter = require('./users')
const moviesRouter = require('./movies')
const tvsRouter = require('./tvs')

router.use("/users", usersRouter)
router.use("/movies", moviesRouter)
router.use("/tvs", tvsRouter)

module.exports = router;
