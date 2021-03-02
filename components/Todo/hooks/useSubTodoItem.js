import { useContext } from "react"
import { TodoContext } from "../../../context/TodoContext"

export default function useSubTodoItem(subTodo) {
  const { deleteSubTodo, checkSubTodo, editSubTodo } = useContext(TodoContext)
  const handleCheck = () => {
    checkSubTodo(subTodo)
  }
  const handleChange = (e) => {
    editSubTodo(subTodo, e.target.value)
  }
  const handleDelete = () => {
    deleteSubTodo(subTodo)
  }
  return {
    handleChange,
    handleCheck,
    handleDelete,
  }
}
