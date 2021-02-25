import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
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
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover, user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
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
    </>
  );
}

export default MyApp;
