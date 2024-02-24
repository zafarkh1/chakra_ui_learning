import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(6, 1fr)" }}
      bg={"gray.700"}
    >
      <GridItem
        as="aside"
        colSpan={{ base: 1, md: 2, xl: 1 }}
        bg="purple.400"
        p={{ base: "10px", lg: "30px" }}
        minH={{ md: "100vh" }}
      >
        <span>Sidebar</span>
      </GridItem>
      <GridItem as={"main"} colSpan={{ base: 1, md: 4, xl: 5 }}>
        <Navbar />
      </GridItem>
    </Grid>
  );
};

export default Root;
