import React from "react";
import FlightList from "../Left_Side/Left_side";
import "./Upper_Side.css";
import tripologo from "./ts-logo.png";
import { GiAirplaneDeparture } from "react-icons/gi";
import { BsFillTrainFrontFill } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";

import "../Right_side/right_side.css";

const FlightPage = () => {
  const hidethepage = () => {
    const airlinepage = document.getElementById("airline__page");
    airlinepage.style.display = "block";
  };
  return (
    <div className="flight__page">
      <img src={tripologo} alt="" className="ts__logo" />

      <div className="book__flight">
        <span className="book">
          Book{" "}
          <span className="flight">
            flight
            <GiAirplaneDeparture className="icons_for_flight" />
          </span>
        </span>
        <span className="book train">
          Book{" "}
          <span className="flight">
            train
            <BsFillTrainFrontFill className="for_train" />
          </span>
        </span>
        <span className="book">
          Book{" "}
          <span className="flight">
            stay
            <FaHouseUser className="icons_for_flight" />
          </span>
        </span>
      </div>

      <div>
        <FlightList />
      </div>
      <button className="for__mobileBtn" onClick={hidethepage}>
        Show More Info About Airline
      </button>
    </div>
  );
};

export default FlightPage;
