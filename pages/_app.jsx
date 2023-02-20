//* Import react
import "../styles/Home.module.css";
import "../styles/globals.css";

import Head from "next/head";
import Layout from "../components/Layout";
import React from "react";

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps: { children, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Defiedge - Asset Management Protocol Built on Uniswap V3</title>

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon.png"
        />

        <meta
          name="description"
          content="Defiedge - Asset Management Protocol Built on Uniswap V3"
        />
        <link
          rel="preload"
          href="../public/fonts/GeneralSans-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="../public/fonts/GeneralSans-Medium.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="../public/fonts/GeneralSans-Semibold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </Head>

      <Layout {...pageProps}>
        <Component {...{ children, ...pageProps }} />
      </Layout>
    </>
  );
}

export default App;
