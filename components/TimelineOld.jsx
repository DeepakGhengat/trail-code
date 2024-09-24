import './App.css'; // Make sure to import your Tailwind CSS file

import React, { useEffect, useRef, useState } from 'react';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const midLine = window.innerHeight / 2;
      setIsSectionInView(sectionTop <= 0);

      if (timelineRef.current && sectionTop <= 0) {
        const timelineItems = Array.from(
          timelineRef.current.querySelectorAll('.timeline-item')
        );

        const closestItem = timelineItems.reduce((prev, item, index) => {
          const rect = item.getBoundingClientRect();
          const offset = Math.abs(rect.top - midLine);

          if (prev === null || offset < prev.offset) {
            return { index, offset };
          }
          return prev;
        }, null);

        if (closestItem !== null) {
          setActiveIndex(closestItem.index);
        } else {
          setActiveIndex(null);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Other Stuff */}
      <div className="bg-gray-200 p-8">Content Above Timeline</div>

      <div ref={sectionRef} className="relative h-screen bg-gray-100">
        {isSectionInView && (
          <div className="fixed top-5 left-5 rounded bg-white p-2 shadow">
            {activeIndex !== null
              ? `Active Item: ${activeIndex + 1}`
              : 'Scroll to see changes'}
          </div>
        )}
        <div ref={timelineRef} className="mx-auto w-1/2">
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-300"></div>
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="timeline-item relative mb-20 pl-8">
                <div
                  className={`absolute left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full ${
                    activeIndex === index ? 'bg-blue-500' : 'bg-gray-500'
                  }`}
                  style={{ top: '50%' }}
                ></div>
                <div
                  className={`ml-8 rounded bg-white p-4 shadow ${
                    activeIndex === index ? 'text-blue-500' : ''
                  }`}
                >
                  <h3 className="font-bold">Item {index + 1}</h3>
                  <p className="mt-2">
                    This is the content for item {index + 1}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Other Stuff Below Timeline */}
      <div className="bg-gray-200 p-8">Content Below Timeline</div>
    </div>
  );
};

export default Timeline;
