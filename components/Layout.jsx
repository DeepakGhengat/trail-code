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
  const isEcosystem = path === '/ecosystem';

  return (
    <div
      style={{ background: isEcosystem ? 'black' : undefined }}
      className="transition-colors duration-200"
    >
      <Header />
      {isRoot && (
        <div>
          <Hero />
          <HeroBar />
          <HeroBar stats={stats} />
        </div>
      )}

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
