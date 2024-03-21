const Movie = require("../models/Movie");

const getMovies = async () => {
  const movies = await Movie.find();
  return movies;
};

const postMovieService = async (product) => {
  const newProduct = await Movie.create(product);
  return newProduct;
};

module.exports = { getMovies, postMovieService };
