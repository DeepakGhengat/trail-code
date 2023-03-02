import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';

import ico1 from '../public/images/ico1.svg';
import ico2 from '../public/images/ico2.svg';
import ico3 from '../public/images/ico3.svg';
import line from '../public/images/line.svg';
import swap from '../public/images/swap.svg';

function Swap() {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  });

  const playVideoOnscroll = scrollY > 600 && scrollY < 1500;

  return (
    <Fade big>
      <section id="features" className="flex flex-col items-center">
        <div className="relative w-full overflow-hidden">
          <div className="absolute right-0 mr-[320px] ">
            <div className="h-[300px] w-[300px]  bg-[#5749FF] opacity-42 blur-[300px]"></div>
          </div>

          <div className="absolute right-0 mt-[570px] -mr-[450px] ">
            <div className="h-[523px] w-[523px] bg-[#3B4FFF] opacity-42 blur-[354px]"></div>
          </div>
        </div>
        <Fade duration={2000}>
          <div className="mt-[70px] sm:mt-[140px] sm:h-[502px] sm:w-[792px]">
            {playVideoOnscroll ? (
              <Fade duration={500}>
                <ReactPlayer
                  url="/images/swap.mp4"
                  loop
                  muted
                  autoPlay
                  playsinline
                  playing={true}
                  width="100%"
                  height="100%"
                />
                {/* <video autoPlay muted loop>
                  <source src="/images/swap.mp4" type="video/mp4" />
                </video> */}
              </Fade>
            ) : (
              <Fade duration={500}>
                <Image type="image" alt="" src={swap} />
              </Fade>
            )}
          </div>
        </Fade>

        <Fade duration={2000}>
          <div className="mt-10 text-center">
            <span className="bg-gradient-to-br from-[#6EA5FB] via-[#60B9FA] to-[#3E51FF]  bg-clip-text text-[26px]  font-semibold  leading-[50px] text-transparent sm:text-[44px]">
              Swap and Rebalance
            </span>
            <p className="text-16px mt-[20px] text-center text-gray-mid sm:mt-[25px] sm:w-[500px]">
              Our Ul accurately calculates how you need to swap assets to deploy{' '}
              liquidity on selected ranges efficiently.
            </p>
          </div>
        </Fade>

        <div className="mt-72">
          <div className="pb-20">
            <Image
              type="image"
              className="h-[31px] w-[111px]"
              alt=""
              src={line}
            />
          </div>
          <p className="text-center text-[26px] font-semibold leading-[50px] text-[#FEFEFE]  sm:text-[44px]">
            DeFiEdge Features
          </p>
          <p className="text-16px mx-auto mt-[20px] text-center text-gray-mid sm:mt-[25px] sm:w-[500px]">
            Use the latest & most promising features of DefiEdge by creating and
            managing strategies, limiting orders and much more.
          </p>
          <div className="mt-10 grid gap-5 px-4 md:grid-cols-3 md:px-0">
            <Fade duration={500} bottom>
              <span className="min-h-[300px] rounded-xl border border-gray-500 bg-white bg-opacity-5 p-[15px] shadow-md backdrop-blur-xl backdrop-filter  duration-300 hover:border-gray-200 hover:bg-opacity-0 md:w-full md:p-[31px]">
                <Image src={ico1} height={40} width={40} />
                <p className="py-[28px] text-[20px] font-semibold text-gray-300 md:text-[24px]">
                  Create & Manage Strategy
                </p>
                <p className="text-[16px] font-thin text-gray-500">
                  Create Uniswap V3 strategies and seamlessly manage the assets.
                  Cutting edge features provided by DefiEdge help to ensure that
                  you stand out amongst the rest
                </p>
              </span>
            </Fade>
            <Fade duration={500} bottom>
              <span className="min-h-[300px] rounded-xl border border-gray-500 bg-white bg-opacity-5 p-[15px] shadow-md backdrop-blur-xl backdrop-filter  duration-300 hover:border-gray-200 hover:bg-opacity-0 md:w-full md:p-[31px]">
                <Image src={ico2} height={40} width={40} />
                <p className="py-[28px] text-[20px] font-semibold text-gray-300 md:text-[24px]">
                  Limit Orders
                </p>
                <p className="text-[16px] font-thin text-gray-500">
                  Create Uniswap V3 strategies and seamlessly manage the assets.
                  Limit Orders allow you to remove liquidity as soon as the
                  price hits your particular range. On triggering, a webhook
                  notification is sent via DefiEdge to help you track the latest
                  activities of your strategies
                </p>
              </span>
            </Fade>
            <Fade duration={500} bottom>
              <span className="min-h-[300px] rounded-xl border border-gray-500 bg-white bg-opacity-5 p-[15px] shadow-md backdrop-blur-xl backdrop-filter  duration-300 hover:border-gray-200 hover:bg-opacity-0 md:w-full md:p-[31px]">
                <Image src={ico3} height={40} width={40} />
                <p className="py-[28px] text-[20px] font-semibold text-gray-300 md:text-[24px]">
                  DE Shares
                </p>
                <p className="text-[16px] font-thin text-gray-500">
                  Strategy deposits are represented by ERC-20 tokens (DE
                  Shares). This allows easy tracking of your profits while
                  allowing composability via farming for LM rewards,
                  collateralization of tokens, and much more
                </p>
              </span>
            </Fade>
          </div>
        </div>
      </section>

      <div className="mt-[40px] sm:mt-[70px]">
        <Image type="image" className="h-[31px] w-[111px]" alt="" src={line} />
      </div>
    </Fade>
  );
}

export default Swap;
