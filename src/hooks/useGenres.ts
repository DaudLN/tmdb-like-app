import { useQuery } from "@tanstack/react-query";
import Genre from "../entities/Genre";
import APIResponse from "../entities/APIResponse";
import genreClient from "../services/genre-client";
import genres from "../data/genres";
import ms from "../utils/ms";

const useGenres = () => {
  return useQuery<APIResponse<Genre>, Error>({
    queryFn: genreClient.getAll,
    queryKey: ["genres"],
    initialData: genres,
    staleTime: ms("24h"),
  });
};

export default useGenres;
