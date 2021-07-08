import React from "react";
import missionImg from "../img/pexels-mikhail-nilov-7731322.jpg";
import visionImg from "../img/krakenimages-Y5bvRlcCx8k-unsplash.jpg";

function WhyChooseUs() {
  return (
    <div className="why-choose-bg">
      <main className="container mx-auto flex flex-col gap-16 ">
        <div className="flex flex-col gap-5 text-center font-semibold">
          <h2 className="capitalize text-blue-primary text-3xl">why choose us</h2>
          <div>
            <p>
              An Independent insurance compant that focuses on you.We believe
              you deserve top quality indiduals{" "}
            </p>
            <p>
              and expertise from our office andthat is the foundation on which
              we have built our teams
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4">
          <figure className="flex flex-col sm:max-w-full md:max-w-2.25/5">
            <div className="flex justify-start h-1/2">
              <img src={missionImg} alt={""} className="object-cover w-full" />
            </div>
            <figcaption className="flex flex-col gap-8 bg-white font-semibold py-8 px-4 max-h-1/2">
              <span className="text-3xl capitalize text-blue-primary">
                our mission.
              </span>
              <p>
                An Independent insurance compant that focuses on you.We believe
                you deserve top quality indiduals and expertise from our office
                andthat is the foundation on which we have built our teams
              </p>
            </figcaption>
          </figure>
          <figure className="flex flex-col sm:max-w-full md:max-w-2.25/5">
            <div className="flex justify-start h-1/2">
              <img src={visionImg} alt={""} className="object-cover w-full" />
            </div>
            <figcaption className="flex flex-col gap-8 bg-white font-semibold py-8 px-4 max-h-1/2">
              <span className="text-3xl capitalize text-blue-primary">
                our vision.
              </span>
              <p>
                An Independent insurance compant that focuses on you.We believe
                you deserve top quality indiduals and expertise from our office
                andthat is the foundation on which we have built our teams
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="flex flex-wrap justify-center sm:-mt-64 md:-mt-80 gap-4 pb-16">
          <div className="flex flex-col text-center text-white font-semibold w-full sm:border-b-2 md:border-r-2 md:border-b-0  md:max-w-1/5">
            <span className="text-4xl">1567</span>
            <span className="text-md">SatisFied Clients</span>
          </div>
          <div className="flex flex-col text-center text-white font-semibold w-full sm:border-b-2 md:border-r-2 md:border-b-0  md:max-w-1/5">
            <span className="text-4xl">10+</span>
            <span className="text-md">Years of Experience</span>
          </div>
          <div className="flex flex-col text-center text-white font-semibold w-full sm:border-b-2 md:border-r-2 md:border-b-0 md:max-w-1/5">
            <span className="text-4xl">8</span>
            <span className="text-md">Professional Agents</span>
          </div>
          <div className="flex flex-col text-center text-white font-semibold w-full sm:border-b-2 md:border-r-2 md:border-b-0 md:max-w-1/5">
            <span className="text-4xl">100%</span>
            <span className="text-md">Insurance Approval</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WhyChooseUs;
