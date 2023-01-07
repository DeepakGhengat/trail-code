//* Import Components
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import HeroBar from "./HeroBar";
import Footer from "./Footer";
import { useRouter } from "next/router";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const router = useRouter();

  const path = router.pathname;

  const isRoot = path === "/";

  return (
    <>
      <Header />
      {isRoot && (
        <>
          <Hero />
          <HeroBar />
          {/* <HeroBar2 /> */}
        </>
      )}

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
