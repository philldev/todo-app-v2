import { useContext, useEffect } from "react"
import { TodoContext } from "../../../context/TodoContext"

export default function useTodoItem(item = {}) {
  const { checkTodo, deleteTodo, editTodo } = useContext(TodoContext)

  const handleCheck = () => {
    checkTodo(item)
  }
  const handleDelete = () => {
    deleteTodo(item)
  }
  const handleChange = (evt) => {
    editTodo({
      ...item,
      text: evt.target.value,
    })
  }

  // useEffect(() => {
  //   if (
  //     item.subTodo.length &&
  //     item.subTodo.every((s) => s.isDone === true) &&
  //     !item.isDone
  //   ) {
  //     checkTodo(item)
  //     console.log("hey")
  //   }
  // }, [item])
  return {
    handleCheck,
    handleChange,
    handleDelete,
  }
}
