import { useInfiniteQuery } from "@tanstack/react-query";
import Movie from "../entities/movie";
import APIResponse from "../entities/APIResponse";
import movieClient from "../services/movie-client";
import ms from "../utils/ms";
import useQueryParams from "../store/store";

const useMovies = () => {
  const queryParams = useQueryParams((state) => state.queryParams);
  return useInfiniteQuery<APIResponse<Movie>, Error>({
    queryKey: queryParams.genreIds // Update property name to genreIds
      ? [queryParams.genreIds.join(","), "movies"] // Join genreIds with comma
      : ["movies"],
    queryFn: ({ pageParam = 1 }) =>
      movieClient.getAll({
        params: {
          page: pageParam,
          with_genres: queryParams.genreIds?.join(",") || undefined, // Join genreIds with comma if available
          with_keywords: queryParams.searchParam,
        },
      }),
    staleTime: ms("24h"),
    getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
    keepPreviousData: true,
  });
};

export default useMovies;
