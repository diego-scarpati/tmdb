const SECRET = process.env.SECRET;

var jwt = require("jsonwebtoken");
const authServices = require("../services/auth.services");

const register = async (req, res, next) => {
  try {
    const userCreated = await authServices.register(req.body);
    if (!userCreated) {
      return res.status(404).json({ message: "User has not been created" });
    }
    return res.status(201).json(userCreated);
  } catch (error) {
    next(error);
  }
};

const logIn = async (req, res, next) => {
  try {
    const loggedUser = await authServices.logIn(req.body);
    if (!loggedUser) {
      return res.status(404).send({ message: "User could not get logged in" });
    }
    const passwordIsValid = await loggedUser.comparePassword(req.body.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    const token = jwt.sign({ id: loggedUser.id }, SECRET, {
      expiresIn: 1000 * 3600 * 12, // 12 horas
    });
    const user = loggedUser.dataValues;
    res.status(200).send({
      user: {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        accessToken: token,
      },
      // accessToken: token,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { register, logIn };
