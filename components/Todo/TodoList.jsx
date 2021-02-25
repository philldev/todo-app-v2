import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import useFilter from "../../hooks/useFilter";
import { DeleteIcon } from "../Icons";
import useTodoItem from "./hooks/useTodoItem";

const TodoList = () => {
  const { completeCount, list, deleteAllCompleted } = useContext(TodoContext);
  const { filteredList, selectFilter, filters, filter } = useFilter();

  return (
    <Box maxH="100%" overflow="hidden">
      {list.length && (
        <Box mb="4" p="2">
          <Heading mb="2" fontSize="lg">
            Filters
          </Heading>
          <Box overflowX="auto">
            <Flex
              overflowX="auto"
              w="min"
              as="ul"
              alignItems="center"
              flexWrap="nowrap"
              gridGap="2"
              justifyContent="flex-start"
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
                <Button
                  flex="0 0 auto"
                  variant="outline"
                  colorScheme="red"
                  size="xs"
                  onClick={() => deleteAllCompleted()}
                >
                  Delete Completed
                </Button>
              ) : null}
            </Flex>
          </Box>
        </Box>
      )}
      <Box overflowY="auto" h="full" pos="relative">
        <Box pos="absolute" inset="0" maxH="min">
          <VStack as="ul" align="stretch" spacing="4" p="2">
            {filteredList(list).length ? (
              filteredList(list).map((item) => (
                <Box as="li" listStyleType="none" key={item.id}>
                  <TodoItem item={item} />
                </Box>
              ))
            ) : (
              <Text textAlign="center">It's empty 🥱</Text>
            )}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

const FilterItem = ({ item, selectFilter, filter }) => (
  <Button
    key={item.code}
    size="xs"
    _focus={{ boxShadow: "none" }}
    onClick={() => selectFilter(item.code)}
  >
    <Text
      as="span"
      fontWeight="bold"
      borderBottom="2px solid"
      borderColor={`${item.code === filter ? "brand.600" : "transparent"}`}
      display="inline"
      flex="0 0 auto"
    >
      {item.label}
    </Text>
  </Button>
);

function TodoItem({ item }) {
  const { handleCheck, handleChange, handleDelete } = useTodoItem(item);
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
