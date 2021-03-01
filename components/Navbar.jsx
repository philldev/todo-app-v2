import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import useNavbar from "./hooks/useNavbar"
import { DarkIcon, DeleteIcon, HamburgerIcon, LightIcon } from "./Icons"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { toggle, isActive } = useNavbar()
  return (
    <Flex bg="gray.700" color="gray.100" gridArea="header" p="2">
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="container.lg"
        p="0"
      >
        <Nav />
        <IconButton
          aria-label="Toggle Dark mode"
          onClick={toggleColorMode}
          bg="gray.700"
          _hover={{
            bg: "gray.600",
          }}
          icon={colorMode === "light" ? <LightIcon /> : <DarkIcon />}
        />
        <IconButton
          aria-label="Toggle navbar"
          bg="inherit"
          _hover={{ bg: "gray.600" }}
          onClick={(e) => {
            e.stopPropagation()
            toggle()
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") close()
          }}
          icon={!isActive ? <HamburgerIcon /> : <DeleteIcon />}
          display={{ md: "none" }}
        />
      </Container>
    </Flex>
  )
}

const NavLink = ({ label, href, isButton, onClick }) => {
  const router = useRouter()
  const isLinkActive = href === router.pathname
  if (isButton)
    return (
      <Link
        display="inline-block"
        h="full"
        fontWeight="bold"
        px="4"
        borderBottom="2px solid transparent"
        _hover={{
          textDecor: "none",
        }}
        onClick={onClick}
      >
        {label}
      </Link>
    )
  return (
    <NextLink href={href}>
      <Link
        display="inline-block"
        h="full"
        fontWeight="bold"
        px="4"
        borderBottom="2px solid transparent"
        borderBottomColor={`${isLinkActive ? "brand.600" : ""}`}
        _hover={{
          textDecor: "none",
          borderBottomColor: `${!isLinkActive ? "gray.600" : ""}`,
        }}
      >
        {label}
      </Link>
    </NextLink>
  )
}

const Nav = () => {
  const { isLoggedIn, logout, router } = useNavbar()
  return (
    <Box display={{ base: "none", md: "block" }}>
      {isLoggedIn &&
        [
          { label: "Todos", href: "/" },
          { label: "Profile", href: "/profile" },
        ].map((item) => (
          <NavLink href={item.href} label={item.label} key={item.href} />
        ))}
      {isLoggedIn && (
        <NavLink
          isButton
          onClick={() => {
            logout()
            router.push("/signup")
          }}
          label="Logout"
        />
      )}
    </Box>
  )
}

export default Navbar
