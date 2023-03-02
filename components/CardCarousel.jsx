import 'swiper/css/pagination';
import 'swiper/css';

import Image from 'next/image';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import arrowcross from '../public/images/arrowcross.svg';
import arrowdown from '../public/images/arrowdown.svg';
import arrowupper from '../public/images/arrowupper.svg';
import info from '../public/images/info.svg';
import one from '../public/images/one.svg';
import polygon from '../public/images/polygon.svg';
import three from '../public/images/three.svg';
import tokenlogo from '../public/images/tokenlogo.svg';
import two from '../public/images/two.svg';

function CardCarousel() {
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
      <SwiperSlide>
        <div className="bg-white bg-opacity-5 bg-clip-padding p-[32px] ring-2 ring-white/10 backdrop-blur-xl backdrop-filter ">
          <div className="flex justify-between">
            <Image
              type="image"
              className="h-[31px] w-[111px]"
              alt=""
              src={tokenlogo}
            />
            <Image type="image" alt="" src={one} />
          </div>
          <div className="border-b-2 border-[#4452FE]/20 pb-[42px]">
            <span className="mt-[20px] flex text-[20px] font-semibold">
              <p className="pr-[6px]">Test Strategy634</p>
              <Image type="image" alt="" src={info} />
            </span>
            <p className="text-[16px] text-gray-mid">USDC-WETH#2</p>
          </div>
          <div className="mt-[42px] text-[20px] font-normal">
            <span className="flex justify-between ">
              <p className="text-[20px] font-light text-gray-mid">AUM</p>
              <p className="">$47,374.356</p>
            </span>

            <span className="mt-[24px] flex justify-between">
              <p className="text-[20px] font-light text-gray-mid">Accu. Fees</p>
              <p>$0.04745</p>
            </span>

            <span className="mt-[24px] flex justify-between">
              <p className="text-[20px] font-light text-gray-mid">
                Since inception
              </p>
              <p className="flex items-center space-x-2 rounded-full bg-[#D56665] bg-opacity-10 px-[12px] py-[6px] text-[14px] text-[#D56665]">
                -100% &nbsp;
                <Image type="image" alt="" src={arrowdown} />
              </p>
            </span>

            <span className="mt-[24px] flex justify-between">
              <p className="text-[20px] font-light text-gray-mid">Network</p>
              <Image type="image" alt="" src={polygon} />
            </span>
          </div>
          <div className="mt-[42px] w-full text-center">
            <button className="group flex w-full items-center justify-center bg-[#4452FE] bg-opacity-30 p-[9px] duration-300 hover:bg-[#3F1DF0]">
              <p>Trade Now &nbsp;</p>
              <span className="flex  items-end duration-300 group-hover:-translate-y-1">
                <Image type="image" alt="" src={arrowcross} />
              </span>
            </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-white bg-opacity-5 bg-clip-padding p-[32px] ring-2 ring-white/10 backdrop-blur-xl backdrop-filter ">
          <div className="flex justify-between">
            <Image
              type="image"
              className="h-[31px] w-[111px]"
              alt=""
              src={tokenlogo}
            />
            <Image type="image" alt="" src={two} />
          </div>
          <div className="border-b-2 border-[#4452FE]/20 pb-[42px]">
            <span className="mt-[20px] flex text-[20px] font-semibold">
              <p className="pr-[6px]">Test Strategy634</p>
              <Image type="image" alt="" src={info} />
            </span>
            <p className="text-[16px] text-gray-mid">USDC-WETH#2</p>
          </div>
          <div className="mt-[42px] text-[20px] font-normal">
            <span className="flex justify-between ">
              <p className="text-[20px] font-light text-gray-mid">AUM</p>
              <p className="">$47,374.356</p>
            </span>

            <span className="mt-[24px] flex justify-between">
              <p className="text-[20px] font-light text-gray-mid">Accu. Fees</p>
              <p>$0.04745</p>
            </span>

            <span className="mt-[24px] flex justify-between">
              <p className="text-[20px] font-light text-gray-mid">
                Since inception
              </p>
              <p className="flex items-center space-x-2 rounded-full bg-[#1BA27A] bg-opacity-10 px-[12px] py-[6px] text-[14px] text-[#1BA27A]">
                -100% &nbsp;
                <Image type="image" alt="" src={arrowupper} />
              </p>
            </span>

            <span className="mt-[24px] flex justify-between">
              <p className="text-[20px] font-light text-gray-mid">Network</p>
              <Image type="image" alt="" src={polygon} />
            </span>
          </div>
          <div className="mt-[42px] w-full text-center">
            <button className="group flex w-full items-center justify-center bg-[#4452FE] bg-opacity-30 p-[9px] duration-300 hover:bg-[#3F1DF0]">
              <p>Trade Now &nbsp;</p>
              <span className="flex  items-end duration-300 group-hover:-translate-y-1">
                <Image type="image" alt="" src={arrowcross} />
              </span>
            </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {' '}
        <div className="bg-white bg-opacity-5 bg-clip-padding p-[32px] ring-2 ring-white/10 backdrop-blur-xl backdrop-filter ">
          <div className="flex justify-between">
            <Image
              type="image"
              className="h-[31px] w-[111px]"
              alt=""
              src={tokenlogo}
            />
            <Image type="image" alt="" src={three} />
          </div>
          <div className="border-b-2 border-[#4452FE]/20 pb-[42px]">
            <span className="mt-[20px] flex text-[20px] font-semibold">
              <p className="pr-[6px]">Test Strategy634</p>
              <Image type="image" alt="" src={info} />
            </span>
            <p className="text-[16px] text-gray-mid">USDC-WETH#2</p>
          </div>
          <div className="mt-[42px] text-[20px] font-normal">
            <span className="flex justify-between ">
              <p className="text-[20px] font-light text-gray-mid">AUM</p>
              <p className="">$47,374.356</p>
            </span>

            <span className="mt-[24px] flex justify-between">
              <p className="text-[20px] font-light text-gray-mid">Accu. Fees</p>
              <p>$0.04745</p>
            </span>

            <span className="mt-[24px] flex justify-between">
              <p className="text-[20px] font-light text-gray-mid">
                Since inception
              </p>
              <p className="flex items-center space-x-2 rounded-full bg-[#D56665] bg-opacity-10 px-[12px] py-[6px] text-[14px] text-[#D56665]">
                -100% &nbsp;
                <Image type="image" alt="" src={arrowdown} />
              </p>
            </span>

            <span className="mt-[24px] flex justify-between">
              <p className="text-[20px] font-light text-gray-mid">Network</p>
              <Image type="image" alt="" src={polygon} />
            </span>
          </div>
          <div className="mt-[42px] w-full text-center">
            <button className="group flex w-full items-center justify-center bg-[#4452FE] bg-opacity-30 p-[9px] duration-300 hover:bg-[#3F1DF0]">
              <p>Trade Now &nbsp;</p>
              <span className="flex  items-end duration-300 group-hover:-translate-y-1">
                <Image type="image" alt="" src={arrowcross} />
              </span>
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default CardCarousel;
