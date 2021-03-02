import { useContext, useEffect, useState } from "react"
import UserContext from "../../context/UserContext"

export default function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { user, logout } = useContext(UserContext)
  useEffect(() => {
    setIsLoggedIn(user.isLoggedIn)
  }, [user.isLoggedIn])
  return {
    isLoggedIn,
    logout,
  }
}
