const S = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class User extends S.Model {
  encryptPassword(password, salt) {
    return bcrypt.hash(password, salt);
  }
  async comparePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    username: {
      type: S.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
    },
    // salt: {
    //   type: S.STRING,
    // },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate(async (user) => {
  if (!user.password) return;
  try {
    const salt = await bcrypt.genSalt(8);
    const passwordHash = await user.encryptPassword(user.password, salt);
    user.password = passwordHash;
  } catch (e) {
    throw new Error("ERROR PASSWORD");
  }
});

// const saltRounds = 8;
// bcrypt.genSalt(saltRounds).then((salt) => {
//   User.salt = salt;
// });

module.exports = User;
