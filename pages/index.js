import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import TodoInfo from "../components/TodoInfo/TodoInfo";

import { TodoProvider } from "../context/TodoContext";
import HomeLayout from "../components/Layout/HomeLayout";
import Header from "../components/Layout/Header";
import Head from "next/head";
import { useContext, useEffect, useRef } from "react";
import UserContext from "../context/UserContext";
import { useRouter } from "next/router";
import useDidMountEffect from "../hooks/useDidMountEffect";

function Home() {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useDidMountEffect(() => {
    if (!user) {
      router.push("/signup");
    }
  }, [user]);

  return (
    <>
      <TodoProvider>
        <Head>
          <title>Todo App</title>
        </Head>
        {user && (
          <HomeLayout>
            <Header />
            <TodoForm />
            <TodoList />
            <TodoInfo />
          </HomeLayout>
        )}
      </TodoProvider>
    </>
  );
}

export default Home;
