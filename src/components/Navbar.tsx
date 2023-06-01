import { Flex, Spacer } from "@chakra-ui/react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      px={4}
      py={3}
      justify={"space-between"}
      alignItems={"center"}
      justifyContent={"center"}
      bg="#032541"
      color="#ffffff"
    >
      <NavbarLeft />
      <Spacer />
      <NavbarRight />
    </Flex>
  );
};

export default Navbar;
