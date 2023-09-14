import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="col-md-6  mt-3 ">
        <h2 className=" d-inline ps-2">
          {props.data}
          °C |
          <a href="" className="text-decoration-none" onClick={showFahrenheit}>
            °F
          </a>
        </h2>
      </div>
    );
  } else {
    let fahrenheit = (props.data * 9) / 5 + 32;
    return (
      <div className="col-md-6  mt-3 ">
        <h2 className=" d-inline ps-2">
          {Math.round(fahrenheit)}
          <a href="" className="text-decoration-none" onClick={showCelsius}>
            °C
          </a>
          | °F
        </h2>
      </div>
    );
  }
}
