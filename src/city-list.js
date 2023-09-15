import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./CityList.css";
import Temperature from "./temperture";
import Forecast from "./Forecast";
import Loader from "./loader";

export default function CityList(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      country: response.data.country,
      icon_url: response.data.condition.icon_url,
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "c6415ot471311fe21b9018d4f7a3003e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="d-flex justify-content-center">
        <div className="container w-75 m-5 shadow-lg p-3 mb-5  bg-danger bg-opacity-25 rounded">
          <div className="row">
            <div className="col-md-6 text-center mt-3">
              <h1 className="fs-2 pe-3 d-inline ">
                {weatherData.city}, {weatherData.country}
              </h1>
              <div className="row d-flex justifiy-content-center ">
                <div className="col-md-6  mt-5 ">
                  <Temperature data={weatherData.temperature} />
                </div>
                <div className="col-md-6  mt-3">
                  <ul className="text-danger-emphasis">
                    <li>
                      <FormattedDate date={weatherData.date} />
                    </li>
                    <li className="text-capitalize">
                      {weatherData.description}
                    </li>
                    <li>Humidity: {weatherData.humidity}% </li>
                    <li>Wind: {weatherData.wind}km/h </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="search"
                  className="form-control search"
                  placeholder="Enter your City"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <input
                  type="submit"
                  className="btn danger-emphasis"
                  value="Search"
                />
              </form>
              <img
                className="img-fluid w-50 mx-auto d-block icon"
                src={weatherData.icon_url}
                alt={weatherData.icon}
              />
            </div>
          </div>
          <div className="row">
            <Forecast city={weatherData.city} />
          </div>
        </div>{" "}
      </div>
    );
  } else {
    search();
    return <Loader />;
  }
}
