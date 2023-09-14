import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CityList.css";
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
      <h2 className=" d-inline ps-2">
        {props.data}
        °C |
        <a
          href=""
          className="text-decoration-none link"
          onClick={showFahrenheit}
        >
          °F
        </a>
      </h2>
    );
  } else {
    let fahrenheit = (props.data * 9) / 5 + 32;
    return (
      <h2 className=" d-inline ps-2">
        {Math.round(fahrenheit)}
        <a href="" className="text-decoration-none link" onClick={showCelsius}>
          °C
        </a>
        | °F
      </h2>
    );
  }
}
