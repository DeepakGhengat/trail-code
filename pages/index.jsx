import React from 'react';

import Community from '../components/Community';
import Participants from '../components/Participants';
import Strategies from '../components/Strategies';
import Subscribe from '../components/Subscribe';
import Swap from '../components/Swap';
import { getStats, getStrategies } from '../services/trendingStrategies';

// eslint-disable-next-line react/prop-types
export default function Home({ strategies }) {
  return (
    <>
      <div className="container mx-auto max-w-[1200px]">
        <Swap />
        <Participants />
        <Strategies strategies={strategies} />
        <Subscribe />
        <Community />
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
