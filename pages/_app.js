import { ChakraProvider, extendTheme, Grid } from "@chakra-ui/react";
import AppHeader from "../components/AppHeader";
import { UserProvider } from "../context/UserContext";

import "../styles/global.css";

export const theme = extendTheme({
  fonts: {
    heading: "Josefin Sans",
    body: "Josefin Sans",
  },
  colors: {
    brand: {
      600: "rgba(95, 39, 205,1.0)",
    },
  },
  initialColorMode: "dark",
  useSystemColorMode: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <UserProvider>
        <Grid
          fontSize="xs"
          gridTemplate={`
          "header header header" auto
          ". main ." 1fr /
          1fr minmax(auto, 1024px) 1fr
          `}
          gap="4"
          rowGap="8"
          h="100vh"
        >
          <AppHeader />
          <Component {...pageProps} />
        </Grid>
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
