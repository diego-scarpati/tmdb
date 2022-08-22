const { User, Tv } = require("../models");

const addTv = async (data) => {
  const { id, tv } = data;
  try {
    const user = await User.findByPk(id);
    const addedTv = await Tv.findOrCreate({
      where: { tvId: tv.tvId },
      include: { model: User },
      defaults: { ...tv },
    });
    return addedTv[0].addUser(user);
  } catch (error) {
    console.log("service addTv error", error);
  }
};

const deleteTv = async (data) => {
  const { id, tv } = data;
  try {
    const user = await User.findByPk(id);
    const deletedTv = await Tv.findOne({ where: { tvId: tv } });
    return deletedTv.removeUser(user);
  } catch (error) {
    console.log("service addTv error", error);
  }
};

const allUserTvs = async (data) => {
  try {
    const user = await User.findByPk(data);
    const tvs = await Tv.findAll({
      include: [
        {
          model: User,
          where: {
            id: user.id,
          },
          required: true,
        },
      ],
    });
    return tvs;
  } catch (error) {
    console.log("service allUserTvs error", error);
  }
};

module.exports = { addTv, allUserTvs, deleteTv };
