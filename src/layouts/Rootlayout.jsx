import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const Rootlayout = () => {
  return (
    <div>
      <Grid bg={"gray.100"} templateColumns="repeat(6, 1fr)">
        <GridItem
          as={"aside"}
          bg={"purple.500"}
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          minHeight={{lg: '100vh'}}
          p={{base: '15px', lg: '25px'}}
        >
          <Sidebar/>
        </GridItem>
        <GridItem as={"main"} colSpan={{ base: 6, lg: 4, xl: 5 }} p={"40px"}>
          <Navbar />
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Rootlayout;
