// SwiperCore.use([Pagination]);
import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/future/image';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import LeftQuoteIcon from './LeftQuoteIcon';

const cards = [
  {
    description:
      "DefiEdge Team's relentless innovation and unmatched responsiveness make them the go-to choice. We are grateful to partner with such a dedicated team that consistently delivers and pushes the boundaries of what's possible with us. It's a privilege to collaborate with such a responsive and forward-thinking team.",
    name: 'Arbidex Core Team',
    url: '/images/user-arbidex-core-team.png',
  },
  {
    description:
      'DefiEdge offers a game-changing approach in the DeFi landscape by connecting liquidity providers with skilled strategy managers making UniswapV3 investments seamlessly efficient and much more effective.',
    name: 'Mojmir - zkBob Team',
    url: '/images/user-zkbob.png',
  },
];

export function TestimonialSlider() {
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
      modules={[Pagination]}
      pagination={pagination}
      navigation
      scrollbar={{ draggable: true }}
      spaceBetween={50}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index} className="w-4/5 overflow-y-auto">
          <div
            className="group relative m-auto flex flex-grow flex-col items-center justify-between gap-y-5 overflow-y-auto py-6 md:w-full"
            key={index}
          >
            <div className="relative h-64 rounded-2xl p-8 py-12">
              <div className="absolute inset-0 rounded-xl border bg-gradient-to-tl from-[#58C0FB] to-transparent opacity-16 duration-300 hover:border-gray-200 group-hover:opacity-30 "></div>
              <p className="text-16px px-4 text-gray-mid  md:px-0">
                {card.description}
              </p>
              <LeftQuoteIcon
                width="50px"
                height="50px"
                className="absolute top-0 left-0 translate-x-1/2 -translate-y-1/2 fill-default-blue"
              />
              <LeftQuoteIcon
                width="50px"
                height="50px"
                className="absolute right-0 bottom-0 -translate-x-1/2 translate-y-1/2 rotate-180 fill-default-blue"
              />
            </div>
            <div className="flex items-center gap-x-2 ">
              <Image
                alt="Avatar"
                className="h-14 w-14 rounded-full"
                height={56}
                quality={100}
                src={card.url}
                width={56}
              ></Image>
              <div className="">
                <p className="font-bold">{card.name}</p>
                <p>{card.position}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
