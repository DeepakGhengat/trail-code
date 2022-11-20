// * Import Required Thirdparty Libraries
import Fade from "react-reveal/Fade";
import React from "react";

//* Import Components Required
import StrategyManagerCard from "./StrategyManagerCard";

function Subscribe() {
  return (
    <div>
      <Fade duration={2000}>
        <section className="sm:mt-[140px] mt-[120px]">
          <StrategyManagerCard />
        </section>
      </Fade>
    </div>
  );
}

export default Subscribe;
