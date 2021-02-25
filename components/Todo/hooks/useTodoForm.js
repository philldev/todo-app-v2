import { useContext, useState } from "react";
import { TodoContext } from "../../../context/TodoContext";

export default function useTodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);
  return {
    text,
    setText,
    addTodo,
  };
}
