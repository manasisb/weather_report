import React from "react";
import City from "./city.js";

function WeatherApp() {
  var dt = new Date().toLocaleString();

  return (
    <div>
      <p>Today's Date is - {dt}</p>
      <div>
        <City />
      </div>
    </div>
  );
}

export default WeatherApp;
