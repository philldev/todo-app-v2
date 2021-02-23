import { Box, forwardRef, Grid, useColorModeValue } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useContext } from "react";
import NavContext from "../../context/NavContext";

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);
const variants = {
  open: { scale: 0.8, x: "50%" },
  closed: { scale: 1, x: 0 },
};

export default function AppLayout({ children }) {
  const { isActive, close } = useContext(NavContext);
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.700", "gray.100");
  return (
    <MotionBox
      animate={isActive ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.3 }}
      initial={false}
      zIndex="99"
      onClick={close}
      pos="relative"
    >
      <Grid
        bg={bg}
        color={color}
        pointerEvents={`${isActive ? "none" : "auto"}`}
        fontSize="base"
        pos="relative"
        gridTemplate={`
          "header header header" auto
          ". main ." 1fr /
          1fr minmax(auto, 1024px) 1fr
          `}
        shadow="2xl"
        gap="4"
        rowGap="8"
        h="100vh"
      >
        {children}
      </Grid>
    </MotionBox>
  );
}
