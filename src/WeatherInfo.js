import React from "react";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-container">
        <div>
          <span className="city-label">{props.data.city}</span>
        </div>
        <div className="info-container">
          <div className="weather-description">
            <span>{props.data.description}</span>
          </div>
          <div className="humidity-wind-container">
            <span className="humidity">Humidity: {props.data.humidity}%</span>
            <span className="wind">
              Wind: {props.data.wind} {props.unit === "metric" && "k"}m/h
            </span>
          </div>
        </div>
      </div>
      <div className="temperature-container">
        <div className="icon">
          <WeatherIcon
            icon={props.data.icon}
            size={46}
            alt={props.data.description}
          />
        </div>
        <div className="temperature-number">
          <UnitConversion
            temperature={props.data.temperature}
            unit={props.unit}
            setUnit={props.setUnit}
          />
        </div>
      </div>
    </div>
  );
}
