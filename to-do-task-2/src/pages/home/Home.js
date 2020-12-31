import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ToDoContainer from "../../components/to-do-container/ToDoContainer";
import { useAsync } from "../../hooks/useAsync";

export function Home() {
  const [{ data, status, error }, doFetch] = useAsync(
    "http://localhost:5000/todos",
    {}
  );

  return (
    <Flex justify="space-around" m="3">
      {status === "error" && <Box>{error}</Box>}
      {(status === "idle" || status === "loading") && <Box>Loading ...</Box>}

      {status === "success" && (
        <>
          <ToDoContainer
            title="To Do"
            todos={data.filter((todo) => todo.progress === "to-do")}
          />
          <ToDoContainer
            title="In Progress"
            todos={data.filter((todo) => todo.progress === "in-progress")}
          />
          <ToDoContainer
            title="Done"
            todos={data.filter((todo) => todo.progress === "done")}
          />
        </>
      )}
    </Flex>
  );
}
