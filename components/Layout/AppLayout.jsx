import { Box, Grid } from "@chakra-ui/react";
function AppLayout({ children }) {
  return (
    <Box fontSize="sm">
      <Grid
        p="4"
        gridTemplateRows="auto auto minmax(min-content, 1fr) auto"
        gap="4"
        h="100vh"
        alignItems="stretch"
        maxW="container.lg"
        m="0 auto"
      >
        {children}
      </Grid>
    </Box>
  );
}

export default AppLayout;
