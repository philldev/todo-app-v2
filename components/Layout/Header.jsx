import { Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

function Header() {
  const { user } = useContext(UserContext);
  return (
    <Flex align="center" justifyContent="space-between">
      <Heading>Good Morning! {user}</Heading>
    </Flex>
  );
}

export default Header;
