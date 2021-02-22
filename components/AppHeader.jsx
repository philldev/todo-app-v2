import {
  Box,
  Flex,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import { LayoutGroupContext } from "framer-motion";
import NextLink from "next/link";
import { Router, useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { DarkIcon, LightIcon } from "./Icons";

const AppHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      justifyContent="space-between"
      alignItems="center"
      p="4"
      gridArea="header"
    >
      <Nav />
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <LightIcon /> : <DarkIcon />}
      />
    </Flex>
  );
};

const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣"];

const Nav = () => {
  const { logout, user } = useContext(UserContext);
  const router = useRouter();
  return (
    <Box as="nav">
      <UnorderedList display="flex" alignItems="center">
        <ListItem listStyleType="none" mr="8">
          <NextLink href="/">
            <Text
              fontSize="lg"
              cursor="pointer"
              fontWeight="bold"
              textColor="whiteAlpha.900"
            >
              Todo App {emojis[Math.floor(Math.random() * emojis.length)]}
            </Text>
          </NextLink>
        </ListItem>
        {user && (
          <>
            <ListItem listStyleType="none" mr="2">
              <NextLink href="/profile">
                <Text
                  fontSize="md"
                  cursor="pointer"
                  fontWeight="bold"
                  textColor="whiteAlpha.900"
                  lineHeight="none"
                >
                  Profile
                </Text>
              </NextLink>
            </ListItem>
            <ListItem listStyleType="none">
              <Text
                fontSize="md"
                cursor="pointer"
                fontWeight="bold"
                textColor="whiteAlpha.900"
                lineHeight="none"
                onClick={() => {
                  logout();
                  router.push("/signup");
                }}
              >
                Logout
              </Text>
            </ListItem>
          </>
        )}
      </UnorderedList>
    </Box>
  );
};

export default AppHeader;
