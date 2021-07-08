import React from "react";

function Header() {
  return (
    <header className="container flex flex-wrap h-28 w-full mx-auto py-3 text-black items-center justify-between">
      <a href="/">
      <div className="logo capitalize">
        <div className="text-5xl text-blue-primary">landing</div>
        <span className="font-semibold">insurance agency</span>
      </div>
      </a>
      <nav >
        <div className="flex flex-wrap justify-start font-semibold">
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
    </header>
  );
}

export default Header;
