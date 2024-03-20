const { Router } = require("express");
const {
  moviesController,
  fetchMoviesController,
} = require("../controllers/moviesController");
const moviesRouter = Router();

moviesRouter.get("/", moviesController);
moviesRouter.get("/all", fetchMoviesController);

module.exports = moviesRouter;
