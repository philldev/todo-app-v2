import { useColorModeValue } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import NavContext from "../../context/NavContext"
import UserContext from "../../context/UserContext"

export default function useMobileNavbar() {
  const { isActive } = useContext(NavContext)
  const bg = useColorModeValue("gray.100", "gray.800")
  const color = useColorModeValue("gray.700", "gray.100")
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { user, logout } = useContext(UserContext)
  useEffect(() => {
    setIsLoggedIn(user.isLoggedIn)
    console.log(isLoggedIn, user.isLoggedIn)
  }, [user.isLoggedIn])

  return {
    bg,
    color,
    router,
    isLoggedIn,
    logout,
    isActive,
  }
}
