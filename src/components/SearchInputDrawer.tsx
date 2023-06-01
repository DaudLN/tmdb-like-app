import { SearchIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import SearchInput from "./SearchInput";

const SearchInputDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SearchIcon color={"green"} boxSize={18} onClick={onOpen} />
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Search game by its name, keyword, ...
          </DrawerHeader>
          <DrawerBody>
            <SearchInput />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchInputDrawer;
