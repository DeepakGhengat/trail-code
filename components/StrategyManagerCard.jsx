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
import multifarm from "../public/images/strategy/multifarm.svg";
import solv from "../public/images/strategy/solv.svg";

import sancap from "../public/images/strategy/sancap.svg";
import meme from "../public/images/strategy/meme.svg";
import juan from "../public/images/strategy/juan.jpeg";

import wintermute from "../public/images/strategy/wintermute.svg";
import gsr from "../public/images/strategy/gsr.svg";
import ziliqa from "../public/images/strategy/ziliqa.svg";

import keyrock from "../public/images/strategy/keyrock.svg";
import yuriy from "../public/images/strategy/yuriy.jpeg";

const investorsArray = [
  {
    id: 1,
    name: "Wintermute",
    logo: wintermute,
    desc: "Market Maker",
  },
  {
    id: 2,
    name: "GSR",
    logo: gsr,
    desc: "Market Maker",
  },
  {
    id: 3,
    name: "Sanctum Capital",
    logo: sancap,
    desc: "Investment Firm",
  },

  {
    id: 4,
    name: "Ziliqa Fund",
    logo: ziliqa,
    desc: "Creator Fund",
  },
  {
    id: 5,
    name: "Yuriy Myronovych",
    logo: yuriy,
    desc: "Sr Software Architect",
  },
  {
    id: 6,
    name: "Memetic Capital LP",
    logo: meme,
    desc: "Market Maker",
  },
  {
    id: 7,
    name: "Juan David",
    logo: juan,
    desc: "Investor",
  },

  {
    id: 8,
    name: "Keyrock",
    logo: keyrock,
    desc: "Financial Institution",
  },
];

const ecosystemArray = [
  {
    id: 5,
    name: "Ethereum",
    logo: five,
    desc: "Blockchain",
  },
  {
    id: 3,
    name: "Polygon",
    logo: three,
    desc: "ETH L2 Blockchain",
  },
  {
    id: 4,
    name: "Arbitrum",
    logo: four,
    desc: "ETH L2 Blockchain",
  },
  {
    id: 1,
    name: "Optimism",
    logo: one,
    desc: "Rollup Network",
  },
  {
    id: 2,
    name: "1 inch Protocol",
    logo: two,
    desc: "DEX Aggregator",
  },

  {
    id: 6,
    name: "Chainlink",
    logo: six,
    desc: "Decentralized Oracle ",
  },
  {
    id: 7,
    name: "Solv Protocol",
    logo: solv,
    desc: "NFT Trading",
  },
  {
    id: 8,
    name: "Multifarm",
    logo: multifarm,
    desc: "Data Platform",
  },
];

function StrategyManagerCard() {
  return (
    <div>
      <div className="bg-opacity-30 bg-[#141541]  overflow-hidden ring-1 ring-[#3F4077]/30 bg-clip-padding backdrop-filter backdrop-blur-xl">
        <div className="flex flex-col items-center text-center">
          <span className="sm:text-[42px] sm:mt-0 pt-[80px] leading-[27px] sm:leading-[44px] text-[20px]  font-semibold ">
            Ecosystem Partners
          </span>

          <div className="mt-[16px]">
            <span className="sm:text-[16px] text-textgray mt-[20px] text-[18px] ">
              Minimize risk & maximize returns with DefiEdge’s scalable solution
              for <br /> liquidity provision on Uniswap v3
            </span>
          </div>
        </div>

        <div className=" mt-[40px] sm:px-[84px] mb-[80px] sm:h-auto overflow-hidden sm:overflow-visible  flex flex-col items-center	">
          <div className="grid sm:grid-cols-4 grid-cols-2   w-full sm:gap-[40px] sm:gap-x-[50px] ">
            {ecosystemArray.map((data) => {
              return (
                <div
                  key={data.id}
                  className="flex space-x-[8px] items-center  "
                >
                  <div className="flex items-center">
                    <Image
                      type="image"
                      height={40}
                      width={40}
                      alt=""
                      src={data.logo}
                    />
                  </div>

                  <div className="">
                    <div className="font-semibold">{data.name}</div>
                    <div className="font-normal text-textgray">{data.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full h-[1px] bg-white opacity-10 my-[60px]"></div>

          <div className="flex flex-col items-center text-center -mt-[6px]">
            <p className="sm:text-[24px] uppercase sm:mt-0 tracking-[5px]  text-[20px]  font-semibold ">
              Our Backers
            </p>
          </div>

          <div className=" mt-[40px] sm:h-auto overflow-hidden sm:overflow-visible  flex items-center w-full">
            <div className="grid sm:grid-cols-4 grid-cols-2   w-full sm:gap-[40px] sm:gap-x-[50px] ">
              {investorsArray.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="flex space-x-[8px] items-center "
                  >
                    <div className="flex items-center ">
                      <Image
                        type="image"
                        height={40}
                        width={40}
                        alt=""
                        src={data.logo}
                      />
                    </div>

                    <div className="">
                      <div className="font-semibold">{data.name}</div>
                      <div className="font-normal text-textgray">
                        {data.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategyManagerCard;
