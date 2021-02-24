import {
  Box,
  Divider,
  forwardRef,
  Grid,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import NextLink from "next/link";
import { useContext } from "react";
import NavContext from "../context/NavContext";
import { useRouter } from "next/router";

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return (
      <Box
        ref={ref}
        pos="fixed"
        insetY="0"
        left="0"
        width="50vw"
        zIndex="overlay"
        shadow="dark-lg"
        {...chakraProps}
      />
    );
  })
);

const variants = {
  closed: { x: "-100vw" },
  open: { x: 0 },
};

export default function MobileNavbar() {
  const { isActive } = useContext(NavContext);
  const bg = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("gray.700", "gray.100");
  const router = useRouter();

  return (
    <MotionBox
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
      <Grid as="nav">
        {[
          { label: "Todos", href: "/" },
          { label: "Profile", href: "/profile" },
        ].map((item, idx) => (
          <NextLink key={idx} href={item.href}>
            <Link
              bg={`${item.href === router.pathname ? "brand.600" : ""}`}
              p="2"
              _hover={{ bg: "gray.600", color: "gray.100" }}
              color={`${
                item.href === router.pathname ? "gray.100" : "inherit"
              }`}
            >
              {item.label}
            </Link>
          </NextLink>
        ))}
      </Grid>
    </MotionBox>
  );
}
