const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  // do stuff here
  res.status(200).json({ message: "cars router is running" });
});

router.get("/:id", (req, res) => {
  // do stuff here
});
router.post("/", (req, res) => {
  // do stuff here
});
router.put("/:id", (req, res) => {
  // do stuff here
});
router.delete("/", (req, res) => {
  // do stuff here
});

module.exports = router;
