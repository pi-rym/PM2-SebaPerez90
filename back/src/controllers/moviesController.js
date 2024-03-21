const {
  getMovies,
  fetchMovies,
  postMovieService,
} = require("../services/moviesService");

const moviesController = async (req, res) => {
  const data = await getMovies();
  res.json(data);
};

const fetchMoviesController = async (req, res) => {
  try {
    const movies = await fetchMovies();

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postMovieController = async (req, res) => {
  try {
    await postMovieService(req.body);

    res.status(201).json({ message: "Producto creado exitosamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  moviesController,
  fetchMoviesController,
  postMovieController,
};
