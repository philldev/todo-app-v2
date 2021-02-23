import { Box, forwardRef } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useContext } from "react";
import NavContext from "../context/NavContext";
import { Nav } from "./AppHeader";

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return (
      <Box
        ref={ref}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        p="4"
        pos="fixed"
        inset="0"
        {...chakraProps}
      />
    );
  })
);

const variants = {
  closed: { opacity: 0, x: "-100%" },
  open: { opacity: 1, x: 0 },
};

export default function MobileNavbar() {
  const { isActive } = useContext(NavContext);
  return (
    <MotionBox
      initial={false}
      animate={isActive ? "open" : "closed"}
      transition={{ duration: 0.2 }}
      variants={variants}
    >
      <Nav type="mobile" />
    </MotionBox>
  );
}
