import { Router } from "express";
import { getMovies } from "../controllers/movie.controllers.js";

const movieRoute = Router();

movieRoute.get('/api/movie', getMovies)

export default movieRoute;