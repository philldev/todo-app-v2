import { useContext, useState } from "react"
import { TodoContext } from "../../../context/TodoContext"

export default function useSubTodoForm() {
  const [text, setText] = useState("")
  const { addSubTodo } = useContext(TodoContext)
  return {
    text,
    setText,
    addSubTodo,
  }
}
