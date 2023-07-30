import React from "react";

import "./Forecast.css";

export default function Forecast() {
  const forecast = [
    { day: "Sun", icon: "🌤", max: 18, min: 12 },
    { day: "Mon", icon: "🤡", max: 23, min: 16 },
    { day: "Tue", icon: "🔎", max: 24, min: 15 },
    { day: "Wed", icon: "🙃", max: 17, min: 11 },
    { day: "Thr", icon: "🐼", max: 33, min: 20 },
  ];

  return (
    <div className="Forecast">
      {forecast.map((day, index) => {
        return (
          <div key={index} className="day-container">
            <div className="day-label">
              <span>{day.day}</span>
            </div>
            <div className="icon-label">
              <span>{day.icon}</span>
            </div>
            <div className="min-max-container">
              <span>{day.min}</span>
              <span>{day.max}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
