'use client';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import { Fade } from 'react-reveal';

import { TestimonialSlider } from '../components/TestimonialSlider';
import line from '../public/images/line.svg';

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
    {
      title: 'Public/Private Strategies',
      description:
        'DefiEdge empowers you to control your strategies - keep them private or share with the community, the choice is yours.',
    },
    {
      title: 'Collaborative Management',
      description:
        "Maximize your earnings across diverse DEXs with DefiEdge's support for multiple Concentrated AMMs including Uniswap V3, PancakeSwap, ApeSwap, and more.",
    },
    {
      title: 'Non-Custodial & Permissionless',
      description:
        'DefiEdge upholds a non-custodial, permissionless model, ensuring your complete control over your assets at all times.',
    },
    {
      title: 'Extensive Ecosystem and Partnerships',
      description:
        "Join DefiEdge's thriving partner network and enjoy exclusive benefits, from marketing to PR, fostering collaboration and growth.",
    },
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

  return (
    <main className="container">
      <div className="flex justify-between gap-4 ">
        <div className="mt-12  text-center  sm:mt-[120px] md:text-left">
          <div className="">
            <Fade delay={10} duration={2000}>
              <h3 className=" bg-gradient-to-br from-[#6EA5FB] via-[#60B9FA] to-[#3E51FF]  bg-clip-text text-[30px] font-semibold leading-[40px]   text-transparent sm:text-[36px] sm:leading-[55px] lg:text-[44px]">
                Unveiling the Edge in DeFi
              </h3>
            </Fade>
            <Fade delay={30} duration={3000}>
              <p className="text-16px mt-[12px] font-medium leading-[28px] text-gray-400 md:w-[410px] ">
                At DefiEdge, we believe in empowering our users with the finest
                tools for navigating the decentralized finance landscape. Our
                standout features provide robust solutions, catering to varied
                liquidity management needs in a single platform.
              </p>
            </Fade>
          </div>
        </div>
        <Image
          alt="Hero image"
          className="col-span-3 !hidden w-0  basis-1/3 bg-cover md:!block  md:w-auto lg:basis-auto"
          height={450}
          quality={100}
          src="/images/hero-standout-gradient.webp"
          width={300}
        ></Image>
      </div>
      <div className="my-[40px] sm:my-[70px]">
        <Image type="image" className="h-[31px] w-[111px]" alt="" src={line} />
      </div>
      <div className="">
        <div className="md:4/5  m-auto mb-12 text-center lg:w-2/3 lg:w-1/2">
          <h4 className="text-center text-[26px] font-semibold leading-[50px] text-[#FEFEFE] sm:text-[36px] lg:text-[44px]">
            DefiEdge Features
          </h4>
          <p className="text-16px mx-auto mt-[20px] px-4 text-center text-gray-mid sm:mt-[25px] sm:w-[500px] md:px-0">
            Unlock the Power of DeFi: Explore Innovative, Seamless, and Secure
            Features Tailored for Your Success.
          </p>
        </div>

        <div className="m-auto  grid max-w-xs	gap-4    sm:max-w-none sm:grid-cols-2 md:gap-8 lg:w-full lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
          {cards.map((card, index) => (
            <FeatureCard card={card} index={index} key={index} />
          ))}
        </div>
      </div>
      <div className="my-[40px] sm:my-[70px]">
        <Image type="image" className="h-[31px] w-[111px]" alt="" src={line} />
      </div>
      <div className="">
        <h4
          className="bg-gradient-to-br from-[#6EA5FB] via-[#60B9FA] to-[#3E51FF]  bg-clip-text    text-center text-[20px] font-semibold  text-transparent sm:mt-[28px]
        sm:text-left  sm:text-[24px] sm:leading-[55px]
        "
        >
          DeFiEdge Victories
        </h4>
        <div className="mb-6 flex flex-col items-center justify-between gap-y-2 text-center sm:flex-row sm:text-left">
          <p className="text-[26px] font-semibold leading-[50px] text-[#FEFEFE]  sm:text-[36px]  lg:text-[44px]">
            Your Success is Our Story
          </p>
          <button className="rounded-md bg-[#4452FE] py-2 px-10 text-gray-300 hover:bg-[#3F1DF0]">
            Start your Journey
          </button>
        </div>
        <p className="text-16px  mt-[20px] mb-10  px-4 text-center text-gray-mid  sm:mt-[25px] sm:text-left md:px-0">
          We at DeFiEdge believe that the real proof of our platform&apos;s
          effectiveness lies in the tangible success of our users and partners.
          &apos;DeFiEdge Victories&apos; is our tribute to these compelling
          stories, highlighting how our services have transformed liquidity
          management for our community
        </p>
        <div className="relative m-auto w-full max-w-xs gap-5 sm:max-w-none lg:w-4/5	">
          <TestimonialSlider />
        </div>
      </div>
      <div className="hidden px-12 py-12 md:px-20 md:py-28">
        <h4 className="text-primary-main text-22 text-center font-primary font-medium uppercase sm:text-left md:text-24">
          Partnership Opportunities
        </h4>
        <div className="mb-6 flex flex-col items-center justify-between gap-y-2 sm:flex-row">
          <p className="font-primary text-32 font-semibold md:text-36 lg:text-42">
            Join the DefiEdge Partner Club
          </p>
          <button className="bg-primary-main shrink-0 rounded-full py-2 px-4 text-white">
            Partner with us
          </button>
        </div>
        <p className="mb-12 text-20 opacity-70">
          At DefiEdge, we&apos;re not just about building tools, we&apos;re
          about building relationships. We invite LPs, protocols, and analytics
          platforms to join us in pushing the boundaries of DeFi. Whether
          you&apos;re an LP looking to optimize returns with ALO, a protocol
          seeking comprehensive treasury management, or an analytics platform
          aiming to showcase DefiEdge stats, we&apos;re here to form mutually
          beneficial partnerships.
        </p>
        <div className="m-auto grid w-2/3 grid-cols-1 gap-6 sm:w-full  sm:grid-cols-2  lg:grid-cols-3">
          {partnersCard.map((card, index) => (
            <PartnerClubCard card={card} index={index} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

const FeatureCard = ({ card, index }) => {
  return (
    <div className="group relative rounded-2xl">
      <div className="card-dark-gradiant group p-6">
        <div className="absolute inset-0 rounded-xl border bg-gradient-to-tl from-[#58C0FB] to-transparent opacity-16 duration-300 hover:border-gray-200 group-hover:opacity-30 "></div>
        <img
          alt={`image ${index + 1}`}
          className="mb-6 sm:mb-8"
          height={60}
          src={`/images/stand-out/${index + 1}.png`}
          width={60}
        />
        <div className="mt-[20px] text-[20px] font-semibold sm:mt-[28px] sm:text-[24px]">
          {card.title}
        </div>
        <div className="mt-[12px]  flex-1 text-[16px] text-gray-mid">
          {card.description}
        </div>
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
        height={60}
        quality={100}
        src={`/images/stand-out/chat-${index + 1}.png`}
        width={60}
      ></Image>
      <div className="text-22 mb-4 font-primary font-semibold md:text-24">
        {card.title}
      </div>
      <div className="opacity-70">{card.description}</div>
      <button className="mt-14 w-full rounded-full border border-grey-1 bg-transparent py-2">
        Contact Support
      </button>
    </div>
  );
};
FeatureCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
PartnerClubCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
