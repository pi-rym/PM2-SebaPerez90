const Movie = require("../models/Movie");

const getMovies = async () => {
  try {
    const resp = await fetch("https://students-api.up.railway.app/movies");

    if (resp.status === 200) {
      const data = await resp.json();

      return data;
    }
  } catch (error) {
    throw new Error("something with the DB goes wrong");
  }
};

const fetchMovies = async () => {
  const movies = await Movie.find();

  return movies;
};

const postMovieService = async (product) => {
  const newProduct = await Movie.create(product);
  return newProduct;
};

module.exports = { getMovies, fetchMovies, postMovieService };
