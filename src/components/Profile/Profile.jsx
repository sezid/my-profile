import React from "react";
import { assets } from "../../assets/images";

const Profile = () => {
  return (
    <div className="flex justify-center mt-20 items-center">
      <div className="flex items-center justify-center gap-2 flex-col md:flex md:flex-row md:items-center md:gap-7 md:mb-40 md:w-[900px] md:justify-center md:mt-20">
        <img
          className="rounded-[10px] w-[150px] md:w-1/4"
          src={assets.headshot}
          alt=""
        />
        <div className="md:w-[2px] md:h-[220px] md:bg-gray-300 md:mx-2"></div>
        <div className="hidden md:flex text-center w-[150px] text-[11px] md:w-1/2 font-poppins md:text-[23px] md:text-left">
          <p>
            As a recent Computer Science graduate, I am deeply passionate about
            leveraging both data science and AI, as well as software
            development, to solve real-world problems and make a meaningful
            impact.
          </p>
        </div>
        <div className="sm:flex items-center text-center w-[200px] text-[11px] font-poppins md:hidden">
          <h1 className="font-bold">Syed Saleh Mohammad Sajid</h1>
          <h3 className="font-medium text-[7px]">
            {" "}
            IT Project Analyst, LIIA Smart Inc
          </h3>
          <h3 className="font-medium text-[7px]">Dhaka, Bangladesh</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
