import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { AddIcon } from "../Icons";

function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);
  return (
    <div>
      <input
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
