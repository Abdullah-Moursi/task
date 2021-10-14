import React from "react";
import "./mob.css";
import mo1 from "./imgs/mo1 1.png";

const Mob = () => {
  return (
    <div className="container">
      <div class="row">
        <div id="wel" class="col">
        
            <h1>
                welcome to KRAFTOPPIA 
                </h1> 
                <h5>
                    The first market app in Egypt
                </h5>
             </div>
        <div class="col">
          <img id="mo1" src={mo1} />
        </div>
      </div>
    </div>
  );
};

export default Mob;
