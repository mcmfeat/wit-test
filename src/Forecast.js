import React from "react";
import ForecastDay from "./ForecastDay";

import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
        {props.forecastData.map((dailyForecast, index) => {
          if (index < 5) {
            return (
              <div key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
}
