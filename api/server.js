const express = require("express");
const helmet = require("helmet");

const CarsRouter = require("../cars/cars-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/cars", CarsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "server running" });
});

module.exports = server;
