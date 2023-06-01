import { Badge } from "@chakra-ui/react";

interface Props {
  vote_average: number;
}
const VoteAverage = ({ vote_average }: Props) => {
  return (
    <Badge borderRadius="full" px="2" colorScheme="teal">
      {vote_average}
    </Badge>
  );
};

export default VoteAverage;
