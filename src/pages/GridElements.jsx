import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const GridElements = () => {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      gap={"1rem"}
      mt={"3rem"}
      flexWrap={"wrap"}
      minW={"300px"}
    >
      <GridItem w="100%" h={"40px"} bg={"blueviolet"}>
        Image 1
      </GridItem>
      <GridItem w="100%" h={"40px"} bg={"blueviolet"}>
        Image 2
      </GridItem>
      <GridItem w="100%" h={"40px"} bg={"blueviolet"}>
        Image 3
      </GridItem>
      <GridItem w="100%" h={"40px"} bg={"blueviolet"}>
        Image 4
      </GridItem>
      <GridItem w="100%" h={"40px"} bg={"blueviolet"}>
        Image 5
      </GridItem>
    </Grid>
  );
};

export default GridElements;
