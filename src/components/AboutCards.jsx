import React from "react";
import Button from "../utils/Button";

function AboutCards(props) {
  return (
    <figure className="flex flex-col justify-center px-28 mx-2 md:mx-0 py-8 gap-5 rounded-lg shadow-active">
      <div className='flex justify-center'>
        <img src={props.imgsrc} alt={props.title} width="100" />
      </div>
      <figcaption className="text-center capitalize font-bold">{props.title}</figcaption>
      <Button type="primary">learn more</Button>
    </figure>
  );
}

export default AboutCards;
