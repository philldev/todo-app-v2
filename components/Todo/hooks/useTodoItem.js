import { useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";

export default function useTodoItem(item = {}) {
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
  return {
    handleCheck,
    handleChange,
    handleDelete,
  };
}
