import React from "react";

function Button(props) {
  const classType =
    props.type === "primary"
      ? "bg-blue-primary text-white  hover:bg-white hover:text-blue-primary hover:border-blue-700 hover:border"
      : props.type === "secondary"
      ? " bg-white text-blue-primary  hover:bg-blue-primary hover:text-white hover:border-white hover:border"
      : "bg-blue-primary text-white  hover:bg-white hover:text-blue-primary hover:border-blue-700 hover:border";
  return (
    <button
      className={`text-xl py-3 px-8 font-semibold capitalize border border-transparent ${classType}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
