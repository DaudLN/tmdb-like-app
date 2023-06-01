import { SimpleGrid } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameWrapper = ({ children }: Props) => {
  return (
    <SimpleGrid
      as="section"
      columns={{ base: 1, md: 3, lg: 4, xl: 5 }}
      spacing={7}
    >
      {children}
    </SimpleGrid>
  );
};

export default GameWrapper;
