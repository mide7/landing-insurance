import React from "react";
import WhatSetsUs from "./WhatSetsUs";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";

function About() {
  return (
    <section>
      <div className="py-16 flex flex-col gap-16">
        <WhoWeAre />
        <WhatSetsUs />
        <WhyChooseUs />
      </div>
    </section>
  );
}

export default About;
