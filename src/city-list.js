import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CityList.css";
export default function CityList() {
  return (
    <div className="container m-5 shadow p-3 mb-5 bg-body-tertiary rounded w-auto">
      <div className="row">
        <div className="col-md-6 text-center">
          <h1 className="fs-2 pe-3 d-inline">Berlin, Germany</h1>
          <h2 className=" d-inline">17°C</h2>
          <div className="row">
            <div className="col-md-6 justify-content-center p-3 mt-3">
              <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
              </ul>
            </div>
            <div className="col-md-6 justify-content-center p-3 mt-3">
              <ul>
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
            />
            <input type="submit" className="btn btn-primary" value="Search" />
          </form>
          <img
            className="img-fluid w-50 mx-auto d-block"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
        </div>
      </div>
    </div>
  );
}
