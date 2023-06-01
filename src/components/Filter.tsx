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

export default function Filter({ name, children }: Props) {
  return (
    <Box position="relative" h="100vh" mt="2px">
      <Accordion allowMultiple>
        <AccordionItem
          me={8}
          borderRadius={"10px"}
          borderLeft={"20px"}
          borderColor="transparent"
          border={"1px"}
          p={1}
        >
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{children}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
