const tvServices = require("../services/tvs.services");

const addTv = async (req, res, next) => {
  try {
    const addedTv = await tvServices.addTv(req.body);
    return res.send(addedTv);
  } catch (error) {
    console.log("controller addedTv error", error);
  }
};

const deleteTv = async (req, res, next) => {
  try {
    const deletedTv = await tvServices.deleteTv(req.body);
    return res.sendStatus(202);
  } catch (error) {
    console.log("controller deletedTv error", error);
  }
};

const allUserTvs = async (req, res, next) => {
  const { id } = req.query;
  try {
    const movies = await tvServices.allUserTvs(id);
    return res.send(movies);
  } catch (error) {
    console.log("controller allUserTvs error", error);
  }
};

module.exports = { addTv, allUserTvs, deleteTv };
