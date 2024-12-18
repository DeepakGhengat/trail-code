import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';

import arrowcross from '../public/images/arrowcross.svg';
import closeButton from '../public/images/closeButton.svg';
import cross from '../public/images/cross.svg';
import lightning from '../public/images/lightning.svg';
import defiedgeLogo from '../public/images/mainlogo.svg';
import menuIcon from '../public/images/menu.svg';

const menuLinks = [
  { label: 'Twitter', href: 'https://twitter.com/DefiEdge/' },
];

export default function Header() {
  const router = useRouter();

  const [showNotification, setShowNotification] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    function closeNav() {
      setShowNav(false);
    }

    document.body.classList[showNav ? 'add' : 'remove']('overflow-hidden');

    setTimeout(() => {
      document.body[showNav ? 'addEventListener' : 'removeEventListener'](
        'click',
        closeNav
      );
    }, 200);
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.body.removeEventListener('click', closeNav);
    };
  }, [showNav]);

  const links = useMemo(
    () => (
      <>
        <Link href="https://twitter.com/DefiEdge/" target="_blank">
          <a className="opacity-50 duration-300 hover:opacity-100">Community</a>
        </Link>
        <Link href="/ecosystem" shallow scroll>
          <a
            className={
              router.asPath == '/ecosystem'
                ? 'opacity-100 duration-300 hover:opacity-100'
                : 'opacity-50 duration-300 hover:opacity-100'
            }
          >
            Ecosystem
          </a>
        </Link>
        <Link href="https://docs.defiedge.io/" target="_blank" forwardRef>
          <a
            target="_blank"
            className="flex items-center space-x-0.5 opacity-50 duration-300 hover:opacity-100"
          >
            <span>Docs</span>
            <span className="relative mt-1 h-4 w-4">
              <Image type="image" alt="" layout="fill" src={arrowcross.src} />
            </span>
          </a>
        </Link>
        <Link href="/standout">
          <a
            className={
              router.asPath == '/standout'
                ? 'opacity-100 duration-300 hover:opacity-100'
                : 'opacity-50 duration-300 hover:opacity-100'
            }
          >
            Edge in DefiEdge
          </a>
        </Link>
        <Link
          href="https://www.notion.so/defiedge/Careers-9feeee95a02141bfbaed050bf2a9cf9c"
          className="opacity-50 duration-300 hover:opacity-100"
        >
          <a
            target="_blank"
            className="opacity-50 duration-300 hover:opacity-100"
          >
            Careers
          </a>
        </Link>
      </>
    ),
    [router.asPath]
  );

  return (
    <Fade duration={1000}>
      <div className="sticky inset-x-0 top-0 z-50 bg-[#0d0d2c]/5 backdrop-blur ">
        <div className="">
          <header>
            <div className="bg-white bg-opacity-5 bg-clip-padding ring-2 ring-white/10 backdrop-blur-xl backdrop-filter">
              <div className="container flex flex-wrap items-center justify-between gap-y-4 py-[20px] text-[16px]">
                <Link href="/" forwardHref>
                  <a>
                    <Image
                      type="image"
                      className="h-[31px] w-[111px]"
                      alt=""
                      src={defiedgeLogo}
                    />
                  </a>
                </Link>
                <div className="order-1 hidden w-full flex-wrap justify-between space-x-[33px] sm:flex lg:order-none lg:w-auto">
                  {links}
                </div>
                <div>
                  <button className="hidden shrink-0 items-center justify-center space-x-[6px] rounded-md bg-default-blue py-[10px] px-7 duration-300 hover:bg-light-blue sm:flex">
                    <a
                      href="https://app.defiedge.io/"
                      target="_blank"
                      className="flex"
                      rel="noreferrer"
                    >
                      <Image type="image" alt="" src={lightning} />
                      <p>&nbsp; Go To App (Sunset)</p>
                    </a>
                  </button>
                  <button
                    className="flex items-center justify-center duration-300 sm:hidden"
                    onClick={() => setShowNav(!showNav)}
                  >
                    <Image
                      type="image"
                      className="h-[31px] w-[111px]"
                      objectFit="contain"
                      alt="toggle-nav"
                      src={showNav ? cross : menuIcon}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                'bg-gradient-to-tr from-[#4D67A1] to-[#6248E9] px-4 py-[6px] text-[16px] md:px-0 ' +
                (showNotification
                  ? 'min-h-[40px] bg-gradient-to-r from-[#4452FE] via-[#6E5AFE] to-[#60B9FA] py-[9px] text-[16px]'
                  : 'hidden -translate-y-32 opacity-0 transition duration-300')
              }
            >
              <div className="container flex items-center justify-between">
                <p>
                  📣 DefiEdge provides the simplest solution to deploy smart
                  liquidity and optimize yield on Concentrated DEXs. &nbsp;
                  <a href="#" className="underline">
                    Know more
                  </a>
                </p>
                <div>
                  <button onClick={() => setShowNotification(false)}>
                    <Image type="image" alt="" src={closeButton} />
                  </button>
                </div>
              </div>
            </div>
          </header>
          <div
            className={
              'absolute inset-x-0 z-50 block border-b border-[#3F407799] bg-[#0f0f2d]/90 p-5 backdrop-blur-xl transition-all ease-in-out sm:hidden' +
              ' ' +
              (showNav
                ? 'max-h-[232px] opacity-100'
                : 'pointer-events-none max-h-0 opacity-0')
            }
          >
            <div className="flex flex-col space-y-[32px]">{links}</div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

