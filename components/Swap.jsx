import React from "react";
import Image from "next/image";
import swap from "../public/images/swap.svg";
import ico1 from "../public/images/ico1.svg";
import ico2 from "../public/images/ico2.svg";
import ico3 from "../public/images/ico3.svg";
import line from "../public/images/line.svg";
import gradient from "../public/images/swapGradient.svg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Swap() {
  return (
    <Fade big >
      <section id="features" className="flex items-center flex-col">
        <div className="relative w-screen">
          <div className="absolute right-0 -mt-[270px] -mr-[200px]">
            <Image
              type="image"
              className="w-[111px] h-[31px]"
              alt=""
              src={gradient}
            />
          </div>
        </div>
        <div className="sm:mt-[150px] mt-[70px] xl:w-[792px]">
          <Image
            type="image"
            className="w-[111px] h-[31px]"
            alt=""
            src={swap}
          />
        </div>
        <div className="mt-[50px] text-center">
          <span className="sm:text-[44px] text-[26px] font-semibold leading-[50px]  bg-gradient-to-tr from-[#75C1F5] to-[#4452FE] bg-clip-text text-transparent">
            Swap and Rebalance
          </span>
          <p className="text-16px text-textgray text-center sm:mt-[25px] mt-[20px] sm:w-[500px]">
            Our Ul accurately calculates how you need to swap assets to deploy{" "}
            liquidity on selected ranges efficiently.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-[95px] sm:mt-[145px] mt-[70px]">
          <div className="flex flex-col text-center items-center">
            <Zoom duration={500}>
              <Image
                type="image"
                className="w-[111px] h-[31px]"
                alt=""
                src={ico1}
              />
            </Zoom>

            <span className="text-[20px] font-semibold mt-[30px]">
              Create and Manage Strategy
            </span>
            <p className="text-textgray text-[16px] mt-[20px]">
              Tokenize liquidity provided on Uniswap V3 using DefiEdge. These
              tokens can be then used as collateral.
            </p>
          </div>

          <div className="flex flex-col text-center items-center">
          <Zoom duration={500}>
              <Image
                type="image"
                className="w-[111px] h-[31px]"
                alt=""
                src={ico2}
              />
            </Zoom>
            <span className="text-[20px] font-semibold mt-[30px]">
              Limit orders
            </span>
            <p className="text-textgray text-[16px] mt-[20px]">
              Tokenize liquidity provided on Uniswap V3 using DefiEdge. These
              tokens can be then used as collateral.
            </p>
          </div>

          <div className="flex flex-col text-center items-center">
          <Zoom duration={500}>
              <Image
                type="image"
                className="w-[111px] h-[31px]"
                alt=""
                src={ico3}
              />
            </Zoom>
            <span className="text-[20px] font-semibold mt-[30px]">
              DE shares
            </span>
            <p className="text-textgray text-[16px] mt-[20px]">
              Tokenize liquidity provided on Uniswap V3 using DefiEdge. These
              tokens can be then used as collateral.
            </p>
          </div>
        </div>
      </section>

      <div className="sm:mt-[95px] mt-[40px]">
        <Image type="image" className="w-[111px] h-[31px]" alt="" src={line} />
      </div>
    </Fade>
  );
}

export default Swap;
