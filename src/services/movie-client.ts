import Movie from "../entities/movie";
import APIClient from "./api-client";

const movieClient = new APIClient<Movie>("/movie/popular");

export default movieClient;
