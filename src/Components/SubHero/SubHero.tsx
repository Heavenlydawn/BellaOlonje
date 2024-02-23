import React from "react";
import Image from "next/image";
import Line from "../../../public/Images/line.png";
import Image1 from "../../../public/Images/Image1.png";
import Image2 from "../../../public/Images/Image2.png";
import Image3 from "../../../public/Images/Image3.png";

const SubHero = () => {
  return (
    <div className="my-8 sm:my-12 lg:my-16">
      <div className="text-center">
        <Image src={Line} alt="Line" width={1000} className="mx-auto" />
        <h1 className="text-3xl font-bold my-6 sm:my-8 lg:my-10">
          How the app works
        </h1>
      </div>

      <div className="flex flex-col-reverse sm:flex-row lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">
        <div className="w-full sm:w-1/2 lg:w-1/2">
          <Image src={Image1} alt="Image direction" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2">
          <h3 className="text-[#FA4A0C] font-bold text-2xl sm:text-3xl lg:text-4xl my-4 sm:my-6 lg:my-8">
            Create an account
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#252B42] font-bold my-3 sm:my-4 lg:my-5 leading-[45px] sm:leading-[50px] lg:leading-[60px]">
            Create/Login to an existing account to get started
          </h2>
          <p className="text-xl sm:text-2xl lg:text-2xl text-[#737373] w-full sm:w-[400px] lg:w-[400px]">
            An account is created with your email and a desired password
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">
        <div className="w-full sm:w-1/2 lg:w-1/2">
          <h3 className="text-[#FA4A0C] font-bold text-2xl sm:text-3xl lg:text-4xl my-4 sm:my-6 lg:my-8">
            Explore varieties
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#252B42] font-bold my-3 sm:my-4 lg:my-5 leading-[45px] sm:leading-[50px] lg:leading-[60px]">
            Shop for your favorites meal as e dey hot.
          </h2>
          <p className="text-xl sm:text-2xl lg:text-2xl text-[#737373] w-full sm:w-[400px] lg:w-[400px]">
            Shop for your favorite meals or drinks and enjoy while doing it.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2">
          <Image src={Image2} alt="Image direction" />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">
        <div className="w-full sm:w-1/2 lg:w-1/2">
          <Image src={Image3} alt="Image direction" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2">
          <h3 className="text-[#FA4A0C] font-bold text-2xl sm:text-3xl lg:text-4xl my-4 sm:my-6 lg:my-8">
            Checkout
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#252B42] font-bold my-3 sm:my-4 lg:my-5 leading-[45px] sm:leading-[50px] lg:leading-[60px]">
            When you're done, check out and get it delivered.
          </h2>
          <p className="text-xl sm:text-2xl lg:text-2xl text-[#737373] w-full sm:w-[400px] lg:w-[400px]">
            When you're done, check out and get it delivered with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
