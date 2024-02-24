import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Container maxW={"4xl"} py={'3rem'}>
      <Flex as={"nav"} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontWeight={"bolder"} fontSize={{ base: "24px", md: "36px" }}>
          Zafar
        </Text>
        <HStack spacing={{ base: "1rem", md: "2rem" }} color={"blue.500"}>
          <Text>About</Text>
          <Text>Contact</Text>
          <Text>Blog</Text>
          <Text>Profile</Text>
          <Button colorScheme={"blue"}>Log out</Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
