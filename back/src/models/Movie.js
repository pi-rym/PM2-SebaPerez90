const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  poster: String,
  rate: Number,
  director: String,
  genre: Array,
  year: Number,
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
