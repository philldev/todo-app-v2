import { Box, Grid, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { CompleteIcon } from "../Icons";

function TodoInfo() {
  const { list } = useContext(TodoContext);
  const completeCount = list.filter((i) => i.isDone).length;
  if (!list.length) {
    return null;
  }
  return (
    <Grid gridGap="2" padding="3" borderRadius="sm" shadow="base">
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
      <Box pos="relative" h="4" bgColor="gray.500">
        <Box
          w={`${(completeCount / list.length) * 100}%`}
          pos="absolute"
          inset="0"
          backgroundColor="green.300"
        ></Box>
      </Box>
    </Grid>
  );
}

export default TodoInfo;
