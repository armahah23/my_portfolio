import React from "react";
// Import (cons
import { BiBriefcase, BiClipboard, BiHomeAlt, BiUser } from "react-icons/bi";
//Work
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsFillChatSquareTextFill,
  BsChatSquareText,
} from "react-icons/bs";
// link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-3 lg:bottom-3 w-full overflow-hidden z-50">
      <div className="container mx-auto w-[100%] flex items-center justify-center">
        {/*nav inner */}
        <div
          className="w-full bg-black/20 h-[55px] backdrop-blur-2xl rounded-full max-w-[460px] px-5 flex 
        justify-between items-center text-white/50"
        >
          <Link
            to="home"
            activeClass="active"
            smooth="true"
            spy="true"
            offset={-200}
            className="cursor-pointer w-[50px] h-[40px] flex justify-center items-center "
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth="true"
            spy="true"
            className="cursor-pointer w-[50px] h-[40px] flex justify-center items-center "
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth="true"
            spy="true"
            className="cursor-pointer w-[50px] h-[40px] flex justify-center items-center "
          >
            <BiClipboard />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth="true"
            spy="true"
            className="cursor-pointer w-[50px] h-[40px] flex justify-center items-center "
          >
            <BiBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth="true"
            spy="true"
            className="cursor-pointer w-[50px] h-[40px] flex justify-center items-center "
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
