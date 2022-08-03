const express = require("express");
const authRouter = express();
const authController = require("../controllers/auth.controller");

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.logIn);

module.exports = authRouter;
