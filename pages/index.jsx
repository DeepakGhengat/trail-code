import Head from "next/head";
import Swap from "../components/Swap";
import Participants from "../components/Participants";
import Strategies from "../components/Strategies";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <div className="container max-w-[1200px] mx-auto">
      <Head>
        <title>
          Defiedge - Permissionless Liquidity Management on Uniswap v3
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Swap />
        <Participants />
        <Strategies />
        <Subscribe />
      </main>

      <footer></footer>
    </div>
  );
}