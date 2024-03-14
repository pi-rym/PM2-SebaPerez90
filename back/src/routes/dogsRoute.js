const { Router } = require("express");

const dogsRouter = Router();

dogsRouter.get("/", (req, res) => {
  res.send("guau guau");
});

dogsRouter.get("/favorites", (req, res) => {
  res.send("soy coco tu perro favorito");
});

module.exports = dogsRouter;
