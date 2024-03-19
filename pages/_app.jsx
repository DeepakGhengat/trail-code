import '../styles/Home.module.css';
import '../styles/globals.css';

import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout';

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps: { children, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>
          DefiEdge - Asset Management Protocol Built on Concentrated DEXs
        </title>

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
          content="DefiEdge - Asset Management Protocol Built on Concentrated DEXs"
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
