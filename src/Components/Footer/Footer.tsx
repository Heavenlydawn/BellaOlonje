import React from "react";
import Buttons from "../Buttons/Buttons";
import Image from "next/image";
import Logo from "../../../public/Images/Logo.png";
import Twitter from "../../../public/Images/Twitter.png";
import Facebook from "../../../public/Images/Facebook.png";
import Instagram from "../../../public/Images/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div className="md:w-[860px] mx-auto text-white py-[100px]">
          <div className="text-center">
            <h3 className="text-5xl font-bold my-5">Download the app now.</h3>
            <p className="text-xl ">
              Available on your favorite store. Start your premium experience
              now
            </p>
          </div>

         <Buttons />
        </div>
      </div>

      <div className="flex md:justify-around items-center flex-col md:flex-row py-10 gap-10 md:gap-0">
        <Image src={Logo} alt="Logo" />

        <div className="flex gap-4 items-center">
          <Image src={Twitter} alt="Twitter" />
          <Image src={Facebook} alt="Facebook" />
          <Image src={Instagram} alt="Instagram" />
        </div>

        <p>Copywright 2020 Bella Onojie.com</p>
      </div>
    </footer>
  );
};

export default Footer;
