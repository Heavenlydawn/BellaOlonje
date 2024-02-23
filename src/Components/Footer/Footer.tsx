import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="w-[860px] mx-auto text-white py-[100px]">
        <div className="text-center">
          <h3 className="text-3xl font-bold my-5">Download the app now.</h3>
          <p className="text-xl ">
            Available on your favorite store. Start your premium experience now
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center my-8 sm:my-12 lg:my-16 ">
          <button className="py-3 sm:py-4 px-5 sm:px-6 text-xl sm:text-2xl font-semibold bg-[#FA4A0C] w-full sm:w-[236px] rounded-[10px]">
            Playstore
          </button>
          <button className="py-3 sm:py-4 px-5 sm:px-6 text-xl sm:text-2xl font-semibold border-white border-2 w-full sm:w-[236px] rounded-[10px] mt-4 sm:mt-0">
            App store
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
