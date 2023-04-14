import React, { useContext } from "react";
import UpperSide from "./Upper_Side/Upper_Side";
import Rightside from "./Right_side/Right_Side";
import "./showdata.css";

function ShowData() {
  return (
    <div className="show">
      <UpperSide />
      <Rightside />
    </div>
  );
}

export default ShowData;
