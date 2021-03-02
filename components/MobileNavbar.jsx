import { Box, Grid, Heading, Link, Text } from "@chakra-ui/react"
import { AnimateSharedLayout } from "framer-motion"
import NextLink from "next/link"
import { useRouter } from "next/router"
import useMobileNavbar from "./hooks/useMobileNavbar"
import MotionBox from "./motion/MotionBox"

const MobileNavbar = () => {
  const { bg, color, router, isLoggedIn, logout, isActive } = useMobileNavbar()
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
            ].map((item) => (
              <MobileNavbarLink
                href={item.href}
                label={item.label}
                key={item.href}
              />
            ))}
          {isLoggedIn ? (
            <MobileNavbarLink
              isButtonLink
              onClick={() => {
                logout()
                router.push("/signup")
              }}
              label="Logout"
            />
          ) : (
            <MobileNavbarLink href="/signup" label="Signup" />
          )}
        </Grid>
      </AnimateSharedLayout>
    </MotionBox>
  )
}

const MobileNavbarLink = ({ href, label, isButtonLink, onClick }) => {
  const router = useRouter()
  const isLinkActive = href === router.pathname
  if (isButtonLink)
    return (
      <Link onClick={onClick} pos="relative" p="2">
        <Text pos="relative">{label}</Text>
      </Link>
    )
  return (
    <NextLink href={href}>
      <Link
        pos="relative"
        bg={`${isLinkActive ? "brand.600" : ""}`}
        p="2"
        _hover={{
          bg: `${isLinkActive ? "" : "gray.600"}`,
          color: "gray.100",
        }}
        color={`${isLinkActive ? "gray.100" : "inherit"}`}
      >
        {isLinkActive && (
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
        <Text pos="relative">{label}</Text>
      </Link>
    </NextLink>
  )
}

const variants = {
  closed: { x: "-100vw" },
  open: { x: 0 },
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
}

export default MobileNavbar
