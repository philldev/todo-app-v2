import { Flex, Heading, Link } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import NextLink from "next/link";
import sayDay from "./utils/sayDay";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <Flex align="center" justifyContent="space-between" p="2">
      <Heading>
        {sayDay()}!{" "}
        <NextLink href="/profile">
          <Link>{user.username}</Link>
        </NextLink>
      </Heading>
    </Flex>
  );
};
export default Header;
