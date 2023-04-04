import Image from 'next/image';
import React from 'react';
import Fade from 'react-reveal/Fade';

import p1 from '../public/images/p1.svg';
import p2 from '../public/images/p2.svg';
import p3 from '../public/images/p3.svg';
import rightarrow from '../public/images/rightarrow.svg';

function Participants() {
  return (
    <Fade>
      <section className="mt-[50px] sm:mt-[70px]">
        <div className="mb-[48px] flex flex-col items-center text-center">
          <span className="text-[26px] font-semibold sm:text-[42px]">
            DefiEdge Participants
          </span>
          <p className="mt-[12px] max-w-[600px] px-4 text-[16px] font-normal leading-[26px] text-gray-mid sm:mt-[25px] sm:text-[18px] md:px-0">
            The protocol caters to the needs of all types of participants.
            Browse to the section of your choice and know how you can benefit by
            using DefiEdge
          </p>
        </div>
        <Fade duration={2000}>
          <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-3 md:gap-[25px] md:px-0">
            <a
              href="https://docs.defiedge.io/category/liquidty-provider"
              target="_blank"
              className="group h-full"
              rel="noreferrer"
            >
              <div className="relative flex h-full flex-col items-start p-[20px] sm:p-[32px] ">
                <div className="absolute inset-0 rounded-xl border bg-gradient-to-tl from-[#58C0FB] to-transparent  opacity-16 duration-300 hover:border-gray-200 group-hover:opacity-30 "></div>
                <div>
                  <Image
                    type="image"
                    className="h-[31px] w-[111px]"
                    alt=""
                    src={p1}
                  />
                </div>
                <span className="mt-[20px] text-[20px] font-semibold sm:mt-[28px] sm:text-[24px]">
                  Liquidity Provider
                </span>
                <p className="mt-[12px] mb-5 flex-1 text-[16px] text-gray-mid">
                  Concentrated DEXs LPs can make use of DefiEdge to get access
                  to many advanced features making the protocol a go-to-platform
                  for managing liquidity.
                </p>

                <span className=" flex items-center">
                  <p className="">Read More &nbsp;</p>{' '}
                  <span className=" flex items-center duration-300 group-hover:translate-x-2">
                    <Image type="image" className="" alt="" src={rightarrow} />{' '}
                  </span>
                </span>
              </div>
            </a>

            <a
              href="https://docs.defiedge.io/category/defiedge-participants"
              target="_blank"
              className="group h-full"
              rel="noreferrer"
            >
              <div className="relative flex h-full flex-col items-start p-[20px] sm:p-[32px]">
                <div className="absolute inset-0 rounded-xl border border-gray-200 bg-gradient-to-tl from-[#FABB18] to-transparent opacity-16 duration-300 group-hover:opacity-30" />
                <div>
                  <Image
                    type="image"
                    className="h-[31px] w-[111px]"
                    alt=""
                    src={p2}
                  />
                </div>
                <span className="mt-[20px] text-[20px] font-semibold sm:mt-[28px] sm:text-[24px]">
                  Treasury managers{' '}
                </span>
                <p className="mt-[12px] mb-5 flex-1 text-[16px] text-gray-mid">
                  Invest smartly in the best strategies managed by some of the
                  best in the industry. Just sit back, relax and watch your
                  funds grow.
                </p>

                <span className="flex items-center">
                  <p className="">Read More &nbsp;</p>{' '}
                  <span className=" flex items-center duration-300 group-hover:translate-x-2">
                    <Image type="image" className="" alt="" src={rightarrow} />{' '}
                  </span>
                </span>
              </div>
            </a>

            <a
              href="https://docs.defiedge.io/category/strategy-manager"
              target="_blank"
              className="group h-full"
              rel="noreferrer"
            >
              <div className="relative flex h-full flex-col items-start  p-[20px] sm:p-[32px]">
                <div className="absolute inset-0 rounded-xl border border-gray-200 bg-gradient-to-tl from-[#45C646] to-transparent opacity-16 duration-300 group-hover:opacity-30 sm:w-[384px]"></div>
                <div>
                  <Image type="image" alt="" src={p3} />
                </div>
                <span className="mt-[20px] text-[20px] font-semibold sm:mt-[28px] sm:text-[24px]">
                  Strategy Manager{' '}
                </span>
                <p className="fle-x1 mt-[12px] mb-5 text-[16px] text-gray-mid">
                  Efficiently manage UnisawapV3 strategies, generate high yields
                  and earn fees on profits. Trusted managers can join Liquidity
                  Alliance, the DefiEdge ecosystem.
                </p>

                <span className="flex items-center">
                  <p className="">Read More &nbsp;</p>{' '}
                  <span className=" flex items-center duration-300 group-hover:translate-x-2">
                    <Image type="image" className="" alt="" src={rightarrow} />{' '}
                  </span>
                </span>
              </div>
            </a>
          </div>
        </Fade>
      </section>
    </Fade>
  );
}

export default Participants;
