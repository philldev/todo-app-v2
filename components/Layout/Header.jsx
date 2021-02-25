import { Flex, Heading, Link } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import NextLink from "next/link";

function Header() {
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
}

const sayDay = () => {
  const today = new Date();
  const curHr = today.getHours();

  if (curHr < 12) {
    return "Good morning";
  } else if (curHr < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

export default Header;
