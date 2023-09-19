import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function ForecastDay(props) {
  const [dailyData, setDailyData] = useState({
    temperatureMax: 0,
    temperatureMin: 0,
    icon: "",
    condition: "",
    date: null,
  });

  useEffect(() => {
    const date = new Date(props.data.time * 1000);
    setDailyData({
      temperatureMax: Math.round(props.data.temperature.maximum),
      temperatureMin: Math.round(props.data.temperature.minimum),
      icon: props.data.condition.icon_url,
      condition: props.data.condition.icon,
      date,
    });
  }, [props.data]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = dailyData.date ? days[dailyData.date.getDay()] : "";

  return (
    <div className=" text-center">
      <div className="WeatherForecast-day text-danger-emphasis">{day}</div>
      <div className="WeatherForecast-icon">
        <img src={dailyData.icon} alt={dailyData.condition} />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max text-secondary-emphasis">
          {dailyData.temperatureMax} °
        </span>{" "}
        |{" "}
        <span className="WeatherForecast-temperature-min text-dark-emphasis">
          {dailyData.temperatureMin} °
        </span>
      </div>
    </div>
  );
}
