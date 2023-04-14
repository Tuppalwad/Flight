import { useContext } from "react";
import AppContext from "../Context/CreateContext";
import React from "react";
import { FiGlobe, FiPower } from "react-icons/fi";
import { SlPlane } from "react-icons/sl";
import { MdOutlineTrain } from "react-icons/md";
import { ImHome2 } from "react-icons/im";
import Logo from "../assets/ts-logo.png";
import InputField from "./InputField/InputField";
import { useQuery } from "@apollo/client";
import { FLIGHT_PAGE_QUERY } from "../Graphql/Queries";
import { useNavigate } from "react-router-dom";
export const BookFlight = () => {
  const { data, loading, error } = useQuery(FLIGHT_PAGE_QUERY);
  const [from, setfrom] = React.useState("");
  const [to, setto] = React.useState("");
  const [date, setdate] = React.useState("");
  const [passengersClass, setpassengersClass] = React.useState("");
  const [type, settype] = React.useState("");
  const { setFrom, setTo, setDate, setPassengersClass, setType, filter } =
    useContext(AppContext);
  console.log("ddkkkdkkdkk");
  console.log(filter);
  const navigate = useNavigate();
  const gotoflight = () => {
    setFrom(from);
    setTo(to);
    setDate(date);
    setPassengersClass(passengersClass);
    setType(type);
    navigate("/flight");
  };

  const handalsumbit = (e) => {
    e.preventDefault();
  };

  if (error) {
    return <div>error...</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  console.log(data);
  return (
    <div className="min-h-screen bg-color1 w-[100%]">
      <div className="mt-4 ml-7 w-28 h-28">
        <img src={Logo} className="w-full" />
      </div>
      <main className="w-[90%] mx-auto mt-20 px-10 ">
        <div className="flex gap-2 justify-between flex-col md:flex-row mb-2 md:mb-6">
          <div className="text-[2rem]  opacity-50">
            <span>Book</span>
            <span className=" font ">flight</span>{" "}
            <span>
              <SlPlane className=" inline-block text-color4 " />
            </span>
          </div>

          <div className="text-[2rem]">
            <span>Book</span>
            <span className=" font font-bold">train</span>
            <span>
              <MdOutlineTrain className=" inline-block text-color4 " />
            </span>
          </div>
          <div className="text-[2rem] opacity-50">
            <span>Book</span>
            <span className="font-bold">stay</span>
            <span>
              <ImHome2 className=" inline-block text-color4 " />
            </span>
          </div>
        </div>
        <form
          onSubmit={handalsumbit}
          className="flex flex-col  font-bold gap-2  "
        >
          {/* <InputField
            label="From"
            type="text"
            name="From"
            placeholder=""
            list="arrival"
            Icon={FiGlobe}
            autoComplete="off"
            onChange={(e) => setfrom(e.target.value)}
          /> */}
          <div className="flex items-center relative w-full">
            <input
              className={` block bg-color6 py-2 px-4 outline-none w-full  placeholder:text-color3 `}
              type={type}
              onChange={(e) => setfrom(e.target.value)}
            />
            <span className="font-light border-l-2 border-black absolute right-1 pl-1 ">
              {!FiGlobe ? <></> : <FiGlobe size={25} />}
            </span>
          </div>
          <datalist id="arrival">
            {data.flight.map((flight) => (
              <option value={flight.from}>{flight.from}</option>
            ))}
          </datalist>
          <label className="text-color3">
            To
            <input
              className=" block bg-color6 py-2 px-4 outline-none w-full placeholder:text-color3"
              type="text"
              name="to"
              id="to"
              list="departure"
              autoComplete="off"
              onChange={(e) => setto(e.target.value)}
            />
            <datalist id="departure">
              {data.flight.map((flight) => (
                <option value={flight.to}>{flight.to}</option>
              ))}
            </datalist>
          </label>
          <div className="flex gap-3 md:flex-row flex-col justify-between">
            <label className=" w-full text-color3">
              Date
              <input
                className="block  bg-color6 py-[7px] px-4 outline-none w-full placeholder:text-color3 "
                type="datetime-local"
                name="date"
                id="date"
                onChange={(e) => setdate(e.target.value)}
              />
            </label>
            <label className="w-full text-color3">
              Passenger.Class
              <select
                className="block  bg-color6 py-[11px] px-4 outline-none w-full placeholder:text-color3 "
                name="date"
                id="class"
                onChange={(e) => setpassengersClass(e.target.value)}
              >
                <option value="">----</option>
                {data.flight.map((flight) => (
                  <option value={flight.passengersClass}>
                    {flight.passengersClass}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-2  text-color3 ">
            <div className="mb-2 flex gap-1 flex-wrap">
              <label>
                <input
                  type="radio"
                  name="radio-button"
                  className="mr-1"
                  id=""
                  onChange={(e) => settype(e.target.value)}
                />
                One Way
              </label>
              <label>
                <input
                  type="radio"
                  name="radio-button"
                  className="mr-1"
                  id=""
                  onChange={(e) => settype(e.target.value)}
                />
                Round Tip
              </label>
            </div>
          </div>

          <button
            onClick={gotoflight}
            className="bg-color4 rounded-3xl w-min px-12 py-2 font-bold text-color1 mt-5"
          >
            Search
          </button>
        </form>
      </main>
    </div>
  );
};
