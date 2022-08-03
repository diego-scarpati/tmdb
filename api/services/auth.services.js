const { User } = require("../models");

const register = async (userData) => {
  try {
    const userCreated = await User.create(userData);
    return userCreated;
  } catch (error) {
    console.log(error);
  }
};

const logIn = async (data) => {
  const { username } = data;
  const user = await User.findOne({
    where: { email: username },
  });
  return user;
};

module.exports = { register, logIn };
