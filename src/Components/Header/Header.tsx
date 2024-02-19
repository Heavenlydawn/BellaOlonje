import React from "react";
import Image from "next/image";
import Logo from "../../../public/Images/Logo.png";
const Header = () => {
  return (
    <div className="flex justify-around items-center">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Faq</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
