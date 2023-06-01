import { Divider, Grid, GridItem } from "@chakra-ui/react";
import AvailabilityFilter from "./AvailabilityFilter";
import Filter from "./Filter";
import Genre from "./Genre";
import Movies from "./Movies";
import ShowMeFilter from "./ShowMeFilter";

const Layout = () => {
  return (
    <Grid templateColumns={"repeat(12, 1fr)"} m={10}>
      <GridItem colSpan={3}>
        <Filter name="Filters">
          <Divider />
          <ShowMeFilter />
          <Divider m={5} />
          <AvailabilityFilter />
          <Divider mt={5} />
          <Genre />
        </Filter>
      </GridItem>
      <GridItem colSpan={{ base: 12, sm: 12, md: 12, lg: 9 }}>
        <Movies />
      </GridItem>
    </Grid>
  );
};

export default Layout;
