import React from "react";

//images import
import vegetableImage from "../images/vegetables.png";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="container">
            <img src={vegetableImage} alt="" className="vegetableImage" />
            <h1>Swiss seasonality calender</h1>
      </div>
    </div>
  );
}
