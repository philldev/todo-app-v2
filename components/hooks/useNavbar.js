import { useRouter } from "next/router"
import { useContext } from "react"
import NavContext from "../../context/NavContext"
import UserContext from "../../context/UserContext"
import useIsLoggedIn from "./useIsLoggedIn"

export default function useNavbar() {
  const { toggle, isActive, close } = useContext(NavContext)
  const { isLoggedIn, logout } = useIsLoggedIn()
  const router = useRouter()
  const { user } = useContext(UserContext)

  return {
    router,
    toggle,
    isActive,
    close,
    isLoggedIn,
    logout,
    user,
  }
}
