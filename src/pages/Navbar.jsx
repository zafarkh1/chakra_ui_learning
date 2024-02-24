import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Container maxW={"6xl"}>
      <Flex as={'nav'} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontWeight={"bolder"} fontSize={{ base: "24px", md: "36px" }}>
          Zafar
        </Text>
        <Flex alignItems={"center"} gap={{base: '1rem', md: '2rem'}}>
          <Text>About</Text>
          <Text>Contact</Text>
          <Text>Blog</Text>
          <Text>Profile</Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
