//* Import React libraries
import React from "react";
import Image from "next/image";

//* Import required Images
import one from "../public/images/one.svg";
import two from "../public/images/two.svg";
import three from "../public/images/three.svg";
import info from "../public/images/info.svg";
import polygon from "../public/images/polygon.svg";
import arrowcross from "../public/images/arrowcross.svg";
import arrowdown from "../public/images/arrowdown.svg";
import arrowupper from "../public/images/arrowupper.svg";
import tokenlogo from "../public/images/tokenlogo.svg";

//* Import Thirdparty Library
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

//* Import Css for swiper
import "swiper/css/pagination";
import "swiper/css";

function CardCourosel() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="sm:hidden container mx-auto"
      spaceBetween={15}
      loop={true}
      centeredSlides={true}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="bg-opacity-5 bg-white ring-2 ring-white/10 bg-clip-padding backdrop-filter backdrop-blur-xl p-[32px] ">
          <div className="flex justify-between">
            <Image
              type="image"
              className="w-[111px] h-[31px]"
              alt=""
              src={tokenlogo}
            />
            <Image type="image" alt="" src={one} />
          </div>
          <div className="pb-[42px] border-b-2 border-[#4452FE]/20">
            <span className="text-[20px] flex font-semibold mt-[20px]">
              <p className="pr-[6px]">Test Strategy634</p>
              <Image type="image" alt="" src={info} />
            </span>
            <p className="text-[16px] text-gray-mid">USDC-WETH#2</p>
          </div>
          <div className="mt-[42px] text-[20px] font-normal">
            <span className="justify-between flex ">
              <p className="text-gray-mid font-light text-[20px]">AUM</p>
              <p className="">$47,374.356</p>
            </span>

            <span className="justify-between flex mt-[24px]">
              <p className="text-gray-mid font-light text-[20px]">Accu. Fees</p>
              <p>$0.04745</p>
            </span>

            <span className="justify-between flex mt-[24px]">
              <p className="text-gray-mid font-light text-[20px]">
                Since inception
              </p>
              <p className="text-[#D56665] bg-[#D56665] bg-opacity-10 px-[12px] py-[6px] rounded-full text-[14px] items-center flex space-x-2">
                -100% &nbsp;
                <Image type="image" alt="" src={arrowdown} />
              </p>
            </span>

            <span className="justify-between flex mt-[24px]">
              <p className="text-gray-mid font-light text-[20px]">Network</p>
              <Image type="image" alt="" src={polygon} />
            </span>
          </div>
          <div className="mt-[42px] text-center w-full">
            <button className="group bg-[#4452FE] hover:bg-[#3F1DF0] duration-300 bg-opacity-30 w-full p-[9px] flex items-center justify-center">
              <p>Trade Now &nbsp;</p>
              <span className="group-hover:-translate-y-1  duration-300 flex items-end">
                <Image type="image" alt="" src={arrowcross} />
              </span>
            </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-opacity-5 bg-white ring-2 ring-white/10 bg-clip-padding backdrop-filter backdrop-blur-xl p-[32px] ">
          <div className="flex justify-between">
            <Image
              type="image"
              className="w-[111px] h-[31px]"
              alt=""
              src={tokenlogo}
            />
            <Image type="image" alt="" src={two} />
          </div>
          <div className="pb-[42px] border-b-2 border-[#4452FE]/20">
            <span className="text-[20px] flex font-semibold mt-[20px]">
              <p className="pr-[6px]">Test Strategy634</p>
              <Image type="image" alt="" src={info} />
            </span>
            <p className="text-[16px] text-gray-mid">USDC-WETH#2</p>
          </div>
          <div className="mt-[42px] text-[20px] font-normal">
            <span className="justify-between flex ">
              <p className="text-gray-mid font-light text-[20px]">AUM</p>
              <p className="">$47,374.356</p>
            </span>

            <span className="justify-between flex mt-[24px]">
              <p className="text-gray-mid font-light text-[20px]">Accu. Fees</p>
              <p>$0.04745</p>
            </span>

            <span className="justify-between flex mt-[24px]">
              <p className="text-gray-mid font-light text-[20px]">
                Since inception
              </p>
              <p className="text-[#1BA27A] bg-[#1BA27A] bg-opacity-10 px-[12px] py-[6px] rounded-full text-[14px] items-center flex space-x-2">
                -100% &nbsp;
                <Image type="image" alt="" src={arrowupper} />
              </p>
            </span>

            <span className="justify-between flex mt-[24px]">
              <p className="text-gray-mid font-light text-[20px]">Network</p>
              <Image type="image" alt="" src={polygon} />
            </span>
          </div>
          <div className="mt-[42px] text-center w-full">
            <button className="group bg-[#4452FE] hover:bg-[#3F1DF0] duration-300 bg-opacity-30 w-full p-[9px] flex items-center justify-center">
              <p>Trade Now &nbsp;</p>
              <span className="group-hover:-translate-y-1  duration-300 flex items-end">
                <Image type="image" alt="" src={arrowcross} />
              </span>
            </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {" "}
        <div className="bg-opacity-5 bg-white ring-2 ring-white/10 bg-clip-padding backdrop-filter backdrop-blur-xl p-[32px] ">
          <div className="flex justify-between">
            <Image
              type="image"
              className="w-[111px] h-[31px]"
              alt=""
              src={tokenlogo}
            />
            <Image type="image" alt="" src={three} />
          </div>
          <div className="pb-[42px] border-b-2 border-[#4452FE]/20">
            <span className="text-[20px] flex font-semibold mt-[20px]">
              <p className="pr-[6px]">Test Strategy634</p>
              <Image type="image" alt="" src={info} />
            </span>
            <p className="text-[16px] text-gray-mid">USDC-WETH#2</p>
          </div>
          <div className="mt-[42px] text-[20px] font-normal">
            <span className="justify-between flex ">
              <p className="text-gray-mid font-light text-[20px]">AUM</p>
              <p className="">$47,374.356</p>
            </span>

            <span className="justify-between flex mt-[24px]">
              <p className="text-gray-mid font-light text-[20px]">Accu. Fees</p>
              <p>$0.04745</p>
            </span>

            <span className="justify-between flex mt-[24px]">
              <p className="text-gray-mid font-light text-[20px]">
                Since inception
              </p>
              <p className="text-[#D56665] bg-[#D56665] bg-opacity-10 px-[12px] py-[6px] rounded-full text-[14px] items-center flex space-x-2">
                -100% &nbsp;
                <Image type="image" alt="" src={arrowdown} />
              </p>
            </span>

            <span className="justify-between flex mt-[24px]">
              <p className="text-gray-mid font-light text-[20px]">Network</p>
              <Image type="image" alt="" src={polygon} />
            </span>
          </div>
          <div className="mt-[42px] text-center w-full">
            <button className="group bg-[#4452FE] hover:bg-[#3F1DF0] duration-300 bg-opacity-30 w-full p-[9px] flex items-center justify-center">
              <p>Trade Now &nbsp;</p>
              <span className="group-hover:-translate-y-1  duration-300 flex items-end">
                <Image type="image" alt="" src={arrowcross} />
              </span>
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default CardCourosel;
