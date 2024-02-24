import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const customStyle = {
  textAlign: "center",
  bg: "red.400",
  mt: "1rem",
  py: "1rem",
  color: "white",
  borderRadius: "5px",
  fontWeight: "bolder",
};

const Dashboard = () => (
  <Container maxW="4xl">
    <Heading textAlign="center">Hello Chakra UI</Heading>
    <Text ml="10px">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eos
      tenetur? Voluptatem natus quam, totam eligendi laborum libero officiis
      beatae!
    </Text>
    <Text color={"blue"} mt={"10px"}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
      necessitatibus cumque sequi tenetur possimus itaque, maiores cupiditate
      laudantium quod asperiores facere consectetur eum cum iure, ullam
      doloribus omnis? Placeat, culpa.
    </Text>
    <Box
      bg={"orange.400"}
      p={"1rem"}
      borderRadius={"10px"}
      color={"white"}
      fontWeight={"bold"}
    >
      <Text as={"span"}>It's me, boy!</Text>
    </Box>
    <Box sx={customStyle}>It's over</Box>
  </Container>
);

export default Dashboard;
