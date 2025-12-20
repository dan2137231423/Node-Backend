
import { Router } from "express";
import { getMovies, getMovie, createMovie } from "../controllers/movie.controllers.js";

const movieRoute = Router();

movieRoute.get('/api/movie', getMovies)


// GET /api/movies → lista {id, title, year, likes}
// GET /api/movies/:id → szczegóły + opis
// POST /api/movies/:id/like → zwiększ likes i zwróć zaktualizowany film
// (opcjonalnie) POST /api/movies/:id/unlike → zmniejsz likes (min 0)

movieRoute.get('/api/movie/:id', getMovie)
movieRoute.post('/api/movie', createMovie)
movieRoute.post('/api/movie/')

export default movieRoute;
