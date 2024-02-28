import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

import React from "react";
import { Form, redirect } from "react-router-dom";

const Create = () => {
  return (
    <Box maxW={"480px"}>
      <Form method="post" action="/create">
        <FormControl mb={"40px"} isRequired>
          <FormLabel>Task name:</FormLabel>
          <Input type="text"></Input>
          <FormHelperText>Enter a decriptive name of the task</FormHelperText>
        </FormControl>

        <FormControl mb={"40px"}>
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description of the task"
            name="description"
          />
        </FormControl>

        <FormControl display={"flex"} alignItems={"center"} mb={"40px"}>
          <Checkbox name="isPriority" size={"lg"} colorScheme="purple" />
          <FormLabel ml={"10px"} mb={"0"}>
            Make this a priority task
          </FormLabel>
        </FormControl>
        <Button type="submit" bg="blue" color={"white"}>
          Submit
        </Button>
      </Form>
    </Box>
  );
};

export default Create;

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);

  return redirect("/");
};
