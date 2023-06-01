import { Box, Text, Radio, RadioGroup, Stack } from "@chakra-ui/react";

const ShowMeFilter = () => {
  return (
    <Box>
      <Text my={4} color={"gray.500"}>
        Show Me
      </Text>
      <RadioGroup display={"flex"} flexDir={"column"}>
        <Stack direction="column">
          <Radio value="1">Everything</Radio>
          <Radio value="2">Movie I Haven't Seen</Radio>
          <Radio value="3">Movie I Have Seen</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default ShowMeFilter;
