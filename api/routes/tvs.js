const express = require("express");
const tvsRouter = express.Router();
const axios = require("axios");
const { Tv } = require("../models");

const apiKey = "6edac15cca9bd35488d662783103bd8f";

tvsRouter.put("/addTv", (req, res, next) => {
  // console.log("Req.body", req.body);
  // console.log("Req.params", req.params);
  const { user, info } = req.body;
  // console.log("info: ", info);
  let favoritesObj, tvList;
  User.findByPk(user.id)
    .then((user) => {
      // console.log("User del findByPk")
      favoritesObj = user.getFavorites();
      // console.log("Se ejecuta getFavorites")
      tvList = user.getTv();
      // console.log("Se ejecuta getTv")
      // console.log("tvs before: ", tvList);
      tvList.push(info);
      // console.log("tvs after: ", tvList);
      favoritesObj["tv"] = tvList;
      // console.log("favoritesObj after: ",favoritesObj["tv"])
      // console.log("user.favorites before: ",user.favorites)
      // user.favorites = favoritesObj;
      // console.log("user.favorites after: ",user.favorites)
      // user.save();
      // console.log("favoritesObj del then: ", favoritesObj)
      return favoritesObj;
    })
    .then((updatedObj) => {
      // console.log("updatedObj del add:", updatedObj)
      User.update(
        {
          favorites: updatedObj,
        },
        {
          where: { id: user.id },
          returning: true,
          plain: true,
        }
      )
      .then((result) => {
        const updatedRow = result[1];
        res.status(201).send(updatedRow[0]);
        // console.log("result del update: ", result)
      })
    })
    .catch(next);
});

tvsRouter.put("/removeTv", (req, res, next) => {
  // console.log("1 Req.body: ", req.body);
  // console.log("Req.params: ", req.params);
  const { user, id } = req.body;
  // console.log("2 user: ", user);
  // console.log("3 id: ", id);
  // console.log("4 typeof id: ", typeof id);
  User.findByPk(user.id)
    .then((user) => {
      // console.log("User del findByPk")
      let favoritesObj = user.getFavorites();
      // console.log("Se ejecuta getFavorites")
      let tvList = user.gettv();
      // console.log("Se ejecuta gettv")
      // console.log("tv before: ", tvList);
      const resultList = tvList.filter((tv) => {
        // console.log("del filter:", tv.id)
        // console.log("del filter:", typeof tv.id)
        console.log("Booleano", tv.id !== id)
        return tv.id !== id
      });
      // console.log("tv after: ", tvList);
      favoritesObj["tv"] = resultList;
      return favoritesObj;
    })
    .then((updatedObj) => {
      // console.log("updatedObj del remove:", updatedObj)
      User.update(
        {
          favorites: updatedObj,
        },
        {
          where: { id: user.id },
          returning: true,
          plain: true,
        }
      )
      .then((result) => {
        const updatedRow = result[1];
        res.status(201).send(updatedRow[0]);
        // console.log("result del update: ", result)
      })
    })
    .catch(next);
});

module.exports = tvsRouter