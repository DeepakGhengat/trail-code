import Image from 'next/image';
import React from 'react';
import Fade from 'react-reveal/Fade';

import Faq from '../components/Faq';
import arrowcross from '../public/images/arrowcross.svg';
import lightning from '../public/images/lightning.svg';
import liquidity from '../public/images/liquidity.svg';
import chat from '../public/images/liquidity/chat.svg';
import guides from '../public/images/liquidity/guides.svg';
import hand from '../public/images/liquidity/hand.svg';
import line from '../public/images/liquidity/line.svg';
import que from '../public/images/liquidity/que.svg';
import tweet from '../public/images/liquidity/tweet.svg';

function LiquidityAlliance() {
  return (
    <div>
      <div className="absolute h-screen w-full overflow-hidden">
        <div className="absolute -top-[400px] -left-[400px] ">
          <div className="h-[523px] w-[523px] bg-[#3B4FFF] opacity-42 blur-[354px]"></div>
        </div>
      </div>
      <section>
        <div className="my-0 mx-auto max-w-[1200px] px-4 sm:flex md:px-0">
          <div className="mt-[48px] flex w-1/2 flex-col flex-wrap items-center text-center sm:mt-[120px]  sm:items-start sm:text-left">
            <Fade delay={10} duration={2000}>
              <span className=" bg-gradient-to-br from-[#6EA5FB] via-[#60B9FA] to-[#3E51FF]  bg-clip-text text-[30px] font-semibold leading-[40px]   text-transparent sm:leading-[55px] md:text-[36px] lg:text-[44px]">
                What is the Liquidity Alliance?
              </span>
            </Fade>
            <Fade delay={30} duration={3000}>
              <p className="text-16px mt-[12px] font-medium leading-[28px] text-gray-mid sm:w-[410px]">
                Liquidity Alliance (LA) is an initiative by DefiEdge (DE) for
                creating an ecosystem of trusted and verified members. It
                presents a great collaboration opportunity between liquidity
                providers, strategy
              </p>
            </Fade>

            <div>
              <Fade delay={30} duration={3000}>
                <button className="mt-[32px] flex items-center justify-center space-x-[6px] rounded-full bg-default-blue py-[15px] px-[28px] duration-300 hover:bg-[#3F1DF0]">
                  <a
                    href="https://app.defiedge.io/"
                    target="_blank"
                    className="flex"
                    rel="noreferrer"
                  >
                    {' '}
                    <Image type="image" alt="" src={lightning} />
                    <p>&nbsp; Launch App</p>
                  </a>
                </button>
              </Fade>
            </div>
          </div>
          <div className=" items-left flex w-1/2 justify-center ">
            <Fade duration={2000}>
              <div className="flex w-full max-w-[410px] items-center pb-[95px] pt-[49px] sm:pt-[75px]">
                <Image type="image" alt="" src={liquidity} />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <Fade>
        <section className="mx-auto my-[70px] h-[466px] max-w-[1200px] px-4 md:px-0">
          <div className="relative flex h-[466px] border border-[#3F4077] bg-[#141541]/30 px-[50px]">
            <div className="absolute">
              <div className="relative w-full overflow-hidden">
                <div className="absolute right-0 mr-[320px] ">
                  <div className="h-[300px] w-[300px]  bg-[#5749FF] opacity-42 blur-[300px]"></div>
                </div>

                <div className="absolute right-0 mt-[570px] -mr-[450px] ">
                  <div className="h-[523px] w-[523px] bg-[#3B4FFF] opacity-42 blur-[354px]"></div>
                </div>
              </div>
            </div>

            <div className="">
              <div>
                <p className="pt-[60px] pl-[20px] text-[36px] font-semibold">
                  How to become a Liquidity Alliance <br /> Strategy Manager?
                </p>
              </div>

              <div className="absolute">
                <div className="-ml-[50px] mt-[110px]">
                  <Image type="image" alt="" src={line} />
                </div>
              </div>

              <div className="mt-[100px] flex space-x-[15px]">
                <div className="w-[286px]">
                  <p className="flex items-center font-semibold">
                    <span>1. &nbsp;</span>
                    <Image type="image" alt="" src={chat} />
                  </p>
                  <p className="mt-[16px] pl-[20px]">
                    Perks of becoming a <br /> LA Strategy Manager:
                  </p>
                </div>
                <div className="w-[286px]">
                  <p className="flex items-center font-semibold">
                    <span>2. &nbsp;</span>
                    <Image type="image" alt="" src={tweet} />
                  </p>
                  <p className="mt-[16px] pl-[20px]">
                    Perks of becoming a <br /> LA Strategy Manager:
                  </p>
                </div>
                <div className="w-[286px]">
                  <p className="flex items-center font-semibold">
                    <span>3. &nbsp;</span>
                    <Image type="image" alt="" src={hand} />
                  </p>
                  <p className="mt-[16px] pl-[20px]">
                    Perks of becoming a <br /> LA Strategy Manager:
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
        <section className="mx-auto max-w-[1200px] py-[70px] px-4 md:px-0">
          <div>
            <div className="mb-[48px] flex flex-col items-center text-center">
              <span className="text-[26px] font-semibold sm:text-[42px]">
                DefiEdge Participants
              </span>
              <p className="mt-[12px] max-w-[600px] text-[16px] font-normal leading-[26px] text-gray-mid sm:mt-[25px] sm:text-[18px]">
                Minimize risk & maximize returns with DefiEdge’s scalable
                solution for liquidity provision on Concentrated DEXs
              </p>
            </div>
            <div className="mt-[38px] grid grid-cols-4 gap-[24px]">
              <div className="flex flex-col items-center p-[32px] text-center">
                <Image type="image" alt="" src={chat} />
                <p className="mt-[26px] text-[20px] font-semibold">
                  Heading One
                </p>
                <p className="mt-[12px]">
                  Get access to LA specific Liquidity Mining (LM) rewards
                </p>
              </div>

              <div className="flex flex-col items-center p-[32px] text-center">
                <Image type="image" alt="" src={chat} />
                <p className="mt-[26px] text-[20px] font-semibold">
                  Heading One
                </p>
                <p className="mt-[12px]">
                  Get access to LA specific Liquidity Mining (LM) rewards
                </p>
              </div>

              <div className="flex flex-col items-center p-[32px] text-center">
                <Image type="image" alt="" src={chat} />
                <p className="mt-[26px] text-[20px] font-semibold">
                  Heading One
                </p>
                <p className="mt-[12px]">
                  Get access to LA specific Liquidity Mining (LM) rewards
                </p>
              </div>

              <div className="flex flex-col items-center p-[32px] text-center">
                <Image type="image" alt="" src={chat} />
                <p className="mt-[26px] text-[20px] font-semibold">
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
        <section className="mx-auto max-w-[1200px] py-[70px] px-4 md:px-0">
          <div className="flex border border-[#3F4077] bg-[#141541]/30">
            <div>
              <div className="flex flex-col p-[70px] ">
                <span className="text-[36px] font-semibold ">
                  We have added extensive guides <br /> to get you started
                </span>
                <div>
                  <button className="group mt-[32px] flex items-center rounded-full bg-[#4452FE] py-[10px] px-[20px] duration-300 hover:bg-[#3F1DF0]">
                    <p>Go to Guides </p>{' '}
                    <Image type="image" alt="" src={arrowcross} />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-1/3">
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

export default LiquidityAlliance;
