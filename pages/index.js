import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import Header from "../components/Layout/Header";
import HomeLayout from "../components/Layout/HomeLayout";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoInfo from "../components/TodoInfo/TodoInfo";
import TodoList from "../components/TodoList/TodoList";
import { TodoProvider } from "../context/TodoContext";
import UserContext from "../context/UserContext";
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
