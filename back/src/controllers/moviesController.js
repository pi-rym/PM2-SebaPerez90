const { getMovies, greeting } = require("../services/moviesService");

const moviesController = async (req, res, next) => {
  const data = await getMovies();
  console.log(data);
  next();
};

const testService = (req, res, next) => {
  res.send("implementing my first controller");
  greeting();
  next();
};

module.exports = { testService, moviesController };
