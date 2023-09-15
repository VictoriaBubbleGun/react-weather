import React from "react";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "c6415ot471311fe21b9018d4f7a3003e";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col text-center">
          <div className="WeatherForcast-day">Thu</div>
          <div className="WeatherForcast-icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy"
            />
          </div>
          <div className="WeatherForcast-temperatures">
            <span className="WeatherForcast-temperature-max text-secondary-emphasis">
              19°
            </span>{" "}
            |{" "}
            <span className="WeatherForcast-temperature-min text-dark-emphasis">
              10°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
