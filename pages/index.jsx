import React from 'react';

import Subscribe from '../components/Subscribe';
import Swap from '../components/Swap';
import Timeline from '../components/Timeline';
import { getStats, getStrategies } from '../services/trendingStrategies';

// eslint-disable-next-line react/prop-types
export default function Home() {
  return (
    <>
      <div className="container">
        <Swap />
      </div>
      <Timeline />
      <div className="container">
        <Subscribe />
      </div>
    </>
  );
}

export async function getStaticProps() {
  let [stats, strategies] = await Promise.all([getStats(), getStrategies()]);
  return {
    props: { stats, strategies },
    revalidate: 300,
  };
}
