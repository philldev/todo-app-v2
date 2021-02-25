import { Flex, IconButton, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { AddIcon } from "../Icons";

function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);
  return (
    <Flex gridGap={4} p="2">
      <Input
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
}

export default TodoForm;
