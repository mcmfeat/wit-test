import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="city-container">
        <div>
          <span className="city-label">Coimbra</span>
        </div>
        <div className="info-container">
          <div className="weather-description">
            <span>Sunny</span>
          </div>
          <div className="humidity-wind-container">
            <span className="humidity">Humidity: 80%</span>
            <span className="wind">Wind: 5 km/h</span>
          </div>
        </div>
      </div>
      <div className="temperature-container">
        <div className="icon">🌤</div>
        <div className="temperature-number">
          <span className="temperature">28</span>
          <span className="temperature-unit">ºC | ºF</span>
        </div>
   
      </div>
    </div>
  );
}
