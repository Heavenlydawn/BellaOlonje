import React from 'react'

const ButtonHero = () => {
  return (
    <div>
         <div className="flex flex-col sm:flex-row items-center gap-4 justify-center my-8 sm:my-12 lg:my-16">
          <button className="py-3 sm:py-4 px-5 sm:px-6 text-xl sm:text-2xl font-semibold bg-[#FA4A0C] w-full sm:w-[236px] rounded-[20px] outline-none">
            Playstore
          </button>
          <button className="py-3 sm:py-4 px-5 sm:px-6 text-xl sm:text-2xl font-semibold border-white border-2 w-full sm:w-[236px] rounded-[20px] mt-4 sm:mt-0 outline-none">
            App store
          </button>
        </div>
    </div>
  )
}

export default ButtonHero