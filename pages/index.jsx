//* React Import
import React from "react";

//* Components Required
import Swap from "../components/Swap";
import Participants from "../components/Participants";
import Strategies from "../components/Strategies";
import Community from "../components/Community";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <>
      <div className="container max-w-[1200px] mx-auto">
        <Swap />
        <Participants />
        <Strategies />
        <Subscribe />
        <Community />
      </div>
    </>
  );
}
