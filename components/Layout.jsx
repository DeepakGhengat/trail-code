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
  const isAlo = path === '/alo';

  return (
    <div
      style={{ background: isAlo ? 'black' : undefined }}
      className="transition-colors duration-200"
    >
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
    </div>
  );
};

export default Layout;
