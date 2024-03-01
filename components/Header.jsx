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
  { href: 'https://discord.gg/x2QgbqE9jj', label: 'Discord' },
  { href: 'https://twitter.com/DefiEdge/', label: 'Twitter' },
  { href: 'https://defiedge.substack.com/', label: 'Substack' },
  { href: 'https://medium.com/@DefiEdge', label: 'Medium' },
];

export default function Header() {
  const router = useRouter();

  const [showNotification, setShowNotification] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const timeoutDuration = 200;
  let timeout;

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const openMenu = (target) => target?.click();
  const closeMenu = () =>
    dropdownRef?.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    );
  const removeInterval = () => {
    timeout && clearTimeout(timeout);
  };

  const onMouseEnter = (target, closed) => {
    removeInterval();
    closed && openMenu(target);
  };
  const onMouseLeave = (open) => {
    open && (timeout = setTimeout(() => closeMenu(), timeoutDuration));
  };

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
        <Menu className="relative inline-block text-left" as="div">
          {({ open }) => (
            <div>
              <div>
                <Menu.Button
                  ref={buttonRef}
                  className="hover:opacity flex inline-flex w-full justify-center rounded-md   bg-opacity-20  text-white opacity-50 outline-none duration-300 hover:opacity-100"
                  onMouseLeave={() => onMouseLeave(open)}
                  onMouseEnter={({ target }) => onMouseEnter(target, !open)}
                >
                  Community
                  {/* <span>
                    <svg
                      width="28px"
                      height="28px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#000000"
                        fill="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{' '} */}
                </Menu.Button>
              </div>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items
                  onMouseEnter={removeInterval}
                  className="absolute right-0 mt-3 w-40 origin-top-right  rounded-md border border-white border-opacity-20 bg-[#0F0F2E] p-3  shadow-lg  outline-none   duration-300 "
                  ref={dropdownRef}
                  onMouseLeave={() => onMouseLeave(open)}
                >
                  {menuLinks.map((link) => (
                    <Menu.Item
                      as="a"
                      target="_blank"
                      key={link.href}
                      href={link.href}
                      className=" text-base group flex w-full items-center rounded-md px-2 py-2  text-white opacity-50 transition-all hover:opacity-100"
                    >
                      <span>{link.label}</span>
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </div>
          )}
        </Menu>
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
              <div className="container flex flex-wrap items-center  justify-between gap-y-4 py-[20px] text-[16px]  ">
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

                <div className="order-1 hidden w-full flex-wrap justify-between space-x-[33px] sm:flex lg:order-none lg:w-auto ">
                  {links}
                </div>

                <div>
                  <button className=" hidden shrink-0 items-center justify-center   space-x-[6px] rounded-md bg-default-blue py-[10px] px-7 duration-300 hover:bg-[#3F1DF0] sm:flex">
                    <a
                      href="https://app.defiedge.io/"
                      target="_blank"
                      className="flex"
                      rel="noreferrer"
                    >
                      <Image type="image" alt="" src={lightning} />
                      <p>&nbsp; Go To App</p>
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

            {/* subheader for notifications */}
            <div
              className={
                'bg-gradient-to-tr from-[#4D67A1] to-[#6248E9] px-4 py-[6px] text-[16px] md:px-0 ' +
                (showNotification
                  ? 'min-h-[40px] bg-gradient-to-r from-[#4452FE] via-[#6E5AFE] to-[#60B9FA] py-[9px] text-[16px]'
                  : 'hidden -translate-y-32 opacity-0 transition duration-300')
              }
            >
              <div className="container  flex  items-center justify-between">
                <p className="">
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
              'absolute inset-x-0 z-50 block border-b border-[#3F407799] bg-[#0f0f2d]/90 p-5  backdrop-blur-xl transition-all ease-in-out sm:hidden' +
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
