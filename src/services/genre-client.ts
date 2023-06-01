import Genre from "../entities/Genre";
import APIClient from "./api-client";

const genreClient = new APIClient<Genre>("/genre/movie/list");

export default genreClient;
