import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { AddIcon } from "../Icons";

import styles from "../../styles/todo-form.module.css";

function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addTodo(text);
            setText("");
          }
        }}
      />
      <button
        className={styles["add-btn"]}
        onClick={() => {
          addTodo(text);
          setText("");
        }}
      >
        <AddIcon />
      </button>
    </div>
  );
}

export default TodoForm;
