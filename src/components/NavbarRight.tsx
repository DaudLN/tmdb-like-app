import { AddIcon, BellIcon } from "@chakra-ui/icons";
import { Avatar, Box, HStack } from "@chakra-ui/react";
import SearchInputDrawer from "./SearchInputDrawer";

const NavbarRight = () => {
  return (
    <HStack>
      <HStack
        as="ul"
        listStyleType={"none"}
        spacing={"30px"}
        display="flex"
        flexDir={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box as="li">
          <AddIcon boxSize={5} fontWeight={"bold"} />
        </Box>
        <Box as="li">
          <BellIcon boxSize={30} />
        </Box>
        <Box as="li">
          <Avatar bg="red.500" size={"sm"} name="Sailing" />
        </Box>
        <Box as="li">
          <SearchInputDrawer />
        </Box>
      </HStack>
    </HStack>
  );
};

export default NavbarRight;
