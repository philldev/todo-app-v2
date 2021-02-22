import { Grid } from "@chakra-ui/react";
function AppLayout({ children }) {
  return (
    <Grid
      p="4"
      gridTemplateRows="auto auto minmax(min-content, 1fr) auto"
      gap="4"
      alignItems="stretch"
      h="100%"
      gridArea="main"
    >
      {children}
    </Grid>
  );
}

export default AppLayout;
