import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./temperture";
import "./currentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="col-md-6 text-center mt-3">
      <h1 className="fs-2 pe-3 d-inline ">
        {props.data.city}, {props.data.country}
      </h1>
      <div className="col-md-6  mt-2 d-md-none ">
        <img
          className="img-fluid w-50 mx-auto d-block icon "
          src={props.icon}
          alt={props.icon_alt}
        />
      </div>
      <div className="row d-flex justifiy-content-center ">
        <div className="col-md-6  mt-5 temp">
          <Temperature data={props.data.temperature} />
        </div>
        <div className="col-md-6  mt-3 text-center">
          <ul className="text-danger-emphasis data ">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind: {props.data.wind}km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
