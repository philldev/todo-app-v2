import {
  Box,
  Flex,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useContext } from "react";
import NavContext from "../context/NavContext";
import UserContext from "../context/UserContext";
import { DarkIcon, HamburgerIcon, LightIcon } from "./Icons";

const AppHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { toggle } = useContext(NavContext);
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
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        icon={<HamburgerIcon />}
        display={{ md: "none" }}
      />
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <LightIcon /> : <DarkIcon />}
      />
    </Flex>
  );
};

const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣"];

export const Nav = ({ type }) => {
  const { user } = useContext(UserContext);
  return (
    <Box
      as="nav"
      display={{
        base: `${type !== "mobile" ? "none" : "block"}`,
        md: `${type !== "mobile" ? "block" : "none"}`,
      }}
    >
      <UnorderedList
        display="flex"
        flexDir={`${type === "mobile" ? "column" : "row"}`}
        alignItems={`${type === "mobile" ? "flex-start" : "center"}`}
        spacing={`${type === "mobile" ? "4" : "0"}`}
        m="0"
      >
        <ListItem listStyleType="none" mr="8">
          <NextLink href={user.isLoggedIn ? "/" : "/signup"}>
            <Text
              fontSize="lg"
              cursor="pointer"
              fontWeight="bold"
              textColor="whiteAlpha.900"
              mb={`${type === "mobile" ? "10" : "0"}`}
            >
              Todo App {emojis[Math.floor(Math.random() * emojis.length)]}
            </Text>
          </NextLink>
        </ListItem>
        {user.isLoggedIn && (
          <>
            <ListItem listStyleType="none" mr="2">
              <NextLink href="/">
                <Text
                  fontSize={`${type === "mobile" ? "2xl" : "md"}`}
                  cursor="pointer"
                  fontWeight="bold"
                  textColor="whiteAlpha.900"
                  lineHeight="none"
                >
                  Todos
                </Text>
              </NextLink>
            </ListItem>
            <ListItem listStyleType="none" mr="2">
              <NextLink href="/profile">
                <Text
                  fontSize={`${type === "mobile" ? "2xl" : "md"}`}
                  cursor="pointer"
                  fontWeight="bold"
                  textColor="whiteAlpha.900"
                  lineHeight="none"
                >
                  Profile
                </Text>
              </NextLink>
            </ListItem>
          </>
        )}
      </UnorderedList>
    </Box>
  );
};

export default AppHeader;
