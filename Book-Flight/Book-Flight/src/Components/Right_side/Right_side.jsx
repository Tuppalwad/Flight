import React, { useContext } from "react";
import "./right_side.css";
import { MdOutlineMenu } from "react-icons/md";
import { useContext } from "react";
import AppContext from "../../Context/CreateContext";
const AirlinePage = () => {
  const { setFilter } = useContext(AppContext);

  const hidethepage = () => {
    const airlinepage = document.getElementById("airline__page");
    airlinepage.style.display = "none";
  };

  return (
    <div className="train_main_page" id="airline__page">
      <div className="train_filter">
        <MdOutlineMenu className="airline__icon" />
      </div>
      <h3 className="filters">F I L T E R S</h3>
      <div className="bottom__infoairline">
        <span className="check__lowest">check Nearby dates</span>
        <div className="month__Maininfo">
          <span className="month__info">MARCH 28</span>
          <span className="month__info month__info2">MARCH 29</span>
          <span className="month__info">MARCH 30</span>
        </div>

        <div className="last__bottom"></div>
        <div className="A_time">
          <div className="arival_time">
            <span className="ar_time">Arival time</span>
            <p>Morining</p>
            <p>Noon</p>
            <p>Evening</p>
            <p>Night</p>
          </div>
          <div className="departure_time">
            <span className="dr_time">Departure time</span>
            <p>Morining</p>
            <p>Noon</p>
            <p>Evening</p>
            <p>Night</p>
          </div>
        </div>

        <div className="last__bottom"></div>
        <div className="checkbox__airline">
          <p className="railway">Railways</p>
          <div>
            <input
              type="checkbox"
              id="check1"
              name="check1"
              value="SHATABDI"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />
            <label for="check1">SHATABDI</label>
          </div>
          <div>
            <input type="checkbox" id="check1" name="check2" value="check1" />
            <label for="check2">RAJDHANI</label>
          </div>
          <div>
            <input type="checkbox" id="check1" name="check3" value="check1" />
            <label for="check3">GARIBRATH</label>
          </div>
          <div>
            <input type="checkbox" id="check1" name="check4" value="check1" />
            <label for="check4">SPECIAL TRAINS</label>
          </div>
          <div>
            <input type="checkbox" id="check1" name="check5" value="check1" />
            <label for="check5">OTHERS</label>
          </div>
        </div>
        <div className="last__bottom"></div>

        <div className="appartment">
          <div className="sleeper">
            <input type="checkbox" id="check1" name="check4" value="check1" />
            <label for="check4">1AC</label>
            <input type="checkbox" id="check1" name="check4" value="check1" />
            <label for="check4">Sleeper</label>
          </div>
          <div className="general">
            <input type="checkbox" id="check1" name="check4" value="check1" />
            <label for="check4">2AC</label>
            <input type="checkbox" id="check1" name="check4" value="check1" />
            <label for="check4">General</label>
          </div>
          <div className="chair">
            <input type="checkbox" id="check1" name="check4" value="check1" />
            <label for="check4">3AC</label>
            <input type="checkbox" id="check1" name="check4" value="check1" />
            <label for="check4">Chair car</label>
          </div>
        </div>
      </div>
      <button className="for__mobileBtn" onClick={hidethepage}>
        Close
      </button>
    </div>
  );
};

export default AirlinePage;
