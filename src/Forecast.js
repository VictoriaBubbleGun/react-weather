import React, { useState } from "react";
import axios from "axios";
import Loader from "./loader";
import ForecastDay from "./forecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecastData({
      temperatureMax: Math.round(response.data.daily[0].temperature.maximum),
      temperatureMin: Math.round(response.data.daily[0].temperature.minimum),
      icon: response.data.daily[0].condition.icon_url,
      condition: response.data.daily[0].condition.icon,
    });
    console.log(response);
  }

  function forecastApiCall() {
    const apiKey = "c6415ot471311fe21b9018d4f7a3003e";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return <ForecastDay data={forecastData} />;
  } else {
    forecastApiCall();
    return <Loader />;
  }
}
