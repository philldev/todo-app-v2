import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import styles from "../../styles/todo-info.module.css";
import { CompleteIcon } from "../Icons";

function TodoInfo() {
  const { list } = useContext(TodoContext);
  const completeCount = list.filter((i) => i.isDone).length;
  const remainingCount = list.filter((i) => !i.isDone).length;
  return (
    <div className={styles.container}>
      <h3>Progress</h3>
      <span className={styles.progress}>
        Completed todos : {completeCount}/{list.length}{" "}
        {completeCount === list.length && (
          <CompleteIcon
            style={{ color: "var(--color-green)" }}
            width={18}
            width={16}
          />
        )}
      </span>
      <div className={styles["progress-bar"]}>
        <div
          className={styles.fill}
          style={{ width: `${(completeCount / list.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default TodoInfo;
