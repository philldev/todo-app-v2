import { Box, forwardRef, Grid, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { CompleteIcon } from "../Icons";

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);

function TodoInfo() {
  const { list } = useContext(TodoContext);
  const completeCount = list.filter((i) => i.isDone).length;
  if (!list.length) {
    return null;
  }

  return (
    <Grid gridGap="2" padding="3" mb="4" shadow="base">
      <Text fontSize="md" fontWeight="bold">
        Progress
      </Text>
      <Text>
        Completed todos : {completeCount}/{list.length}{" "}
        {completeCount === list.length && (
          <Box display="inline-flex" alignItems="center" as="span">
            <CompleteIcon textColor="green.400" />
          </Box>
        )}
      </Text>
      <Box
        pos="relative"
        h="4"
        bgColor="gray.300"
        shadow="inner"
        borderRadius="base"
      >
        <MotionBox
          initial={{ width: 0 }}
          animate={{ width: `${(completeCount / list.length) * 100}%` }}
          transition={{ duration: 0.2 }}
          borderRadius="base"
          borderRightRadius={`${completeCount === list.length ? "base" : 0}`}
          pos="absolute"
          inset="0"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        />
      </Box>
    </Grid>
  );
}

export default TodoInfo;
