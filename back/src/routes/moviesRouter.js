const { Router } = require("express");
const {
  moviesController,
  fetchMoviesController,
  postMovieController,
} = require("../controllers/moviesController");

const moviesRouter = Router();

moviesRouter.get("/", moviesController);
moviesRouter.post("/", postMovieController);
moviesRouter.get("/all", fetchMoviesController);

module.exports = moviesRouter;
