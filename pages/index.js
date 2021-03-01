import { Box } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useContext } from "react"
// components
import HomeLayout from "../components/Layout/HomeLayout"
import AddTodoBtn from "../components/Todo/AddTodoBtn"
import TodoHeader from "../components/Todo/TodoHeader"
import TodoInfo from "../components/Todo/TodoInfo"
import TodoList from "../components/Todo/TodoList"
// context
import { TodoProvider } from "../context/TodoContext"
import UserContext from "../context/UserContext"
// Hooks
import useDidMountEffect from "../hooks/useDidMountEffect"

function Home() {
  const { user } = useContext(UserContext)
  const router = useRouter()

  useDidMountEffect(() => {
    if (!user.isLoggedIn) {
      router.push("/signup")
    }
  }, [user])

  return (
    <>
      <TodoProvider>
        <Head>
          <title>Todo App</title>
        </Head>
        {user.isLoggedIn && (
          <HomeLayout>
            <TodoHeader />
            <TodoList />
            <TodoInfo />
            <Box
              pos="absolute"
              p="4"
              pb="14"
              zIndex="popover"
              bottom="0"
              right="0"
            >
              <AddTodoBtn />
            </Box>
          </HomeLayout>
        )}
      </TodoProvider>
    </>
  )
}

export default Home
