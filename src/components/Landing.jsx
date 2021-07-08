import React from "react";
import Button from "../utils/Button";

function Landing() {
  return (
    <section className="landing flex flex-col justify-center text-white">
      <manin className="container mx-auto">
        <div className="capitalize mb-5">
          <h1 className="text-5xl font-semibold">
            your <span className="text-blue-primary"> trusted source</span>
          </h1>
          <h1 className="text-5xl font-semibold">
            for <span className="lowercase">the</span> best insurance
          </h1>
        </div>
        <div className="mb-6 font-semibold">
          <p>Independent Insurance company that provides comprehensive</p>
          <p>business Insurance and personal insurance</p>
        </div>
        <Button type="primary">Get Started</Button>
      </manin>
    </section>
  );
}

export default Landing;
