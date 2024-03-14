const { Router } = require("express");
const {
  moviesController,
  testService,
} = require("../controllers/moviesController");

const moviesRouter = Router();

moviesRouter.get("/", testService);
moviesRouter.get("/movies", moviesController);

//! ANOTHER WAY TO GET THE CONTROLLERS, IT´S BETTER TO ME
// const moviesController = require("../controllers/moviesController");
// moviesRouter.get("/", moviesController.testService);
// moviesRouter.get("/movies", moviesController.moviesController);

module.exports = moviesRouter;
