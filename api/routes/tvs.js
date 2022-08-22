const express = require("express");
const tvsRouter = express.Router();
const tvController = require("../controllers/tvs.controller")

tvsRouter.get("/allUserTvs", tvController.allUserTvs)
tvsRouter.post("/addTv", tvController.addTv)
tvsRouter.put("/removeTv", tvController.deleteTv)


module.exports = tvsRouter