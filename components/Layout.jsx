import { useRouter } from 'next/router';
import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import HeroBar from './HeroBar';

// eslint-disable-next-line react/prop-types
const Layout = ({ children, stats }) => {
  const router = useRouter();

  const path = router.pathname;
  const isRoot = path === '/';

  return (
    <>
      <Header />
      {isRoot && (
        <>
          <Hero />
          <HeroBar />
          <HeroBar stats={stats} />
        </>
      )}

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
