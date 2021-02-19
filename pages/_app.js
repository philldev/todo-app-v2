import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "../styles/reset.css";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Josefin Sans",
    body: "Josefin Sans",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
