/* eslint-disable react/prop-types */
import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const cards = [
  {
    title: '',
    description:
      "DefiEdge Team's relentless innovation and unmatched responsiveness make them the go-to choice. We are grateful to partner with such a dedicated team that consistently delivers and pushes the boundaries of what's possible with us. It's a privilege to collaborate with such a responsive and forward-thinking team.",
    name: 'Arbidex',
    url: '/images/user-arbidex-core-team.png',
    position: 'Core Team',
  },
  {
    title: '',
    description:
      'DefiEdge offers a game-changing approach in the DeFi landscape by connecting liquidity providers with skilled strategy managers making UniswapV3 investments seamlessly efficient and much more effective.',
    name: 'Mojmir',
    url: '/images/user-zkbob.png',
    position: 'zkBob Team',
  },
];

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

export function ReviewSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class="${className}  !border-2 !border-grey-1-white !bg-white"></span>`; // Render white dots
    },
  };
  const breakpoints = {
    // When window width is <= 767px
    767: {
      slidesPerView: 1,
    },
    // When window width is > 767px
    768: {
      slidesPerView: 2,
    },
  };

  return (
    <Swiper
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={breakpoints}
      className="!pb-14"
      modules={[Pagination]}
      navigation
      pagination={pagination}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <PartnerClubCard card={card} index={index} key={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
