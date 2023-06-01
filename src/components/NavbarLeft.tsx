import { HStack, Link } from "@chakra-ui/react";

const NavbarLeft = () => {
  return (
    <HStack>
      {/* <Image src={logo} /> */}
      <HStack
        as="ul"
        listStyleType={"none"}
        spacing={"30px"}
        display="flex"
        flexDir={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Link as="li">Movie</Link>
        <Link as="li">TV Show</Link>
        <Link as="li">People</Link>
        <Link as="li">More</Link>
      </HStack>
    </HStack>
  );
};

export default NavbarLeft;
