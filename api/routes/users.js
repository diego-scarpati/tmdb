const express = require("express");
const usersRouter = express.Router();
const { User } = require("../models");
const passport = require("passport");
const userController = require("../controllers/users.controller")

usersRouter.get("/", userController.getAll);
usersRouter.get("/:id", userController.getById);

usersRouter.post("/register", (req, res, next) => {
  User.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch(next);
});

usersRouter.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  (req, res) => {
    res.send(req.user);
  }
);

usersRouter.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  });
});

module.exports = usersRouter;
