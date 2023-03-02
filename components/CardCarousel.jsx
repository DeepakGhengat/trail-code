/* eslint-disable react/prop-types */
import 'swiper/css/pagination';
import 'swiper/css';

import Image from 'next/image';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import arrowcross from '../public/images/arrowcross.svg';
import arrowupper from '../public/images/arrowupper.svg';
import info from '../public/images/info.svg';
import one from '../public/images/one.svg';
import three from '../public/images/three.svg';
import two from '../public/images/two.svg';

function CardCarousel({ strategies }) {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="container mx-auto sm:hidden"
      spaceBetween={15}
      loop={true}
      centeredSlides={true}
      slidesPerView={1}
    >
      {strategies.map((s, idx) => {
        return (
          <SwiperSlide key={s.id + s.network}>
            <div className="px-4 py-[2px]">
              <div className="rounded-xl bg-[#141541] bg-opacity-30 bg-clip-padding p-[32px] ring-1 ring-[#3F4077]/30 backdrop-blur-xl backdrop-filter ">
                <div className="flex justify-between">
                  <div className="flex">
                    <span className="z-10">
                      <Image
                        type="image"
                        className=""
                        width={33}
                        height={33}
                        alt="token1"
                        src={s.token0Url}
                      />
                    </span>

                    <span className="-ml-[12px]">
                      <Image
                        type="image"
                        className=""
                        width={33}
                        height={33}
                        alt="token2"
                        src={s.token1Url}
                      />
                    </span>
                  </div>

                  <Image
                    type="image"
                    alt={idx}
                    width={32}
                    height={32}
                    src={
                      idx == 0
                        ? one
                        : null || idx == 1
                        ? two
                        : null || idx == 2
                        ? three
                        : null
                    }
                  />
                </div>
                <div className="border-b-2 border-[#4452FE]/20 pb-[42px]">
                  <span className="mt-[20px] flex text-[20px] font-semibold">
                    <p className="pr-[6px]">{s.title ? s.title : s.subTitle}</p>

                    <span className="z-20">
                      <p>
                        <Image type="image" alt="" src={info} />
                      </p>
                    </span>
                  </span>
                  <p className="text-[16px] text-gray-mid">
                    {s.subTitle ? s.subTitle : s.title}
                  </p>
                </div>
                <div className="mt-[42px] text-[20px] font-thin tracking-wide">
                  <span className="flex items-center  justify-between">
                    <p className="text-[16px] font-light text-gray-mid">AUM</p>
                    <p className="">
                      $
                      {Intl.NumberFormat('en-us', {
                        notation: 'compact',
                        maximumFractionDigits: 2,
                      }).format(s.aum)}
                    </p>
                  </span>

                  <span className="mt-3 flex items-center justify-between">
                    <p className="text-[16px] font-light text-gray-mid">
                      Accu. Fees
                    </p>
                    <p>
                      $
                      {Intl.NumberFormat('en-us', {
                        notation: 'compact',
                        maximumFractionDigits: s.fees > 1e3 ? 1 : 2,
                      }).format(s.fees)}
                    </p>
                  </span>

                  {/* <span className="justify-between flex mt-3 items-center ">
              <p className="text-gray-mid font-light text-[16px]">
                Return Since Inception
              </p>

              <p
                className={`${
                  s.since_inception > 0
                    ? "text-green-700 bg-green-700"
                    : s.since_incepton === 0
                    ? "text-white bg-transparent"
                    : "text-[#D56665] bg-[#D56665]"
                } bg-opacity-10 px-[12px] py-[6px] rounded-full text-[14px] items-center flex space-x-`}
              >
                {s.since_inception > 0 ? "+" : ""}
                {+s.since_inception.toFixed(2)}% &nbsp;
                {s.since_inception > 0 ? (
                  <Image type="image" alt="" src={arrowupper} />
                ) : s.since_inception === 0 ? undefined : undefined}
              </p>
            </span> */}
                  <span className="mt-3 flex items-center justify-between ">
                    <p className="text-[16px] font-light text-gray-mid">
                      Fees Apr.
                    </p>

                    <p
                      className={`${
                        s.fees_apr > 0
                          ? 'bg-green-700 text-green-700'
                          : s.since_incepton === 0
                          ? 'bg-transparent text-white'
                          : 'bg-[#D56665] text-[#D56665]'
                      } space-x- flex items-center rounded-full bg-opacity-10 px-[12px] py-[6px] text-[14px]`}
                    >
                      {s.fees_apr > 0 ? '+' : ''}
                      {+s.fees_apr.toFixed(2)}% &nbsp;
                      {s.fees_apr > 0 ? (
                        <Image type="image" alt="" src={arrowupper} />
                      ) : s.fees_apr === 0 ? undefined : undefined}
                    </p>
                  </span>

                  <span className="mt-3 flex items-center justify-between">
                    <p className="text-[16px] font-light  text-gray-mid">
                      Network
                    </p>
                    <span className="text-sm capitalize">{s.network}</span>
                  </span>
                </div>
                <div className="group mt-[42px] w-full text-center">
                  <a
                    href={`https://app.defiedge.io/s/${s.network}/${s.id}`}
                    target="_blank"
                    className="flex w-full items-center justify-center rounded-lg bg-[#4452FE] py-3 duration-300 hover:bg-[#3F1DF0]"
                    rel="noreferrer"
                  >
                    <p>Trade Now &nbsp;</p>
                    <span className="flex  items-end duration-300 group-hover:-translate-y-1">
                      <Image type="image" alt="" src={arrowcross} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default CardCarousel;
