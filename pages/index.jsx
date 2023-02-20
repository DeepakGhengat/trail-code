/* eslint-disable react/prop-types */

import { getStats, getStrategies } from "../services/trendingStrategies";

import Community from "../components/Community";
import Participants from "../components/Participants";
import React from "react";
import Strategies from "../components/Strategies";
import Subscribe from "../components/Subscribe";
import Swap from "../components/Swap";

export default function Home({ strategies }) {
  return (
    <>
      <div className="container max-w-[1200px] mx-auto">
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
