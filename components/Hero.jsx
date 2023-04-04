import Image from 'next/image';
import React from 'react';
import Lottie from 'react-lottie-player';
import Fade from 'react-reveal/Fade';

import lightning from '../public/images/lightning.svg';
import lottieJson from '../public/lottieJson.json';

function Hero() {
  return (
    <div>
      <section className="absolute h-screen w-full overflow-hidden">
        <div className="absolute -top-[400px] -left-[400px] ">
          <div className="h-[523px] w-[523px] bg-[#3B4FFF] opacity-42 blur-[354px]"></div>
        </div>
      </section>
      <section>
        <div className="container relative z-10 mx-auto flex items-center px-4 sm:max-w-[1200px] md:px-0">
          <div className=" my-0 sm:flex ">
            <div className="mt-[48px] flex max-w-[594px] flex-col flex-wrap items-center text-center sm:mt-[120px]  sm:items-start sm:text-left">
              <Fade delay={10} duration={2000}>
                <span className=" bg-gradient-to-br from-[#6EA5FB] via-[#60B9FA] to-[#3E51FF]  bg-clip-text text-[30px] font-semibold leading-[40px]   text-transparent sm:text-[44px] sm:leading-[55px]">
                  Permissionless Liquidity Management on Concentrated DEXs
                </span>
              </Fade>
              <Fade delay={30} duration={3000}>
                <p className="text-16px mt-[12px] font-medium leading-[28px] text-gray-400 sm:w-[410px] ">
                  DefiEdge provides the smartest solution to deploy liquidity
                  and optimise yields on Concentrated DEXs
                </p>
              </Fade>

              <div>
                <Fade delay={30} duration={3000}>
                  <button className="mt-[32px] flex items-center justify-center space-x-[6px] rounded-full border border-gray-600 bg-default-blue py-[15px] px-[28px] duration-300 hover:bg-[#3F1DF0]">
                    <a
                      href="https://app.defiedge.io/"
                      target="_blank"
                      className="flex"
                      rel="noreferrer"
                    >
                      {' '}
                      <Image type="image" alt="" src={lightning} />
                      <p className="text-lg font-semibold ">
                        &nbsp; Launch App
                      </p>
                    </a>
                  </button>
                </Fade>
              </div>
            </div>
            <div>
              <Fade duration={2000}>
                <div className="pt-[49px] sm:pt-[30px] md:max-w-[588px]">
                  <Lottie
                    loop
                    className="sm:-ml-[100px] sm:h-[500px] sm:w-[800px]"
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
