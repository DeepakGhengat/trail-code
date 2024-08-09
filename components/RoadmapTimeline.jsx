'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import timeline from '../json/timeline.json';
import line from '../public/images/line.svg';
import ArrowIcon from './svgs/arrow.svg';

const ROADMAP_YEARS = ['All', '2024', '2023', '2022'];

//  '2021', '2020', '2019';

const RoadmapTimeline = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const setEqualHeights = useCallback((el) => {
    let counter = Math.max(...[...el].map((e) => e.offsetHeight));

    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  }, []);

  const [year, setYear] = useState('All');

  const events = useMemo(() => {
    if (year === 'All') {
      return timeline.events;
    } else {
      return timeline.events.filter((e) => e.month.includes(year)).flat();
    }
  }, [year]);

  useLayoutEffect(() => {
    const elH = document.querySelectorAll('.timeline li > div');
    setEqualHeights(elH);
  }, [events]);

  const handleHorizantalScroll = (
    element,
    speed = 25,
    distance,
    step = 2000
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);

    return () => {
      clearInterval(slideTimer);
    };
  };

  return (
    <>
      <div className="mt-[100px] flex w-full flex-col space-y-16">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center justify-between space-x-4">
            {ROADMAP_YEARS.map((y, i) => (
              <button
                key={i}
                className={clsx(
                  'text-sm appearance-none rounded-full px-4 py-2 outline-none',
                  y === year
                    ? 'bg-primary text-white'
                    : 'bg-[#53566B30] text-[#919191]'
                )}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between space-x-3">
            <button
              className="flex h-8 w-8 appearance-none items-center justify-center rounded-full bg-[#53566B] outline-none disabled:cursor-not-allowed"
              onClick={() =>
                handleHorizantalScroll(elementRef.current, 20, 200, -20)
              }
              disabled={arrowDisable}
            >
              <Image
                src={ArrowIcon.src}
                alt="left_arrow"
                className={clsx('opacity-50', arrowDisable && 'opacity-20')}
                width={16}
                height={16}
              />
            </button>
            <button
              className="flex h-8 w-8 appearance-none items-center justify-center rounded-full bg-[#53566B] outline-none"
              onClick={() =>
                handleHorizantalScroll(elementRef.current, 20, 200, 20)
              }
            >
              <Image
                src={ArrowIcon.src}
                alt="right_arrow"
                className="rotate-180 opacity-50"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
        <section className="timeline w-full px-0 py-8">
          <ol ref={elementRef}>
            {events &&
              events.map((e, i) => (
                <li
                  key={i}
                  className="group relative before:transition-all hover:before:!bg-primary"
                >
                  <div className="transition-colors duration-75 ease-in-out hover:text-primary group-hover:cursor-pointer">
                    <time className="!text-[#919191] group-hover:!text-white">
                      {e.month}
                    </time>
                    {e.activities.slice(0, 1).join('\n')}
                  </div>
                </li>
              ))}
            <li></li>
          </ol>
        </section>
      </div>
      <div className="mt-[40px] sm:mt-[70px]">
        <Image type="image" className="h-[31px] w-[111px]" alt="" src={line} />
      </div>
    </>
  );
};

export default RoadmapTimeline;
