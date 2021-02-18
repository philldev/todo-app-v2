import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import TodoInfo from "../components/TodoInfo/TodoInfo";

import { TodoProvider } from "../context/TodoContext";
import AppLayout from "../components/Layout/AppLayout";
import Header from "../components/Layout/Header";

function Home() {
  return (
    <>
      <TodoProvider>
        <AppLayout>
          <Header />
          <TodoForm />
          <TodoList />
          <TodoInfo />
        </AppLayout>
      </TodoProvider>
    </>
  );
}

export default Home;
