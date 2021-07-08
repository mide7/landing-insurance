import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <main className="testimonial-bg">
      <div className="container mx-auto flex flex-col">
        <div className="mt-8 flex flex-col gap-8 text-center items-center font-semibold">
          <h2 className="capitalize text-blue-primary text-3xl">
            testimonials
          </h2>
          <figure className="bg-white max-w-3/4 flex flex-col gap-8 pt-12 px-12 mb-12 shadow-md">
            <div>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
            </div>
            <figcaption className="text-blue-primary">----- Micheal Steve</figcaption>
            <div className='mb-4'>
              <FontAwesomeIcon icon={faCircle} className='text-xs text-gray-300 mx-2'/>
              <FontAwesomeIcon icon={faCircle} className='text-xs text-gray-300 mx-2'/>
              <FontAwesomeIcon icon={faCircle} className='text-xs text-blue-primary mx-2'/>
              <FontAwesomeIcon icon={faCircle} className='text-xs text-gray-300 mx-2'/>
              <FontAwesomeIcon icon={faCircle} className='text-xs text-gray-300 mx-2'/>
            </div>
          </figure>
        </div>
      </div>
    </main>
  );
}

export default Testimonials;
