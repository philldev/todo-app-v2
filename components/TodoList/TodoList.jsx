import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { DeleteIcon } from "../Icons";

import useFilter from "../../hooks/useFilter";

import styles from "../../styles/todo-list.module.css";

function TodoList() {
  const { list, checkTodo, deleteTodo } = useContext(TodoContext);
  const { filteredList, selectFilter, filters, filter } = useFilter();

  return (
    <div className={styles.container}>
      <ul className={styles["filter-list"]}>
        {filters.map((item) => (
          <li
            key={item.code}
            onClick={() => selectFilter(item.code)}
            className={`${styles["filter-item"]} ${
              item.code === filter ? styles.active : ""
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <ul>
        {filteredList(list).length ? (
          filteredList(list).map((item) => (
            <li key={item.id}>
              <TodoItem
                item={item}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
              />
            </li>
          ))
        ) : (
          <div>It's empty</div>
        )}
      </ul>
    </div>
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
    <div
      className={`${styles["todo-item"]}  ${
        item.isDone ? styles["is-done"] : ""
      } `}
    >
      <input
        type="checkbox"
        defaultChecked={item.isDone}
        onChange={handleCheck}
      />
      <span>{item.text}</span>
      <button onClick={handleDelete} className={styles["delete-btn"]}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default TodoList;
