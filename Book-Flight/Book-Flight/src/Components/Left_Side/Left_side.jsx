import React, { useEffect } from "react";
import "./left_side.css";
import arrow from "./line.png";
import { useContext } from "react";
import AppContext from "../../Context/CreateContext";
const FlightList = () => {
  const { flight, from, to, date, passengerclass, type } =
    useContext(AppContext);
  const [flightdata, setFlightdata] = React.useState([]);
  useEffect(() => {
    var y = [];
    flight.filter((item) => {
      if (item.from === from && item.to === to) {
        y.push(item);
      }
    });
    setFlightdata(y);
  }, []);
  console.log(flight, from, to);
  console.log(flightdata);
  return (
    <div className="book__flightList ml-10 border-l-4 border-gray-300 mt-6 ">
      {flightdata.map((item) => {
        return (
          <>
            <div className="for__mobile flex">
              <div className="heading_for_flight  flex pb-2 ml-2">
                <span className="for_state_name  text-zabal-bold text-base pl-5 text-gray-700">
                  {" "}
                  {item.from}
                </span>
                <p className="one_to_5 text-zabal-light text-base pl-25 text-gray-800">
                  {item.No}
                </p>
                <p className="deprt text-zabal-light text-base font-semibold pl-25 text-gray-800">
                  Departs{" "}
                </p>
                <p className="days_name text-zabal-light text-base font-light pl-5 text-gray-800">
                  {item.Depart}
                </p>
                <p className="date text-zabal-light text-base font-semibold pl-25 text-gray-600">
                  {item.Date}
                </p>
              </div>
            </div>
            <span className="child__flightlist  flex bg-gray-300 pb-20 pl-10 mb-10 pt-14 w-85">
              <div className="for__mobile flex">
                <div className="time_for_state text-zabal-light text-base font-semibold pl-25 text-gray-600 flex flex-col ">
                  <p>
                    {item.deperttime}
                    <span className="letter text-zabal-bold text-gray-700">
                      PM
                    </span>
                  </p>{" "}
                  <span className="state_name">New delhi(NDLS)</span>
                </div>
                <img
                  src={arrow}
                  alt=""
                  className="arrow__icons w-35 h-27 ml-20"
                />

                <div className="time_for_flight text-zabal-light text-base font-semibold pl-5 text-gray-800 flex flex-col">
                  {item.timeRequid()}
                  <span className="route_details text-zabal-italic w-127 font-semibold text-gray-600 pt-6">
                    Route details
                  </span>
                </div>
                <img
                  src={arrow}
                  alt=""
                  className="arrow__right w-35 h-27 -ml-15 "
                />
              </div>

              <div className="for__mobile for__mobile2">
                <div className="time_for_state text-zabal-light text-base font-semibold pl-25 text-gray-600 flex flex-col">
                  <p>
                    {item.arrivaltime}
                    <span className="letter text-zabal-bold text-gray-700">
                      PM
                    </span>
                    ,Wed
                  </p>{" "}
                  <span className="state_name">{item.to}</span>
                </div>
                {/* <div className="availability font-zabal-light text-base pl-25 font-semibold text-gray-600">
                  {item.class.map((item) => {
                    return (
                      <p className="para1 bg-gray-600">
                        {item.class} Available {item.seat}{" "}
                        <span className="price_number">RS: {item.price}</span>
                      </p>
                    );
                  })}
                </div> */}
              </div>
            </span>
          </>
        );
      })}
    </div>
  );
};

export default FlightList;
