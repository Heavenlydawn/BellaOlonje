import React from "react";
import Image from "next/image";
import Logo from "../../../public/Images/Logo.png";
const Header = () => {
  return (
    <div className="flex justify-around items-center py-5">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>

      <div>
        <ul
          className="flex justify-around items-center gap-8 text-xl font-medium">
          <li className="hover:text-[#FA4A0C] cursor-pointer">Home</li>
          <li className="hover:text-[#FA4A0C] cursor-pointer">Product</li>
          <li className="hover:text-[#FA4A0C] cursor-pointer">Faq</li>
          <li className="hover:text-[#FA4A0C] cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
