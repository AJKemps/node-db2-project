const express = require("express");

const db = require("../cars/cars-config.js");

const router = express.Router();

router.get("/", (req, res) => {
  // do stuff here

  db.select("*")
    .from("cars")
    .then((response) => {
      res
        .status(200)
        .json({ message: "cars router is running", data: response });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "there was an issue connecting to the database" });
    });
});

router.get("/:id", (req, res) => {
  // do stuff here
});
router.post("/", (req, res) => {
  let newCar = req.body;

  db("cars")
    .insert(newCar)
    .returning("id")
    .then((response) => {
      res.status(201).json({ inserted: response });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "there was an issue connecting to the database" });
    });
  // do stuff here
});
router.put("/:id", (req, res) => {
  // do stuff here
});
router.delete("/", (req, res) => {
  // do stuff here
});

module.exports = router;
