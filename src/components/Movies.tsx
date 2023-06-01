import { Box, Button, Image, Spinner } from "@chakra-ui/react";
import React from "react";
import formatDate from "../utils/date-formater";
import image from "../utils/image";
import placeholder from "../assets/noimageplaceholder.png";
import GameWrapper from "./GameWrapper";
import MovieSkeleton from "./Skeleton";
import VoteAverage from "./VoteAverage";
import useMovies from "../hooks/useMovies";

const Movies = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useMovies();
  if (error) return <p>{error.message}</p>;
  if (isLoading) return <MovieSkeleton />;
  if (!data) return null;
  console.log(data);
  return (
    <GameWrapper>
      {data.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((movie) => (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderColor={"gray.50"}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="sm"
              key={movie.id}
            >
              <Image
                src={image(movie.poster_path)}
                alt={`${movie.title} image`}
                fallbackSrc={placeholder}
              />
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <VoteAverage vote_average={movie.vote_average} />
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  ></Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={2}
                >
                  {movie.title}
                </Box>
              </Box>

              <Box display="flex" mb="5" alignItems="center">
                <Box as="span" mx="6" color="gray.600" fontSize="sm">
                  {movie.release_date
                    ? formatDate(movie.release_date)
                    : undefined}
                </Box>
              </Box>
            </Box>
          ))}
        </React.Fragment>
      ))}
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} isDisabled={isFetchingNextPage}>
          {isFetchingNextPage ? <Spinner /> : "Load more"}
        </Button>
      )}
    </GameWrapper>
  );
};

export default Movies;
