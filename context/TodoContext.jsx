import { createContext } from "react"
import shortid from "shortid"
import useLocalStorage from "../hooks/useLocalStorage"

export const TodoContext = createContext()

export function TodoProvider({ children }) {
  const [list, setList] = useLocalStorage("todo-app-v2-list", [])

  const addTodo = (text) => {
    if (text) {
      setList([
        ...list,
        {
          id: shortid(),
          text,
          isDone: false,
          createdAt: new Date().toISOString(),
          subTodo: [],
        },
      ])
    }
  }

  const deleteTodo = (item) => {
    setList(list.filter((i) => i.id !== item.id))
  }

  const checkTodo = (item) => {
    setList((prev) =>
      prev.map((i) =>
        i.id === item.id
          ? {
              ...i,
              isDone: !i.isDone,
              subTodo: i.subTodo.map((s) => ({
                ...s,
                isDone: i.isDone ? false : true,
              })),
            }
          : i
      )
    )
  }

  const deleteAllCompleted = () => {
    setList(list.filter((i) => !i.isDone))
  }

  const editTodo = (todo) => {
    setList((prev) => prev.map((i) => (i.id === todo.id ? todo : i)))
  }

  const addSubTodo = (todoId, text) => {
    if (text) {
      setList((prev) =>
        prev.map((item) =>
          item.id === todoId
            ? {
                ...item,
                subTodo: [
                  ...item.subTodo,
                  {
                    id: shortid(),
                    text,
                    isDone: item.isDone,
                    createdAt: new Date().toISOString(),
                    parentId: item.id,
                  },
                ],
              }
            : item
        )
      )
    }
  }

  const deleteSubTodo = (subTodo) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === subTodo.parentId
          ? {
              ...item,
              subTodo: item.subTodo.filter((i) => i.id !== subTodo.id),
            }
          : item
      )
    )
  }

  const editSubTodo = (subTodo, text) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === subTodo.parentId
          ? {
              ...item,
              subTodo: item.subTodo.map((i) =>
                i.id === subTodo.id ? { ...i, text: text } : i
              ),
            }
          : item
      )
    )
  }

  const checkSubTodo = (subTodo) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === subTodo.parentId
          ? {
              ...item,
              subTodo: item.subTodo.map((i) =>
                i.id === subTodo.id ? { ...i, isDone: !i.isDone } : i
              ),
            }
          : item
      )
    )
  }

  const completeCount = list.filter((i) => i.isDone).length

  return (
    <TodoContext.Provider
      value={{
        completeCount,
        list,
        addTodo,
        deleteTodo,
        checkTodo,
        deleteAllCompleted,
        editTodo,
        addSubTodo,
        deleteSubTodo,
        checkSubTodo,
        editSubTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
