import React from "react";
import Image from "next/image";
import Line from "../../../public/Images/line.png";
import Image1 from "../../../public/Images/Image1.png";
import Image2 from "../../../public/Images/Image2.png";
import Image3 from "../../../public/Images/Image3.png";

const SubHero = () => {
  return (
    <div className="my-[60px]">
      <div className="text-center">
        <Image src={Line} alt="Line" width={1000} className="mx-auto" />
        <h1 className="text-3xl font-bold my-[40px]">How the app works</h1>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <div>
            <Image src={Image1} alt="Image direction" />
          </div>
          <div className="w-[561px]">
            <h3 className="text-[#FA4A0C] font-bold text-3xl my-8">
              Create an account
            </h3>
            <h2 className="text-5xl text-[#252B42] font-bold my-5 leading-[60px]">
              Create/Login to an existing account to get started
            </h2>
            <p className="text-2xl text-[#737373] w-[400px]">
              An account is created with your email and a desired password
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[561px]">
            <h3 className="text-[#FA4A0C] font-bold text-3xl my-8">
              Explore varieties
            </h3>
            <h2 className="text-5xl text-[#252B42] font-bold my-5 leading-[60px]">
              Shop for your favorites meal as e dey hot.
            </h2>
            <p className="text-2xl text-[#737373] w-[400px]">
              Shop for your favorite meals or drinks and enjoy while doing it.
            </p>
          </div>
          <div>
            <Image src={Image2} alt="Image direction" />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div>
            <Image src={Image3} alt="Image direction" />
          </div>
          <div className="w-[561px]">
            <h3 className="text-[#FA4A0C] font-bold text-3xl my-8">Checkout</h3>
            <h2 className="text-5xl text-[#252B42] font-bold my-5 leading-[60px]">
              When you done check out and get it delivered.
            </h2>
            <p className="text-2xl text-[#737373] w-[400px]">
              When you done check out and get it delivered with ease.
            </p>
          </div>
        </div>
      </div>

      {/* end */}
    </div>
  );
};

export default SubHero;
