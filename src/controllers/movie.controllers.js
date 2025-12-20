
import { Movie } from "../models/Movie.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (e) {
    res.status(404).json({ message: `Not found ${e.message}` });
  }
};

export function getMovie(req, res) {
  const id = req.params.id;
  // find movie in database

  if (id === 0) {
    res.status(404).json({ message: "movie not found" });
  }

  res.json({
    id: 5,
    title: "avatar",
    description: "",
    year: "2021",
    director: "James Cameron",
    likes: 200,
  });
}

export const createMovie = async (req, res) => {
  const { title, description, year, director } = req.body;

  const movie = await Movie.create({
    title,
    description,
    year,
    director,
  });

  // wstaw newMovie do bazy danych
  console.log(`🎬 [MOVIE CREATED]`);
  res.status(201).json(movie);
};

export const incrementLikes = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);
    const movie = await Movie.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    console.log(movie);
    if (!movie) {
      return res.status(404).json({ message: "Film nie znaleziony" });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
