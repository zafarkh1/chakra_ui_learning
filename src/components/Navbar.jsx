import { UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  HStack,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";

const Navbar = () => {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
      icon: <UnlockIcon />,
    });
  };
  return (
    <Flex
      as={"nav"}
      alignItems={"center"}
      justifyContent={"space-between"}
      py={"20px"}
      mb={"40px"}
    >
      <Heading as={"h1"}>Zafar</Heading>
      <HStack
        spacing={{ sm: "15px", lg: "30px" }}
        display={{ base: "none", sm: "flex" }}
      >
        <Avatar src="../images/mario.png" name="mario">
          <AvatarBadge width={"1.3em"} h={"1.3em"} bg={"teal.500"}>
            <Text fontSize="xs" color={"white"}>
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>hatamovzafar7070@gmail.com</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Log out
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
