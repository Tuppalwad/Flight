import React from "react";
import AppContext from "./CreateContext";

function Dataporvider(props) {
  const flight = [
    {
      Name: "rajdhani",
      No: 12345,
      Depart: "SMTWFS",
      Date: "01/01/2021",
      from: "Pune",
      to: "Mumbai",
      deperttime: "10:00",
      arrivaltime: "12:00",
      timeRequid: function () {
        return this.arrivaltime - this.deperttime;
      },
      class: {
        1: "3A Available123",
        2: "2A Available123",
        3: "1A Available123",
      },
    },
    {
      Name: "rajdhani",
      No: 12345,
      Depart: "SMTWFS",
      Date: "01/01/2021",
      from: "Pune",
      to: "Mumbai",
      deperttime: "10:00",
      arrivaltime: "12:00",
      timeRequid: function () {
        return this.arrivaltime - this.deperttime;
      },
      class: [
        {
          1: "3A Available123",
          2: "2A Available123",
          3: "1A Available123",
        },
      ],
    },
    {
      Name: "rajdhani",
      No: 12345,
      Depart: "SMTWFS",
      Date: "01/01/2021",
      from: "Pune",
      to: "Nagpur",
      deperttime: "12:00",
      arrivaltime: "13:00",
      timeRequid: function () {
        return this.arrivaltime - this.deperttime;
      },
      class: {
        1: "3A Available123",
        2: "2A Available123",
        3: "1A Available123",
      },
    },
  ];

  const [filter, setFilter] = React.useState([]);
  const [from, setFrom] = React.useState();
  const [to, setTo] = React.useState();
  const [date, setDate] = React.useState();
  const [passengerclass, setPassengersClass] = React.useState("");
  const [type, setType] = React.useState("");

  return (
    <AppContext.Provider
      value={{
        flight,
        date,
        setDate,
        from,
        setFrom,
        to,
        setTo,
        passengerclass,
        setPassengersClass,
        type,
        setType,
        filter,
        setFilter,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default Dataporvider;
