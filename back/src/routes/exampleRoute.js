const { Router } = require("express");
const dogsController  = require("../controllers/exampleController");

const exampleRoute = Router();

exampleRoute.get("/", (req, res) => {
  res.send("guau guau");
});

exampleRoute.get("/favorite", dogsController);

module.exports = exampleRoute;
