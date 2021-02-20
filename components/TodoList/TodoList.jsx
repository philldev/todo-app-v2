import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import useFilter from "../../hooks/useFilter";
import { DeleteIcon } from "../Icons";

function TodoList() {
  const { list, checkTodo, deleteTodo, deleteAllCompleted } = useContext(
    TodoContext
  );
  const { filteredList, selectFilter, filters, filter } = useFilter();

  const completeCount = list.filter((i) => i.isDone).length;

  return (
    <Box overflowY="auto" maxH="100%" pos="relative">
      <VStack
        p="2"
        pos="absolute"
        inset="0"
        align="stretch"
        spacing="4"
        maxH="min"
      >
        <Flex
          alignItems="center"
          flexWrap="wrap"
          gridGap="2"
          justifyContent="flex-start"
          height="8"
        >
          {filters.map((item) => (
            <Box
              as="li"
              maxW="max-content"
              key={item.code}
              onClick={() => selectFilter(item.code)}
            >
              <Text
                fontWeight="bold"
                borderBottom={`${item.code === filter ? "2px solid" : ""}`}
                borderColor="brand.600"
                display="inline"
                whiteSpace="nowrap"
              >
                {item.label}
              </Text>
            </Box>
          ))}

          {completeCount ? (
            <Box as="li" maxW="max-content">
              <Button
                variant="outline"
                colorScheme="red"
                size="xs"
                onClick={() => deleteAllCompleted()}
              >
                Delete Completed
              </Button>
            </Box>
          ) : null}
        </Flex>
        <VStack align="stretch" spacing="4">
          {filteredList(list).length ? (
            filteredList(list).map((item) => (
              <Box as="li" key={item.id}>
                <TodoItem
                  item={item}
                  checkTodo={checkTodo}
                  deleteTodo={deleteTodo}
                />
              </Box>
            ))
          ) : (
            <Text>It's empty</Text>
          )}
        </VStack>
      </VStack>
    </Box>
  );
}

function TodoItem({ item, checkTodo, deleteTodo }) {
  const handleCheck = () => {
    checkTodo(item);
  };
  const handleDelete = () => {
    deleteTodo(item);
  };
  return (
    <Grid
      gap="2"
      alignItems="center"
      gridTemplateColumns="max-content auto max-content"
    >
      <Checkbox
        type="checkbox"
        defaultChecked={item.isDone}
        onChange={handleCheck}
      />
      <Text
        textDecor={`${item.isDone ? "line-through" : "normal"}`}
        opacity={`${item.isDone ? "0.5" : "1"}`}
      >
        {item.text}
      </Text>
      <IconButton
        bgColor="transparent"
        aria-label="Search database"
        size="xs"
        icon={<DeleteIcon color="red.400" opacity="0.75" />}
        onClick={handleDelete}
      />
    </Grid>
  );
}

export default TodoList;
