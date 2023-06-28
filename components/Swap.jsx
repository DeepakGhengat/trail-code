import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';

// import ico1 from '../public/images/ico1.svg';
// import ico2 from '../public/images/ico2.svg';
// import ico3 from '../public/images/ico3.svg';
import line from '../public/images/line.svg';
// import swap from '../public/images/swap.svg';

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
        <div className="flex grid-cols-1 flex-col place-items-center gap-6 px-12 py-12 md:grid-cols-10 md:flex-row md:px-20 md:py-28">
          <div className="md:col-span-4 xl:col-span-5">
            <h4 className="text-primary-main text-24 leading-p275 font-primary font-medium uppercase">
              Strategic Fusion
            </h4>
            <p className="text-32 lg:text-42 leading-p130 mb-5 font-semibold">
              Optimal Efficiency, Advanced Tools, and Concentrated AMMs
            </p>
            <p className="text-20 leading-p160 opacity-70">
              DefiEdge strategically harnesses the potential of concentrated
              AMMs to optimize capital efficiency. Coupled with our signature
              Automated Liquidity Optimization (ALO) and exclusive advanced
              liquidity management features, we provide a dynamic edge in the
              ever-evolving DeFi landscape.
            </p>
          </div>
          {isClient && (
            <ReactPlayer
              autoPlay
              className="w-2/3 sm:w-1/2 md:col-span-6 xl:col-span-5"
              loop
              muted
              width="100%"
              height="100%"
              playing={true}
              url="/videos/strategic-fusion.mp4"
            >
              Your browser does not support the video tag.
            </ReactPlayer>
          )}
        </div>

        <div className="mt-[72px]">
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
          <p className="text-16px mx-auto mt-[20px] px-4 text-center text-gray-mid sm:mt-[25px] sm:w-[500px] md:px-0">
            Unlock the Power of DeFi: Explore Innovative, Seamless, and Secure
            Features Tailored for Your Success.
          </p>
          <div className="my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {defiedgeFeatureContent.map((content, index) => (
              <div
                className={`border-grey-1 rounded-20 bg-card-dark-gradiant overflow-hidden border ${
                  index === 1 ? 'p-3' : ''
                }`}
                key={`feature-${index}`}
              >
                <div className="bg-card-img ">
                  <Image
                    alt="Defiedge feature"
                    className={`!object-contain  ${
                      index === 1 ? 'scale-90' : ''
                    }`}
                    height={150}
                    src={content.url}
                    width={225}
                  ></Image>
                </div>
                <div className="p-6">
                  <h4 className="text-20 xl:text-24 leading-p120 mb-4  font-semibold">
                    {content.title}
                  </h4>
                  <p className="leading-p150 opacity-70">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
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
