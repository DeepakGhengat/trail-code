import React from 'react';
import Fade from 'react-reveal/Fade';

import StrategyManagerCard from './StrategyManagerCard';

function Subscribe() {
  return (
    <div>
      <Fade duration={2000}>
        <section className="mt-[120px] sm:mt-[140px]">
          <StrategyManagerCard />
        </section>
      </Fade>
    </div>
  );
}

export default Subscribe;
