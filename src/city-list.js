import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./CityList.css";

export default function CityList() {
  return (
    <div className="container m-5 shadow p-3 mb-5 bg-body-tertiary rounded w-auto">
      <div className="row">
        <div className="col-md-6 text-center mt-3">
          <h1 className="fs-2 pe-3 d-inline ">Berlin, Germany</h1>
          <div className="row justifiy-content-evenly">
            <div className="col-md-6  mt-3 ">
              <h2 className="temperature d-inline ps-2">17°C | F</h2>
            </div>
            <div className="col-md-6  mt-3">
              <ul className="text-secondary">
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
                <li>Humidity: 72%</li>
                <li>Wind: 5 km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <form className="form">
            <input
              type="search"
              className="form-control search"
              id="city"
              placeholder="Enter your City"
              autoFocus="on"
            />
            <input type="submit" className="btn btn-primary" value="Search" />
          </form>
          <img
            className="img-fluid w-25 mx-auto d-block"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
        </div>
      </div>
    </div>
  );
}
