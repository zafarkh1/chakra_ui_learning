import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  // const customStyle = {
  //   textAlign: "center",
  //   color: "white",
  //   p: "15px",
  //   bg: "purple.400",
  //   my: "15px",
  //   borderRadius: "10px",
  //   fontSize: "25px",
  // };
  return (
    <SimpleGrid py={"10px"} spacing={10} minChildWidth={"200px"}>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"grey.200"} h={"200px"} border={"1px solid"}></Box>
    </SimpleGrid>
    // <Container as={"section"} maxW={"4xl"}>
    //   <Heading p={"20px"}>Learning Chakra UI</Heading>
    //   <Text ml={"20px"}>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
    //     consequuntur neque minima deleniti nulla accusamus.
    //   </Text>
    //   <Text color={"blue.300"} ml={"20px"}>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
    //     temporibus minima.
    //   </Text>
    //   <Box
    //     p={"20px"}
    //     bg={"orange.400"}
    //     color={"white"}
    //     borderRadius={"5px"}
    //     mt={"10px"}
    //   >
    //     It's just simple div
    //   </Box>
    //   <Box sx={customStyle}>It's box</Box>
    // </Container>
  );
};

export default Dashboard;
