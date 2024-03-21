const { Router } = require("express");
const {
  moviesController,
  postMovieController,
} = require("../controllers/moviesController");

const moviesRouter = Router();

moviesRouter.get("/", moviesController);
moviesRouter.post("/", postMovieController);

module.exports = moviesRouter;

