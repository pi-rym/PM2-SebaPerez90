const { Router } = require("express");
const exampleController  = require("../controllers/exampleController");

const exampleRoute = Router();

exampleRoute.get("/", (req, res) => {
  res.send("guau guau");
});

exampleRoute.get("/favorite", exampleController);

module.exports = exampleRoute;
