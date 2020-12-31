import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ToDoCard from "../to-do-card/ToDoCard";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AddTaskForm from "../add-task-form/AddTaskForm";
import { Redirect } from "react-router-dom";

export default function ToDoContainer({ title, todos }) {
  const [isClicked, setIsClicked] = React.useState(false);
  console.log(isClicked);

  return (
    <Flex
      flexDirection="column"
      borderRadius="md"
      border="2px solid rgb(34, 112, 214)"
      w="250px"
    >
      <Box
        bg="rgb(209, 220, 235)"
        h="35px"
        borderBottom="2px solid rgb(34, 112, 214)"
      >
        <Text>{title}</Text>
      </Box>

      <Flex direction="column" p={2} mt={2} sx={{ "& > div + div": { mt: 2 } }}>
        {todos.map((todo) => (
          <ToDoCard
            key={todo.title}
            severity={todo.severity}
            title={todo.title}
            date={todo.date}
          />
        ))}
        {title === "To Do" && (
          <Button
            rightIcon={<AiOutlinePlusCircle />}
            colorScheme="teal"
            variant="outline"
            mt="2"
            type="submit"
            onClick={() => setIsClicked(true)}
          >
            Add task
          </Button>
        )}
      </Flex>

      {isClicked && <AddTaskForm />}
    </Flex>
  );
}
