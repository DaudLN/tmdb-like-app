import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useQueryParams from "../store/store";

const Genre = () => {
  const { data, isLoading, error } = useGenres();
  const { queryParams, setGenreIds } = useQueryParams((state) => ({
    queryParams: state.queryParams,
    setGenreIds: state.setGenreIds,
  }));

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <Box>
      <Text my={4} color={"gray.500"}>
        Genres
      </Text>
      <SimpleGrid minChildWidth={"160px"}>
        {data?.results.map((genre) => (
          <Button
            key={genre.id}
            borderRadius={"20px"}
            border={"1px solid gray"}
            isActive={queryParams.genreIds?.includes(genre.id)} // Update property name to genreIds
            variant={
              queryParams.genreIds?.includes(genre.id) ? "solid" : "ghost"
            } // Update property name to genreIds
            fontWeight={"5px"}
            p={0}
            size={"sm"}
            m={3}
            onClick={() => {
              if (queryParams.genreIds?.includes(genre.id)) {
                const updatedGenreIds = queryParams.genreIds?.filter(
                  (id) => id !== genre.id
                );
                setGenreIds(updatedGenreIds); // Update function name to setGenreIds
              } else {
                setGenreIds([...(queryParams.genreIds || []), genre.id]); // Update function name to setGenreIds
              }
            }}
          >
            {genre.name}
          </Button>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Genre;
