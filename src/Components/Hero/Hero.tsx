import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/Images/HeroImage2.png";
const Hero = () => {
  return (
    <div id="hero">
      <div className="text-[#F6F6F6] py-[100px] w-[1000px] mx-auto text-center">
        <p className="text-3xl font-semibold my-5">Food app</p>
        <h1 className="text-7xl font-bold my-5 leading-[70px]">
          Why stay hungry when you can order form Bella Onojie
        </h1>
        <p className="text-3xl my-5">
          Download the bella onoje’s food app now on
        </p>

        <div className="flex items-center gap-4 justify-center my-12">
          <button className="py-4 px-5 text-3xl font-semibold bg-[#FA4A0C] w-[236px] rounded-[20px]">
            Playstore
          </button>
          <button className="py-4 px-5 text-3xl font-semibold border-white border-2 w-[236px] rounded-[20px]">
            App store
          </button>
        </div>

        <div className="-my-[150px]">
          <Image src={HeroImage} alt="Belle Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
