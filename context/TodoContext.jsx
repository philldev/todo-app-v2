import { createContext } from "react";
import shortid from "shortid";
import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = createContext();

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

  const editTodo = (todo) => {
    setList((prev) => prev.map((i) => (i.id === todo.id ? todo : i)));
  };

  const completeCount = list.filter((i) => i.isDone).length;

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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
