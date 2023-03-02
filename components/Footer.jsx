import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Fade from 'react-reveal/Fade';

import discord from '../public/images/discord.svg';
import mainlogo from '../public/images/mainlogo.svg';
import medium from '../public/images/medium.svg';
import twitter from '../public/images/twitter.svg';

export default function Footer() {
  return (
    <Fade duration={2000}>
      <section className="border-t border-gray-mid/20 bg-[#000015]">
        <div className="container mx-auto mt-[40px] max-w-[335px] sm:mt-[75px]  sm:max-w-[1200px] ">
          <div className="flex flex-col justify-between  border-b border-white/10 pb-[50px]  sm:flex-row ">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex flex-col sm:items-start">
                <Image
                  type="image"
                  className="h-[31px] w-[111px]"
                  alt=""
                  src={mainlogo}
                />
                <span className="mt-[24px] text-center text-[16px] text-gray-mid sm:mt-[32px] sm:text-left">
                  DefiEdge provides the smartest solution to deploy liquidity{' '}
                  <br />
                  and optimise yields on Uniswap V3
                </span>
              </div>
              <div className="mt-[32px] flex space-x-[10px]">
                <a
                  href="https://discord.com/invite/fRc6XxhfBq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image type="image" alt="" src={discord} />
                </a>
                <a
                  href="https://medium.com/@DefiEdge"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image type="image" alt="" src={medium} />
                </a>
                <a
                  href="https://twitter.com/DefiEdge/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image type="image" alt="" src={twitter} />
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row">
              <div className="mt-[30px] text-center text-[16px] sm:mt-0 sm:pr-[100px] sm:text-left">
                <span className="font-semibold">Company</span>
                <ul className="mt-[15px] flex justify-center space-x-[10px] text-gray-mid sm:mt-[25px] sm:flex-col sm:space-y-[18px] sm:space-x-0	 ">
                  <li>
                    <a
                      href="https://app.defiedge.io/"
                      target="_blank"
                      className="hover:text-white"
                      rel="noreferrer"
                    >
                      <p>Web app</p>
                    </a>
                  </li>
                  <li>
                    <Link href="/privacypolicy" className="hover:text-white">
                      <p>Privacy Policy</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white">
                      <p>Terms of Use</p>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-[30px] text-center text-[16px] sm:mt-0 sm:pr-[80px] sm:text-left">
                <span className="font-semibold">Resources</span>
                <ul className="mt-[12px] flex justify-center space-x-[10px] text-gray-mid sm:mt-[25px] sm:flex-col sm:space-y-[18px]	sm:space-x-0">
                  <li>
                    <a
                      href="https://medium.com/@DefiEdge"
                      target="_blank"
                      className="hover:text-white"
                      rel="noreferrer"
                    >
                      <p>Medium</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://docs.defiedge.io/"
                      target="_blank"
                      className="hover:text-white"
                      rel="noreferrer"
                    >
                      <p>Whitepaper</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="font-regular w-full py-[30px] text-center text-gray-mid">
            <span className="">© 2022 DefiEdge. All Rights Reserved</span>
          </div>
        </div>
      </section>
    </Fade>
  );
}
