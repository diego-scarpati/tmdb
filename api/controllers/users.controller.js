const usersServices = require("../services/users.services.js");

const getAll = async (req, res, next) => {
  try {
    const users = await usersServices.getAll();
    return res.send(users);
  } catch (error) {
    console.log("getAll controller error", error);
    next();
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await usersServices.getById(id);
    return res.send(user);
  } catch (error) {
    console.log("getById controller error", error);
    next();
  }
};

module.exports = { getAll, getById };
