//* Import React Library
import Image from "next/image";
import React from "react";
import Lottie from "react-lottie-player";

import lottieJson from "../public/lottieJson.json";

//* Import Required Images
import lightning from "../public/images/lightning.svg";

//* Import Thirdparty Library
import Fade from "react-reveal/Fade";

function Hero() {
  return (
    <div>
      <section className="w-full h-screen absolute overflow-hidden">
        <div className="absolute -top-[400px] -left-[400px] ">
          <div className="bg-[#3B4FFF] h-[523px] w-[523px] blur-[354px] opacity-42"></div>
        </div>
      </section>
      <section>
        <div className="container mx-auto max-w-[335px]  sm:max-w-[1200px] flex items-center z-10 relative">
          <div className=" my-0 sm:flex ">
            <div className="flex mt-[48px] sm:mt-[120px] flex-col items-center sm:items-start max-w-[594px] flex-wrap  text-center sm:text-left">
              <Fade delay={10} duration={2000}>
                <span className=" sm:text-[44px] text-[30px] font-semibold	leading-[40px] sm:leading-[55px]  bg-gradient-to-br from-[#6EA5FB] via-[#60B9FA] via-[#60B9FA]   to-[#3E51FF] bg-clip-text text-transparent">
                  Permissionless Liquidity Management on Uniswap V3
                </span>
              </Fade>
              <Fade delay={30} duration={3000}>
                <p className="text-16px text-gray-mid mt-[12px] sm:w-[410px] leading-[28px] font-medium">
                  DefiEdge provides the smartest solution to deploy liquidity
                  and optimise yields on Uniswap V3
                </p>
              </Fade>

              <div>
                <Fade delay={30} duration={3000}>
                  <button className="flex space-x-[6px] rounded-full bg-default-blue py-[15px] px-[28px] items-center justify-center mt-[32px] hover:bg-[#3F1DF0] duration-300">
                    <a
                      href="https://app.defiedge.io/"
                      target="_blank"
                      className="flex"
                      rel="noreferrer"
                    >
                      {" "}
                      <Image type="image" alt="" src={lightning} />
                      <p>&nbsp; Launch App</p>
                    </a>
                  </button>
                </Fade>
              </div>
            </div>
            <div>
              <Fade duration={2000}>
                <div className="max-w-[588px]  pt-[49px] sm:pt-[30px]">
                  <Lottie
                    loop
                    className="sm:h-[500px] sm:w-[800px] -ml-[100px]"
                    animationData={lottieJson}
                    play
                  />
                  {/* <video
                    className="sm:h-[403px] sm:w-[588px]"
                    src="/images/heroVideo.mp4"
                    type="video/mp4"
                    autoPlay
                    muted
                    loop
                  /> */}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
