import React from "react";
import logo from "./imgs/Asset 1@4x-8.png";
import Rectangle from "./imgs/Rectangle 14.png";
import "./home.css";

const home = () => {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col">
            <img id="logo" src={logo} />
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col">Download</div>
              <div class="col">Contact us</div>
              <div class="col">About us</div>
            </div>
          </div>
          <div class="col">
            <img id="ar" src={Rectangle} />
          </div>
        </div>
      </div>
    </>
  )
}

export default home;
