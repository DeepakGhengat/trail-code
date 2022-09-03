// * Import React Libraries
import Image from "next/image";
import React from "react";

//* Animation Libraries
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "animate.css/animate.min.css";

//* Import Required Images
// import strategy from "../public/images/strategy.png";
import one from "../public/images/strategy/001.svg";
import two from "../public/images/strategy/002.svg";
import three from "../public/images/strategy/003.svg";
import four from "../public/images/strategy/004.svg";
import five from "../public/images/strategy/005.svg";
import six from "../public/images/strategy/006.svg";
import seven from "../public/images/strategy/007.svg";
import eight from "../public/images/strategy/008.svg";

const ecosystemArray = [
  {
    id: 1,
    name: "Optimism",
    logo: one,
    desc: "Rollup network",
  },
  {
    id: 2,
    name: "1 inch Protocol",
    logo: two,
    desc: "Decentralized exchange",
  },
  {
    id: 3,
    name: "Polygon",
    logo: three,
    desc: "Asset management",
  },
  {
    id: 4,
    name: "Arbitrum",
    logo: four,
    desc: "Asset management",
  },
  {
    id: 5,
    name: "Keyrock",
    logo: five,
    desc: "Asset management",
  },
  {
    id: 6,
    name: "Chainlink",
    logo: six,
    desc: "Asset management",
  },
  {
    id: 7,
    name: "Alchemy",
    logo: seven,
    desc: "Asset management",
  },
  {
    id: 8,
    name: "DeFi Labs",
    logo: eight,
    desc: "Asset management",
  },
];

function StrategyManagerCard() {
  return (
    <div>
      <div className="bg-opacity-30 bg-[#141541]  overflow-hidden ring-1 ring-[#3F4077]/30 bg-clip-padding backdrop-filter backdrop-blur-xl">
        <div className="flex flex-col items-center text-center">
          <span className="sm:text-[42px] sm:mt-0 pt-[80px] leading-[27px] sm:leading-[44px] text-[20px]  font-semibold ">
            DeFi Edge Ecosystem.
          </span>

          <div className="mt-[16px]">
            <span className="sm:text-[16px] text-textgray mt-[20px] text-[18px] ">
              Lorem, ipsum dolor sit amet consectetur elit. Ducimus totam
              suscipit eveniet <br /> Ducimus totam suscipit eveniet Ducimus
              totam
            </span>
          </div>
        </div>

        <div className=" mt-[40px] px-[84px] mb-[80px] sm:h-auto overflow-hidden sm:overflow-visible  flex items-center	">
          <div className="grid grid-cols-4 w-full gap-[40px] gap-x-[50px] ">
            {ecosystemArray.map((data) => {
              return (
                <div key={data.id} className="flex space-x-[8px] items-center">
                  <div className="h-[40px] w-[40px]">
                    <Image type="image" alt="" src={data.logo} />
                  </div>

                  <div>
                    <div className="font-semibold">{data.name}</div>
                    <div className="font-normal text-textgray">{data.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategyManagerCard;
