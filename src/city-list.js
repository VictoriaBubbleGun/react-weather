import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./CityList.css";
import { ColorRing } from "react-loader-spinner";
import Temperature from "./temperture";

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
      <div className=" d-flex justify-content-center">
        <div className="container w-75 m-5 shadow-lg p-3 mb-5 bg-danger-subtle rounded">
          <div className="row">
            <div className="col-md-6 text-center mt-3">
              <h1 className="fs-2 pe-3 d-inline ">
                {weatherData.city}, {weatherData.country}
              </h1>
              <div className="row justifiy-content-evenly">
                <Temperature data={weatherData.temperature} />
                <div className="col-md-6  mt-3">
                  <ul className="text-secondary">
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
                <input type="submit" className="btn btn-primary" />
              </form>
              <img
                className="img-fluid w-25 mx-auto d-block"
                src={weatherData.icon_url}
                alt={weatherData.icon}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="container text-center mt-5">
        <ColorRing
          className="img-fluid"
          visible={true}
          height="300"
          width="300"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }
}
