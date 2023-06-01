import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameWrapper from "./GameWrapper";

const MovieSkeleton = () => {
  return (
    <GameWrapper>
      {Array(10)
        .fill(" ")
        .map((_movie, index) => (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderColor="gray.50"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="sm"
            key={index}
          >
            <Skeleton height="295px" />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <SkeletonText noOfLines={1} width="50px" mr="2" />
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  <SkeletonText noOfLines={1} width="50px" />
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                <SkeletonText noOfLines={1} width="150px" />
              </Box>
            </Box>

            <Box display="flex" mb="5" alignItems="center">
              <Box as="span" mx="6" color="gray.600" fontSize="sm">
                <SkeletonText noOfLines={1} width="100px" />
              </Box>
            </Box>
          </Box>
        ))}
    </GameWrapper>
  );
};

export default MovieSkeleton;
