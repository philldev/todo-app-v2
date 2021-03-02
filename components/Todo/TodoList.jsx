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
} from "@chakra-ui/react"
import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext"
import useFilter from "../../hooks/useFilter"
import { CheckIcon, DeleteIcon } from "../Icons"
import AddSubTodoBtn from "./AddSubTodoBtn"
import useSubTodoItem from "./hooks/useSubTodoItem"
import useTodoItem from "./hooks/useTodoItem"

const TodoList = () => {
  const { completeCount, list, deleteAllCompleted } = useContext(TodoContext)
  const { filteredList, selectFilter, filters, filter } = useFilter()

  return (
    <Box maxH="100%" overflow="hidden">
      {list.length !== 0 && (
        <Box pb="6" p="2">
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
                <Box key={idx} as="li" listStyleType="none">
                  <FilterItem
                    item={item}
                    filter={filter}
                    selectFilter={selectFilter}
                  />
                </Box>
              ))}

              {completeCount ? (
                <Box as="li" listStyleType="none">
                  <Button
                    flex="0 0 auto"
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
  )
}

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
)

const CustomCheckBox = ({ isDone, onClick }) => {
  const checkStyle = {
    bg: !isDone ? "gray.200" : "blue.400",
    opacity: !isDone ? "0" : "1",
  }
  return (
    <IconButton
      bg={checkStyle.bg}
      rounded="full"
      aria-label="Check todo"
      size="xs"
      _focus={{ bg: checkStyle.bg }}
      _active={{ bg: checkStyle.bg }}
      _hover={{ bg: checkStyle.bg }}
      icon={<CheckIcon color="gray.100" opacity={checkStyle.opacity} />}
      onClick={onClick}
    />
  )
}

function TodoItem({ item }) {
  const { handleCheck, handleChange, handleDelete } = useTodoItem(item)
  return (
    <Box>
      <Grid
        gap="2"
        alignItems="center"
        gridTemplateColumns="max-content auto max-content"
      >
        <CustomCheckBox onClick={handleCheck} isDone={item.isDone} />
        <Input
          id={`edit-todo-${item.id}`}
          textDecor={`${item.isDone ? "line-through" : "normal"}`}
          opacity={`${item.isDone ? "0.5" : "1"}`}
          type="text"
          value={item.text}
          onChange={handleChange}
          size="md"
        />
        <Flex>
          <AddSubTodoBtn parentText={item.text} item={item} />
          <IconButton
            bgColor="transparent"
            aria-label="Delete Todo"
            size="xs"
            icon={<DeleteIcon color="red.400" opacity="0.75" />}
            onClick={handleDelete}
          />
        </Flex>
      </Grid>
      <Grid mt="2" gap="2">
        {item.subTodo.map((i) => (
          <SubTodo key={i.id} item={i} />
        ))}
      </Grid>
    </Box>
  )
}

const SubTodo = ({ item }) => {
  const { handleChange, handleCheck, handleDelete } = useSubTodoItem(item)
  return (
    <Grid
      pl="6"
      pr="8"
      gap="2"
      alignItems="center"
      gridTemplateColumns="max-content auto max-content"
    >
      <CustomCheckBox isDone={item.isDone} onClick={handleCheck} />
      <Input
        id={`edit-todo-${item.id}`}
        textDecor={`${item.isDone ? "line-through" : "normal"}`}
        opacity={`${item.isDone ? "0.5" : "1"}`}
        type="text"
        value={item.text}
        onChange={handleChange}
        size="xs"
      />
      <Flex>
        <IconButton
          bgColor="transparent"
          aria-label="Delete Todo"
          size="xs"
          icon={<DeleteIcon color="red.400" opacity="0.75" />}
          onClick={handleDelete}
        />
      </Flex>
    </Grid>
  )
}

export default TodoList
