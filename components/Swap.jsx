import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';

import line from '../public/images/line.svg';

const defiedgeFeatureContent = [
  {
    url: '/images/feature-mining-farm.png',
    title: 'Automated Liquidity Optimization (ALO)',
    description:
      'Maximize your returns with our flagship ALO feature. Automating the dynamic movement of liquidity positions based on market conditions, ALO enables efficient capital utilization, enhanced returns, and reduced impermanent loss.',
  },
  {
    url: '/images/multi-dex-support.png',
    title: 'Multi-DEX Support',
    description:
      'Broaden your horizons with support for multiple Concentrated AMMs including Uniswap V3, PancakeSwap, ApeSwap, and more. Benefit from a wider market presence and increase your earning potential across diverse DEXs.',
    className: 'bg-contain',
  },
  {
    url: '/images/feature-concentrated-dex.png',
    title: 'Multi-Range Support',
    description:
      'Harness the flexibility of multi-range strategies. With DefiEdge, you can set multiple price ranges within a single strategy, allowing for more granular control and optimized returns across diverse market conditions.',
  },
];

function Swap() {
  // const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // function logit() {
  //   // setScrollY(window.pageYOffset);
  // }

  // useEffect(() => {
  //   function watchScroll() {
  //     window.addEventListener('scroll', logit);
  //   }
  //   watchScroll();
  //   return () => {
  //     window.removeEventListener('scroll', logit);
  //   };
  // });

  // const playVideoOnscroll = scrollY > 600 && scrollY < 1500;

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
        <div className="mt-[40px] sm:mt-[70px]">
          <Image
            type="image"
            className="h-[31px] w-[111px]"
            alt=""
            src={line}
          />
        </div>
        <div className="mt-[50px] items-center gap-x-20 sm:mt-[70px] sm:flex">
          <div className="flex  w-1/2 flex-col flex-wrap items-center text-center sm:items-start sm:text-left">
            <Fade delay={10} duration={2000}>
              <h4 className="bg-gradient-to-br from-[#6EA5FB] via-[#60B9FA] to-[#3E51FF]   bg-clip-text    text-[20px] font-semibold text-transparent  sm:text-[24px]">
                Strategic Fusion
              </h4>

              <p className=" text-[26px] font-semibold leading-[50px]  text-[#FEFEFE] sm:text-[44px]">
                Optimal Efficiency, Advanced Tools, and Concentrated AMMs
              </p>
            </Fade>
            <Fade delay={30} duration={3000}>
              <p className="text-16px mt-[12px] font-medium leading-[28px] text-gray-400">
                DefiEdge strategically harnesses the potential of concentrated
                AMMs to optimize capital efficiency. Coupled with our signature
                Automated Liquidity Optimization (ALO) and exclusive advanced
                liquidity management features, we provide a dynamic edge in the
                ever-evolving DeFi landscape.
              </p>
            </Fade>
          </div>
          {isClient && (
            <ReactPlayer
              autoPlay
              className="w-2/3 sm:w-1/2 md:col-span-6 xl:col-span-5"
              loop
              muted
              width="50%"
              height="auto"
              playing={true}
              url="/videos/strategic-fusion.mp4"
            >
              Your browser does not support the video tag.
            </ReactPlayer>
          )}
        </div>

        <div className="">
          <div className="mt-[40px] sm:mt-[70px]">
            <Image
              type="image"
              className="h-[31px] w-[111px]"
              alt=""
              src={line}
            />
          </div>
          <div className="mt-[50px] sm:mt-[70px]">
            <p className="text-center text-[26px] font-semibold leading-[50px] text-[#FEFEFE]  sm:text-[44px]">
              DeFiEdge Features
            </p>
            <p className="text-16px mx-auto mt-[20px] px-4 text-center text-gray-mid sm:mt-[25px] sm:w-[500px] md:px-0">
              Unlock the Power of DeFi: Explore Innovative, Seamless, and Secure
              Features Tailored for Your Success.
            </p>
            <div className="my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {defiedgeFeatureContent.map((content, index) => (
                <Fade duration={2000} key={`feature-${index}`}>
                  <div className="group ">
                    <div
                      className={`relative flex h-full flex-col items-start overflow-hidden pt-2`}
                    >
                      <div className="absolute inset-0 rounded-xl border bg-gradient-to-tl from-[#58C0FB] to-transparent  opacity-16 duration-300 hover:border-gray-200 group-hover:opacity-30 "></div>
                      <div className="w-full  bg-card-img">
                        <img // todo will replace with next/image later
                          alt="Defiedge feature"
                          className={`aspect-video w-full !object-contain  ${
                            index === 1 ? 'scale-90' : ''
                          }`}
                          height={150}
                          src={content.url}
                          width={225}
                        ></img>
                      </div>
                      <div className="p-[20px] sm:p-[32px]">
                        <h4 className="text-[20px] font-semibold  sm:text-[24px]">
                          {content.title}
                        </h4>
                        <p className="leading-p150 mt-[12px]  flex-1 text-[16px] text-gray-mid opacity-70">
                          {content.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
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
