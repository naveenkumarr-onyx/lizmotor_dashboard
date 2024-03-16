import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="flex p-[10px] justify-around glass">
      <h1 className="text-[20px] gap-[10px]">
        LI<span className="text-[#ff793f] font-bold">Z MOTORS</span>
      </h1>
      <div className=" flex items-center gap-[5px]">
        <div className="flex gap-[10px] text-[20px] ">
          <a
            href="https://github.com/naveenkumarr-onyx"
            target="_blank"
            className="hover:scale-150 duration-1000"
            rel="noopener noreferrer"
          >
            <FaSquareGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/naveen-kumar-128955225/"
            target="_blank"
            className="hover:scale-150 duration-1000"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:naveenkumarramalingam2205@gmail.com"
            target="_blank"
            className="hover:scale-150 duration-1000"
            rel="noopener noreferrer"
          >
            <SiGmail />
          </a>
        </div>
        |
        <div className="hover:scale-110 duration-1000">
          <button className="shadow-md bg-[#ff793f] px-[5px] py-[5px] rounded-lg text-black">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
