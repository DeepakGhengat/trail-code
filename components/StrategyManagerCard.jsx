// * Import React Libraries
import Image from "next/image";
import React from "react";

//* Animation Libraries
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "animate.css/animate.min.css";

//* Import Required Images
// import strategy from "../public/images/strategy.png";
import one from "../public/images/strategy/001.svg";
import two from "../public/images/strategy/002.svg";
import three from "../public/images/strategy/003.svg";
import four from "../public/images/strategy/004.svg";
import five from "../public/images/strategy/005.svg";
import six from "../public/images/strategy/006.svg";
import seven from "../public/images/strategy/007.svg";
import eight from "../public/images/strategy/008.svg";
import rightarrow from "../public/images/rightarrow.svg";

function FirstRow() {
  return (
    <div className="grid grid-cols-8 gap-[15px] sm:gap-[30px] ml-[62px]">
      <Image type="image" alt="" src={one} />
      <Image type="image" alt="" src={two} />
      <Image type="image" alt="" src={three} />
      <Image type="image" alt="" src={four} />
      <Image type="image" alt="" src={one} />
      <Image type="image" alt="" src={two} />
      <Image type="image" alt="" src={three} />
      <Image type="image" alt="" src={four} />
    </div>
  );
}

function SecondRow() {
  return (
    <div className="grid grid-cols-8 gap-[15px] sm:gap-[30px] mt-[15px] sm:mt-[30px] pr-[62px]">
      <Image type="image" alt="" src={five} />
      <Image type="image" alt="" src={six} />
      <Image type="image" alt="" src={seven} />
      <Image type="image" alt="" src={eight} />
      <Image type="image" alt="" src={five} />
      <Image type="image" alt="" src={six} />
      <Image type="image" alt="" src={seven} />
      <Image type="image" alt="" src={eight} />
    </div>
  );
}

function StrategyManagerCard() {
  return (
    <div>
      <div className="bg-opacity-30 bg-[#141541] sm:h-[195px] overflow-hidden ring-1 ring-[#3F4077]/30 bg-clip-padding backdrop-filter backdrop-blur-xl flex flex-col-reverse sm:flex-row">
        <div className="p-[30px] w-1/2">
          <span className="sm:text-[32px] sm:mt-0 mt-[24px] leading-[27px] sm:leading-[44px] text-[20px] w-[150px] font-semibold">
          DeFi Edge Ecosystem.
          </span>
          <span className=" flex group mt-[24px]">
            <p>Explore more &nbsp;</p>
            <span className="group-hover:translate-x-2 duration-300 flex items-center">
              <Image type="image" alt="" src={rightarrow} />
            </span>
          </span>
        </div>

        <ParallaxProvider>
          <div className="h-[93px] sm:h-auto overflow-hidden sm:overflow-visible 	">
            <Parallax speed={10} easing="easeInQuad">
              <div className="rotate-6 opacity-70 sm:mr-[24px] sm:-mr-[500px] -mt-[80px] sm:-mt-[100px] w-[700px] sm:w-[1030px] ">
                <div className="mb-[15px] sm:mb-[30px]">
                  <FirstRow />
                  <SecondRow />
                </div>

                <div className="mb-[15px] sm:mb-[30px]">
                  <FirstRow />
                  <SecondRow />
                </div>
              </div>
            </Parallax>
          </div>
        </ParallaxProvider>
      </div>
    </div>
  );
}

export default StrategyManagerCard;
