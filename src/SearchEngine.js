import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./SearchEngine.css";
import Forecast from "./Forecast";
import Loader from "./loader";
import CurrentWeather from "./currentWeather";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
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
            <CurrentWeather
              data={weatherData}
              icon={weatherData.icon_url}
              icon_
              alt={weatherData.icon}
            />
            <div className="col-md-6">
              <form className="form" onSubmit={handleSubmit} name="search">
                <input
                  type="search"
                  className="form-control search"
                  placeholder="Enter your City"
                  autoFocus="on"
                  onChange={handleCityChange}
                  name="city"
                />
                <input
                  type="submit"
                  className="btn danger-emphasis"
                  value="Search"
                  name="submit"
                />
              </form>
              <img
                className="img-fluid w-50 mx-auto d-block icon d-none d-md-block"
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
