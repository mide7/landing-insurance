import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <header className="container flex flex-wrap h-28 w-full mx-auto py-3 text-black items-center justify-between px-2">
      <a href="/">
        <div className="logo capitalize">
          <div className="text-5xl text-blue-primary">landing</div>
          <span className="font-semibold">insurance agency</span>
        </div>
      </a>
      <nav className="">
        <button
          className="md:hidden p-1 text-2xl text-blue-primary"
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="hidden md:flex flex-wrap justify-start font-semibold">
          <a href="#." className="mx-2 p-2 capitalize hover:text-blue-primary">
            about
          </a>
          <a href="#." className="mx-2 p-2 capitalize  hover:text-blue-primary">
            business insurance
          </a>
          <a href="#." className="mx-2 p-2 capitalize  hover:text-blue-primary">
            personal insurance
          </a>
          <a href="#." className="mx-2 p-2 capitalize  hover:text-blue-primary">
            contact us blog
          </a>
          <a
            href="#."
            className="mx-2 p-2 pr-0 uppercase  hover:text-blue-primary"
          >
            covid-19
          </a>
        </div>
      </nav>
      {showNav && (
        <nav className="fixed inset-0 overflow-hidden md:hidden z-50">
          <div className="absolute w-full h-full  flex flex-col justify-center items-center gap-8 bg-blue-primary text-white">
            <button
              className="absolute top-4 right-4 text-2xl px-4 py-3"
              onClick={() => setShowNav(!showNav)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <a href="#." className="mx-2 p-2 capitalize text-2xl">
              about
            </a>
            <a href="#." className="mx-2 p-2 capitalize  text-2xl">
              business insurance
            </a>
            <a href="#." className="mx-2 p-2 capitalize  text-2xl">
              personal insurance
            </a>
            <a href="#." className="mx-2 p-2 capitalize  text-2xl">
              contact us blog
            </a>
            <a href="#." className="mx-2 p-2 pr-0 uppercase  text-2xl">
              covid-19
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
