import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import TodoInfo from "../components/TodoInfo/TodoInfo";

import { TodoProvider } from "../context/TodoContext";

function Home() {
  return (
    <>
      <TodoProvider>
        <TodoForm />
        <TodoList />
        <TodoInfo />
      </TodoProvider>
    </>
  );
}

export default Home;
