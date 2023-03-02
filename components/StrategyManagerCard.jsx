import 'animate.css/animate.min.css';

import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import one from '../public/images/strategy/001.svg';
import two from '../public/images/strategy/002.svg';
import three from '../public/images/strategy/003.svg';
import four from '../public/images/strategy/004.svg';
import five from '../public/images/strategy/005.svg';
import six from '../public/images/strategy/006.svg';
import abdk from '../public/images/strategy/abdk.svg';
import amrit from '../public/images/strategy/amrit.svg';
import damian from '../public/images/strategy/damian.png';
import gsr from '../public/images/strategy/gsr.svg';
import juan from '../public/images/strategy/juan.jpeg';
import kevin from '../public/images/strategy/kevin.svg';
import keyrock from '../public/images/strategy/keyrock.svg';
import lucash from '../public/images/strategy/lucash.png';
import meme from '../public/images/strategy/meme.svg';
import mudit from '../public/images/strategy/mudit.png';
import multifarm from '../public/images/strategy/multifarm.svg';
import riley from '../public/images/strategy/riley.png';
import sancap from '../public/images/strategy/sancap.svg';
import solv from '../public/images/strategy/solv.svg';
import watchpug from '../public/images/strategy/watchpug.jpeg';
import wintermute from '../public/images/strategy/wintermute.svg';
import yuriy from '../public/images/strategy/yuriy.jpeg';
import ziliqa from '../public/images/strategy/ziliqa.svg';

const investorsArray = [
  {
    id: 1,
    name: 'Wintermute',
    logo: wintermute,
    desc: 'Market Maker',
  },
  {
    id: 2,
    name: 'GSR',
    logo: gsr,
    desc: 'Market Maker',
  },
  {
    id: 8,
    name: 'Keyrock',
    logo: keyrock,
    desc: 'Market Maker',
  },
  {
    id: 6,
    name: 'MGNR',
    logo: meme,
    desc: 'Market Maker',
  },
  {
    id: 3,
    name: 'Sanctum Capital',
    logo: sancap,
    desc: 'Investment Firm',
  },
  {
    id: 4,
    name: 'Zilliqa Fund',
    logo: ziliqa,
    desc: 'Creator Fund',
  },
  {
    id: 5,
    name: 'Yuriy Myronovych',
    logo: yuriy,
    desc: 'Quant & HFT Architect',
  },
  {
    id: 7,
    name: 'Juan David',
    logo: juan,
    desc: 'Founder, Keyrock',
  },
  {},
  {
    id: 10,
    name: 'Kevin Beardsley',
    logo: kevin,
    desc: 'Head MM, Kraken',
  },
  {
    id: 11,
    name: 'Amrit Kumar',
    logo: amrit,
    desc: 'Founder, Zilliqa',
  },
];

const auditorsArray = [
  {
    id: 4,
    name: 'ABDK',
    logo: abdk,
    desc: 'Auditing Firm',
    href: 'https://www.abdk.consulting/',
  },
  {
    id: 5,
    name: 'WatchPug',
    logo: watchpug,
    desc: 'Auditing Firm',
    href: 'https://www.watchpug.org/',
  },
  {
    id: 2,
    name: 'Mudit Gupta',
    logo: mudit,
    desc: 'CISO, Polygon',
    href: ' https://twitter.com/Mudit__Gupta',
  },
  {
    id: 3,
    name: 'Riley Holterhus',
    logo: riley,
    desc: 'Ex-researcher, Paradigm',
    href: 'https://twitter.com/rileyholterhus',
  },
  {},
  {
    id: 1,
    name: 'Damian Rusinek',
    logo: damian,
    desc: 'Securing',
    href: 'https://twitter.com/drdr_zz',
  },
  {
    id: 6,
    name: 'Lucash Dev',
    logo: lucash,
    desc: 'MakerDAO Bounty Hunter',
  },
];

const ecosystemArray = [
  {
    id: 5,
    name: 'Ethereum',
    logo: five,
    desc: 'Blockchain',
  },
  {
    id: 3,
    name: 'Polygon',
    logo: three,
    desc: 'ETH L2 Blockchain',
  },
  {
    id: 4,
    name: 'Arbitrum',
    logo: four,
    desc: 'ETH L2 Blockchain',
  },
  {
    id: 1,
    name: 'Optimism',
    logo: one,
    desc: 'Rollup Network',
  },
  {
    id: 2,
    name: '1 inch Protocol',
    logo: two,
    desc: 'DEX Aggregator',
  },
  {
    id: 6,
    name: 'Chainlink',
    logo: six,
    desc: 'Decentralized Oracle ',
  },
  {
    id: 7,
    name: 'Solv Protocol',
    logo: solv,
    desc: 'NFT Trading',
  },
  {
    id: 8,
    name: 'Multifarm',
    logo: multifarm,
    desc: 'Data Platform',
  },
];

function StrategyManagerCard() {
  const router = useRouter();

  const ecosystemHandler = () => {
    router.push('/ecosystem');
  };

  return (
    <div>
      <div className="overflow-hidden rounded-xl bg-[#141541] bg-opacity-30 bg-clip-padding ring-1 ring-[#3F4077]/30 backdrop-blur-xl backdrop-filter">
        <div className="flex flex-col items-center text-center">
          <span className="pt-[80px] text-[20px] font-semibold leading-[27px] sm:mt-0 sm:text-[42px]  sm:leading-[44px] ">
            Ecosystem Partners
          </span>

          <div className="mt-[16px] px-4 md:px-0">
            <span className="mt-[20px] text-[18px] text-gray-400 sm:text-[16px] ">
              We are proud to be associated with our partners. Their
              collaboration is an <br /> indispensable factor for DefiEdge to
              create the next Defi Revolution
            </span>
          </div>
        </div>

        <div className="mt-[40px] mb-[80px] flex flex-col items-center overflow-hidden sm:h-auto sm:overflow-visible sm:px-[84px]	">
          <div className="mt-[40px] grid w-full grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:gap-[40px] sm:gap-x-[50px] md:px-0">
            {ecosystemArray.map((data, idx) => {
              return (
                <div
                  key={data.name || `blank-${idx}`}
                  className="flex items-center space-x-[8px] empty:hidden md:empty:flex"
                >
                  {data.logo && (
                    <>
                      <div className="mr-2 flex items-center">
                        <Image
                          className="rounded-full"
                          type="image"
                          height={50}
                          width={50}
                          alt=""
                          src={data.logo}
                        />
                      </div>
                      <div className="">
                        <div className="text-lg font-semibold tracking-wide">
                          {data.name}
                        </div>
                        <div className="text-sm text-gray-400">{data.desc}</div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <button
            onClick={ecosystemHandler}
            className="mx-auto mt-14 rounded-md bg-[#4452FE] py-2 px-10 text-gray-300 hover:bg-[#3F1DF0]"
          >
            See More
          </button>

          <div className="my-[60px] h-[1px] w-full bg-white opacity-10"></div>

          <div className="-mt-[6px] flex flex-col items-center text-center">
            <p className="text-[20px] font-semibold uppercase tracking-[5px]  sm:mt-0  sm:text-[24px] ">
              Our Backers
            </p>
          </div>

          <div className="mt-[40px] grid w-full grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:gap-[40px] sm:gap-x-[50px] md:px-0">
            {investorsArray.map((data, idx) => {
              return (
                <div
                  key={data.name || `blank-${idx}`}
                  className="flex items-center space-x-[8px] empty:hidden md:empty:flex"
                >
                  {!!data.logo && (
                    <>
                      <div className="mr-2 flex items-center">
                        <Image
                          className="rounded-full"
                          type="image"
                          height={50}
                          width={50}
                          alt=""
                          src={data.logo}
                        />
                      </div>
                      <div className="">
                        <div className="text-lg font-semibold tracking-wide">
                          {data.name}
                        </div>
                        <div className="text-sm text-gray-400">{data.desc}</div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="my-[60px] h-[1px] w-full bg-white opacity-10"></div>

          <div className="-mt-[6px] flex flex-col items-center text-center">
            <p className="text-[20px] font-semibold uppercase tracking-[5px]  sm:mt-0  sm:text-[24px] ">
              AUDITORS
            </p>
          </div>

          <div className="mt-[40px] grid w-full grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:gap-[40px] sm:gap-x-[50px] md:px-0">
            {auditorsArray.map((data, idx) => {
              const div = (
                <div
                  key={data.name || `blank-${idx}`}
                  className="flex items-center space-x-[8px] empty:hidden md:empty:flex"
                >
                  {!!data.logo && (
                    <>
                      <div className="mr-2 flex items-center">
                        <Image
                          className="rounded-full"
                          height={40}
                          width={40}
                          alt={data.desc}
                          src={data.logo}
                        />
                      </div>
                      <div className="">
                        <div className="text-lg font-semibold tracking-wide">
                          {data.name}
                        </div>
                        <div className="text-sm text-gray-400">{data.desc}</div>
                      </div>
                    </>
                  )}
                </div>
              );

              return data.href ? (
                <a href={data.href} target="__blank">
                  {div}
                </a>
              ) : (
                div
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategyManagerCard;
