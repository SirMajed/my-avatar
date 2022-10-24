import type { NextPage } from "next";
import Head from "next/head";
import Home from "../src/views/Home";
import { createTheme, ThemeProvider } from "@mui/material";

const Index: NextPage = () => {
  const theme = createTheme({
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>My Avatar - Generate your avatar</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My Avatar" />
        <meta property="og:url" content="https://avatar.majedahmed.sa" />
        <meta property="og:image" content="https://i.imgur.com/crxQvdj.png" />
        <meta
          property="og:description"
          content="My Avatar is a website that allows you to generate Cool Avatars!"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default Index;
