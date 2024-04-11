///Express Router: /fruits/view
const express = require("express");
const fruits = express.Router();
fruits.get("/view", (req, res) => {
  const ArrayOfFruits = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"];
  res.send(ArrayOfFruits);
});

fruits.get("/:id", (req, res) => {
  const ArrayOfFruits = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"];
  if (req.params.id > ArrayOfFruits.length) {
    throw new Error(511);
  } else {
    res.send(req.params.id + ":" + ArrayOfFruits[req.params.id]);
  }
});

module.exports = fruits;
