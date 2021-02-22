import { Box } from "@chakra-ui/react";

export default function SignupLayout({ children }) {
  return (
    <Box p="2" gridArea="main">
      {children}
    </Box>
  );
}
