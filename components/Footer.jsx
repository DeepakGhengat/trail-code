//* Import Images Required
import mainlogo from "../public/images/mainlogo.svg";
import discord from "../public/images/discord.svg";
import medium from "../public/images/medium.svg";
import twitter from "../public/images/twitter.svg";

//* Import React Library
import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Link from "next/link";

export default function Footer() {
  return (
    <Fade duration={2000}>
      <section className="bg-[#000015] border-t border-gray-mid/20">
        <div className="mt-[40px] sm:mt-[75px] container mx-auto max-w-[335px]  sm:max-w-[1200px] ">
          <div className="flex flex-col sm:flex-row  justify-between border-b border-white/10  pb-[50px] ">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex flex-col sm:items-start">
                <Image
                  type="image"
                  className="w-[111px] h-[31px]"
                  alt=""
                  src={mainlogo}
                />
                <span className="text-[16px] text-gray-mid mt-[24px] sm:mt-[32px] text-center sm:text-left">
                  DefiEdge provides the smartest solution to deploy liquidity{" "}
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
              <div className="text-[16px] sm:pr-[100px] text-center sm:text-left mt-[30px] sm:mt-0">
                <span className="font-semibold">Company</span>
                <ul className="text-gray-mid justify-center mt-[15px] sm:mt-[25px] sm:space-y-[18px] sm:space-x-0 space-x-[10px] flex sm:flex-col	 ">
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
                    <a href="/privacypolicy" className="hover:text-white">
                      <p>Privacy Policy</p>
                    </a>
                    {/* <Link /> */}
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-white">
                      <p>Terms of Use</p>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-[16px] sm:pr-[80px] text-center sm:text-left mt-[30px] sm:mt-0">
                <span className="font-semibold">Resources</span>
                <ul className="text-gray-mid mt-[12px] sm:mt-[25px] sm:space-y-[18px] sm:space-x-0 space-x-[10px] flex sm:flex-col	justify-center">
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
          <div className="font-regular text-gray-mid py-[30px] text-center w-full">
            <span className="">© 2022 DefiEdge. All Rights Reserved</span>
          </div>
        </div>
      </section>
    </Fade>
  );
}
