import { Flex, IconButton, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { AddIcon } from "../Icons";

function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);
  return (
    <Flex gridGap={4}>
      <Input
        onKeyPress={(evt) => {
          if (evt.key === "Enter") {
            addTodo(text);
            setText("");
          }
        }}
        value={text}
        variant="outline"
        backgroundColor="blackAlpha.600"
        border="none"
        onChange={(evt) => setText(evt.target.value)}
      />

      <IconButton
        onClick={() => {
          addTodo(text);
          setText("");
        }}
        aria-label="Add todo"
        icon={<AddIcon />}
        size="md"
        backgroundColor="blue.400"
      />
    </Flex>
  );
}

export default TodoForm;
