import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import styles from "../../styles/todo-info.module.css";

function TodoInfo() {
  const { list, deleteAllCompleted } = useContext(TodoContext);
  const completeCount = list.filter((i) => i.isDone).length;
  const remainingCount = list.filter((i) => !i.isDone).length;
  return (
    <div className={styles.container}>
      <span>Completed todos : {completeCount}</span>
      <span>Remaining Todos : {remainingCount}</span>
      <div className={styles.action}>
        <button
          className={styles["btn-delete"]}
          onClick={() => deleteAllCompleted()}
        >
          Delete completed todos
        </button>
      </div>
    </div>
  );
}

export default TodoInfo;
