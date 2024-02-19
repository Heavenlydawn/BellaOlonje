"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/Images/Logo.png";

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div className="flex justify-between items-center py-5">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>

      <div className={`lg:hidden ${isNavOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center gap-4 text-xl font-medium">
          <li className="hover:text-[#FA4A0C] cursor-pointer">Home</li>
          <li className="hover:text-[#FA4A0C] cursor-pointer">Product</li>
          <li className="hover:text-[#FA4A0C] cursor-pointer">Faq</li>
          <li className="hover:text-[#FA4A0C] cursor-pointer">Contact</li>
        </ul>
      </div>

      <div>
       <ul className="lg:flex hidden items-center gap-8 text-xl font-medium">
       <li className="hover:text-[#FA4A0C] cursor-pointer">Home</li>
        <li className="hover:text-[#FA4A0C] cursor-pointer">Product</li>
        <li className="hover:text-[#FA4A0C] cursor-pointer">Faq</li>
        <li className="hover:text-[#FA4A0C] cursor-pointer">Contact</li>
       </ul>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="lg:hidden cursor-pointer" onClick={toggleNav}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
