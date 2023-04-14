import React from "react";
import { useContext } from "react";
import AppContext from "../Context/CreateContext";
function Test() {
  const { from, to, date, passengerclass, type } = useContext(AppContext);

  return (
    <div>
      <h1>Test</h1>
      <h1>{from}</h1>
      <h1>{to}</h1>
      <h1>{date}</h1>
      <h1>{passengerclass}</h1>
      <h1>{type}</h1>
    </div>
  );
}

export default Test;
