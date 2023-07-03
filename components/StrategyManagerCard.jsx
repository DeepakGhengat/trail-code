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
import SecuringIcon from '../public/images/strategy/securing-fav.png';
import solv from '../public/images/strategy/solv.svg';
import watchpug from '../public/images/strategy/watchpug.jpeg';
import wintermute from '../public/images/strategy/wintermute.svg';
import yuriy from '../public/images/strategy/yuriy.jpeg';
import ziliqa from '../public/images/strategy/ziliqa.svg';
import { TestimonialSlider } from './TestimonialSlider';

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
  {
    id: 1,
    name: 'Securing',
    logo: SecuringIcon,
    desc: 'Auditing Firm',
    href: 'https://securing.pl',
  },
  {
    id: 6,
    name: 'Lucash Dev',
    logo: lucash,
    desc: 'MakerDAO security researcher',
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
    name: '1inch Protocol',
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
    <div id="ecosystem">
      <div className="mb-12 overflow-hidden rounded-xl bg-[#141541] bg-opacity-30 bg-clip-padding ring-1 ring-[#3F4077]/30 backdrop-blur-xl backdrop-filter sm:mb-[120px]">
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

        <div className="mt-[40px] mb-[80px] flex flex-col items-center overflow-hidden sm:h-auto sm:overflow-visible sm:px-8 md:px-10 lg:px-[84px]	">
          <div className="grid-4-auto mt-[40px] w-1/2 sm:w-full">
            {ecosystemArray.map((data, idx) => {
              return (
                <div
                  key={data.name || `blank-${idx}`}
                  className="flex items-center space-x-[8px] empty:hidden md:empty:flex"
                >
                  {data.logo && (
                    <>
                      <div className="grid__item mr-2 flex shrink-0 items-center">
                        <Image
                          className=" rounded-full"
                          type="image"
                          height={50}
                          width={50}
                          alt=""
                          src={data.logo}
                        />
                      </div>
                      <div className="">
                        <div className="whitespace-normal text-lg font-semibold tracking-wide">
                          {data.name}
                        </div>
                        <div className="whitespace-normal text-sm text-gray-400">
                          {data.desc}
                        </div>
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

          <div className="grid-4-auto mt-[40px] w-1/2 sm:w-full">
            {investorsArray.map((data, idx) => {
              return (
                <div
                  key={data.name || `blank-${idx}`}
                  className="grid__item flex items-center space-x-[8px]  empty:hidden md:empty:flex"
                >
                  {!!data.logo && (
                    <>
                      <div className=" mr-2 flex shrink-0 items-center">
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
                        <div className="whitespace-normal text-lg font-semibold tracking-wide">
                          {data.name}
                        </div>
                        <div className=" whitespace-normal text-sm text-gray-400">
                          {data.desc}
                        </div>
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

          <div className="grid-4-auto mt-[40px] w-1/2 sm:w-full">
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
                        <div className="whitespace-normal text-lg font-semibold tracking-wide">
                          {data.name}
                        </div>
                        <div className="truncate whitespace-normal text-sm text-gray-400">
                          {data.desc}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );

              return data.href ? (
                <a href={data.href} target="__blank" className="grid__item">
                  {div}
                </a>
              ) : (
                <React.Fragment>
                  {React.cloneElement(div, {
                    className: `${div.props.className} grid__item`,
                  })}
                </React.Fragment>
              );
            })}
          </div>
          <div className="mt-[60px] mb-2 h-[1px] w-full bg-white opacity-10"></div>

          <div className="relative m-auto mt-[60px] w-full gap-5 ">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategyManagerCard;
