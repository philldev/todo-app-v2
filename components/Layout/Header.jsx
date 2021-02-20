import { Button, Flex, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { LightIcon, DarkIcon } from "../Icons";
function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex align="center" justifyContent="space-between">
      <Text>Good Morning! user</Text>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <LightIcon /> : <DarkIcon />}
      />
    </Flex>
  );
}

export default Header;
