import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import Bag2 from "../../src/assets/Bag2.png";
const Task = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3">
          <div class="form-input">
            <input id="origin" type="text" placeholder="Enter Location" />
            <label for="origin">Origin</label>
            <span className="icons">
              <FaLocationDot />
            </span>
          </div>
        </div>
        <div className="col-lg-3">
        <div class="form-input">
            <input id="destination" type="text" placeholder="Enter Destination" />
            <label for="destination">Destination</label>
            <span className="icons">
              <FaLocationDot />
            </span>
          </div>
        </div>
        <div className="col-lg-3">
        <div class="form-input">
            <input id="weight" type="text" placeholder="Weight (KG)" />
            <label for="weight">Weight (KG)</label>
            <span className="icons">
              <img src={Bag2}/>
            </span>
          </div>
        </div>
        <div className="col-lg-3">
          <div>
            <button className="pricebtn">Check Price</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
