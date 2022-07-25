import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./features/TopBar";
import TodoAdd from "./features/TodoAdd";
import TodoList from "./features/TodoList";

export default function App() {
  return (
      <ChakraProvider theme={theme}>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <TopBar />
          <TodoList />
          <TodoAdd />
        </Box>
      </ChakraProvider>
  );
}
