//* Import React Library
import Image from "next/image";
import React from "react";

import Faq from "../components/Faq";

//* Import Required Images
import liquidity from "../public/images/liquidity.svg";
import lightning from "../public/images/lightning.svg";
import arrowcross from "../public/images/arrowcross.svg";
import guides from "../public/images/liquidity/guides.svg";

import chat from "../public/images/liquidity/chat.svg";
import tweet from "../public/images/liquidity/tweet.svg";
import hand from "../public/images/liquidity/hand.svg";
import que from "../public/images/liquidity/que.svg";
import line from "../public/images/liquidity/line.svg";

//* Import Thirdparty Library
import Fade from "react-reveal/Fade";

function liquidityalliance() {
  return (
    <div>
      <div className="w-full h-screen absolute overflow-hidden">
        <div className="absolute -top-[400px] -left-[400px] ">
          <div className="bg-[#3B4FFF] h-[523px] w-[523px] blur-[354px] opacity-42"></div>
        </div>
      </div>
      <section>
        <div className=" my-0 sm:flex ">
          <div className="flex mt-[48px] sm:mt-[120px] flex-col items-center w-1/2 sm:items-start flex-wrap  text-center sm:text-left">
            <Fade delay={10} duration={2000}>
              <span className=" sm:text-[44px] text-[30px] font-semibold	leading-[40px] sm:leading-[55px]  bg-gradient-to-br from-[#6EA5FB] via-[#60B9FA] via-[#60B9FA]   to-[#3E51FF] bg-clip-text text-transparent">
                What is the Liquidity Alliance?
              </span>
            </Fade>
            <Fade delay={30} duration={3000}>
              <p className="text-16px text-gray-mid mt-[12px] sm:w-[410px] leading-[28px] font-medium">
                Liquidity Alliance (LA) is an initiative by DefiEdge (DE) for
                creating an ecosystem of trusted and verified members. It
                presents a great collaboration opportunity between liquidity
                providers, strategy
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
          <div className=" w-1/2 items-left justify-center flex ">
            <Fade duration={2000}>
              <div className="max-w-[410px] items-center flex w-full sm:pt-[75px] pb-[95px] pt-[49px] sm:pt-[75px]">
                <Image type="image" alt="" src={liquidity} />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <Fade>
        <section className="my-[70px] h-[466px]">
          <div className="bg-[#141541]/30 border border-[#3F4077] flex px-[50px] relative h-[466px]">
            <div className="absolute">
              <div className="relative w-full overflow-hidden">
                <div className="absolute right-0 mr-[320px] ">
                  <div className="bg-[#5749FF] h-[300px]  w-[300px] blur-[300px] opacity-42"></div>
                </div>

                <div className="absolute right-0 mt-[570px] -mr-[450px] ">
                  <div className="bg-[#3B4FFF] h-[523px] w-[523px] blur-[354px] opacity-42"></div>
                </div>
              </div>
            </div>

            <div className="">
              <div>
                <p className="text-[36px] font-semibold pt-[60px] pl-[20px]">
                  How to become a Liquidity Alliance <br /> Strategy Manager?
                </p>
              </div>

              <div className="absolute">
                <div className="-ml-[50px] mt-[110px]">
                  <Image type="image" alt="" src={line} />
                </div>
              </div>

              <div className="flex mt-[100px] space-x-[15px]">
                <div className="w-[286px]">
                  <p className="flex items-center font-semibold">
                    <span>1. &nbsp;</span>
                    <Image type="image" alt="" src={chat} />
                  </p>
                  <p className="mt-[16px] pl-[20px]">
                    erks of becoming a <br /> LA Strategy Manager:
                  </p>
                </div>
                <div className="w-[286px]">
                  <p className="flex items-center font-semibold">
                    <span>2. &nbsp;</span>
                    <Image type="image" alt="" src={tweet} />
                  </p>
                  <p className="mt-[16px] pl-[20px]">
                    erks of becoming a <br /> LA Strategy Manager:
                  </p>
                </div>
                <div className="w-[286px]">
                  <p className="flex items-center font-semibold">
                    <span>3. &nbsp;</span>
                    <Image type="image" alt="" src={hand} />
                  </p>
                  <p className="mt-[16px] pl-[20px]">
                    erks of becoming a <br /> LA Strategy Manager:
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute right-[50px]">
              <div className="h-full h-[466px] w-[172px]">
                <Image type="image" alt="" src={que} />
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section className="py-[70px]">
          <div>
            <div className="text-center flex flex-col items-center mb-[48px]">
              <span className="sm:text-[42px] text-[26px] font-semibold">
                DefiEdge Participants
              </span>
              <p className="text-gray-mid sm:text-[18px] leading-[26px] font-normal text-[16px] sm:mt-[25px] mt-[12px] max-w-[600px]">
                Minimize risk & maximize returns with DefiEdge’s scalable
                solution for liquidity provision on Uniswap V3
              </p>
            </div>
            <div className="mt-[38px] grid grid-cols-4 gap-[24px]">
              <div className="p-[32px] flex flex-col items-center text-center">
                <Image type="image" alt="" src={chat} />
                <p className="text-[20px] font-semibold mt-[26px]">
                  Heading One
                </p>
                <p className="mt-[12px]">
                  Get access to LA specific Liquidity Mining (LM) rewards
                </p>
              </div>

              <div className="p-[32px] flex flex-col items-center text-center">
                <Image type="image" alt="" src={chat} />
                <p className="text-[20px] font-semibold mt-[26px]">
                  Heading One
                </p>
                <p className="mt-[12px]">
                  Get access to LA specific Liquidity Mining (LM) rewards
                </p>
              </div>

              <div className="p-[32px] flex flex-col items-center text-center">
                <Image type="image" alt="" src={chat} />
                <p className="text-[20px] font-semibold mt-[26px]">
                  Heading One
                </p>
                <p className="mt-[12px]">
                  Get access to LA specific Liquidity Mining (LM) rewards
                </p>
              </div>

              <div className="p-[32px] flex flex-col items-center text-center">
                <Image type="image" alt="" src={chat} />
                <p className="text-[20px] font-semibold mt-[26px]">
                  Heading One
                </p>
                <p className="mt-[12px]">
                  Get access to LA specific Liquidity Mining (LM) rewards
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section className="py-[70px] ">
          <div className="bg-[#141541]/30 border flex border-[#3F4077]">
            <div>
              <div className="p-[70px] flex flex-col ">
                <span className="text-[36px] font-semibold ">
                  We have added extensive guides <br /> to get you started
                </span>
                <div>
                  <button className="group bg-[#4452FE] hover:bg-[#3F1DF0] flex items-center mt-[32px] duration-300 rounded-full py-[10px] px-[20px]">
                    <p>Go to Guides </p>{" "}
                    <Image type="image" alt="" src={arrowcross} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/3  relative">
              <div className="absolute bottom-0 -right-[30px] ">
                <Image type="image" alt="" src={guides} />
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <section>
        <Faq />
      </section>
    </div>
  );
}

export default liquidityalliance;
