import {
  Box,
  forwardRef,
  Grid,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { AnimateSharedLayout, isValidMotionProp, motion } from "framer-motion"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import NavContext from "../context/NavContext"
import UserContext from "../context/UserContext"

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Box ref={ref} {...chakraProps} />
  })
)

const variants = {
  closed: { x: "-100vw" },
  open: { x: 0 },
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
}

export default function MobileNavbar() {
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
  return (
    <MotionBox
      pos="fixed"
      insetY="0"
      left="0"
      transform="translateX(-100vw)"
      width="50vw"
      zIndex="overlay"
      shadow="dark-lg"
      bg={bg}
      color={color}
      initial={false}
      animate={isActive ? "open" : "closed"}
      transition={{ duration: 0.3 }}
      variants={variants}
    >
      <Box textAlign="center" p={2} pt="2">
        <Heading>Todo App</Heading>
      </Box>
      <AnimateSharedLayout>
        <Grid as="nav">
          {isLoggedIn &&
            [
              { label: "Todos", href: "/" },
              { label: "Profile", href: "/profile" },
            ].map((item, idx) => (
              <NextLink key={idx} href={item.href}>
                <Link
                  pos="relative"
                  bg={`${item.href === router.pathname ? "brand.600" : ""}`}
                  p="2"
                  _hover={{
                    bg: `${item.href === router.pathname ? "" : "gray.600"}`,
                    color: "gray.100",
                  }}
                  color={`${
                    item.href === router.pathname ? "gray.100" : "inherit"
                  }`}
                >
                  {item.href === router.pathname && (
                    <MotionBox
                      pos="absolute"
                      left="0"
                      top="0"
                      w="full"
                      h="full"
                      bg="brand.600"
                      layoutId="bgColor"
                      initial={false}
                      animate={{ backgroundColor: "rgba(95, 39, 205,1.0)" }}
                      spring={spring}
                    />
                  )}
                  <Text pos="relative">{item.label}</Text>
                </Link>
              </NextLink>
            ))}
          {isLoggedIn ? (
            <Link
              onClick={() => {
                logout()
                router.push("/signup")
              }}
              pos="relative"
              p="2"
              _hover={{
                color: "gray.100",
              }}
            >
              <Text pos="relative">Logout</Text>
            </Link>
          ) : (
            <NextLink href="/signup">
              <Link
                pos="relative"
                bg={`${"/signup" === router.pathname ? "brand.600" : ""}`}
                p="2"
                _hover={{
                  bg: `${"/signup" === router.pathname ? "" : "gray.600"}`,
                  color: "gray.100",
                }}
                color={`${
                  "/signup" === router.pathname ? "gray.100" : "inherit"
                }`}
              >
                {"/signup" === router.pathname && (
                  <MotionBox
                    pos="absolute"
                    left="0"
                    top="0"
                    w="full"
                    h="full"
                    bg="brand.600"
                    layoutId="bgColor"
                    initial={false}
                    animate={{ backgroundColor: "rgba(95, 39, 205,1.0)" }}
                    spring={spring}
                  />
                )}
                <Text pos="relative">Signup</Text>
              </Link>
            </NextLink>
          )}
        </Grid>
      </AnimateSharedLayout>
    </MotionBox>
  )
}
