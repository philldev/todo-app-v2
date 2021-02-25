import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import NavContext from "../context/NavContext";
import UserContext from "../context/UserContext";
import { DarkIcon, DeleteIcon, HamburgerIcon, LightIcon } from "./Icons";

const AppHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { toggle, isActive, close } = useContext(NavContext);
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
          onClick={toggleColorMode}
          bg="gray.700"
          _hover={{
            bg: "gray.600",
          }}
          icon={colorMode === "light" ? <LightIcon /> : <DarkIcon />}
        />
        <IconButton
          bg="inherit"
          _hover={{ bg: "gray.600" }}
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
          }}
          icon={!isActive ? <HamburgerIcon /> : <DeleteIcon />}
          display={{ md: "none" }}
        />
      </Container>
    </Flex>
  );
};

export const Nav = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  if (!user.isLoggedIn) return null;
  return (
    <Box display={{ base: "none", md: "block" }}>
      {[
        { label: "Todos", href: "/" },
        { label: "Profile", href: "/profile" },
      ].map((item, idx) => {
        const isLinkActive = item.href === router.pathname;
        return (
          <NextLink key={idx} href={item.href}>
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
              {item.label}
            </Link>
          </NextLink>
        );
      })}
    </Box>
  );
};

export default AppHeader;
