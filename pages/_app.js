import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "../styles/reset.css";

import { extendTheme } from "@chakra-ui/react";

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
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
