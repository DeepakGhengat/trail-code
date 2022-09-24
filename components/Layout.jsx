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

  const pathbool = path === "/";
  // console.log(pathbool);

  return (
    <div className="">
      <Header />
      {pathbool ? (
        <>
          <Hero />
          <HeroBar />
        </>
      ) : (
        ""
      )}

      <div className="container mx-auto max-w-[335px]  sm:max-w-[1200px]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
