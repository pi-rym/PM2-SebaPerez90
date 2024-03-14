const { Router } = require("express");
const dogsController  = require("../controllers/dogsController");

const dogsRouter = Router();

dogsRouter.get("/", (req, res) => {
  res.send("guau guau");
});

dogsRouter.get("/favorites", dogsController);

module.exports = dogsRouter;
