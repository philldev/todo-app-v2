import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AppHeader from "../components/AppHeader";
import AppLayout from "../components/Layout/AppLayout";
import MobileNavbar from "../components/MobileNavbar";
import { NavProvider } from "../context/NavContext";
import { UserProvider } from "../context/UserContext";
import "../styles/global.css";

export const theme = extendTheme({
  styles: {
    global: {
      "body, html": {
        height: "100vh",
        overflow: "hidden",
      },
    },
  },
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
        <NavProvider>
          <MobileNavbar />
          <AppLayout>
            <AppHeader />
            <Component {...pageProps} />
          </AppLayout>
        </NavProvider>
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
