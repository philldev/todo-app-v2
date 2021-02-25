import { Flex, IconButton, Input } from "@chakra-ui/react";
import { AddIcon } from "../Icons";
import useTodoForm from "./hooks/useTodoForm";

const TodoForm = () => {
  const { text, setText, addTodo } = useTodoForm();
  return (
    <Flex gridGap={4} p="2">
      <Input
        id="add-todo"
        onKeyPress={(evt) => {
          if (evt.key === "Enter") {
            addTodo(text);
            setText("");
          }
        }}
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <IconButton
        onClick={() => {
          addTodo(text);
          setText("");
        }}
        aria-label="Add todo"
        textColor="whiteAlpha.900"
        icon={<AddIcon />}
        size="md"
        backgroundColor="brand.600"
      />
    </Flex>
  );
};

export default TodoForm;
