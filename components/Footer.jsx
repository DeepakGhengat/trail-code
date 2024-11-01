/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Footer() {
  const router = useRouter();

  const path = router.pathname;
  const isEcosystem = path === '/ecosystem';
  return (
    <Fade duration={2000}>
      <section
        className={`border-t border-gray-mid/20 ${
          isEcosystem ? 'bg-zinc-900/20' : 'bg-[#000015]'
        }`}
      >
        <div className="container  mt-[40px] sm:mt-[75px]  ">
          <div className="flex flex-col justify-between  border-b border-white/10 py-[50px]  sm:flex-row ">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex flex-col sm:items-start">
                <Image
                  type="image"
                  alt="logo"
                  height={31}
                  width={111}
                  className="h-[31px] w-[111px]"
                  src={'/images/mainlogo.svg'}
                />
                <span className="mt-[24px] text-center text-[16px] text-gray-mid sm:mt-[32px] sm:text-left">
                  DefiEdge provides the smartest solution to deploy liquidity{' '}
                  <br />
                  and optimise yields on Concentrated DEXs
                </span>
              </div>
              <div className="mt-[32px] flex space-x-[10px]">
                {[
                  {
                    url: 'https://medium.com/@DefiEdge',
                    alt: 'medium',
                    src: '/images/medium.svg',
                  },
                  {
                    url: 'https://twitter.com/DefiEdge/',
                    alt: 'twitter',
                    src: '/images/twitter.svg',
                  },
                  {
                    url: 'https://www.youtube.com/@DefiedgeProtocol',
                    alt: 'youtube',
                    src: '/images/youtube.svg',
                  },
                ].map(({ url, alt, src }, index) => (
                  <a
                    key={`social-${index}`}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      type="image"
                      alt={alt}
                      src={src}
                      height={32}
                      width={32}
                      className="h-[32px] w-[32px]"
                    />
                  </a>
                ))}
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
                      <a className="hover:text-white">Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white">
                      <a className="hover:text-white">Terms of Use</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.notion.so/defiedge/Careers-9feeee95a02141bfbaed050bf2a9cf9c"
                      className="hover:text-white"
                    >
                      <a target="_blank" className="hover:text-white">
                        Careers
                      </a>
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
