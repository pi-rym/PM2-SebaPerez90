const { getMovies, postMovieService } = require("../services/moviesService");

const moviesController = async (req, res) => {
  try {
    const data = await getMovies();
    res.status(200).json(data);
    
  } catch (error) {
    console.error(error);
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
  postMovieController,
};
