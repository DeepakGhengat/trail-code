import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
// import allMentors from "../data/mentors.js";
import { Fade } from 'react-reveal';

// import PropTypes from "prop-types";
import allPartners from '../data/ecosystemPartners.js';
import Circle from '../public/images/bg-ecosystem.svg';

// LoadMoreButton.propTypes = {
//   active: PropTypes.bool.isRequired,
// };

// export function LoadMoreButton({ active, ...props }) {
//   return (
//     <button
//       {...props}
//       className="px-5 py-2 bg-default-blue/20 border border-default-blue rounded-full space-x-2 inline-flex items-center text-base leading-7"
//     >
//       <svg
//         className={active ? "rotate-180" : undefined}
//         width="25"
//         height="24"
//         viewBox="0 0 25 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M12.5 5V19"
//           stroke="white"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M19.5 12L12.5 19L5.5 12"
//           stroke="white"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>

//       <span> {active ? "Show less" : "Load more"}</span>
//     </button>
//   );
// }

// const INITIAL_ITEMS_TO_SHOW = 8;

export default function EcoSystemPage() {
  const input = useRef(null);

  // const [{ /* showAllPartners, */ searchInput }, dispatch] = useReducer(
  //   (state, newState) => ({ ...state, ...newState }),
  //   {
  //     // showAllPartners: true,
  //     searchInput: "",
  //   }
  // );

  // const searchText = searchInput.trim().toLowerCase();

  // const partners = useMemo(
  //   () =>
  //     allPartners
  //       // .slice(0, showAllPartners ? undefined : INITIAL_ITEMS_TO_SHOW)
  //       .filter(
  //         (e) =>
  //           e.name.toLowerCase().includes(searchText) ||
  //           e.desc.toLowerCase().includes(searchText)
  //       ),
  //   [/* showAllPartners, */ searchInput]
  // );

  useEffect(() => {
    if (!input.current) return;

    function focusToInput(ev) {
      if (ev.key != '/') return;

      input.current.focus();
      document.body.scrollIntoView({ behavior: 'smooth' });
      ev.preventDefault();
    }

    document.addEventListener('keypress', focusToInput);
    return () => document.removeEventListener('keypress', focusToInput);
  }, [input]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* className="border-b border-white/[0.08]" */}
      <section>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-gradient mt-20 mb-3 max-w-[588px] text-[30px] font-semibold leading-[41px] md:text-[44px]  md:leading-[127%] ">
            Explore the DefiEdge Ecosystem
          </h1>
          <p className="mb-10 max-w-[500px] text-base leading-7 text-white/60 md:mb-20">
            Swap, earn, vote, and more with hundreds of DeFi apps, integrations,
            and tools built on the Uniswap Protocol.
          </p>
          {/* <div className="focus-within:ring rounded px-5 py-[10px] border border-white/40 bg-[#d9d9d9]/10 mb-20">
            <input
              ref={input}
              type="text"
              value={searchInput}
              onInput={(e) => {
                // const showButtons = !!e.target.value.trim();

                dispatch({
                  searchInput: e.target.value,
                  // showAllPartners: showButtons,
                  // showAllAuditors: showButtons,
                  // showAllMentors: showButtons,
                });
              }}
              className="!outline-none bg-transparent text-base leading-6 placeholder:text-white/50"
              placeholder="⌘/ Search"
            />
          </div> */}
        </div>
      </section>
      {/* {!partners.length && (
        <div className="container py-12 mx-auto text-center text-base leading-6 font-medium text-white/60 mb-3">
          {`No result for "${searchInput.trim()}"`}
        </div>
      )} */}
      {/* {!!partners.length && ( */}
      <Fade>
        <section className="container mb-12 px-5 md:mb-[120px] ">
          <div className="mb-4 grid grid-cols-2 gap-4 md:mb-6  md:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-5 ">
            {allPartners.map((e) => (
              <Fade key={e.name}>
                <div className="bg-ecosystem-card flex space-x-3 rounded-lg py-6 px-4 hover:border hover:border-gray-700">
                  <div
                    className={(
                      'relative h-[40px] w-[40px] overflow-hidden' +
                      ' ' +
                      (e.logo
                        ? ''
                        : 'flex items-center justify-center !rounded-md bg-white/10') +
                      ' ' +
                      (e.rounded ? 'rounded-full' : 'rounded-sm')
                    ).trim()}
                    style={{ backgroundColor: e.background }}
                  >
                    {e.logo ? (
                      <Image
                        className="rounded-full"
                        src={e.logo}
                        objectFit="contain"
                        layout="fill"
                      />
                    ) : (
                      <span className="text-base font-medium leading-5 tracking-wider text-white">
                        {e.name
                          .split(' ')
                          .map((e) => e[0])
                          .join('')}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 ">
                    <h4 className="mb-1 text-lg font-semibold leading-5 tracking-wide text-gray-300">
                      {e.name}
                    </h4>
                    <h4 className="mt-2 text-sm leading-4 tracking-wide text-white/60">
                      {e.desc}
                    </h4>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          {/* {INITIAL_ITEMS_TO_SHOW < allPartners.length && !searchText && (
              <div className="flex justify-center">
                <LoadMoreButton
                  active={showAllPartners}
                  onClick={() =>
                    dispatch({ showAllPartners: !showAllPartners })
                  }
                />
              </div>
            )} */}
        </section>
      </Fade>
      {/* )} */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full w-screen opacity-60">
        <Image
          src={Circle.src}
          layout="fill"
          objectFit="cover"
          objectPosition={'top'}
        />
      </div>
    </div>
  );
}
