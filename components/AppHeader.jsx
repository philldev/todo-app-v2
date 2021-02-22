import { Box, Flex, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DarkIcon, LightIcon } from "./Icons";
import NextLink from "next/link";

const AppHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣"];
  let randoEmoji;
  useEffect(() => {
    randoEmoji = emojis[Math.floor(Math.random() * emojis.length - 1)];
  }, []);
  return (
    <Flex
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      justifyContent="space-between"
      alignItems="center"
      p="4"
      gridArea="header"
    >
      <NextLink href="/">
        <Text
          fontSize="lg"
          cursor="pointer"
          fontWeight="bold"
          textColor="whiteAlpha.900"
        >
          Todo App {randoEmoji}
        </Text>
      </NextLink>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <LightIcon /> : <DarkIcon />}
      />
    </Flex>
  );
};

export default AppHeader;
