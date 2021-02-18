import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function TodoInfo() {
  const { list, deleteAllCompleted } = useContext(TodoContext);
  const completeCount = list.filter((i) => i.isDone).length;
  const remainingCount = list.filter((i) => !i.isDone).length;
  return (
    <div>
      <span>Completed todos : {completeCount}</span>
      <button onClick={() => deleteAllCompleted()}>
        Delete completed todos
      </button>
      <br />
      <span>Remaining Todos : {remainingCount}</span>
    </div>
  );
}

export default TodoInfo;
