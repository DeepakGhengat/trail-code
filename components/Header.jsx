import React, { useEffect, useMemo } from "react";

import Fade from "react-reveal/Fade";
import Image from "next/image";
import Link from "next/link";
import closeButton from "../public/images/closeButton.svg";
import cross from "../public/images/cross.svg";
import defiedgeLogo from "../public/images/mainlogo.svg";
import lightning from "../public/images/lightning.svg";
import menuIcon from "../public/images/menu.svg";
import { useRouter } from "next/router";
import { useState } from "react";
import arrowcross from "../public/images/arrowcross.svg";

export default function Header() {
  const router = useRouter();

  const [showNotification, setShowNotification] = useState(true);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    function closeNav() {
      setShowNav(false);
    }

    document.body.classList[showNav ? "add" : "remove"]("overflow-hidden");

    setTimeout(() => {
      document.body[showNav ? "addEventListener" : "removeEventListener"](
        "click",
        closeNav
      );
    }, 200);
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.body.removeEventListener("click", closeNav);
    };
  }, [showNav]);

  const links = useMemo(
    () => (
      <>
        <Link href="/">
          <a
            className={
              router.asPath == "/"
                ? "opacity-100 hover:opacity-100 duration-300"
                : "opacity-50 hover:opacity-100 duration-300"
            }
          >
            Home
          </a>
        </Link>
        <Link href="/#features" shallow scroll>
          <a
            className={
              router.asPath == "/#features"
                ? "opacity-100 hover:opacity-100 duration-300"
                : "opacity-50 hover:opacity-100 duration-300"
            }
          >
            Features
          </a>
        </Link>
        <Link href="/ecosystem">
          <a
            className={
              router.asPath == "/ecosystem"
                ? "opacity-100 hover:opacity-100 duration-300"
                : "opacity-50 hover:opacity-100 duration-300"
            }
          >
            Ecosystem
          </a>
        </Link>
        <Link href="https://docs.defiedge.io/" target="_blank" forwardRef>
          <a
            target="_blank"
            className="opacity-50 flex space-x-0.5 items-center hover:opacity-100 duration-300"
          >
            <span>Docs</span>
            <span className="h-4 w-4 mt-1 relative">
              <Image type="image" alt="" layout="fill" src={arrowcross.src} />
            </span>
          </a>
        </Link>

        {/* <Link
                href="https://unboundfinance.notion.site/DefiEdge-Job-Board-0bde371c6cb74a8f9fbdb6ec45d56412"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                <a
                  target="_blank"
                  className="opacity-50 hover:opacity-100 duration-300"
                >
                  Careers
                </a>
              </Link> */}
      </>
    ),
    [router.asPath]
  );

  return (
    <Fade duration={1000}>
      <div className="sticky top-0 inset-x-0 backdrop-blur bg-[#0d0d2c]/5 z-50 ">
        <div className="">
          <header>
            <div className="ring-2 ring-white/10 bg-clip-padding bg-opacity-5 bg-white backdrop-filter backdrop-blur-xl">
              <div className="text-[16px] flex justify-between items-center py-[20px] sm:max-w-[1200px] max-w-[335px] container mx-auto ">
                <Link href="/" forwardHref>
                  <a>
                    <Image
                      type="image"
                      className="w-[111px] h-[31px]"
                      alt=""
                      src={defiedgeLogo}
                    />
                  </a>
                </Link>

                <div className="space-x-[33px] hidden sm:flex">{links}</div>

                <div>
                  <button className=" hidden sm:flex space-x-[6px] rounded-md   bg-default-blue py-[10px] px-7 items-center justify-center hover:bg-[#3F1DF0] duration-300">
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
                    className="flex sm:hidden items-center justify-center duration-300"
                    onClick={() => setShowNav(!showNav)}
                  >
                    <Image
                      type="image"
                      className="w-[111px] h-[31px]"
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
                "h-[40px] text-[16px] py-[6px] bg-gradient-to-tr from-[#4D67A1] to-[#6248E9]" +
                (showNotification
                  ? "h-[40px] text-[16px] py-[9px] bg-gradient-to-r hidden from-[#4452FE] via-[#6E5AFE]  to-[#60B9FA]"
                  : "transition -translate-y-32 duration-300 invisible opacity-5")
              }
            >
              <div className="max-w-[1200px] container mx-auto flex justify-between">
                <p className="">
                  📣 DefiEdge provides the simplest solution to deploy smart
                  liquidity and optimize yield on Uniswap V3. &nbsp;
                  <a href="#" className="underline">
                    Know more
                  </a>
                </p>
                <button onClick={() => setShowNotification(false)}>
                  <Image type="image" alt="" src={closeButton} />
                </button>
              </div>
            </div>
          </header>
          <div
            className={
              "sm:hidden backdrop-blur-xl ease-in-out border-[#3F407799] border-b bg-[#0f0f2d]/80 block absolute z-50 inset-x-0 p-5 transition-all" +
              " " +
              (showNav
                ? "max-h-[232px] opacity-100"
                : "max-h-0 pointer-events-none opacity-0")
            }
          >
            <div className="flex space-y-[32px] flex-col">{links}</div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
