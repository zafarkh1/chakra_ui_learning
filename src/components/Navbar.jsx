import { Box, Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as={"nav"} alignItems={"center"} justifyContent={"space-between"}>
      <Heading as={"h1"}>Zafar</Heading>
      <HStack spacing={"30px"}>
        <Box bg={"gray.400"} p={"10px"}>
          Z
        </Box>
        <Text>hatamovzafar7070@gmail.com</Text>
        <Button colorScheme="purple">Log out</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
