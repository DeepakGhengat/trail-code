'use client';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

import { TestimonialSlider } from '../components/TestimonialSlider';

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
    <main>
      <div className="border-grey-1 flex grid-cols-12 place-items-center justify-between gap-4 border px-12 md:px-20">
        <div className="col-span-8 w-full py-12 text-center  md:py-28 md:text-left">
          <div className="w-10/12">
            <h3 className="text-36 md:text-42 lg:text-52 leading-p130 font-primary font-semibold">
              Unveiling the Edge in DeFi
            </h3>
            <p className="text-18 md:text-20 leading-p160 my-3 opacity-70 opacity-70">
              At DefiEdge, we believe in empowering our users with the finest
              tools for navigating the decentralized finance landscape. Our
              standout features provide robust solutions, catering to varied
              liquidity management needs in a single platform.
            </p>
          </div>
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
      <div className="px-12 py-12 md:px-20 md:py-28">
        <div className="md:4/5 m-auto text-center lg:w-2/3 lg:w-1/2">
          <h4 className="text-32 md:36  lg:text-42 leading-p130 font-primary mb-5 font-semibold">
            DefiEdge Features
          </h4>
          <p className="text-18 md:text-20 leading-p160 opacity-70">
            Lorem ipsum dolor sit amet consectetur. Et lorem quam viverra
            turpis. Sed ipsum nulla orci sollicitudin magna enim sodales.{' '}
          </p>
        </div>

        <div className="m-auto mt-12 grid  w-2/3 pt-4 sm:w-full sm:w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card, index) => (
            <FeatureCard card={card} index={index} key={index} />
          ))}
        </div>
      </div>
      <div className="border-grey-1 border px-12 py-12 md:px-20 md:py-28">
        <h4 className="text-primary-main text-22 md:text-24 font-primary text-center font-medium uppercase sm:text-left">
          DeFiEdge Victories
        </h4>
        <div className="mb-6 flex flex-col items-center justify-between gap-y-2 sm:flex-row">
          <p className="text-32 md:text-36 lg:text-42 font-primary font-semibold">
            Your Success is Our Story
          </p>
          <button className="bg-primary-main shrink-0 rounded-full py-2 px-4 text-white">
            Start your Journey
          </button>
        </div>
        <p className="text-20 mb-12 opacity-70">
          We at DeFiEdge believe that the real proof of our platform&apos;s
          effectiveness lies in the tangible success of our users and partners.
          &apos;DeFiEdge Victories&apos; is our tribute to these compelling
          stories, highlighting how our services have transformed liquidity
          management for our community
        </p>
        <div className="relative m-auto w-full gap-5 lg:w-4/5">
          <TestimonialSlider />
          <Image
            alt="quote"
            className="absolute right-0 top-0 z-10  translate-x-6  -translate-y-1/2  md:translate-x-3/4"
            height={100}
            src="/svg/quote.svg"
            width={100}
          ></Image>
        </div>
      </div>
      <div className="hidden px-12 py-12 md:px-20 md:py-28">
        <h4 className="text-primary-main text-22 md:text-24 font-primary text-center font-medium uppercase sm:text-left">
          Partnership Opportunities
        </h4>
        <div className="mb-6 flex flex-col items-center justify-between gap-y-2 sm:flex-row">
          <p className="text-32 md:text-36 lg:text-42 font-primary font-semibold">
            Join the DefiEdge Partner Club
          </p>
          <button className="bg-primary-main shrink-0 rounded-full py-2 px-4 text-white">
            Partner with us
          </button>
        </div>
        <p className="text-20 mb-12 opacity-70">
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
    <div className="card-dark-gradiant p-6 ">
      <Image
        alt={`image ${index + 1}`}
        className="mb-6 sm:mb-8"
        height={60}
        quality={100}
        src={`/svg/stand-out/${1}.svg`}
        width={60}
      />
      <div className="text-24 font-primary leading-p120 mb-3 font-semibold">
        {card.title}
      </div>
      <div className="leading-p140 opacity-70">{card.description}</div>
    </div>
  );
};

const PartnerClubCard = ({ card, index }) => {
  return (
    <div className="border-grey-1 bg-card-dark-gradiant rounded-20 border p-8">
      <Image
        alt="Chat logo"
        className="mb-6 sm:mb-10"
        height={60}
        quality={100}
        src={`/images/stand-out/chat-${index + 1}.png`}
        width={60}
      ></Image>
      <div className="text-22 md:text-24 font-primary mb-4 font-semibold">
        {card.title}
      </div>
      <div className="opacity-70">{card.description}</div>
      <button className="border-grey-1 mt-14 w-full rounded-full border bg-transparent py-2">
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
