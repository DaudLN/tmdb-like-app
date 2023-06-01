import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import useQueryParams from "../store/store";
const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchParam = useQueryParams((s) => s.setSearchParam);
  const query = useQueryParams((s) => s.queryParams);

  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputRef && inputRef.current !== null) {
            setSearchParam(inputRef.current.value);
            console.log(inputRef.current.value, query);
          }
        }}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" ref={inputRef} placeholder="Search game here" />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
