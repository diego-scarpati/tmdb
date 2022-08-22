const express = require("express");
const usersRouter = express.Router();
const userController = require("../controllers/users.controller");

usersRouter.get("/", userController.getAll);
usersRouter.get("/:id", userController.getById);

module.exports = usersRouter;
