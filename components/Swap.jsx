// * Import React Libraries
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

// * Import Thirdparty Libraries
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

// * Images Required
import ico1 from "../public/images/ico1.svg";
import ico2 from "../public/images/ico2.svg";
import ico3 from "../public/images/ico3.svg";
import swap from "../public/images/swap.svg";

import line from "../public/images/line.svg";

function Swap() {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
    console.log(new Date().getTime());
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  const playVideoOnscroll = scrollY > 600 && scrollY < 1500;

  return (
    <Fade big>
      <section id="features" className="flex items-center flex-col">
        <div className="relative w-screen">
          <div className="absolute right-0 mr-[320px] ">
            <div className="bg-[#5749FF] h-[300px]  w-[300px] blur-[300px] opacity-42"></div>
          </div>

          <div className="absolute right-0 mt-[570px] -mr-[450px] ">
            <div className="bg-[#3B4FFF] h-[523px] w-[523px] blur-[354px] opacity-42"></div>
          </div>
        </div>
        <Fade duration={2000}>
          <div className="sm:mt-[140px] mt-[70px] sm:w-[792px] sm:h-[502px]">
            {playVideoOnscroll ? (
              <Fade duration={500}>
                <ReactPlayer
                  url="/images/swap.mp4"
                  loop
                  muted
                  playing={true}
                  width="100%"
                  height="100%"
                />
                {/* <video autoPlay muted loop>
                  <source src="/images/swap.mp4" type="video/mp4" />
                </video> */}
              </Fade>
            ) : (
              <Fade duration={500}>
                <Image type="image" alt="" src={swap} />
              </Fade>
            )}
          </div>
        </Fade>

        <Fade duration={2000}>
          <div className="mt-[32px] sm:mt-[42px] text-center">
            <span className="sm:text-[44px] text-[26px] font-semibold leading-[50px]  bg-gradient-to-tr bg-gradient-to-br from-[#6EA5FB] via-[#60B9FA] via-[#60B9FA]   to-[#3E51FF] bg-clip-text text-transparent">
              Swap and Rebalance
            </span>
            <p className="text-16px text-textgray text-center sm:mt-[25px] mt-[20px] sm:w-[500px]">
              Our Ul accurately calculates how you need to swap assets to deploy{" "}
              liquidity on selected ranges efficiently.
            </p>
          </div>
        </Fade>

        <Fade duration={2000}>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-[95px] sm:mt-[84px] mt-[72px]">
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
              <p className="text-textgray text-[16px] sm:mt-[20px] mt-[8px]">
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
        </Fade>
      </section>

      <div className="sm:mt-[70px] mt-[40px]">
        <Image type="image" className="w-[111px] h-[31px]" alt="" src={line} />
      </div>
    </Fade>
  );
}

export default Swap;
