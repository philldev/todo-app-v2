import { forwardRef, Grid } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useContext } from "react";
import NavContext from "../../context/NavContext";

const MotionGrid = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Grid ref={ref} {...chakraProps} />;
  })
);
const variants = {
  open: { scale: 0.8, x: "50%" },
  closed: { scale: 1, x: 0 },
};

export default function AppLayout({ children }) {
  const { isActive } = useContext(NavContext);
  return (
    <MotionGrid
      fontSize="base"
      zIndex="99"
      animate={isActive ? "open" : "closed"}
      variants={variants}
      pos="relative"
      initial={false}
      gridTemplate={`
          "header header header" auto
          ". main ." 1fr /
          1fr minmax(auto, 1024px) 1fr
          `}
      shadow="2xl"
      gap="4"
      rowGap="8"
      h="100vh"
      transition={{ duration: 0.3 }}
    >
      {children}
    </MotionGrid>
  );
}
