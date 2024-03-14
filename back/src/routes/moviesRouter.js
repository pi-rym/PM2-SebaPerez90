const { Router } = require("express");
const {
  moviesController,
  testService,
} = require("../controllers/moviesController");

const moviesRouter = Router();

moviesRouter.get("/", testService);
moviesRouter.get("/movies", moviesController);

module.exports = moviesRouter;
