import { createContext, useEffect, useState } from "react";
import shortid from "shortid";
import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = createContext();

const data = [
  {
    text: "todo 1",
    id: 1,
    isDone: false,
  },
  {
    text: "todo 2",
    id: 2,
    isDone: false,
  },
  {
    text: "todo 3",
    id: 3,
    isDone: true,
  },
];

export function TodoProvider({ children }) {
  const [list, setList] = useLocalStorage("todo-list", []);

  const addTodo = (text) => {
    if (text) {
      setList([...list, { id: shortid(), text, isDone: false }]);
    }
  };

  const deleteTodo = (item) => {
    setList(list.filter((i) => i.id !== item.id));
  };

  const checkTodo = (item) => {
    setList((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, isDone: !i.isDone } : i))
    );
  };

  const deleteAllCompleted = () => {
    setList(list.filter((i) => !i.isDone));
  };

  return (
    <TodoContext.Provider
      value={{ list, addTodo, deleteTodo, checkTodo, deleteAllCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
}
