import React from "react";
// import logo from "../assets/logo.svg";
import logomy from "../assets/logomy.png";

const Header = () => {
  const handleClick = () => {
    const phoneNumber = "94701392180"; // Replace with your number in international format
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#">
            <img src={logomy} alt="" className="mx-8 w-[120px] h-[60px]" />
          </a>
          {/* button */}
          <button onClick={handleClick} className="btn btn-sm">
            Work with me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
