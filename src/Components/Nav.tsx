import React, { useState } from "react";

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      {/* desktop */}
      <div className="flex flex-col">
        <div className="hidden xl:flex md:flex h-[96px] w-full items-center justify-between  p-[24px] border-b border-b-[#A9A9A9] ">
          {/* Left section */}
          <div className="">
            <img src="/image/lifework.svg"></img>
          </div>

          {/* Navigation links */}
          <div className="flex xl:gap-[50px] md:gap-[10px]">
            <a
              href="/"
              className="text-[#013A56] font-montserrat font-medium text-[18px] relative hover:after:border-b-[3px] hover:after:border-b-[#3686C7] hover:after:block hover:after:w-full hover:after:absolute hover:after:left-0 hover:after:bottom-0  hover:text-[#3686C7]"
            >
              Home
            </a>
            <a
              href="/explorers"
              className="text-[#013A56] font-montserrat font-medium text-[18px] relative hover:after:border-b-[3px] hover:after:border-b-[#3686C7] hover:after:block hover:after:w-full hover:after:absolute hover:after:left-0 hover:after:bottom-0  hover:text-[#3686C7]"
            >
              Explorers
            </a>
            <a
              href="/organizations"
              className="text-[#013A56] font-montserrat font-medium text-[18px] relative hover:after:border-b-[3px] hover:after:border-b-[#3686C7] hover:after:block hover:after:w-full hover:after:absolute hover:after:left-0 hover:after:bottom-0  hover:text-[#3686C7]"
            >
              Organizations
            </a>
            <a
              href="/"
              className="text-[#013A56] text-wrap font-montserrat font-medium text-[18px] relative hover:after:border-b-[3px] hover:after:border-b-[#3686C7] hover:after:block hover:after:w-full hover:after:absolute hover:after:left-0 hover:after:bottom-0  hover:text-[#3686C7]"
            >
              About Us
            </a>
          </div>

          {/* Right section */}
          <div className="flex justify-evenly items-center xl:w-[311px] md:w-[200px] md:gap-[10px] xl:gap-[24px]">
            <a>
              <img src="/image/bell.svg"></img>
            </a>
            <a
              href="#signin"
              className="flex items-center justify-center border w-[128px] h-[48px] rounded-[8px] border-[#3686C7] text-[#013A56] font-montserrat font-medium text-[18px] hover:border-none hover:bg-[#3686C7] hover:text-white"
            >
              Sign In
            </a>
            <a
              href="#register"
              className="flex items-center justify-center border w-[128px] h-[48px] rounded-[8px] border-[#3686C7] text-[#013A56] font-montserrat font-medium text-[18px] hover:border-none hover:bg-[#3686C7] hover:text-white"
            >
              Register
            </a>
          </div>
        </div>
        <div className="relative hidden xl:flex md:flex">
          <a><img src="/image/ai.svg" className="absolute top-0 right-0"></img></a>
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden flex flex-row  items-center px-[16px] py-[12px] justify-between border-b border-b-[#A9A9A9]">
        <div className="flex flex-row ">
          {/* Hamburger icon */}
          <button onClick={toggleMobileMenu} className="">
            <img
              src="/image/hamburger.svg"
              alt="menu"
              className="cursor-pointer"
            />
          </button>
          <img src="/image/mobilelifework.svg"></img>
        </div>
        <div className="flex flex-row w-[83px] justify-evenly items-center gap-[20px]">
          <a>
            <img src="/image/bell.svg"></img>
          </a>
          <a>
            <img src="/image/profile.svg"></img>
          </a>
        </div>
      </div>

      {/* dropdown */}
      {showMobileMenu && (
        <div className="md:hidden flex flex-col absolute left-0 w-[40%] text-left gap-[36px] p-5 bg-[#cac4c4aa] rounded-[10px] z-30 ml-[20px]">
          <a
            href="/"
            className="text-[#013A56] font-montserrat font-medium text-[18px] relative hover:after:border-b-[3px] hover:after:border-b-[#3686C7] hover:after:block hover:after:w-full hover:after:absolute hover:after:left-0 hover:after:bottom-0  hover:text-[#3686C7]"
          >
            Home
          </a>
          <a
            href="/explorers"
            className="text-[#013A56] font-montserrat font-medium text-[18px] relative hover:after:border-b-[3px] hover:after:border-b-[#3686C7] hover:after:block hover:after:w-full hover:after:absolute hover:after:left-0 hover:after:bottom-0  hover:text-[#3686C7]"
          >
            Explorers
          </a>
          <a
            href="/organizations"
            className="text-[#013A56] font-montserrat font-medium text-[18px] relative hover:after:border-b-[3px] hover:after:border-b-[#3686C7] hover:after:block hover:after:w-full hover:after:absolute hover:after:left-0 hover:after:bottom-0  hover:text-[#3686C7]"
          >
            Organizations
          </a>
          <a
            href="/"
            className="text-[#013A56] font-montserrat font-medium text-[18px] relative hover:after:border-b-[3px] hover:after:border-b-[#3686C7] hover:after:block hover:after:w-full hover:after:absolute hover:after:left-0 hover:after:bottom-0  hover:text-[#3686C7]"
          >
            About Us
          </a>
          <a
            href="#signin"
            className="text-[#013A56] font-montserrat font-medium text-[18px]"
          >
            Sign In
          </a>
          <a
            href="#register"
            className="text-[#013A56] font-montserrat font-medium text-[18px]"
          >
            Register
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
