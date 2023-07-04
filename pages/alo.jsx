import Image from 'next/image';
import React from 'react';

import CustomImage from '../components/common/CustomImage';
import ArbitrumLogo from '../components/svgs/ArbitrumLogo';
import BinanceLogo from '../components/svgs/BinanceLogo';
import EthereumLogo from '../components/svgs/EthereumLogo';
import OptimismLogo from '../components/svgs/OptimismLogo';
import PolygonLogo from '../components/svgs/PolygonLogo';

export default function StandOut() {
  const cards = [
    {
      title: 'In-Built Liquidity Mining Farms',
      description:
        "Unlock additional income with DefiEdge's integrated Liquidity Mining farms, augmenting your yield farming experience.",
    },
    {
      title: 'Automated Liquidity Optimization (ALO)',
      description:
        'Boost your gains with our ALO feature that dynamically adjusts liquidity positions for optimal capital use, increased returns, and minimized impermanent loss.',
    },
    {
      title: 'Launch your Concentrated DEX',
      description:
        "Launch and manage your own DEX seamlessly with DefiEdge's complete support and advanced liquidity management features.",
    },
    {
      title: 'Limit Orders',
      description:
        "Enhance trading control with DefiEdge's precision limit orders, specifying your desired buying or selling price for optimal transactions.",
    },
    {
      title: 'Multi-Range Support',
      description:
        "Leverage DefiEdge's multi-range strategies for granular control and optimized returns, adapting to various market conditions seamlessly.",
    },
    {
      title: 'Multi-DEX Support',
      description:
        'Expand your opportunities with our multi-DEX support, including Uniswap V3, PancakeSwap, ApeSwap, boosting your earnings potential across various decentralized exchanges.',
    },
    {
      title: 'User-friendly Interface',
      description:
        'Simplify DeFi navigation with our user-friendly interface, facilitating advanced liquidity management for novices and experts alike.',
    },
    {
      title: 'Full Spectrum Strategies',
      description:
        "DefiEdge empowers you to craft diverse strategies, whether it's setting multiple price ranges or creating multi-range strategies.",
    },
    // {
    //   title: "Public/Private Strategies",
    //   description:
    //     "DefiEdge empowers you to control your strategies - keep them private or share with the community, the choice is yours.",
    // },
    // {
    //   title: "Collaborative Management",
    //   description:
    //     "Maximize your earnings across diverse DEXs with DefiEdge's support for multiple Concentrated AMMs including Uniswap V3, PancakeSwap, ApeSwap, and more.",
    // },
    // {
    //   title: "Non-Custodial & Permissionless",
    //   description:
    //     "DefiEdge upholds a non-custodial, permissionless model, ensuring your complete control over your assets at all times.",
    // },
    // {
    //   title: "Extensive Ecosystem and Partnerships",
    //   description:
    //     "Join DefiEdge's thriving partner network and enjoy exclusive benefits, from marketing to PR, fostering collaboration and growth.",
    // },
  ];

  const partnersCard = [
    {
      title: 'For Liquidity Providers',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pellentesque ut diam quis aliquam egestas.',
    },
    {
      title: 'For Liquidity Providers',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pellentesque ut diam quis aliquam egestas.',
    },
    {
      title: 'For Liquidity Providers',
      description:
        'Lorem ipsum dolor sit amet consectetur. Pellentesque ut diam quis aliquam egestas.',
    },
  ];

  const contents = [
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

  return (
    <div className="bg-[#0B0C0F]">
      <main className="mx-auto max-w-7xl">
        <div className="flex grid-cols-12 place-items-center justify-between gap-4 px-8">
          <div className="col-span-6 w-full py-12 text-center md:w-3/5 md:py-28 md:text-left">
            <h3 className="bg-gradient-to-r from-[#58C1FA]/80 via-white to-[#755BFE]/80 bg-clip-text font-primary text-36 font-semibold leading-p130 text-transparent md:text-42 lg:text-52">
              Automated Liquidity Optimization
            </h3>
            <p className="my-6 font-medium leading-p160 opacity-70">
              Maximize your returns with our flagship ALO feature. Automating
              the dynamic movement of liquidity positions based on market
              conditions, conditions, ALO enables efficient capital utilization,
              enhanced returns, and reduced impermanent loss.
            </p>
          </div>
          <Image
            alt="Hero image"
            className="col-span-3 hidden basis-1/3 bg-cover md:block lg:basis-auto"
            height={450}
            quality={100}
            src="/images/hero-standout-gradient.webp"
            width={300}
          ></Image>
        </div>
        <section className="py-8 px-12 md:py-16 md:px-20">
          <h4 className="block text-center opacity-70">Available on</h4>
          <div className="mt-8 flex flex-wrap  items-center justify-around gap-x-4 gap-y-5">
            <ArbitrumLogo />
            <BinanceLogo />
            <EthereumLogo />
            <OptimismLogo />
            <PolygonLogo />
          </div>
        </section>
        <div className="px-12 py-12 md:px-20 md:py-28">
          <div className="md:4/5 m-auto text-center lg:w-2/3">
            <h4 className="md:36 mb-5 font-primary text-32 font-semibold leading-p130 lg:text-42">
              DefiEdge Features
            </h4>
            <p className="leading-p160 opacity-70">
              Lorem ipsum dolor sit amet consectetur. Et lorem quam viverra
              turpis. Sed ipsum nulla orci sollicitudin magna enim sodales.{' '}
            </p>
          </div>
          <div className="my-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contents.map((content, index) => (
              <div
                className={`overflow-hidden rounded-20 border border-grey-1/25 bg-card-dark-gradiant`}
                key={`feature-${index}`}
              >
                <div className="flex justify-center overflow-hidden bg-card-img">
                  <CustomImage
                    alt="Defiedge feature"
                    className={`!object-contain ${
                      index === 0 ? 'scale-150' : 'scale-90'
                    }`}
                    height={200}
                    src={content.url}
                    width={225}
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-[20px] font-semibold leading-p120">
                    {content.title}
                  </h4>
                  <p className="text-[14px] leading-p150 opacity-50">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="m-auto mt-12 grid w-2/3 pt-4 sm:w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cards.map((card, index) => (
              <FeatureCard card={card} index={index} key={index} />
            ))}
          </div>
        </div>

        <div className="px-12 py-8 md:px-20">
          <div className="my-2 inline-block rounded-full bg-[#2D5CF3]/20 px-4 py-[6px] text-[14px] font-medium uppercase text-[#83A0FF]">
            Partnership Opportunities
          </div>
          <div className="mb-6 flex flex-col items-center justify-between gap-y-2 sm:flex-row">
            <p className="text-[32px] font-[700]">
              Join the DefiEdge Partner Club
            </p>
            <button className="shrink-0 rounded-full bg-primary-main py-2 px-4 text-white">
              Partner with us
            </button>
          </div>
          <p className="mb-12 text-[14px] opacity-70">
            At DefiEdge, we&apos;re not just about building tools, we&apos;re
            about building relationships. We invite LPs, protocols, and
            analytics platforms to join us in pushing the boundaries of DeFi.
            Whether you&apos;re an LP looking to optimize returns with ALO, a
            protocol seeking comprehensive treasury management, or an analytics
            platform aiming to showcase DefiEdge stats, we&apos;re here to form
            mutually beneficial partnerships.
          </p>
          <div className="m-auto grid w-2/3 grid-cols-1 gap-6 sm:w-full  sm:grid-cols-2  lg:grid-cols-3">
            {partnersCard.map((card, index) => (
              <PartnerClubCard card={card} index={index} key={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const FeatureCard = ({ card, index }) => {
  return (
    <div className="card-dark-gradiant overflow-hidden p-6">
      <Image
        alt={`image ${index + 1}`}
        className="mb-6 sm:mb-8"
        height={48}
        src={`/images/stand-out/${index + 1}.png`}
        width={48}
      />
      <div className="mb-3 text-[20px] font-semibold leading-p120">
        {card.title}
      </div>
      <div className="text-[14px] leading-p140 opacity-50">
        {card.description}
      </div>
    </div>
  );
};

const PartnerClubCard = ({ card, index }) => {
  return (
    <div className="rounded-20 border border-grey-1 bg-card-dark-gradiant p-8">
      <Image
        alt="Chat logo"
        className="mb-6 sm:mb-10"
        height={48}
        quality={100}
        src={`/images/stand-out/chat-${index + 1}.png`}
        width={48}
      ></Image>
      <div className="mb-3 text-[20px] font-semibold leading-p120">
        {card.title}
      </div>
      <div className="text-[14px] leading-p140 opacity-50">
        {card.description}
      </div>
      <button className="mt-14 w-full rounded-full border border-grey-1 bg-transparent py-2">
        Contact Support
      </button>
    </div>
  );
};
