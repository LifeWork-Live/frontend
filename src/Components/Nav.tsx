import React from "react";

const Nav = () => {
  return (
    <>
      <div className=" flex  h-[96px] w-full items-center justify-between  p-[24px]  ">
        {/* Left section */}
        <div className="flex gap-[10px]">
          <img src="/image/lifework.svg"></img>
        </div>

        {/* Navigation links */}
        <div className="flex xl:gap-[50px] md:gap-[25px]">
          <a
            href="/"
            className="relative "
          >
            Home
          </a>
          <a
            href="/"
            className="relative "
          >
            Explorers
          </a>
          <a
            href="/"
            className="relative "
          >
            Organizations
          </a>
          <a
            href="/"
            className="relative "
          >
           About Us
          </a>
         
        </div>

        {/* Right section */}
        <div className="flex  gap-[20px]">
          <a
            href="#signin"
            className="flex items-center justify-center"
          >
            Sign In
          </a>
          <a
            href="#register"
            className="flex items-center justify-center"
          >
            Register
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
