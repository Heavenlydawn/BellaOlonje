"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/Images/Logo.png";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <header className="px-8 ">
        <nav className="flex items-center justify-between">
          <div className="md:w-[200px] w-[100px]">
            <Image src={Logo} alt="Logo" />
          </div>
          <div>
            <ul className="hidden md:flex items-center gap-4 text-xl font-medium p-8">
              <li className="hover:text-[#FA4A0C] cursor-pointer">Home</li>
              <li className="hover:text-[#FA4A0C] cursor-pointer">Product</li>
              <li className="hover:text-[#FA4A0C] cursor-pointer">Faq</li>
              <li className="hover:text-[#FA4A0C] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            mobileMenuOpen ? "block" : "hidden"
          } absolute top-0 left-0 h-screen w-2/3 bg-[#252525] z-50 transform transition-transform ease-in-out duration-300`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-6 text-white">
            <div>
              <Image src={Logo} alt="Logo" width={100} height={100} />
            </div>
            <p className="hover:text-[#FA4A0C] cursor-pointer">Home</p>
            <p className="hover:text-[#FA4A0C] cursor-pointer">Product</p>
            <p className="hover:text-[#FA4A0C] cursor-pointer">Faq</p>
            <p className="hover:text-[#FA4A0C] cursor-pointer">Contact</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
