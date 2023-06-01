import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode | ReactNode[];
}

const Filter = ({ name, children }: Props) => {
  return (
    <Accordion
      allowMultiple
      m={3}
      border={"1px"}
      borderColor={"gray.500"}
      borderRadius={"10px"}
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter;
