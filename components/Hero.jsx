import topleftgradient from "../public/images/topgradient.svg";
import lightning from "../public/images/lightning.svg";
import heroVector from "../public/images/heromain.svg";
import Fade from 'react-reveal/Fade';

import Image from "next/image";

function Hero() {
  return (
    <Fade big>
      <section className="w-screen h-screen absolute">
        <div className="absolute -top-[650px] -left-[700px] ">
          <Image type="image" alt="" src={topleftgradient} />
        </div>
      </section>
      <section>
        <div className="container mx-auto max-w-[335px]  sm:max-w-[1200px] flex items-center z-10 relative">
          <div className=" sm:my-[75px] my-0 sm:flex ">
            <div className="flex flex-col items-center sm:items-start max-w-[588px] flex-wrap mt-[58px] text-center sm:text-left">
              <span className="sm:text-[44px] text-[30px] font-bold leading-[50px]  bg-gradient-to-tr from-[#75C1F5] to-[#4452FE] bg-clip-text text-transparent">
                Permissionless Liquidity Management on Uniswap v3
              </span>
              <p className="text-16px text-textgray mt-[30px] sm:w-[410px]">
                DefiEdge provides the simplest solution to deploy smart{" "}
                liquidity and optimize yield on Uniswap V3
              </p>
              <div>
                <button className="flex space-x-[6px] rounded-full bg-defaultblue py-[16px] px-[29px] items-center justify-center mt-[38px] hover:bg-[#3F1DF0] duration-300">
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
              </div>
            </div>
            <div>
              <div className="max-w-[588px] my-[50px] sm:my-0">
                <Image type="image" alt="" src={heroVector} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Hero;
