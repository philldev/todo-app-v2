import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { DeleteIcon } from "../Icons";

import useFilter from "../../hooks/useFilter";

function TodoList() {
  const { list, checkTodo, deleteTodo } = useContext(TodoContext);
  const { filteredList, selectFilter, filters } = useFilter();

  return (
    <>
      <ul>
        {filters.map((item) => (
          <li key={item.code} onClick={() => selectFilter(item.code)}>
            {item.label}
          </li>
        ))}
      </ul>
      <ul>
        {filteredList(list).map((item) => (
          <li key={item.id}>
            <TodoItem
              item={item}
              checkTodo={checkTodo}
              deleteTodo={deleteTodo}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

function TodoItem({ item, checkTodo, deleteTodo }) {
  const handleCheck = () => {
    checkTodo(item);
  };
  const handleDelete = () => {
    deleteTodo(item);
  };
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={item.isDone}
        onChange={handleCheck}
      />
      <span>{item.text}</span>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default TodoList;
