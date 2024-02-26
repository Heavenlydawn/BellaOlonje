import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/Images/HeroImage2.png";
import ButtonHero from "../Buttons/ButtonHero";
const Hero = () => {
  return (
    <div id="hero" className="text-[#F6F6F6] py-8 lg:py-16 xl:py-20">
      <div className="mx-auto text-center px-4 sm:px-6 md:px-8 lg:w-[800px] xl:w-[1000px]">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold my-2 sm:my-4 lg:my-5">
          Food app
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold my-2 sm:my-4 lg:my-5 leading-tight">
          Why stay hungry when you can order from Bella Onojie
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl my-2 sm:my-4 lg:my-5">
          Download the Bella Onojie’s food app now on
        </p>

       <ButtonHero />

        <div className="-my-8 sm:-my-12 lg:-my-[200px]">
          <Image src={HeroImage} alt="Bella Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
