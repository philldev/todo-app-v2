import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import useFilter from "../../hooks/useFilter";
import { DeleteIcon } from "../Icons";

function TodoList() {
  const { list, deleteAllCompleted } = useContext(TodoContext);
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
          as="ul"
          alignItems="center"
          flexWrap="wrap"
          gridGap="2"
          justifyContent="flex-start"
          height="8"
        >
          {filters.map((item, idx) => (
            <FilterItem
              key={idx}
              item={item}
              filter={filter}
              selectFilter={selectFilter}
            />
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
        <VStack as="ul" align="stretch" spacing="4">
          {filteredList(list).length ? (
            filteredList(list).map((item) => (
              <Box as="li" key={item.id}>
                <TodoItem item={item} />
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

function FilterItem({ item, selectFilter, filter }) {
  return (
    <Box
      as="li"
      listStyleType="none"
      maxW="max-content"
      key={item.code}
      cursor="pointer"
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
  );
}

function TodoItem({ item }) {
  const { checkTodo, deleteTodo, editTodo } = useContext(TodoContext);
  const handleCheck = () => {
    checkTodo(item);
  };
  const handleDelete = () => {
    deleteTodo(item);
  };
  const handleChange = (evt) => {
    editTodo({
      ...item,
      text: evt.target.value,
    });
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
      <Input
        textDecor={`${item.isDone ? "line-through" : "normal"}`}
        opacity={`${item.isDone ? "0.5" : "1"}`}
        type="text"
        value={item.text}
        onChange={handleChange}
        size="md"
      />

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
