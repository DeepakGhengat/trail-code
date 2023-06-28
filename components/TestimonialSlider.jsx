// SwiperCore.use([Pagination]);
import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const cards = [
  {
    title: 'Incredible Experience',
    description:
      'Lorem ipsum dolor sit amet consectetur. Non molestie amet enim erat egestas fusce in scelerisque. Ut ut vitae in dui mi nisi. Enim risus nisl in volutpat. Sit lobortis adipiscing pharetra tortor turpis donec turpis pretium lorem. Consequat arcu magna id vestibulum mattis tortor lacus. Faucibus dignissim enim adipiscing iaculis amet quis dui elementum. Vel sed mollis amet sed ultrices egestas. Id consequat.',
    name: 'Jane Cooper',
    url: '/images/user-avatar.png',
    position: 'CEO, ABC Corporation',
  },
  {
    title: 'Incredible Experience',
    description:
      'Lorem ipsum dolor sit amet consectetur. Non molestie amet enim erat egestas fusce in scelerisque. Ut ut vitae in dui mi nisi. Enim risus nisl in volutpat. Sit lobortis adipiscing pharetra tortor turpis donec turpis pretium lorem. Consequat arcu magna id vestibulum mattis tortor lacus. Faucibus dignissim enim adipiscing iaculis amet quis dui elementum. Vel sed mollis amet sed ultrices egestas. Id consequat.',
    name: 'Jane Cooper',
    url: '/images/user-avatar.png',
    position: 'CEO, ABC Corporation',
  },
  {
    title: 'Incredible Experience',
    description:
      'Lorem ipsum dolor sit amet consectetur. Non molestie amet enim erat egestas fusce in scelerisque. Ut ut vitae in dui mi nisi. Enim risus nisl in volutpat. Sit lobortis adipiscing pharetra tortor turpis donec turpis pretium lorem. Consequat arcu magna id vestibulum mattis tortor lacus. Faucibus dignissim enim adipiscing iaculis amet quis dui elementum. Vel sed mollis amet sed ultrices egestas. Id consequat.',
    name: 'Jane Cooper',
    url: '/images/user-avatar.png',
    position: 'CEO, ABC Corporation',
  },
  {
    title: 'Incredible Experience',
    description:
      'Lorem ipsum dolor sit amet consectetur. Non molestie amet enim erat egestas fusce in scelerisque. Ut ut vitae in dui mi nisi. Enim risus nisl in volutpat. Sit lobortis adipiscing pharetra tortor turpis donec turpis pretium lorem. Consequat arcu magna id vestibulum mattis tortor lacus. Faucibus dignissim enim adipiscing iaculis amet quis dui elementum. Vel sed mollis amet sed ultrices egestas. Id consequat.',
    name: 'Jane Cooper',
    url: '/images/user-avatar.png',
    position: 'CEO, ABC Corporation',
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
      className="!pb-14"
      modules={[Pagination]}
      pagination={pagination}
      navigation
      scrollbar={{ draggable: true }}
      spaceBetween={50}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div
            className=" m-auto flex w-4/5 flex-col items-center gap-y-5 md:w-full"
            key={index}
          >
            <div className="bg-card-dark-gradiant border-grey-1 rounded-2xl border p-8">
              <h4 className="text-24 font-semibold">{card.title}</h4>
              <p className="text-14 opacity-70">{card.description}</p>
            </div>
            <div className="flex items-center gap-x-2 ">
              <Image
                alt="Avatar"
                className="h-16 w-16 rounded-full"
                height={100}
                quality={100}
                src={card.url}
                width={100}
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
