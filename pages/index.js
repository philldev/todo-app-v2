import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import TodoInfo from "../components/TodoInfo/TodoInfo";

import { TodoProvider } from "../context/TodoContext";
import AppLayout from "../components/Layout/AppLayout";
import Header from "../components/Layout/Header";
import Head from "next/head";

function Home() {
  return (
    <>
      <TodoProvider>
        <Head>
          <title>Todo App</title>
        </Head>
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
