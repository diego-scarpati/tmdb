const express = require("express");
const usersRouter = express.Router();
const { User } = require("../models");
const passport = require("passport");
const userController = require("../controllers/users.controller");

usersRouter.get("/", userController.getAll);
usersRouter.get("/:id", userController.getById);

usersRouter.post("/register", (req, res, next) => {
  console.log(req.body);
  User.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch(next);
});

usersRouter.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/",
    failureMessage: true,
  }),
  (req, res) => {
    console.log("🚀 ~ file: users.js ~ line 24 ~ req", req.body)
    req.login(req.user, function (err) {
      if (err) {
        return next(err);
      }
      console.log("req.user", req.user)
      console.log("req.cookies", req.cookies)
      return res.send(req.user);
    });
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
