import React from "react";
import "./Forecast.css";

import WeatherIcon from "./WeatherIcon";


export default function ForecastDay(props) {
    function maxTemperature() {
      let temperature = Math.round(props.data.temp.max);
      return `${temperature}º`;
    }

    function minTemperature() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}º`;
    }

    function day() {
      let date = new Date(props.data.dt * 1000);
      let day = date.getDay();
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[day];
    }
  return (
    <div className="day-container">
      <div className="icon-label">
        <span>
          <WeatherIcon icon={props.data.weather[0].icon} size={20} />
        </span>
      </div>
      <div className="day-label">
        <span>{day()}</span>
      </div>
      <div className="min-max-container">
        <span className="max-cointainer">{maxTemperature()}</span>
        <span>{minTemperature()}</span>
      </div>
    </div>
  );
}