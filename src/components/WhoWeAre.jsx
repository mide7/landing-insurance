import React from "react";
import AboutCards from "./AboutCards";
import statsSvg from "../img/stats.svg";
import personalSvg from "../img/customer (1).svg";
import privateSvg from "../img/life-insurance.svg";

function WhoWeAre() {
  return (
    <div className="container mx-auto flex flex-col gap-16">
      <div className="flex flex-col gap-5 text-center font-semibold">
        <h2 className="text-blue-primary text-3xl">Who We Are</h2>
        <div>
          <p>
            An Independent insurance company that focuses on you. We believe you
            deserve top quality individuals
          </p>
          <p>
            and expertise from our office and that is the foundation on which we
            have built our teams
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-center md:justify-between gap-6">
        <AboutCards imgsrc={statsSvg} title="business insurance" />
        <AboutCards imgsrc={personalSvg} title="personal insurance" />
        <AboutCards imgsrc={privateSvg} title="private client services" />
      </div>
    </div>
  );
}

export default WhoWeAre;
