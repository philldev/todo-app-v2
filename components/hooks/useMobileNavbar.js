import { useColorModeValue } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useContext } from "react"
import NavContext from "../../context/NavContext"
import useIsLoggedIn from "./useIsLoggedIn"

export default function useMobileNavbar() {
  const { isActive } = useContext(NavContext)
  const bg = useColorModeValue("gray.100", "gray.800")
  const color = useColorModeValue("gray.700", "gray.100")
  const router = useRouter()
  const { isLoggedIn, logout } = useIsLoggedIn()

  return {
    bg,
    color,
    router,
    isLoggedIn,
    logout,
    isActive,
  }
}
