import PropTypes from 'prop-types';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import timelineData, { years } from '../data/timelineData';

const EventItem = ({ event }) => {
  const [title, subtext] = event.split(':');

  return (
    <>
      <h3 className="text-lg mb-1 font-semibold">{title}</h3>
      {subtext && <p className="text-xs text-white/60">{subtext}</p>}
    </>
  );
};

EventItem.propTypes = {
  event: PropTypes.string.isRequired,
};

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const scrollRef = useRef(null);
  const selectedButtonRef = useRef(null);

  useEffect(() => {
    if (selectedButtonRef.current) {
      selectedButtonRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center', // Center the selected button
      });
    }
  }, [selectedYear]);

  const scroll = useCallback(
    (direction) => {
      if (scrollRef.current) {
        const currentScroll = Math.ceil(scrollRef.current.scrollLeft);
        const currentYearIdx = years.findIndex((year) => year == selectedYear);

        if (direction === 'start') scrollRef.current.scrollLeft = 0;
        else if (direction === 'end')
          scrollRef.current.scrollLeft =
            scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        else if (
          direction === 'left' &&
          currentScroll == 0 &&
          currentYearIdx > 0
        ) {
          setSelectedYear(years[currentYearIdx - 1]);
          setTimeout(() => scroll('end'), 50);
        } else if (
          direction === 'right' &&
          currentScroll >=
            Math.ceil(
              scrollRef.current.scrollWidth - scrollRef.current.clientWidth
            ) &&
          currentYearIdx < years.length - 1
        ) {
          setSelectedYear(years[currentYearIdx + 1]);
          scroll('start');
        } else {
          scrollRef.current.scrollBy({
            left: direction === 'left' ? -384 : 384,
            behavior: 'smooth',
          });
        }
      }
    },
    [selectedYear]
  );

  const timeLines =
    selectedYear == 'All'
      ? Object.values(timelineData).flat()
      : timelineData[selectedYear];

  return (
    <div className="container relative mt-[100px] flex w-full flex-col space-y-16">
      <div className="mx-auto text-center md:w-1/2 md:text-left">
        <Fade delay={10} duration={2000}>
          <p className="text-center text-[26px] font-semibold leading-[50px] text-[#FEFEFE]  md:text-[36px] lg:text-[44px]">
            DefiEdge Milestones
          </p>
          <p className="text-16px mx-auto mt-[20px] px-4 text-center text-gray-mid sm:mt-[25px] sm:w-[500px] md:px-0">
            A Journey Through Key Integrations, Collaborations, and Innovations
          </p>
        </Fade>
      </div>
      <div className="mb-8 flex items-center gap-4">
        <button
          className="h-8 w-8 rounded-full bg-white/30 p-2 ring hover:bg-white/40 hover:ring-default-blue/40"
          onClick={() => scroll('left')}
        >
          <FaArrowLeft />
        </button>
        <div className="flex flex-1 flex-nowrap justify-center gap-4 overflow-x-auto">
          {years.map((year) => (
            <button
              ref={selectedYear === year ? selectedButtonRef : null}
              key={year}
              onClick={() => (setSelectedYear(year), scroll('start'))}
              className={`py-2 px-4 ring-transparent ring${
                selectedYear === year
                  ? ' bg-default-blue text-white hover:bg-light-blue'
                  : ' bg-white/30 text-white/70 hover:ring-default-blue/40'
              } duration-400 rounded-full transition-all`}
            >
              {year}
            </button>
          ))}
        </div>
        <button
          className="h-8 w-8 rounded-full bg-white/30 p-2 ring hover:bg-white/40 hover:ring-default-blue/40"
          onClick={() => scroll('right')}
        >
          <FaArrowRight />
        </button>
      </div>

      <div>
        <div ref={scrollRef} className="flex overflow-x-auto py-8">
          <Fade delay={10} duration={2000}>
            {timeLines.map((item, index) => (
              <div
                key={item.date}
                className={`relative flex flex-col items-center gap-4`}
              >
                <div className="flex w-full items-center">
                  <div className="h-1 flex-1 bg-default-blue/50"></div>
                  <div className="whitespace-nowrap rounded-full bg-default-blue/50 py-2 px-4 text-white">
                    {item.date}
                  </div>
                  <div
                    className={`h-1 flex-1 ${
                      index < timeLines.length - 1 ||
                      selectedYear !== years[years.length - 1]
                        ? 'h-1 bg-default-blue/50'
                        : ''
                    }`}
                  />
                </div>
                <div className="flex w-[24rem] flex-col gap-2 px-3 ">
                  {item.events.map((event, idx) => (
                    <div
                      key={idx}
                      className=" w-fit rounded-xl bg-[#141541]/70 bg-opacity-30 bg-clip-padding p-4 ring-1 ring-[#3F4077]/30 backdrop-blur-xl backdrop-filter transition duration-200 hover:bg-[#141541]  hover:ring-[#3F4077]/80
                      
                      "
                    >
                      <EventItem event={event} />
                    </div>
                  ))}
                </div>
                {/* <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-default-blue"></div>
                {index < timelineData[selectedYear].length - 1 && (
                  <div className="absolute top-1/2 left-full h-1 w-16 bg-default-blue"></div>
                )} */}
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default memo(Timeline);
