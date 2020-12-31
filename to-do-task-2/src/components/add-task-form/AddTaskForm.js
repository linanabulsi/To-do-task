import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function AddTaskForm() {
  var date = new Date().toDateString();
  const [todo, setTodo] = React.useState({
    title: "",
    severity: "Normal",
    progress: "to-do",
    date,
    description: ""
  });

console.log(todo);

  const createToDo = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' }
    })
  };

  return (
    <FormControl
      id="add-task-form"
      width="400px"
      p="4"
      border="2px solid"
      borderColor="gray.200"
      borderRadius="5px"
      boxShadow="xl"
      // zIndex=""
      bg="white"
      pos="absolute"
    >
      <Text fontSize="20px" fontWeight="bold" textAlign="left">
        Add Task
      </Text>
      <FormLabel pt="10px">Name</FormLabel>
      <Input bg="gray.50" onChange={e => setTodo({ ...todo, title: e.target.value })} />
      <FormLabel pt="10px">Description</FormLabel>
      <Input bg="gray.50" onChange={e => setTodo({ ...todo, description: e.target.value })}/>
      <FormLabel pt="10px">Severity</FormLabel>
      <Select bg="gray.50" _selected="Normal" onChange={e => setTodo({ ...todo, severity: e.target.value })}>
        <option>Normal</option>
        <option>Important</option>
        <option>Urgent</option>
      </Select>
      <Flex justify="flex-end" mt={4}>
        <Button
          onClick={createToDo}
          mt={4}
          colorScheme="teal"
          variant="solid"
          type="submit"
          mr={1}
        >
          Add
        </Button>
        <Button mt={4} colorScheme="teal" variant="ghost">
          Cancel
        </Button>
      </Flex>
    </FormControl>
  );
}
