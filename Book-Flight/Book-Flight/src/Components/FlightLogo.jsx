import React from "react";
import PlaneLogo from "../assets/Plane-icon.png";
import { RxHamburgerMenu } from "react-icons/rx";
export const FlightLogo = () => {
  return (
    <div className="bg-color3 w-[35%] p-4 hidden lg:block">
      <div>
        <RxHamburgerMenu className=" cursor-pointer fixed right-4 top-4 md:right-10 md:top-10 md:text-4xl text-color4" />
      </div>
      <h2 className="text-color1 mt-[30vh] text-xl">
        <div className="">WHERE WOULD YOU</div>
        <div className="font-bold">LIKE TO GO?</div>
      </h2>
      <div className="relative right-20">
        <img src={PlaneLogo} />
      </div>
    </div>
  );
};
