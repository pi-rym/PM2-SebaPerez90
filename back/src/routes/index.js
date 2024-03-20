const { Router } = require("express");
const moviesRouter = require("./moviesRouter");

const { welcome } = require("../controllers/indexController");

const route = Router();

route.get("/", welcome);
route.use("/movies", moviesRouter);

module.exports = route;
