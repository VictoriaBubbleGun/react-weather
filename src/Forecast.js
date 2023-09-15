import React, { useState } from "react";
import axios from "axios";
import Loader from "./loader";
import ForecastDay from "./forecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  function forecastApiCall() {
    const apiKey = "c6415ot471311fe21b9018d4f7a3003e";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <ForecastDay data={forecastData[0]} />
          <ForecastDay data={forecastData[1]} />
        </div>
      </div>
    );
  } else {
    forecastApiCall();
    return <Loader />;
  }
}
