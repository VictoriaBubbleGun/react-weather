import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function ForecastDay(props) {
  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col text-center">
          <div className="WeatherForcast-day">Thu</div>
          <div className="WeatherForcast-icon">
            <img src={props.data.icon} alt={props.data.condition} />
          </div>
          <div className="WeatherForcast-temperatures">
            <span className="WeatherForcast-temperature-max text-secondary-emphasis">
              {props.data.temperatureMax} °
            </span>{" "}
            |{" "}
            <span className="WeatherForcast-temperature-min text-dark-emphasis">
              {props.data.temperatureMin} °
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
