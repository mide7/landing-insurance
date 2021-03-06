import React from "react";
import Button from "../utils/Button";
import scott from "../img/scott-graham-5fNmWej4tAA-unsplash.jpg"

function WhatSetsUs() {
  return (
    <div className="text-white what-sets-us-apart md:mt-20">
      <div className="container mx-auto flex flex-col md:flex-row gap-10">
        {/* <div className='px-1'>
          <img src={scott} alt="" className='scott-img w-full'/>
        </div> */}
        <div className='h-full w-full md:w-4/5 md:relative flex px-2  pt-2 md:pt-0'>
          <img src={scott} alt="" className='scott-img'/>
        </div>
        <div className="flex  flex-col gap-8 py-12 px-2">
          <h2 className="text-3xl capitalize font-semibold">
            what sets us apart.
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop
          </p>
          <div className='mb-28'>
            <Button type="secondary">get started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatSetsUs;
