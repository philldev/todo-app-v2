import { Grid, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import NavContext from "../../context/NavContext";
import MotionBox from "../motion/MotionBox";

export default function AppLayout({ children }) {
  const { isActive, close } = useContext(NavContext);
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.700", "gray.100");
  return (
    <MotionBox onClick={close} pos="relative">
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
        rowGap="2"
        h="100vh"
      >
        {children}
      </Grid>
    </MotionBox>
  );
}
