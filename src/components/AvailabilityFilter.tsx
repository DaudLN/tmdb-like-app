import { Box, Checkbox, CheckboxGroup, Stack, Text } from "@chakra-ui/react";

const AvailabilityFilter = () => {
  return (
    <Box>
      <Text my={4} color={"gray.500"}>
        Availabilities
      </Text>
      <CheckboxGroup>
        <Stack direction="column">
          <Checkbox value="1">Search all availability</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Box>
  );
};

export default AvailabilityFilter;
